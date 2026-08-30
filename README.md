# Awesome Grok Bot

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![CC0](https://img.shields.io/badge/catalog-CC0-lightgrey.svg)](LICENSE-CC0)
[![MIT](https://img.shields.io/badge/scripts-MIT-blue.svg)](LICENSE-MIT)
[![GitHub stars](https://img.shields.io/github/stars/majiayu000/awesome-grok-bot?style=social)](https://github.com/majiayu000/awesome-grok-bot/stargazers)
[![GitHub last commit](https://img.shields.io/github/last-commit/majiayu000/awesome-grok-bot)](https://github.com/majiayu000/awesome-grok-bot/commits/main)
[![Live shares](https://img.shields.io/badge/x.ai%2Fbot-live%20shares-black.svg)](catalog.json)

[English](README.md) · [中文](README.zh-CN.md)

> Curated official share links you can Add to Grok Bot, plus field cases and community tools. This repo is an index. Cloning it does not install a bot.

## Contents

- [Start here](#start-here)
- [Field cases](#field-cases)
  - [Rosters](#rosters)
  - [Computer-use jobs](#computer-use-jobs)
  - [Gotchas](#gotchas)
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
  - [Linux desktop](#linux-desktop)
  - [Local and study](#local-and-study)
  - [Model and factory](#model-and-factory)
  - [CLIs and SDKs](#clis-and-sdks)
  - [Chat bridges](#chat-bridges)
  - [Skill packs and playbooks](#skill-packs-and-playbooks)
  - [Indexes](#indexes)
  - [Open-source alternatives](#open-source-alternatives)
- [Tutorials](#tutorials)
- [Reviews](#reviews)

## Start here

You need the Grok Bot desktop (macOS or Windows) or the iOS app. Open a share, hit **Add to Grok Bot**. Cap is 50 bots on one shared Linux computer. These 100 were HTTP-checked live on 30 Aug 2026 and are still unverified.

Add one of [Work](https://x.ai/bot/vOipeiu0AZ7CuC5ynw5h0) · [dr eggbot](https://x.ai/bot/93gOz3op1UQdBdbekQFLK) · [Fixer](https://x.ai/bot/jiF_km66YLNm5LBVJ5_Ho), then one [pack](#team-packs). Notes: [templates/work](templates/work/) · [templates/dr-eggbot](templates/dr-eggbot/) · [templates/fixer](templates/fixer/).

<p align="center">
  <a href="https://x.ai/bot/vOipeiu0AZ7CuC5ynw5h0"><img src="docs/screenshots/work.png" width="30%" alt="Work share page"></a>
  <a href="https://x.ai/bot/93gOz3op1UQdBdbekQFLK"><img src="docs/screenshots/dr-eggbot.png" width="30%" alt="dr eggbot share page"></a>
  <a href="https://x.ai/bot/jiF_km66YLNm5LBVJ5_Ho"><img src="docs/screenshots/fixer.png" width="30%" alt="Fixer share page"></a>
</p>

A share copies identity, description, selected memories, skills, routines, and first-party plugins by plugin id. It does not copy the computer, files, logins, API keys, custom MCP, scripts, or history. `verified: true` only after a maintainer imported one and ran a first safe task.

> Community templates are untrusted third-party software. Adding one accepts Grok Bot third-party bot terms. Inspect the profile, connect one connector, try a read-only task, only then enable routines or writes. Never paste API keys into SETUP. Skills can fail to travel. See [SECURITY.md](SECURITY.md) and [docs/vetting.md](docs/vetting.md).

Machine-readable: [catalog.json](catalog.json).

## Field cases

Public writeups of a real run. Not a meetup list. Account cap is 50 Bots. They share one computer.

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

### Gotchas

Staff-confirmed or screenshot-backed. Not a dump of every forum thread.

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

## Team packs

One share = one bot. These recipes are how you assemble a roster.

- [Work + Life two-door](packs/two-door-work-life.md)
- [Chief of Staff + Fixer + specialists](packs/chief-of-staff.md)
- [CasJam product heads (Head + Growth + Maintainer)](packs/casjam-product-heads.md) - roster from [CasJam](https://x.com/CasJam/status/2093762642867581359). No share URL; assemble it.

## Coding & shipping

- [dr eggbot](https://x.ai/bot/93gOz3op1UQdBdbekQFLK) - A bot that builds other Grok bots for you. [Lauren](https://x.com/poteto). Notes: [templates/dr-eggbot](templates/dr-eggbot/).
- [1000x Product Engineer](https://x.ai/bot/sQDD87Gp6VLT0m99tFpzu) - A full-stack product engineer that ships Convex, TanStack and React apps. [Thomas](https://x.com/TomZarebczan).
- [Agent Looper](https://x.ai/bot/AETdGbRRNWfckrRGv22LD) - Keeps a local coding agent iterating until your acceptance test passes. [dancingteeth](https://x.com/dancingteeth).
- [Alchemist](https://x.ai/bot/JjO20_oGKrE_Ys5Uz4efj) - Experiments its way to a method for undocumented problems. [Aman](https://x.com/2onism).
- [Apps](https://x.ai/bot/OPLop__-mqSsyQheR5JYv) - Describe an app in one sentence and get a running build back. [Wayne](https://x.com/waynesutton).
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

## Inbox & calendar

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

## Research & briefings

- [Competitor Watching](https://x.ai/bot/5PKSzU0ruN_DQbNXc7m0N) - Snapshots you against 3-8 competitors and alerts only on material change. [Andrej](https://x.com/scheemunai).
- [Ethan](https://x.ai/bot/F5Mm-0O3fPPZjYGIdsycE) - A research desk with five specialist skills that fact-checks its own findings. [JUMPERZ](https://x.com/jumperz).
- [X Brief](https://x.ai/bot/GkX6X536UK2MlbkfGLQnb) - Learns what you pay attention to from your own posts, then watches that beat. [Daniel](https://x.com/daniel_mac8).
- [News Scout](https://x.ai/bot/9Mo5saoPQYIp45IgzMT7P) - A weekday morning news digest in your own timezone. [Eleni](https://x.com/byeleni).
- [Thoth](https://x.ai/bot/W4Z5pvEm6UgCml48Ig4dT) - Does deep research and files the dossiers so you can find them again. [Rich](https://x.com/RichSilver).
- [RuntimeWire - AI & Startup News](https://x.ai/bot/k4iwGejDGoy-oT7qohxXb) - A sourced daily read on AI funding, launches and founder moves. [Ryan](https://x.com/merket).
- [Youtube分析官](https://x.ai/bot/Ja29gpInav-alRhXhzyNL) - Ranks the best YouTube videos on a topic and writes the brief. [Mado](https://x.com/madogiwacowork).
- [Box Inspector](https://x.ai/bot/q7GLbLhMZDpJXBGuuci1J) - Inspects a Grok bot's share link before you let it into your account. [Knock](https://x.com/SuddenlyJon).
- [AI Resource Sift](https://x.ai/bot/3XvYxSCGJRY6x1woq-hdL) - Sweeps papers, code, lectures and forums into one reading stack. [Alen](https://x.com/beamnxw).
- [GrokBot Awesome Use Cases](https://x.ai/bot/DTNL6V2HxpUHj3MkI-bSj) - A short morning list of new Grok Bot use cases worth setting up. [Andrej](https://x.com/scheemunai).

## Customer & sales

- [ADM account bot](https://x.ai/bot/4Gc1tZsJu7C8YH-EnTfaN) - A weekly account plan for keeping and growing customers. [Scott](https://x.com/scottxmetcalf).
- [Echo](https://x.ai/bot/ph5mcXqVy2p176Br7BJYi) - Builds the deck after a customer call, from what was actually said. [Krista](https://x.com/kristaletz).
- [Linkedin Leads](https://x.ai/bot/-BdTEtBnZEq9K1ef-bn6W) - Daily LinkedIn lead sweep across posts and comments from your keywords. [Angel](https://x.com/angelesp).
- [LinkedIn Desk](https://x.ai/bot/tQuoQ94ErUfXNJu4xPqZi) - Vets LinkedIn invitations daily against a policy you set. [AJ](https://x.com/SEO).
- [PG](https://x.ai/bot/fcJJMM58AdXSTBdW3xWyW) - Researches accounts and mines podcasts for a real outreach hook. [Krista](https://x.com/kristaletz).
- [John Wick](https://x.ai/bot/_OlL8LPI6lc2xi82F4Gf7) - Maps a target company and works upward until it reaches the decision maker. [Liam](https://x.com/liam_fallen).
- [Post Call Assistant](https://x.ai/bot/xF12c5y4LVe7nf7IFguWI) - Drops your to-dos and a draft follow-up after every meeting. [Priya](https://x.com/itspriyaptl).
- [GTM Chief Of Staff](https://x.ai/bot/r9Svkbs3dN6CY1Iy_Au4b) - Carries the admin around enterprise deals so you can sell. [Sultanov](https://x.com/thekuchh).
- [SaaSbot](https://x.ai/bot/X6RbSbeyLvQ_I5k3zU4IM) - A weekday operator that runs GTM, outbound, QA and onboarding. [Daniel](https://x.com/danielfoch).
- [Website agency lead scout](https://x.ai/bot/FBSTEPfTxj7ekvSml-nUJ) - Delivers five vetted businesses that need a new website each morning. [Josh](https://x.com/joshkim).

## Finance & ops

- [Reaper](https://x.ai/bot/Gd-cqXG8xG_RPmKGixa73) - Finds the subscriptions, meetings and processes that should be killed. [Liam](https://x.com/liam_fallen).
- [Bounty Hunter](https://x.ai/bot/gCWYD009F66A3XDEYdZgf) - Digs through your email and bills for refunds and credits you never chased. [Liam](https://x.com/liam_fallen).
- [porshe](https://x.ai/bot/BXDRX1jaURkI4Tx70zLg6) - Finds money you are already owed but have not collected. [Lauren](https://x.com/poteto).
- [Invoice Hunter](https://x.ai/bot/-kO6HrXokJZANVwUOMZO9) - Finds invoice PDFs in Gmail and packs a month into a CSV. [Andrej](https://x.com/scheemunai).
- [Watchdog](https://x.ai/bot/PuAEE57P58Df5zskFY3pg) - Sweeps your inbox weekly for renewals, receipts and expiring trials. [SmoresBoy](https://x.com/jxckvibe).
- [AIUsageBot](https://x.ai/bot/2atUDeldi9vF1R_ySRgCo) - Tracks how much of each AI subscription you have actually used. [Brian](https://x.com/BrianDEvans).
- [Freelance manager](https://x.ai/bot/nVbIdGSLO4i-QU183t7Sg) - Chases proposals, invoices and milestones for a solo freelancer. [Josh](https://x.com/joshkim).
- [Returns & Warranties](https://x.ai/bot/HmUpwJbVbgLEGisEj0FPt) - Warns you before a return, refund or warranty window closes. [Liam](https://x.com/liam_fallen).

## Content & publishing

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
- [X Strategist](https://x.ai/bot/pjCwyZNSLk0ch8DUVoeKH) - Plays the long game on who is worth knowing on X. [Sultanov](https://x.com/thekuchh).
- [X Top 100 Fans Weekly](https://x.ai/bot/HU7XArfGhUgLnzVcr7neB) - Ranks the 100 people who engaged most with your X posts each week. [Adam](https://x.com/AdamLowisz).
- [Content Growth Coach](https://x.ai/bot/sMmoqCElqRPj1RYbtngMr) - Tells creators which fix will move their numbers first. [SmoresBoy](https://x.com/jxckvibe).

## Personal admin

- [Home robots](https://x.ai/bot/3mf-UN4mGnCp8DbPBnW5u) - Control your mower, vacuum and other Matter home robots from one chat. [Sawyer](https://x.com/SawyerMerritt). Notes: [templates/home-robots](templates/home-robots/).
- [Chef](https://x.ai/bot/3U6zxtPa1b8GbWheaIr4J) - Plans the week's meals, builds the list and orders the groceries. [dogenorway](https://x.com/DogecoinNorway).
- [Appointment Finder](https://x.ai/bot/75K-dB4m30goo_PamA9nM) - Finds the best appointment slot so you never phone around again. [Liam](https://x.com/liam_fallen).
- [Be Happier](https://x.ai/bot/0VC1XzREXRFGe0hVo-JEG) - Suggests three concrete things each week that would make you happier. [Lenny](https://x.com/lennysan).
- [HouseBot](https://x.ai/bot/3ufXSXC-Z8OadVsV9yMLL) - Hunts rentals and homes every 12 hours across six listing sites. [Shub](https://x.com/shubgaur).
- [Homework Checker](https://x.ai/bot/Mm_WhYXIjZ3xDNf3s3p91) - Weekday recap of a student's missing assignments and grades. [Kevin](https://x.com/kevinace).
- [Canvas](https://x.ai/bot/YihRBqrXaDwRdjN79Uofl) - Pulls your university units and deadlines out of Canvas. [Dakkshin](https://x.com/daxperera).
- [Job interview hunter](https://x.ai/bot/B_8a8ApckqZFiJwWRBf5u) - Drafts tailored applications and referral notes on a weekday cadence. [Josh](https://x.com/joshkim).
- [Deal Hunting](https://x.ai/bot/MGiEdMz0TNxBkvMgUZAbf) - Landed-cost shopping that compares real prices including shipping and tax. [Andrej](https://x.com/scheemunai).
- [Shop](https://x.ai/bot/nlIApzau1qw0MNiRkqbPH) - Searches Shopify stores and hands back a short list, approval required. [Alex](https://x.com/alex_chehimi).
- [Paperwork](https://x.ai/bot/mNN576TxXnc_XZu9aCsfr) - Works out what a boring document is and what you have to do about it. [Liam](https://x.com/liam_fallen).
- [EG4 Monitor](https://x.ai/bot/9rxPP70OSzuTtTaOrzeqz) - Tracks a home EG4 solar and battery system and raises faults early. [Terry](https://x.com/look4terry).
- [Gym Bod](https://x.ai/bot/3mtiwFoZcEMq59w-49DMS) - Claims your spot in busy gym classes as registration opens. [peter](https://x.com/DrPB).
- [Chicken Joe](https://x.ai/bot/7f5AjmpjZkmTIsSybedYS) - Scans NorCal surf reports and cams each morning and tells you where to go. [Parker](https://x.com/parker__conrad).
- [Local Deals](https://x.ai/bot/KmR5kmGnalq1b2nhCRXyo) - Daily local marketplace deals that it will negotiate for you. [Brandon](https://x.com/brandon_galang).
- [Melissa](https://x.ai/bot/3foGoeh6ksDhD4jTxYjyE) - A fitness and nutrition coach built around Type 1 diabetes constraints. [Tobias](https://x.com/tpgoebel).

## Teams & handoffs

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

## Skills and tools

Community GitHub. Clone, paste, or install. Not official docs.

### Linux desktop

The Bot **computer** is already Linux. Official **desktop apps** are macOS, Windows, and iOS. Community Linux desktop ports exist if you want the thin client on a Linux laptop. They are unofficial.

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

### Chat bridges

- [grokbot-imessage-skill](https://github.com/jeffhuber/grokbot-imessage-skill) - Read, triage, and send iMessage from the Bot via a local macOS helper.
- [grok-wechat-plugin](https://github.com/little-thing/grok-wechat-plugin) - WeChat iLink channel. Inbound messages wake a Bot over webhook.
- [grokbot-telegram-bridge](https://github.com/SSBrouhard/grokbot-telegram-bridge) - Unofficial Telegram gateway that talks to the local Sand gateway on loopback only.
- [Grok Bot Discord gateway](https://github.com/davefmurray/grok-bot-discord) - Bridge so a Bot can live in Discord without pretending to be a Slack App.
- [discord-grok-bot-kit](https://github.com/larry-fuqua/discord-grok-bot-kit) - Discord listener that wakes a Grok Bot webhook on the owner's mention.
- [grokbot-cloudflare-inbox](https://github.com/ethanolivertroy/grokbot-cloudflare-inbox) - Self-hosted Grok Bot inbox on Cloudflare Workers, based on Agentic Inbox.
- [grokbot-hermes-bridge](https://github.com/iamsupersocks/grokbot-hermes-bridge) - Self-hosted OAuth MCP gateway so Grok Bot can ask a local Hermes Agent through `hermes_ask` and `hermes_status`.
- [grokbot-obsidian-bridge](https://github.com/iamsupersocks/grokbot-obsidian-bridge) - Fail-closed OAuth reverse proxy that exposes a loopback Obsidian MCP after owner approval.

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

## Tutorials

Community walkthroughs. Not official docs.

- [How to Get Started with Grok Bot](https://debbie.codes/blog/how-to-get-started-with-grok-bot) - Debbie's field guide. First Bot, CoS prompt, and how she reorganizes the roster.
- [Grok Bot Masterclass](https://www.dailydoseofds.com/p/grok-bot-masterclass/) - Avi / Daily Dose. Record once, turn it into a skill, hang it on a routine.
- [A deep dive into Grok Bot](https://flaviocopes.com/grok-bot/) - Flavio Copes on the shared computer, skills to routines, share-as-template, and Stripe Link spend requests.
- [Technocore Grok Bot (JA)](https://github.com/hariou/technocore-grokbot-ja) - Japanese guide for safely operating a Technocore DID on Grok Bot.
- [Peter Yang: 5 Must-Try Use Cases](https://www.youtube.com/watch?v=MkVcHbviYOw) - Advisor, YouTube researcher, X scout, Gmail declutter, travel concierge.

See also [Grok Bot 橙皮书](https://github.com/KinGao294/grok-bot-orange-book) under Skill packs.

## Reviews

- [The Verge: an AI teammate you can assign work](https://www.theverge.com/ai-artificial-intelligence/978666/spacexai-grok-bot-ai-agent-beta-launch) - Launch coverage that keeps the product distinct from grok.com chat.
- [Lenny's Newsletter: Grok Bot, Grok 4.6, and Cursor](https://www.lennysnewsletter.com/p/i-tested-grok-bot-grok-46-and-cursor) - Separates the Bot product from the 4.6 model. Do not collapse the two.
- [Grok Bot vs OpenClaw](https://myclaw.ai/blog/grok-bot-vs-openclaw) - Managed cloud computer vs self-hosted, bring-your-own-model.
- [Before You Hire a $200 Grok Bot](https://zchmael.substack.com/p/before-you-hire-a-200-grok-bot-ai) - Skeptical checklist. What the seat does not buy you.
- [CellCog: Grok Bot pricing](https://cellcog.ai/blog/grok-bot-pricing/) - Living pricing note. Eight routes from Cursor Pro $20 / SuperGrok $30, unpublished weekly allowance.
- [What is Grok Bot? The Real Cost & Hidden Risks](https://4geeks.com/en/blog/ai-tools/what-is-grok-bot) - Cost and credential risk. One shared computer is not a security boundary.

## Contributing

PR a live `https://x.ai/bot/…` URL, a field case, or a GitHub tool. One sentence. Run `node scripts/lint.mjs` if you touch the catalog. Details in [CONTRIBUTING.md](CONTRIBUTING.md).

Do not invent share URLs. Do not paste another person's full standing instructions. Do not send official docs or meetup links.

## Related

- Broader resource list (docs, meetups, failure modes): [RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot)
- Community galleries: [somi.ai/grok-bots](https://somi.ai/grok-bots) · [grokbot.dev](https://grokbot.dev) · [grokyard.com](https://www.grokyard.com)

Catalog and recipes CC0. Scripts MIT. Chinese: [README.zh-CN.md](README.zh-CN.md).
