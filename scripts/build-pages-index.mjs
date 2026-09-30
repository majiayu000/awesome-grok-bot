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

// Publish the same catalog as HTML so it remains readable before JavaScript loads.
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[character]));
const cards = entries.map((entry) => `<article class="card">
  <div class="card-top"><h3 class="name"><a href="${escapeHtml(entry.import)}" target="_blank" rel="noopener noreferrer">${escapeHtml(entry.name)}</a></h3><span class="tag">${escapeHtml(entry.shelf)}</span></div>
  <p class="summary">${escapeHtml(entry.summary)}</p>
  ${entry.summary_zh ? `<p class="summary" lang="zh-CN">${escapeHtml(entry.summary_zh)}</p>` : ""}
  <div class="row"><span class="tag">${escapeHtml(entry.category)}</span><span class="tag">${entry.verified ? "verified" : "unverified"}</span></div>
  <div class="actions"><a class="btn" href="${escapeHtml(entry.import)}" target="_blank" rel="noopener noreferrer">Preview / Add</a></div>
</article>`).join("\n");
const pagePath = join(root, "docs", "index.html");
const page = readFileSync(pagePath, "utf8").replace(
  /<!-- generated:catalog-start -->[\s\S]*?<!-- generated:catalog-end -->/,
  `<!-- generated:catalog-start -->\n${cards}\n<!-- generated:catalog-end -->`,
).replace(/(<strong id="count">)[^<]*(<\/strong>)/, `$1${entries.length}$2`);
writeFileSync(pagePath, page);
writeFileSync(join(root, "docs", "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://majiayu000.github.io/awesome-grok-bot/</loc></url>
</urlset>
`);
console.log(`Wrote static catalog HTML (${entries.length} shares) and sitemap`);
