# Awesome Grok Bot

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![CC0](https://img.shields.io/badge/catalog-CC0-lightgrey.svg)](LICENSE)
[![MIT](https://img.shields.io/badge/scripts-MIT-blue.svg)](LICENSE-MIT)
[![GitHub stars](https://img.shields.io/github/stars/majiayu000/awesome-grok-bot?style=social)](https://github.com/majiayu000/awesome-grok-bot)
[![GitHub last commit](https://img.shields.io/github/last-commit/majiayu000/awesome-grok-bot)](https://github.com/majiayu000/awesome-grok-bot/commits/main)
[![Live shares](https://img.shields.io/badge/x.ai%2Fbot-live%20shares-black.svg)](catalog.json)

[English](README.md) · [中文](README.zh-CN.md)

> 3248 条可预览、可一键 Add 的 Grok Bot 活分享（`x.ai/bot`），外加真人怎么跑的案例。

**本周新进：** 目录几乎每天都在涨；看 [最近提交](https://github.com/majiayu000/awesome-grok-bot/commits/main) 或 [可搜索站点](https://majiayu000.github.io/awesome-grok-bot/) 就知道刚进来了什么。

[Grok Bot](https://docs.x.ai/grok-bot/overview) 是共用云电脑上的常驻 AI 队友。本双语目录收录公开 **活分享**（不是提示词合集）：找到链接、在 x.ai 预览，再 Add。

## 目录

- [怎么用](#怎么用)
  - [先试这几个](#先试这几个)
  - [按工作类型找](#按工作类型找)
  - [工作室门](docs/studio-doors.md)
  - [可搜索站点](https://majiayu000.github.io/awesome-grok-bot/)
  - [如何导入分享与运行首次任务](https://majiayu000.github.io/awesome-grok-bot/#getting-started)
- [SEO 备忘](docs/seo.md)
- [贡献](CONTRIBUTING.md)
- [真人案例](#真人案例)
  - [编制](#编制)
  - [电脑上手活](#电脑上手活)
  - [踩坑](#踩坑)
- [官方文档](#官方文档)
- [团队配方](#团队配方)
- [Coding & shipping](#coding--shipping)
- [Inbox & calendar](#inbox--calendar)
- [Research & briefings](#research--briefings)
- [Customer & sales](#customer--sales)
- [Finance & ops](#finance--ops)
- [Content & publishing](#content--publishing)
- [Personal admin](#personal-admin)
- [Teams & handoffs](#teams--handoffs)
- [技能和工具](#技能和工具)
  - [Linux 笔记本客户端](#linux-笔记本客户端)
  - [本地和研究](#本地和研究)
  - [模型和工厂](#模型和工厂)
  - [CLI 和 SDK](#cli-和-sdk)
  - [聊天桥](#聊天桥)
  - [技能包和玩法](#技能包和玩法)
  - [索引](#索引)
  - [开源替代](#开源替代)
- [社区教程](#社区教程)
- [评测](#评测)

## 怎么用

在线可搜索目录：[majiayu000.github.io/awesome-grok-bot](https://majiayu000.github.io/awesome-grok-bot/)（按分类 + 货架筛选）。

先在 Mac、Windows 或 iPhone 上[安装 Grok Bot](https://docs.x.ai/grok-bot/get-started)。打开一条分享，点 **Add to Grok Bot**。

<p align="center">
  <img src="docs/screenshots/add-button.png" alt="一条活分享页。黑色按钮是 Add to Grok Bot。" width="420">
</p>

分享会带上名字、技能、例行任务和官方市场插件。不会带上电脑、文件、登录或 API key。

Bot 共用一台云上的 Linux 电脑（上限 50 个）。那不是你桌上的 App。没有官方 Linux 桌面端。自己电脑是 Linux 的，看 [Linux 笔记本客户端](#linux-笔记本客户端)。

付费 Cursor 和 SuperGrok 都带 Grok Bot。账单看 [plans](https://cursor.com/help/grok-bot/plans)。

> 社区分享是不可信的第三方软件。先看 profile，只接一个连接器，先跑只读任务，再开写入。不要把 API key 写进 SETUP。见 [SECURITY.md](SECURITY.md)。

### 先试这几个

这些是 [catalog.json](catalog.json) 里 `shelf=featured` 的条目。先加一个。打开分享，点 Add，跑一次只读任务。

- **[下载专家](https://x.ai/bot/z7xup0Ax1SBl2K84PELqF)** · 把长视频和播客转成能搜可读的中文文稿，顺手捞公开论文。
- **[Online Identity Bot](https://x.ai/bot/4VEl6mp1QrsvvjTFR-qE_)** · 每天查一遍搜索引擎里新冒出来的你的公开信息。
- **[AI 视频专家](https://x.ai/bot/ES3LVns98INeXAoYwef_f)** · 把一张照片做成一小段有情绪的短片。
- **[Join a Startup Bot](https://x.ai/bot/XJCoBm6z7qjAnt9ScG8i7)** · 每天送来几条大板子上看不到的早期岗位。
- **[推特运营方法论](https://x.ai/bot/ScOhH1qaoq4XdoYhisagg)** · 给 X 日更搭选题库、草稿、发布时段和复盘，发布键仍由你按。
- **[薅羊毛 (Wool Radar)](https://x.ai/bot/WFW6_5N596TQpWCRjRZ5w)** · 只盯你真会买的东西和订阅优惠，没合适的就闭嘴。
- **[记账管家](https://x.ai/bot/WW-UbmTKXn79q0yXapvJE)** · 用文字、小票截图或语音入账的私人账本，可选同步飞书多维表。
- **[X Algo](https://x.ai/bot/W0LrVwNwsRHhFY4PG7586)** · 告诉你现在该发帖、引用，还是先别动。
- **[X Ops Expert](https://x.ai/bot/fePZGiWiTZP9n4BoKIlMY)** · 给建造者做 X 增长运营，含日报、选题库，草稿需你确认再发。
- **[Human Copywriter](https://x.ai/bot/JZAccYtlRFvDSU2CnMnkZ)** · 把带着 AI 腔的草稿改成读起来像人写的。
- **[产品推广交稿员](https://x.ai/bot/k_7pPRlHeZc2cku1zvVqr)** · 按固定节奏交出可直接发的产品推广文案。
- **[SubCut](https://x.ai/bot/MzuJZpvaIK2KpexUVY-V0)** · 翻你的邮箱，揪出在悄悄扣费的订阅，并指名该砍哪些。
- **[Bounty Hunter](https://x.ai/bot/gCWYD009F66A3XDEYdZgf)** · 翻邮件和账单，找你从没追过的退款和额度。
- **[Gmail Bot](https://x.ai/bot/4Kert6xnfaArPgZmyJi5M)** · 工作日早晨未读摘要、按你的口吻拟稿、分拣标签/垃圾。
- **[Token Efficiency Optimizer](https://x.ai/bot/cp_nk3ftrAgaKbYONW6fa)** · 在多烧额度也改变不了重置时拦住浪费跑次，提出削减并默认控花，需你明确同意才放开。
- **[Raven](https://x.ai/bot/hbzAWQX-CBMF2uAa00jEs)** · 毒舌营养教练，文字或照片记一餐，估热量蛋白并对着目标累计。
- **[Nourishment](https://x.ai/bot/E_j1gMmT7KLW4HWbMV2nK)** · 健康吃饭教练，看冰箱和橱柜照片，用现有食材出菜谱，并按预算列采购单。
- **[Home Hunter](https://x.ai/bot/ljzXIgAQcGOV0QxYjHH8I)** · 第一次对话就锁定城市预算户型和通勤，之后每天默默扫房源直到你选定。
- **[Flight Deal Assistant](https://x.ai/bot/sCd3BcjAeQrr77Qrg1waM)** · 按权衡而不是只看最便宜来查找和比较机票。
- **[Prospect Drafts](https://x.ai/bot/Ed8OwTpWaFfZdJHEAoT4t)** · 按地区、行业和你的报价找合适潜客，再用你的口吻写好首封 Gmail 草稿，由你发送。

[catalog.json](catalog.json) 里的 `shelf` 是编辑导航（featured、solid、studio-door、aka、raw）。能打开不等于安全。`verified` 是另一套维护者核验标记。

工作室门（调度、安装器、前台）共 **148** 条，见 [docs/studio-doors.md](docs/studio-doors.md)。

完整列表在下面，按活分类。真人案例和踩坑在链接墙上面。

### 按工作类型找

| 分类 | 收录数 |
| --- | ---: |
| [Coding & shipping](#coding--shipping) | 416 |
| [Inbox & calendar](#inbox--calendar) | 128 |
| [Research & briefings](#research--briefings) | 415 |
| [Customer & sales](#customer--sales) | 275 |
| [Finance & ops](#finance--ops) | 405 |
| [Content & publishing](#content--publishing) | 385 |
| [Personal admin](#personal-admin) | 831 |
| [Teams & handoffs](#teams--handoffs) | 393 |
| **合计** | **3248** |

2026 年 10 月 5 日检查时，3248 个分享页全部返回 HTTP 200。能打开不等于安全或好用。维护者核验状态是 **0 条已核验 / 3248 条已收录**（[catalog.json](catalog.json) 里 `verified: true` 表示维护者已经导入并完成一次安全的首次任务）。

## 真人案例

公开写过、真正跑过的。

<p>
<a href="https://www.youtube.com/watch?v=kAR91DlnCKQ"><img src="docs/screenshots/ray-fernando.jpg" alt="Ray Fernando 的 Clippy CTO" width="400"></a>
<a href="https://www.youtube.com/watch?v=5CSXUsljJ_E"><img src="docs/screenshots/matthew-berman.jpg" alt="Matthew Berman 的十一个活" width="400"></a>
</p>

### 编制

- [CasJam 的 13 Bot 产品编队](https://x.com/CasJam/status/2093762642867581359) - 一个总参谋，四个品牌各配 Head、Growth、Maintainer。
- [n2parko 的 SpaceXAI 花名册](https://x.com/n2parko/status/2087251704744235298) - 参谋、EM、五个工程 IC，还有 Bot 之间交 PR 的截图。
- [Farzad 的具名专长](https://x.com/farzyness/status/2087340859138224540) - Webby、Shorty、Writey 听一个调度的。
- [Tyler 的两扇门](https://x.com/TylerNishida/status/2093426221732532457) - Work 和 Life 两只常驻收件箱。混着的活一律给 Life。
- [Gota 的十二件活](https://x.com/gota_bara/status/2087666940450152841) - 出图、简报、3D、出行、退订，虚拟机上还跑本地大模型。
- [Nate 八小时搭十二个 Bot](https://natesnewsletter.substack.com/p/grok-bot-review) - 第一天花名册，并问 200 美元的代理团队值不值。
- [Krista 的企业获客编制](https://x.com/kristaletz/status/2089103618121314689) - 参谋、夜间拓客、按客户配专长、现场改幻灯片。
- [Ben Lang 的内部活单](https://x.com/benln/status/2087929147406299313) - 偏 Starlink 的航班、菜谱下单、胶片 EXIF、找承包商报价。
- [Jon 的管道店办公室经理](https://x.com/HouseHackerJon/status/2087635639701573962) - 下水道店老板第一天就把后台行政交给 Bot。
- [Grokularity](https://grokularity.xyz) - 不会写代码的人一天搭出公司站。人只读，写站的是核过的 Grok 代理。
- [Mo Bitar 的八个机器人店](https://atmoio.substack.com/p/i-went-in-ready-to-hate-grok-bot) - 一天下午搭起八个具名机器人，其中博客管家在没人告知文件路径的情况下把改动推上了线。
- [Remy 的 Alfred、Gordon 和 Florence](https://aiwithremy.beehiiv.com/p/what-i-m-actually-using-grok-bot-for) - 运维 Alfred、内容 Gordon、商务 Florence。Alfred 把 NDA 交给 Florence，Gordon 发推卡住一小时。
- [Billy Howell 的 Arlington Bagel](https://www.thefuturist.co/making-with-grok-bot/) - 每周四 6000 订户的通讯，幕僚长加研究和销售机器人。销售机器人从邮件里捞到赞助并写好报价。
- [Dennis Yu 的十二个运营席](https://dennisyu.com/how-i-use-grok-bot/) - 公开的 BlitzMetrics 编制，写清能做和不能做。IT 支持在共享电脑上找回了 WordPress 登录。
- [Ray Fernando 的 Clippy CTO](https://www.youtube.com/watch?v=kAR91DlnCKQ) - 一个 Grok Bot 当直接责任人，再招子机器人管 PR、Convex 和鉴权。自己只旁观。一天烧掉超 20 亿 token。
- [Chris Maconi 的 Hechura 编队](https://www.linkedin.com/posts/chrismaconi_people-are-asking-me-how-we-are-using-grok-activity-7496571167063916544-j7IO) - 具名 Grok Bot 跑日常获客、工程、产品和 IT，开发活交给 Cursor CLI。
- [Rick Hightower 的 Spillwave 第二大脑](https://rickhigh.substack.com/p/grok-bot-claude-code-and-codex-share) - 十三个具名 Grok Bot 和本机 Claude Code、Codex 共用一份 git 知识树，写入走分支不写 main。
- [Household Grok Bot Swarm](https://ylgibby.github.io/grokbot-household-swarm/) - 一份 13 Bot 家庭编制的公开写法和活页。([仓库](https://github.com/ylgibby/grokbot-household-swarm))

### 电脑上手活

- [Debbie 买无麸质啤酒](https://debbie.codes/blog/i-sent-grok-bot-to-buy-my-gluten-free-beer) - 周日晚上让 Bot 去买酒，看的是电脑操作，不是聊天。
- [Debbie 订机票](https://debbie.codes/blog/i-tested-if-grok-bot-could-book-my-flights) - 老实的差一点。Bot 能把航司网站点完，最后一下还是人按。
- [Gergely Orosz 做 Stripe 退款](https://x.com/GergelyOrosz/status/2090085668768694562) - 接客服邮件和 Stripe，动钱之前人确认。
- [Mike P 清掉 9 万封邮件](https://x.com/mikepat711/status/2089879632929554498) - Bot 走进两个 Gmail，把主人懒得碰的垃圾扔掉。
- [Danny 两小时做 74 张游戏图](https://x.com/DannyLimanseta/status/2087228218797617404) - 读代码、出图、裁透明 PNG、装回游戏。
- [Darian 追五家店的退款](https://x.com/darian314/status/2089381004524093752) - 从邮件里挖没退成的货，写信去要。
- [Yun-Ta 给扫地机发消息](https://x.com/yunta_tsai/status/2089223114416898288) - 工程 Bot 跟 @maticrobots 说话，人就能随时发指令。
- [Yun-Ta 走路时订位子](https://x.com/yunta_tsai/status/2087415205756391461) - 中英夹杂语音。Bot 扫日历再订一桌。
- [Wayne Sutton 用手机上线一个站](https://x.com/waynesutton/status/2088416215203295346) - Convex 加 Cloudflare 插件。域名、跳转、演示站，两条手机指令。
- [WordPress 更新只教一次](https://x.com/mrfundman/status/2089760255890571404) - 对着真 CMS 做 Teach-a-task，不写部署脚本。
- [Bot 推 Arduino 更新](https://x.com/KettlebellDan/status/2089920364419874937) - Bot 给硬件推更新，人就不用再盯着 X。
- [KettlebellDan 的 LED 行情条](https://x.com/KettlebellDan/status/2089387837204693202) - Bot 跟 Arduino 说话，灯牌滚 SPCX 价格、折线和 SpaceX 新闻。
- [Sid 的 Polymarket 日结简报](https://x.com/sidshekhar24/status/2089735218861326727) - 扫当天已结算盘口，写成报告。
- [Peter Yang 的断舍离 Bot](https://x.com/petergyang/status/2089724101070086482) - 审计邮件、云盘和付费订阅，删之前等人点头。
- [Peter Yang 在云电脑玩 Commander Keen](https://x.com/petergyang/status/2089502606079197347) - 在云桌面装上并玩起来，延迟照单全收。
- [Kiara 让 Bot 代开错过的会](https://x.com/kiaraplds/status/2088321112073547835) - Bot 进会、自我介绍、做笔记。
- [Gavin Baker 十五秒搭播客摘要](https://x.com/GavinSBaker/status/2089379355692527813) - 大约十五秒立起一个播客摘要，并拿它跟 Claude Code 那一刻比。
- [Box 的授信委员会材料](https://x.com/Box/status/2087275866950938662) - 对账材料，再经 MCP 写回 Box。
- [十九分钟搭 24/7 客服](https://www.youtube.com/watch?v=bUALqTpUze0) - 客服 Bot 靠例行任务，不是重写工单系统。
- [日文云电脑手记](https://note.com/azumimusuhi/n/n0485219790bb) - 在共用虚拟机上住一周的实操记录。
- [Lee Robinson 的四个判断](https://x.com/leerob/status/2089169319099777364) - 没有单独 UI、瘦客户端、电脑一直开着、浏览器当一等工具。
- [Logan 说解锁的是电脑，不是 4.6](https://x.com/LoganJastremski/status/2089903051557491092) - 没有 API，没有 MCP，没有托管浏览器。Bot 就像人一样用软件。
- [Markus Buehler，四张照片打到 Bambu H2D](https://www.linkedin.com/posts/markus-j-buehler-2245682_grok-bot-is-incredible-the-bots-move-naturally-activity-7496875174911291392-LO9a) - 三个机器人连夜把四张结构照片做成物理仿真、LaTeX 报告，并在 Bambu Lab H2D 上切片打出两件零件。
- [Matthew Berman 的十一件活](https://www.youtube.com/watch?v=5CSXUsljJ_E) - 镜头里做邮件打分、DoorDash、每周清盘扫出 90 GB 垃圾，还搭了 Telegram 桥。
- [Debbie 第一次试编程和 LinkedIn](https://dev.to/debs_obrien/grok-bot-just-dropped-and-i-had-to-try-it-2bnf) - 编程 Bot 在她的 Playwright 电影仓库关掉旧 issue，LinkedIn Bot 真的发出了帖。

### 踩坑

有官方确认或截图的。

- [Bot 不是安全边界](https://forum.cursor.com/t/grok-bot-ship-real-session-fences-bots-are-not-a-security-boundary/168476) - 同一个账号下的 Bot 看见同一套登录和文件。
- [常驻同事，不是话题标签](https://forum.cursor.com/t/grok-bots-as-always-on-workers-vs-topic-threads/168183) - Bot 是站着干活的同事，不是聊天分页。
- [重连失败](https://forum.cursor.com/t/grok-bot-reconnect-issue/168500) - 重连后出现 can't reach your computer 的真截图。
- [云电脑上的 X 登录被锁](https://forum.cursor.com/t/grok-bot-x-login-lock-limit-not-lifting/168541) - 云电脑会撞上网站风控。X 锁号不是假设。
- [Always allow 仍拦 ExternalShell](https://forum.cursor.com/t/grok-bot-externalshell-blocked-despite-always-allow/168180) - 白名单也会失手。不要以为 Always allow 就永远放行。
- [删掉 Cursor 账号会把 Grok 绑死](https://forum.cursor.com/t/deleted-cursor-account-leaves-grok-link-orphaned-and-blocks-relinking/168783) - 销户可能把 Bot 钉在一具已死的 Cursor 身份上。
- [没有本地 MCP](https://forum.cursor.com/t/does-grok-bot-support-local-mcp-e-g-workflowy/168182) - 官方确认。用远程 HTTP MCP，或让云浏览器去点。
- [Gmail 附件只有元数据](https://forum.cursor.com/t/grok-bot-gmail-connector-can-list-attachments-but-cannot-download-their-bytes/169261) - Gmail 连接器能列出附件，下不了文件本身。
- [登录 Grok Bot 算多一台电脑](https://forum.cursor.com/t/does-logging-into-grokbot-count-as-a-separate-computer/169289) - Grok Bot 登录是独立的 Cursor 设备，可能撞上 Too many computers。
- [周额度会无提示溢到按需付费](https://forum.cursor.com/t/grok-bot-gives-no-warning-before-weekly-usage-spills-into-paid-on-demand/169679) - 应用内没有警告。不想多花钱就把 On-Demand 上限设成 0。
- [Gmail 插件 OAuth 坏了](https://forum.cursor.com/t/grok-bot-unable-to-authenticate-via-gmail-plugin/169782) - 改从 Cursor 授权 Gmail。连接是共用的，等插件修好。
- [Flocker 摸过一台真的 Bot 电脑](https://flocker.md/blog/grok-bot-roles-workspace-and-specs/) - 8 核、16 GB 内存、Debian KVM、无显卡、大约 120 GB 盘。
- [刷新会抹掉 WhatsApp 已链接设备](https://forum.cursor.com/t/computer-refresh-wipes-whatsapp-linked-device-session-in-grok-bot/169025) - 刷新保留 `/workspace`、浏览器配置和 `~/.config`。不保留 `~/.local/state`，WhatsApp 链接会话会没。
- [试用结束不会删东西](https://forum.cursor.com/t/grok-bot-cloud-workspace-inaccessible-after-trial-exhaustion-ticket-t-e97475-pending/169010) - Bot 不再回。Computer 视图还能导出，直到你 Reset。
- [Notion OAuth 报 Invalid redirect_uri](https://forum.cursor.com/t/grok-bot-notion-plugin-oauth-invalid-redirect-uri/169234) - 登录记在账号上，重试没用。点 Re-authenticate，不要点 Connect。
- [Grok Bot 有频道了](https://forum.cursor.com/t/grok-bot-threads-ui-is-unusable-needs-a-slack-style-right-panel/168315) - 侧栏加号，一个具名空间最多 6 个 Bot。
- [卡在重连可能是本地 DNS](https://forum.cursor.com/t/grok-bot-desktop-on-macos-is-permanently-stuck-on-reconnecting-to-your-computer/169119) - 云电脑可能是好的，去 `cursorvm.com` 的流量被 VPN 或防火墙丢掉了。
- [登录时让它把电脑交给你](https://forum.cursor.com/t/grok-bot-failed-to-open-its-computer-and-couldnt-recognize-the-issue/169179) - 登录任务该把电脑交出来。通行密钥选 Try another way。
- [它拉起的云代理吃 Cursor 额度](https://forum.cursor.com/t/query-about-grok-bot-cursor-agent-usage-and-model-selection/169160) - Grok Bot 启动的代理跑在你的 Cursor 账号里。聊天是另一份额度。
- [没有 compact，每回合整份记录](https://forum.cursor.com/t/grok-bot-prune-compact-an-agent-s-context-without-creating-a-new-bot/168333) - 桌面和 iOS 都没有 Compact，也没有同 Bot 新会话。没有模型选择器。
- [Webhook 地址只在桌面端](https://forum.cursor.com/t/webhook-url-missing-on-ios/169589) - POST 地址和发送密钥出现在桌面，不在 iOS。
- [官方 X 插件授权坏了](https://forum.cursor.com/t/official-x-plugin-auth-is-broken-on-cursor-cloud-grok-bot-and-desktop-refresh/169592) - 桌面、Cloud Agents 和 Grok Bot 上连接或刷新都会失败。没有干净绕法。
- [Grok Bot 没有代码库插件](https://forum.cursor.com/t/does-grokbot-not-have-access-to-my-cursor-codebase/169684) - 它不索引你的仓库。写代码交给接了 GitHub 的 Cursor Cloud Agent。
- [自定义连接器在聊天里加](https://forum.cursor.com/t/grokbot-custom-connectors/169965) - 没有设置表单。让 Bot 加一个公开 HTTPS MCP。你电脑上的 localhost MCP 它够不着。
- [Drive 只管文件。正文要 Docs 和 Sheets](https://forum.cursor.com/t/grok-bot-drive-mcp-should-write-google-docs-body-and-sheet-cells-not-only-file-metadata/169971) - 要改文档或表格内容，用同一个 Google 账号再加 Docs 和 Sheets。
- [白屏可能是 Cloudflare WARP](https://forum.cursor.com/t/blank-screen-after-opening-grok-bot/169966) - WARP 会拦去云电脑的流量。关掉或做分流。
- [Phantom 插件每次新授权会开新钱包](https://forum.cursor.com/t/phantom-in-grok-bot-is-a-mess/169930) - 新授权造的是代理钱包，不是你自己的 Phantom。
- [Hung custom MCP takes down all connectors](https://forum.cursor.com/t/grok-bot-hung-custom-mcp-remotes-are-invisible-in-plugins-yours-and-uninstall-also-times-out-discovery-catch-22/168350) - 一个卡住的自定义 HTTP MCP 会拖垮全部连接器发现与卸载且插件列表看不见只能找官方清。
- [Template import drops skills](https://forum.cursor.com/t/grok-bot-templates-preview-shows-skills-but-the-export-ships-skills-skills-are-never-delivered/169911) - 模板预览能看到技能但导入后技能为空需自己把技能正文粘贴给新 Bot。
- [iOS Always allow is desktop-local](https://forum.cursor.com/t/authorization-death-by-1000-clicks/170087) - 注册电脑的 Always allow 只存在于该机桌面端 iOS 每次发消息都会清掉一次性批准。
- [No Bugbot review on Grok-launched agents](https://forum.cursor.com/t/review-bugbot-is-missing-on-cloud-agents-launched-from-grok-bot/170096) - Grok Bot 拉起的 Cloud Agent 没有 /review 与 /review-bugbot 需从 Agents 页 IDE 或 CLI 另开。

## 官方文档

先看 [overview](https://docs.x.ai/grok-bot/overview)、[get started](https://docs.x.ai/grok-bot/get-started)、[plans](https://cursor.com/help/grok-bot/plans) 和 [FAQ](https://docs.x.ai/grok-bot/faq)。隔离按账号，不按 Bot。抹掉 Grok Bot 等于删 Cursor 账号。

### 新闻

- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Included with more plans](https://x.ai/news/grok-bot-more-plans)
- [Works with X](https://x.ai/news/grok-bot-and-x)
- [Grok Bot for Enterprise](https://x.ai/news/grok-bot-for-enterprise)
- [Setting Grok Bot loose on procurement](https://x.ai/news/grok-bot-procurement)

### docs.x.ai

[Overview](https://docs.x.ai/grok-bot/overview) · [Get started](https://docs.x.ai/grok-bot/get-started) · [Use cases](https://docs.x.ai/grok-bot/use-cases) · [iOS](https://docs.x.ai/grok-bot/mobile) · [Bots](https://docs.x.ai/grok-bot/bots) · [Chat](https://docs.x.ai/grok-bot/chat-and-collaboration) · [Files](https://docs.x.ai/grok-bot/files-and-results) · [Computer](https://docs.x.ai/grok-bot/computer-and-apps) · [Skills](https://docs.x.ai/grok-bot/skills-routines-and-automations) · [Settings](https://docs.x.ai/grok-bot/settings-and-notifications) · [Approvals](https://docs.x.ai/grok-bot/approvals-security-and-privacy) · [Teams](https://docs.x.ai/grok-bot/teams-and-enterprises) · [Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting) · [FAQ](https://docs.x.ai/grok-bot/faq)

### Cursor 帮助

[Getting started](https://cursor.com/help/grok-bot/getting-started) · [Sign in](https://cursor.com/help/grok-bot/sign-in) · [SuperGrok](https://cursor.com/help/grok-bot/supergrok-heavy) · [Mobile](https://cursor.com/help/grok-bot/mobile) · [iOS purchase](https://cursor.com/help/grok-bot/mobile-purchase) · [Plugins](https://cursor.com/help/grok-bot/connect-plugins) · [Secrets](https://cursor.com/help/grok-bot/secrets) · [Recover computer](https://cursor.com/help/grok-bot/computer-recovery) · [Plans](https://cursor.com/help/grok-bot/plans) · [Delete account](https://cursor.com/help/grok-bot/delete-account) · [Get help](https://cursor.com/help/grok-bot/get-help)

Zoom 桌面授权目前会报 4700。已经有 Ultra 再绑 SuperGrok Plus 不会叠额度。iOS 内购只有个人月付。

[xAI 插件市场](https://github.com/xai-org/plugin-marketplace) · [@bot 分享模板](https://x.com/bot/status/2093376523919323618) · [@bot 能买东西](https://x.com/bot/status/2093419921007108385)

## 团队配方

一条分享 = 一个 Bot。编制要自己拼。

- [Work + Life 两扇门](packs/two-door-work-life.md)
- [参谋 + Fixer + 专职](packs/chief-of-staff.md)
- [CasJam 产品编队（Head + Growth + Maintainer）](packs/casjam-product-heads.md) - 来自 [CasJam](https://x.com/CasJam/status/2093762642867581359) 的编制。没有分享链接，要自己搭。

## Coding & shipping

完整列表（416 条）：[catalog/zh-CN/coding-shipping.md](catalog/zh-CN/coding-shipping.md)

## Inbox & calendar

完整列表（128 条）：[catalog/zh-CN/inbox-calendar.md](catalog/zh-CN/inbox-calendar.md)

## Research & briefings

完整列表（415 条）：[catalog/zh-CN/research-briefings.md](catalog/zh-CN/research-briefings.md)

## Customer & sales

完整列表（275 条）：[catalog/zh-CN/customer-sales.md](catalog/zh-CN/customer-sales.md)

## Finance & ops

完整列表（405 条）：[catalog/zh-CN/finance-ops.md](catalog/zh-CN/finance-ops.md)

## Content & publishing

完整列表（385 条）：[catalog/zh-CN/content-publishing.md](catalog/zh-CN/content-publishing.md)

## Personal admin

完整列表（831 条）：[catalog/zh-CN/personal-admin.md](catalog/zh-CN/personal-admin.md)

## Teams & handoffs

完整列表（393 条）：[catalog/zh-CN/teams-handoffs.md](catalog/zh-CN/teams-handoffs.md)

## 技能和工具

社区 GitHub。能 clone、能粘、能装。

### Linux 笔记本客户端

没有官方 Linux 桌面端。Bot 云电脑本来就是 Linux。下面只给自己电脑是 Linux 的人。

- [falser101/grok-bot-linux](https://github.com/falser101/grok-bot-linux) - 整理 Cursor-CDN 上的 Linux `.deb` / `.rpm` / AppImage 地址和发行版打包。不托管安装包。

### 本地和研究

- [grokbot-shim](https://github.com/codeaashu/grokbot-shim) - 在本地跑带桌面的 Grok Bot，模型可换成 Codex 或 OpenAI 兼容接口。
- [grok-bot-0.18-reconstructed](https://github.com/b-nnett/grok-bot-0.18-reconstructed) - 非官方 TypeScript 还原的 Grok Bot 0.18.0 macOS 版。只供研究，已归档。
- [grok-bot-0.18-original](https://github.com/ChHsiching/grok-bot-0.18-original) - 未压缩的 0.18.0 运行时存档，按模块拆开，可按字节复现。
- [omabot](https://github.com/njpatel/omabot) - 只读地把你的 Grok Bot 小队放进 Omarchy 状态栏，连脸都在。

### 模型和工厂

- [opengrok](https://github.com/OnlyTerp/opengrok) - 给 Grok Bot 换模型。密钥留在你自己机器上。
- [openbot](https://github.com/aaravarr/openbot) - 给 Grok Bot 换自己的模型。本机控制界面，一键切回官方行为。
- [Grok Ship](https://github.com/kunchenguid/grok-ship) - 把 Bot 变成软件工厂，PR 发出去之前先审。
- [grok-bot-setup](https://github.com/BlockedPath/grok-bot-setup) - 适配器命令行，以及 DeepSeek、Claude、Grok、OpenAI 的自定义模型桥。
- [grokbot2api](https://github.com/taowen/grokbot2api) - 本机 OpenAI 兼容代理，让 Grok Build 经未公开的 Cursor 推理 protobuf 调托管 Grok 模型。
- [grokrouter](https://github.com/promptadvisers/grokrouter) - 可逆地把官方 Grok Bot 接到 Codex 或 OpenRouter 并支持恢复原厂推理。
- [grok-bot-switch](https://github.com/enderzcx/grok-bot-switch) - 在云电脑上把 Grok Bot 切到你自己的模型供应商，也可以切回官方 Grok。
- [ungrok](https://github.com/abhaysudhir/ungrok) - 非官方主机改机，换自带模型，带安装检查、更新恢复和回滚。

### CLI 和 SDK

- [grok-bot-cli](https://github.com/ScriptedAlchemy/grok-bot-cli) - 在已登录的 Mac 上用终端建 Bot、发消息。
- [grokbot-sdk](https://github.com/adam91holt/grokbot-sdk) - 给正在跑的主机用的 TypeScript SDK。带类型的本地 HTTP 网关，还能读沙盒盘。
- [grok-bot-skill](https://github.com/adamanz/grok-bot-skill) - Cursor/Claude 技能，让编程代理能列出、聊天、新建 Grok Bot 队友。
- [grokbot-tui](https://github.com/smarzban/grokbot-tui) - 非官方终端界面，连主机网关，在终端里跟 Bot 说话。
- [Grok Bot for Raycast](https://github.com/Jahquan/grok-bot-raycast) - 非官方 Raycast 扩展。Cursor 登录，按 Bot 看线程，支持 Markdown 和 LaTeX。
- [grokbot-queue](https://github.com/ShuhangGe/grokbot-queue) - 命令行 gbq，经 Tailscale/SSH 把活排到正在跑的 Bot 上。
- [dictate-capture](https://github.com/budezllc/dictate-capture) - Windows 助手。按住 Ctrl+D 对着 Grok Bot 口述，也可贴一张截图。
- [QuotaRail](https://github.com/Allan-Aa/QuotaRail) - macOS 程序坞式用量条，看 Codex、Claude、Grok 和 Grok Bot。
- [locum](https://github.com/HarjjotSinghh/locum) - 自定义 MCP，让云端 Grok Bot 把写代码任务转到你本机已登录的 Claude Code 或 Codex CLI。
- [Grok Bridge](https://github.com/niharnm/grok-bridge) - 实验性 CLI，通过社区 `gbot` 让 Grok Bot 与编程代理交接限定范围的任务，按请求匹配回复，并已实测 Codex 双向往返。
- [foreman](https://github.com/Archive228/foreman) - 零依赖命令行，用 git 里的 AGENT.md 对照现有 Grok Bot 班组，并写出夜班卡住任务的交接报告。
- [grok-bot-usage](https://github.com/Kargatharaakash/grok-bot-usage) - 零依赖的 `gbu` 命令，一次列出多个 Cursor 账号的 Grok Bot 周用量和按需花费。
- [coolify-cursor-plugin](https://github.com/coollabsio/coolify-cursor-plugin) - Coolify 官方插件，把 Cursor 或 Grok Bot 接到实例 `/mcp`，让机器人查看服务器、应用、发布和日志。
- [grok-bot-mcp](https://github.com/Kargatharaakash/grok-bot-mcp) - 零依赖 MCP，让 Claude 或 Cursor 经本机网关列出、发消息、读 Grok Bot 对话。
- [Grok Usage Menu Bar](https://github.com/diegocp01/grok_bot_usage_menu_bar) - 原生 macOS 菜单栏小工具，看每周 Grok Bot 余量和重置倒计时。
- [Convoy](https://github.com/Deploy-Forward/convoy) - 公开 MCP 加 hop 命令行。Grok Bot 当指挥，自带的 harness CLI 去干活。
- [grokbot-openai](https://github.com/owenisas/grokbot-openai) - 用与官方相同的登录在本机提供 OpenAI 兼容接口给其他工具调用。

### 聊天桥

- [grokbot-imessage-skill](https://github.com/jeffhuber/grokbot-imessage-skill) - 通过本机助手让 Bot 读、筛、发 iMessage。
- [linq-grokbot-text-channel](https://github.com/jeffhuber/linq-grokbot-text-channel) - 用 Linq 共享号码给 Grok Bot 发短信，经 Vercel 转发 webhook。
- [grok-wechat-plugin](https://github.com/little-thing/grok-wechat-plugin) - 微信 iLink 渠道。进来的消息用 webhook 叫醒 Bot。
- [grokbot-telegram-bridge](https://github.com/SSBrouhard/grokbot-telegram-bridge) - 非官方 Telegram 网关，只连本机回环上的 Sand 网关。
- [Grok Bot Discord gateway](https://github.com/davefmurray/grok-bot-discord) - 让 Bot 住在 Discord 里，不必假装自己是 Slack 应用。
- [discord-grok-bot-kit](https://github.com/larry-fuqua/discord-grok-bot-kit) - Discord 监听器，有人 @ 主人就用 webhook 叫醒 Grok Bot。
- [grokbot-cloudflare-inbox](https://github.com/ethanolivertroy/grokbot-cloudflare-inbox) - 架在 Cloudflare Workers 上的自托管收件箱，基于 Agentic Inbox。
- [grokbot-hermes-bridge](https://github.com/iamsupersocks/grokbot-hermes-bridge) - 自托管 OAuth MCP 网关，让 Grok Bot 用 `hermes_ask` 和 `hermes_status` 去问本机 Hermes Agent。
- [grokbot-obsidian-bridge](https://github.com/iamsupersocks/grokbot-obsidian-bridge) - 默认失败关闭的 OAuth 反代，经主人批准后才把本机 Obsidian MCP 暴露给 Grok Bot。
- [grokbot-discord](https://github.com/RudeDude/grokbot-discord) - Python Discord 网关。一个 Discord bot 管多个 Grok Bot，webhook 叫醒，异步回帖。
- [Discord for Grok Bot](https://github.com/NinjaProtocol/grokbot-discord-plugin) - 可粘贴的 Discord 插件。白名单频道里的 @ 会叫醒 Bot。
- [twilio-grok-voice-bridge](https://github.com/jeffhuber/twilio-grok-voice-bridge) - 实验性 Twilio Media Streams 桥，让 Bot 打出站 Grok Voice 电话。

### 技能包和玩法

- [google-maps](https://github.com/zechsmerquis/google-maps) - 给 Bot 电脑用的 Places 文本搜索脚本，可选接 Maps Grounding Lite MCP。
- [Grok Bot 橙皮书](https://github.com/KinGao294/grok-bot-orange-book) - 中文玩法。五人舰队、Routine、前两周怎么省钱。
- [grok-skills](https://github.com/jaskirat1616/grok-skills) - 195 份 `SKILL.md` 玩法。浏览站 [grokbotskills.vercel.app](https://grokbotskills.vercel.app)。
- [note-kojo](https://github.com/matsutouya/note-kojo) - 选一个 note.com 账号，把草稿送给 Grok Bot。
- [awesome-grokbot](https://github.com/mergisi/awesome-grokbot) - 往空白 Bot 里贴 START.md，它给你搭 2 到 4 人小队。
- [rosterroom](https://github.com/codejunkie99/rosterroom) - 82 套可粘贴的团队花名册，带职责和审批。
- [grok-bot-profiles](https://github.com/HAEGONG/grok-bot-profiles) - 把规格、实现、验收拆开，Bot 不能审自己的活。
- [Runway plugin](https://github.com/runwayml/runway-mcp-plugin) - Runway 官方插件，在 Grok Bot 里生成图、视频和音频。
- [TellTell connector](https://github.com/TellTellApp/telltell-connector) - TellTell 官方通讯录插件，经 OAuth MCP 接进 Grok Bot。
- [parallel-ai-mcp](https://github.com/Parallel-AI-Labs/parallel-ai-mcp) - Parallel AI 官方 MCP 插件，可接 Cursor 和 Grok Bot。
- [root-agent-skill-framework](https://github.com/MrBekoX/root-agent-skill-framework) - Root Agent 技能包，按需求组队、建 Bot，并把日常交给 Lead。
- [thin-grok-bot-deep-work-on-cli](https://github.com/Luca-Blight/thin-grok-bot-deep-work-on-cli) - Bot 编制保持薄，重活交给 Cursor CLI 或 cloud agent。
- [grok-bot-shopping](https://github.com/steve228uk/grok-bot-shopping) - 购物技能。把 INSTALL.md 贴进 Bot。
- [grok-bot-templates](https://github.com/cobusgreyling/grok-bot-templates) - 打过分的操作合同，配 START.md 安装器和 49 份可粘贴档案。
- [crew-contract](https://github.com/lsj210001/crew-contract) - 编队操作协议。七字段任务、产物交接、超预算就停。
- [grok-factory](https://github.com/jaredtrichard/grok-factory) - 可 follow 的技能包。Firstmate 在共用电脑上分软件、研究和杂活。
- [grok-research](https://github.com/jaredtrichard/grok-research) - 可粘贴的发行版。需船长批准的股票研究工场，有侦察报告和 sqlite 账本，不跑实盘。
- [grok-bot-restaurant-scout](https://github.com/mykemueller1-ctrl/grok-bot-restaurant-scout) - 餐馆社交带货侦察。早扫技能加可粘贴的 SETUP.md。
- [Werewolf gamemaster](https://github.com/Heyvhuang/werewolf-gamemaster) - 真技能包。Bot 主持狼人杀桌，不是 hello-world 的 SKILL.md。
- [Hyperliquid 7-agent trading desk](https://github.com/galleonlabs/hypergrok-trading-desk) - 实验性。七个专长 Bot 坐一张桌。先读代码再碰。
- [grokbot-for-gtm](https://github.com/bcharleson/grokbot-for-gtm) - 玩法加技能，让 Bot 自己跑外呼获客。Instantly、HeyReach，发出去要人点头。
- [Grok Bot Plays](https://github.com/ZooHero500/plays) - 从公开帖子改写的玩法目录，带出处。
- [Uncle-Gizmo notes](https://github.com/Uncle-Gizmo/grok-bot-info) - 公开笔记。安全示例流程，以及 Bot 和 Grok Build 怎么并排。
- [learn-grok-bot](https://github.com/yuanyijie/learn-grok-bot) - 非官方十六课，讲桌面代理骨架。Electron、回合循环、沙盒、MCP。
- [PhoneZero](https://github.com/function1st/PhoneZero) - 可粘进 Grok Bot 的技能。用 Telnyx 和 xAI 语音打电话订位，先给方案再拨。
- [tesla-fleet-mcp](https://github.com/supervised-nl/tesla-fleet-mcp) - Tesla Fleet MCP 加 .grok-plugin，Bot 能列车辆，配 tesla-http-proxy 后还能空调、充电、锁车。
- [grokbot-skills](https://github.com/jeremybrasher/grokbot-skills) - 从 awesome-claude-skills 打分收进的技能架，许可证保留，只有过关的文件夹上架。
- [grokbot-x](https://github.com/YannisKiefer/grokbot-x) - 自学习的 X 增长套件。找金帖、像人一样起草、经 Typefully 发，夜里 SkillOpt。
- [heavy-lift-cloud-agents](https://github.com/napiermd/heavy-lift-cloud-agents) - 技能包。Grok Bot 当参谋长，重活交给 Cursor CloudAgent 或 Grok Build。
- [grokbot-peekaboo](https://github.com/bcharleson/grokbot-peekaboo) - 技能。让 Bot 经 Peekaboo 开已注册 Mac 的屏幕、截图和 UI 输入。

- [grok-bot-playbook](https://github.com/s-hiraoku/grok-bot-playbook) - 日文现场手册。具名角色、合同、请求模板、技能和例行任务、交接 `.md`。
- [grok-bot-second-brain](https://github.com/mKay00/grok-bot-second-brain) - 可 clone 的五人第二大脑。指挥、捕捉、记忆、运营、研究，共用一台电脑。
- [grok-bot-template-market](https://github.com/DomenicFotino/grok-bot-template-market) - 社区模板市场，可贴进 Grok Bot。
- [grokbot-outreach-agent-team](https://github.com/novusordos666/grokbot-outreach-agent-team) - 外呼小队包。具名 Bot 加找潜客和跟进技能。
- [nexfade-grok-plugin](https://github.com/NexFade/nexfade-grok-plugin) - 社区 `.grok-plugin`，给 Bot 接额外工具。
- [grok-bot-token-saver](https://github.com/Chakhdz/grok-bot-token-saver) - 盯 token 消耗的技能。周额度见底前把 Bot 停住。
- [unlist](https://github.com/shawnyeager/unlist) - 本地数据经纪商删除剧本与跟踪脚本并把 BOT.md 交给 Grok Bot 代点网站。
- [pigeon-mcp](https://github.com/iXanadu/pigeon-mcp) - 自托管多账号 Gmail MCP 可真正组 MIME 发信与附件。
- [multiBot](https://github.com/simo255/multiBot) - 工厂包。用 CreateAgent 拉起把重活交给 CLI 的队友。
- [GojiberryAI Sales OS](https://github.com/romangojiberryAI/gojiberryai-sales-os) - 挂在 GojiberryAI MCP 上的开源外销销售小队。

### 开源替代

- [OpenMausBot](https://github.com/milind-soni/OpenMausBot) - 开源替代，带虚拟机给 Bot 用。
- [pi-box](https://github.com/ahmadaccino/pi-box) - 开源的 Grok Bot 形个人代理。Pi 骨架、任意容器、技能优先的插件。
- [LocalFleet](https://github.com/Varun-Patkar/LocalFleet) - 本地优先的 Bot 小队聊天应用。每个 Bot 一台桌面容器，共用文件系统。
- [rakazo](https://github.com/elie222/rakazo) - 开源替代。自己选模型和沙盒。
- [guaca](https://github.com/madebywelch/guaca) - 又一种自托管的常驻电脑代理。
- [OpenGrokBot](https://github.com/wolfqing/OpenGrokBot) - OpenClaw 加自带模型，拼成 Bot 替身。
- [open-grokbot](https://github.com/ishandutta2007/open-grokbot) - 早期等价物。先读再授权凭据。
- [XinyunOpenBot](https://github.com/dongpen-max/XinyunOpenBot) - 中文开源替代，对准同一类要做的事。
- [botroster](https://github.com/mandarwagh9/botroster) - 具名队友、一台耐用电脑、审批和例行任务。Rust/Tauri。
- [hermes-bot-kit](https://github.com/thomasbek3/hermes-bot-kit) - Hermes 桌面插件，模仿 Grok Bot 手感。气泡聊天加一面看电脑的窗。
- [LaoA-GrokBot](https://github.com/zhulin025/LaoA-GrokBot) - 可定制的 Grok Bot 表情动作实验室，还能出分享卡。
- [anomalia](https://github.com/anomaliaso/anomalia) - 开源的 Grok Bot 形营销台。策划、写稿、发布都要人点头。
- [hydo](https://github.com/fortun8te/hydo) - 本机 MIT 桌面花名册，跑在 Hermes Agent 上。具名队友、频道、一台共用电脑。
- [snorlax-bot](https://github.com/chinghauchu/snorlax-bot) - 面向 DGX Spark 的开源本地版 Grok Bot 形态桌面与 iOS 运行时。

## 社区教程

社区走法。

- [How to Get Started with Grok Bot](https://debbie.codes/blog/how-to-get-started-with-grok-bot) - Debbie 的实地指南。第一个 Bot、参谋提示词、她怎么改编制。
- [Grok Bot Masterclass](https://www.dailydoseofds.com/p/grok-bot-masterclass/) - Avi / Daily Dose。录一遍，收成技能，挂上例行任务。
- [A deep dive into Grok Bot](https://flaviocopes.com/grok-bot/) - Flavio Copes 讲共用电脑、技能变例行、分享当模板、Stripe Link 花钱申请。
- [Technocore Grok Bot（日文）](https://github.com/hariou/technocore-grokbot-ja) - 在 Grok Bot 上安全跑 Technocore DID 的日文指南。
- [Peter Yang 五个值得先试的用法](https://www.youtube.com/watch?v=MkVcHbviYOw) - 顾问、YouTube 研究员、X 侦察、Gmail 断舍离、出行管家。

- [How to Set Up Grok Bot and Build Your First AI Agents](https://www.mindstudio.ai/blog/grok-bot-setup-guide) - 从安装到第一个代理。Heavy、Ultra、Teams 门槛写清楚了。
- [Grok Bot Explained](https://www.ayautomate.com/blog/grok-bot-xai-ai-agents-explained) - 讲清楚产品，还带一张 iPhone 上编制的真截图。
- [Hand Off Real Work Across Your Apps](https://app.therundown.ai/guides/hand-off-real-work-across-your-apps-with-grok-bot) - The Rundown 的跨应用交活走法。
- [Connect Multiple Slack Workspaces](https://www.usecarly.com/blog/how-to-connect-multiple-slack-workspaces-to-grok-bot/) - Slack 事件叫醒，不是把 Grok Bot 装成 Slack App。
- [LAVX 深入 Grok Bot](https://news.lavx.hu/article/a-deep-dive-into-grok-bot) - 共用电脑隔离、先插件再浏览器、Stripe Link 审批，以及何时 Zapier 或编程代理更合适。
- [Grok Bot Templates](https://www.aibuilderclub.com/blog/grok-bot-templates) - 讲清分享模板带走什么以及点 Add 之前怎么审查。
- [How to Use Grok Bot](https://www.aibuilderclub.com/blog/grok-bot-guide) - 从真实名单里抽出磁盘看板一次访谈和没事不发这三条。

橙皮书见上面的 [Grok Bot 橙皮书](https://github.com/KinGao294/grok-bot-orange-book)。

## 评测

- [The Verge 一篇可派活的 AI 同事](https://www.theverge.com/ai-artificial-intelligence/978666/spacexai-grok-bot-ai-agent-beta-launch) - 发布报道，把产品和 grok.com 聊天分开。
- [Lenny 通讯 测 Grok Bot、Grok 4.6 和 Cursor](https://www.lennysnewsletter.com/p/i-tested-grok-bot-grok-46-and-cursor) - 把 Bot 产品和 4.6 模型拆开。不要混成一件事。
- [Grok Bot vs OpenClaw](https://myclaw.ai/blog/grok-bot-vs-openclaw) - 托管云电脑，对上自托管、自带模型。
- [雇 200 美元 Grok Bot 之前](https://zchmael.substack.com/p/before-you-hire-a-200-grok-bot-ai) - 怀疑派清单。这个席位买不到什么。
- [CellCog 的 Grok Bot 定价](https://cellcog.ai/blog/grok-bot-pricing/) - 还在更新的定价笔记。从 Cursor Pro 20 美元 / SuperGrok 30 美元起的八条路，周额度未公开。
- [Grok Bot 是什么，真成本和暗风险](https://4geeks.com/en/blog/ai-tools/what-is-grok-bot) - 成本和凭据风险。一台共用电脑不是安全边界。

- [VentureBeat 常驻数字同事](https://venturebeat.com/orchestration/spacexais-grok-bot-turns-agents-into-persistent-digital-coworkers-that-can-operate-your-apps-for-120-per-month) - 发布报道。一直在的同事，能替你点应用。
- [Grok Bot vs OpenClaw vs ChatGPT](https://www.mindstudio.ai/blog/grok-bot-vs-openclaw-chatgpt) - 三者对比。托管电脑、自托管、聊天。
- [Grok Bot vs ChatGPT for work](https://www.eigent.ai/blog/grok-bot-vs-chatgpt-work) - 工作台对比，不是模型对打。
- [Grok Bot vs Claude Cowork](https://www.eigent.ai/blog/grok-bot-vs-claude-cowork) - 常驻 Bot 电脑，对上 Claude Cowork 会话。
- [10 Best Grok Bot Alternatives (2026)](https://www.vellum.ai/blog/best-grok-bot-alternatives) - 附近产品一览。当地图看，不当排行。
- [Khe Hy](https://khemaridh.substack.com/p/grok-bot-is-surprisingly-good) - 实测云电脑登录健身房并在 Notion 与邮件里找能帮忙的潜客。

## 贡献

PR 一条活的 `https://x.ai/bot/…` 链接、一条真人案例、或一个 GitHub 工具。一句话。动到目录就跑 `node scripts/lint.mjs`。细节见 [CONTRIBUTING.md](CONTRIBUTING.md)。

不要编造分享链接。不要整段粘贴别人的 standing instructions。不要投稿线下活动或 Luma。

## 相关

社区活分享画廊在 [somi.ai/grok-bots](https://somi.ai/grok-bots) · [grokbot.dev](https://grokbot.dev) · [grokyard.com](https://www.grokyard.com)

目录与配方（`catalog.json`、`catalog/`、`templates/`、`packs/`）采用 CC0-1.0（[LICENSE](LICENSE)）。脚本（`scripts/`）采用 MIT（[LICENSE-MIT](LICENSE-MIT)）。英文在 [README.md](README.md)。
