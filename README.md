# Awesome Grok Bot

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![CC0](https://img.shields.io/badge/catalog-CC0-lightgrey.svg)](LICENSE)
[![MIT](https://img.shields.io/badge/scripts-MIT-blue.svg)](LICENSE-MIT)
[![GitHub stars](https://img.shields.io/github/stars/majiayu000/awesome-grok-bot?style=social)](https://github.com/majiayu000/awesome-grok-bot)
[![GitHub last commit](https://img.shields.io/github/last-commit/majiayu000/awesome-grok-bot)](https://github.com/majiayu000/awesome-grok-bot/commits/main)
[![Live shares](https://img.shields.io/badge/x.ai%2Fbot-live%20shares-black.svg)](catalog.json)

[English](README.md) · [中文](README.zh-CN.md)

> 3646 live `x.ai/bot` shares for Grok Bot you can preview and Add — plus field cases of how people actually run them.

**This week:** catalog grows daily; skim [recent commits](https://github.com/majiayu000/awesome-grok-bot/commits/main) or the [searchable site](https://majiayu000.github.io/awesome-grok-bot/) for what just landed.

[Grok Bot](https://docs.x.ai/grok-bot/overview) is an always-on AI teammate on a shared cloud computer. This bilingual catalog indexes public **live shares** (not prompt dumps): find a share, open it on x.ai, then Add.

## Contents

- [How to use](#how-to-use)
  - [Try these first](#try-these-first)
  - [Browse by job](#browse-by-job)
  - [Studio doors](docs/studio-doors.md)
  - [Searchable site](https://majiayu000.github.io/awesome-grok-bot/)
  - [How to add a share and try a first task](https://majiayu000.github.io/awesome-grok-bot/#getting-started)
- [SEO notes](docs/seo.md)
- [Contributing](CONTRIBUTING.md)
- [Field cases](#field-cases)
  - [Rosters](#rosters)
  - [Computer-use jobs](#computer-use-jobs)
  - [Gotchas](#gotchas)
- [Official docs](#official-docs)
- [Team packs](#team-packs)
- [Coding & shipping](#coding--shipping)
- [Inbox & calendar](#inbox--calendar)
- [Research & briefings](#research--briefings)
- [Customer & sales](#customer--sales)
- [Finance & ops](#finance--ops)
- [Content & publishing](#content--publishing)
- [Personal admin](#personal-admin)
- [Teams & handoffs](#teams--handoffs)
- [Skills and tools](#skills-and-tools)
  - [Linux laptop app](#linux-laptop-app)
  - [Local and study](#local-and-study)
  - [Model and factory](#model-and-factory)
  - [CLIs and SDKs](#clis-and-sdks)
  - [Chat bridges](#chat-bridges)
  - [Skill packs and playbooks](#skill-packs-and-playbooks)
  - [Indexes](#indexes)
  - [Open-source alternatives](#open-source-alternatives)
- [Tutorials](#tutorials)
- [Reviews](#reviews)

## How to use

Live searchable catalog: [majiayu000.github.io/awesome-grok-bot](https://majiayu000.github.io/awesome-grok-bot/) (filter by category + shelf).

[Install Grok Bot](https://docs.x.ai/grok-bot/get-started) on a Mac, a Windows PC, or an iPhone. Open a share and hit **Add to Grok Bot**.

<p align="center">
  <img src="docs/screenshots/add-button.png" alt="A live share page. The black button is Add to Grok Bot." width="420">
</p>

A share is a **recipe**, not a clone ([Templates guide](https://x.ai/bot/guides/templates-for-grok-bot)). It copies the name, skills, routines, relevant workflow memories without personal or internal details, and first-party plugins. It does not copy the computer, files, logins, custom MCP/scripts, API keys, or personal/internal memories. Inspect the template details before Add; after Add, reconnect plugins and keys yourself. Skills can fail to travel.

Your bots share one cloud Linux computer (cap 50). That is not the app on your laptop. There is no official Linux desktop app. Linux laptops use [Linux laptop app](#linux-laptop-app).

Paid Cursor and SuperGrok include Grok Bot. See [plans](https://cursor.com/help/grok-bot/plans).

> Community shares are untrusted. Read the profile, connect one plugin, try a read-only task, then enable writes. Do not paste API keys into SETUP. [SECURITY.md](SECURITY.md)

### Try these first

These are `shelf=featured` in [catalog.json](catalog.json). Start with one share. Open it, hit Add, run a read-only task.

- **[下载专家](https://x.ai/bot/z7xup0Ax1SBl2K84PELqF)** · Turns long videos and podcasts into searchable Chinese transcripts.
- **[Online Identity Bot](https://x.ai/bot/4VEl6mp1QrsvvjTFR-qE_)** · Daily search-engine check for what is newly public about you.
- **[AI 视频专家](https://x.ai/bot/ES3LVns98INeXAoYwef_f)** · Turns one photograph into a short, moody film clip.
- **[Join a Startup Bot](https://x.ai/bot/XJCoBm6z7qjAnt9ScG8i7)** · Daily handful of early-stage jobs the big boards miss.
- **[推特运营方法论](https://x.ai/bot/ScOhH1qaoq4XdoYhisagg)** · A daily X posting system for ideas, drafts, timing, and review.
- **[薅羊毛 (Wool Radar)](https://x.ai/bot/WFW6_5N596TQpWCRjRZ5w)** · Watches for deals on things you actually buy, and stays quiet otherwise.
- **[记账管家](https://x.ai/bot/WW-UbmTKXn79q0yXapvJE)** · Private ledger fed by text, receipt photos, or voice notes, with optional Feishu sync.
- **[X Algo](https://x.ai/bot/W0LrVwNwsRHhFY4PG7586)** · Tells you whether to post now, quote something, or sit tight.
- **[X Ops Expert](https://x.ai/bot/fePZGiWiTZP9n4BoKIlMY)** · X growth ops for builders with daily review, topic bank, and gated drafts.
- **[Human Copywriter](https://x.ai/bot/JZAccYtlRFvDSU2CnMnkZ)** · Rewrites AI-sounding drafts into copy that reads like a person.
- **[产品推广交稿员](https://x.ai/bot/k_7pPRlHeZc2cku1zvVqr)** · Hands you ready-to-post promo copy for your product on a fixed rhythm.
- **[SubCut](https://x.ai/bot/MzuJZpvaIK2KpexUVY-V0)** · Audits your email for silent subscription drain and names what to cut.
- **[Bounty Hunter](https://x.ai/bot/gCWYD009F66A3XDEYdZgf)** · Digs through your email and bills for refunds and credits you never chased.
- **[Gmail Bot](https://x.ai/bot/4Kert6xnfaArPgZmyJi5M)** · Weekday morning unread digests, drafts in your voice, triage labels/trash.
- **[Token Efficiency Optimizer](https://x.ai/bot/cp_nk3ftrAgaKbYONW6fa)** · Stops wasteful runs when more burn will not change the reset, proposes cuts, and holds spend until you exact-yes an override.
- **[Raven](https://x.ai/bot/hbzAWQX-CBMF2uAa00jEs)** · A sharp nutrition coach that logs meals from text or a photo.
- **[Nourishment](https://x.ai/bot/E_j1gMmT7KLW4HWbMV2nK)** · Healthy-eating coach that reads fridge and pantry photos, builds recipes from what you have, and shops to a budget.
- **[Home Hunter](https://x.ai/bot/ljzXIgAQcGOV0QxYjHH8I)** · Locks city, budget, beds and commute on first chat, then quietly scans listings daily until you pick a place.
- **[Flight Deal Assistant](https://x.ai/bot/sCd3BcjAeQrr77Qrg1waM)** · Finds and compares flight deals by trade-offs, not just cheapest.
- **[Prospect Drafts](https://x.ai/bot/Ed8OwTpWaFfZdJHEAoT4t)** · Finds fit prospects by geography, industry, and offer, then drafts first-touch Gmail notes in your voice.

`shelf` in [catalog.json](catalog.json) is editorial navigation (featured, solid, studio-door, aka, raw). Reachable is not the same as safe. `verified` is a separate maintainer flag.

Studio doors (orchestrators, installers, front desks): **155** listed in [docs/studio-doors.md](docs/studio-doors.md).

The full list is below, grouped by job. Field cases and gotchas sit above the wall of links.

### Browse by job

| Category | Listed |
| --- | ---: |
| [Coding & shipping](#coding--shipping) | 483 |
| [Inbox & calendar](#inbox--calendar) | 143 |
| [Research & briefings](#research--briefings) | 465 |
| [Customer & sales](#customer--sales) | 326 |
| [Finance & ops](#finance--ops) | 444 |
| [Content & publishing](#content--publishing) | 436 |
| [Personal admin](#personal-admin) | 938 |
| [Teams & handoffs](#teams--handoffs) | 411 |
| **Total** | **3646** |

All 3646 share pages returned HTTP 200 on 8 Oct 2026. Reachable is not the same as safe or correct. Maintainer review status is **0 verified / 3646 listed** (`verified: true` in [catalog.json](catalog.json) means a maintainer imported the Bot and finished a safe first task).

## Field cases

Public writeups of a real run.

<p>
<a href="https://www.youtube.com/watch?v=kAR91DlnCKQ"><img src="docs/screenshots/ray-fernando.jpg" alt="Ray Fernando, Clippy CTO" width="400"></a>
<a href="https://www.youtube.com/watch?v=5CSXUsljJ_E"><img src="docs/screenshots/matthew-berman.jpg" alt="Matthew Berman, eleven live jobs" width="400"></a>
</p>

### Rosters

- [CasJam's 13-bot product org](https://x.com/CasJam/status/2093762642867581359) - One Chief plus Head, Growth, and Maintainer for each of four brands.
- [n2parko's SpaceXAI roster](https://x.com/n2parko/status/2087251704744235298) - Chief of staff, EM, five eng ICs, and a real agent-to-agent PR handoff.
- [Farzad's named specialists](https://x.com/farzyness/status/2087340859138224540) - Webby, Shorty, and Writey under an orchestrator.
- [Tyler's two doors](https://x.com/TylerNishida/status/2093426221732532457) - Work and Life as two standing inboxes. Mixed jobs always go to Life.
- [Gota's twelve jobs](https://x.com/gota_bara/status/2087666940450152841) - Image factory, research briefs, 3D, travel, cancel subscriptions, and a local LLM on the VM.
- [Nate's twelve Bots in eight hours](https://natesnewsletter.substack.com/p/grok-bot-review) - First-day roster that asks whether a $200 agent team is worth it.
- [Krista's enterprise GTM roster](https://x.com/kristaletz/status/2089103618121314689) - CoS, overnight prospecting, per-account experts, and live slide updates.
- [Ben Lang's internal job list](https://x.com/benln/status/2087929147406299313) - Starlink-biased flights, recipe-to-Whole Foods, film-scan EXIF, contractor quotes.
- [Jon's plumbing-shop office manager](https://x.com/HouseHackerJon/status/2087635639701573962) - Drain-and-sewer shop owner handing office work to a Bot in the first 24 hours.
- [Grokularity](https://grokularity.xyz) - A non-coder stood up a company site in a day. Humans read. Only proven Grok agents write.
- [Mo Bitar's eight-bot shop](https://atmoio.substack.com/p/i-went-in-ready-to-hate-grok-bot) - Stood up eight named bots in an afternoon, including a Blog Manager that pushed a live site change without being told where the files lived.
- [Remy's Alfred, Gordon, and Florence](https://aiwithremy.beehiiv.com/p/what-i-m-actually-using-grok-bot-for) - Alfred for ops, Gordon for content, Florence for brand deals. Alfred handed an NDA to Florence. Gordon got stuck an hour posting to X.
- [Billy Howell's Arlington Bagel](https://www.thefuturist.co/making-with-grok-bot/) - A 6,000-reader Thursday newsletter run with a Chief of Staff plus research and sales bots. The sales bot priced an ad slot and drafted the pitch.
- [Dennis Yu's twelve ops desks](https://dennisyu.com/how-i-use-grok-bot/) - A public BlitzMetrics roster with can/cannot rules. IT Support recovered a WordPress login from the shared computer.
- [Ray Fernando's Clippy CTO](https://www.youtube.com/watch?v=kAR91DlnCKQ) - One Grok Bot as Direct Responsible Agent that hires child bots for PRs, Convex, and auth. View-only. Burned past two billion tokens in a day.
- [Chris Maconi's Hechura roster](https://www.linkedin.com/posts/chrismaconi_people-are-asking-me-how-we-are-using-grok-activity-7496571167063916544-j7IO) - Named Grok Bots run daily GTM, engineering, PM, and IT, then hand coding to Cursor CLI.
- [Rick Hightower's Spillwave second brain](https://rickhigh.substack.com/p/grok-bot-claude-code-and-codex-share) - Thirteen named Grok Bots share a git-native wiki with laptop Claude Code and Codex. Writes go to a branch, not main.
- [Household Grok Bot Swarm](https://ylgibby.github.io/grokbot-household-swarm/) - A 13-bot household roster writeup with a public live page. ([repo](https://github.com/ylgibby/grokbot-household-swarm))

### Computer-use jobs

- [Debbie buys gluten-free beer](https://debbie.codes/blog/i-sent-grok-bot-to-buy-my-gluten-free-beer) - A Sunday-night shopping run that shows computer-use, not chat.
- [Debbie tries to book flights](https://debbie.codes/blog/i-tested-if-grok-bot-could-book-my-flights) - Honest near-miss. The Bot can drive the airline site. The last click still needs you.
- [Gergely Orosz on Stripe refunds](https://x.com/GergelyOrosz/status/2090085668768694562) - Hooks support mail and Stripe, with a human confirm before money moves.
- [Mike P's 90,000-email purge](https://x.com/mikepat711/status/2089879632929554498) - A Bot walks two Gmail accounts and throws out junk the owner never wanted to touch.
- [Danny's 74 game art assets](https://x.com/DannyLimanseta/status/2087228218797617404) - Reads the codebase, generates art, crops transparent PNGs, and wires them back in two hours.
- [Darian chases five merchant refunds](https://x.com/darian314/status/2089381004524093752) - Hunts unrefunded returns in email and writes the merchants.
- [Yun-Ta texts a Matic vacuum](https://x.com/yunta_tsai/status/2089223114416898288) - A Chief Engineer Bot talks to @maticrobots so he can text the vacuum from anywhere.
- [Yun-Ta books a table while walking](https://x.com/yunta_tsai/status/2087415205756391461) - Mixed Chinese and English voice. The Bot scans calendars and books a table.
- [Wayne Sutton ships a site from the phone](https://x.com/waynesutton/status/2088416215203295346) - Convex plus Cloudflare plugins. Domain, redirects, and a live demo in two phone prompts.
- [WordPress updates taught once](https://x.com/mrfundman/status/2089760255890571404) - Teach-a-task on a real CMS instead of writing a deploy script.
- [Arduino updates from a Bot](https://x.com/KettlebellDan/status/2089920364419874937) - The Bot pushes hardware updates so the human can stay off X.
- [KettlebellDan's LED stock ticker](https://x.com/KettlebellDan/status/2089387837204693202) - Bot talks to an Arduino so the marquee scrolls SPCX price, a sparkline, and SpaceX news.
- [Sid's Polymarket daily brief](https://x.com/sidshekhar24/status/2089735218861326727) - Scans the day's settled markets and writes the report.
- [Peter Yang's Marie Kondo Bot](https://x.com/petergyang/status/2089724101070086482) - Audits email, Drive, and paid subs, then waits for approval before anything is deleted.
- [Peter Yang plays Commander Keen](https://x.com/petergyang/status/2089502606079197347) - Installs and plays Commander Keen on the cloud desktop, lag and all.
- [Kiara's meeting stand-in](https://x.com/kiaraplds/status/2088321112073547835) - A Bot joins a meeting she misses, announces itself, and takes notes.
- [Gavin Baker's 15-second podcast summarizer](https://x.com/GavinSBaker/status/2089379355692527813) - Stands up a podcast summarizer in about 15 seconds and calls it another Claude Code moment.
- [Box credit-committee pack](https://x.com/Box/status/2087275866950938662) - Reconciles materials and writes the pack back into Box via MCP.
- [24/7 support agent in 19 minutes](https://www.youtube.com/watch?v=bUALqTpUze0) - Customer-support Bot built on a routine, not a helpdesk rewrite.
- [Japanese cloud-computer field notes](https://note.com/azumimusuhi/n/n0485219790bb) - Hands-on writeup of living on the shared VM for a week.
- [Lee Robinson's four bets](https://x.com/leerob/status/2089169319099777364) - No UI, thin client, always-on computer, browser as a first-class tool.
- [Logan on the computer, not 4.6](https://x.com/LoganJastremski/status/2089903051557491092) - No API, no MCP, no hosted browser. The Bot just uses software like a person.
- [Markus Buehler, four photos to a Bambu H2D print](https://www.linkedin.com/posts/markus-j-buehler-2245682_grok-bot-is-incredible-the-bots-move-naturally-activity-7496875174911291392-LO9a) - Overnight three-bot lab from four structure photos to a physics simulator, a LaTeX report, and two STLs sliced on a Bambu Lab H2D.
- [Matthew Berman's eleven live jobs](https://www.youtube.com/watch?v=5CSXUsljJ_E) - On-camera email scoring, DoorDash, a weekly disk cleanup that found 90 GB of junk, and a Telegram bridge.
- [Debbie's first-look coding and LinkedIn](https://dev.to/debs_obrien/grok-bot-just-dropped-and-i-had-to-try-it-2bnf) - A coding Bot closed old issues on her Playwright movies repo, and a LinkedIn Bot actually posted.

### Gotchas

Staff-confirmed or screenshot-backed.

- [Bots are not a security boundary](https://forum.cursor.com/t/grok-bot-ship-real-session-fences-bots-are-not-a-security-boundary/168476) - Every Bot on the account sees the same logins and files.
- [Always-on workers vs topic threads](https://forum.cursor.com/t/grok-bots-as-always-on-workers-vs-topic-threads/168183) - A Bot is a standing coworker, not a chat tab.
- [Reconnect issue](https://forum.cursor.com/t/grok-bot-reconnect-issue/168500) - Real screenshot of "can't reach your computer" after a reconnect.
- [X login lock on the Bot computer](https://forum.cursor.com/t/grok-bot-x-login-lock-limit-not-lifting/168541) - Cloud computers hit site risk controls. X locks are not theoretical.
- [ExternalShell blocked despite Always allow](https://forum.cursor.com/t/grok-bot-externalshell-blocked-despite-always-allow/168180) - Allow-lists still fail. Do not assume Always allow means always.
- [Deleted Cursor account orphans the Grok link](https://forum.cursor.com/t/deleted-cursor-account-leaves-grok-link-orphaned-and-blocks-relinking/168783) - Account deletion can pin the Bot to a dead Cursor identity.
- [No local MCP](https://forum.cursor.com/t/does-grok-bot-support-local-mcp-e-g-workflowy/168182) - Staff-confirmed. Use remote HTTP MCP or the cloud browser.
- [Gmail attachments are metadata only](https://forum.cursor.com/t/grok-bot-gmail-connector-can-list-attachments-but-cannot-download-their-bytes/169261) - The Gmail connector lists attachments. It cannot download the bytes.
- [Grok Bot login is an extra computer](https://forum.cursor.com/t/does-logging-into-grokbot-count-as-a-separate-computer/169289) - A Grok Bot login is its own Cursor device and can count toward Too many computers.
- [Weekly usage spills into On-Demand](https://forum.cursor.com/t/grok-bot-gives-no-warning-before-weekly-usage-spills-into-paid-on-demand/169679) - No in-app warning. Set a $0 On-Demand cap if you want no paid spill.
- [Gmail plugin OAuth is broken](https://forum.cursor.com/t/grok-bot-unable-to-authenticate-via-gmail-plugin/169782) - Authorize Gmail from Cursor instead. The connection is shared until the plugin is fixed.
- [Flocker dumps a live Bot computer](https://flocker.md/blog/grok-bot-roles-workspace-and-specs/) - They inspected a real Grok Bot VM: 8 vCPU, 16 GB RAM, Debian KVM, no GPU, about 120 GB disk.
- [Refresh wipes WhatsApp linked-device](https://forum.cursor.com/t/computer-refresh-wipes-whatsapp-linked-device-session-in-grok-bot/169025) - Refresh keeps `/workspace`, the browser profile, and `~/.config`. Not `~/.local/state`, so WhatsApp link sessions vanish.
- [Trial end deletes nothing](https://forum.cursor.com/t/grok-bot-cloud-workspace-inaccessible-after-trial-exhaustion-ticket-t-e97475-pending/169010) - Bots stop replying. Computer view still lets you export until you Reset.
- [Notion OAuth Invalid redirect_uri](https://forum.cursor.com/t/grok-bot-notion-plugin-oauth-invalid-redirect-uri/169234) - Sign-in is stored on the account, so retry fails. Re-authenticate (not Connect) clears it.
- [Grok Bot has Channels](https://forum.cursor.com/t/grok-bot-threads-ui-is-unusable-needs-a-slack-style-right-panel/168315) - Sidebar `+`, up to 6 bots per named space.
- [Stuck Reconnecting can be local DNS](https://forum.cursor.com/t/grok-bot-desktop-on-macos-is-permanently-stuck-on-reconnecting-to-your-computer/169119) - The cloud computer can be healthy while traffic to `cursorvm.com` is dropped (VPN or firewall).
- [Ask it to hand you the computer](https://forum.cursor.com/t/grok-bot-failed-to-open-its-computer-and-couldnt-recognize-the-issue/169179) - Login tasks should hand you the computer. Skip passkeys with Try another way.
- [Cloud agents burn Cursor usage](https://forum.cursor.com/t/query-about-grok-bot-cursor-agent-usage-and-model-selection/169160) - Agents Grok Bot starts run in your Cursor account. Chat has a separate allowance.
- [No compact. Full transcript each turn](https://forum.cursor.com/t/grok-bot-prune-compact-an-agent-s-context-without-creating-a-new-bot/168333) - Desktop and iOS have no Compact or same-bot new session. There is no model picker.
- [Webhook URL is desktop-only](https://forum.cursor.com/t/webhook-url-missing-on-ios/169589) - The POST URL and sender key appear on desktop, not iOS.
- [Official X plugin auth is broken](https://forum.cursor.com/t/official-x-plugin-auth-is-broken-on-cursor-cloud-grok-bot-and-desktop-refresh/169592) - Connect/refresh fails across desktop, Cloud Agents, and Grok Bot. No clean workaround.
- [Grok Bot has no codebase plugin](https://forum.cursor.com/t/does-grokbot-not-have-access-to-my-cursor-codebase/169684) - It does not index your repo. Coding work is handed to a Cursor Cloud Agent on a GitHub-connected account.
- [Custom connectors are added in chat](https://forum.cursor.com/t/grokbot-custom-connectors/169965) - No settings form. Tell the Bot to add a public HTTPS MCP. Localhost MCP on your PC is unreachable.
- [Drive is file-level. Docs and Sheets edit content](https://forum.cursor.com/t/grok-bot-drive-mcp-should-write-google-docs-body-and-sheet-cells-not-only-file-metadata/169971) - Add Docs and Sheets connectors with the same Google account if you need in-place edits.
- [Blank screen can be Cloudflare WARP](https://forum.cursor.com/t/blank-screen-after-opening-grok-bot/169966) - WARP can intercept traffic to the cloud computer. Turn it off or split-tunnel.
- [Phantom plugin mints a new agent wallet](https://forum.cursor.com/t/phantom-in-grok-bot-is-a-mess/169930) - Each new auth creates a dedicated agent wallet, not your personal Phantom wallet.
- [Hung custom MCP takes down all connectors](https://forum.cursor.com/t/grok-bot-hung-custom-mcp-remotes-are-invisible-in-plugins-yours-and-uninstall-also-times-out-discovery-catch-22/168350) - One hung custom HTTP MCP can freeze discovery, uninstall, and Plugins Yours so only staff can clear it.
- [Template import drops skills](https://forum.cursor.com/t/grok-bot-templates-preview-shows-skills-but-the-export-ships-skills-skills-are-never-delivered/169911) - Template preview shows skills but import applies none until you paste the skill body yourself.
- [iOS Always allow is desktop-local](https://forum.cursor.com/t/authorization-death-by-1000-clicks/170087) - Always allow for a registered Mac lives in that desktop app. iOS only gets one-shot approvals cleared each message.
- [No Bugbot review on Grok-launched agents](https://forum.cursor.com/t/review-bugbot-is-missing-on-cloud-agents-launched-from-grok-bot/170096) - Cloud agents started by Grok Bot never get /review or /review-bugbot. Start them from Agents, IDE, or CLI instead.

## Official docs

Start with the [overview](https://docs.x.ai/grok-bot/overview), [get started](https://docs.x.ai/grok-bot/get-started), [plans](https://cursor.com/help/grok-bot/plans), and [FAQ](https://docs.x.ai/grok-bot/faq). Isolation is per user, not per Bot. Wiping Grok Bot deletes the Cursor account too.

### Guides (x.ai/bot/guides)

- [Guides index](https://x.ai/bot/guides) - Official walkthroughs for shipping and sharing bots.
- [Templates for Grok Bot](https://x.ai/bot/guides/templates-for-grok-bot) - Recipe not meal. What ships in a share vs what you reconnect after Add.
- [Grok Bot for Engineering](https://x.ai/bot/guides/grok-bot-for-engineering) - Outer/inner loop with Cursor cloud agents, specialists, feedback with proof, routines for audits and P0.

Catalog entry norms that follow these guides: [docs/entry-spec.md](docs/entry-spec.md).

### News

- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Included with more plans](https://x.ai/news/grok-bot-more-plans)
- [Works with X](https://x.ai/news/grok-bot-and-x)
- [Grok Bot for Enterprise](https://x.ai/news/grok-bot-for-enterprise)
- [Setting Grok Bot loose on procurement](https://x.ai/news/grok-bot-procurement)

### docs.x.ai

[Overview](https://docs.x.ai/grok-bot/overview) · [Get started](https://docs.x.ai/grok-bot/get-started) · [Use cases](https://docs.x.ai/grok-bot/use-cases) · [iOS](https://docs.x.ai/grok-bot/mobile) · [Bots](https://docs.x.ai/grok-bot/bots) · [Chat](https://docs.x.ai/grok-bot/chat-and-collaboration) · [Files](https://docs.x.ai/grok-bot/files-and-results) · [Computer](https://docs.x.ai/grok-bot/computer-and-apps) · [Skills](https://docs.x.ai/grok-bot/skills-routines-and-automations) · [Settings](https://docs.x.ai/grok-bot/settings-and-notifications) · [Approvals](https://docs.x.ai/grok-bot/approvals-security-and-privacy) · [Teams](https://docs.x.ai/grok-bot/teams-and-enterprises) · [Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting) · [FAQ](https://docs.x.ai/grok-bot/faq)

### Cursor help

[Getting started](https://cursor.com/help/grok-bot/getting-started) · [Sign in](https://cursor.com/help/grok-bot/sign-in) · [SuperGrok](https://cursor.com/help/grok-bot/supergrok-heavy) · [Mobile](https://cursor.com/help/grok-bot/mobile) · [iOS purchase](https://cursor.com/help/grok-bot/mobile-purchase) · [Plugins](https://cursor.com/help/grok-bot/connect-plugins) · [Secrets](https://cursor.com/help/grok-bot/secrets) · [Recover computer](https://cursor.com/help/grok-bot/computer-recovery) · [Plans](https://cursor.com/help/grok-bot/plans) · [Delete account](https://cursor.com/help/grok-bot/delete-account) · [Get help](https://cursor.com/help/grok-bot/get-help)

Zoom desktop auth currently fails with error 4700. SuperGrok Plus does not stack usage on Ultra. iOS in-app purchase is monthly individual only.

[xAI plugin marketplace](https://github.com/xai-org/plugin-marketplace) · [@bot share templates](https://x.com/bot/status/2093376523919323618) · [@bot can buy things](https://x.com/bot/status/2093419921007108385)

## Team packs

One share is one bot. Assemble the roster yourself.

- [Work + Life two-door](packs/two-door-work-life.md)
- [Chief of Staff + Fixer + specialists](packs/chief-of-staff.md)
- [CasJam product heads (Head + Growth + Maintainer)](packs/casjam-product-heads.md) - roster from [CasJam](https://x.com/CasJam/status/2093762642867581359). No share URL; assemble it.

## Coding & shipping

Full list (483 shares): [catalog/en/coding-shipping.md](catalog/en/coding-shipping.md)

## Inbox & calendar

Full list (143 shares): [catalog/en/inbox-calendar.md](catalog/en/inbox-calendar.md)

## Research & briefings

Full list (465 shares): [catalog/en/research-briefings.md](catalog/en/research-briefings.md)

## Customer & sales

Full list (326 shares): [catalog/en/customer-sales.md](catalog/en/customer-sales.md)

## Finance & ops

Full list (444 shares): [catalog/en/finance-ops.md](catalog/en/finance-ops.md)

## Content & publishing

Full list (436 shares): [catalog/en/content-publishing.md](catalog/en/content-publishing.md)

## Personal admin

Full list (938 shares): [catalog/en/personal-admin.md](catalog/en/personal-admin.md)

## Teams & handoffs

Full list (411 shares): [catalog/en/teams-handoffs.md](catalog/en/teams-handoffs.md)

## Skills and tools

Community GitHub. Clone, paste, or install.

### Linux laptop app

No official Linux desktop app. The Bot computer in the cloud is already Linux. This line is only if your laptop is Linux.

- [falser101/grok-bot-linux](https://github.com/falser101/grok-bot-linux) - Index of Cursor-CDN Linux `.deb` / `.rpm` / AppImage URLs and distro packaging. Does not host installers.

### Local and study

- [grokbot-shim](https://github.com/codeaashu/grokbot-shim) - Run Grok Bot locally with a computer desktop and configurable Codex or OpenAI-compatible models.
- [grok-bot-0.18-reconstructed](https://github.com/b-nnett/grok-bot-0.18-reconstructed) - Unofficial TypeScript reconstruction of Grok Bot 0.18.0 for macOS. Study-only, archived.
- [grok-bot-0.18-original](https://github.com/ChHsiching/grok-bot-0.18-original) - Unminified 0.18.0 runtime archive, split per module, byte-for-byte reproducible.
- [omabot](https://github.com/njpatel/omabot) - Puts your Grok Bot roster in the Omarchy bar, read-only, faces and all.

### Model and factory

- [opengrok](https://github.com/OnlyTerp/opengrok) - Pick any model for a Grok Bot. Keys stay on your machine.
- [openbot](https://github.com/aaravarr/openbot) - Bring your own models to Grok Bot. Local control UI, with a switch back to stock behavior.
- [Grok Ship](https://github.com/kunchenguid/grok-ship) - Turns a Bot into a software factory, with review before any PR.
- [grok-bot-setup](https://github.com/BlockedPath/grok-bot-setup) - Adapters CLI and custom model provider bridges for DeepSeek, Claude, Grok, and OpenAI.
- [grokbot2api](https://github.com/taowen/grokbot2api) - Local OpenAI-compatible proxy so Grok Build can call Cursor-hosted Grok models over undocumented inference protobuf.
- [grokrouter](https://github.com/promptadvisers/grokrouter) - Reversible Mac (and Windows preview) router so official Grok Bot uses Codex SDK or OpenRouter per Bot, with stock restore.
- [grok-bot-switch](https://github.com/enderzcx/grok-bot-switch) - Switch Grok Bot onto your own API providers from the cloud computer, with a path back to official Grok.
- [ungrok](https://github.com/abhaysudhir/ungrok) - Unofficial host mod to bring your own model, with setup checks, update recovery, and rollback.

### CLIs and SDKs

- [grok-bot-cli](https://github.com/ScriptedAlchemy/grok-bot-cli) - Terminal CLI to list, create, and message teammates from a signed-in Mac.
- [grokbot-sdk](https://github.com/adam91holt/grokbot-sdk) - TypeScript SDK for a running host. Typed local HTTP gateway client plus sand-data disk readers.
- [grok-bot-skill](https://github.com/adamanz/grok-bot-skill) - Cursor/Claude skill so a coding agent can list, chat with, and create Grok Bot teammates.
- [grokbot-tui](https://github.com/smarzban/grokbot-tui) - Unofficial terminal TUI that talks to the host gateway so you can chat from the terminal.
- [Grok Bot for Raycast](https://github.com/Jahquan/grok-bot-raycast) - Unofficial Raycast extension. Cursor sign-in, per-bot threads, Markdown and LaTeX.
- [grokbot-queue](https://github.com/ShuhangGe/grokbot-queue) - CLI (gbq) that queues work onto running Bots over Tailscale/SSH.
- [dictate-capture](https://github.com/budezllc/dictate-capture) - Windows helper. Hold Ctrl+D to dictate into Grok Bot, optionally paste a screenshot.
- [QuotaRail](https://github.com/Allan-Aa/QuotaRail) - Native macOS Dock-style usage rail for Codex, Claude, Grok, and Grok Bot.
- [locum](https://github.com/HarjjotSinghh/locum) - Custom MCP so a cloud Grok Bot can tunnel coding work onto your already-logged-in local Claude Code or Codex CLI.
- [Grok Bridge](https://github.com/niharnm/grok-bridge) - Experimental CLI for scoped Grok Bot handoffs with coding agents, with a tested Codex round trip, request-correlated replies, and community `gbot` transport.
- [foreman](https://github.com/Archive228/foreman) - Zero-dependency CLI that inspects a Grok Bot crew against git-declared AGENT.md packs and writes a shift report of stalled work.
- [grok-bot-usage](https://github.com/Kargatharaakash/grok-bot-usage) - Zero-dep `gbu` command that prints weekly Grok Bot usage and on-demand spend across Cursor accounts.
- [coolify-cursor-plugin](https://github.com/coollabsio/coolify-cursor-plugin) - Coolify plugin that points Cursor or Grok Bot at `https://<instance>/mcp` so a bot can inspect servers, apps, deploys, and logs.
- [grok-bot-mcp](https://github.com/Kargatharaakash/grok-bot-mcp) - Zero-dep MCP so Claude or Cursor can list, message, and read Grok Bot transcripts on the local gateway.
- [Grok Usage Menu Bar](https://github.com/diegocp01/grok_bot_usage_menu_bar) - Native macOS menu-bar app for weekly Grok Bot allowance left and reset countdown.
- [Convoy](https://github.com/Deploy-Forward/convoy) - Public MCP plus hop CLI. Grok Bot conducts; BYO harness CLIs do the hops.
- [grokbot-openai](https://github.com/owenisas/grokbot-openai) - PKCE login like the app, then a local OpenAI /v1/chat/completions for Hermes, OpenCode, or curl.

### Chat bridges

- [grokbot-imessage-skill](https://github.com/jeffhuber/grokbot-imessage-skill) - Read, triage, and send iMessage from the Bot via a local macOS helper.
- [linq-grokbot-text-channel](https://github.com/jeffhuber/linq-grokbot-text-channel) - Linq shared-number text channel into a Grok Bot via a Vercel webhook forwarder.
- [grok-wechat-plugin](https://github.com/little-thing/grok-wechat-plugin) - WeChat iLink channel. Inbound messages wake a Bot over webhook.
- [grokbot-telegram-bridge](https://github.com/SSBrouhard/grokbot-telegram-bridge) - Unofficial Telegram gateway that talks to the local Sand gateway on loopback only.
- [Grok Bot Discord gateway](https://github.com/davefmurray/grok-bot-discord) - Bridge so a Bot can live in Discord without pretending to be a Slack App.
- [discord-grok-bot-kit](https://github.com/larry-fuqua/discord-grok-bot-kit) - Discord listener that wakes a Grok Bot webhook on the owner's mention.
- [grokbot-cloudflare-inbox](https://github.com/ethanolivertroy/grokbot-cloudflare-inbox) - Self-hosted Grok Bot inbox on Cloudflare Workers, based on Agentic Inbox.
- [grokbot-hermes-bridge](https://github.com/iamsupersocks/grokbot-hermes-bridge) - Self-hosted OAuth MCP gateway so Grok Bot can ask a local Hermes Agent through `hermes_ask` and `hermes_status`.
- [grokbot-obsidian-bridge](https://github.com/iamsupersocks/grokbot-obsidian-bridge) - Fail-closed OAuth reverse proxy that exposes a loopback Obsidian MCP after owner approval.
- [grokbot-discord](https://github.com/RudeDude/grokbot-discord) - Python Discord gateway. One Discord bot, many Grok Bots, webhook wake, async reply.
- [Discord for Grok Bot](https://github.com/NinjaProtocol/grokbot-discord-plugin) - Paste-in Discord plugin. Mentions in allowlisted channels wake the Bot.
- [twilio-grok-voice-bridge](https://github.com/jeffhuber/twilio-grok-voice-bridge) - Experimental Twilio Media Streams bridge so a Bot can place outbound Grok Voice calls.

### Skill packs and playbooks

- [google-maps](https://github.com/zechsmerquis/google-maps) - Places Text Search script plus optional Maps Grounding Lite MCP for a Bot computer.
- [Grok Bot 橙皮书](https://github.com/KinGao294/grok-bot-orange-book) - Chinese playbook for a five-person fleet, routines, and cost control.
- [grok-skills](https://github.com/jaskirat1616/grok-skills) - 195 `SKILL.md` playbooks. Browse at [grokbotskills.vercel.app](https://grokbotskills.vercel.app).
- [note-kojo](https://github.com/matsutouya/note-kojo) - Pick a note.com account and send the draft to a Grok Bot.
- [awesome-grokbot](https://github.com/mergisi/awesome-grokbot) - Paste START.md into a blank Bot and it stands up a 2-4 person team.
- [rosterroom](https://github.com/codejunkie99/rosterroom) - 82 paste-in team rosters with ownership lanes and approval gates.
- [grok-bot-profiles](https://github.com/HAEGONG/grok-bot-profiles) - Splits spec, implementation, and verification so a Bot never approves its own work.
- [Runway plugin](https://github.com/runwayml/runway-mcp-plugin) - Official Runway marketplace plugin for image, video, and audio generation from Grok Bot.
- [TellTell connector](https://github.com/TellTellApp/telltell-connector) - Official TellTell people-directory plugin with OAuth MCP for Grok Bot.
- [parallel-ai-mcp](https://github.com/Parallel-AI-Labs/parallel-ai-mcp) - Official Parallel AI MCP plugin for Cursor and Grok Bot.
- [root-agent-skill-framework](https://github.com/MrBekoX/root-agent-skill-framework) - Root Agent skill pack that sizes a team, creates Bots, and hands day-to-day to Leads.
- [thin-grok-bot-deep-work-on-cli](https://github.com/Luca-Blight/thin-grok-bot-deep-work-on-cli) - Keeps the Bot mesh thin and hands deep builds to Cursor CLI or cloud agents.
- [grok-bot-shopping](https://github.com/steve228uk/grok-bot-shopping) - Shopping skills. Paste INSTALL.md into a Bot.
- [grok-bot-templates](https://github.com/cobusgreyling/grok-bot-templates) - Scored operating contracts with a START.md installer and 49 paste-ready profiles.
- [crew-contract](https://github.com/lsj210001/crew-contract) - Operating protocol for crews. Seven-field missions, artifact handoffs, and stop-on-budget.
- [grok-factory](https://github.com/jaredtrichard/grok-factory) - Followable pack. Firstmate routes software, research, and general work on the shared computer.
- [grok-research](https://github.com/jaredtrichard/grok-research) - Paste-in distro. Captain-gated equity research factory with scout reports and a sqlite book. No live trades.
- [grok-bot-restaurant-scout](https://github.com/mykemueller1-ctrl/grok-bot-restaurant-scout) - Restaurant social-commerce scout with morning-scan skills and a copy-paste SETUP.md.
- [Werewolf gamemaster](https://github.com/Heyvhuang/werewolf-gamemaster) - Skill pack so the Bot runs a Werewolf table, not a hello-world SKILL.md.
- [Hyperliquid 7-agent trading desk](https://github.com/galleonlabs/hypergrok-trading-desk) - Experimental. Seven specialized Bots on one desk. Read the code first.
- [grokbot-for-gtm](https://github.com/bcharleson/grokbot-for-gtm) - Playbook plus skills so a Bot can run outbound GTM. Instantly, HeyReach, human-approved sends.
- [Grok Bot Plays](https://github.com/ZooHero500/plays) - How-to catalog of plays rewritten from public posts, with source links.
- [Uncle-Gizmo notes](https://github.com/Uncle-Gizmo/grok-bot-info) - Public notes on safe example workflows and how Bot sits next to Grok Build.
- [learn-grok-bot](https://github.com/yuanyijie/learn-grok-bot) - Unofficial 16-lesson course on the desktop-agent harness. Electron, turn loop, sandbox, MCP.
- [PhoneZero](https://github.com/function1st/PhoneZero) - Paste-in Grok Bot skill that books a table by phone over Telnyx and xAI voice, plan-first then dial.
- [tesla-fleet-mcp](https://github.com/supervised-nl/tesla-fleet-mcp) - Tesla Fleet MCP plus a .grok-plugin so a Bot can list cars and, with tesla-http-proxy, climate charge lock.
- [grokbot-skills](https://github.com/jeremybrasher/grokbot-skills) - Scored skill shelf from awesome-claude-skills, licenses kept, only admitted folders ship.
- [grokbot-x](https://github.com/YannisKiefer/grokbot-x) - Self-learning X growth kit. Scout gold, draft unslop, publish via Typefully, nightly SkillOpt.
- [heavy-lift-cloud-agents](https://github.com/napiermd/heavy-lift-cloud-agents) - Skill that keeps Grok Bot as CoS and hands heavy work to Cursor CloudAgent or Grok Build.
- [grokbot-peekaboo](https://github.com/bcharleson/grokbot-peekaboo) - Skill so a Bot drives registered Macs through Peekaboo for screen, shots, and UI input.

- [grok-bot-playbook](https://github.com/s-hiraoku/grok-bot-playbook) - Japanese field handbook for named roles. Contracts, request templates, skill/routine flows, and handoff `.md` files.
- [grok-bot-second-brain](https://github.com/mKay00/grok-bot-second-brain) - Cloneable five-bot second-brain plan on one shared computer (Conductor, Capture, Memory, Ops, Research).
- [grok-bot-template-market](https://github.com/DomenicFotino/grok-bot-template-market) - Community market of paste-in Grok Bot templates.
- [grokbot-outreach-agent-team](https://github.com/novusordos666/grokbot-outreach-agent-team) - Outreach team pack. Named bots plus skills for prospecting and follow-up.
- [nexfade-grok-plugin](https://github.com/NexFade/nexfade-grok-plugin) - Community `.grok-plugin` for wiring extra tools into a Bot.
- [grok-bot-token-saver](https://github.com/Chakhdz/grok-bot-token-saver) - Skill that watches token spend and stops a Bot before the weekly pool is gone.
- [unlist](https://github.com/shawnyeager/unlist) - Local data-broker removal playbook plus CLI tracker. Give BOT.md to a Grok Bot to drive opt-outs.
- [pigeon-mcp](https://github.com/iXanadu/pigeon-mcp) - Self-hosted multi-account Gmail MCP with real MIME send and attachments, not Google's hosted MCP.
- [multiBot](https://github.com/simo255/multiBot) - Factory pack that spawns CLI-delegated teammates through CreateAgent.
- [GojiberryAI Sales OS](https://github.com/romangojiberryAI/gojiberryai-sales-os) - Open outbound sales roster for Grok Bot on the GojiberryAI MCP.

### Open-source alternatives

- [OpenMausBot](https://github.com/milind-soni/OpenMausBot) - Open-source Grok Bot alternative with a virtual machine that bots can use.
- [pi-box](https://github.com/ahmadaccino/pi-box) - Open-source Grok Bot-shaped personal agent. Pi harness, any container, skills-first plugins.
- [LocalFleet](https://github.com/Varun-Patkar/LocalFleet) - Local-first bot team in a chat app. Per-bot desktop containers on a shared filesystem.
- [rakazo](https://github.com/elie222/rakazo) - Open-source alternative. Choose your own model and sandbox.
- [guaca](https://github.com/madebywelch/guaca) - Another self-hosted take on persistent computer-use agents.
- [OpenGrokBot](https://github.com/wolfqing/OpenGrokBot) - OpenClaw plus bring-your-own-model, assembled as a Bot stand-in.
- [open-grokbot](https://github.com/ishandutta2007/open-grokbot) - Early equivalent. Read before you grant credentials.
- [XinyunOpenBot](https://github.com/dongpen-max/XinyunOpenBot) - Chinese-language open alternative aimed at the same job-to-be-done.
- [botroster](https://github.com/mandarwagh9/botroster) - Named teammates, one durable computer, approvals, and routines. Rust/Tauri.
- [hermes-bot-kit](https://github.com/thomasbek3/hermes-bot-kit) - Hermes Desktop plugins that copy the Grok Bot feel. iMessage-style bubbles plus a live computer window.
- [LaoA-GrokBot](https://github.com/zhulin025/LaoA-GrokBot) - Customizable Grok Bot emoji and action lab that can generate share cards.
- [anomalia](https://github.com/anomaliaso/anomalia) - Open-source Grok Bot-shaped marketing desk. Plans, writes, and publishes only after you approve.
- [hydo](https://github.com/fortun8te/hydo) - Local MIT desktop roster on Hermes Agent. Named teammates, channels, one shared box.
- [snorlax-bot](https://github.com/chinghauchu/snorlax-bot) - Open-source local Grok Bot-shaped desktop and iOS stack aimed at NVIDIA DGX Spark.

## Tutorials

Community walkthroughs.

- [How to Get Started with Grok Bot](https://debbie.codes/blog/how-to-get-started-with-grok-bot) - Debbie's field guide. First Bot, CoS prompt, and how she reorganizes the roster.
- [Grok Bot Masterclass](https://www.dailydoseofds.com/p/grok-bot-masterclass/) - Avi / Daily Dose. Record once, turn it into a skill, hang it on a routine.
- [A deep dive into Grok Bot](https://flaviocopes.com/grok-bot/) - Flavio Copes on the shared computer, skills to routines, share-as-template, and Stripe Link spend requests.
- [Technocore Grok Bot (JA)](https://github.com/hariou/technocore-grokbot-ja) - Japanese guide for safely operating a Technocore DID on Grok Bot.
- [Peter Yang: 5 Must-Try Use Cases](https://www.youtube.com/watch?v=MkVcHbviYOw) - Advisor, YouTube researcher, X scout, Gmail declutter, travel concierge.

- [How to Set Up Grok Bot and Build Your First AI Agents](https://www.mindstudio.ai/blog/grok-bot-setup-guide) - Install-to-first-agent walkthrough. Heavy / Ultra / Teams gates called out.
- [Grok Bot Explained](https://www.ayautomate.com/blog/grok-bot-xai-ai-agents-explained) - Explainer with a real iPhone screenshot of a Bot roster.
- [Hand Off Real Work Across Your Apps](https://app.therundown.ai/guides/hand-off-real-work-across-your-apps-with-grok-bot) - The Rundown's how-to for handing multi-app jobs to a Bot.
- [Connect Multiple Slack Workspaces](https://www.usecarly.com/blog/how-to-connect-multiple-slack-workspaces-to-grok-bot/) - Slack event wake-up is not the same as installing Grok Bot as a Slack App.
- [LAVX: a deep dive into Grok Bot](https://news.lavx.hu/article/a-deep-dive-into-grok-bot) - Shared-computer isolation, plugin-then-browser tool order, Stripe Link approvals, and when Zapier or a coding agent is a better fit.
- [Grok Bot Templates](https://www.aibuilderclub.com/blog/grok-bot-templates) - Mechanics of Share as template, what travels, third-party terms, and how to vet an Add.
- [How to Use Grok Bot](https://www.aibuilderclub.com/blog/grok-bot-guide) - Distills real rosters. On-disk board, interview once, state file, send nothing.

See also [Grok Bot 橙皮书](https://github.com/KinGao294/grok-bot-orange-book) under Skill packs.

## Reviews

- [The Verge: an AI teammate you can assign work](https://www.theverge.com/ai-artificial-intelligence/978666/spacexai-grok-bot-ai-agent-beta-launch) - Launch coverage that keeps the product distinct from grok.com chat.
- [Lenny's Newsletter: Grok Bot, Grok 4.6, and Cursor](https://www.lennysnewsletter.com/p/i-tested-grok-bot-grok-46-and-cursor) - Separates the Bot product from the 4.6 model. Do not collapse the two.
- [Grok Bot vs OpenClaw](https://myclaw.ai/blog/grok-bot-vs-openclaw) - Managed cloud computer vs self-hosted, bring-your-own-model.
- [Before You Hire a $200 Grok Bot](https://zchmael.substack.com/p/before-you-hire-a-200-grok-bot-ai) - Skeptical checklist. What the seat does not buy you.
- [CellCog: Grok Bot pricing](https://cellcog.ai/blog/grok-bot-pricing/) - Living pricing note. Eight routes from Cursor Pro $20 / SuperGrok $30, unpublished weekly allowance.
- [What is Grok Bot? The Real Cost & Hidden Risks](https://4geeks.com/en/blog/ai-tools/what-is-grok-bot) - Cost and credential risk. One shared computer is not a security boundary.

- [VentureBeat: persistent digital coworkers](https://venturebeat.com/orchestration/spacexais-grok-bot-turns-agents-into-persistent-digital-coworkers-that-can-operate-your-apps-for-120-per-month) - Launch read on always-on coworkers that operate your apps.
- [Grok Bot vs OpenClaw vs ChatGPT](https://www.mindstudio.ai/blog/grok-bot-vs-openclaw-chatgpt) - Three-way comparison. Managed computer vs self-host vs chat.
- [Grok Bot vs ChatGPT for work](https://www.eigent.ai/blog/grok-bot-vs-chatgpt-work) - Work-desk comparison, not a model bake-off.
- [Grok Bot vs Claude Cowork](https://www.eigent.ai/blog/grok-bot-vs-claude-cowork) - Persistent Bot computer vs Claude Cowork sessions.
- [10 Best Grok Bot Alternatives (2026)](https://www.vellum.ai/blog/best-grok-bot-alternatives) - Roundup of nearby products. Useful as a map, not a ranking.
- [Khe Hy](https://khemaridh.substack.com/p/grok-bot-is-surprisingly-good) - Hands-on review. Gym login on the cloud computer, Notion/Granola prospect match, mobile reach-test.

## Contributing

PR a live `https://x.ai/bot/…` URL, a field case, or a GitHub tool. One sentence. Run `node scripts/lint.mjs` if you touch the catalog. Details in [CONTRIBUTING.md](CONTRIBUTING.md).

Do not invent share URLs. Do not paste another person's full standing instructions. Do not send meetup or Luma links.

## Related

Community galleries of live shares: [somi.ai/grok-bots](https://somi.ai/grok-bots) · [grokbot.dev](https://grokbot.dev) · [grokyard.com](https://www.grokyard.com)

Catalog and recipes (`catalog.json`, `catalog/`, `templates/`, `packs/`) are CC0-1.0 ([LICENSE](LICENSE)). Scripts (`scripts/`) are MIT ([LICENSE-MIT](LICENSE-MIT)). Chinese: [README.zh-CN.md](README.zh-CN.md).
