# After you import

Community templates are untrusted third-party software. A share link is public. Adding one accepts Grok Bot third-party bot terms.

## Checklist

1. Read the public preview first. Full standing instructions are often on the page.
2. Add to Grok Bot from the official `https://x.ai/bot/…` link. Desktop or iOS app required.
3. Inspect the imported profile against this repo's PROFILE.md paraphrase. If they disagree, trust the live bot and open an issue.
4. Connect **one** connector.
5. Inspect skills. Preview can show skills while the export ships `skills: []` (forum 169911).
6. If a featured template lists a first safe task, run it read-only. Otherwise choose a harmless read-only task that fits the Bot's job.
7. Only then enable routines or writes.
8. Do not paste API keys into SETUP. Reconnect plugins yourself.

## Account limits

- 50 bots plus group chats per account.
- 50 routines per bot.
- All bots on one account share one computer (files, browser sessions, logins). A second bot is not a security boundary.
- One share installs one bot. A team pack in `packs/` is a recipe you assemble yourself.

Do not leave an hourly routine on after a trial unless you meant to.

## verified

`verified: true` only after a maintainer imported the share and ran a documented safe first task. Rows in the README without that flag are reachable share pages we have not yet run.
