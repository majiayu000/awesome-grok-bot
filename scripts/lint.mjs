#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const entrySchema = JSON.parse(readFileSync(join(root, "schema", "entry.schema.json"), "utf8"));
const CATEGORY_META = {
  "coding-shipping": { heading: "Coding & shipping", anchor: "coding--shipping" },
  "inbox-calendar": { heading: "Inbox & calendar", anchor: "inbox--calendar" },
  "research-briefings": { heading: "Research & briefings", anchor: "research--briefings" },
  "customer-sales": { heading: "Customer & sales", anchor: "customer--sales" },
  "finance-ops": { heading: "Finance & ops", anchor: "finance--ops" },
  "content-publishing": { heading: "Content & publishing", anchor: "content--publishing" },
  "personal-admin": { heading: "Personal admin", anchor: "personal-admin" },
  "teams-handoffs": { heading: "Teams & handoffs", anchor: "teams--handoffs" },
};
for (const category of entrySchema.properties.category.enum) {
  if (!CATEGORY_META[category]) throw new Error(`Missing README metadata for category: ${category}`);
}
const SECRET_RES = [
  /ghp_[A-Za-z0-9]{20,}/,
  /sk-[A-Za-z0-9]{20,}/,
  /AKIA[0-9A-Z]{16}/,
  /xox[baprs]-/,
  /api[_-]?key\s*=/i,
];
const PRIVATE_HOST = /\b(localhost|127\.0\.0\.1|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+)\b/i;
function fail(msg) {
  console.error(msg);
  process.exit(1);
}

function validateSchema(value, schema, label) {
  const actualType = Array.isArray(value) ? "array" : value === null ? "null" : typeof value;
  if (schema.type && actualType !== schema.type) {
    fail(`${label}: expected ${schema.type}, got ${actualType}`);
  }
  if (schema.enum && !schema.enum.includes(value)) {
    fail(`${label}: must be one of ${schema.enum.join(", ")}`);
  }
  if (typeof value === "string") {
    if (schema.minLength != null && value.length < schema.minLength) fail(`${label}: too short`);
    if (schema.maxLength != null && value.length > schema.maxLength) fail(`${label}: too long`);
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) fail(`${label}: bad format`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems != null && value.length < schema.minItems) fail(`${label}: too few items`);
    if (schema.maxItems != null && value.length > schema.maxItems) fail(`${label}: too many items`);
    if (schema.items) value.forEach((item, index) => validateSchema(item, schema.items, `${label}[${index}]`));
  }
  if (actualType === "object") {
    for (const key of schema.required || []) {
      if (!(key in value)) fail(`${label}: missing ${key}`);
    }
    if (schema.additionalProperties === false) {
      for (const key of Object.keys(value)) {
        if (!(key in (schema.properties || {}))) fail(`${label}: unexpected ${key}`);
      }
    }
    for (const [key, child] of Object.entries(schema.properties || {})) {
      if (key in value) validateSchema(value[key], child, `${label}.${key}`);
    }
  }
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    fail(`${path}: ${err.message}`);
  }
}

function scanSecrets(label, text) {
  for (const re of SECRET_RES) {
    if (re.test(text)) fail(`${label}: secret-like string (${re})`);
  }
  if (PRIVATE_HOST.test(text)) fail(`${label}: private host`);
}

function walkFiles(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) walkFiles(path, acc);
    else acc.push(path);
  }
  return acc;
}

function checkEntry(entry, label) {
  validateSchema(entry, entrySchema, label);
  for (const urlField of ["import", "demo", "source", "related"]) {
    const value = entry[urlField] || "";
    if (value && PRIVATE_HOST.test(value)) fail(`${label}: ${urlField} is a private host`);
  }
}

function punctuate(text) {
  return /[.!?。！？]$/.test(text) ? text : `${text}.`;
}

function expectedReadmeLine(entry, readmeName) {
  const chinese = readmeName === "README.zh-CN.md";
  const summary = entry[chinese ? "summary_zh" : "summary"];
  if (!summary) fail(`${readmeName}: ${entry.slug} is missing ${chinese ? "summary_zh" : "summary"}`);
  const author = entry.author.url
    ? `[${entry.author.name}](${entry.author.url})`
    : entry.author.name;
  const hasTemplate = slugsOnDisk.includes(entry.slug);
  const notes = hasTemplate
    ? ` ${chinese ? "说明" : "Notes"}: [templates/${entry.slug}](templates/${entry.slug}/).`
    : "";
  return `- [${entry.name}](${entry.import}) - ${punctuate(summary)} ${author}.${notes}`;
}

const catalogPath = join(root, "catalog.json");
const catalogText = readFileSync(catalogPath, "utf8");
scanSecrets("catalog.json", catalogText);
const catalog = JSON.parse(catalogText);
if (!Array.isArray(catalog.entries)) fail("catalog.json: entries must be an array");

const templatesDir = join(root, "templates");
let slugsOnDisk = [];
try {
  slugsOnDisk = readdirSync(templatesDir).filter((name) =>
    statSync(join(templatesDir, name)).isDirectory()
  );
} catch {
  slugsOnDisk = [];
}

const catalogSlugs = new Set();
const catalogImports = new Set();
for (const entry of catalog.entries) {
  const label = `catalog.json:${entry.slug || "?"}`;
  checkEntry(entry, label);
  if (catalogSlugs.has(entry.slug)) fail(`catalog.json: duplicate slug ${entry.slug}`);
  catalogSlugs.add(entry.slug);
  if (catalogImports.has(entry.import)) fail(`catalog.json: duplicate import ${entry.import}`);
  catalogImports.add(entry.import);

  const dir = join(templatesDir, entry.slug);
  let hasDir = false;
  try {
    hasDir = statSync(dir).isDirectory();
  } catch {
    hasDir = false;
  }
  if (!hasDir) continue;

  for (const file of ["entry.json", "PROFILE.md", "SETUP.md"]) {
    const path = join(dir, file);
    try {
      readFileSync(path, "utf8");
    } catch {
      fail(`missing ${path}`);
    }
  }

  const fileEntry = readJson(join(dir, "entry.json"));
  checkEntry(fileEntry, `${entry.slug}/entry.json`);
  if (JSON.stringify(fileEntry) !== JSON.stringify(entry)) {
    fail(`${entry.slug}/entry.json does not match catalog.json entry`);
  }
}

if (slugsOnDisk.length) {
  for (const path of walkFiles(templatesDir)) {
    scanSecrets(path, readFileSync(path, "utf8"));
  }
}

for (const slug of slugsOnDisk) {
  if (!catalogSlugs.has(slug)) fail(`templates/${slug} is not in catalog.json`);
}

for (const readmeName of ["README.md", "README.zh-CN.md"]) {
  const text = readFileSync(join(root, readmeName), "utf8");
  const lines = text.split("\n");
  for (const entry of catalog.entries) {
    const matches = lines
      .map((line, index) => ({ line, index }))
      .filter(({ line }) => line.startsWith("- [") && line.includes(`](${entry.import}) - `));
    if (matches.length !== 1) {
      fail(`${readmeName}: expected one catalog line for ${entry.slug}, found ${matches.length}`);
    }
    const expected = expectedReadmeLine(entry, readmeName);
    if (matches[0].line !== expected) {
      fail(`${readmeName}:${matches[0].index + 1}: catalog line does not match ${entry.slug}`);
    }
    const section = lines
      .slice(0, matches[0].index + 1)
      .reverse()
      .find((line) => line.startsWith("## "));
    if (section !== `## ${CATEGORY_META[entry.category].heading}`) {
      fail(`${readmeName}:${matches[0].index + 1}: ${entry.slug} is under the wrong category`);
    }
  }

  for (const [category, meta] of Object.entries(CATEGORY_META)) {
    const count = catalog.entries.filter((entry) => entry.category === category).length;
    const row = `| [${meta.heading}](#${meta.anchor}) | ${count} |`;
    if (!text.includes(row)) fail(`${readmeName}: missing or stale category row: ${row}`);
  }
  const verified = catalog.entries.filter((entry) => entry.verified).length;
  const status = readmeName === "README.md"
    ? `**${verified} verified / ${catalog.entries.length} listed**`
    : `**${verified} 条已核验 / ${catalog.entries.length} 条已收录**`;
  if (!text.includes(status)) fail(`${readmeName}: missing or stale review status: ${status}`);
}

console.log(`OK ${catalog.entries.length} entries`);
