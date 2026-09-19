#!/usr/bin/env node
/**
 * Build a slim search index for GitHub Pages (docs/).
 * Run after catalog.json changes: node scripts/build-pages-index.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(readFileSync(join(root, "catalog.json"), "utf8"));
if (!Array.isArray(catalog.entries)) {
  console.error("catalog.json: entries must be an array");
  process.exit(1);
}

const shelves = { featured: 0, solid: 0, "studio-door": 0, aka: 0, raw: 0 };
const categories = {};
let verified = 0;

const entries = catalog.entries.map((e) => {
  if (e.shelf in shelves) shelves[e.shelf]++;
  categories[e.category] = (categories[e.category] || 0) + 1;
  if (e.verified) verified++;
  return {
    slug: e.slug,
    name: e.name,
    summary: e.summary,
    summary_zh: e.summary_zh || "",
    import: e.import,
    category: e.category,
    tags: Array.isArray(e.tags) ? e.tags : [],
    shelf: e.shelf,
    author: e.author?.name || "",
    verified: !!e.verified,
  };
});

const index = {
  generated: catalog.generated || new Date().toISOString().slice(0, 10),
  source: catalog.source || "https://github.com/majiayu000/awesome-grok-bot",
  count: entries.length,
  verified,
  shelves,
  categories,
  entries,
};

const out = join(root, "docs", "catalog-index.json");
writeFileSync(out, JSON.stringify(index));
console.log(
  `Wrote docs/catalog-index.json (${entries.length} entries, ${Buffer.byteLength(JSON.stringify(index))} bytes)`
);
