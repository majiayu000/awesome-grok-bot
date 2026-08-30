# Contributing

This repo is a catalog of **live** official Grok Bot share links. A resource/docs list already exists at [RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot). Prompt dumps belong elsewhere.

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
