#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const CATEGORIES = new Set([
  "coding-shipping",
  "inbox-calendar",
  "research-briefings",
  "customer-sales",
  "finance-ops",
  "content-publishing",
  "personal-admin",
  "teams-handoffs",
]);
const REQUIRED = [
  "slug",
  "name",
  "author",
  "summary",
  "import",
  "tags",
  "category",
  "license",
  "verified",
  "updated",
];
const SECRET_RES = [
  /ghp_[A-Za-z0-9]{20,}/,
  /sk-[A-Za-z0-9]{20,}/,
  /AKIA[0-9A-Z]{16}/,
  /xox[baprs]-/,
  /api[_-]?key\s*=/i,
];
const PRIVATE_HOST = /\b(localhost|127\.0\.0\.1|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+)\b/i;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const IMPORT = /^https:\/\/x\.ai\/bot\/[A-Za-z0-9_-]+$/;

function fail(msg) {
  console.error(msg);
  process.exit(1);
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
  for (const key of REQUIRED) {
    if (!(key in entry) || entry[key] === "" || entry[key] == null) {
      fail(`${label}: missing ${key}`);
    }
  }
  if (!SLUG.test(entry.slug) || entry.slug.startsWith("_")) {
    fail(`${label}: bad slug ${entry.slug}`);
  }
  if (!entry.author || typeof entry.author.name !== "string" || !entry.author.name) {
    fail(`${label}: author.name required`);
  }
  if (typeof entry.summary !== "string" || entry.summary.length < 1 || entry.summary.length > 160) {
    fail(`${label}: summary must be 1–160 chars`);
  }
  if ("summary_zh" in entry) {
    if (typeof entry.summary_zh !== "string" || entry.summary_zh.length < 1 || entry.summary_zh.length > 160) {
      fail(`${label}: summary_zh must be 1–160 chars`);
    }
  }
  if (!CATEGORIES.has(entry.category)) fail(`${label}: bad category ${entry.category}`);
  if (!DATE.test(entry.updated)) fail(`${label}: updated must be YYYY-MM-DD`);
  if (typeof entry.verified !== "boolean") fail(`${label}: verified must be boolean`);
  if (!Array.isArray(entry.tags) || entry.tags.length < 1) fail(`${label}: tags must be an array of strings`);
  for (const t of entry.tags) {
    if (typeof t !== "string" || !t) fail(`${label}: tags must be an array of strings`);
  }
  if (!IMPORT.test(entry.import)) fail(`${label}: import must be https://x.ai/bot/…`);
  for (const urlField of ["import", "demo", "source", "related"]) {
    const value = entry[urlField] || "";
    if (value && PRIVATE_HOST.test(value)) fail(`${label}: ${urlField} is a private host`);
  }
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
  for (const entry of catalog.entries) {
    if (!text.includes(entry.import)) {
      fail(`${readmeName} missing import ${entry.import} (${entry.slug})`);
    }
  }
}

console.log(`OK ${catalog.entries.length} entries`);
