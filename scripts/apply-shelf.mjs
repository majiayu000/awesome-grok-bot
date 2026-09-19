#!/usr/bin/env node
/**
 * Re-runnable shelf stratification for catalog.json.
 * Defaults raw, then studio-door heuristics, optional solid, featured seed, aka for name dupes.
 * Featured always wins. Syncs templates entry.json when present.
 */
import { readdirSync, readFileSync, writeFileSync, statSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = join(root, "catalog.json");

/** Seed order for featured (import URL path ids). Featured wins over other auto marks. */
const FEATURED_IMPORT_IDS = [
  "z7xup0Ax1SBl2K84PELqF",
  "4VEl6mp1QrsvvjTFR-qE_",
  "ES3LVns98INeXAoYwef_f",
  "XJCoBm6z7qjAnt9ScG8i7",
  "ScOhH1qaoq4XdoYhisagg",
  "WFW6_5N596TQpWCRjRZ5w",
  "WW-UbmTKXn79q0yXapvJE",
  "W0LrVwNwsRHhFY4PG7586",
  "fePZGiWiTZP9n4BoKIlMY",
  "JZAccYtlRFvDSU2CnMnkZ",
  "k_7pPRlHeZc2cku1zvVqr",
  "MzuJZpvaIK2KpexUVY-V0",
  "gCWYD009F66A3XDEYdZgf",
  "4Kert6xnfaArPgZmyJi5M",
  "cp_nk3ftrAgaKbYONW6fa",
  "hbzAWQX-CBMF2uAa00jEs",
  "E_j1gMmT7KLW4HWbMV2nK",
  "ljzXIgAQcGOV0QxYjHH8I",
  "sCd3BcjAeQrr77Qrg1waM",
  "Ed8OwTpWaFfZdJHEAoT4t",
];

const STUDIO_DOOR_RE =
  /chief\s*of\s*staff|command\b|ground\s*control|\bstudio\b|orchestrat|installer|crew\s+of\s+bots|mesa\s+de\s+entrada|ontology\s+stack|switchboard|bot\s*ops|bot\s*father|front\s*desk|intake\s*desk|dispatcher|mission\s*control/i;

const SHELF_RANK = {
  featured: 0,
  solid: 1,
  "studio-door": 2,
  raw: 3,
  aka: 4,
};

function importId(url) {
  const m = String(url).match(/\/bot\/([A-Za-z0-9_-]+)$/);
  return m ? m[1] : "";
}

function nameKey(name) {
  return String(name).trim().toLowerCase().replace(/\s+/g, " ");
}

function escapeMarkdownLinkLabel(label) {
  return String(label).replace(/([\\\]])/g, "\\$1");
}

function punctuate(text) {
  return /[.!?。！？]$/.test(text) ? text : `${text}.`;
}

const catalog = JSON.parse(readFileSync(catalogPath, "utf8"));
if (!Array.isArray(catalog.entries)) {
  console.error("catalog.json: entries must be an array");
  process.exit(1);
}

const featuredSet = new Set(FEATURED_IMPORT_IDS);
const missingFeatured = FEATURED_IMPORT_IDS.filter(
  (id) => !catalog.entries.some((e) => importId(e.import) === id)
);
if (missingFeatured.length) {
  console.warn("warn: featured seed ids not in catalog:", missingFeatured.join(", "));
}

// 1) default raw
for (const entry of catalog.entries) {
  entry.shelf = "raw";
}

// 2) studio-door heuristics on name + summaries
for (const entry of catalog.entries) {
  const hay = `${entry.name}\n${entry.summary || ""}\n${entry.summary_zh || ""}`;
  if (STUDIO_DOOR_RE.test(hay)) entry.shelf = "studio-door";
}

// 3) optional light solid — skipped (leave raw unless clearly safe elsewhere)

// 4) featured seed wins
for (const entry of catalog.entries) {
  if (featuredSet.has(importId(entry.import))) entry.shelf = "featured";
}

// 5) aka for duplicate names; keep one primary
const byName = new Map();
for (const entry of catalog.entries) {
  const key = nameKey(entry.name);
  if (!byName.has(key)) byName.set(key, []);
  byName.get(key).push(entry);
}

for (const group of byName.values()) {
  if (group.length < 2) continue;
  group.sort((a, b) => {
    const ra = SHELF_RANK[a.shelf] ?? 99;
    const rb = SHELF_RANK[b.shelf] ?? 99;
    if (ra !== rb) return ra - rb;
    if (a.updated !== b.updated) return String(a.updated).localeCompare(String(b.updated));
    return String(a.slug).localeCompare(String(b.slug));
  });
  for (let i = 1; i < group.length; i++) {
    group[i].shelf = "aka";
  }
}

writeFileSync(catalogPath, JSON.stringify(catalog, null, 2) + "\n");

// Sync templates entry.json (deep-equal with catalog)
const templatesDir = join(root, "templates");
let synced = 0;
try {
  for (const name of readdirSync(templatesDir)) {
    const dir = join(templatesDir, name);
    if (!statSync(dir).isDirectory()) continue;
    const path = join(dir, "entry.json");
    let fileEntry;
    try {
      fileEntry = JSON.parse(readFileSync(path, "utf8"));
    } catch {
      continue;
    }
    const cat = catalog.entries.find((e) => e.slug === fileEntry.slug || e.slug === name);
    if (!cat) continue;
    writeFileSync(path, JSON.stringify(cat, null, 2) + "\n");
    synced++;
  }
} catch {
  // no templates dir
}

const counts = { featured: 0, solid: 0, "studio-door": 0, aka: 0, raw: 0 };
for (const entry of catalog.entries) {
  counts[entry.shelf] = (counts[entry.shelf] || 0) + 1;
}

const studioPath = join(root, "docs", "studio-doors.md");
const studioEntries = catalog.entries
  .filter((e) => e.shelf === "studio-door")
  .sort((a, b) => String(a.name).localeCompare(String(b.name)) || String(a.slug).localeCompare(String(b.slug)));

if (studioEntries.length > 80) {
  const lines = [
    "# Studio doors",
    "",
    "Editorial `shelf: studio-door` shares — orchestrators, installers, front desks, and crew hubs.",
    "Reachable is not the same as safe. `verified` is a separate maintainer flag.",
    "",
    `Generated from [catalog.json](../catalog.json). Count: **${studioEntries.length}**.`,
    "",
  ];
  for (const e of studioEntries) {
    lines.push(
      `- [${escapeMarkdownLinkLabel(e.name)}](${e.import}) - ${punctuate(e.summary)}`
    );
  }
  lines.push("");
  writeFileSync(studioPath, lines.join("\n"));
} else {
  try {
    unlinkSync(studioPath);
  } catch {
    // absent is fine
  }
}

console.log(
  JSON.stringify(
    {
      total: catalog.entries.length,
      counts,
      templatesSynced: synced,
      studioDoorsDoc: studioEntries.length > 80,
      missingFeatured,
    },
    null,
    2
  )
);
