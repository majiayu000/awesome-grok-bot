# Awesome Grok Bot [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

精选、可直接添加的官方 Grok Bot 分享链接。本仓库是索引。clone 下来不会安装任何 Bot。

## 从这里开始

需要 Grok Bot 桌面端或 iOS 应用。打开分享链接，点 **Add to Grok Bot**，用你自己的账号重连插件，先跑一个只读任务。不要把整份目录加进去。账号上限 50 个 Bot（共用一台电脑）。这 100 条在 2026 年 8 月 30 日 HTTP 核对为活链接，尚未核验。

先加 **其中一个**：

- [Work](https://x.ai/bot/vOipeiu0AZ7CuC5ynw5h0) - 常驻工作收件箱。 [Tyler](https://x.com/TylerNishida). 说明: [templates/work](templates/work/).
- [dr eggbot](https://x.ai/bot/93gOz3op1UQdBdbekQFLK) - 替你搭建其他 Grok Bot。 [Lauren](https://x.com/poteto). 说明: [templates/dr-eggbot](templates/dr-eggbot/).
- [Fixer](https://x.ai/bot/jiF_km66YLNm5LBVJ5_Ho) - 真正动手的执行者，不是只做计划的参谋。 [Uzi](https://x.com/UziObi). 说明: [templates/fixer](templates/fixer/).

然后只选 **一套** 配方。第一天不要自己发明 12 人编制。

- [Work + Life 两扇门](packs/two-door-work-life.md)
- [CasJam 产品编队（Head + Growth + Maintainer）](packs/casjam-product-heads.md)
- [参谋 + Fixer + 专职](packs/chief-of-staff.md)

> 社区模板是不可信的第三方软件。添加即表示接受 Grok Bot 第三方 Bot 条款。先看 profile，只接一个连接器，先跑只读任务，确认后再开例行任务或写入。不要把 API key 写进 SETUP。技能可能传不过去。见 [SECURITY.md](SECURITY.md) 和 [docs/vetting.md](docs/vetting.md)。

机器可读目录：[catalog.json](catalog.json)。

## 如何导入

1. 在浏览器打开官方分享链接（`https://x.ai/bot/…`）。
2. 选择 **Add to Grok Bot**。需要 Grok Bot 桌面端或 iOS 应用。

分享会**复制**：身份、描述、勾选的记忆、技能、例行任务、以及按插件 id 引用的官方市场插件。

**不会复制**：电脑、文件、浏览器会话/登录、API key、自定义 MCP、脚本、对话历史。导入后请自行重新连接插件。

`verified: true` 只在维护者真正导入并跑过首次安全任务之后才打。

已知问题：预览里能看到技能，导出却可能是 `skills: []`。

## 这里收什么

一行 = 一条活的 `https://x.ai/bot/…` 分享，可 Add to Grok Bot。六个精选另外有 `PROFILE.md` / `SETUP.md`，写清分享带不过去的东西。

不是：

- 资源/文档列表。那是 [RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot)。
- 画廊倾销（[somi.ai](https://somi.ai/grok-bots)、[grokbot.dev](https://grokbot.dev)、[grokyard.com](https://www.grokyard.com)）。grokbot.dev 和原始 X 帖是发现来源，不是本目录本身。
- 模板功能出现之前的提示词合集（[mergisi/awesome-grokbot](https://github.com/mergisi/awesome-grokbot)）。
- 官方 use-case 文案。那些是你**新建** Bot 时贴进去的起步提示，见 [docs/official-starters.md](docs/official-starters.md)。

中文招募卡/玩法（不是原生分享目录）：[KinGao294/grok-bot-orange-book](https://github.com/KinGao294/grok-bot-orange-book)（橙皮书）。

## 目录

- [从这里开始](#从这里开始)
- [团队配方](#团队配方)
- [Coding & shipping](#coding--shipping)
- [Inbox & calendar](#inbox--calendar)
- [Research & briefings](#research--briefings)
- [Customer & sales](#customer--sales)
- [Finance & ops](#finance--ops)
- [Content & publishing](#content--publishing)
- [Personal admin](#personal-admin)
- [Teams & handoffs](#teams--handoffs)

## 团队配方

一条分享 = 一个 Bot。编制要自己拼。

- [Work + Life 两扇门](packs/two-door-work-life.md)
- [参谋 + Fixer + 专职](packs/chief-of-staff.md)
- [CasJam 产品编队（Head + Growth + Maintainer）](packs/casjam-product-heads.md) - 来自 [CasJam](https://x.com/CasJam/status/2093762642867581359) 的编制。没有分享链接，要自己搭。

## Coding & shipping

- [dr eggbot](https://x.ai/bot/93gOz3op1UQdBdbekQFLK) - 替你搭建其他 Grok Bot。 [Lauren](https://x.com/poteto). 说明: [templates/dr-eggbot](templates/dr-eggbot/).
- [1000x Product Engineer](https://x.ai/bot/sQDD87Gp6VLT0m99tFpzu) - 全栈产品工程师，用 Convex、TanStack 和 React 把应用真正送上线。 [Thomas](https://x.com/TomZarebczan).
- [Agent Looper](https://x.ai/bot/AETdGbRRNWfckrRGv22LD) - 盯着本机编程代理反复改，直到验收测试通过。 [dancingteeth](https://x.com/dancingteeth).
- [Alchemist](https://x.ai/bot/JjO20_oGKrE_Ys5Uz4efj) - 没文档的问题就拿来做实验，直到摸出一套办法。 [Aman](https://x.com/2onism).
- [Apps](https://x.ai/bot/OPLop__-mqSsyQheR5JYv) - 一句话描述应用，收回一个能跑起来的构建。 [Wayne](https://x.com/waynesutton).
- [overnight shipper](https://x.ai/bot/aaqCOb-3SE48_7qAEAzAf) - 睡前丢一个点子，早上起来审 pull request。 [Josh](https://x.com/joshkim).
- [lgtm the pr closer](https://x.ai/bot/vGk7yV-vF92ZegpNF3NPo) - 每天早上醒来，把开着的 pull request 清掉。 [Claire](https://x.com/clairevo).
- [Gardener](https://x.ai/bot/oH3eR4YWtsljcz0W4HUBp) - 用可证明、行为不变的小 PR 清掉死代码。 [Tyler](https://x.com/tylerklose).
- [PR Reviewer](https://x.ai/bot/rt629UEZFtE4Wz0A_0c37) - 按风险高低来审 pull request。 [mustafa](https://x.com/mustafaergisi).
- [AI Harness Assistant](https://x.ai/bot/oq-mYZXM23ShlY7UbJWeB) - 让你机器上每一套 AI 编程工具都跟上版本。 [Alan](https://x.com/gheeunit).
- [Agent Smith](https://x.ai/bot/JcFj23aaufNWkuiiJTX0j) - 多 Bot 工作区的清洁工，不让垃圾越堆越多。 [Chip](https://x.com/chiplay).
- [Overwatch](https://x.ai/bot/7u3XiRiTYw4GVZmuZboyP) - 照看 Grok Bot 共用虚拟机，别让机器慢慢烂掉。 [Andrej](https://x.com/scheemunai).
- [Rutin](https://x.ai/bot/o4gWkNGmffEaVtOhaEsA7) - 每周一把舰队里每条例行任务都调一遍。 [Naoufal](https://x.com/naoufal_elh).
- [Skill Bot](https://x.ai/bot/WdKtVYWvxVEDmc7xp8zO2) - Bot 技能的图书管理员，去重并跟上版本。 [Dave](https://x.com/davespeers).
- [BeTree](https://x.ai/bot/2PSNlIROOJPj9qZlfRy0w) - 把分散在多个 Bot 上的计划收成一张活的关系图。 [Nicolas](https://x.com/NicoChauvin74).
- [Frontier Model Watch](https://x.ai/bot/YHqn0iTQuvI-8LC01IP6S) - 每天一份核过的简报，覆盖十家前沿实验室的发布。 [Amina](https://x.com/GuleidAmina).

## Inbox & calendar

- [Inbot](https://x.ai/bot/yH2UttxbMwMugweZrigHT) - 对着你真正在用的每个收件箱，把未读清到零。 [Matthew](https://x.com/matt_silberman).
- [Inbox Zero](https://x.ai/bot/h5i1TCuYEL2mVtMbQtW98) - 每个工作日把噪音归档，把 Gmail 压到零。 [LD](https://x.com/zapnocode).
- [loom](https://x.ai/bot/cElGnAaR55iPHK2DGdPdu) - 读完整条 Gmail 线程并起草回复，从不替你发出。 [Lauren](https://x.com/poteto).
- [Dewey](https://x.ai/bot/rfAHsaFrz6xHBMtUpxDi5) - 盯着 Gmail，只把真正需要你的邮件拎出来。 [William](https://x.com/Vixlio).
- [Google Agent](https://x.ai/bot/tttQVA2UtlNwCzITNCIr0) - 先读后动，管 Gmail、云盘和日历。 [Ryan](https://x.com/ryanthawks).
- [Dispatch](https://x.ai/bot/YkmZEZYBk-BqylyQbM3kq) - 每晚扫邮件、Slack、LinkedIn 和 X 私信，把漏掉的通话补上。 [Filippo](https://x.com/FilippoFonseca).
- [Jess](https://x.ai/bot/Nmv2fCQEcQc3EHzVXJZKN) - 你还没打开邮件、日历、Notion 或 Slack，它已经先复盘过了。 [Logan](https://x.com/LoganARobison).
- [Chief](https://x.ai/bot/QIfSY8pPwjqBSIdal-5CI) - 工作日早上分诊收件箱、日历和待回复。 [SmoresBoy](https://x.com/jxckvibe).
- [Time Keeper](https://x.ai/bot/IAEp851k9orM1LguTm2F8) - 用早间议程和夜间预览把一天夹住。 [Mark](https://x.com/ironted21).
- [Newsletter Cleanup](https://x.ai/bot/dHd69sBvMG2o3lJa__T7K) - 审计半年 newsletter，只退订你点头的那些。 [Andrej](https://x.com/scheemunai).
- [Bot inbox](https://x.ai/bot/RHSd-aq6KC84xxUnvBXSl) - 一行消化所有有新动静的 Bot 和群聊。 [Wayne](https://x.com/waynesutton).
- [Remind Bot](https://x.ai/bot/peJxDrQRS4t2DHuHfzhfW) - 接住那些永远写不进日历的小提醒。 [Damon](https://x.com/damonchen).

## Research & briefings

- [Competitor Watching](https://x.ai/bot/5PKSzU0ruN_DQbNXc7m0N) - 拿你跟三到八个对手做快照，只在真正有变时才叫你。 [Andrej](https://x.com/scheemunai).
- [Ethan](https://x.ai/bot/F5Mm-0O3fPPZjYGIdsycE) - 带五项专长的研究台，还会核对自己的发现。 [JUMPERZ](https://x.com/jumperz).
- [X Brief](https://x.ai/bot/GkX6X536UK2MlbkfGLQnb) - 从你自己的帖子学你关心什么，再盯那条线。 [Daniel](https://x.com/daniel_mac8).
- [News Scout](https://x.ai/bot/9Mo5saoPQYIp45IgzMT7P) - 按你的时区，工作日早上一份新闻摘要。 [Eleni](https://x.com/byeleni).
- [Thoth](https://x.ai/bot/W4Z5pvEm6UgCml48Ig4dT) - 做深研究，把卷宗归档，下次还能找到。 [Rich](https://x.com/RichSilver).
- [RuntimeWire - AI & Startup News](https://x.ai/bot/k4iwGejDGoy-oT7qohxXb) - 每天一篇有出处的 AI 融资、上线和创始人动态。 [Ryan](https://x.com/merket).
- [Youtube分析官](https://x.ai/bot/Ja29gpInav-alRhXhzyNL) - 按主题给 YouTube 视频排名，再写成简报。 [Mado](https://x.com/madogiwacowork).
- [Box Inspector](https://x.ai/bot/q7GLbLhMZDpJXBGuuci1J) - 在你把别人的 Grok Bot 加进账号前，先检查那条分享链接。 [Knock](https://x.com/SuddenlyJon).
- [AI Resource Sift](https://x.ai/bot/3XvYxSCGJRY6x1woq-hdL) - 把论文、代码、讲座和论坛扫进一摞阅读清单。 [Alen](https://x.com/beamnxw).
- [GrokBot Awesome Use Cases](https://x.ai/bot/DTNL6V2HxpUHj3MkI-bSj) - 早上一小份值得动手搭的新 Grok Bot 用法。 [Andrej](https://x.com/scheemunai).

## Customer & sales

- [ADM account bot](https://x.ai/bot/4Gc1tZsJu7C8YH-EnTfaN) - 每周一份客户经营计划，用来保住并做大客户。 [Scott](https://x.com/scottxmetcalf).
- [Echo](https://x.ai/bot/ph5mcXqVy2p176Br7BJYi) - 客户通话结束后，按实际说过的话做演示文稿。 [Krista](https://x.com/kristaletz).
- [Linkedin Leads](https://x.ai/bot/-BdTEtBnZEq9K1ef-bn6W) - 每天按你的关键词扫 LinkedIn 帖子和评论找线索。 [Angel](https://x.com/angelesp).
- [LinkedIn Desk](https://x.ai/bot/tQuoQ94ErUfXNJu4xPqZi) - 每天按你定的规则审核 LinkedIn 邀请。 [AJ](https://x.com/SEO).
- [PG](https://x.ai/bot/fcJJMM58AdXSTBdW3xWyW) - 研究目标客户，从播客里挖真正能开口的钩子。 [Krista](https://x.com/kristaletz).
- [John Wick](https://x.ai/bot/_OlL8LPI6lc2xi82F4Gf7) - 摸清目标公司，一路往上找到能拍板的人。 [Liam](https://x.com/liam_fallen).
- [Post Call Assistant](https://x.ai/bot/xF12c5y4LVe7nf7IFguWI) - 每次会后放下待办和一封跟进草稿。 [Priya](https://x.com/itspriyaptl).
- [GTM Chief Of Staff](https://x.ai/bot/r9Svkbs3dN6CY1Iy_Au4b) - 扛下企业单周边行政，让你专心卖。 [Sultanov](https://x.com/thekuchh).
- [SaaSbot](https://x.ai/bot/X6RbSbeyLvQ_I5k3zU4IM) - 工作日操盘手，获客、外呼、质检和入职一起跑。 [Daniel](https://x.com/danielfoch).
- [Website agency lead scout](https://x.ai/bot/FBSTEPfTxj7ekvSml-nUJ) - 每天早上交出五家需要新网站、已经筛过的商家。 [Josh](https://x.com/joshkim).

## Finance & ops

- [Reaper](https://x.ai/bot/Gd-cqXG8xG_RPmKGixa73) - 找出该砍掉的订阅、会议和流程。 [Liam](https://x.com/liam_fallen).
- [Bounty Hunter](https://x.ai/bot/gCWYD009F66A3XDEYdZgf) - 翻邮件和账单，找你从没追过的退款和额度。 [Liam](https://x.com/liam_fallen).
- [porshe](https://x.ai/bot/BXDRX1jaURkI4Tx70zLg6) - 找出你已经该收、却还没去要的钱。 [Lauren](https://x.com/poteto).
- [Invoice Hunter](https://x.ai/bot/-kO6HrXokJZANVwUOMZO9) - 从 Gmail 里找出发票 PDF，把一个月打成一份表格。 [Andrej](https://x.com/scheemunai).
- [Watchdog](https://x.ai/bot/PuAEE57P58Df5zskFY3pg) - 每周扫收件箱，盯续订、收据和快到期的试用。 [SmoresBoy](https://x.com/jxckvibe).
- [AIUsageBot](https://x.ai/bot/2atUDeldi9vF1R_ySRgCo) - 跟踪每份 AI 订阅你真正用了多少。 [Brian](https://x.com/BrianDEvans).
- [Freelance manager](https://x.ai/bot/nVbIdGSLO4i-QU183t7Sg) - 替独立接案人追提案、发票和里程碑。 [Josh](https://x.com/joshkim).
- [Returns & Warranties](https://x.ai/bot/HmUpwJbVbgLEGisEj0FPt) - 在退货、退款或保修窗口关掉前提醒你。 [Liam](https://x.com/liam_fallen).

## Content & publishing

- [Webby](https://x.ai/bot/Q2shbC8RRmoRleIyr5J33) - 管网站重建和看板，newsletter 也一直转着。 [Farzad](https://x.com/farzyness). 说明: [templates/webby](templates/webby/).
- [AdaptlyPost](https://x.ai/bot/1GpK7CoPs4e_M__9rb3uR) - 一个 Bot 写稿、排队，发到九个社交网络。 [Taras](https://x.com/tarasshyn).
- [Shorty](https://x.ai/bot/32fHIBw9Yz-s_o35KycGX) - 从已经跑通的长视频里切 YouTube Shorts。 [Farzad](https://x.com/farzyness).
- [Clipper](https://x.ai/bot/ozEfaAFJMDGoB-ysym8_V) - 把视频切成短片和带字幕的动图，笑点它自己挑。 [thesoragirls](https://x.com/thesoragirls).
- [Clip Bot](https://x.ai/bot/Vk0cnF2c364QxNv-Xip1M) - 从任意 YouTube 播客切出带字幕的横版高光。 [Lon](https://x.com/ThisWeeknAI).
- [Best Video Editor](https://x.ai/bot/Do4CujP_kqnnc1KYnpOfI) - 按你的素材规划整段剪辑，交出可审的成片。 [XFreeze](https://x.com/XFreeze).
- [Sitcom banger](https://x.ai/bot/h4suD8jA37Wsb7tS4giUO) - 先写剧本，再把点子做成情景喜剧式短片。 [altryne](https://x.com/altryne).
- [Site Audit](https://x.ai/bot/s6JVFYDIDMsCQMBeTcznW) - 一轮审完搜索、速度、无障碍、转化和结构化数据。 [Andrej](https://x.com/scheemunai).
- [Ads Operator](https://x.ai/bot/zj8VKu1CnqkHCM4Na1zex) - 给本地工匠做出能直接投放的搜索和社交广告计划。 [Tyler](https://x.com/wells1226).
- [Index](https://x.ai/bot/Viv2NbC5skPslV1WH9Fs7) - 搜索和回答引擎优化队友，专门给写手出提纲。 [Adam](https://x.com/adamta).
- [Human Copywriter](https://x.ai/bot/JZAccYtlRFvDSU2CnMnkZ) - 把带着 AI 腔的草稿改成读起来像人写的。 [Massimo](https://x.com/massimodeluisa).
- [RedReplier](https://x.ai/bot/8aU6ly_uunnMabpybs3hB) - 找出正在聊你产品的人，按购买意向排序。 [Taras](https://x.com/tarasshyn).
- [socials](https://x.ai/bot/bjsbaj_a2ds2pQY1YiXqE) - 每小时侦察一次，递上能直接拍的短视频套件。 [ashen](https://x.com/ashen_one).
- [X Strategist](https://x.ai/bot/pjCwyZNSLk0ch8DUVoeKH) - 在 X 上玩长线，搞清楚谁值得认识。 [Sultanov](https://x.com/thekuchh).
- [X Top 100 Fans Weekly](https://x.ai/bot/HU7XArfGhUgLnzVcr7neB) - 每周排出和你帖子互动最多的一百人。 [Adam](https://x.com/AdamLowisz).
- [Content Growth Coach](https://x.ai/bot/sMmoqCElqRPj1RYbtngMr) - 告诉创作者先改哪一处，数字才会动。 [SmoresBoy](https://x.com/jxckvibe).

## Personal admin

- [Home robots](https://x.ai/bot/3mf-UN4mGnCp8DbPBnW5u) - 在一个聊天窗口里控制割草机、扫地机和其他 Matter 家用机器人。 [Sawyer](https://x.com/SawyerMerritt). 说明: [templates/home-robots](templates/home-robots/).
- [Chef](https://x.ai/bot/3U6zxtPa1b8GbWheaIr4J) - 排好一周的饭，列采购清单，再把菜下单买齐。 [dogenorway](https://x.com/DogecoinNorway).
- [Appointment Finder](https://x.ai/bot/75K-dB4m30goo_PamA9nM) - 帮你找到最好的预约空档，不用再挨个打电话。 [Liam](https://x.com/liam_fallen).
- [Be Happier](https://x.ai/bot/0VC1XzREXRFGe0hVo-JEG) - 每周点出三件具体的、能让你更开心的事。 [Lenny](https://x.com/lennysan).
- [HouseBot](https://x.ai/bot/3ufXSXC-Z8OadVsV9yMLL) - 每十二小时扫六个房源站，找租房和买房。 [Shub](https://x.com/shubgaur).
- [Homework Checker](https://x.ai/bot/Mm_WhYXIjZ3xDNf3s3p91) - 工作日汇总学生缺交作业和成绩。 [Kevin](https://x.com/kevinace).
- [Canvas](https://x.ai/bot/YihRBqrXaDwRdjN79Uofl) - 从 Canvas 里把大学课程和截止日期拉出来。 [Dakkshin](https://x.com/daxperera).
- [Job interview hunter](https://x.ai/bot/B_8a8ApckqZFiJwWRBf5u) - 按工作日节奏起草针对性申请和内推说明。 [Josh](https://x.com/joshkim).
- [Deal Hunting](https://x.ai/bot/MGiEdMz0TNxBkvMgUZAbf) - 按落地成本比价，把运费和税算进去。 [Andrej](https://x.com/scheemunai).
- [Shop](https://x.ai/bot/nlIApzau1qw0MNiRkqbPH) - 搜 Shopify 店，交一份短名单，买不买要你点头。 [Alex](https://x.com/alex_chehimi).
- [Paperwork](https://x.ai/bot/mNN576TxXnc_XZu9aCsfr) - 看明白一份无聊文件到底是什么，以及你得拿它怎么办。 [Liam](https://x.com/liam_fallen).
- [EG4 Monitor](https://x.ai/bot/9rxPP70OSzuTtTaOrzeqz) - 盯家里的 EG4 光伏和电池，故障早点报。 [Terry](https://x.com/look4terry).
- [Gym Bod](https://x.ai/bot/3mtiwFoZcEMq59w-49DMS) - 热门团课一开抢就帮你占到位子。 [peter](https://x.com/DrPB).
- [Chicken Joe](https://x.ai/bot/7f5AjmpjZkmTIsSybedYS) - 每天早上看北加州浪报和摄像头，告诉你该去哪家浪点。 [Parker](https://x.com/parker__conrad).
- [Local Deals](https://x.ai/bot/KmR5kmGnalq1b2nhCRXyo) - 每天捞本地市集上的便宜货，还能替你还价。 [Brandon](https://x.com/brandon_galang).
- [Melissa](https://x.ai/bot/3foGoeh6ksDhD4jTxYjyE) - 按 1 型糖尿病的约束来带健身和饮食。 [Tobias](https://x.com/tpgoebel).

## Teams & handoffs

- [Work](https://x.ai/bot/vOipeiu0AZ7CuC5ynw5h0) - 和工作外的 Life 成对，专业事务走这一扇门。 [Tyler](https://x.com/TylerNishida). 说明: [templates/work](templates/work/).
- [Life](https://x.ai/bot/6I-yjMRU1BmiYNfZgWXBK) - 私人事务的常驻收件箱，需要时再拉出对应 Bot。 [Tyler](https://x.com/TylerNishida). 说明: [templates/life](templates/life/).
- [Fixer](https://x.ai/bot/jiF_km66YLNm5LBVJ5_Ho) - 真正动手的执行手，计划不对会顶回去。 [Uzi](https://x.com/UziObi). 说明: [templates/fixer](templates/fixer/).
- [AIオーケストレーション担当](https://x.ai/bot/-kSMWtBCorQFkgUhm0DLk) - 日文指挥官，把活分给各个专长 Bot。 [めい](https://x.com/mei_999_).
- [Alfred](https://x.ai/bot/KZ9xav0Qad1U5QigEn7rh) - 设计并持续改组你整支 Bot 编制。 [Robin](https://x.com/heyrobinai).
- [bond](https://x.ai/bot/iZvo8_lHfF0csZ-YmcZpv) - 接一件机密的活，干完，再记下自己做了什么。 [Lauren](https://x.com/poteto).
- [Clark Kent](https://x.ai/bot/6sF7_MwHMcWgWwq0Z6Xes) - 每天写下店里真正发生了什么。 [Rich](https://x.com/RichSilver).
- [Master](https://x.ai/bot/j7B5LHnEIPTuPQZxxQwpx) - 精简调度员，把每件事派给对的专长，自己从不动手。 [Farzad](https://x.com/farzyness).
- [Product Ops](https://x.ai/bot/gJKPDjN3yS95ZpZBTWruv) - 把冻结清单变成团队每周要交付的核对表。 [Ashish](https://x.com/inqusit).
- [Projects Manager](https://x.ai/bot/FU-Ev6_Ju4lFGWwWRD0GD) - 把一队 Grok Bot 当项目组织来跑，以 Notion 为准。 [Eric](https://x.com/ericzakariasson).
- [Shikamaru](https://x.ai/bot/rrvGu13S5uYCc09WP7A-9) - 参谋长，在一个有名字的世界里招专长、管专长。 [Abhimanyu](https://x.com/WorldlyReviewer).
- [Grant General Manager](https://x.ai/bot/fkM4b8n4RqZTbrq5fw5L_) - 工匠公司的总经理，把后台从零搭起来。 [Jon](https://x.com/HouseHackerJon).

## 贡献

PR 一条活的 `https://x.ai/bot/…` 链接、一句话介绍、以及分类。运行 `node scripts/lint.mjs`。只有额外设置说明时才写 PROFILE/SETUP（精选那种）。细节见 [CONTRIBUTING.md](CONTRIBUTING.md)。

不要编造分享链接。不要整段粘贴别人的 standing instructions。

## 相关

- 官方：[Bots](https://docs.x.ai/grok-bot/bots) · [FAQ](https://docs.x.ai/grok-bot/faq) · [Use cases](https://docs.x.ai/grok-bot/use-cases) · [Skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations) · [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)
- 资源向 awesome-list（文档、聚会、失败模式）：[RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot)
- 复制粘贴档案（模板功能之前）：[mergisi/awesome-grokbot](https://github.com/mergisi/awesome-grokbot)
- 社区画廊：[somi.ai/grok-bots](https://somi.ai/grok-bots) · [grokbot.dev](https://grokbot.dev) · [grokyard.com](https://www.grokyard.com)
- 中文玩法：[橙皮书 grok-bot-orange-book](https://github.com/KinGao294/grok-bot-orange-book)

目录与配方采用 CC0。脚本采用 MIT。English: [README.md](README.md).
