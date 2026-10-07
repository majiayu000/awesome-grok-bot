# Entry spec (recipe, not clone)

Official framing: a Grok Bot share is a **recipe**, not a meal or a 1:1 clone.
See [Templates for Grok Bot](https://x.ai/bot/guides/templates-for-grok-bot) and
[Grok Bot for Engineering](https://x.ai/bot/guides/grok-bot-for-engineering)
([Guides index](https://x.ai/bot/guides)).

CONTRIBUTING.md is the source of truth for PRs. This page is the field checklist
for featured / PROFILE / SETUP style entries (and a strong recommend for solid).

## What ships vs what the importer reconnects

| Travels in the share | Does **not** travel |
| --- | --- |
| Name, standing instructions (as packaged) | Computer, files, browser sessions |
| Skills (when export includes them) | Logins, API keys, secret values |
| Routines (triggers) | Custom MCP servers, local scripts, vendor tokens |
| First-party marketplace plugins (by plugin id) | Personal / internal memories |
| Relevant workflow memories without personal / internal details | |

After **Add to Grok Bot**, the importer must reconnect plugins and supply their
own keys. Skills can fail to travel (preview shows them, export ships
`skills: []` - forum 169911). Inspect the template details, including skills and memories, before relying on it.

Custom MCP and non-standard scripts are never in the template. Encode setup
steps in SETUP.md / `post_install` so the end user can rebuild the flow.

## Required for `templates/<slug>/` (PROFILE + SETUP)

Lint already requires these on `templates/*/entry.json` (and the matching
catalog object):

| Field | Meaning |
| --- | --- |
| `first_safe_task` | Read-only first task after Add. No sends, writes, spends, or deletes. |
| `approval_boundary` | What must wait for an explicit human yes in chat. |

Also required as files: `PROFILE.md`, `SETUP.md`, `entry.json` deep-equal to
the catalog row.

## Required in new or updated SETUP.md (and PROFILE when you write one)

Write the recipe framing in plain language:

1. **What ships** - name / skills / routines / relevant non-personal workflow memories / first-party plugins (ids or names).
2. **What to reconnect** - plugins and connectors the importer must attach.
3. **Secrets** - env **names** only (never values). Point at Cursor Secrets /
   plugin auth, not paste-into-SETUP.
4. **First safe task** - same text as `first_safe_task`.
5. **Approval boundary** - same idea as `approval_boundary`.
6. **Optional acceptance** - for coding / ops bots: CI green, screenshot
   before/after, or a short checklist table (Engineering guide feedback loop).

## Optional catalog fields (schema-allowed, not required for all 3387 rows)

Use when a featured/solid template benefits from structured data. Raw ingest
rows may omit them.

| Field | Type | Use |
| --- | --- | --- |
| `connectors` / `connectors_optional` | string[] | Structured first-party / known plugins. Prefer these when you know the list. |
| `plugins_needed` | string[] | Freeform reconnect checklist (first-party names and/or remote MCP labels). |
| `secrets_needed` | string[] | Env var **NAMES** only (`^[A-Za-z_][A-Za-z0-9_]*$`). Never values. |
| `post_install` | string | Short after-Add note (reconnect, check skills, run first safe task). |
| `acceptance` | string | Proof of done for coding bots (CI, screenshot, table). |
| `mcp_custom` | boolean | True when the flow needs custom MCP the share cannot copy. |

Do **not** mass-edit `catalog.json` to fill these. Add them when you touch a
template or promote a row to featured / solid with SETUP notes.

## Engineering pattern (optional, for coding bots)

From the Engineering guide - useful when the bot manages Cursor cloud agents:

- **Outer loop** - Grok Bot gathers context and writes the prompt / acceptance bar.
- **Inner loop** - coding work goes to Cursor cloud agents.
- **Feedback** - require proof (screenshot, CI, transcript) before marking done.
- **Specialists + ops** - one bot per domain; an ops bot for playbooks / postmortems.
- **Routines** - nightly audits, P0 transcript checks (token-heavy; true urgency only).

Document the acceptance bar in `acceptance` or SETUP. Do not invent share URLs
for official role starters (those stay in `docs/official-starters.md`).

## Safety reminders

- No secrets, tokens, or private hosts in catalog or template files.
- Never put API key **values** in SETUP or `secrets_needed`.
- See [SECURITY.md](../SECURITY.md) and [docs/vetting.md](vetting.md).
