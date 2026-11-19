# After you import

Community templates are untrusted third-party software. A share link is public. Adding one accepts Grok Bot third-party bot terms.

## Checklist

1. Read the public preview first. Full standing instructions are often on the page.
2. Add to Grok Bot from the official `https://x.ai/bot/…` link. Desktop or iOS app required.
3. Inspect the imported profile against this repo's PROFILE.md paraphrase. If they disagree, trust the live bot and open an issue.
4. Pause imported routines and leave connectors disconnected for the first task.
5. Inspect skills. Preview can show skills while the export ships `skills: []` (forum 169911).
6. If a featured template lists a first safe task, run it read-only. Otherwise choose a harmless read-only task that fits the Bot's job.
7. After the first task, review which connector, routine, or write action you need before enabling it.
8. Do not paste API keys into SETUP. Reconnect plugins yourself. A share is a recipe, not a clone - see [entry-spec.md](entry-spec.md) and [Templates for Grok Bot](https://x.ai/bot/guides/templates-for-grok-bot).

## Account limits

- 50 bots plus group chats per account.
- 50 routines per bot.
- All bots on one account share one computer (files, browser sessions, logins). A second bot is not a security boundary.
- One share installs one bot. A team pack in `packs/` is a recipe you assemble yourself.

Do not leave an hourly routine on after a trial unless you meant to.

## verified

`verified: true` only after a maintainer imported the share and ran a documented safe first task. Rows in the README without that flag are reachable share pages we have not yet run.

## Run a documented first task

Use a dedicated test account with an empty cloud computer and a supported Grok Bot app. Review the live preview and imported instructions, pause routines, and leave external services disconnected. If the profile, a routine, or an approval prompts for access outside the test, stop and record the result as blocked.

The three Featured fixtures below use synthetic input in chat. Their imported behavior awaits a maintainer run.

| Featured share | First prompt | What to check |
| --- | --- | --- |
| [Human Copywriter](https://x.ai/bot/JZAccYtlRFvDSU2CnMnkZ) | Rewrite this as two plain sentences in chat. “Test Letter comes out on Fridays and covers community events. Subscription is free.” Use only this text. | The response keeps the name, Friday schedule, topic, and free price. |
| [Join a Startup Bot](https://x.ai/bot/XJCoBm6z7qjAnt9ScG8i7) | Use only these fictional listings. Pine Labs offers a remote backend role and Fern Studio has an onsite design role. Return the remote role and the reason in chat. | The response returns Pine Labs and cites the remote detail from the input. |
| [X Algo](https://x.ai/bot/W0LrVwNwsRHhFY4PG7586) | Compare these two fictional drafts using only their text. A says “The test build is ready.” B says “Try the test build and tell us if search feels faster.” Pick the draft with a clearer reader action and explain in chat. | The response picks B and mentions the trial or feedback request. |

For each prompt, check the visible activity and approval log for unexpected tool use, account access, writes, or routine runs. Record the date, share URL, app version, prompt, result (passed, failed, or blocked), and redacted evidence. Use the catalog flag after a maintainer records a passed import and first task. A test result describes that run and its fixture.

## shelf

`shelf` (featured / solid / studio-door / aka / raw) is editorial navigation only. Submitters leave new rows `raw`. Reachable share pages are not automatically safe; `verified` is the separate maintainer flag after an import and a documented safe first task.
