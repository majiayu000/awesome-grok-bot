# Contributing

This repo is a catalog of **importable** Grok Bot templates. A resource/docs list already exists at [RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot). Prompt dumps belong elsewhere.

Chinese or English PRs are both fine.

## Add a bot

1. Fork the repo.
2. Create templates/your-kebab-slug/ with entry.json, PROFILE.md, and SETUP.md.
3. entry.json must match schema/entry.schema.json.
4. PROFILE.md is standing instructions: job, never-list, first safe task.
5. SETUP.md must list what does not travel: plugins to reconnect, placeholders, custom MCP if any, and test skills after import.
6. Append the same object to catalog.json entries.
7. Run the lint script. It must print OK N entries.
8. Open a PR.

PR title format: Add BotName. Do not start the title with Add Awesome.

The PR body must say:

- what it does
- connectors
- first safe task
- that you actually ran it

## Share link or unpublished profile

- Community bots: a live https://x.ai/bot/ share link in import.
- Unpublished: leave import empty and keep an in-repo PROFILE.md. verified stays false.

Do not invent share URLs. Do not paste other people's PROFILE text.

## Safety

- No secrets, tokens, or private hosts (localhost, 10.x, 192.168.) in import / demo or in the three template files.
- Never put API keys in SETUP. Importers reconnect their own plugins.
- Put approval_boundary in the Bot description as well as in entry.json.
- See SECURITY.md for what we reject.

## verified

verified: true only after a maintainer imported the share and ran the listed first safe task. Submitters leave it false.

Skills can fail to travel (preview shows them, export ships skills: []). Call that out in SETUP and tell importers to inspect skills before relying on them.

## Categories

Use one of: coding-shipping, inbox-calendar, research-briefings, customer-sales, finance-ops, content-publishing, personal-admin, teams-handoffs. Do not add General Helper.

You do not need to review other PRs.

The lint command is: node scripts/lint.mjs

## PROFILE.md

Paraphrase the public share preview. Do not paste another person's full standing instructions into this repo.

## Packs and official starters

A share installs one bot. Rosters that need several bots live in `packs/` as markdown recipes, not as fake import URLs.

Official use-case roles (Sales Outbound, Expense Manager, Bug Reproduction, Chief of Staff, …) are starters for a **new** bot. They go in `docs/official-starters.md`, not in `catalog.json`, until someone publishes a live `https://x.ai/bot/…` share.

Do not submit unverified money or trade bots.

## Example entry

`templates/_example` is the catalog shape only. It is not a published share.
