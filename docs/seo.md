# SEO notes (maintainers)

Short checklist for GitHub discovery. Product is **live `x.ai/bot` shares**, not prompt dumps. Do not claim `verified` until the flag is true in `catalog.json`. Do not auto-post to X or submit directories unless a human asks.

**Audit snapshot (2026-09-20, Asia/Shanghai):** catalog **1802** (featured 20 / studio-door 119 / aka 95 / raw 1568); `verified` **0**; stars **49**; Homepage **empty**; Topics already include `grokbot`, `ai-agents`, `directory`, `cursor`, `llm`. Baseline plan: `/workspace/downloads/awesome-grok-bot-seo-growth-plan.md`.

---

## Audit findings (read-only)

### README first screen (EN + 中文)

| Check | Status |
| --- | --- |
| H1 | `Awesome Grok Bot` (both) |
| Lead keywords | `Grok Bot` + `live` / 活分享 + `` `x.ai/bot` `` + **1802** present in blockquote + opening para |
| Internal links | Contents → Try these first / 先试这几个, [studio-doors.md](studio-doors.md), [seo.md](seo.md) |
| Featured narrative | 20 “Try these first” rows; shelf explained; studio-door count **119** linked |
| Keyword density (rough) | EN first screen ~825 tokens: Grok Bot ×7, x.ai/bot ×21, live ×5, 1802 ×4 — healthy, not stuffed |

No README docs-map fix needed this pass (seo link already bilingual).

### GitHub About (`gh repo view`)

- **description:** `1802 live x.ai/bot shares for Grok Bot you can Add — bilingual EN/中文 catalog with shelf navigation, field cases, and JSON schema. Not prompt dumps.` ✅
- **homepageUrl:** `https://majiayu000.github.io/awesome-grok-bot/` (Pages from `/docs`)
- **topics:** agents, awesome, awesome-list, grok, grok-bot, templates, catalog, xai, ai-agents, bot-templates, cursor, directory, grokbot, llm ✅
- **stargazerCount:** 49

### llms.txt vs catalog

Aligned: 1802 entries; shelf `featured 20, studio-door 119, aka 95, raw 1568`; points at `docs/seo.md` and studio-doors. Re-sync only when catalog counts change.

### Competitor gap (esp. kyd Pages)

What this repo still misses for organic discovery:

1. **GitHub Pages / searchable UI** — shipped at `/docs` (`index.html` + `catalog-index.json`); filter by category + shelf.
2. **Homepage** — set to Pages URL after enable.
3. **Stars ~1/6 of head lists** — content depth high; discovery weak.
4. **No weekly “新进 N” hook** — growth is silent without a shareable delta.
5. **Not yet on sindresorhus/awesome** — missing category authority backlink.
6. **Featured vs “Try these first”** — aligned in practice; could label `shelf=featured` more explicitly (copy-only).

Do **not** invent Homepage, claim verified, or point readers at competitors as share sources.

---

## GitHub About (keep)

- Description: count + `live x.ai/bot` + bilingual + catalog (not prompts).
- Topics: keep `grok-bot`, `grokbot`, `xai`, `awesome-list`, `directory`, `ai-agents`, `cursor`, `llm`, `catalog`, `templates`.
- Homepage: only set when a real Pages/product URL exists.
- Social preview: `docs/screenshots/social-preview.png` (1280×640).

## README first screen (keep)

- H1 stays `Awesome Grok Bot`.
- Lead must include **Grok Bot**, **live**, **`x.ai/bot`**, and current entry count.
- EN / 中文 parity; Contents links to featured, studio-doors, this file.

## Machines

- Keep [llms.txt](../llms.txt) counts aligned with `catalog.json`.
- After catalog edits: `node scripts/lint.mjs` must print `OK N entries`.

---

## Recommended bot pack (Add these)

Install pack for humans: `/workspace/downloads/seo-bot-crew-install.md`.

| Role | Share | Job |
| --- | --- | --- |
| **SEO & AEO Desk** | https://x.ai/bot/0IhyZWxwbf2cFmsmroZQL | Keywords → content ideas + writer briefs (search + AI answers) |
| **OpenSEO** | https://x.ai/bot/8yZv2AeUvBcOFoFRVZfhU | Keywords, audits, local SEO, content briefs |
| **Site Audit** | https://x.ai/bot/s6JVFYDIDMsCQMBeTcznW | One-pass tech audit (SEO, speed, a11y, CRO, schema) |
| Optional: **SERP Watch Team** | https://x.ai/bot/iN9VkE6H4f4CLidzMaNaZ | Brand visibility in SERP + AI answers |

**Handoff:** Desk scopes keywords/gaps for *this* repo → OpenSEO turns that into an actionable brief → Site Audit checks tech/on-page once a public URL (Pages) exists. Until Pages ships, Site Audit stays README/GitHub-About scoped (read-only).

### 中文可复制「首次安全任务」（只读，不发帖、不改仓、不提交目录）

**SEO & AEO Desk**

```
只读审计 https://github.com/majiayu000/awesome-grok-bot（本地可对照 /workspace/awesome-grok-bot）。
目标：为「Grok Bot / x.ai/bot live shares / awesome Grok Bot catalog」列 10 个 EN+中文意图词，标出本仓相对 kyd Pages 的内容缺口，并给 5 条可写的落地页/README 小节标题。
禁止：声称 verified、发 X、提交任何目录站、改文件。输出中文清单即可。
```

**OpenSEO**

```
基于 awesome-grok-bot 的公开 README / docs/seo.md / llms.txt，写一份 OpenSEO 风格简报：主词、内链建议、About/Topics 是否需改、相对「可搜 Pages」缺什么。
范围仅此仓；只读；不要发帖或提交外部站点。用中文输出「本周可改文件清单」（文件级）。
```

**Site Audit**

```
在尚无 GitHub Pages 的前提下，只读检查本仓发现面：README 首屏 H1/关键词、docs/seo.md、llms.txt 计数、GitHub About 描述与 Topics、social preview 资产是否存在。
输出 P0/P1 技术项；不要搭建站点、不要改生产、不要提交目录。中文条目列表。
```

---

## GitHub Pages (maintainers)

**URL:** https://majiayu000.github.io/awesome-grok-bot/

**What ships**

- `docs/index.html` — client-side searchable SPA (EN/中文 UI; uses `summary_zh` when locale is zh).
- `docs/catalog-index.json` — slim index generated from root `catalog.json` (name, summaries, tags, category, shelf, import, author, verified).
- `docs/.nojekyll` — serve as plain static files from the `/docs` folder on `main`.

**Honesty (do not drift)**

- Product is **live `x.ai/bot` shares**, not prompt dumps.
- Reachable ≠ safe; `verified` stays separate (still 0 until maintainers flip flags).
- Do not point readers at third-party directories as the share source.
- Social preview reuses `docs/screenshots/social-preview.png` (no per-share screenshots).

**Routine when catalog grows**

1. Edit `catalog.json` (+ README projections as usual).
2. `node scripts/lint.mjs` → must print `OK N entries`.
3. `node scripts/build-pages-index.mjs` → refreshes `docs/catalog-index.json`.
4. Commit both catalog and the regenerated index (and README if counts changed).
5. Push `main`; Pages redeploys from `/docs` automatically.

`npm run build:pages` is an alias for the index builder.

**Enable / homepage (one-time)**

```bash
gh api -X POST repos/majiayu000/awesome-grok-bot/pages \
  -f build_type=legacy -f source[branch]=main -f source[path]=/docs
# or update if already exists:
gh api -X PUT repos/majiayu000/awesome-grok-bot/pages \
  -f build_type=legacy -f source[branch]=main -f source[path]=/docs
gh repo edit majiayu000/awesome-grok-bot --homepage https://majiayu000.github.io/awesome-grok-bot/
```

---

## Concrete next edits (prioritized)

### P0 — done or keep green

- [x] About description + Topics expanded
- [x] README / README.zh-CN lead keywords + Contents → seo / studio-doors / featured
- [x] llms.txt counts = 1802 / shelf split
- [x] This `docs/seo.md` refreshed with audit + bot pack
- [ ] After any catalog bump: re-sync llms.txt + lint

### P1 — still open (highest leverage)

- [x] **GitHub Pages** searchable UI from `catalog.json` (filter shelf/category); Homepage set
- [ ] Weekly「新进 N」README/Discussions blurb (manual; no auto-X)
- [ ] Label「先试这几个」explicitly as `shelf=featured`
- [ ] Contents → CONTRIBUTING one-liner
- [ ] Consider sindresorhus/awesome submission (human PR)

### P2

- [ ] Extra field-case covers; raise `verified` via real safe first tasks
- [ ] Optional independent domain after Pages proves traffic

---

## Optional next (product)

- Pages live: `https://majiayu000.github.io/awesome-grok-bot/` (optional custom domain later).
- Weekly discovery note, posted manually.
