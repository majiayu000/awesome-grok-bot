import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(readFileSync(join(root, "catalog.json"), "utf8"));
const entry = (slug) => structuredClone(catalog.entries.find((item) => item.slug === slug));

function fixture(t, entries, templates = [], pack = "") {
  const dir = mkdtempSync(join(tmpdir(), "apply-shelf-test-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  for (const name of ["scripts", "templates", "packs", "docs"]) mkdirSync(join(dir, name));
  copyFileSync(join(root, "scripts", "apply-shelf.mjs"), join(dir, "scripts", "apply-shelf.mjs"));
  writeFileSync(join(dir, "catalog.json"), JSON.stringify({ entries }));
  for (const item of templates) {
    mkdirSync(join(dir, "templates", item.slug));
    writeFileSync(join(dir, "templates", item.slug, "entry.json"), JSON.stringify(item));
  }
  writeFileSync(join(dir, "packs", "doors.md"), pack);
  return {
    dir,
    run() {
      execFileSync(process.execPath, [join(dir, "scripts", "apply-shelf.mjs")], { stdio: "pipe" });
      return JSON.parse(readFileSync(join(dir, "catalog.json"), "utf8")).entries;
    },
  };
}

test("tracked Life keeps its own shelf beside a different same-name studio door", (t) => {
  const life = entry("life");
  const other = entry("life-ktzplw");
  const f = fixture(t, [other, life], [life]);
  const result = f.run();
  assert.equal(result.find((item) => item.slug === life.slug).shelf, "raw");
  assert.equal(result.find((item) => item.slug === other.slug).shelf, "studio-door");
  assert.deepEqual(result.map((item) => item.import), [other.import, life.import]);
  const synced = JSON.parse(readFileSync(join(f.dir, "templates", "life", "entry.json"), "utf8"));
  assert.deepEqual(synced, result.find((item) => item.slug === life.slug));
  assert.equal(synced.first_safe_task, life.first_safe_task);
  assert.equal(synced.approval_boundary, life.approval_boundary);
  assert.deepEqual(f.run(), result);
});

test("pack-linked imports are protected without a template directory", (t) => {
  const life = entry("life");
  const f = fixture(t, [entry("life-ktzplw"), life], [], `[Life](${life.import})`);
  const result = f.run();
  assert.equal(result.find((item) => item.slug === life.slug).shelf, "raw");
  assert.equal(result.find((item) => item.slug === "life-ktzplw").shelf, "studio-door");
});

test("generic studio, command and mission-control words do not promote shares", (t) => {
  const slugs = ["pet-ad-studio", "countdown-starship", "dbs", "songwriter", "life-ktzplw"];
  const f = fixture(t, slugs.map(entry));
  const shelves = Object.fromEntries(f.run().map((item) => [item.slug, item.shelf]));
  assert.equal(shelves["pet-ad-studio"], "raw");
  assert.equal(shelves["countdown-starship"], "raw");
  assert.equal(shelves.dbs, "raw");
  assert.equal(shelves.songwriter, "studio-door");
  assert.equal(shelves["life-ktzplw"], "studio-door");
});

test("untracked name duplicates still collapse and featured seeds still win", (t) => {
  const featured = structuredClone(catalog.entries.find((item) => item.import.endsWith("/z7xup0Ax1SBl2K84PELqF")));
  const duplicate = { ...entry("pet-ad-studio"), name: `  ${featured.name.toUpperCase()}  ` };
  const f = fixture(t, [duplicate, featured]);
  const result = f.run();
  assert.equal(result.find((item) => item.slug === featured.slug).shelf, "featured");
  assert.equal(result.find((item) => item.slug === duplicate.slug).shelf, "aka");
});
