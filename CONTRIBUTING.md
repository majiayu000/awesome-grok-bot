# Contributing

This repo is a catalog of **live** official Grok Bot share links, plus field cases and community GitHub tools. Official docs and meetup calendars already live at [RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot). Prompt dumps belong elsewhere.

Chinese or English PRs are both fine.

## Add a bot

PR a live `https://x.ai/bot/…` URL, a one-sentence summary, and a category.

1. Fork the repo.
2. Append a matching object to `catalog.json` `entries`.
3. Add one line to `README.md` and `README.zh-CN.md`.
4. PROFILE.md / SETUP.md only if you have extra setup notes (featured style). Then also add `templates/<kebab-slug>/entry.json` that deep-equals the catalog object.
5. Run `node scripts/lint.mjs`. It must print `OK N entries`.
6. Open a PR.

PR title format: Add BotName. Do not start the title with Add Awesome.

Do not submit unpublished bots. `import` must be a live share link. Do not invent URLs. Do not leave `import` empty.

## Safety

- No secrets, tokens, or private hosts (localhost, 10.x, 192.168.) in catalog or template files.
- Never put API keys in SETUP. Importers reconnect their own plugins.
- See SECURITY.md for what we reject.
- Do not submit unverified money or trade bots.

## verified

`verified: true` only after a maintainer imported the share and ran a first safe task. Submitters leave it false.

Skills can fail to travel (preview shows them, export ships `skills: []`).

## Categories

Use one of: coding-shipping, inbox-calendar, research-briefings, customer-sales, finance-ops, content-publishing, personal-admin, teams-handoffs.

The lint command is: `node scripts/lint.mjs`

## Packs and official starters

A share installs one bot. Rosters that need several bots live in `packs/` as markdown recipes, not as fake import URLs.

Official use-case roles (Sales Outbound, Expense Manager, Bug Reproduction, Chief of Staff, …) are starters for a **new** bot. They go in `docs/official-starters.md`, not in `catalog.json`, until someone publishes a live `https://x.ai/bot/…` share.

## Add a field case or a GitHub tool

Field cases go under `## Field cases` / `## 真人案例` (use Rosters, Computer-use jobs, or Gotchas). Skills go under `## Skills and tools` / `## 技能和工具` (Linux desktop, local and study, factory, CLIs, bridges, playbooks, indexes, OSS alts). Same URL and one sentence in both READMEs. Hyphen, not em dash. Chinese descriptions: no colon except inside URLs or code. Do not add them to `catalog.json`.

A field case is a public writeup of a **real run** (X, blog, forum). Screenshots, a concrete job, or a share already in this catalog help. "I installed it" does not.

The Bot computer is already Linux. Official desktop apps are macOS, Windows, and iOS. Do not PR a stack of unofficial Linux desktop ports; one line pointing at falser101/grok-bot-linux is enough.

A GitHub tool is a repo someone can clone, paste, or install today (skill pack, client, CLI, playbook, bridge). Empty, joke, or unmaintained repos do not belong unless they are the only useful thing in a class (for example the only WeChat bridge).

Do not PR official xAI or Cursor docs, plan pages, App Store listings, or the official plugin marketplace. Do not PR meetup, Luma, or meeting-calendar links. Do not invent `https://x.ai/bot/…` URLs.

PR title format: Add field case Name, or Add tool RepoName.

## Daily ingest

Maintainers also sweep X, GitHub, and [RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot) daily and fold in new field cases and tools. A human or agent does that sweep. There is no Action that posts. The only GitHub Action here is lint (`node scripts/lint.mjs` on push and PR).
