import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputs = ["docs/catalog-index.json", "docs/index.html", "docs/sitemap.xml", "docs/robots.txt", "llms.txt", "README.md", "README.zh-CN.md"];
function fixture(t) {
  const dir = mkdtempSync(join(tmpdir(), "generated-catalog-test-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  for (const name of ["scripts", "docs", "catalog.json", "llms.txt", "README.md", "README.zh-CN.md"]) {
    cpSync(join(root, name), join(dir, name), { recursive: true });
  }
  return {
    read: (name) => readFileSync(join(dir, name), "utf8"),
    write: (name, text) => writeFileSync(join(dir, name), text),
    runAt(date, ...args) {
      const preload = `const RealDate = Date; globalThis.Date = class extends RealDate { constructor(...args) { super(...(args.length ? args : [${JSON.stringify(date)}])); } };`;
      return spawnSync(process.execPath, ["--import", `data:text/javascript,${encodeURIComponent(preload)}`, join(dir, "scripts/build-pages-index.mjs"), ...args], { encoding: "utf8" });
    },
    run: (...args) => spawnSync(process.execPath, [join(dir, "scripts/build-pages-index.mjs"), ...args], { encoding: "utf8" }),
  };
}

test("generated catalog check accepts the current catalog without writing files", (t) => {
  const f = fixture(t);
  const before = outputs.map(f.read);
  const result = f.run("--check");
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(outputs.map(f.read), before);
});

test("generated catalog check detects stale outputs and build repairs them idempotently", (t) => {
  const f = fixture(t);
  const catalog = JSON.parse(f.read("catalog.json"));
  const raw = catalog.entries.find((entry) => entry.shelf === "raw");
  const rawCount = catalog.entries.filter((entry) => entry.shelf === "raw").length;
  // Reproduce a nine-row addition while hand-maintained llms totals are updated,
  // but its raw shelf count and generated Pages files are accidentally omitted.
  for (let i = 0; i < 9; i++) {
    catalog.entries.push({ ...raw, slug: `regression-fixture-${i}`, name: `Regression fixture ${i}`,
      import: `https://x.ai/bot/regression-fixture-${i}`, verified: false });
  }
  catalog.generated = "2026-01-12";
  const formerVerified = catalog.entries.filter((entry) => entry.verified).length;
  catalog.entries.find((entry) => !entry.verified).verified = true;
  f.write("catalog.json", JSON.stringify(catalog));
  f.write("llms.txt", f.read("llms.txt").replace(/^> \d+ live/m, `> ${catalog.entries.length} live`)
    .replace(/^\d+ live shares/m, `${catalog.entries.length} live shares`));
  const before = outputs.map(f.read);
  const stale = f.run("--check");
  assert.equal(stale.status, 1, stale.stderr);
  for (const path of ["docs/catalog-index.json", "docs/index.html", "llms.txt", "README.md", "README.zh-CN.md"]) assert.ok(stale.stderr.includes(path), stale.stderr);
  assert.deepEqual(outputs.map(f.read), before, "check mode must not repair files");
  assert.equal(f.run().status, 0);
  assert.equal(f.run("--check").status, 0);
  assert.ok(f.read("llms.txt").includes(`raw ${rawCount + 9} —`));
  assert.equal(JSON.parse(f.read("docs/catalog-index.json")).count, catalog.entries.length);
  assert.ok(f.read("docs/index.html").includes("Regression fixture 8"));
  assert.ok(f.read("docs/index.html").includes('<span id="snapshotDate">2026-01-12</span>'));
  assert.ok(f.read("docs/index.html").includes(`<strong id="verified">${formerVerified + 1}</strong>`));
  assert.ok(f.read("README.md").includes(`2026-01-12 · **${formerVerified + 1} verified / ${catalog.entries.length} listed**`));
  assert.ok(f.read("README.zh-CN.md").includes(`2026-01-12 · **${formerVerified + 1} 条已核验 / ${catalog.entries.length} 条已收录**`));
  const built = outputs.map(f.read);
  assert.equal(f.run().status, 0);
  assert.deepEqual(outputs.map(f.read), built);
});

test("each generated output is checked independently", (t) => {
  const f = fixture(t);
  for (const path of outputs) {
    const original = f.read(path);
    let corrupted = original + "\n";
    if (path === "docs/index.html") {
      corrupted = original.replace(/(<strong id="count">)[^<]*/, "$199999");
    } else if (path === "llms.txt") {
      corrupted = original.replace(/raw \d+/, "raw 99999");
    } else if (path.startsWith("README")) {
      corrupted = original.replace(/(<!-- generated:catalog-snapshot-start -->\n).*/, "$1stale snapshot");
    }
    assert.notEqual(corrupted, original);
    f.write(path, corrupted);
    const result = f.run("--check");
    assert.equal(result.status, 1, path);
    assert.ok(result.stderr.includes(path), result.stderr);
    assert.equal(f.read(path), corrupted);
    f.write(path, original);
  }
});

test("a missing llms count line fails before writing any generated output", (t) => {
  const f = fixture(t);
  f.write("llms.txt", f.read("llms.txt").replace(/^Shelf \(editorial\):.*\n/m, ""));
  const before = outputs.map(f.read);
  const result = f.run();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /llms.txt: missing generated count line/);
  assert.deepEqual(outputs.map(f.read), before);
});


test("missing, renamed, duplicate, and reversed HTML markers fail without writes", (t) => {
  const f = fixture(t);
  const original = f.read("docs/index.html");
  for (const region of ["catalog", "featured", "doors"]) {
    const start = `<!-- generated:${region}-start -->`;
    const end = `<!-- generated:${region}-end -->`;
    const mutations = [
      original.replace(start, ""),
      original.replace(end, ""),
      original.replace(start, `<!-- renamed:${region}-start -->`),
      original.replace(new RegExp(`${start}[\\s\\S]*?${end}`), ""),
      original.replace(start, start + start),
      original.replace(end, end + end),
      original.replace(start, "SWAP_MARKER").replace(end, start).replace("SWAP_MARKER", end),
    ];
    for (const changed of mutations) {
      f.write("docs/index.html", changed);
      const before = outputs.map(f.read);
      for (const args of [["--check"], []]) {
        const result = f.run(...args);
        assert.equal(result.status, 1, `${region}: ${result.stdout}`);
        assert.match(result.stderr, /docs\/index.html: expected exactly one/);
        assert.deepEqual(outputs.map(f.read), before);
      }
    }
  }
});

test("missing or duplicate HTML count and section anchors fail without writes", (t) => {
  const f = fixture(t);
  const original = f.read("docs/index.html");
  for (const pattern of [/<strong id="count">[^<]*<\/strong>/,
    /<section class="block" id="featuredBlock"(?: hidden)?>/,
    /<section class="block" id="doorsBlock"(?: hidden)?>/]) {
    for (const replacement of ["", "$&$&"]) {
      f.write("docs/index.html", original.replace(pattern, replacement));
      const before = outputs.map(f.read);
      for (const args of [["--check"], []]) {
        const result = f.run(...args);
        assert.equal(result.status, 1);
        assert.match(result.stderr, /docs\/index.html: expected exactly one/);
        assert.deepEqual(outputs.map(f.read), before);
      }
    }
  }
});

test("an omitted catalog date builds and checks identically across UTC days", (t) => {
  const f = fixture(t);
  const catalog = JSON.parse(f.read("catalog.json"));
  delete catalog.generated;
  f.write("catalog.json", JSON.stringify(catalog));
  assert.equal(f.runAt("2026-01-01T12:00:00Z").status, 0);
  const before = outputs.map(f.read);
  const checked = f.runAt("2026-01-02T12:00:00Z", "--check");
  assert.equal(checked.status, 0, checked.stderr);
  assert.equal(JSON.parse(f.read("docs/catalog-index.json")).generated, "");
  assert.ok(f.read("docs/index.html").includes('<span id="snapshotDate">—</span>'));
  assert.ok(f.read("README.md").includes("Catalog snapshot · date unavailable"));
  assert.ok(f.read("README.zh-CN.md").includes("目录快照 · 日期未记录"));
  assert.deepEqual(outputs.map(f.read), before);
  assert.equal(f.runAt("2026-01-03T12:00:00Z").status, 0);
  assert.deepEqual(outputs.map(f.read), before);
});


test("duplicates hidden inside an earlier generated region are rejected before writes", (t) => {
  const f = fixture(t);
  const original = f.read("docs/index.html");
  for (const duplicate of ["<!-- generated:featured-start -->", "<!-- generated:doors-end -->",
    '<strong id="count">0</strong>', '<section class="block" id="featuredBlock">',
    '<section class="block" id="doorsBlock">']) {
    f.write("docs/index.html", original.replace("<!-- generated:catalog-start -->",
      `<!-- generated:catalog-start -->${duplicate}`));
    const before = outputs.map(f.read);
    for (const args of [["--check"], []]) {
      const result = f.run(...args);
      assert.equal(result.status, 1);
      assert.match(result.stderr, /docs\/index.html: expected exactly one/);
      assert.deepEqual(outputs.map(f.read), before);
    }
  }
});

test("nested and crossing generated regions fail before writing outputs", (t) => {
  const f = fixture(t);
  const original = f.read("docs/index.html");
  for (const inner of ["catalog", "featured", "doors"]) {
    for (const outer of ["catalog", "featured", "doors"].filter((region) => region !== inner)) {
      const start = `<!-- generated:${inner}-start -->`;
      const end = `<!-- generated:${inner}-end -->`;
      const outerStart = `<!-- generated:${outer}-start -->`;
      const outerEnd = `<!-- generated:${outer}-end -->`;
      const withoutInner = original.replace(start, "").replace(end, "");
      for (const changed of [
        withoutInner.replace(outerStart, outerStart + start + end),
        withoutInner.replace(outerStart, outerStart + start).replace(outerEnd, outerEnd + end),
      ]) {
        f.write("docs/index.html", changed);
        const before = outputs.map(f.read);
        for (const args of [[], ["--check"]]) {
          const result = f.run(...args);
          assert.equal(result.status, 1, `${inner} / ${outer}: ${result.stdout}`);
          assert.match(result.stderr, /generated regions overlap/);
          assert.deepEqual(outputs.map(f.read), before);
        }
      }
    }
  }
});

test("unique anchors inside generated regions fail before writing outputs", (t) => {
  const f = fixture(t);
  const original = f.read("docs/index.html");
  for (const pattern of [/<strong id="count">[^<]*<\/strong>/,
    /<section class="block" id="featuredBlock"(?: hidden)?>/,
    /<section class="block" id="doorsBlock"(?: hidden)?>/]) {
    const [anchor] = original.match(pattern);
    for (const region of ["catalog", "featured", "doors"]) {
      const marker = `<!-- generated:${region}-start -->`;
      f.write("docs/index.html", original.replace(pattern, "").replace(marker, marker + anchor));
      const before = outputs.map(f.read);
      for (const args of [[], ["--check"]]) {
        const result = f.run(...args);
        assert.equal(result.status, 1);
        assert.match(result.stderr, /anchor overlaps a generated region/);
        assert.deepEqual(outputs.map(f.read), before);
      }
    }
  }
});

test("duplicate llms count lines fail even when one or both counts are current", (t) => {
  const f = fixture(t);
  const original = f.read("llms.txt");
  for (const pattern of [/^> \d+ live x\.ai\/bot shares.*$/m,
    /^\d+ live shares in catalog\.json:.*$/m, /^Shelf \(editorial\):.*$/m]) {
    const [line] = original.match(pattern);
    const stale = line.replace(/\d+/, "999999");
    for (const replacement of [`${line}\n${stale}`, `${stale}\n${line}`, `${line}\n${line}`]) {
      f.write("llms.txt", original.replace(pattern, () => replacement));
      const before = outputs.map(f.read);
      for (const args of [[], ["--check"]]) {
        const result = f.run(...args);
        assert.equal(result.status, 1, result.stdout);
        assert.match(result.stderr, /llms.txt: expected exactly one generated count line/);
        assert.deepEqual(outputs.map(f.read), before);
      }
    }
  }
});
