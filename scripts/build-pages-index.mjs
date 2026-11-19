#!/usr/bin/env node
/**
 * Build a slim search index for GitHub Pages (docs/).
 * Run after catalog.json changes: node scripts/build-pages-index.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const check = process.argv.includes("--check");
const outputs = new Map();
function emit(path, content) {
  outputs.set(path, content);
}

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
  // No wall-clock fallback: an omitted date must produce identical bytes tomorrow.
  generated: catalog.generated || "",
  source: catalog.source || "https://github.com/majiayu000/awesome-grok-bot",
  count: entries.length,
  verified,
  shelves,
  categories,
  entries,
};
const snapshotDate = /^\d{4}-\d{2}-\d{2}$/.test(index.generated) ? index.generated : "";

const out = join(root, "docs", "catalog-index.json");
emit(out, JSON.stringify(index));

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
// Initial highlights occupy the same space before the asynchronous index arrives.
const categoriesEn = { "coding-shipping": "Coding & shipping", "inbox-calendar": "Inbox & calendar", "research-briefings": "Research & briefings", "customer-sales": "Customer & sales", "finance-ops": "Finance & ops", "content-publishing": "Content & publishing", "personal-admin": "Personal admin", "teams-handoffs": "Teams & handoffs" };
const highlightCard = (entry) => `<article class="card ${entry.shelf}">
  <div class="card-top"><h3 class="name"><a href="${escapeHtml(entry.import)}" target="_blank" rel="noopener noreferrer">${escapeHtml(entry.name)}</a></h3><span class="tag ${entry.shelf === "featured" ? "shelf-feat" : "shelf-door"}">${entry.shelf}</span></div>
  <p class="summary">${escapeHtml(entry.summary)}</p>
  <div class="row"><span class="tag">${escapeHtml(categoriesEn[entry.category] || entry.category)}</span><span class="tag ${entry.verified ? "verified-yes" : "verified-no"}">${entry.verified ? "verified" : "unverified"}</span>${entry.tags.slice(0, 4).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
  <div class="row" style="color:var(--muted);font-size:0.78rem">by ${escapeHtml(entry.author || "—")}</div>
  <div class="actions"><a class="btn" href="${escapeHtml(entry.import)}" target="_blank" rel="noopener noreferrer">Open share</a><a class="btn ghost" href="https://github.com/majiayu000/awesome-grok-bot" target="_blank" rel="noopener noreferrer">GitHub</a></div>
</article>`;
const featured = entries.filter(entry => entry.shelf === "featured");
const doors = entries.filter(entry => entry.shelf === "studio-door").slice(0, 8);
const pagePath = join(root, "docs", "index.html");
function replaceRequired(text, pattern, replacement, label, file = "docs/index.html") {
  const matches = [...text.matchAll(new RegExp(pattern.source, "g"))];
  if (matches.length !== 1) {
    throw new Error(`${file}: expected exactly one ${label}, found ${matches.length}`);
  }
  return text.replace(pattern, replacement);
}
function replaceRegion(text, region, content, file = "docs/index.html") {
  const start = `<!-- generated:${region}-start -->`;
  const end = `<!-- generated:${region}-end -->`;
  for (const marker of [start, end]) {
    if (text.split(marker).length !== 2) {
      throw new Error(`${file}: expected exactly one ${marker}`);
    }
  }
  return replaceRequired(text, new RegExp(`${start}[\\s\\S]*?${end}`),
    () => `${start}\n${content}\n${end}`, `${region} marker pair in order`, file);
}
// Validate the original template before any replacement can erase malformed
// markers or anchors nested inside another generated region.
const originalPage = readFileSync(pagePath, "utf8");
const regions = ["catalog", "featured", "doors"].map((region) => {
  replaceRegion(originalPage, region, "");
  const start = `<!-- generated:${region}-start -->`;
  const end = `<!-- generated:${region}-end -->`;
  return { region, start: originalPage.indexOf(start), end: originalPage.indexOf(end) + end.length };
}).sort((a, b) => a.start - b.start);
for (let i = 1; i < regions.length; i++) {
  if (regions[i].start < regions[i - 1].end) {
    throw new Error(`docs/index.html: generated regions overlap (${regions[i - 1].region}, ${regions[i].region})`);
  }
}
function validateAnchor(pattern, label) {
  replaceRequired(originalPage, pattern, "", label);
  const match = originalPage.match(pattern);
  if (regions.some(({ start, end }) => match.index < end && match.index + match[0].length > start)) {
    throw new Error(`docs/index.html: ${label} overlaps a generated region`);
  }
}
const snapshotFields = [
  [/(<strong id="count">)[^<]*(<\/strong>)/, entries.length, "count anchor"],
  [/(<strong id="verified">)[^<]*(<\/strong>)/, verified, "verified count anchor"],
  [/(<span id="snapshotDate">)[^<]*(<\/span>)/, snapshotDate || "—", "snapshot date anchor"],
];
for (const [pattern, , label] of snapshotFields) validateAnchor(pattern, label);
for (const section of ["featuredBlock", "doorsBlock"]) {
  validateAnchor(new RegExp(`(<section class="block" id="${section}")(?: hidden)?(>)`),
    `${section} section anchor`);
}
let page = replaceRegion(originalPage, "catalog", cards);
for (const [pattern, value, label] of snapshotFields) {
  page = replaceRequired(page, pattern, (_, start, end) => `${start}${value}${end}`, label);
}
for (const [region, section, list] of [["featured", "featuredBlock", featured], ["doors", "doorsBlock", doors]]) {
  page = replaceRegion(page, region, list.map(highlightCard).join("\n"));
  page = replaceRequired(page, new RegExp(`(<section class="block" id="${section}")(?: hidden)?(>)`),
    (_, start, end) => `${start}${list.length ? "" : " hidden"}${end}`, `${section} section anchor`);
}
emit(pagePath, page);
const readmeSnapshots = [
  ["README.md", `Catalog snapshot · ${snapshotDate || "date unavailable"} · **${verified} verified / ${entries.length} listed**`],
  ["README.zh-CN.md", `目录快照 · ${snapshotDate || "日期未记录"} · **${verified} 条已核验 / ${entries.length} 条已收录**`],
];
for (const [file, summary] of readmeSnapshots) {
  const path = join(root, file);
  emit(path, replaceRegion(readFileSync(path, "utf8"), "catalog-snapshot", summary, file));
}
emit(join(root, "docs", "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://majiayu000.github.io/awesome-grok-bot/</loc></url>
</urlset>
`);
emit(
  join(root, "docs", "robots.txt"),
  "User-agent: *\nAllow: /\n\nSitemap: https://majiayu000.github.io/awesome-grok-bot/sitemap.xml\n",
);

// Keep discovery metadata in sync without changing its hand-written links/prose.
const llmsPath = join(root, "llms.txt");
let llms = readFileSync(llmsPath, "utf8");
for (const [pattern, replacement] of [
  [/^> \d+ live x\.ai\/bot shares/m, `> ${entries.length} live x.ai/bot shares`],
  [/^\d+ live shares in catalog\.json:/m, `${entries.length} live shares in catalog.json:`],
  [/^Shelf \(editorial\): .*? — see docs\/studio-doors\.md$/m,
    `Shelf (editorial): featured ${shelves.featured}, ${shelves.solid ? `solid ${shelves.solid}, ` : ""}studio-door ${shelves["studio-door"]}, aka ${shelves.aka}, raw ${shelves.raw} — see docs/studio-doors.md`],
]) {
  const matches = [...llms.matchAll(new RegExp(pattern.source, "gm"))];
  if (matches.length === 0) throw new Error(`llms.txt: missing generated count line (${pattern})`);
  if (matches.length !== 1) throw new Error(`llms.txt: expected exactly one generated count line (${pattern}), found ${matches.length}`);
  llms = llms.replace(pattern, () => replacement);
}
emit(llmsPath, llms);

let stale = false;
for (const [path, content] of outputs) {
  if (check) {
    let current;
    try { current = readFileSync(path, "utf8"); } catch { /* missing output is stale */ }
    if (current !== content) {
      console.error(`${path.slice(root.length + 1)}: missing or stale generated output; run npm run build:pages`);
      stale = true;
    }
  } else {
    writeFileSync(path, content);
  }
}
if (stale) process.exitCode = 1;
if (!stale) console.log(`${check ? "Checked" : "Wrote"} generated catalog outputs (${entries.length} entries)`);
