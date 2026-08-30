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
  "job",
  "what_it_does",
  "does_not",
  "connectors",
  "first_safe_task",
  "approval_boundary",
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
}

function checkEntry(entry, label) {
  for (const key of REQUIRED) {
    if (!(key in entry)) fail(`${label}: missing ${key}`);
  }
  if (!entry.author || typeof entry.author.name !== "string" || !entry.author.name) {
    fail(`${label}: author.name required`);
  }
  if (typeof entry.summary !== "string" || entry.summary.length === 0 || entry.summary.length > 160) {
    fail(`${label}: summary must be 1–160 chars`);
  }
  if (!CATEGORIES.has(entry.category)) fail(`${label}: bad category ${entry.category}`);
  if (!DATE.test(entry.updated)) fail(`${label}: updated must be YYYY-MM-DD`);
  if (typeof entry.verified !== "boolean") fail(`${label}: verified must be boolean`);
  for (const field of ["does_not", "connectors", "tags"]) {
    if (!Array.isArray(entry[field])) fail(`${label}: ${field} must be an array`);
  }
  for (const urlField of ["import", "demo"]) {
    const value = entry[urlField] || "";
    if (value && PRIVATE_HOST.test(value)) fail(`${label}: ${urlField} is a private host`);
  }
}

const catalogPath = join(root, "catalog.json");
const catalog = readJson(catalogPath);
if (!Array.isArray(catalog.entries)) fail("catalog.json: entries must be an array");

const templatesDir = join(root, "templates");
const slugsOnDisk = readdirSync(templatesDir).filter((name) =>
  statSync(join(templatesDir, name)).isDirectory()
);

const catalogSlugs = new Set();
for (const entry of catalog.entries) {
  checkEntry(entry, `catalog.json:${entry.slug || "?"}`);
  if (catalogSlugs.has(entry.slug)) fail(`catalog.json: duplicate slug ${entry.slug}`);
  catalogSlugs.add(entry.slug);

  const dir = join(templatesDir, entry.slug);
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

  for (const file of ["entry.json", "PROFILE.md", "SETUP.md"]) {
    const path = join(dir, file);
    scanSecrets(path, readFileSync(path, "utf8"));
    if (PRIVATE_HOST.test(readFileSync(path, "utf8")) && file !== "SETUP.md") {
      // SETUP may mention localhost as a rejection rule; still scan import/demo above
    }
  }
}

for (const slug of slugsOnDisk) {
  if (!catalogSlugs.has(slug)) fail(`templates/${slug} is not in catalog.json`);
}

console.log(`OK ${catalog.entries.length} entries`);
