# Official role starters

These are xAI's documented "clear job" roles. They are **prompts for a new bot you create**, not importable share links. Do not invent `https://x.ai/bot/…` URLs for them.

Source: [Use cases](https://docs.x.ai/grok-bot/use-cases).

Each starter is read-then-ask. Do not send, enroll, change budgets, or touch production until the output is reliable.

| Role | Catalog category | Owns | First move |
| --- | --- | --- | --- |
| [Sales Outbound](https://docs.x.ai/grok-bot/use-cases) | customer-sales | Account research, contact ranking, review-ready outreach | Draft a review list. Do not send or enroll. |
| [Talent Scout](https://docs.x.ai/grok-bot/use-cases) | customer-sales | Sourcing, candidate research, outreach drafts | Find matches. Do not contact anyone. |
| [Account Health](https://docs.x.ai/grok-bot/use-cases) | customer-sales | Risk and expansion signals | Ranked watch list. Do not contact customers or edit the CRM. |
| [Paid Media](https://docs.x.ai/grok-bot/use-cases) | finance-ops | Campaign monitoring, budget recommendations | Recommend reallocations. Do not change budgets or send Slack. |
| [Expense Manager](https://docs.x.ai/grok-bot/use-cases) | finance-ops | Weekly expense reconciliation | Summary and draft follow-ups. Do not send or change reimbursements. |
| [Product Performance](https://docs.x.ai/grok-bot/use-cases) | coding-shipping | Evidence-backed investigations | Write-up with links. Do not change alerts or production. |
| [Bug Reproduction](https://docs.x.ai/grok-bot/use-cases) | coding-shipping | Reproduction packs | Staging only. No production customer data. |
| [Chief of Staff](https://docs.x.ai/grok-bot/use-cases) | inbox-calendar | Source-linked digest | Digest only. Do not send messages or change meetings. |

There is no official "General Helper."

To turn a starter into a durable bot: put job, sources, output, and boundaries in the description; run one safe task; save a skill; add a routine only after retries are defined. Keep consequential actions behind approval.

A roster of these roles is a pack, not a share. See [packs/chief-of-staff.md](../packs/chief-of-staff.md).
