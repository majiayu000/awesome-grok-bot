# Awesome Grok Bot

Curated importable Grok Bot templates. Official share links, not prompt dumps.

> Community templates are untrusted third-party software. Adding one accepts Grok Bot third-party bot terms. Inspect the profile, connect one connector, run the listed read-only first safe task, only then enable routines or writes. Bots on an account share one computer. Never paste API keys into SETUP. Skills can fail to travel (preview shows them, import arrives empty). See [SECURITY.md](SECURITY.md) and [docs/vetting.md](docs/vetting.md).

Machine-readable: [catalog.json](catalog.json).

## What belongs here

This is a **template catalog**. A row is a live `https://x.ai/bot/…` share plus inspectable `PROFILE.md` / `SETUP.md` for what the share does not copy.

It is not:

- A resource/docs list. That is [RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot).
- A firehose of gallery dumps ([somi.ai](https://somi.ai/grok-bots), [grokbot.dev](https://grokbot.dev), [grokyard.com](https://www.grokyard.com)).
- A prompt-era paste bin ([mergisi/awesome-grokbot](https://github.com/mergisi/awesome-grokbot)).
- Official use-case marketing copy. Those are starters you type into a **new** bot, collected in [docs/official-starters.md](docs/official-starters.md). No invented import URLs.

Chinese playbooks (recruit cards, not native shares): [KinGao294/grok-bot-orange-book](https://github.com/KinGao294/grok-bot-orange-book).

## How to import

1. Open the official share link (`https://x.ai/bot/…`) in a browser.
2. Choose **Add to Grok Bot**. The Grok Bot desktop app or iOS app is required.

A share **copies** identity, description, selected memories, skills, routines, and first-party marketplace plugins (by plugin id).

It **does not copy** the computer, files, browser sessions or logins, API keys, custom MCP, scripts, or conversation history.

Reconnect your own plugins after import. The share link is public; full instructions are often visible on the page.

`verified: true` only after a maintainer imported the share and ran the listed first safe task. Rows below without that flag are live links we have not yet run.

## After you import

Follow [docs/vetting.md](docs/vetting.md). Short version: one connector, inspect skills, run `first_safe_task` read-only, then maybe routines.

Account caps: **50 bots** plus group chats; **50 routines** per bot. All bots share one computer. One share installs one bot. A team roster is a [pack](packs/), not a link.

Known bug: preview can show skills while export ships `skills: []`.

## Contents

- [Coding & shipping](#coding--shipping)
- [Inbox & calendar](#inbox--calendar)
- [Research & briefings](#research--briefings)
- [Customer & sales](#customer--sales)
- [Finance & ops](#finance--ops)
- [Content & publishing](#content--publishing)
- [Personal admin](#personal-admin)
- [Teams & handoffs](#teams--handoffs)
- [Team packs](#team-packs)

## Coding & shipping

| Name | What it does | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |
| [dr eggbot](templates/dr-eggbot/) | Asks preference questions, then creates specialist bots. Coding bots get a pstack first-run. | — | [Add](https://x.ai/bot/93gOz3op1UQdBdbekQFLK) | Lauren | create-agent, unverified |

Official starters (not importable): [Product Performance](docs/official-starters.md), [Bug Reproduction](docs/official-starters.md).

## Inbox & calendar

| Name | What it does | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |

No importable share links yet. Official starter: [Chief of Staff](docs/official-starters.md) (digest only; do not send or change meetings). Pair with [Fixer](#teams--handoffs) when you need an operator.

## Research & briefings

| Name | What it does | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |
| Example Brief Bot (EXAMPLE) | Shows the catalog shape. Reads named sources, drafts a short brief, waits for approval. | — | — (not published) | [maintainers](https://github.com/majiayu000/awesome-grok-bot) | example |

## Customer & sales

| Name | What it does | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |

No importable share links yet. Official starters: [Sales Outbound](docs/official-starters.md), [Talent Scout](docs/official-starters.md), [Account Health](docs/official-starters.md).

## Finance & ops

| Name | What it does | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |

No importable share links yet. Official starters: [Paid Media](docs/official-starters.md), [Expense Manager](docs/official-starters.md). We do not list unverified money or trade bots.

## Content & publishing

| Name | What it does | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |
| [Webby](templates/webby/) | Website admin, newsletter, and a public weekday dashboard. Create and rebuild, not delete. | GitHub (optional) | [Add](https://x.ai/bot/Q2shbC8RRmoRleIyr5J33) | Farzad | website, unverified |

## Personal admin

| Name | What it does | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |
| [Home robots](templates/home-robots/) | Talks to official mowers, vacuums, and Matter robots from chat. List first; do not start or dock. | vendor / custom MCP | [Add](https://x.ai/bot/3mf-UN4mGnCp8DbPBnW5u) | Sawyer | home, robots, unverified |

## Teams & handoffs

| Name | What it does | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |
| [Work](templates/work/) | Empty work-door clone. Standing work inbox after you reconnect tools. Pair with Life. | Gmail, Calendar, Slack (optional) | [Add](https://x.ai/bot/vOipeiu0AZ7CuC5ynw5h0) | Tyler | two-door, unverified |
| [Life](templates/life/) | Empty life-door clone. Standing life inbox and room opener. Pair with Work. | Calendar (optional) | [Add](https://x.ai/bot/6I-yjMRU1BmiYNfZgWXBK) | Tyler | two-door, unverified |
| [Fixer](templates/fixer/) | Chief of staff's right hand. Pushes back, then executes. | Slack (optional) | [Add](https://x.ai/bot/jiF_km66YLNm5LBVJ5_Ho) | Uzi | operator, unverified |

## Team packs

One share = one bot. These recipes are how you assemble a roster.

- [Work + Life two-door](packs/two-door-work-life.md)
- [Chief of Staff + Fixer + specialists](packs/chief-of-staff.md)

## Contributing

Want to add a template? Fork, drop `templates/<kebab-slug>/{entry.json,PROFILE.md,SETUP.md}` plus a matching `catalog.json` object, run `node scripts/lint.mjs`, and open a PR. Details, title format, and the verified flag are in [CONTRIBUTING.md](CONTRIBUTING.md).

Paraphrase public previews. Do not paste another person's full standing instructions. Do not invent share URLs.

## Related

- Official: [Bots](https://docs.x.ai/grok-bot/bots) · [FAQ](https://docs.x.ai/grok-bot/faq) · [Use cases](https://docs.x.ai/grok-bot/use-cases) · [Skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations) · [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)
- Resource awesome-list (docs, meetups, failure modes): [RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot)
- Copy-paste profiles (pre-template): [mergisi/awesome-grokbot](https://github.com/mergisi/awesome-grokbot)
- Community galleries: [somi.ai/grok-bots](https://somi.ai/grok-bots) · [grokbot.dev](https://grokbot.dev) · [grokyard.com](https://www.grokyard.com)
- Chinese playbook: [橙皮书 grok-bot-orange-book](https://github.com/KinGao294/grok-bot-orange-book)

Catalog and recipes CC0. Scripts MIT. Chinese: [README.zh-CN.md](README.zh-CN.md).
