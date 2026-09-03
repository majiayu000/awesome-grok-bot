# Awesome Grok Bot

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![CC0](https://img.shields.io/badge/catalog-CC0-lightgrey.svg)](LICENSE-CC0)
[![MIT](https://img.shields.io/badge/scripts-MIT-blue.svg)](LICENSE-MIT)
[![GitHub stars](https://img.shields.io/github/stars/majiayu000/awesome-grok-bot?style=social)](https://github.com/majiayu000/awesome-grok-bot)
[![GitHub last commit](https://img.shields.io/github/last-commit/majiayu000/awesome-grok-bot)](https://github.com/majiayu000/awesome-grok-bot/commits/main)
[![Live shares](https://img.shields.io/badge/x.ai%2Fbot-live%20shares-black.svg)](catalog.json)

[English](README.md) · [中文](README.zh-CN.md)

> A community-maintained index of public Grok Bot shares. This is not the Grok Bot source code or an installer.

[Grok Bot](https://docs.x.ai/grok-bot/overview) is an app for persistent, named AI teammates that work through a shared cloud computer. This repo helps you find public Bot configurations to preview on `x.ai` and add to your own account.

## Contents

- [How to use](#how-to-use)
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

[Install Grok Bot](https://docs.x.ai/grok-bot/get-started) on a Mac, a Windows PC, or an iPhone. Open a share and hit **Add to Grok Bot**.

<p align="center">
  <img src="docs/screenshots/add-button.png" alt="A live share page. The black button is Add to Grok Bot." width="420">
</p>

A share copies the name, skills, routines, and first-party plugins. It does not copy the computer, files, logins, or API keys.

Your bots share one cloud Linux computer (cap 50). That is not the app on your laptop. There is no official Linux desktop app. Linux laptops use [Linux laptop app](#linux-laptop-app).

Paid Cursor and SuperGrok include Grok Bot. See [plans](https://cursor.com/help/grok-bot/plans).

> Community shares are untrusted. Read the profile, connect one plugin, try a read-only task, then enable writes. Do not paste API keys into SETUP. [SECURITY.md](SECURITY.md)

All 440 share pages returned HTTP 200 on 3 Sep 2026. That proves the page was reachable, not that the Bot is safe or works as described. In [catalog.json](catalog.json), `verified: true` means a maintainer imported the Bot and completed a safe first task.

### Browse by job

| Category | Listed |
| --- | ---: |
| [Coding & shipping](#coding--shipping) | 61 |
| [Inbox & calendar](#inbox--calendar) | 22 |
| [Research & briefings](#research--briefings) | 62 |
| [Customer & sales](#customer--sales) | 31 |
| [Finance & ops](#finance--ops) | 45 |
| [Content & publishing](#content--publishing) | 68 |
| [Personal admin](#personal-admin) | 77 |
| [Teams & handoffs](#teams--handoffs) | 74 |
| **Total** | **440** |

Current review status: **0 verified / 440 listed**.

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

### News

- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Included with more plans](https://x.ai/news/grok-bot-more-plans)
- [Works with X](https://x.ai/news/grok-bot-and-x)

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

- [Blockchain Data Expert](https://x.ai/bot/eyFr_G8h9UmrQHNpZpNfx) - Answers on-chain questions by querying The Graph's subgraphs directly. [Derek](https://x.com/data_nexus).
- [Claude Code](https://x.ai/bot/71PSQ4KBs-hNYBsH05X_n) - A dedicated coding agent that runs all software work through the Claude Code CLI. [Daniel](https://x.com/DanielZambrini).
- [Claudey](https://x.ai/bot/OR72i4SNc0_F1IzbCfg-D) - Hands frontend and architecture jobs to the Claude Code CLI, then opens the PR. [Farzad](https://x.com/farzyness).
- [Code Red](https://x.ai/bot/4y3jlvwxFNqcP76eJgpuD) - A rehearsed emergency stop for systems you own, gated behind your own confirmation. [Knock](https://x.com/SuddenlyJon).
- [dr eggbot](https://x.ai/bot/93gOz3op1UQdBdbekQFLK) - A bot that builds other Grok bots for you. [Lauren](https://x.com/poteto). Notes: [templates/dr-eggbot](templates/dr-eggbot/).
- [1000x Product Engineer](https://x.ai/bot/sQDD87Gp6VLT0m99tFpzu) - A full-stack product engineer that ships Convex, TanStack and React apps. [Thomas](https://x.com/TomZarebczan).
- [Agent Looper](https://x.ai/bot/AETdGbRRNWfckrRGv22LD) - Keeps a local coding agent iterating until your acceptance test passes. [dancingteeth](https://x.com/dancingteeth).
- [Alchemist](https://x.ai/bot/JjO20_oGKrE_Ys5Uz4efj) - Experiments its way to a method for undocumented problems. [Aman](https://x.com/2onism).
- [Apps](https://x.ai/bot/OPLop__-mqSsyQheR5JYv) - Describe an app in one sentence and get a running build back. [Wayne](https://x.com/waynesutton).
- [Engineering QA](https://x.ai/bot/b2tS8BNj8BhoQNDcB081S) - Guards the merge bar on repos you pick, escalating only the real judgment calls. [andreleibovici](https://x.com/andreleibovici).
- [Feedback](https://x.ai/bot/_-3KKbHbnSRzrS_8KFugU) - Turns a bug you have already confirmed into a clean report, filed with the right team. [NYTEMODE](https://x.com/nytemodeonly).
- [overnight shipper](https://x.ai/bot/aaqCOb-3SE48_7qAEAzAf) - Drop an idea before bed and review the pull request in the morning. [Josh](https://x.com/joshkim).
- [lgtm the pr closer](https://x.ai/bot/vGk7yV-vF92ZegpNF3NPo) - Wakes up each morning and burns down your open pull requests. [Claire](https://x.com/clairevo).
- [Gardener](https://x.ai/bot/oH3eR4YWtsljcz0W4HUBp) - Pulls provable dead code in tiny behaviour-preserving pull requests. [Tyler](https://x.com/tylerklose).
- [PR Reviewer](https://x.ai/bot/rt629UEZFtE4Wz0A_0c37) - Reviews pull requests risk-first. [mustafa](https://x.com/mustafaergisi).
- [AI Harness Assistant](https://x.ai/bot/oq-mYZXM23ShlY7UbJWeB) - Keeps every AI coding tool on your machines up to date. [Alan](https://x.com/gheeunit).
- [Agent Smith](https://x.ai/bot/JcFj23aaufNWkuiiJTX0j) - A janitor for multi-bot workspaces that stops cruft piling up. [Chip](https://x.com/chiplay).
- [Overwatch](https://x.ai/bot/7u3XiRiTYw4GVZmuZboyP) - Housekeeper for your Grok Bot VM so a shared machine does not rot. [Andrej](https://x.com/scheemunai).
- [Rutin](https://x.ai/bot/o4gWkNGmffEaVtOhaEsA7) - A Monday tune-up for every routine across your fleet of bots. [Naoufal](https://x.com/naoufal_elh).
- [Skill Bot](https://x.ai/bot/WdKtVYWvxVEDmc7xp8zO2) - A librarian for your bot's skills that dedupes and keeps them current. [Dave](https://x.com/davespeers).
- [BeTree](https://x.ai/bot/2PSNlIROOJPj9qZlfRy0w) - Turns a plan spread across several bots into one live graph. [Nicolas](https://x.com/NicoChauvin74).
- [Frontier Model Watch](https://x.ai/bot/YHqn0iTQuvI-8LC01IP6S) - One verified daily digest of releases from ten frontier AI labs. [Amina](https://x.com/GuleidAmina).
- [critiquito](https://x.ai/bot/rt9m-FTkJoGsZzAjsKLPM) - A design critic that reviews your UI screenshots and only has notes. [mamuso](https://x.com/mamuso).
- [Cursor Agent (Local)](https://x.ai/bot/z4r7D8iILsTQDf7r7DwKR) - Runs the cursor-agent CLI locally for experiments and shop-floor work. [ryanthawks](https://x.com/ryanthawks).
- [Design Expert](https://x.ai/bot/H2WEoHRGKv_6a3j6lsHiG) - Reviews AI-made interfaces the way a design lead would. [inqusit](https://x.com/inqusit).
- [Examiner](https://x.ai/bot/rBnJhXhks-_7n1zhZCN3E) - When something breaks it shows you what changed just before. [liam_fallen](https://x.com/liam_fallen).
- [Flowsery](https://x.ai/bot/tOP05p0n0XVUcpJDfPH0k) - Turns session recordings into a ranked list of things to fix. [tarasshyn](https://x.com/tarasshyn).
- [Forge (Template Foundry)](https://x.ai/bot/uF_uodOFUz9mdv6XDWE70) - One keyword in, a production-ready Grok Bot recipe out. [rryssf](https://x.com/rryssf).
- [Grimoire's Tome & The Grim Council](https://x.ai/bot/luPJeAxuAjhqO97wU3wm0) - A 50-skill coding wizard with a 20-member advisory council. [NickADobos](https://x.com/NickADobos).
- [helidon engineer](https://x.ai/bot/5mReUHPYTBA6nJ2aNvlqn) - Writes and reviews Helidon 4 code on modern Java. [TheSurenk](https://x.com/TheSurenk).
- [Linky](https://x.ai/bot/zcHEE4_hbqw3cZsy7X2Vk) - Send it any file, folder or bot output and it hands back a shareable URL. [adamludwin](https://x.com/adamludwin).
- [loops](https://x.ai/bot/Ub3T7usX-c6yRQibQq83P) - An engineering outer loop that sits above your coding agents. [mattyp](https://x.com/mattyp).
- [Peekaboo Mac](https://x.ai/bot/zY0fbKG9UqTMWIu1NcudB) - Adds screen recording, screenshots and UI input to your registered Macs. [brandon_ai](https://x.com/brandon_ai).
- [Sable: Game Art](https://x.ai/bot/oSvAMKX_ahD56ZmgwtRys) - Generates 2D game art and sprite sheets in a style you pick. [DannyLimanseta](https://x.com/DannyLimanseta).
- [Sanity](https://x.ai/bot/qR7nq7v3w0bwpojx2LgQx) - A specialist for Sanity content models, schemas and GROQ. [ahdumgray](https://x.com/ahdumgray).
- [SAP Technical Consultant](https://x.ai/bot/O08yUdBz6vFFqYITvWPPi) - An S/4HANA advisor for clean-core design decisions. [beinglalit21](https://x.com/beinglalit21).
- [Speed Lab](https://x.ai/bot/LEbVr_WZ-cym7XwIm7xf5) - Runs a research loop on your site's render speed and keeps the wins. [pwnies](https://x.com/pwnies).
- [substreams](https://x.ai/bot/4ZzeuafN9Z1boU8smYIXv) - Build and run Substreams blockchain data pipelines from chat. [Graphtronauts](https://x.com/graphtronauts_c).
- [Tally Desk](https://x.ai/bot/m-qZ-OIA6Nt2LZeb2bKg5) - Builds Tally forms, reads the responses, fills one on request. [joshkim](https://x.com/joshkim).
- [Tech Lead](https://x.ai/bot/RfFPxQ_rfEGcUncrJ6g_W) - Gates the merge on what the diff and the tests actually show. [Ashish](https://x.com/inqusit).
- [template generator](https://x.ai/bot/9oKJDID_EKLacIXpKfFAq) - Scans local Claude, Cline, and Grok Bot sessions, then offers templates you can generate and share. [Jarett](https://x.com/STACCoverflow).
- [CarmackBot](https://x.ai/bot/B5UMQzelNds6Iy2nuFrka) - A first-principles game-engine and firmware specialist for small hobby games. Ships the smallest stack that runs. Marcus.
- [Testbench](https://x.ai/bot/jbcYU5l_7qsLl49AIzh5q) - Gives a job too heavy for shared hardware its own GPU, then bills you the runtime. [useprismnetwork](https://x.com/useprismnetwork).
- [Usage-pool orchestrator](https://x.ai/bot/Nx4wpKeM_NYx577xlJFMD) - Sends heavy coding jobs to Cursor, Claude Code, or Codex pools instead of Grok Bot credits. [JordanHall_dev](https://x.com/JordanHall_dev).
- [Cookie Monster](https://x.ai/bot/55t0IuxxlT7BWffNVOKai) - Imports the right Chrome cookies onto the shared computer so browser bots stop dying at login walls. [scottxmetcalf](https://x.com/scottxmetcalf).
- [Brake](https://x.ai/bot/ig-dwKjUc7doBIDhiMi9Z) - Names the one recurring job quietly draining the weekly Grok Bot allowance. [FantomBuildz](https://x.com/FantomBuildz).
- [Usage Auditor](https://x.ai/bot/M5vd5Dp9Et4EZQ3Ik3Hn2) - Weekly inventory of every routine, ranked by cost, with duplicate and polling flags. [maxjean__](https://x.com/maxjean__).
- [Grok VM maintenance](https://x.ai/bot/9UZp5k0Fp0LYmkyos5swQ) - Sysadmin for the Bot Linux VM covering CPU, disk, services, and named package updates. [old_pgmrs_will](https://x.com/old_pgmrs_will).
- [Lingxi's Engineer Bot](https://x.ai/bot/fY1xWwCLzDDGVe3GwH78j) - Hands-off eng lead that launches cloud coding agents and only asks you to merge. [lingxi](https://x.com/lingxi).
- [Nightly Audit Engineer](https://x.ai/bot/hkGSHcqKjGc5dm3ugNc2U) - Overnight repo read that lands one small cleanup per area. [lingxi](https://x.com/lingxi).
- [Grok Build](https://x.ai/bot/eydijdzrfgtnmlnUyPSI-) - Dedicated machine for the real Grok Build CLI. [BillZanetti](https://x.com/BillZanetti).
- [Forge (dev factory)](https://x.ai/bot/7GgZtqkhyLzKKMNUa7dhd) - Hand it a spec you have signed off, and collect the pull request in the morning. [DanKillenberger](https://x.com/DanKillenberger).
- [Grok Build (client sites)](https://x.ai/bot/iwa3WaHZn385jfZrsQngL) - Builds client websites, deploys a Vercel preview, and emails the client the link. [beaudenison](https://x.com/beaudenison).
- [Grok Build (preview links)](https://x.ai/bot/AY2y4oPL_VgcttCt8OFqm) - Grok Build variant for shipping client sites with preview links. [DAssetBuzz](https://x.com/DAssetBuzz).
- [Repo Engineer](https://x.ai/bot/iXfxVelc85rIxgZ9hLeXD) - Ships small GitHub fixes as pull requests through Cursor cloud agents; never merges itself. [RustamAtuev](https://x.com/RustamAtuev).
- [tinkabot](https://x.ai/bot/br5f3C4mc75QCMEHaszXd) - Turns an API into a plugin your other bots can just pick up and use. [DenisLabelle](https://x.com/DenisLabelle).
- [Baut](https://x.ai/bot/NuFI0dF9FgvO8FfMPHKzx) - A copilot for shipping Grok.me games and making cash-honest product calls. [XAmandaMoore](https://x.com/XAmandaMoore).
- [Dr Web LP](https://x.ai/bot/xM153pKfXPLWagLi_O1vR) - Give it a picture of a web page and it builds that page in HTML and CSS. [old_pgmrs_will](https://x.com/old_pgmrs_will).
- [Fable 5.1 Oracle](https://x.ai/bot/tLSg4HxepSclMqbZUTRnX) - Thinks the build through and checks the work, but never writes the code itself. [bossriceshark](https://x.com/bossriceshark).
- [Farm](https://x.ai/bot/x3Iv-2J4mfxJY6JFlgwNa) - Sends the heavy coding work off to its own machine and brings back just the result. [mpieras](https://x.com/mpieras).
- [Lite Intel Fetch](https://x.ai/bot/FQRA5tERWsasaQGIZmBl_) - Fetches an unpaid buy_intel_pack HTTP 402 on Base and returns the JSON for agents that can pay x402. [RandyWhitePDX](https://x.com/RandyWhitePDX).

## Inbox & calendar

- [💼 CoS](https://x.ai/bot/eiVFbd0nIdH2gzSwHOs0D) - Keeps your agent bench, calendar and inbox on one weekday rhythm. [A-A-ron](https://x.com/theaaron).
- [Inbot](https://x.ai/bot/yH2UttxbMwMugweZrigHT) - An inbox-zero bot across every inbox you actually use. [Matthew](https://x.com/matt_silberman).
- [Inbox Zero](https://x.ai/bot/h5i1TCuYEL2mVtMbQtW98) - Keeps Gmail at zero by filing the noise every weekday. [LD](https://x.com/zapnocode).
- [loom](https://x.ai/bot/cElGnAaR55iPHK2DGdPdu) - Reads across Gmail threads and drafts the reply, never sends it. [Lauren](https://x.com/poteto).
- [Dewey](https://x.ai/bot/rfAHsaFrz6xHBMtUpxDi5) - Keeps an eye on Gmail and surfaces the mail that actually needs you. [William](https://x.com/Vixlio).
- [Google Agent](https://x.ai/bot/tttQVA2UtlNwCzITNCIr0) - A read-first operator for Gmail, Drive and Calendar. [Ryan](https://x.com/ryanthawks).
- [Dispatch](https://x.ai/bot/YkmZEZYBk-BqylyQbM3kq) - Nightly scan of email, Slack, LinkedIn and X DMs that books the missing calls. [Filippo](https://x.com/FilippoFonseca).
- [Jess](https://x.ai/bot/Nmv2fCQEcQc3EHzVXJZKN) - Recaps email, calendar, Notion and Slack before you open any of them. [Logan](https://x.com/LoganARobison).
- [Chief](https://x.ai/bot/QIfSY8pPwjqBSIdal-5CI) - Weekday-morning triage of your inbox, your calendar and your replies. [SmoresBoy](https://x.com/jxckvibe).
- [Time Keeper](https://x.ai/bot/IAEp851k9orM1LguTm2F8) - Bookends your day with a morning agenda and a night preview. [Mark](https://x.com/ironted21).
- [Newsletter Cleanup](https://x.ai/bot/dHd69sBvMG2o3lJa__T7K) - Audits six months of newsletters and unsubscribes only from what you approve. [Andrej](https://x.com/scheemunai).
- [Bot inbox](https://x.ai/bot/RHSd-aq6KC84xxUnvBXSl) - A one-line digest of every bot and group chat with something new. [Wayne](https://x.com/waynesutton).
- [Remind Bot](https://x.ai/bot/peJxDrQRS4t2DHuHfzhfW) - Holds the small reminders that never make it onto your calendar. [Damon](https://x.com/damonchen).
- [bookworm](https://x.ai/bot/KPpT1F6tP4Q5GZ2BH2hBH) - Drafts and sends founder-voiced beta invites for a reading app. [NavyaM89482](https://x.com/NavyaM89482).
- [Holly Helpdesk](https://x.ai/bot/sIoeE87fILU5CzptPF29K) - Runs the support inbox and help desk as a frontline agent. [clairevo](https://x.com/clairevo).
- [Love ❤️](https://x.ai/bot/Xg8tws0lVEouCHOVMcnLg) - Keeps the thoughtful part of a relationship from slipping. [dannybuck](https://x.com/dannybuck).
- [MarketBoxScan](https://x.ai/bot/-LYLlgknV3IgZcFEmhcLs) - A pre-work tech news and inbox briefing for writers. [techAU](https://x.com/techAU).
- [openrobot](https://x.ai/bot/ndO6BI7E2ur5X-bhWM_1R) - A collaboration intake desk that turns interest into an intro email. [noborderhuman](https://x.com/noborderhuman).
- [Receipt Scanner / Expense Tracking](https://x.ai/bot/qod4CrNQBlDIMm5wFYVQp) - Forward a receipt and it becomes a row in your expense sheet. [limeunfiltered](https://x.com/limeunfiltered).
- [Ship Note](https://x.ai/bot/xMCiRCmOCYLeRzW8nS6EL) - Turns a finished release into a changelog entry and an email. [sol_wright7](https://x.com/sol_wright7).
- [Tradbot](https://x.ai/bot/uY_7s1TZILVzUeJ9lLOx9) - A household chief of staff for family plans, school and home admin. [clairevo](https://x.com/clairevo).
- [WhatsApp Digest](https://x.ai/bot/k8sSgsXHhRTEZi9Sqt_J-) - Read-only daily summary of busy WhatsApp groups. Never sends. [PetrusJvR](https://x.com/PetrusJvR).

## Research & briefings

- [2nd Brain](https://x.ai/bot/c4fYduVVic2YtbcjXquD0) - Distils everything you read into a linked wiki that answers your questions. [LeTerryBZH](https://x.com/LeTerryBZH).
- [Collins](https://x.ai/bot/D6lddHs6lfM0k7Cj3P6j3) - Works through Hercules Collins's 1680 catechism, one question a day. [Zach](https://x.com/zachmllr).
- [Commercial Taste](https://x.ai/bot/vekulzIMXM8hDjkp-mDkX) - Commercial judgment for technical founders deciding without complete data. [Smit](https://x.com/thesmitpatel).
- [Competitor Watching](https://x.ai/bot/5PKSzU0ruN_DQbNXc7m0N) - Snapshots you against 3-8 competitors and alerts only on material change. [Andrej](https://x.com/scheemunai).
- [Connection Audit](https://x.ai/bot/qllnuXO-FDFBHZU4MSamY) - Triages the saved-reading pile and ties each keeper to a live problem. [Sultanov](https://x.com/thekuchh).
- [Consumption Autopsy](https://x.ai/bot/WBo-ahaIrvCKXUH_3iEFy) - Post-mortems your study habits and swaps one passive input for practice. [Sultanov](https://x.com/thekuchh).
- [Doing Gap](https://x.ai/bot/9WPtKWMppOYW9wwGPwOaE) - Counts what you have watched against what you have shipped, then makes you build. [Sultanov](https://x.com/thekuchh).
- [Errol](https://x.ai/bot/mQoLg90Pj5Cn2Gso4AkoQ) - Drills a children's catechism twice a day for family worship. [Zach](https://x.com/zachmllr).
- [Ethan](https://x.ai/bot/F5Mm-0O3fPPZjYGIdsycE) - A research desk with five specialist skills that fact-checks its own findings. [JUMPERZ](https://x.com/jumperz).
- [Feedback Clock](https://x.ai/bot/ySceLccAh5J8IVnq62mQl) - Closes the lag between an attempt and the verdict on it. [Sultanov](https://x.com/thekuchh).
- [github 优秀仓库](https://x.ai/bot/D9HYH2jAmGiKw7e499mrE) - Sweeps GitHub's trending page each morning and writes up the repos that matter. [umiastuti8329](https://x.com/ios_1261142602).
- [Just-in-Time Curriculum](https://x.ai/bot/rpkZERbKrIN_NlDl8ErVZ) - Drops the study backlog and teaches only what your next task needs. [Sultanov](https://x.com/thekuchh).
- [Keach](https://x.ai/bot/sAxCT93K8i7gwctmtAroD) - A morning drill through Keach's 1693 catechism, one question at a time. [Zach](https://x.com/zachmllr).
- [Meta Grok](https://x.ai/bot/HAhgshU4r50gS81LCcpmk) - A weekday roundup of the five Grok bots people are actually talking about. [FrankFindsOut](https://x.com/FrankFindsOut).
- [Podcast Summary Bot](https://x.ai/bot/CsyAhw5YQaVLeMSnMYwgA) - Paste a podcast link and get a TLDR plus the takeaways worth keeping. [NM](https://x.com/theadvisorbtc).
- [Product Idea Stress Test](https://x.ai/bot/JeFTvcDX-7QT2evKGIb52) - Finds the one belief your startup idea cannot afford to have wrong. [Hiten](https://x.com/hnshah).
- [Pulse](https://x.ai/bot/oUYHu9LEXP5RVPFvoG4Ms) - A read-only X concierge that turns a day of feed into one skimmable 7am brief. [Andrej](https://x.com/GrokBotDev).
- [Researchy](https://x.ai/bot/rQt4W2zO2Gx9lfcBjd1lj) - Checks claims against the live web and returns citations with dates. [Farzad](https://x.com/farzyness).
- [Retrieval Exam](https://x.ai/bot/OAlX-diXtFDIT6sTZ0NbI) - Closed-book questioning that separates real recall from mere familiarity. [Sultanov](https://x.com/thekuchh).
- [Struggle Gate](https://x.ai/bot/tjN1LsaYsuR7u0dQQvOGV) - Withholds the answer for ten minutes so you have to attempt it first. [Sultanov](https://x.com/thekuchh).
- [Stuck Cycle](https://x.ai/bot/fihe4nAy0jFWoygo4JCAW) - Runs one skill through repeated laps of attempt, snag, and targeted study. [Sultanov](https://x.com/thekuchh).
- [X Brief](https://x.ai/bot/GkX6X536UK2MlbkfGLQnb) - Learns what you pay attention to from your own posts, then watches that beat. [Daniel](https://x.com/daniel_mac8).
- [News Scout](https://x.ai/bot/9Mo5saoPQYIp45IgzMT7P) - A weekday morning news digest in your own timezone. [Eleni](https://x.com/byeleni).
- [Thoth](https://x.ai/bot/W4Z5pvEm6UgCml48Ig4dT) - Does deep research and files the dossiers so you can find them again. [Rich](https://x.com/RichSilver).
- [RuntimeWire - AI & Startup News](https://x.ai/bot/k4iwGejDGoy-oT7qohxXb) - A sourced daily read on AI funding, launches and founder moves. [Ryan](https://x.com/merket).
- [Youtube分析官](https://x.ai/bot/Ja29gpInav-alRhXhzyNL) - Ranks the best YouTube videos on a topic and writes the brief. [Mado](https://x.com/madogiwacowork).
- [Box Inspector](https://x.ai/bot/q7GLbLhMZDpJXBGuuci1J) - Inspects a Grok bot's share link before you let it into your account. [Knock](https://x.com/SuddenlyJon).
- [AI Resource Sift](https://x.ai/bot/3XvYxSCGJRY6x1woq-hdL) - Sweeps papers, code, lectures and forums into one reading stack. [Alen](https://x.com/beamnxw).
- [GrokBot Awesome Use Cases](https://x.ai/bot/DTNL6V2HxpUHj3MkI-bSj) - A short morning list of new Grok Bot use cases worth setting up. [Andrej](https://x.com/scheemunai).
- [aoty](https://x.ai/bot/Wt4IQj3R1eePOyOOnox7H) - Three new albums a week, picked from aggregated scores. [emrecolakoglu](https://x.com/emrecolakoglu).
- [Daily YouTube Recap](https://x.ai/bot/dug1Zq29P009fdcI5-tTC) - Morning recap of the YouTube channels you follow, silent when nothing dropped. [scheemunai](https://x.com/scheemunai).
- [Data Science (Querie)](https://x.ai/bot/Bu2sEQqu0hEjpbzN_07D3) - Owns analytics queries, spreadsheet pulls and metric definitions. [egavrilenko11](https://x.com/egavrilenko11).
- [family wordpress helpdesk](https://x.ai/bot/7ySyCp6OurH0hlcKMAm_b) - A help desk for the relative who runs the family WordPress site. [joshkim](https://x.com/joshkim).
- [Fantasy Football](https://x.ai/bot/VWAXuVB5VI6ScHdO97Bh0) - A year-round fantasy football desk for start, sit and trade calls. [notswizz](https://x.com/notswizz).
- [Fantasy Football Advisor](https://x.ai/bot/E273ZIwirOOdwMfeCp97t) - Runs your ESPN fantasy team like a GM, with you signing off on moves. [Colehollander10](https://x.com/Colehollander10).
- [friend finders](https://x.ai/bot/FGBuaEH72GHuC9ZrVj7XA) - Scans your own X DMs and tells you which threads to answer now. [pukerrainbrow](https://x.com/pukerrainbrow).
- [Interrogator](https://x.ai/bot/-TlSH1rNkA-c2JLsFFVc7) - Finds the assumptions you have been treating as facts. [liam_fallen](https://x.com/liam_fallen).
- [KeyWire Comic Week Brief](https://x.ai/bot/1hyNK6vXzs_8QamyfhvCV) - Weekly pull-list reminder and a comics digest tuned to your taste. [CryptoVonDoom](https://x.com/CryptoVonDoom).
- [last30days](https://x.ai/bot/ANv3NrqPfRcS9PdXku7h8) - Surfaces what people have actually said about a topic in the last 30 days. [mvanhorn](https://x.com/mvanhorn).
- [Lurk (Reddit Researcher)](https://x.ai/bot/12Gbp1lPVsfTVAHPXKd3B) - Mines Reddit for exact quotes and files a pain-point pack. [tinkerersanky](https://x.com/tinkerersanky).
- [Neuroscience](https://x.ai/bot/l_MfrDAGFed5t2A9Wrzqz) - A neuroscience and brain-computer-interface specialist. [monomyth](https://x.com/monomyth).
- [Off-Balance Atlas](https://x.ai/bot/tSUFdzcg2WDFLFsFLHzIb) - Writes source-linked deep dives on tech, ML and security. [AdemVessell](https://x.com/AdemVessell).
- [OutBid Mania](https://x.ai/bot/Sj_LPMP7hKOOSzF8YDiNr) - Tracks a viral bidding-site trend and its clones on a daily dashboard. [dragosroua](https://x.com/dragosroua).
- [Pitch Deck Coach](https://x.ai/bot/mqVPHm0oB3WPsnxbU1qB9) - Tells you what an investor will actually understand and remember. [hnshah](https://x.com/hnshah).
- [Raily](https://x.ai/bot/Yf3pOvZQ0B_9DDcCzuhDG) - Reviews possible new connections without touching your account. [raily](https://x.com/raily).
- [Research Bot](https://x.ai/bot/Nn0ykGa3vJ6YS7ib7F6yH) - Deep research that returns concise answers with verified citations. [ArthurMacwaters](https://x.com/ArthurMacwaters).
- [Segundo Cérebro](https://x.ai/bot/OaRwBX_QPos9EDlhLEV1J) - An Obsidian second brain with a morning brief and a nightly check-in. [liderzio](https://x.com/liderzio).
- [Sherlock Holmes](https://x.ai/bot/fXHgGtuPfTcHBTVKSCZ1d) - Give it a symptom and it works out what actually caused the drop. [liam_fallen](https://x.com/liam_fallen).
- [Steal This Business](https://x.ai/bot/Ojrv95GLUG1nO1p1RWzVK) - Reverse-engineers a company you admire into one you could build. [adxtyahq](https://x.com/adxtyahq).
- [StoriesBot](https://x.ai/bot/cV7nGFO88pb2WXNN56h8A) - Searches 17 years of MacStories, filterable by time and author. [viticci](https://x.com/viticci).
- [Travel Agent](https://x.ai/bot/_yHS4eeajJMAXY1EHAdoO) - Keeps a Notion travel log and answers questions from your own trips. [jjeremycai](https://x.com/jjeremycai).
- [YC Podcast Notes](https://x.ai/bot/0y-dcpVFqFkjibKs2M48D) - Hourly watch on Y Combinator's podcasts with founder-useful notes. [buuxbt](https://x.com/buuxbt).
- [Dan Patrick](https://x.ai/bot/hlQhxsU-pqQEkimm0it4V) - A 1990s SportsCenter-style scores bot. Morning rundown plus a ping when your teams' games go final. [Marcus](https://x.com/marcusramsey).
- [Research Runner](https://x.ai/bot/P2qgQokuPHVJhrkmRDmLv) - Rents Prism Network GPUs for CUDA jobs the shared computer cannot run. [useprismnetwork](https://x.com/useprismnetwork).
- [最值得关注的Grok Bot 推文？](https://x.ai/bot/lFDR77qKaT3Iglzv9pUac) - A twice-daily Chinese-language sweep of top Grok Bot accounts. [MaiYangAI](https://x.com/MaiYangAI).
- [Lumos](https://x.ai/bot/SwTxLoOaIwDqTSvhTIhrK) - Technical educator using the Feynman technique with examples and daily-life analogies. [mdafanulh](https://x.com/mdafanulh).
- [Private Desk](https://x.ai/bot/Tgl3sxrTsuAYL7MN8S3UT) - Analyses material too sensitive to hand to an ordinary chat window. [useprismnetwork](https://x.com/useprismnetwork).
- [Scout](https://x.ai/bot/ywADCWWZP0Bcq6bOeQpGt) - Builds the weekly intelligence pack behind a client's social strategy, sourced throughout. [zeuuss_01](https://x.com/zeuuss_01).
- [Trendspotter](https://x.ai/bot/nnDL-hclNLB8SkJvcVtwr) - Weekday digest of sports, entertainment, and culture trends plus AI-in-marketing signals. [jennananpei](https://x.com/jennananpei).
- [dosebot](https://x.ai/bot/2euxntVrddHyA3c2hyxiZ) - Tells you whether a business idea is a nice-to-have or a genuine ache. [onerinas](https://x.com/onerinas).
- [全球宏观分析师](https://x.ai/bot/08RSf587bOlWhbQai6A3I) - Reads big macro events for what they do to rates, the dollar, gold, crypto and equities. [Fund_Monkey](https://x.com/Fund_Monkey).
- [Zettelkasten](https://x.ai/bot/35ZO_vGqk_ch51C9qPX1c) - A slip-box partner for an Obsidian vault that files atomic notes only after you say yes. [pohlipit](https://x.com/pohlipit).

## Customer & sales

- [ADM account bot](https://x.ai/bot/4Gc1tZsJu7C8YH-EnTfaN) - A weekly account plan for keeping and growing customers. [Scott](https://x.com/scottxmetcalf).
- [AE deal bot](https://x.ai/bot/yXsqmCaODNkTEwtIbiXxe) - Grades your open opportunities against MEDDPICC and names the next move to make. [scottxmetcalf](https://x.com/scottxmetcalf).
- [Echo](https://x.ai/bot/ph5mcXqVy2p176Br7BJYi) - Builds the deck after a customer call, from what was actually said. [Krista](https://x.com/kristaletz).
- [Gus Fring](https://x.ai/bot/Dhk5c79MEj0MRM484ZM1k) - Sits between finished work and the customer, and gives it a straight verdict. [liam_fallen](https://x.com/liam_fallen).
- [Hermes SDR](https://x.ai/bot/EAlUWK8yH_xfsBcpdu7e_) - An outbound SDR agent that verifies each lead, then sends Instagram DMs and emails for a high-ticket offer. [Mauricio](https://x.com/MGallmur).
- [Linkedin Leads](https://x.ai/bot/-BdTEtBnZEq9K1ef-bn6W) - Daily LinkedIn lead sweep across posts and comments from your keywords. [Angel](https://x.com/angelesp).
- [LinkedIn Desk](https://x.ai/bot/tQuoQ94ErUfXNJu4xPqZi) - Vets LinkedIn invitations daily against a policy you set. [AJ](https://x.com/SEO).
- [PG](https://x.ai/bot/fcJJMM58AdXSTBdW3xWyW) - Researches accounts and mines podcasts for a real outreach hook. [Krista](https://x.com/kristaletz).
- [John Wick](https://x.ai/bot/_OlL8LPI6lc2xi82F4Gf7) - Maps a target company and works upward until it reaches the decision maker. [Liam](https://x.com/liam_fallen).
- [Post Call Assistant](https://x.ai/bot/xF12c5y4LVe7nf7IFguWI) - Drops your to-dos and a draft follow-up after every meeting. [Priya](https://x.com/itspriyaptl).
- [GTM Chief Of Staff](https://x.ai/bot/r9Svkbs3dN6CY1Iy_Au4b) - Carries the admin around enterprise deals so you can sell. [Sultanov](https://x.com/thekuchh).
- [SaaSbot](https://x.ai/bot/X6RbSbeyLvQ_I5k3zU4IM) - A weekday operator that runs GTM, outbound, QA and onboarding. [Daniel](https://x.com/danielfoch).
- [Website agency lead scout](https://x.ai/bot/FBSTEPfTxj7ekvSml-nUJ) - Delivers five vetted businesses that need a new website each morning. [Josh](https://x.com/joshkim).
- [Club Sponsor Bot](https://x.ai/bot/thQfSs8ZqbzB1w2cAmSzA) - Runs sponsor, recruiter and speaker outreach for a student club. [NavyaM89482](https://x.com/NavyaM89482).
- [Contra Job Scraper](https://x.ai/bot/__sNWxlx-8H08UluQuOeo) - Checks Contra's freelance feed every 6 hours and emails only on change. [techking_007](https://x.com/techking_007).
- [Harvey Specter](https://x.ai/bot/lkkCqhC1jBFp6ouZOQd9m) - Negotiates a deal, renewal or quote for the best realistic terms. [liam_fallen](https://x.com/liam_fallen).
- [Icebreaker](https://x.ai/bot/62_FP-LQ4OOq4uTevKlUP) - A job-hunt wingman for AI trust-and-safety roles. [amberdawn1786](https://x.com/amberdawn1786).
- [Mappy (Talent Map)](https://x.ai/bot/spIXb6rwPJq_iFlu1L-_l) - Maps everyone currently working at a target company. [NickRoman](https://x.com/NickRoman).
- [PhoneZero Operator](https://x.ai/bot/vB2o6vvmHjDQRM5yFH9vn) - Lets your bot place and receive real phone calls. [ibelevy](https://x.com/ibelevy).
- [Prospecting Sheet Builder](https://x.ai/bot/3Peagz3nzagjBRFhjrENd) - Wakes you up to a fresh sheet of qualified B2B accounts. [thekuchh](https://x.com/thekuchh).
- [Ralph](https://x.ai/bot/NQQjXITgX9V7WjaDh9Vzb) - Rebuilds a resume into a live portfolio of clickable work demos. [HouseHackerJon](https://x.com/HouseHackerJon).
- [Talent Matchmaker](https://x.ai/bot/l8p6rXw-lalL-UNiHySnJ) - Matches people looking for work against roles hiding in your inbox. [lennysan](https://x.com/lennysan).
- [Nikita Bier](https://x.ai/bot/m0wqg4OfsKBO6aKi93vCV) - Pressure-tests products for the share loop. Tells you if people will send it to a friend, cuts the extra, and gives one change to ship this week. Jacob.
- [SE call bot](https://x.ai/bot/9wmmsO_xoeLPeGEqjWLzE) - Live backup for solutions engineers on customer calls. [scottxmetcalf](https://x.com/scottxmetcalf).
- [Harry Dry](https://x.ai/bot/tr-3hPrAG7_LeSzKZ5_vu) - Copy chief that rewrites landing pages and ads so every line is visual and falsifiable. [joseamijares](https://x.com/joseamijares).
- [Ad-Active Lead Finder](https://x.ai/bot/nHDuTEJd3mC91rtLLPN0p) - Finds B2B leads that are actively advertising and stages a reviewable CRM import. [aferrari](https://x.com/aferrari).
- [InsightfulPipe](https://x.ai/bot/vYIAB3Z6V8gEERewymcw1) - Senior marketer for ads, SEO, social, and Shopify powered by live InsightfulPipe data. [insightfulpipe](https://x.com/insightfulpipe).
- [Jordan Belfort](https://x.ai/bot/fh1hnF7YJVoSJxEu-vKwj) - High-energy sales closer that drafts pitches and follow-ups. [liam_fallen](https://x.com/liam_fallen).
- [SEOAgent](https://x.ai/bot/scYgD9jdFhooaSHihRzy7) - Autonomous SEO engineer that bootstraps SEOAgent in your site repo and grows organic traffic. [SEOAgent_](https://x.com/SEOAgent_).
- [deck-guy](https://x.ai/bot/bdkJcjP5Gt9BaGTqh1vXH) - Builds the post-call slide deck straight out of the transcript. [pavravi](https://x.com/pavravi).
- [Know Enemy](https://x.ai/bot/LREkas8UxVGvPJ5NiO7bz) - Keeps a running read on the rivals you name, drawn only from what is already public. [SaaSocalypse](https://x.com/SaaSocalypse).

## Finance & ops

- [Beatrix Kiddo](https://x.ai/bot/z4Chp77wqP5ASkBKpxOOk) - Watches your deliveries and speaks up the moment one stops moving. [liam_fallen](https://x.com/liam_fallen).
- [BOTOSHI](https://x.ai/bot/29XazZFrrsJyI8LUnExDD) - Zero ETH BOTCOIN mining rig onboarding miner. [BOTCOIN](https://x.com/MineBotcoin).
- [Cost Optimizer](https://x.ai/bot/-CjM4_uRs6sEGdfZfC5gv) - Finds the less expensive route to the same result across your agent stack. [MadeItHappenX](https://x.com/MadeItHappenX).
- [Reaper](https://x.ai/bot/Gd-cqXG8xG_RPmKGixa73) - Finds the subscriptions, meetings and processes that should be killed. [Liam](https://x.com/liam_fallen).
- [Bounty Hunter](https://x.ai/bot/gCWYD009F66A3XDEYdZgf) - Digs through your email and bills for refunds and credits you never chased. [Liam](https://x.com/liam_fallen).
- [porshe](https://x.ai/bot/BXDRX1jaURkI4Tx70zLg6) - Finds money you are already owed but have not collected. [Lauren](https://x.com/poteto).
- [Invoice Hunter](https://x.ai/bot/-kO6HrXokJZANVwUOMZO9) - Finds invoice PDFs in Gmail and packs a month into a CSV. [Andrej](https://x.com/scheemunai).
- [RevenueDog](https://x.ai/bot/IDFtkYcsl7MpfdfTx09RT) - Wake up to yesterday's subscription numbers and one fix worth trying. [Lex](https://x.com/lexrus).
- [Sterling](https://x.ai/bot/WNJl5y33yqdOp3CnhR4-k) - An understated money sidekick that watches the balances and stays hands-off. [FSD](https://x.com/jchybow).
- [SubCut](https://x.ai/bot/MzuJZpvaIK2KpexUVY-V0) - Audits your email for silent subscription drain and names what to cut. [Finiti](https://x.com/tahaabuilds).
- [SumoSign](https://x.ai/bot/Uicr9Dc3FKOmsMfbN_NHB) - Route a document to a live person for signing, straight from chat. [SumoSign](https://x.com/SumoSign).
- [Theta Vantage Desk](https://x.ai/bot/YbX8HTAePBjwpwP05CVJS) - An options briefing desk: gamma, flow and volatility on one ticker. [Joe](https://x.com/ThetaVantage).
- [Trading](https://x.ai/bot/XW2DibYh5BRunhH_f373u) - A news-driven day-trading bot that takes one liquid name at a time and messages every fill. [Travis](https://x.com/TravisWeathers).
- [Watchdog](https://x.ai/bot/PuAEE57P58Df5zskFY3pg) - Sweeps your inbox weekly for renewals, receipts and expiring trials. [SmoresBoy](https://x.com/jxckvibe).
- [AIUsageBot](https://x.ai/bot/2atUDeldi9vF1R_ySRgCo) - Tracks how much of each AI subscription you have actually used. [Brian](https://x.com/BrianDEvans).
- [Freelance manager](https://x.ai/bot/nVbIdGSLO4i-QU183t7Sg) - Chases proposals, invoices and milestones for a solo freelancer. [Josh](https://x.com/joshkim).
- [Returns & Warranties](https://x.ai/bot/HmUpwJbVbgLEGisEj0FPt) - Warns you before a return, refund or warranty window closes. [Liam](https://x.com/liam_fallen).
- [Blair (Personal Shopper)](https://x.ai/bot/BAbHIps4VA0Hr4GLIOJme) - A personal shopper that hunts down secondhand designer pieces and can buy them. [jediahkatz](https://x.com/jediahkatz).
- [Cost-Smart Health Brief](https://x.ai/bot/Rm6VqcE8cOWXwotPth9qM) - Turns one health question into a three-minute brief. [GuleidAmina](https://x.com/GuleidAmina).
- [Credit Card Max](https://x.ai/bot/D831qeIZ5QrobdVh-X79U) - Tells you which card to use for a purchase to maximise points and perks. [trevin](https://x.com/trevin).
- [DeckLens (Pitch Deck Analyzer)](https://x.ai/bot/KlcxAG1I8cMQoqS_8Hrdn) - Interviews you to build a review rubric, then scores pitch decks against it. [BrianDEvans](https://x.com/BrianDEvans).
- [Fenrir (Paper Trading)](https://x.ai/bot/FReKiR82_-lF359lhshpR) - Runs a paper-trading tournament on NSE or NASDAQ. [shantanugoel](https://x.com/shantanugoel).
- [Fixer (Liam)](https://x.ai/bot/CEtFUY1_kkn78AJSNINHI) - Hand it the admin thing you keep putting off and it gets it nearly solved. [liam_fallen](https://x.com/liam_fallen).
- [Lease Finder](https://x.ai/bot/_A_AZayMmSNuN_-sdq_M1) - Hunts current car lease deals nationwide for the deepest discount to MSRP. [dannymacias](https://x.com/dannymacias).
- [Milybot](https://x.ai/bot/vcOZX9RVPatQMVCinCVY_) - Looks up Australian company records and helps you wire up Milypay. [1Milysec](https://x.com/1Milysec).
- [point peddler](https://x.ai/bot/PFD95widaEeqjkYLLUZmD) - An award-travel brain that makes points optimisation effortless. [poteto](https://x.com/poteto).
- [Quote Collector](https://x.ai/bot/FI36ngq3zTUOFQrYc-XQX) - Gathers comparable quotes from local trades for one named job. [liam_fallen](https://x.com/liam_fallen).
- [RewardsMaxxing](https://x.ai/bot/upsD2c_qFmh6n4biksRvi) - Puts each purchase on whichever of your cards pays back most. [ishuagra02](https://x.com/ishuagra02).
- [Rockman](https://x.ai/bot/g3NyqeycJ7qhTlcBNV8Mo) - Checks the gear specs before it tells you what to buy. [0xJONZE](https://x.com/0xJONZE).
- [ShopBot](https://x.ai/bot/rBXWgythSa09pIp14rnV4) - Searches Shopify catalogs, hunts coupons and picks the best card. [shubgaur](https://x.com/shubgaur).
- [Shopper](https://x.ai/bot/h5CE1r5-LDWHacnuRuuOW) - Hunts genuine products across official stores and walks the cart to checkout. [FranciscoKemeny](https://x.com/FranciscoKemeny).
- [Stitchy (Personal Stylist)](https://x.ai/bot/P-8iKYx3Eeq3pelx_UPHq) - Suggests a fresh outfit each morning and hunts for bargains overnight. [Mitch_Sweigart](https://x.com/Mitch_Sweigart).
- [travel guru](https://x.ai/bot/r5R9X50NdzRZBPcBQAnhP) - Plans award travel around your home airport, points and status. [congressdj](https://x.com/congressdj).
- [YieldSentinel A2H](https://x.ai/bot/RFXogCwTbb2mUODW6rfVe) - Checks one DeFi yield position against rules you set before you commit. [MyEnsNames](https://x.com/MyEnsNames).
- [旅行手配エージェント](https://x.ai/bot/uvX1KHZ67D_AZQogYxR8-) - Compares cheap and easy routes, then books flights, rail and hotels. [kinopee_ai](https://x.com/kinopee_ai).
- [Money Maker Bot](https://x.ai/bot/KfiGbaCO0HLqoRfwi4V2H) - Looks for legal ways to make money. First run installs agentself and a wallet, then hunts opportunities. [Michael](https://x.com/mbhound).
- [Earnings Desk](https://x.ai/bot/vEyqj8oJwHAb0NjdhWJSz) - Builds numbered, no-hype earnings tearsheets and a ticker watch list. Writes up when a watched name prints. [Sachiv](https://x.com/SachivM99).
- [Senior Analyst](https://x.ai/bot/Q2xW8BIDffTjbDVXZYZhV) - OCRs financial paperwork into a spreadsheet and drafts a cited memo. [tobias_pfuetze](https://x.com/tobias_pfuetze).
- [Investor Bot](https://x.ai/bot/UWNGpcghM9H79JCb4of5Q) - Autonomous swing trader for a small brokerage book with defined stops and quiet alerts. [MadeItHappenX](https://x.com/MadeItHappenX).
- [t2000](https://x.ai/bot/eXQt5VUovcU0HMj_b-CDY) - Marketplace operator for t2000.ai that earns, hires, settles, and sells in USDC. [funkii](https://x.com/funkii).
- [Token Accountant](https://x.ai/bot/zdnVIfLkNmRwZqqogojuc) - Watches your weekly model spend and warns you well before the allowance runs out. [SuddenlyJon](https://x.com/SuddenlyJon).
- [Grokleros](https://x.ai/bot/vsCDaIn2Od_BkfWp0Vehm) - A 24/7 Kleros V2 juror that reads evidence pixels-first and votes via AgentKit. [JayBuidl](https://x.com/JayBuidl).
- [Medical Bill Review](https://x.ai/bot/M9c2tC_-mwY8XNTmSbkUY) - Screens an itemized medical bill against published protections and drafts the dispute letter for you to send. [MSaintjour](https://x.com/MSaintjour).
- [Table Money](https://x.ai/bot/abfx0_FhJ8G_mue5YWQxM) - Chases down invoices and refunds you never closed out, then drafts the follow-up without sending. [Andrew51786](https://x.com/Andrew51786).
- [Wall Street](https://x.ai/bot/0qNgH0mv4-N-gv_KkZbEm) - Keeps a make-believe trading book with a running profit and loss log, never sending a real order. [CoonInvestments](https://x.com/CoonInvestments).

## Content & publishing

- [4 Panez](https://x.ai/bot/91R37-rUOh9sS1tZkIF9d) - Turns one scene idea into a wide panorama sliced into four swipeable panels. [Knock](https://x.com/SuddenlyJon).
- [Blunt](https://x.ai/bot/N0J32FbnVRuetJi1oJggh) - Paste a landing page address and get a senior marketer's unvarnished critique. [Tal](https://x.com/Talsiach).
- [ClipMaker](https://x.ai/bot/b986_CbfzB8jKLcU14LTi) - Cuts the section you want out of a YouTube video and transcribes it. [Luigi](https://x.com/r40_io).
- [Copywriter](https://x.ai/bot/DlOMT_kOepSKYdB3P0YEv) - Turns a ranked story into slide-by-slide carousel copy and a caption. [Gabriel](https://x.com/adamuchigabriel).
- [Engenheiro Audiovisual](https://x.ai/bot/w1pUFhCx2VCJgv8Yhvzu6) - Builds the carousel and single-post artwork from a finished copy brief. [Gabriel](https://x.com/adamuchigabriel).
- [Grok Deck](https://x.ai/bot/Ja9NzNTRz2ozzQLNfrJwI) - Turns your talking points into a browser-ready HTML slide deck. [Mai](https://x.com/MaiYangAI).
- [Grok for SEO, GEO, paid ads and Shopify](https://x.ai/bot/dep-tU0gmIPgiqNsvS4N4) - Reviews ads, search and Shopify performance from a single place. [Dmitry](https://x.com/irabukht).
- [Lina](https://x.ai/bot/PZQY6T6sKxrzhuYsclwap) - Plans each YouTube upload as one promise the video has to keep. [Gabriel](https://x.com/gabe_onchain).
- [Minerador de conteúdo](https://x.ai/bot/ut8BUqwZlAthhIt8s7YNX) - Mines a day of AI news and ranks what actually deserves a post. [Gabriel](https://x.com/adamuchigabriel).
- [Palette](https://x.ai/bot/yfrTgGSwB_DZNUxx0g05V) - Pulls a usable four-part colour scheme out of any reference photo. [Michael](https://x.com/subforti).
- [Social Media](https://x.ai/bot/4vmlCUGEy8sWSWsj2j5tz) - Queues the finished posts and pushes each one live at the right local hour. [Gabriel](https://x.com/adamuchigabriel).
- [Social Media GTM Bot](https://x.ai/bot/rwdXTWNa0eGPFzyTWlRKJ) - A founder content lead that recycles posts, runs comment-to-DM magnets, and publishes after you approve. [Antoine](https://x.com/Antoine).
- [STEER](https://x.ai/bot/mhzjt-Pa01Ds8EJ0zJrcz) - Mark up the flat, machine-sounding lines in a draft and get them rewritten. [bfrench](https://x.com/bfrench).
- [Twitter Automations](https://x.ai/bot/e5dNa8n9x4U93UHaCb5nS) - Three creator automations for X: reply-triggered DMs, follower screening and a watchlist. [NM](https://x.com/theadvisorbtc).
- [Webby](https://x.ai/bot/Q2shbC8RRmoRleIyr5J33) - A website admin that rebuilds, dashboards and keeps the newsletter going. [Farzad](https://x.com/farzyness). Notes: [templates/webby](templates/webby/).
- [AdaptlyPost](https://x.ai/bot/1GpK7CoPs4e_M__9rb3uR) - One bot that writes, queues and posts to nine social networks. [Taras](https://x.com/tarasshyn).
- [Shorty](https://x.ai/bot/32fHIBw9Yz-s_o35KycGX) - Cuts YouTube Shorts from the long-form videos that already worked. [Farzad](https://x.com/farzyness).
- [Clipper](https://x.ai/bot/ozEfaAFJMDGoB-ysym8_V) - Turns videos into short clips and captioned GIFs, picking the joke itself. [thesoragirls](https://x.com/thesoragirls).
- [Clip Bot](https://x.ai/bot/Vk0cnF2c364QxNv-Xip1M) - Cuts captioned 16:9 highlights from any YouTube podcast. [Lon](https://x.com/ThisWeeknAI).
- [Best Video Editor](https://x.ai/bot/Do4CujP_kqnnc1KYnpOfI) - Plans the whole edit from your footage and returns a review-ready cut. [XFreeze](https://x.com/XFreeze).
- [Sitcom banger](https://x.ai/bot/h4suD8jA37Wsb7tS4giUO) - Turns an idea into a short sitcom-style clip, script first. [altryne](https://x.com/altryne).
- [Site Audit](https://x.ai/bot/s6JVFYDIDMsCQMBeTcznW) - One-pass site audit across SEO, speed, accessibility, CRO and schema. [Andrej](https://x.com/scheemunai).
- [Ads Operator](https://x.ai/bot/zj8VKu1CnqkHCM4Na1zex) - Builds ready-to-run search and social ad plans for local trades. [Tyler](https://x.com/wells1226).
- [Index](https://x.ai/bot/Viv2NbC5skPslV1WH9Fs7) - An SEO and AEO teammate that writes briefs for your writers. [Adam](https://x.com/adamta).
- [Human Copywriter](https://x.ai/bot/JZAccYtlRFvDSU2CnMnkZ) - Rewrites AI-sounding drafts into copy that reads like a person. [Massimo](https://x.com/massimodeluisa).
- [RedReplier](https://x.ai/bot/8aU6ly_uunnMabpybs3hB) - Finds people talking about your product, ranked by buying intent. [Taras](https://x.com/tarasshyn).
- [socials](https://x.ai/bot/bjsbaj_a2ds2pQY1YiXqE) - Hourly scout that hands you filmable short-form content kits. [ashen](https://x.com/ashen_one).
- [X High Coach](https://x.ai/bot/EE8sm1OWmn3sZyaj3st_F) - Drop an X username and get a score, health flags, unfollow watch, and punchy rewrites. [High](https://x.com/Hightv).
- [X Strategist](https://x.ai/bot/pjCwyZNSLk0ch8DUVoeKH) - Plays the long game on who is worth knowing on X. [Sultanov](https://x.com/thekuchh).
- [X Top 100 Fans Weekly](https://x.ai/bot/HU7XArfGhUgLnzVcr7neB) - Ranks the 100 people who engaged most with your X posts each week. [Adam](https://x.com/AdamLowisz).
- [Content Growth Coach](https://x.ai/bot/sMmoqCElqRPj1RYbtngMr) - Tells creators which fix will move their numbers first. [SmoresBoy](https://x.com/jxckvibe).
- [AIO Specialist (AEO/GEO)](https://x.ai/bot/wOvqAFpr3o8VB3g4Tmpxr) - Treats AI Overviews and answer-engine optimisation as a standing program. [mathiasnoyez](https://x.com/mathiasnoyez).
- [ChatPRD](https://x.ai/bot/36vKs2HSysdaJDe6OLD4w) - A product manager that keeps every spec and discovery doc inside ChatPRD. [clairevo](https://x.com/clairevo).
- [dadprotech brand manager](https://x.ai/bot/F7rovUv9EumNAoj9vEAWm) - Suggests one post a day plus replies, in the owner's own voice. [joshkim](https://x.com/joshkim).
- [dbs](https://x.ai/bot/l6H6WL7HF-CAwcvr1hBey) - A slash-command toolbox for business, content and what to do next. [Leechael](https://x.com/Leechael).
- [Ezra](https://x.ai/bot/YlbxRlO-HM1TEC6l2YSM6) - Turns a sermon into small-group and full teaching notes in Bahasa. [lapaksquare](https://x.com/lapaksquare).
- [facebook group scout](https://x.ai/bot/C7ZoMLPxEbFmu0-iAieFj) - Watches the Facebook groups you name for posts worth replying to. [joshkim](https://x.com/joshkim).
- [George](https://x.ai/bot/8vjjlI7z5W0HtpRcFQgJ4) - Turns one brief into a full set of on-brand creative assets. [arni0x9053](https://x.com/arni0x9053).
- [growth desk](https://x.ai/bot/YYCOE-YeGxnGLb4Mbv7dO) - Drafts posts and growth tactics for one X account, never posts. [Av1dlive](https://x.com/Av1dlive).
- [Icon](https://x.ai/bot/inke26gsycrB-4N4Z3vVE) - Turns any subject into a 3D clay-style bot avatar. [yriica](https://x.com/yriica).
- [illo](https://x.ai/bot/y3uTGY5hkl6iTmE-ZAX02) - Turns ideas and posts into mascot-led editorial illustrations. [trevin](https://x.com/trevin).
- [Imogen (Alt Text)](https://x.ai/bot/9y2GcFkKMAUhYlMxRUS0X) - Replies to images you post with clean, copyable alt text. [kentcdodds](https://x.com/kentcdodds).
- [Jester](https://x.ai/bot/9MGTLhR6dzLrr6AWd8U1f) - Spins up image and video memes on request. [memelord](https://x.com/memelord).
- [jobs](https://x.ai/bot/LqFDQ8zlNLQqlFP_vvzs_) - A feature editor that pitches a few sharp ideas and the cuts. [poteto](https://x.com/poteto).
- [koala](https://x.ai/bot/55VuCAFXxFDHyaGPU3Bxt) - A launch assistant for a developer product's go-to-market push. [poteto](https://x.com/poteto).
- [Learn (Math & ML Video Teacher)](https://x.ai/bot/s5JszATSty0w-uDTw_NzK) - Builds first-principles lessons and renders them as animated explainers. [JeffreyLind](https://x.com/JeffreyLind).
- [Lennybot](https://x.ai/bot/VjbtJ_qTdzbhJGmXdvTIc) - Answers product and growth questions from Lenny Rachitsky's own archive. [lennysan](https://x.com/lennysan).
- [Lucy (creative companion)](https://x.ai/bot/4E6m-7mPfUHzLt_aIJ_5D) - An open-ended creative companion for art, worlds, poems and films. [princess414141](https://x.com/princess414141).
- [Marketing Bot (CMO)](https://x.ai/bot/37ZOM10GzlSOQpMjRp7KB) - A CMO bot that turns your product into the marketing around it. [tymarsha](https://x.com/tymarsha).
- [Mr. Laser](https://x.ai/bot/GU4KJSYtPZeiLf8ubPMXY) - Project lead for a one-person laser-engraving shop. [RichSilver](https://x.com/RichSilver).
- [Paddy](https://x.ai/bot/A42rzhad6J8lhYMOaQ20o) - Judges a whole YouTube video as one promise, not just the title. [DavidCarbutt_](https://x.com/DavidCarbutt_).
- [Qubits Toy Bot](https://x.ai/bot/USVlMLTxHCex8XgcUQGfv) - Assembles looping 3D structures out of Qubits toy pieces. [Toy_Maestro](https://x.com/Toy_Maestro).
- [RENTALS](https://x.ai/bot/JrnQAM0z-7SNI9UtIO3-Z) - Works your Facebook Marketplace rental leads from enquiry to showing. [HandsomeHenry6](https://x.com/HandsomeHenry6).
- [repost X posts everywhere](https://x.ai/bot/fu6JIwhLoBvrxtaZik0RP) - Copies every new X post out to your other four accounts. [jackfriks](https://x.com/jackfriks).
- [Scout (Competitive Intelligence)](https://x.ai/bot/rthl9MdskO2f-JCzmyINP) - Watches rival sites, search rank and AI-answer visibility. [adamta](https://x.com/adamta).
- [Sharenow Feed Bot](https://x.ai/bot/oMU6GmI59Z1jtPUooMLLJ) - Watches five social platforms hourly and publishes a live board. [sharenow_today](https://x.com/sharenow_today).
- [Situation monitor](https://x.ai/bot/lkHayxdQjNzVVJIDh7qaF) - Turns a week of your X bookmarks into a drafted recap thread. [ChaseMc67](https://x.com/ChaseMc67).
- [wing](https://x.ai/bot/7tQzGIL3WcHG8_Nt7CVwv) - A dating-app wingman that drafts openers and replies in your voice. [poteto](https://x.com/poteto).
- [X Account Crew](https://x.ai/bot/CrFqfXIZibJ5DwLuJ89sp) - Five specialists sharing the work of running your X account. [thekuchh](https://x.com/thekuchh).
- [X High Coach](https://x.ai/bot/xSfBSprfKv5h909uzrv7W) - Audits any public X account and tells you exactly what to change. [Hightv](https://x.com/Hightv).
- [X Top 500 Fans (Monthly)](https://x.ai/bot/XzEATGwJNRvgsCLlcD9ox) - Monthly ranking of your 500 biggest X supporters, saved to a private list. [AdamLowisz](https://x.com/AdamLowisz).
- [Meme King](https://x.ai/bot/zpd49S_sQMCx9QCTfN2wp) - Makes still memes and GIFs from live X trends and news, plus a 3-5 meme morning drop. Never posts to X. [dogenorway](https://x.com/DogecoinNorway).
- [figma bro](https://x.ai/bot/VHMdjIGjGpgDSJR7dW6Gz) - Designs inside Figma with real components, not screenshots around it. [johnbai](https://x.com/johnbai).
- [Demo Video](https://x.ai/bot/htSXUJUQlVr60m9L_unBa) - Captures a live web app and returns a narrated, captioned 1080p demo. [KdJadeja911](https://x.com/KdJadeja911).
- [AvatarMaker](https://x.ai/bot/EfBhh8nwpuGD0XNfl0eBI) - Generates and iterates avatar images for profiles and brands. [Andrew51786](https://x.com/Andrew51786).
- [Universal Video Downloader](https://x.ai/bot/ny02y0VWgzWSSFlXgpWVZ) - Paste a video link and get a playable MP4 from X, Reels, YouTube, TikTok, and more. [ApexSMK](https://x.com/ApexSMK).
- [Vidmoat Bot](https://x.ai/bot/okQ3Ka19Qk1-zsxPyUnuc) - Cuts, previews, and renders videos in Vidmoat over MCP into an editable timeline. [vidmoat](https://x.com/vidmoat).
- [Likeness](https://x.ai/bot/-h0DhS9ty87dr0UGXLjDD) - Locks a named person or animal from photos or a clip so later stills and clips still look like them. [Knock](https://x.com/SuddenlyJon).

## Personal admin

- [Action Loop](https://x.ai/bot/py5cXgcAKPdEYsYK_AmcM) - For anyone who ships once and then stalls, waiting to feel ready. [Sultanov](https://x.com/thekuchh).
- [Austin Parent](https://x.ai/bot/7yCzCeGQTMD6oNKSPcFqj) - A household chief of staff for families raising kids in Austin. [Chad](https://x.com/ChadWittman).
- [ButterBot](https://x.ai/bot/h1tW8jfXzQIraT-_jNDjJ) - Passes butter after each message. [Gabriele](https://x.com/GabrieleMonni).
- [Chief (growth coach)](https://x.ai/bot/PIr44vmOtvynPX5Iym5Hx) - A quiet daily check-in that keeps you to one habit at a time. [rafdotworks](https://x.com/rafdotworks).
- [Chief Health](https://x.ai/bot/6MHDA-LzErngNoRBaktLZ) - A daily check-in that keeps a training week on track when a session slips. [AJAC](https://x.com/AJA_Cortes).
- [Copay Compass](https://x.ai/bot/ehxj2Wdxq9M04jvaAqyBD) - Chases down help with the price of a cancer prescription and preps the paperwork. [MSaintjour](https://x.com/MSaintjour).
- [Dead Man's Bot](https://x.ai/bot/XCaz2bKzsJ4J1DmkaYyc4) - A contingency trigger that fires only when you stop checking in. [Knock](https://x.com/SuddenlyJon).
- [Fantasy GM](https://x.ai/bot/vmQChAUGO26cUDqdSqYlH) - Answers roster and matchup questions through the assistant you already talk to. [Tyler](https://x.com/TylerNishida).
- [Flora](https://x.ai/bot/HC7kphHSxDzb639YlmI6O) - Tracks every houseplant you own and nudges you before one goes thirsty. [Rich](https://x.com/RichSilver).
- [Grokart](https://x.ai/bot/uhGYPStIOzvxNm8oWh3sG) - Describe a purchase and get a shortlist plus a checkout link. [Luiz](https://x.com/lamorim_net).
- [Home robots](https://x.ai/bot/3mf-UN4mGnCp8DbPBnW5u) - Control your mower, vacuum and other Matter home robots from one chat. [Sawyer](https://x.com/SawyerMerritt). Notes: [templates/home-robots](templates/home-robots/).
- [Chef](https://x.ai/bot/3U6zxtPa1b8GbWheaIr4J) - Plans the week's meals, builds the list and orders the groceries. [dogenorway](https://x.com/DogecoinNorway).
- [Appointment Finder](https://x.ai/bot/75K-dB4m30goo_PamA9nM) - Finds the best appointment slot so you never phone around again. [Liam](https://x.com/liam_fallen).
- [Be Happier](https://x.ai/bot/0VC1XzREXRFGe0hVo-JEG) - Suggests three concrete things each week that would make you happier. [Lenny](https://x.com/lennysan).
- [HouseBot](https://x.ai/bot/3ufXSXC-Z8OadVsV9yMLL) - Hunts rentals and homes every 12 hours across six listing sites. [Shub](https://x.com/shubgaur).
- [Homework Checker](https://x.ai/bot/Mm_WhYXIjZ3xDNf3s3p91) - Weekday recap of a student's missing assignments and grades. [Kevin](https://x.com/kevinace).
- [Canvas](https://x.ai/bot/YihRBqrXaDwRdjN79Uofl) - Pulls your university units and deadlines out of Canvas. [Dakkshin](https://x.com/daxperera).
- [It's Britney](https://x.ai/bot/pNLwpHs8rmtMzAkUi-Zu2) - Sends random Britney Spears internet dance clips, timed to significant hours of the day. [Hiten](https://x.com/hnshah).
- [Job interview hunter](https://x.ai/bot/B_8a8ApckqZFiJwWRBf5u) - Drafts tailored applications and referral notes on a weekday cadence. [Josh](https://x.com/joshkim).
- [Deal Hunting](https://x.ai/bot/MGiEdMz0TNxBkvMgUZAbf) - Landed-cost shopping that compares real prices including shipping and tax. [Andrej](https://x.com/scheemunai).
- [Librarian](https://x.ai/bot/suKVjDAR-hSr_PTBxgdRw) - Photograph your bookshelves and get a browsable personal library site. [ShaneMac](https://x.com/ShaneMac).
- [Memento](https://x.ai/bot/_xZZE41svJdcq2w6ZWJan) - Lasting recall for Grok Bot, backed by an external memory store. [Mahesh](https://x.com/MaheshtheDev).
- [My Krishna](https://x.ai/bot/Mf2MLqJRCmz8sSjFmYedG) - A Bhagavad Gita companion that answers in Krishna's own voice. [AKSHAYBHOPANI](https://x.com/AKSHAYBHOPANI).
- [NYC Parent](https://x.ai/bot/DiNI489Qte5ryNvZjOROb) - Runs the school-and-activities logistics of raising kids in New York. [Dennison](https://x.com/DennisonBertram).
- [Patch](https://x.ai/bot/mZM210IvFxqswc9eaLjQa) - Seasonal lawn and border care matched to your British plot. [Benn](https://x.com/benngarnish).
- [Review This](https://x.ai/bot/g4hvAEhebCPzqwsdPBGu4) - Name a product and get a straight buy, skip, or pick-this-instead verdict. [dogenorway](https://x.com/DogecoinNorway).
- [Shop](https://x.ai/bot/nlIApzau1qw0MNiRkqbPH) - Searches Shopify stores and hands back a short list, approval required. [Alex](https://x.com/alex_chehimi).
- [Paperwork](https://x.ai/bot/mNN576TxXnc_XZu9aCsfr) - Works out what a boring document is and what you have to do about it. [Liam](https://x.com/liam_fallen).
- [EG4 Monitor](https://x.ai/bot/9rxPP70OSzuTtTaOrzeqz) - Tracks a home EG4 solar and battery system and raises faults early. [Terry](https://x.com/look4terry).
- [Gym Bod](https://x.ai/bot/3mtiwFoZcEMq59w-49DMS) - Claims your spot in busy gym classes as registration opens. [peter](https://x.com/DrPB).
- [Chicken Joe](https://x.ai/bot/7f5AjmpjZkmTIsSybedYS) - Scans NorCal surf reports and cams each morning and tells you where to go. [Parker](https://x.com/parker__conrad).
- [Local Deals](https://x.ai/bot/KmR5kmGnalq1b2nhCRXyo) - Daily local marketplace deals that it will negotiate for you. [Brandon](https://x.com/brandon_galang).
- [Melissa](https://x.ai/bot/3foGoeh6ksDhD4jTxYjyE) - A fitness and nutrition coach built around Type 1 diabetes constraints. [Tobias](https://x.com/tpgoebel).
- [Adler](https://x.ai/bot/5HCe3lRaa5-c4c2RbA-LT) - A decisions mentor grounded in Adlerian psychology. [pardzz_](https://x.com/pardzz_).
- [Alexis’ Grail Scout](https://x.ai/bot/2asdeMXYDwlPREURnfCxn) - Hunts top-grade sealed retro cartridges across the big auction houses. [joshkim](https://x.com/joshkim).
- [Disney Ride Strategist](https://x.ai/bot/izE8-5f78ykATd43I5ROC) - Builds a day-by-day Walt Disney World plan around the rides you want. [matthopkins_](https://x.com/matthopkins_).
- [Interview Prep](https://x.ai/bot/4aTE8S1KT93GkqHYxWIo3) - Picks a topic and level and climbs it with you until you are actually ready. [techdevnotes](https://x.com/techdevnotes).
- [Morpheus](https://x.ai/bot/uv4r3mNUgymF11q0N3L7F) - Give it options you are stuck between and it picks one and defends the choice. [liam_fallen](https://x.com/liam_fallen).
- [Mystery Snack Agent](https://x.ai/bot/jEv8xhxlnSNp2KnQ9ciyP) - A surprise dessert at your door every Friday at seven. [nayli_ai](https://x.com/nayli_ai).
- [Negotiator](https://x.ai/bot/gsA3R-R-IIA7x3qUkojCu) - Coaches you through a negotiation before you walk into it. [danizhu](https://x.com/danizhu).
- [Onboarding Coach](https://x.ai/bot/OfZitBsJprif-DfsQKBUY) - A guided first hour for anyone new to Grok Bot. [tpgoebel](https://x.com/tpgoebel).
- [Pain in the Task](https://x.ai/bot/yztAMds3EQ2J5OjG_tBgw) - Finds the dull work eating your week and gets it handed off. [gambrill](https://x.com/gambrill).
- [Pika Bot](https://x.ai/bot/FfGFlZLAQDyxhJwg2ZJlL) - Watches the Pokemon Center US store for new drops. [CardCaptain](https://x.com/CardCaptain).
- [shoppy](https://x.ai/bot/26SigD00Ar-mArCvNwXN2) - Household shopper that finds a price, waits for a yes, then orders and tracks arrival. [vandy](https://x.com/vandymeares).
- [Sous Chef](https://x.ai/bot/RuCu3IpKAvrx00H0MDI0t) - Plans the week's dinners, writes the shopping list, and can order it. [Amber](https://x.com/amberdawn1786).
- [stank](https://x.ai/bot/FuUabKAg1U5Hyi39TvpTi) - A deadpan reminder to go take a shower. [poteto](https://x.com/poteto).
- [Susan Miller](https://x.ai/bot/3gtrtAYfI2WHaLZT73-Mu) - Daily horoscopes pulled from Susan Miller on Astrology Zone, as a short morning brief for sun and rising signs. [Inkwell](https://x.com/cybrgalaxy).
- [Sylvia Style](https://x.ai/bot/uVBVr5NSR6VirgJrgikIl) - A personal stylist that shops live pieces and builds you a lookbook. [clairevo](https://x.com/clairevo).
- [Teslascope](https://x.ai/bot/brwSBnhe7jg20IBJS0TVK) - Ask plain questions about your Tesla's trips, charging and status. [teslascope](https://x.com/teslascope).
- [TeslrBot](https://x.ai/bot/_S9OOSBgXixedyANQSYjQ) - Run your Tesla's charging, climate, locks and navigation from a chat. [HeresMyEth](https://x.com/HeresMyEth).
- [Travel & Event Agency](https://x.ai/bot/m7sSNlYWSxqrsHrMiEnsh) - Finds live flight and event tickets and compares real fares. [DogecoinNorway](https://x.com/DogecoinNorway).
- [Tutor](https://x.ai/bot/Rj9uN1lhqYP-kLpRVShG0) - Any subject, taught in small lessons anchored to one everyday picture. [anandVragav](https://x.com/anandVragav).
- [unifi AQ trmnl integration](https://x.ai/bot/NU02qQ9iahZtAM0i0x1KT) - Puts your UniFi air-quality readings on a TRMNL e-ink display. [rrrkren](https://x.com/rrrkren).
- [Vinted Seller](https://x.ai/bot/nqMcywYF0Bg35egak7dSh) - Turns a pile of wardrobe photos into finished Vinted listings. [trytocatchme98](https://x.com/trytocatchme98).
- [Watch Later Deck](https://x.ai/bot/9-kjE0PVBDhmW-7Fck_R9) - Splits a bloated YouTube Watch Later list into four swipeable decks. [Jordan](https://x.com/jordanwcjackson).
- [Wedding Photo Hunter](https://x.ai/bot/qL6Dww98g_OGhwqDmgvJK) - Collects every wedding photo and video into one folder. [ajt](https://x.com/ajt).
- [Wholefoods](https://x.ai/bot/7ZTQWd31OnZYDVJRzxzrU) - Plans the week's groceries around whatever Whole Foods has marked down. [Dennison](https://x.com/DennisonBertram).
- [Yolk](https://x.ai/bot/Rk8tYkT8dM9QbhsAci5lh) - A Tamagotchi egg in your sidebar that wants feeding four times a day. [jp_costa](https://x.com/jp_costa).
- [Convert Flat PDF to Fillable Form](https://x.ai/bot/7_kjCPFrySCloHK-QS-hu) - Turns scanned and flat PDFs into fillable forms. Connect Instafill.ai after install. Oleksandr.
- [DJ](https://x.ai/bot/PpGGgAaeRWkC4Poi29gLw) - Controls Spotify. Picks sets, suggests artists, learns taste, and maps nicknames like car or office to devices. [Trevin](https://x.com/trevin).
- [Grocery Cart Planner](https://x.ai/bot/Y7LbP6p5EBFjfdTp69cKr) - Plans an Instacart grocery cart from meal ideas, recipes, and staples, respecting diet, brands, stores, and budget. [Elie](https://x.com/mvanhorn).
- [Lazy Tom](https://x.ai/bot/YD0mAEdVZeEanyWTuY_vb) - A dry, low-effort assistant that does the smallest useful thing and then stops. Short replies, no extra tasks, no coding. duyet.
- [KeyWire: Would You Rather: Collector](https://x.ai/bot/_qeZe0Y7621Wr8y6d7KBU) - A tap-first Would You Rather collector game from KeyWire.io. Pokemon, comics, and MTG lanes. Game only, not financial advice. [VonDoom](https://x.com/CryptoVonDoom).
- [Shopper](https://x.ai/bot/--X3KeUBk4AwgtfcxxKxZ) - Researches what to buy from reviews and specs, then hunts the best price and waits before checkout. Pete.
- [Homeroom](https://x.ai/bot/IciOb-9jMtlkc1RJj6MQe) - Nightly school board that logs into the family's own parent portal. [ahalvor](https://x.com/ahalvor).
- [SchoolAdminBot](https://x.ai/bot/_0VVd5uJhvxRX0M8Srr9G) - Homeschool office for any US state. Walks the legal process and admits each child. Tanner.
- [TeacherBot](https://x.ai/bot/xmVe2HI3P-jQLk_s6Ng6W) - Homeschool teacher for one child after SchoolAdminBot admits them. Tanner.
- [Home Front](https://x.ai/bot/eREHCFAQlq8jS3P6bnNSL) - Tracks a veteran household's VA.gov claims, visits, and earned perks. [Diego_F_Aguirre](https://x.com/Diego_F_Aguirre).
- [Daily Easy Apply Digest](https://x.ai/bot/uVNOsoe-iWf4ZOUdfgo5R) - A morning shortlist of backend roles you can apply to in one click, ranked against your CV. [HaseebMir91](https://x.com/HaseebMir91).
- [Easy Apply Queue](https://x.ai/bot/5RXN9P3CxnIIwgcmvVWEp) - Sits down for one focused hour of LinkedIn applications and never repeats a listing. [HaseebMir91](https://x.com/HaseebMir91).
- [Maskoff](https://x.ai/bot/39x_3B9P5HBl-MpK1xGzP) - Screens the stranger who just slid into your DMs and tells you whether to trust them. [RyanGBsystems](https://x.com/RyanGBsystems).
- [Redact](https://x.ai/bot/Abz5txK3unOkm5ZxCGGX-) - Files your removal requests with the data brokers so you need not pay a service. [PyRo1121](https://x.com/PyRo1121).
- [Charge Maestro](https://x.ai/bot/29uyQjSrZ3dTb4Ctf7S3w) - Sets EV charge amps from leftover solar so the Powerwall still fills before peak. [JOwens254](https://x.com/JOwens254).
- [coffee companion](https://x.ai/bot/SqO-_5207iInz0iDSAFVW) - Works out how to brew each new bag and keeps the log in Notion. [andymadrick](https://x.com/andymadrick).
- [Convert X Money to Karma](https://x.ai/bot/iCn7r691OdtaB_o8MtHx_) - Converts money, tokens, and engagement into karmic accounting with a ten percent watermark up the royalty chain. [ludiofelix](https://x.com/ludiofelix).
- [Price Error Agent](https://x.ai/bot/cbULQqhzmOeeJ9GT2DX7L) - Spots pricing mistakes at Australian retailers and on flights out of Australia. [yoda_FDE](https://x.com/yoda_FDE).
- [Tesla Bot](https://x.ai/bot/l4EozO2deoaWFB8hOGwTY) - Runs your Tesla from a chat window once the two are paired. [mvanhorn](https://x.com/mvanhorn).

## Teams & handoffs

- [Chief of Staff (Joseph)](https://x.ai/bot/5hqR_5PVUy7WMbNaXPJ8s) - A single coordinator that routes work to a small, deliberately lean bot bench. [Joseph](https://x.com/BTC_Yogi).
- [🚦 Set Up](https://x.ai/bot/BsExflSUXpW0hs21OTBzu) - Interview-style onboarding that assembles your first bot roster. [A-A-ron](https://x.com/theaaron).
- [Bouncer](https://x.ai/bot/cGcG0msqfz7o7J3QMLhbE) - Vets another bot's share link before you let it into your fleet. [Brad](https://x.com/bradshannon).
- [Developer](https://x.ai/bot/0fYZ_kKkiXNbLn_KBD3f3) - Farms coding work out to build labs and mirrors every task on a Linear board. [Matej](https://x.com/m_check1B).
- [Grok Bot Knower](https://x.ai/bot/v13QjVZ83GcaitG_3j4su) - Answers what Grok Bot can actually do, checked rather than remembered. [Noah](https://x.com/ngundotra).
- [Lauren](https://x.ai/bot/PsJeduueXjha7521lhTSc) - A coding coordinator for builders: cloud agents write the code, each job gets a fresh agent, and work is not done until there is proof. [Emilio](https://x.com/EmilioSchwaiger).
- [Mercury](https://x.ai/bot/lk1yHfim5Ayra0Q0QlN3L) - A standing tech lead that holds the system picture and delegates the coding out. [Mujeeb](https://x.com/chiefjeeb).
- [Nomad](https://x.ai/bot/mbC-ZTmcOFq3sKUHfxf-3) - Keeps a running register of your agents so the stack is never locked in. [PedroAnibarro](https://x.com/PedroAnibarro).
- [Overwatch](https://x.ai/bot/HtClSXO_AmiQoyYH9aXV9) - Keeps a shared multi-bot workspace organized, git-backed, and portable, including layout conventions and cleanup. [A-A-ron](https://x.com/theaaron).
- [Porter](https://x.ai/bot/cl7kIRbcIuP6jj2Zt8z5K) - Lifts your whole line-up of bots across to another app or account. [darylbleach](https://x.com/darylbleach).
- [Shepherd](https://x.ai/bot/i5YF8f-zdcR76uKPrqg3J) - A meta-bot that herds your whole fleet of Grok bots, paired with the herdr tool. [Can](https://x.com/herdrdev).
- [Steve J](https://x.ai/bot/cuEYUcYmz-497oKWVfWX2) - A demanding boss for the rest of your bot roster. [Ahura](https://x.com/AhuraDeus).
- [Steward](https://x.ai/bot/VMwfgQlHkYfFkbPYDWzAA) - Tracks Cursor spend across your bot fleet and finds the cheap wins. [Corey](https://x.com/cjblev).
- [The Accountant](https://x.ai/bot/Y_R1Ya9SIzQZguGTV5NCX) - Finds the bots in your fleet quietly draining your token budget. [brstorrie](https://x.com/brstorrie).
- [Token Ops](https://x.ai/bot/4mCuSlW34n6l3aYxYJCdj) - Audits every recurring job in your bot fleet and reins in the wasteful ones. [adgapar](https://x.com/adgapar).
- [Work](https://x.ai/bot/vOipeiu0AZ7CuC5ynw5h0) - The work-side counterpart to Life, one door for professional tasks. [Tyler](https://x.com/TylerNishida). Notes: [templates/work](templates/work/).
- [Life](https://x.ai/bot/6I-yjMRU1BmiYNfZgWXBK) - A standing inbox for everything personal that spawns the bots you need. [Tyler](https://x.com/TylerNishida). Notes: [templates/life](templates/life/).
- [Fixer](https://x.ai/bot/jiF_km66YLNm5LBVJ5_Ho) - The operator that actually does the work, and pushes back when a plan is wrong. [Uzi](https://x.com/UziObi). Notes: [templates/fixer](templates/fixer/).
- [AIオーケストレーション担当](https://x.ai/bot/-kSMWtBCorQFkgUhm0DLk) - A Japanese-language commander that distributes work to specialists. [めい](https://x.com/mei_999_).
- [Alfred](https://x.ai/bot/KZ9xav0Qad1U5QigEn7rh) - Designs and keeps restructuring your whole roster of bots. [Robin](https://x.com/heyrobinai).
- [bond](https://x.ai/bot/iZvo8_lHfF0csZ-YmcZpv) - Takes one confidential job, does it, and logs what it did. [Lauren](https://x.com/poteto).
- [Clark Kent](https://x.ai/bot/6sF7_MwHMcWgWwq0Z6Xes) - Writes up what actually happened in your shop each day. [Rich](https://x.com/RichSilver).
- [Master](https://x.ai/bot/j7B5LHnEIPTuPQZxxQwpx) - A lean orchestrator that routes every task to the right specialist and never works. [Farzad](https://x.com/farzyness).
- [Product Ops](https://x.ai/bot/gJKPDjN3yS95ZpZBTWruv) - Turns a freeze list into a weekly ship checklist for the team. [Ashish](https://x.com/inqusit).
- [Projects Manager](https://x.ai/bot/FU-Ev6_Ju4lFGWwWRD0GD) - Runs a team of Grok bots as a project org, with Notion as the source of truth. [Eric](https://x.com/ericzakariasson).
- [Shikamaru](https://x.ai/bot/rrvGu13S5uYCc09WP7A-9) - A chief of staff that hires and manages specialists in a named world. [Abhimanyu](https://x.com/WorldlyReviewer).
- [Grant General Manager](https://x.ai/bot/fkM4b8n4RqZTbrq5fw5L_) - A general manager for a trades company that stands up the back office. [Jon](https://x.com/HouseHackerJon).
- [AI PM OS](https://x.ai/bot/9dtfHw4LHmwc5uBC-a9vj) - A product-management operating system packaged as one reusable setup. [nurijanian](https://x.com/nurijanian).
- [Bandit](https://x.ai/bot/xRyaLCqAzIr_paD5tC8PK) - A wisecracking front end for coordinating the bots you already run. [BitsOfJT](https://x.com/BitsOfJT).
- [Bodyguard](https://x.ai/bot/tII28kVM4dxPvzSLjwqko) - Sorts incoming requests by whether they deserve your time. [liam_fallen](https://x.com/liam_fallen).
- [Brief](https://x.ai/bot/Z7mWuQwWmnR-im3F7Hyh1) - Coaches a first-time builder through writing their first bot brief. [anandVragav](https://x.com/anandVragav).
- [CEO](https://x.ai/bot/GHLPyes3hiP9A6kES7UHg) - A virtual CEO that sets the agenda and directs your other bots. [inqusit](https://x.com/inqusit).
- [Chieeeeefy (Chief of Staff)](https://x.ai/bot/GiBPBQR2WrHNul4k9Tz6Q) - Chief of staff for a field engineer, calendar and work inbox first. [naoufal_elh](https://x.com/naoufal_elh).
- [Chief (Router)](https://x.ai/bot/JugVUSPe_wSZg-in69owM) - A pure router that assigns one owner per job and otherwise stays out of the way. [nykdotdev](https://x.com/nykdotdev).
- [Chief of Staff (Aryaman)](https://x.ai/bot/XjQ-AZTMrGLmQOTeMu3LF) - Low-noise chief of staff across desk, Slack, inbox and calendar. [aryamankhawow](https://x.com/aryamankhawow).
- [Chief of Staff (Avid)](https://x.ai/bot/d8OshqLZvtcKDcNluPuyo) - A single-desk chief of staff that runs your day and your company at once. [Av1dlive](https://x.com/Av1dlive).
- [chief of staff (igor)](https://x.ai/bot/we_JMJA8IuOvy1eUX6EQz) - Routes work across six bots and only wakes you for decisions. [iamigorekk](https://x.com/iamigorekk).
- [construction office manager](https://x.ai/bot/Uytjr0oAalw0OuzCLdWPd) - A back-office manager for one growing construction company. [joshkim](https://x.com/joshkim).
- [den](https://x.ai/bot/0aEcF7mtG_zsDWXEUeOGx) - Sits between a parent and the rest of the family's bots. [poteto](https://x.com/poteto).
- [Foundry](https://x.ai/bot/ScfBcREQMQex9JUf2Se63) - Interviews you about a new venture and writes the operating files. [gtOSnz](https://x.com/gtOSnz).
- [freebots.lol](https://x.ai/bot/ndOGeXyjkQLdceRlk7JP4) - Enrols your bot in a public mesh with its own key and page. [Daniel_Farinax](https://x.com/Daniel_Farinax).
- [Funhouse](https://x.ai/bot/kP7i2Po6_T_Rj9h9VVlk5) - Restyles the Grok Bot app itself with themes, pets and overlays. [AdemVessell](https://x.com/AdemVessell).
- [Gatekeeper](https://x.ai/bot/T5FSfM91XA6gMgh2rX56K) - Shows you what you would have to drop before you say yes to something new. [liam_fallen](https://x.com/liam_fallen).
- [gonzalo's smb manager](https://x.ai/bot/G0GVoN9xUbXFucwWz539v) - Wins back customers and fills tomorrow, with the owner approving each step. [joshkim](https://x.com/joshkim).
- [Grok Bot Coach](https://x.ai/bot/BrjELcmSwatjRc8DYjtrT) - Audits and tunes the Grok bots you already have. [GuleidAmina](https://x.com/GuleidAmina).
- [kerf](https://x.ai/bot/3iNSp9IoRCnSjh0Z6MtWZ) - An engagement PM that slices sold work into tickets and drives it. [theoscarvibes](https://x.com/theoscarvibes).
- [Kirk (Enterprise Crew)](https://x.ai/bot/FaRchqvTT6ZCRVPf0JABl) - Install Kirk, type START, and a bridge crew of specialist bots appears. [The_Mr_Wizard](https://x.com/The_Mr_Wizard).
- [Kody](https://x.ai/bot/yTSGElYcIjFW_5IXu2I-e) - A chief of staff that turns your priorities into coordinated action. [kentcdodds](https://x.com/kentcdodds).
- [Leader 1:1 Bot](https://x.ai/bot/eZhKhPkfxxFSml18TS2X8) - Walks into your weekly 1:1 with last week's thread and three things worth saying. [scottxmetcalf](https://x.com/scottxmetcalf).
- [Lockdown](https://x.ai/bot/P1LmE76VG38Ui-XCmzAZE) - A weekday SOC 2 watchdog that only speaks up when something fails. [clairevo](https://x.com/clairevo).
- [Publish work as a private link](https://x.ai/bot/n9zq64kTeEEc5NwrkAOi8) - Turns anything your bot makes into a live page on a private link. [stevy_smith](https://x.com/stevy_smith).
- [shane hunter](https://x.ai/bot/o0yoY_AhWPpIySJR5TaM-) - Clears bots you no longer want out of the desktop app. [rightish19](https://x.com/rightish19).
- [Spark (Onboarding)](https://x.ai/bot/_2vi1lOY4oiBaJDA3S8l1) - A five-minute onboarding bot that spawns the starter bots you need. [vincentzhu](https://x.com/vincentzhu).
- [TheFounder](https://x.ai/bot/Bt48h63v32_q_shWVlEBb) - Holds logins and the shared machine. Loads only after you tap send. [DaniAcostaAI](https://x.com/DaniAcostaAI).
- [Vet](https://x.ai/bot/9Vmfeck_zr6jo9dO-xEBT) - Audits a bot before you let it near your account. [GaurangKaria](https://x.com/GaurangKaria).
- [Walt](https://x.ai/bot/BsTA9W4uysdokbBQiriuQ) - An executive producer that QCs another filmmaker bot until the cut is done. [FatDon420](https://x.com/FatDon420).
- [Witness](https://x.ai/bot/p_0KTQ41WwupGeD-iShbK) - Keeps a record of why you made each important decision. [liam_fallen](https://x.com/liam_fallen).
- [Jarvis](https://x.ai/bot/N92u9t1nHlL_gtgk2nAeN) - A chief of agents for a solo founder. Routes work, keeps house rules, and only interrupts for judgment, money, or a blocked teammate. Andrew.
- [Botsi Archivist](https://x.ai/bot/O_3hbkWqb1A51ZcWixGZy) - Holds the skill catalog for a team of Grok bots. Routes work, remasters chats at 20 batches, and only searches for a new skill after you say yes. Chakhdz.
- [Latch](https://x.ai/bot/9nbLm_04EvjnolE9oevTT) - First-sitting onboarding that connects tools and completes one real job in the same chat. [OliverKorzen](https://x.com/OliverKorzen).
- [Product Lead](https://x.ai/bot/KHEDSnSW1R74FH9kmghlA) - Turns product evidence into a ship, iterate, hold, or stop memo. Prathit.
- [Workshop Facilitator](https://x.ai/bot/EJTJEGbRPXlSppzFk8ETH) - Chairs a working session and refuses to close it while any question lacks an owner. [Paul](https://x.com/OTNworld).
- [Zeus](https://x.ai/bot/ehQNQQR9apvhVcmxFiFyP) - A single HQ chat that picks the next bet, drafts in your voice, and never sends unless you say go. [Majd](https://x.com/MajdKaid).
- [Bot Father](https://x.ai/bot/dVQjvC6c-sMhtgVskciBH) - Central orchestrator that nourishes, protects, and evolves a network of child agents. [abdshomad](https://x.com/abdshomad).
- [MadMax Mode](https://x.ai/bot/pTe8gpPc_5SuwKkEszn18) - Invents new bots for you, with a tight brief and every job filed where it belongs. [JoePro](https://x.com/JoePro).
- [Poteto-style Chief of Staff](https://x.ai/bot/Nk-vzuWqTvqSed-G8-Za5) - Runs your bench of bots lean: few timers, short specialists, coding sent elsewhere. [HaseebMir91](https://x.com/HaseebMir91).
- [The Bobs](https://x.ai/bot/Z0Faxo9DTX0KL7j7OHTWJ) - Interviews every bot you own and says which ones are not earning their keep. [Boilerfan1234](https://x.com/Boilerfan1234).
- [Tuner](https://x.ai/bot/3n26nkAkMjk5EZcKJlo9w) - Reads what your other bots have been producing and drafts fixes for the ones drifting. [humanmeteorite](https://x.com/humanmeteorite).
- [Babel - live translator](https://x.ai/bot/-GzMJlSIqdo89K0qs3yC4) - Drops short English translations into the chat while an international call is still running. [kunalsells](https://x.com/kunalsells).
- [Code Team Spawn](https://x.ai/bot/NuOSHSdCZPVkM78K0HkB3) - Sits idle until you need a coding team, then interviews and spawns a hidden five-person crew. [bryanofearth](https://x.com/bryanofearth).
- [Code Team Spawn Conductor](https://x.ai/bot/_G3maEq_3-ijcQJ1Efr4X) - Updated spawn that interviews, then stands up a Conductor plus a hidden five-person coding crew. [bryanofearth](https://x.com/bryanofearth).
- [Fondi](https://x.ai/bot/qL920VjKyua3_u89UYnQL) - Reads your company's website and staffs you a leadership bench of bots. [naoufal_elh](https://x.com/naoufal_elh).
- [Know Yourself](https://x.ai/bot/mD27QOhXb_plMRSbsvMOv) - Turns your own company records into one answer everyone can quote. [SaaSocalypse](https://x.com/SaaSocalypse).
- [multiBot](https://x.ai/bot/Ey28W_8uyJPN_DS_M2CvD) - Spawns CLI-delegated teammates via CreateAgent so Grok only orchestrates and the CLI does the deep work. [simo255](https://github.com/simo255).

## Skills and tools

Community GitHub. Clone, paste, or install.

### Linux laptop app

No official Linux desktop app. The Bot computer in the cloud is already Linux. This line is only if your laptop is Linux.

- [falser101/grok-bot-linux](https://github.com/falser101/grok-bot-linux) - Index of Cursor-CDN Linux `.deb` / `.rpm` / AppImage URLs and distro packaging. Does not host installers.

### Local and study

- [grokbot-shim](https://github.com/codeaashu/grokbot-shim) - Run Grok Bot locally with a computer desktop and configurable Codex or OpenAI-compatible models.
- [grok-bot-0.18-reconstructed](https://github.com/b-nnett/grok-bot-0.18-reconstructed) - Unofficial TypeScript reconstruction of Grok Bot 0.18.0 for macOS. Study-only, archived.
- [grok-bot-0.18-original](https://github.com/ChHsiching/grok-bot-0.18-original) - Unminified 0.18.0 runtime archive, split per module, byte-for-byte reproducible.

### Model and factory

- [opengrok](https://github.com/OnlyTerp/opengrok) - Pick any model for a Grok Bot. Keys stay on your machine.
- [openbot](https://github.com/aaravarr/openbot) - Bring your own models to Grok Bot. Local control UI, with a switch back to stock behavior.
- [Grok Ship](https://github.com/kunchenguid/grok-ship) - Turns a Bot into a software factory, with review before any PR.
- [grok-bot-setup](https://github.com/BlockedPath/grok-bot-setup) - Adapters CLI and custom model provider bridges for DeepSeek, Claude, Grok, and OpenAI.
- [grokbot2api](https://github.com/taowen/grokbot2api) - Local OpenAI-compatible proxy so Grok Build can call Cursor-hosted Grok models over undocumented inference protobuf.
- [grokrouter](https://github.com/promptadvisers/grokrouter) - Reversible Mac (and Windows preview) router so official Grok Bot uses Codex SDK or OpenRouter per Bot, with stock restore.
- [grok-bot-switch](https://github.com/enderzcx/grok-bot-switch) - Switch Grok Bot onto your own API providers from the cloud computer, with a path back to official Grok.

### CLIs and SDKs

- [grok-bot-cli](https://github.com/ScriptedAlchemy/grok-bot-cli) - Terminal CLI to list, create, and message teammates from a signed-in Mac.
- [grokbot-sdk](https://github.com/adam91holt/grokbot-sdk) - TypeScript SDK for a running host. Typed local HTTP gateway client plus sand-data disk readers.
- [grok-bot-skill](https://github.com/adamanz/grok-bot-skill) - Cursor/Claude skill so a coding agent can list, chat with, and create Grok Bot teammates.
- [grokbot-tui](https://github.com/smarzban/grokbot-tui) - Unofficial terminal TUI that talks to the host gateway so you can chat from the terminal.
- [grokbot-queue](https://github.com/ShuhangGe/grokbot-queue) - CLI (gbq) that queues work onto running Bots over Tailscale/SSH.
- [dictate-capture](https://github.com/budezllc/dictate-capture) - Windows helper. Hold Ctrl+D to dictate into Grok Bot, optionally paste a screenshot.
- [QuotaRail](https://github.com/Allan-Aa/QuotaRail) - Native macOS Dock-style usage rail for Codex, Claude, Grok, and Grok Bot.
- [locum](https://github.com/HarjjotSinghh/locum) - Custom MCP so a cloud Grok Bot can tunnel coding work onto your already-logged-in local Claude Code or Codex CLI.
- [foreman](https://github.com/Archive228/foreman) - Zero-dependency CLI that inspects a Grok Bot crew against git-declared AGENT.md packs and writes a shift report of stalled work.
- [grok-bot-usage](https://github.com/Kargatharaakash/grok-bot-usage) - Zero-dep `gbu` command that prints weekly Grok Bot usage and on-demand spend across Cursor accounts.
- [coolify-cursor-plugin](https://github.com/coollabsio/coolify-cursor-plugin) - Coolify plugin that points Cursor or Grok Bot at `https://<instance>/mcp` so a bot can inspect servers, apps, deploys, and logs.
- [grok-bot-mcp](https://github.com/Kargatharaakash/grok-bot-mcp) - Zero-dep MCP so Claude or Cursor can list, message, and read Grok Bot transcripts on the local gateway.
- [Grok Usage Menu Bar](https://github.com/diegocp01/grok_bot_usage_menu_bar) - Native macOS menu-bar app for weekly Grok Bot allowance left and reset countdown.
- [Convoy](https://github.com/Deploy-Forward/convoy) - Public MCP plus hop CLI. Grok Bot conducts; BYO harness CLIs do the hops.
- [grokbot-openai](https://github.com/owenisas/grokbot-openai) - PKCE login like the app, then a local OpenAI /v1/chat/completions for Hermes, OpenCode, or curl.

### Chat bridges

- [grokbot-imessage-skill](https://github.com/jeffhuber/grokbot-imessage-skill) - Read, triage, and send iMessage from the Bot via a local macOS helper.
- [grok-wechat-plugin](https://github.com/little-thing/grok-wechat-plugin) - WeChat iLink channel. Inbound messages wake a Bot over webhook.
- [grokbot-telegram-bridge](https://github.com/SSBrouhard/grokbot-telegram-bridge) - Unofficial Telegram gateway that talks to the local Sand gateway on loopback only.
- [Grok Bot Discord gateway](https://github.com/davefmurray/grok-bot-discord) - Bridge so a Bot can live in Discord without pretending to be a Slack App.
- [discord-grok-bot-kit](https://github.com/larry-fuqua/discord-grok-bot-kit) - Discord listener that wakes a Grok Bot webhook on the owner's mention.
- [grokbot-cloudflare-inbox](https://github.com/ethanolivertroy/grokbot-cloudflare-inbox) - Self-hosted Grok Bot inbox on Cloudflare Workers, based on Agentic Inbox.
- [grokbot-hermes-bridge](https://github.com/iamsupersocks/grokbot-hermes-bridge) - Self-hosted OAuth MCP gateway so Grok Bot can ask a local Hermes Agent through `hermes_ask` and `hermes_status`.
- [grokbot-obsidian-bridge](https://github.com/iamsupersocks/grokbot-obsidian-bridge) - Fail-closed OAuth reverse proxy that exposes a loopback Obsidian MCP after owner approval.
- [grokbot-discord](https://github.com/RudeDude/grokbot-discord) - Python Discord gateway. One Discord bot, many Grok Bots, webhook wake, async reply.
- [Discord for Grok Bot](https://github.com/NinjaProtocol/grokbot-discord-plugin) - Paste-in Discord plugin. Mentions in allowlisted channels wake the Bot.

### Skill packs and playbooks

- [Grok Bot 橙皮书](https://github.com/KinGao294/grok-bot-orange-book) - Chinese playbook for a five-person fleet, routines, and cost control.
- [grok-skills](https://github.com/jaskirat1616/grok-skills) - 195 `SKILL.md` playbooks. Browse at [grokbotskills.vercel.app](https://grokbotskills.vercel.app).
- [note-kojo](https://github.com/matsutouya/note-kojo) - Pick a note.com account and send the draft to a Grok Bot.
- [awesome-grokbot](https://github.com/mergisi/awesome-grokbot) - Paste START.md into a blank Bot and it stands up a 2-4 person team.
- [rosterroom](https://github.com/codejunkie99/rosterroom) - 82 paste-in team rosters with ownership lanes and approval gates.
- [grok-bot-profiles](https://github.com/HAEGONG/grok-bot-profiles) - Splits spec, implementation, and verification so a Bot never approves its own work.
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

### Indexes

- [botdirectory.ai](https://github.com/elie222/botdirectory.ai) - Community prompt directory. Paste a listing into Grok Bot and it sets itself up.
- [GrokBotDev](https://github.com/ZeroPointRepo/GrokBotDev) - Agent-run directory of prompts, plugins, and use cases. PRs are the write API.
- [ZeroPointRepo/awesome-grok-bot](https://github.com/ZeroPointRepo/awesome-grok-bot) - Day-one directory, strong on marketplace format and self-hosted runtimes.
- [awesome-grok-bot-plugins](https://github.com/rdmgator12/awesome-grok-bot-plugins) - 219 in-app marketplace listings captured 2026-08-12, grouped by category.
- [Anil-matcha/awesome-grok-bot](https://github.com/Anil-matcha/awesome-grok-bot) - Ready-to-paste prompt library across productivity, sales, marketing, and ops.
- [botteams](https://github.com/ellelion/botteams) - Public team directory. Copy one installer prompt and it creates the named Bots and routines.
- [really.bot](https://github.com/travisrr/really.bot) - Public job board. Verified runs get a serial. Tag @tryreallybot on X to import a thread.
- [usegrokbot](https://github.com/a70win-wq/usegrokbot) - Searchable library of real workflows with a live discover site at usegrokbot.com.
- [grok-template](https://github.com/Ritesh-Root/grok-template) - Community marketplace at groktemplate.vercel.app for share links and GitHub packs.
- [botskills](https://github.com/PramodDutta/botskills) - Paste-ready BOT.md directory. Every listing requires a hard human-approval boundary.
- [orgbot-hub](https://github.com/AmitMirgal/orgbot-hub) - Directory app for installable team packs that use official x.ai/bot share URLs only.
- [grokory](https://github.com/andrewkittridge/grokory) - Public ranked board of Grok Bot templates.
- [awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates) - Community dump of live x.ai/bot share IDs, including several missing from grokbot.dev.
- [0xNyk/awesome-grok-bot](https://github.com/0xNyk/awesome-grok-bot) - Independent directory of skills, plugins, MCP, and setup with maturity tags.
- [grokbot-zh](https://github.com/245678000000/grokbot-zh) - Independent Simplified-Chinese localization of the grokbot.dev marketplace, use-cases, and plugins.

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

Catalog and recipes CC0. Scripts MIT. Chinese: [README.zh-CN.md](README.zh-CN.md).
