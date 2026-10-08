#!/usr/bin/env node
// Move per-category catalog lines out of README.md / README.zh-CN.md into
// catalog/<lang>/<category>.md so each README stays under GitHub's 512,000-byte
// render cap. Idempotent: sections that already link out are left alone.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { CATEGORY_META, catalogFileFor, catalogLinkLine } from "./catalog-files.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(readFileSync(join(root, "catalog.json"), "utf8"));
const headings = new Map(Object.entries(CATEGORY_META).map(([cat, meta]) => [`## ${meta.heading}`, cat]));

for (const readmeName of ["README.md", "README.zh-CN.md"]) {
  const zh = readmeName === "README.zh-CN.md";
  const lines = readFileSync(join(root, readmeName), "utf8").split("\n");
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    out.push(lines[i]);
    const category = headings.get(lines[i]);
    if (!category) continue;
    let j = i + 1;
    while (j < lines.length && !lines[j].startsWith("## ")) j++;
    const body = lines.slice(i + 1, j);
    const entries = body.filter((l) => l.startsWith("- ["));
    if (entries.length === 0) continue; // already split
    const rel = catalogFileFor(category, readmeName);
    const heading = CATEGORY_META[category].heading;
    mkdirSync(dirname(join(root, rel)), { recursive: true });
    const back = zh ? "返回 [README](../../README.zh-CN.md)" : "Back to [README](../../README.md)";
    writeFileSync(join(root, rel), `# ${heading}\n\n${back}\n\n${entries.join("\n").replaceAll("](templates/", "](../../templates/")}\n`);
    const count = catalog.entries.filter((e) => e.category === category).length;
    const link = catalogLinkLine(category, readmeName, count);
    out.push("", link, "");
    i = j - 1;
  }
  writeFileSync(join(root, readmeName), out.join("\n"));
}
