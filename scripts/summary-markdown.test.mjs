import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { copyFileSync, cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { catalogFileFor } from "./catalog-files.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const payload = "Chief of staff. See [Add](https://evil.example), <https://evil.example>, www.evil.example and `<b>` \\ [CoS]\r\nnext (task).";
const escaped = "Chief of staff. See \\[Add\\]\\(https\\://evil.example\\), \\<https\\://evil.example\\>, www\\.evil.example and \\`\\<b\\>\\` \\\\ \\[CoS\\] next \\(task\\).";
const payloadZh = "参谋长。查看 [添加](https://evil.example) 和 <b>标签</b>\n下一项。";
const escapedZh = "参谋长。查看 \\[添加\\]\\(https\\://evil.example\\) 和 \\<b\\>标签\\</b\\> 下一项。";

function fixture(t) {
  const dir = mkdtempSync(join(tmpdir(), "summary-markdown-test-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  for (const name of ["scripts", "schema", "templates", "docs", "catalog"]) cpSync(join(root, name), join(dir, name), { recursive: true });
  for (const name of ["catalog.json", "README.md", "README.zh-CN.md"]) copyFileSync(join(root, name), join(dir, name));
  const catalog = JSON.parse(readFileSync(join(dir, "catalog.json"), "utf8"));
  const entry = catalog.entries.find((item) => item.slug === "mission-control");
  return {
    dir,
    catalog,
    entry,
    run(script) {
      return spawnSync(process.execPath, [join(dir, "scripts", script)], { encoding: "utf8" });
    },
    summary(field, text) {
      entry[field] = text;
      writeFileSync(join(dir, "catalog.json"), JSON.stringify(catalog));
    },
    readme(name, summary) {
      const path = join(dir, catalogFileFor(entry.category, name));
      const lines = readFileSync(path, "utf8").split("\n");
      const index = lines.findIndex((line) => line.startsWith("- [") && line.includes(`](${entry.import}) - `));
      assert.ok(index >= 0);
      const prefix = lines[index].slice(0, lines[index].indexOf(") - ") + 4);
      const author = entry.author.url ? `[${entry.author.name}](${entry.author.url})` : entry.author.name;
      lines[index] = `${prefix}${summary} ${author}.`;
      writeFileSync(path, lines.join("\n"));
    },
  };
}

test("lint rejects an unescaped injected summary in either README", (t) => {
  for (const [name, field, text] of [
    ["README.md", "summary", "See [Add](https://evil.example) now."],
    ["README.zh-CN.md", "summary_zh", "查看 [添加](https://evil.example)。"],
  ]) {
    const f = fixture(t);
    f.summary(field, text);
    f.readme(name, text);
    const result = f.run("lint.mjs");
    assert.equal(result.status, 1, `${name}: raw injected link was accepted`);
    assert.match(result.stderr, new RegExp(`${catalogFileFor(f.entry.category, name).replaceAll(".", "\\.")}:\\d+: catalog line does not match mission-control`));
  }
});

test("lint accepts literal summaries with links, HTML, backticks, backslashes and newlines", (t) => {
  const f = fixture(t);
  f.summary("summary", payload);
  f.summary("summary_zh", payloadZh);
  f.readme("README.md", escaped);
  f.readme("README.zh-CN.md", escapedZh);
  const result = f.run("lint.mjs");
  assert.equal(result.status, 0, result.stderr);
  assert.ok(result.stdout.includes(`OK ${f.catalog.entries.length} entries`));
});

test("studio-door generation escapes summaries and preserves catalog text across reruns", (t) => {
  const f = fixture(t);
  f.summary("summary", payload);
  f.summary("summary_zh", payloadZh);
  const result = f.run("apply-shelf.mjs");
  assert.equal(result.status, 0, result.stderr);
  const path = join(f.dir, "docs", "studio-doors.md");
  const doc = readFileSync(path, "utf8");
  assert.ok(doc.includes(`](${f.entry.import}) - ${escaped}\n`), "studio document retained active summary markup");
  assert.ok(!doc.includes(payload));
  const catalog = readFileSync(join(f.dir, "catalog.json"), "utf8");
  const entry = JSON.parse(catalog).entries.find((item) => item.slug === f.entry.slug);
  assert.equal(entry.summary, payload);
  assert.equal(entry.summary_zh, payloadZh);
  assert.equal(f.run("apply-shelf.mjs").status, 0);
  assert.equal(readFileSync(path, "utf8"), doc);
  assert.equal(readFileSync(join(f.dir, "catalog.json"), "utf8"), catalog);
});
