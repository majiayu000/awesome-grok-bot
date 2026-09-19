# SEO notes (maintainers)

Short checklist for GitHub discovery. Product is **live `x.ai/bot` shares**, not prompt dumps. Do not claim `verified` until the flag is true in `catalog.json`.

## GitHub About

- Description: count + `live x.ai/bot` + bilingual + catalog (not prompts).
- Topics: keep `grok-bot`, `grokbot`, `xai`, `awesome-list`, `directory`, `ai-agents`, `cursor`, `llm`, `catalog`, `templates`.
- Homepage: only set when a real Pages/product URL exists. Do not invent one.
- Social preview: `docs/screenshots/social-preview.png` (1280×640). Repo already uses a custom OG image.

## README first screen

- H1 stays `Awesome Grok Bot`.
- Lead line must include **Grok Bot**, **live**, **`x.ai/bot`**, and the current entry count.
- Keep EN / 中文 parity in `README.md` and `README.zh-CN.md`.
- Point humans at [Try these first](../README.md#try-these-first) / [先试这几个](../README.zh-CN.md#先试这几个) and [studio-doors.md](studio-doors.md).

## Machines

- Keep [llms.txt](../llms.txt) counts aligned with `catalog.json`.
- After catalog edits: `node scripts/lint.mjs` must print `OK N entries`.

## Optional next

- Searchable GitHub Pages (filter by `shelf` / category) — product decision; then set Homepage.
- Weekly “新进 N” note for discovery, posted manually (no auto-post to X unless asked).
