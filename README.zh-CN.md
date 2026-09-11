# Awesome Grok Bot

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![CC0](https://img.shields.io/badge/catalog-CC0-lightgrey.svg)](LICENSE-CC0)
[![MIT](https://img.shields.io/badge/scripts-MIT-blue.svg)](LICENSE-MIT)
[![GitHub stars](https://img.shields.io/github/stars/majiayu000/awesome-grok-bot?style=social)](https://github.com/majiayu000/awesome-grok-bot)
[![GitHub last commit](https://img.shields.io/github/last-commit/majiayu000/awesome-grok-bot)](https://github.com/majiayu000/awesome-grok-bot/commits/main)
[![Live shares](https://img.shields.io/badge/x.ai%2Fbot-live%20shares-black.svg)](catalog.json)

[English](README.md) · [中文](README.zh-CN.md)

> 能在 `x.ai` 预览、再一键 Add 的公开 Grok Bot 分享，外加真人怎么跑的写法。

[Grok Bot](https://docs.x.ai/grok-bot/overview) 是让具名 AI 队友在共用云电脑上持续干活的应用。来这里找分享、预览，再 Add。

## 目录

- [怎么用](#怎么用)
  - [先试这几个](#先试这几个)
  - [按工作类型找](#按工作类型找)
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

先在 Mac、Windows 或 iPhone 上[安装 Grok Bot](https://docs.x.ai/grok-bot/get-started)。打开一条分享，点 **Add to Grok Bot**。

<p align="center">
  <img src="docs/screenshots/add-button.png" alt="一条活分享页。黑色按钮是 Add to Grok Bot。" width="420">
</p>

分享会带上名字、技能、例行任务和官方市场插件。不会带上电脑、文件、登录或 API key。

Bot 共用一台云上的 Linux 电脑（上限 50 个）。那不是你桌上的 App。没有官方 Linux 桌面端。自己电脑是 Linux 的，看 [Linux 笔记本客户端](#linux-笔记本客户端)。

付费 Cursor 和 SuperGrok 都带 Grok Bot。账单看 [plans](https://cursor.com/help/grok-bot/plans)。

> 社区分享是不可信的第三方软件。先看 profile，只接一个连接器，先跑只读任务，再开写入。不要把 API key 写进 SETUP。见 [SECURITY.md](SECURITY.md)。

### 先试这几个

先加一个。打开分享，点 Add，跑一次只读任务。

- **[下载专家](https://x.ai/bot/z7xup0Ax1SBl2K84PELqF)** · 把长视频和播客转成能搜可读的中文文稿。
- **[Online Identity Bot](https://x.ai/bot/4VEl6mp1QrsvvjTFR-qE_)** · 每天查一遍搜索引擎里新冒出来的你的公开信息。
- **[AI 视频专家](https://x.ai/bot/ES3LVns98INeXAoYwef_f)** · 把一张照片做成一小段有情绪的短片。
- **[Join a Startup Bot](https://x.ai/bot/XJCoBm6z7qjAnt9ScG8i7)** · 每天送来几条大板子上看不到的早期岗位。

完整列表在下面，按活分类。真人案例和踩坑在链接墙上面。

### 按工作类型找

| 分类 | 收录数 |
| --- | ---: |
| [Coding & shipping](#coding--shipping) | 118 |
| [Inbox & calendar](#inbox--calendar) | 31 |
| [Research & briefings](#research--briefings) | 93 |
| [Customer & sales](#customer--sales) | 53 |
| [Finance & ops](#finance--ops) | 86 |
| [Content & publishing](#content--publishing) | 111 |
| [Personal admin](#personal-admin) | 164 |
| [Teams & handoffs](#teams--handoffs) | 113 |
| **合计** | **769** |

2026 年 9 月 11 日检查时，769 个分享页全部返回 HTTP 200。能打开不等于安全或好用。维护者核验状态是 **0 条已核验 / 769 条已收录**（[catalog.json](catalog.json) 里 `verified: true` 表示维护者已经导入并完成一次安全的首次任务）。

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

- [1000x Product Engineer](https://x.ai/bot/sQDD87Gp6VLT0m99tFpzu) - 全栈产品工程师，用 Convex、TanStack 和 React 把应用真正送上线。 [Thomas](https://x.com/TomZarebczan).
- [Agent Looper](https://x.ai/bot/AETdGbRRNWfckrRGv22LD) - 盯着本机编程代理反复改，直到验收测试通过。 [dancingteeth](https://x.com/dancingteeth).
- [Agent Smith](https://x.ai/bot/JcFj23aaufNWkuiiJTX0j) - 多 Bot 工作区的清洁工，不让垃圾越堆越多。 [Chip](https://x.com/chiplay).
- [AI Harness Assistant](https://x.ai/bot/oq-mYZXM23ShlY7UbJWeB) - 让你机器上每一套 AI 编程工具都跟上版本。 [Alan](https://x.com/gheeunit).
- [Alchemist](https://x.ai/bot/JjO20_oGKrE_Ys5Uz4efj) - 没文档的问题就拿来做实验，直到摸出一套办法。 [Aman](https://x.com/2onism).
- [App Store Review Bot](https://x.ai/bot/KzBEylM_3NFTjATszLICV) - 上架前审计 iOS 应用，并指导 App Review 被拒后的回复. [stevederico](https://x.com/stevederico).
- [Apple Dev](https://x.ai/bot/VPM4_E2eqx9AJFpTF-_EA) - 在你已配对的 Mac 上驱动 Xcode、模拟器和 Swift 构建。 [Baconbrix](https://x.com/Baconbrix).
- [Apps](https://x.ai/bot/OPLop__-mqSsyQheR5JYv) - 一句话描述应用，收回一个能跑起来的构建。 [Wayne](https://x.com/waynesutton).
- [ASC Skill](https://x.ai/bot/1kQ8p3TAKx2FgvYXir2Ta) - 一步步带着走完 App Store Connect 的 iOS 上架流程。 [Phil_Holland](https://x.com/Phil_Holland).
- [Astra Oracle](https://x.ai/bot/JocbRv3IMTJ5LmjX_qXvZ) - 经 Codex CLI 产出可粘贴的 PLAN 和 REVIEW，自己不写代码。 [bossriceshark](https://x.com/bossriceshark).
- [Baut](https://x.ai/bot/NuFI0dF9FgvO8FfMPHKzx) - 帮你把 Grok.me 游戏做出去，产品决策按真金白银来。 [XAmandaMoore](https://x.com/XAmandaMoore).
- [BeTree](https://x.ai/bot/2PSNlIROOJPj9qZlfRy0w) - 把分散在多个 Bot 上的计划收成一张活的关系图。 [Nicolas](https://x.com/NicoChauvin74).
- [Blockchain Data Expert](https://x.ai/bot/eyFr_G8h9UmrQHNpZpNfx) - 直接查询 The Graph 子图，回答链上数据问题。 [Derek](https://x.com/data_nexus).
- [Brake](https://x.ai/bot/ig-dwKjUc7doBIDhiMi9Z) - 点名那个在默默吃掉每周用量的重复任务并让你停掉它。 [FantomBuildz](https://x.com/FantomBuildz).
- [Buzzkill](https://x.ai/bot/F1spQY8tmP2KCqnyuAbJh) - 写出四段式 Grokumentary，隔离前要你先点头。 [Knock](https://x.com/SuddenlyJon).
- [CarmackBot](https://x.ai/bot/B5UMQzelNds6Iy2nuFrka) - 第一性原理的游戏引擎和固件专长，给小体量爱好游戏用，只上真正能跑的最小栈。 Marcus.
- [Changelog Stand-down](https://x.ai/bot/T27nv3vIy89yKldqELWbn) - 每周一用白话汇总团队这周真正上线了什么。 [acolombiadev](https://x.com/acolombiadev).
- [Changelog Stand-down](https://x.ai/bot/JiSR_7-w1GPQM0QWltAVq) - 每周一汇总你选定仓库里已合并的 PR 和发版。 [acolombiadev](https://x.com/acolombiadev).
- [Claude Code](https://x.ai/bot/71PSQ4KBs-hNYBsH05X_n) - 专职编码代理，所有软件活都丢给 Claude Code CLI 跑。 [Daniel](https://x.com/DanielZambrini).
- [Claudey](https://x.ai/bot/OR72i4SNc0_F1IzbCfg-D) - 把前端和架构活交给 Claude Code CLI，干完直接开 PR。 [Farzad](https://x.com/farzyness).
- [Code Red](https://x.ai/bot/4y3jlvwxFNqcP76eJgpuD) - 只停你自己的系统，先演练再确认的紧急急停开关。 [Knock](https://x.com/SuddenlyJon).
- [CodeDR - ExamBot](https://x.ai/bot/qocgykNssAv63yc1kdNnN) - 对 vibe coding 出来的应用跑 CodeDR 考试并出报告。 [codedrai](https://x.com/codedrai).
- [Cookie Monster](https://x.ai/bot/55t0IuxxlT7BWffNVOKai) - 把正确的 Chrome cookie 导入共享电脑让浏览器机器人别卡在登录墙。 [scottxmetcalf](https://x.com/scottxmetcalf).
- [CPA助手](https://x.ai/bot/hrfWPhRRr-DEMCKEF-WyA) - 在云电脑部署并养护 CLIProxyAPI，带 Cloudflare 隧道保活。 [licoycn](https://x.com/licoycn).
- [critiquito](https://x.ai/bot/rt9m-FTkJoGsZzAjsKLPM) - 设计评论家，只看你的界面截图，只给意见。 [mamuso](https://x.com/mamuso).
- [Cursor Agent (Local)](https://x.ai/bot/z4r7D8iILsTQDf7r7DwKR) - 在本机跑 cursor-agent 命令行，做实验和现场活。 [ryanthawks](https://x.com/ryanthawks).
- [Design Expert](https://x.ai/bot/H2WEoHRGKv_6a3j6lsHiG) - 用设计负责人的眼光审 AI 做出来的界面。 [inqusit](https://x.com/inqusit).
- [Devin](https://x.ai/bot/RwNXRkVfIUpxKV6jeXRsR) - 经远程 MCP 把编码活交给 Devin，可查进度和追问。 [naz3eh](https://x.com/naz3eh).
- [Devin](https://x.ai/bot/N7Qd2fHEhsMMt_frqyeZA) - 负责贴近底层的活，含守护进程、桌面应用、GPU 管线和发布脚本。 [JaimeBubblehead](https://x.com/JaimeBubblehead).
- [dr buzz](https://x.ai/bot/VyvwcgM7BAqHWkdMoEajp) - 帮你造其他 Bot，每个只干一件事并有固定语气。 [Talalakkari](https://x.com/Talalakkari).
- [Dr Disk Clean](https://x.ai/bot/9nAjTcDLxhYNz4jOtEzDO) - 先盘点拥挤的 Linux 机器，你点名路径才删。 [old_pgmrs_will](https://x.com/old_pgmrs_will).
- [dr eggbot](https://x.ai/bot/93gOz3op1UQdBdbekQFLK) - 替你搭建其他 Grok Bot。 [Lauren](https://x.com/poteto). 说明: [templates/dr-eggbot](templates/dr-eggbot/).
- [dr eggbot](https://x.ai/bot/McCLpiHvnIIGVZDaIPXIW) - 设计高质量 Grok Bot，并把大活拆成更小的兄弟 Bot。 [brandonsbay](https://x.com/brandonsbay).
- [dr eggbot](https://x.ai/bot/_jOdbfkB16zxu7MRcmReE) - 先问几道偏好，再帮你设计并创建高质量 Grok Bot. [poteto](https://x.com/poteto).
- [Dr Web LP](https://x.ai/bot/xM153pKfXPLWagLi_O1vR) - 给它一张网页图，它就用 HTML 和 CSS 把那页搭出来。 [old_pgmrs_will](https://x.com/old_pgmrs_will).
- [Dr.Binary](https://x.ai/bot/Pc2T7udSjGxv9pd9Spkyc) - 帮你逆向恶意软件、固件和漏洞研究用的二进制。 [drbinaryai](https://x.com/drbinaryai).
- [Engineering QA](https://x.ai/bot/b2tS8BNj8BhoQNDcB081S) - 守住你指定仓库的合并门槛，只把真正要拍板的问题往上抛。 [andreleibovici](https://x.com/andreleibovici).
- [Examiner](https://x.ai/bot/rBnJhXhks-_7n1zhZCN3E) - 东西一坏，就把刚发生的改动摊给你看。 [liam_fallen](https://x.com/liam_fallen).
- [Fable 5.1 Oracle](https://x.ai/bot/tLSg4HxepSclMqbZUTRnX) - 把怎么做想清楚并检查成品，自己从不写代码。 [bossriceshark](https://x.com/bossriceshark).
- [Farm](https://x.ai/bot/x3Iv-2J4mfxJY6JFlgwNa) - 把重编码活扔到自己的机器上，聊天里只带回结果。 [mpieras](https://x.com/mpieras).
- [Feedback](https://x.ai/bot/_-3KKbHbnSRzrS_8KFugU) - 把你已确认的 bug 整理成规范报告，提给对的团队。 [NYTEMODE](https://x.com/nytemodeonly).
- [Flowsery](https://x.ai/bot/tOP05p0n0XVUcpJDfPH0k) - 把会话录像收成一份按优先级排的修复清单。 [tarasshyn](https://x.com/tarasshyn).
- [Forge (dev factory)](https://x.ai/bot/7GgZtqkhyLzKKMNUa7dhd) - 把你签过字的规格丢进去，早上来收 pull request。 [DanKillenberger](https://x.com/DanKillenberger).
- [Forge (Template Foundry)](https://x.ai/bot/uF_uodOFUz9mdv6XDWE70) - 丢一个关键词进去，吐出一份能直接用的 Grok Bot 配方。 [rryssf](https://x.com/rryssf).
- [Frontier Model Watch](https://x.ai/bot/YHqn0iTQuvI-8LC01IP6S) - 每天一份核过的简报，覆盖十家前沿实验室的发布。 [Amina](https://x.com/GuleidAmina).
- [Gardener](https://x.ai/bot/oH3eR4YWtsljcz0W4HUBp) - 用可证明、行为不变的小 PR 清掉死代码。 [Tyler](https://x.com/tylerklose).
- [Github Bro](https://x.ai/bot/V2kkrme1lYb3NwIulGTTd) - 工作日早上汇总某个 GitHub 仓库的新动静，再附一段产品简报。 [kaushikimmadi](https://x.com/kaushikimmadi).
- [Grimoire's Tome & The Grim Council](https://x.ai/bot/luPJeAxuAjhqO97wU3wm0) - 带五十项技能的编程巫师，外加二十人顾问会。 [NickADobos](https://x.com/NickADobos).
- [Grok Build](https://x.ai/bot/eydijdzrfgtnmlnUyPSI-) - 给真正的 Grok Build 命令行单独一台机器干活。 [BillZanetti](https://x.com/BillZanetti).
- [Grok Build (client sites)](https://x.ai/bot/iwa3WaHZn385jfZrsQngL) - 搭客户站，部署 Vercel 预览，再把链接邮件发给客户。 [beaudenison](https://x.com/beaudenison).
- [Grok Build (preview links)](https://x.ai/bot/AY2y4oPL_VgcttCt8OFqm) - 另一路 Grok Build，专把客户站做成可预览链接。 [DAssetBuzz](https://x.com/DAssetBuzz).
- [Grok VM maintenance](https://x.ai/bot/9UZp5k0Fp0LYmkyos5swQ) - 给共享 Linux 电脑做健康检查磁盘服务和指定软件包更新。 [old_pgmrs_will](https://x.com/old_pgmrs_will).
- [Grokologist](https://x.ai/bot/8vdHXq66kVvVlbACd-IDL) - 把 Wormsign 收成两张意图图，追动机不追氛围。 [Knock](https://x.com/SuddenlyJon).
- [Hatch](https://x.ai/bot/o8hID4-jKPlA8QQQH5K69) - 先问几个偏好，再帮你设计像样的 Grok Bot。 [littletechbird](https://x.com/littletechbird).
- [helidon engineer](https://x.ai/bot/5mReUHPYTBA6nJ2aNvlqn) - 用现代 Java 写和审 Helidon 4 代码。 [TheSurenk](https://x.com/TheSurenk).
- [Helloitsoctocat](https://x.ai/bot/bJUE6kxTvEJ77R_OVMZTQ) - 把 main 合进 master 的仓库整理顺，并记下 Graph API 变更。 [helloitsoctocat](https://x.com/helloitsoctocat).
- [Interaction Designer](https://x.ai/bot/fWnNa6cA-nPjehIsaUZI1) - 先把流程和每个页面状态定下来，再谈视觉。 [UCDOps](https://x.com/ucdco).
- [Invention Detective](https://x.ai/bot/61rNnnNcP2_LKaz8FXw7P) - 盯你点名的 GitHub 仓库，找出可申报的技术发明候选供你确认. [leuner](https://x.com/leuner).
- [Judd the Bug](https://x.ai/bot/JQWyaF4Io7cfOF-4FvMZL) - 跨 MCP、Sentry CLI 和后台查问题，带回带出处的结论和动作。 [sergical](https://x.com/sergical).
- [Kindling](https://x.ai/bot/nfX1q6Drs8FTQ0eVezjH_) - 把一句话的应用想法收成可直接粘贴进 Grok Build 的提示词。 [FantomBuildz](https://x.com/FantomBuildz).
- [Kinesis Portal Bot](https://x.ai/bot/-GgufM3GkZclfn9PuI17_) - 动手管 portal.kinesis.network 上的机器、Docker 应用和闲置硬件。 [4SimonSays](https://x.com/4SimonSays).
- [lgtm the pr closer](https://x.ai/bot/vGk7yV-vF92ZegpNF3NPo) - 每天早上醒来，把开着的 pull request 清掉。 [Claire](https://x.com/clairevo).
- [Lingxi's Engineer Bot](https://x.ai/bot/fY1xWwCLzDDGVe3GwH78j) - 放手的工程主管拉起云端写码代理并只让你点合并。 [lingxi](https://x.com/lingxi).
- [Linky](https://x.ai/bot/zcHEE4_hbqw3cZsy7X2Vk) - 丢给它文件、文件夹或 Bot 产出，收回一条可分享链接。 [adamludwin](https://x.com/adamludwin).
- [Lite Intel Fetch](https://x.ai/bot/FQRA5tERWsasaQGIZmBl_) - 去拉 Base 上未付的 buy_intel_pack HTTP 402，把 JSON 交给会付 x402 的代理。 [RandyWhitePDX](https://x.com/RandyWhitePDX).
- [loops](https://x.ai/bot/Ub3T7usX-c6yRQibQq83P) - 工程外环，坐在你那些编程代理上面。 [mattyp](https://x.com/mattyp).
- [Mirror](https://x.ai/bot/6XwjJ_W0mX_ybK4ts_Ngb) - 能暂停任何人包括 Bottyguard，专查注入和脱缰。 [Knock](https://x.com/SuddenlyJon).
- [Multi-model consensus](https://x.ai/bot/PrgTl_LbGkXg5d2IcdLvc) - 让 Claude Code、Codex 和 Grok 同题对打直到达成一致。 [Austen](https://x.com/Austen).
- [NeuralEntropy](https://x.ai/bot/KR-yPzr3sLAAlsnbnVPXs) - 跑带标签的神经仿真，把余弦调谐脉冲映射成曲线. [krisadipap](https://x.com/krisadipap).
- [Night Shift](https://x.ai/bot/5VF_-GBnruE-tNxmhQygI) - 夜班玩具工，每晚做出一个可玩的小玩笑或文字游戏。 [FantomBuildz](https://x.com/FantomBuildz).
- [Nightly Audit Engineer](https://x.ai/bot/hkGSHcqKjGc5dm3ugNc2U) - 夜里通读仓库每个区域只交一个小清理。 [lingxi](https://x.com/lingxi).
- [Omnibot](https://x.ai/bot/OzZrG8ek4AhutfTVhBCI0) - 配好意图表后，从 Grok Bot 里跑任意 Cursor CLI 模型。 [ericzakariasson](https://x.com/ericzakariasson).
- [OpticalKernel](https://x.ai/bot/YYr1SAiufBW0I2R4h1VHv) - 在两个向量间算带标签的数值核，最多八个模式，偏演示用途. [krisadipap](https://x.com/krisadipap).
- [Optima](https://x.ai/bot/-E8sQr0Yrd_oSQlTaAzWy) - 扫过其它机器人的记忆，挑出过时规则并建议清掉。 [TOATspace](https://x.com/TOATspace).
- [overnight shipper](https://x.ai/bot/aaqCOb-3SE48_7qAEAzAf) - 睡前丢一个点子，早上起来审 pull request。 [Josh](https://x.com/joshkim).
- [Overwatch](https://x.ai/bot/7u3XiRiTYw4GVZmuZboyP) - 照看 Grok Bot 共用虚拟机，别让机器慢慢烂掉。 [Andrej](https://x.com/scheemunai).
- [Paste Ready](https://x.ai/bot/LrW8NQ19WViRSie4gj9hb) - 把一个乱想法收成可粘贴的名称、标题和简介。 [FantomBuildz](https://x.com/FantomBuildz).
- [Peekaboo Mac](https://x.ai/bot/zY0fbKG9UqTMWIu1NcudB) - 给你登记过的 Mac 加上录屏、截图和界面输入。 [brandon_ai](https://x.com/brandon_ai).
- [PR Reviewer](https://x.ai/bot/rt629UEZFtE4Wz0A_0c37) - 按风险高低来审 pull request。 [mustafa](https://x.com/mustafaergisi).
- [Product Designer](https://x.ai/bot/8_0XZtTYdQe6b4uUhIX0Q) - 扛产品三角里的设计腿，从问题做到可上线体验。 [ucdops](https://x.com/ucdops).
- [Proto](https://x.ai/bot/-SSy9LBtTNY17MXMXQbYq) - 对着一个产品问题交出三个方向不同且能跑的原型. [5antoshernandez](https://x.com/5antoshernandez).
- [Prototype Designer](https://x.ai/bot/_b0wyYKwherAZJdyL0HGG) - 按合适保真度做原型，并写出 AI 编码能读的规格。 [ucdops](https://x.com/ucdops).
- [Repo Engineer](https://x.ai/bot/iXfxVelc85rIxgZ9hLeXD) - 用 Cursor 云代理把小修复做成 GitHub PR，自己从不合并。 [RustamAtuev](https://x.com/RustamAtuev).
- [Rutin](https://x.ai/bot/o4gWkNGmffEaVtOhaEsA7) - 每周一把舰队里每条例行任务都调一遍。 [Naoufal](https://x.com/naoufal_elh).
- [Sable: Game Art](https://x.ai/bot/oSvAMKX_ahD56ZmgwtRys) - 按你选的风格出 2D 游戏美术和精灵表。 [DannyLimanseta](https://x.com/DannyLimanseta).
- [Sanity](https://x.ai/bot/qR7nq7v3w0bwpojx2LgQx) - Sanity 内容模型、模式和 GROQ 专长。 [ahdumgray](https://x.com/ahdumgray).
- [SAP Technical Consultant](https://x.ai/bot/O08yUdBz6vFFqYITvWPPi) - S/4HANA 顾问，帮你做干净核心的设计决定。 [beinglalit21](https://x.com/beinglalit21).
- [Scrub Gate Public](https://x.ai/bot/OQPXyBkjMhSEZxeZiE36b) - 公开再发布前先审计私有 Bot，清洗双胞胎再只从双胞胎打包。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Security Bot](https://x.ai/bot/Ci1UvQUguruSmxhiGmMI6) - 在聊天里用 Midkernel 扫 GitHub 仓库，回报报告和完整日志。 [mdashjames](https://x.com/mdashjames).
- [Skill Bot](https://x.ai/bot/WdKtVYWvxVEDmc7xp8zO2) - Bot 技能的图书管理员，去重并跟上版本。 [Dave](https://x.com/davespeers).
- [Skill Import](https://x.ai/bot/NhTYqcIBaPCSZtdTflnqa) - 从 Claude Code、Codex、Hermes 和 Grok Bot 导入并审 agent 技能包。 [Samuelflg1](https://x.com/Samuelflg1).
- [SmallPE-Managing-Partner](https://x.ai/bot/Opp17hS9gyOg8xEsQIcU8) - SmallPE 社区管理合伙人，一起做私募工具。 [parolkar](https://x.com/parolkar).
- [SpaceAutonomy](https://x.ai/bot/6X-ZITq7zfRZWpFz5MCme) - 在太空仿真里给传感器向量打标签，必要时进入安全模式. [krisadipap](https://x.com/krisadipap).
- [spacexai-bug-reporter](https://x.ai/bot/g_xmlbEvupO0b1Emk9ohZ) - 按渠道整理故障报告，写好后由你贴进正确的支持表单。 [Fine_4451](https://x.com/Fine_4451).
- [Speed Lab](https://x.ai/bot/LEbVr_WZ-cym7XwIm7xf5) - 对着站点渲染速度做研究循环，把赢的留下。 [pwnies](https://x.com/pwnies).
- [Stack Sentinel](https://x.ai/bot/osZS1pAzdIESMk33WNir0) - 你依赖的云服务一出事就立刻喊你。 [sat0xshi](https://x.com/sat0xshi).
- [Stuck Signal](https://x.ai/bot/1JxNBfQ05cVYJGLLh6R-o) - 长任务卡住、循环或报错时才叫你，没事就安静。 [WeirdBotDrop](https://x.com/WeirdBotDrop).
- [substreams](https://x.ai/bot/4ZzeuafN9Z1boU8smYIXv) - 在聊天里搭建并运行 Substreams 区块链数据管道。 [Graphtronauts](https://x.com/graphtronauts_c).
- [Sworm](https://x.ai/bot/l0J0Nj95_yVOlFZIHB1Y_) - 密封的家族草图和检测思路，从不给可运行样本。 [Knock](https://x.com/SuddenlyJon).
- [Tally Desk](https://x.ai/bot/m-qZ-OIA6Nt2LZeb2bKg5) - 建 Tally 表、读回复，需要时替你填一份。 [joshkim](https://x.com/joshkim).
- [Tech Lead](https://x.ai/bot/RfFPxQ_rfEGcUncrJ6g_W) - 只看 diff 和测试的实际结果，替你把住合并这一关。 [Ashish](https://x.com/inqusit).
- [Telnyx](https://x.ai/bot/l2RX-35tKxZXxgJldSBf0) - 带你从空账号走到 Telnyx 语音或消息的第一次联调. [traviscurnutte](https://x.com/traviscurnutte).
- [template generator](https://x.ai/bot/9oKJDID_EKLacIXpKfFAq) - 扫本机 Claude、Cline 和 Grok Bot 会话，再给出可生成可分享的模板。 [Jarett](https://x.com/STACCoverflow).
- [Testbench](https://x.ai/bot/jbcYU5l_7qsLl49AIzh5q) - 给共享电脑扛不动的活租一块 GPU，按运行时长计费。 [useprismnetwork](https://x.com/useprismnetwork).
- [Tibo](https://x.ai/bot/ZzK6V8Uu96exbwLQA-9fp) - 用单树工作流收口系统活，并做失败即停的移动端发版。 [icebakbum](https://x.com/icebakbum).
- [tinkabot](https://x.ai/bot/br5f3C4mc75QCMEHaszXd) - 把一个 API 收成其他 Bot 能直接接上的插件。 [DenisLabelle](https://x.com/DenisLabelle).
- [Twinwright](https://x.ai/bot/Hvli5amrlprtDS2KuFRBP) - 没日志就算没发生，只出静态图，从不跑文件。 [Knock](https://x.com/SuddenlyJon).
- [UCD Bot](https://x.ai/bot/An0FCP00zUniB7QdfedQX) - 以用户为中心的设计队友，从发现做到上线。 [ucdco](https://x.com/ucdco).
- [UniFi Umpire](https://x.ai/bot/F6-b0eniX5fLfzMEHqRf8) - 经官方 API 管多站点 UniFi，从不自动升级。 [JREakin](https://x.com/JREakin).
- [UniFi Watch](https://x.ai/bot/qV6FAPsH8Yox5VNuYQ8al) - UniFi 站点看门狗，盯 Network 健康和 Protect 摘要。 [ericdmann](https://x.com/ericdmann).
- [Usage Auditor](https://x.ai/bot/M5vd5Dp9Et4EZQ3Ik3Hn2) - 每周盘点所有例行任务按花费排序并标出重复轮询。 [maxjean__](https://x.com/maxjean__).
- [Usage-pool orchestrator](https://x.ai/bot/Nx4wpKeM_NYx577xlJFMD) - 把重活派给 Cursor 或 Claude Code 额度而不是烧掉 Grok Bot 用量。 [JordanHall_dev](https://x.com/JordanHall_dev).
- [VPS & VPN](https://x.ai/bot/zZfASPHMDvvJ4tRtB6wDR) - 在这台电脑上管 VPS 与 VPN，含 Tailscale、代理和 Cloudflare 隧道. [ProtocolXp94l](https://x.com/ProtocolXp94l).
- [Watchbot](https://x.ai/bot/D2M2qOWDB0AKe2k_jG7Ck) - Wormsign 监视器，不下判决，属于 Bottyguard SEAL Team 7。 [Knock](https://x.com/SuddenlyJon).
- [WaveletWorld](https://x.ai/bot/iqY9SAcdwm-mV96I0Y7gE) - 对数值状态向量跑一步带标签的 Haar 小波，偏演示. [krisadipap](https://x.com/krisadipap).
- [Webhook Guide](https://x.ai/bot/Q__pHX8RB4jsF5U3JtC66) - 一步步带你配好并触发 Grok Bot 的 webhook 例行任务。 [tobiasztop](https://x.com/tobiasztop).
- [WhatsApp-Bot](https://x.ai/bot/t-Axu4DmT9x2DEPa1eNW1) - 把反复做的 WhatsApp Web 杂活收成可回放的脚本。 [alexhawat](https://x.com/alexhawat).
- [参谋长](https://x.ai/bot/nSzhldgXfVuC93CjjQptM) - 中文参谋，把规划和研究转给 Cursor Cloud Agent，再把结果带回来。 [0xlangeai](https://x.com/0xlangeai).

## Inbox & calendar

- [bookworm](https://x.ai/bot/KPpT1F6tP4Q5GZ2BH2hBH) - 用创始人语气起草并发送阅读应用的内测邀请。 [NavyaM89482](https://x.com/NavyaM89482).
- [Bot inbox](https://x.ai/bot/RHSd-aq6KC84xxUnvBXSl) - 一行消化所有有新动静的 Bot 和群聊。 [Wayne](https://x.com/waynesutton).
- [CampusOps](https://x.ai/bot/vluD5Z1bUux-onnEk1Alg) - 把教学大纲收成能跟着走的周计划。 [klytron_dev](https://x.com/klytron_dev).
- [Chief](https://x.ai/bot/QIfSY8pPwjqBSIdal-5CI) - 工作日早上分诊收件箱、日历和待回复。 [SmoresBoy](https://x.com/jxckvibe).
- [Dewey](https://x.ai/bot/rfAHsaFrz6xHBMtUpxDi5) - 盯着 Gmail，只把真正需要你的邮件拎出来。 [William](https://x.com/Vixlio).
- [Dispatch](https://x.ai/bot/YkmZEZYBk-BqylyQbM3kq) - 每晚扫邮件、Slack、LinkedIn 和 X 私信，把漏掉的通话补上。 [Filippo](https://x.com/FilippoFonseca).
- [Dispatch](https://x.ai/bot/6zJ1yU4dDfAVYFJcy0687) - 工作日清 Gmail，只起草回复从不发出。 [seoulscurry](https://x.com/seoulscurry).
- [Exec CoS Digest](https://x.ai/bot/gEujmYQAd4BD19eRxMvnC) - 工作日一早把日历过一遍，并帮你备好明天的外部会议。 [montymccoy](https://x.com/montymccoy).
- [Google Agent](https://x.ai/bot/tttQVA2UtlNwCzITNCIr0) - 先读后动，管 Gmail、云盘和日历。 [Ryan](https://x.com/ryanthawks).
- [Holly Helpdesk](https://x.ai/bot/sIoeE87fILU5CzptPF29K) - 一线客服，管支持收件箱和帮助台。 [clairevo](https://x.com/clairevo).
- [Inbot](https://x.ai/bot/yH2UttxbMwMugweZrigHT) - 对着你真正在用的每个收件箱，把未读清到零。 [Matthew](https://x.com/matt_silberman).
- [Inbox to Asana](https://x.ai/bot/Ka18PTTKUNtDDPg0HpYva) - 读公司邮箱，把真要干的事写进 Asana，不动你的发件箱。 [wikiwayne](https://x.com/wikiwayne).
- [Inbox Zero](https://x.ai/bot/h5i1TCuYEL2mVtMbQtW98) - 每个工作日把噪音归档，把 Gmail 压到零。 [LD](https://x.com/zapnocode).
- [Jess](https://x.ai/bot/Nmv2fCQEcQc3EHzVXJZKN) - 你还没打开邮件、日历、Notion 或 Slack，它已经先复盘过了。 [Logan](https://x.com/LoganARobison).
- [loom](https://x.ai/bot/cElGnAaR55iPHK2DGdPdu) - 读完整条 Gmail 线程并起草回复，从不替你发出。 [Lauren](https://x.com/poteto).
- [Love ❤️](https://x.ai/bot/Xg8tws0lVEouCHOVMcnLg) - 不让一段关系里体贴的那部分溜走。 [dannybuck](https://x.com/dannybuck).
- [MarketBoxScan](https://x.ai/bot/-LYLlgknV3IgZcFEmhcLs) - 写稿人开工前的科技新闻和收件箱简报。 [techAU](https://x.com/techAU).
- [Meeting prep](https://x.ai/bot/Hd3GphmPZ4aHWyFiBSmu5) - 按日历和已接上下文写短而能拿着打电话的会前简报。 [scottxmetcalf](https://x.com/scottxmetcalf).
- [Newsletter Cleanup](https://x.ai/bot/dHd69sBvMG2o3lJa__T7K) - 审计半年 newsletter，只退订你点头的那些。 [Andrej](https://x.com/scheemunai).
- [openrobot](https://x.ai/bot/ndO6BI7E2ur5X-bhWM_1R) - 合作接待台，把兴趣收成一封介绍邮件。 [noborderhuman](https://x.com/noborderhuman).
- [Receipt Scanner / Expense Tracking](https://x.ai/bot/qod4CrNQBlDIMm5wFYVQp) - 转发一张收据，它就变成报销表里的一行。 [limeunfiltered](https://x.com/limeunfiltered).
- [Remind Bot](https://x.ai/bot/peJxDrQRS4t2DHuHfzhfW) - 接住那些永远写不进日历的小提醒。 [Damon](https://x.com/damonchen).
- [Ship Note](https://x.ai/bot/xMCiRCmOCYLeRzW8nS6EL) - 把一次发布收成更新日志条目和一封邮件。 [sol_wright7](https://x.com/sol_wright7).
- [slack radar](https://x.ai/bot/m4WfJ0ODD0O1runkfq0Ak) - 安静读 Slack，只在被点名或盯着的话题真正需要你时提醒。 [parkersmith](https://x.com/parkersmith).
- [Slacker](https://x.ai/bot/R-TSImHItwbFHL8vYj9sc) - 把 Slack 收成真正需要你回的那几条。 [scottxmetcalf](https://x.com/scottxmetcalf).
- [TenderYearsbot](https://x.ai/bot/o7VRdRSxHvBEYbzkJQm07) - 从 Gmail、日历和 Tender Years 里管五岁以下娃的家务物流。 [voeliz](https://x.com/voeliz).
- [The Morning Newspaper](https://x.ai/bot/1xAJYJPes3X7dUM2mk9Di) - 夜里读收件箱和日程，排成一张小报，早餐前打出来。 [CodeChap](https://x.com/CodeChap).
- [Time Keeper](https://x.ai/bot/IAEp851k9orM1LguTm2F8) - 用早间议程和夜间预览把一天夹住。 [Mark](https://x.com/ironted21).
- [Tradbot](https://x.ai/bot/uY_7s1TZILVzUeJ9lLOx9) - 家庭参谋，管家庭计划、学校和家务行政。 [clairevo](https://x.com/clairevo).
- [WhatsApp Digest](https://x.ai/bot/k8sSgsXHhRTEZi9Sqt_J-) - 只读汇总最忙的 WhatsApp 群当天真正要紧的事。 [PetrusJvR](https://x.com/PetrusJvR).
- [💼 CoS](https://x.ai/bot/eiVFbd0nIdH2gzSwHOs0D) - 把你的 Bot 席位、日历和收件箱，收进同一套工作日节奏。 [A-A-ron](https://x.com/theaaron).

## Research & briefings

- [2nd Brain](https://x.ai/bot/c4fYduVVic2YtbcjXquD0) - 把你读过的东西收成可问答的链接维基。 [LeTerryBZH](https://x.com/LeTerryBZH).
- [AI Master](https://x.ai/bot/L6q8qCzomu2lTs9mu_r1X) - 同时问四个 AI 模型，再把回答合成一份。 [Leonardo](https://x.com/leoclark).
- [AI Resource Sift](https://x.ai/bot/3XvYxSCGJRY6x1woq-hdL) - 把论文、代码、讲座和论坛扫进一摞阅读清单。 [Alen](https://x.com/beamnxw).
- [aoty](https://x.ai/bot/Wt4IQj3R1eePOyOOnox7H) - 每周按综合评分挑三张新专辑。 [emrecolakoglu](https://x.com/emrecolakoglu).
- [Argubot](https://x.ai/bot/s6SC7C5OF18VVy9Vovngg) - 对抗式辩题对打，一边钢人一边反驳。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Article Access](https://x.ai/bot/YenfJofScFkEnwvOQiq6k) - 用 DOI 或 PMID 找开放全文、图书馆代理，再回出版社页。 [UroDonMD](https://x.com/UroDonMD).
- [Bot Portal](https://x.ai/bot/5R5NbvHIoJOSd3l3qto3o) - 持续整理值得关注的 AI 工具和机器人，并记下彼此怎么接。 [JaimeBubblehead](https://x.com/JaimeBubblehead).
- [Box Inspector](https://x.ai/bot/q7GLbLhMZDpJXBGuuci1J) - 在你把别人的 Grok Bot 加进账号前，先检查那条分享链接。 [Knock](https://x.com/SuddenlyJon).
- [Career Scout](https://x.ai/bot/P_0bcl1HrKuL8E1bfmJjz) - 先读你的简历，再按真实匹配度给岗位排序。 [jakesh_jakesh](https://x.com/jakesh_jakesh).
- [Clickbait skipper](https://x.ai/bot/i8WsjKB8KRL-kQ25VPwaB) - 跳过铺垫，直接告诉你视频或播客里真正在讲什么。 [S_Padival](https://x.com/S_Padival).
- [Collins](https://x.ai/bot/D6lddHs6lfM0k7Cj3P6j3) - 带你走完 Hercules Collins 1680 年的教理问答，每天一题。 [Zach](https://x.com/zachmllr).
- [Commercial Taste](https://x.ai/bot/vekulzIMXM8hDjkp-mDkX) - 数据不齐时，替技术背景的创始人补上商业判断。 [Smit](https://x.com/thesmitpatel).
- [Competitor Watching](https://x.ai/bot/5PKSzU0ruN_DQbNXc7m0N) - 拿你跟三到八个对手做快照，只在真正有变时才叫你。 [Andrej](https://x.com/scheemunai).
- [Connection Audit](https://x.ai/bot/qllnuXO-FDFBHZU4MSamY) - 清理你的待读囤积，把每篇留下的都挂到一个真实问题上。 [Sultanov](https://x.com/thekuchh).
- [Constitution Teacher](https://x.ai/bot/rT1ctUUL_Sehj57TUl5IS) - 打开美国宪法原文，用白话讲解并附出处. [angie_kuaile](https://x.com/angie_kuaile).
- [Consumption Autopsy](https://x.ai/bot/WBo-ahaIrvCKXUH_3iEFy) - 复盘你的学习习惯，把一项被动输入换成动手练习。 [Sultanov](https://x.com/thekuchh).
- [Daily YouTube Recap](https://x.ai/bot/dug1Zq29P009fdcI5-tTC) - 早上看你订阅的 YouTube 频道，没更新就闭嘴。 [scheemunai](https://x.com/scheemunai).
- [Dan Patrick](https://x.ai/bot/hlQhxsU-pqQEkimm0it4V) - 九十年代 SportsCenter 口吻的比分 Bot。早间综述，你点名的球队终场再叮一声。 [Marcus](https://x.com/marcusramsey).
- [Data Science (Querie)](https://x.ai/bot/Bu2sEQqu0hEjpbzN_07D3) - 管分析查询、表格拉取和指标定义。 [egavrilenko11](https://x.com/egavrilenko11).
- [Doing Gap](https://x.ai/bot/9WPtKWMppOYW9wwGPwOaE) - 把你看过的和真正做出来的放在一起算账，然后逼你动手。 [Sultanov](https://x.com/thekuchh).
- [dosebot](https://x.ai/bot/2euxntVrddHyA3c2hyxiZ) - 判断一个生意点子是锦上添花还是真痛点。 [onerinas](https://x.com/onerinas).
- [Errol](https://x.ai/bot/mQoLg90Pj5Cn2Gso4AkoQ) - 每天两次带练儿童教理问答，用于家庭礼拜。 [Zach](https://x.com/zachmllr).
- [Ethan](https://x.ai/bot/F5Mm-0O3fPPZjYGIdsycE) - 带五项专长的研究台，还会核对自己的发现。 [JUMPERZ](https://x.com/jumperz).
- [Facta](https://x.ai/bot/ayQ3WlQQ2Z7LQhILzbZIR) - 给其他机器人说的话打分，标成扎实、含糊、夸大或留给人看。 [JaimeBubblehead](https://x.com/JaimeBubblehead).
- [family wordpress helpdesk](https://x.ai/bot/7ySyCp6OurH0hlcKMAm_b) - 给管家里 WordPress 站的亲戚当帮助台。 [joshkim](https://x.com/joshkim).
- [Fantasy Football](https://x.ai/bot/VWAXuVB5VI6ScHdO97Bh0) - 全年幻想橄榄球台，帮你决定首发、板凳和交易。 [notswizz](https://x.com/notswizz).
- [Fantasy Football Advisor](https://x.ai/bot/E273ZIwirOOdwMfeCp97t) - 像总经理一样管你的 ESPN 幻想队，动作要你点头。 [Colehollander10](https://x.com/Colehollander10).
- [Fed + X Brief](https://x.ai/bot/ojDgaVLzjbxpPV74VzQrM) - 工作日早间汇总美联储与市场，并建议今天该发帖、引用还是观望。 [0xashrk](https://x.com/0xashrk).
- [Feedback Clock](https://x.ai/bot/ySceLccAh5J8IVnq62mQl) - 压缩「做一次」和「得到评判」之间的时间差。 [Sultanov](https://x.com/thekuchh).
- [First Principles](https://x.ai/bot/7q08AHI6KgzlF25Ds0qhs) - 把问题剥到硬约束，再从第一性原理重建。 [greg_carbon](https://x.com/greg_carbon).
- [friend finders](https://x.ai/bot/FGBuaEH72GHuC9ZrVj7XA) - 扫你自己的 X 私信，告诉你现在该回哪几条。 [pukerrainbrow](https://x.com/pukerrainbrow).
- [github 优秀仓库](https://x.ai/bot/D9HYH2jAmGiKw7e499mrE) - 每天早上扫一遍 GitHub 趋势页，把值得看的仓库写成简报。 [umiastuti8329](https://x.com/ios_1261142602).
- [GrokBot Awesome Use Cases](https://x.ai/bot/DTNL6V2HxpUHj3MkI-bSj) - 早上一小份值得动手搭的新 Grok Bot 用法。 [Andrej](https://x.com/scheemunai).
- [ideabot](https://x.ai/bot/iQ8OWEu7eOI3YuTZFaIe_) - 每小时从你这一周里挖一个值得追的创业点子。 [onerinas](https://x.com/onerinas).
- [Interrogator](https://x.ai/bot/-TlSH1rNkA-c2JLsFFVc7) - 找出你一直当事实用的那些假设。 [liam_fallen](https://x.com/liam_fallen).
- [Just-in-Time Curriculum](https://x.ai/bot/rpkZERbKrIN_NlDl8ErVZ) - 丢掉学习积压，只教你下一个任务真正用得上的部分。 [Sultanov](https://x.com/thekuchh).
- [Keach](https://x.ai/bot/sAxCT93K8i7gwctmtAroD) - 每天早上过一题 Keach 1693 年的教理问答。 [Zach](https://x.com/zachmllr).
- [KeyWire Comic Week Brief](https://x.ai/bot/1hyNK6vXzs_8QamyfhvCV) - 每周提醒拉清单，再给一份按你口味的漫画摘要。 [CryptoVonDoom](https://x.com/CryptoVonDoom).
- [Kimi](https://x.ai/bot/oBK8ft9f4D723aXeZJuCm) - 把商业播客和 YouTube 收成短小不注水的速查单。 [orenmeetsworld](https://x.com/orenmeetsworld).
- [Korean Public API](https://x.ai/bot/ohL9kGur6IRBTCWqhxBWJ) - 按你的想法推荐韩国政府公开数据接口。 [reallygood83](https://x.com/reallygood83).
- [last30days](https://x.ai/bot/ANv3NrqPfRcS9PdXku7h8) - 捞出过去三十天里人们对一个话题真正说过的话。 [mvanhorn](https://x.com/mvanhorn).
- [Lumos](https://x.ai/bot/SwTxLoOaIwDqTSvhTIhrK) - 用费曼技巧教技术，配例子和日常类比。 [mdafanulh](https://x.com/mdafanulh).
- [Lurk (Reddit Researcher)](https://x.ai/bot/12Gbp1lPVsfTVAHPXKd3B) - 在 Reddit 上挖原话，收成一份痛点包。 [tinkerersanky](https://x.com/tinkerersanky).
- [Markets Brief Scout](https://x.ai/bot/exSOooSSp0Pc4W_K9DQ4T) - 工作日整理带出处的行情卡片，并起草待你拍板的帖子。 [GainGlintGaz](https://x.com/GainGlintGaz).
- [Meta Grok](https://x.ai/bot/HAhgshU4r50gS81LCcpmk) - 工作日汇总人们真正在聊的五个 Grok Bot。 [FrankFindsOut](https://x.com/FrankFindsOut).
- [Neuroscience](https://x.ai/bot/l_MfrDAGFed5t2A9Wrzqz) - 神经科学和脑机接口专长。 [monomyth](https://x.com/monomyth).
- [News Scout](https://x.ai/bot/9Mo5saoPQYIp45IgzMT7P) - 按你的时区，工作日早上一份新闻摘要。 [Eleni](https://x.com/byeleni).
- [Off-Balance Atlas](https://x.ai/bot/tSUFdzcg2WDFLFsFLHzIb) - 写带出处的深稿，覆盖科技、机器学习和安全。 [AdemVessell](https://x.com/AdemVessell).
- [OutBid Mania](https://x.ai/bot/Sj_LPMP7hKOOSzF8YDiNr) - 每天看板盯一个爆火竞价站潮流和它的仿品。 [dragosroua](https://x.com/dragosroua).
- [PickFu Insights](https://x.ai/bot/9EFVmFgQhjYKjMHAhpCWn) - 在真花钱之前，先拿真购物者测产品点子。 [GrokBotMoney](https://x.com/GrokBotMoney).
- [Pitch Deck Coach](https://x.ai/bot/mqVPHm0oB3WPsnxbU1qB9) - 告诉你投资人真正会听懂、会记住什么。 [hnshah](https://x.com/hnshah).
- [Podcast Summary Bot](https://x.ai/bot/CsyAhw5YQaVLeMSnMYwgA) - 贴一条播客链接，拿回 TLDR 和值得留下的要点。 [NM](https://x.com/theadvisorbtc).
- [Primer](https://x.ai/bot/GTStkB5wsoSlGx9jtdaPe) - 直接回答 Grok Bot 实际会怎么表现。 [ambientstudio24](https://x.com/ambientstudio24).
- [Private Desk](https://x.ai/bot/Tgl3sxrTsuAYL7MN8S3UT) - 分析那些不便丢进普通聊天窗口的敏感材料。 [useprismnetwork](https://x.com/useprismnetwork).
- [Product Idea Stress Test](https://x.ai/bot/JeFTvcDX-7QT2evKGIb52) - 找出你的创业点子里那个最不能出错的核心假设。 [Hiten](https://x.com/hnshah).
- [ProductHunter](https://x.ai/bot/Qsqan7PbltFggoJukvmtT) - 早晚两班扫 Product Hunt 和 HN 新品，并补上访谈拆解. [Davidwuuu92](https://x.com/Davidwuuu92).
- [Pulse](https://x.ai/bot/oUYHu9LEXP5RVPFvoG4Ms) - 只读的 X 管家，把一整天的时间线压成早 7 点一份能扫完的简报。 [Andrej](https://x.com/GrokBotDev).
- [Raily](https://x.ai/bot/Yf3pOvZQ0B_9DDcCzuhDG) - 审可能的新连接，不碰你的账号。 [raily](https://x.com/raily).
- [Recent Bookmarks Search Bot](https://x.ai/bot/wUWBNyr-Y0BJwAKAT-I_J) - 把你在 X 上收藏的帖子收成可搜索可排序的表。 [srinatar](https://x.com/srinatar).
- [Research Bot](https://x.ai/bot/Nn0ykGa3vJ6YS7ib7F6yH) - 深研究，交回带核过出处的短答案。 [ArthurMacwaters](https://x.com/ArthurMacwaters).
- [Research Desk](https://x.ai/bot/99i8BzpcF-FsOKxTQxZRM) - 只起草带出处的研究结论供你批准，付款端永不写入。 [justsomeguy741](https://x.com/justsomeguy741).
- [Research Runner](https://x.ai/bot/P2qgQokuPHVJhrkmRDmLv) - 向 Prism Network 租 GPU 跑共享电脑扛不住的 CUDA 研究活。 [useprismnetwork](https://x.com/useprismnetwork).
- [Researcher](https://x.ai/bot/N5IL6i3M-tc-6yr004t0O) - 带出处的研究代理，拆子问题并只留直接答案。 [Tferriere](https://x.com/Tferriere).
- [Researchy](https://x.ai/bot/rQt4W2zO2Gx9lfcBjd1lj) - 拿实时网络核查说法，返回带日期的引用出处。 [Farzad](https://x.com/farzyness).
- [Retrieval Exam](https://x.ai/bot/OAlX-diXtFDIT6sTZ0NbI) - 闭卷提问，把真记住和只是眼熟区分开。 [Sultanov](https://x.com/thekuchh).
- [RuntimeWire - AI & Startup News](https://x.ai/bot/k4iwGejDGoy-oT7qohxXb) - 每天一篇有出处的 AI 融资、上线和创始人动态。 [Ryan](https://x.com/merket).
- [Scout](https://x.ai/bot/ywADCWWZP0Bcq6bOeQpGt) - 给客户社媒策略做每周情报包，出处一路标清。 [zeuuss_01](https://x.com/zeuuss_01).
- [Segundo Cérebro](https://x.ai/bot/OaRwBX_QPos9EDlhLEV1J) - Obsidian 第二大脑，早间简报加夜间回看。 [liderzio](https://x.com/liderzio).
- [Sherlock Holmes](https://x.ai/bot/fXHgGtuPfTcHBTVKSCZ1d) - 给它一个症状，它找出指标掉下去的真正原因。 [liam_fallen](https://x.com/liam_fallen).
- [Steal This Business](https://x.ai/bot/Ojrv95GLUG1nO1p1RWzVK) - 把你佩服的公司拆开，变成你能自己搭的那一套。 [adxtyahq](https://x.com/adxtyahq).
- [StoriesBot](https://x.ai/bot/cV7nGFO88pb2WXNN56h8A) - 搜十七年的 MacStories，可按时间和作者筛。 [viticci](https://x.com/viticci).
- [Struggle Gate](https://x.ai/bot/tjN1LsaYsuR7u0dQQvOGV) - 把答案压十分钟，逼你自己先试一遍。 [Sultanov](https://x.com/thekuchh).
- [Stuck Cycle](https://x.ai/bot/fihe4nAy0jFWoygo4JCAW) - 让一项技能反复跑「尝试 → 卡壳 → 针对性补课」的循环。 [Sultanov](https://x.com/thekuchh).
- [Tesla Fleet Oracle](https://x.ai/bot/TC4HAdm7oBVo-oAouU8iw) - 只读 Tesla Trek 和 XYO 任务简报，禁止锁车解锁和鸣笛。 [OmgawdMadeit](https://x.com/OmgawdMadeit).
- [teslapilot](https://x.ai/bot/CJayoQDcSkhNlHsBqsy1s) - 车主向 Tesla 新闻台，更新、超充、Cybercab 和 Powerwall。 [ucdco](https://x.com/ucdco).
- [The Amazing Randibot](https://x.ai/bot/pL_NCKfdF5UgZYEo-jMAx) - 开朗的怀疑派，逼你其他 Bot 拿出证据。 [russbroomell](https://x.com/russbroomell).
- [Thoth](https://x.ai/bot/W4Z5pvEm6UgCml48Ig4dT) - 做深研究，把卷宗归档，下次还能找到。 [Rich](https://x.com/RichSilver).
- [Titan Show Research](https://x.ai/bot/DyKsq0BuAq-c-N0mkqh7U) - 直播选题研究台，锁好能直接上口的卡片。 [TitansDrop](https://x.com/TitansDrop).
- [Travel Agent](https://x.ai/bot/_yHS4eeajJMAXY1EHAdoO) - 维护一份 Notion 出行日志，按你自己的行程回答问题。 [jjeremycai](https://x.com/jjeremycai).
- [Trendspotter](https://x.ai/bot/nnDL-hclNLB8SkJvcVtwr) - 工作日简报，覆盖体育文娱文化趋势和营销侧 AI 信号。 [jennananpei](https://x.com/jennananpei).
- [US Law Index Builder Bot](https://x.ai/bot/G2eeD6pM6N6TNfnHbsC8c) - 搭私人非商用的美国成文法资料库和检索。 [EchoFieldVisual](https://x.com/EchoFieldVisual).
- [User Researcher](https://x.ai/bot/zX-pWWtNY6reickF2J6Lm) - 用户研究搭档，每个结论都能回溯到证据。 [UCDOps](https://x.com/ucdco).
- [voice of the people](https://x.ai/bot/8Snl1TovbMwClPoBiHrWT) - 盯 X，只在范围内有新命中时通知，其余保持安静。 [DenisLabelle](https://x.com/DenisLabelle).
- [X Brief](https://x.ai/bot/GkX6X536UK2MlbkfGLQnb) - 从你自己的帖子学你关心什么，再盯那条线。 [Daniel](https://x.com/daniel_mac8).
- [Yahoo Pulse](https://x.ai/bot/5nnJJwVjO4EwThIaaaynu) - 只读盯盘日报，附图表和新闻。 [Tferriere](https://x.com/Tferriere).
- [YC Podcast Notes](https://x.ai/bot/0y-dcpVFqFkjibKs2M48D) - 每小时盯 Y Combinator 播客，写出对创始人有用的笔记。 [buuxbt](https://x.com/buuxbt).
- [Youtube分析官](https://x.ai/bot/Ja29gpInav-alRhXhzyNL) - 按主题给 YouTube 视频排名，再写成简报。 [Mado](https://x.com/madogiwacowork).
- [Zettelkasten](https://x.ai/bot/35ZO_vGqk_ch51C9qPX1c) - 给 Obsidian 金库当卡片盒搭档，原子笔记只在你点头后才归档。 [pohlipit](https://x.com/pohlipit).
- [しおり](https://x.ai/bot/Mo3ndUm0UJTjTvFbqLFDt) - 把 X 书签收成主题和下一步，用简短日语做早间摘要。 [marulimoai](https://x.com/marulimoai).
- [下载专家](https://x.ai/bot/z7xup0Ax1SBl2K84PELqF) - 把长视频和播客转成能搜可读的中文文稿，顺手捞公开论文。 [KinGao476942](https://x.com/KinGao476942).
- [全球宏观分析师](https://x.ai/bot/08RSf587bOlWhbQai6A3I) - 看大事对利率、美元、黄金、加密货币和股市会怎么传。 [Fund_Monkey](https://x.com/Fund_Monkey).
- [最值得关注的Grok Bot 推文？](https://x.ai/bot/lFDR77qKaT3Iglzv9pUac) - 每天两次用中文扫一遍值得看的 Grok Bot 账号动态。 [MaiYangAI](https://x.com/MaiYangAI).
- [藍苺守 織](https://x.ai/bot/OQlGXzAbIq-IAsj9rSu-K) - 每天早上扫蓝莓论文与行业新闻，有干货才报，没料就安静. [Bizuayeu](https://x.com/Bizuayeu).

## Customer & sales

- [Ad-Active Lead Finder](https://x.ai/bot/nHDuTEJd3mC91rtLLPN0p) - 找正在投广告的 B2B 线索，并整理成可审的 CRM 导入清单。 [aferrari](https://x.com/aferrari).
- [ADM account bot](https://x.ai/bot/4Gc1tZsJu7C8YH-EnTfaN) - 每周一份客户经营计划，用来保住并做大客户。 [Scott](https://x.com/scottxmetcalf).
- [AE deal bot](https://x.ai/bot/yXsqmCaODNkTEwtIbiXxe) - 按 MEDDPICC 给在谈的单打分，并指出下一步。 [scottxmetcalf](https://x.com/scottxmetcalf).
- [Affiliate Recruiter](https://x.ai/bot/TaCAhCtPGCvObAaK7ZDQQ) - 按主题和竞品推广人找联盟候选人，排出短名单并附联系方式和初稿话术。 [zilvestro](https://x.com/zilvestro).
- [Call Desk](https://x.ai/bot/zqWxv4Mn6DqmMZkD16_zl) - 那些你一直拖着不想打的电话，它替你打。 [Dr](https://x.com/dave_dlt).
- [Club Sponsor Bot](https://x.ai/bot/thQfSs8ZqbzB1w2cAmSzA) - 替学生社团跑赞助、招聘和讲者邀约。 [NavyaM89482](https://x.com/NavyaM89482).
- [Colombia Move](https://x.ai/bot/mWxeafjXItbC0_VcpSwqm) - 给 Colombia Move 市集做客服，西语英语都能接。 [michaelheredia](https://x.com/michaelheredia).
- [Contra Job Scraper](https://x.ai/bot/__sNWxlx-8H08UluQuOeo) - 每六小时扫一次 Contra 接案流，有变才发邮件。 [techking_007](https://x.com/techking_007).
- [Dan Lanning](https://x.ai/bot/1xyC1R0zvv2vKTQHLzYWS) - 用真实通话稿练伙伴关系与高风险发现通话的表达。 [jennananpei](https://x.com/jennananpei).
- [deck-guy](https://x.ai/bot/bdkJcjP5Gt9BaGTqh1vXH) - 根据通话记录直接做出会后幻灯片。 [pavravi](https://x.com/pavravi).
- [dial bot](https://x.ai/bot/NJXi2SWEuhNxjOjspMMPi) - 替你打一通真实电话，结束后交回一份书面通话纪要。 [mattyp](https://x.com/mattyp).
- [Echo](https://x.ai/bot/ph5mcXqVy2p176Br7BJYi) - 客户通话结束后，按实际说过的话做演示文稿。 [Krista](https://x.com/kristaletz).
- [Gong Call Coach](https://x.ai/bot/KpodhhBqjA4FHv47R1HrD) - 从已存的销售通话录音里抽出几条给销售看的短辅导。 [scottxmetcalf](https://x.com/scottxmetcalf).
- [GrokBotDailyCrawl](https://x.ai/bot/CM6cRhyYm-k1vi23YxYxx) - 爬你的站点做索引，再喂给主流大模型和 AI 代理。 [RobautoAI](https://x.com/RobautoAI).
- [GTM Chief Of Staff](https://x.ai/bot/r9Svkbs3dN6CY1Iy_Au4b) - 扛下企业单周边行政，让你专心卖。 [Sultanov](https://x.com/thekuchh).
- [Gus Fring](https://x.ai/bot/Dhk5c79MEj0MRM484ZM1k) - 成品出货前的最后一道关，给客户一个干脆的判定。 [liam_fallen](https://x.com/liam_fallen).
- [Harry Dry](https://x.ai/bot/tr-3hPrAG7_LeSzKZ5_vu) - 按 Harry Dry 路子改落地页和广告让每句可看见也可证伪。 [joseamijares](https://x.com/joseamijares).
- [Harvey Specter](https://x.ai/bot/lkkCqhC1jBFp6ouZOQd9m) - 谈一笔交易、续约或报价，拿到现实里最好的条款。 [liam_fallen](https://x.com/liam_fallen).
- [Herbet](https://x.ai/bot/zFDmYYQKE8dUS9Z8r2LAd) - 给 Solutions Partner 讲 HubSpot 该点哪个对象和设置。 [derek_all_gusto](https://x.com/derek_all_gusto).
- [Hermes SDR](https://x.ai/bot/EAlUWK8yH_xfsBcpdu7e_) - 外呼 SDR，逐条验证线索，再发 Instagram 私信和邮件推高客单价产品。 [Mauricio](https://x.com/MGallmur).
- [hire-bot](https://x.ai/bot/Q9Vbc3gbldDnJBmUfcip-) - 管招聘文书半边，从候选人笔记到 offer 信。 [xsubwayratx](https://x.com/xsubwayratx).
- [Icebreaker](https://x.ai/bot/62_FP-LQ4OOq4uTevKlUP) - 找 AI 信任与安全岗位时的求职搭档。 [amberdawn1786](https://x.com/amberdawn1786).
- [Influencer Marketing Deal Desk](https://x.ai/bot/j4jkqrRiTmFz64aiAWFgx) - 品牌合作回信前，帮你估报价与合作结构，只起草不代发. [itsmattreichard](https://x.com/itsmattreichard).
- [InsightfulPipe](https://x.ai/bot/vYIAB3Z6V8gEERewymcw1) - 广告、SEO、社媒和 Shopify 的营销台，接 InsightfulPipe 活数据。 [insightfulpipe](https://x.com/insightfulpipe).
- [Internship Finder](https://x.ai/bot/YTNSFtHdol3LvuZeAmcXZ) - 找靠谱实习，并起草简短个性化外联邮件。 [mnt_rushmore](https://x.com/mnt_rushmore).
- [John Wick](https://x.ai/bot/_OlL8LPI6lc2xi82F4Gf7) - 摸清目标公司，一路往上找到能拍板的人。 [Liam](https://x.com/liam_fallen).
- [Jordan Belfort](https://x.ai/bot/fh1hnF7YJVoSJxEu-vKwj) - 高能销售收单手，起草话术和跟进。 [liam_fallen](https://x.com/liam_fallen).
- [Know Enemy](https://x.ai/bot/LREkas8UxVGvPJ5NiO7bz) - 只根据已经公开的材料，持续盯你点名的对手。 [SaaSocalypse](https://x.com/SaaSocalypse).
- [LinkedIn Desk](https://x.ai/bot/tQuoQ94ErUfXNJu4xPqZi) - 每天按你定的规则审核 LinkedIn 邀请。 [AJ](https://x.com/SEO).
- [Linkedin Leads](https://x.ai/bot/-BdTEtBnZEq9K1ef-bn6W) - 每天按你的关键词扫 LinkedIn 帖子和评论找线索。 [Angel](https://x.com/angelesp).
- [LinkedinOutreach](https://x.ai/bot/qFHGsPu6CGtrug6Lm78rJ) - 在 LinkedIn 上找人并筛选，再排好浏览、加好友和私信。 [myphonely](https://x.com/myphonely).
- [Mail Agency Outreach Sniper](https://x.ai/bot/QCYjr5VyQAoDTywMogJbU) - 把 LinkedIn 互动收成可核验工作邮箱和个性化开场。 [RealtimeUK](https://x.com/RealtimeUK).
- [Mappy (Talent Map)](https://x.ai/bot/spIXb6rwPJq_iFlu1L-_l) - 把目标公司里现在在职的人图画出来。 [NickRoman](https://x.com/NickRoman).
- [Marketplace Bot](https://x.ai/bot/9ptyasfHm8ehbIDsLizs-) - 给二手货定价写文案，并同步发到三个售卖应用。 [mentalmodality](https://x.com/mentalmodality).
- [MyPhonely Phone Driver](https://x.ai/bot/00LpQytGgJbn3KTdUJREV) - 经 MyPhonely 遥控真机做外联，凭证不放云电脑。 [myphonely](https://x.com/myphonely).
- [Nikita Bier](https://x.ai/bot/m0wqg4OfsKBO6aKi93vCV) - 用分享环路压测产品。告诉你别人会不会转给朋友，砍掉多余，给出本周能上的一个改动。 Jacob.
- [OpenSEO](https://x.ai/bot/8yZv2AeUvBcOFoFRVZfhU) - 做关键词、竞品、站点审计、本地 SEO 和内容简报。 [BlissNomad](https://x.com/BlissNomad).
- [PG](https://x.ai/bot/fcJJMM58AdXSTBdW3xWyW) - 研究目标客户，从播客里挖真正能开口的钩子。 [Krista](https://x.com/kristaletz).
- [PG Bot](https://x.ai/bot/zsxwic_IlmyavESnhLiWZ) - AE 辖区管道 Bot，管账簿级外联、会议和潜在 ARR。 [scottxmetcalf](https://x.com/scottxmetcalf).
- [PhoneZero Operator](https://x.ai/bot/vB2o6vvmHjDQRM5yFH9vn) - 让你的 Bot 能打也能接真正的电话。 [ibelevy](https://x.com/ibelevy).
- [Post Call Assistant](https://x.ai/bot/xF12c5y4LVe7nf7IFguWI) - 每次会后放下待办和一封跟进草稿。 [Priya](https://x.com/itspriyaptl).
- [Prospecting Sheet Builder](https://x.ai/bot/3Peagz3nzagjBRFhjrENd) - 醒来就有一份筛过的 B2B 客户表。 [thekuchh](https://x.com/thekuchh).
- [Ralph](https://x.ai/bot/NQQjXITgX9V7WjaDh9Vzb) - 把简历改成能点开演示的活作品集。 [HouseHackerJon](https://x.com/HouseHackerJon).
- [Revenue Enablement Bot](https://x.ai/bot/LlldYnfUbSX5Z5ogLkHik) - 赋能问题的统一入口，再路由到对的专项技能。 [nathanclark_](https://x.com/nathanclark_).
- [Revenue Signal Radar](https://x.ai/bot/9BnpveyF3fbsRRtolSWpp) - 找出已经躺在 HubSpot 管道里的收入机会。 [ericosiu](https://x.com/ericosiu).
- [Robauto Website Growth Agent](https://x.ai/bot/7k0TLQBu4hPI5oE3ywRHU) - 按机器可读标准给品牌站打分，并一次只推一小步改法。 [RobautoAI](https://x.com/RobautoAI).
- [SaaSbot](https://x.ai/bot/X6RbSbeyLvQ_I5k3zU4IM) - 工作日操盘手，获客、外呼、质检和入职一起跑。 [Daniel](https://x.com/danielfoch).
- [Sales Orchestrator](https://x.ai/bot/AMFF7LG8gxX1bLIH-_D3A) - 在销售机器人群里挡第一线，只放一个专家接每条请求。 [idleshubh](https://x.com/idleshubh).
- [SE call bot](https://x.ai/bot/9wmmsO_xoeLPeGEqjWLzE) - 售前工程师客户通话时的现场备份。 [scottxmetcalf](https://x.com/scottxmetcalf).
- [SEOAgent](https://x.ai/bot/scYgD9jdFhooaSHihRzy7) - 自主 SEO 工程师，在站点仓库里拉起 SEOAgent，冲自然流量。 [SEOAgent_](https://x.com/SEOAgent_).
- [Talent Matchmaker](https://x.ai/bot/l8p6rXw-lalL-UNiHySnJ) - 把找工作的人配到你收件箱里藏着的岗位。 [lennysan](https://x.com/lennysan).
- [Website agency lead scout](https://x.ai/bot/FBSTEPfTxj7ekvSml-nUJ) - 每天早上交出五家需要新网站、已经筛过的商家。 [Josh](https://x.com/joshkim).
- [YR Mailchimp](https://x.ai/bot/lcGQv8_I7UvJEWs3833LR) - 在 Mailchimp 起草青年共和党俱乐部月度邮件和会议提醒。 [BastropYR](https://x.com/BastropYR).

## Finance & ops

- [AIUsageBot](https://x.ai/bot/2atUDeldi9vF1R_ySRgCo) - 跟踪每份 AI 订阅你真正用了多少。 [Brian](https://x.com/BrianDEvans).
- [Albert](https://x.ai/bot/jtFHKaEKzEZ0zSDVCl6BP) - 把各地警察工会合同里的薪酬福利抽出来，做成对照表。 [Skyler_Miller56](https://x.com/Skyler_Miller56).
- [Appeal Desk](https://x.ai/bot/yOiPm69HN5FujdkvvysF9) - 把拒付信和费用明细收成申诉材料，计划文件只当数据不当地令。 [MSaintjour](https://x.com/MSaintjour).
- [Arnold](https://x.ai/bot/ymoMdfvzdErOrclxCOaC_) - 盯着 Cursor 用量花钱，该省时把 agent 换成更便宜的模型。 [Kelseyshuo](https://x.com/Kelseyshuo).
- [Beatrix Kiddo](https://x.ai/bot/z4Chp77wqP5ASkBKpxOOk) - 盯着物流，包裹一停就提醒你。 [liam_fallen](https://x.com/liam_fallen).
- [Blair (Personal Shopper)](https://x.ai/bot/BAbHIps4VA0Hr4GLIOJme) - 私人买手，找二手设计师单品，还能下单。 [jediahkatz](https://x.com/jediahkatz).
- [BOTOSHI](https://x.ai/bot/29XazZFrrsJyI8LUnExDD) - 零 ETH 的 BOTCOIN 挖矿装置，带新矿工上手。 [BOTCOIN](https://x.com/MineBotcoin).
- [Bounty Hunter](https://x.ai/bot/gCWYD009F66A3XDEYdZgf) - 翻邮件和账单，找你从没追过的退款和额度。 [Liam](https://x.com/liam_fallen).
- [Chained Oblivion](https://x.ai/bot/Loekv1uecl26wWW0lNyfR) - 找出你还在付钱却没人用的软件。 [mjjefford](https://x.com/mjjefford).
- [Compute Spread](https://x.ai/bot/E3h1YsfGofjdYbHLPXjY1) - 优先走连接器和 API，少点页面，把算力花在干净路径上。 [SamE1311025](https://x.com/SamE1311025).
- [Cost Optimizer](https://x.ai/bot/-CjM4_uRs6sEGdfZfC5gv) - 在你的智能体栈里找出同样结果更省钱的路径。 [MadeItHappenX](https://x.com/MadeItHappenX).
- [Cost-Smart Health Brief](https://x.ai/bot/Rm6VqcE8cOWXwotPth9qM) - 把一个健康问题收成三分钟简报。 [GuleidAmina](https://x.com/GuleidAmina).
- [Credit Card Max](https://x.ai/bot/D831qeIZ5QrobdVh-X79U) - 告诉你这笔该刷哪张卡，积分和权益才最大。 [trevin](https://x.com/trevin).
- [DaddyBot](https://x.ai/bot/MxbnEzdSvTZ-q3CDieMoc) - 从队列里每天跑三次免费 GoDaddy 域名估价。 [domainerdan](https://x.com/domainerdan).
- [DeckLens (Pitch Deck Analyzer)](https://x.ai/bot/KlcxAG1I8cMQoqS_8Hrdn) - 先访谈你做出评分表，再按它给路演材料打分。 [BrianDEvans](https://x.com/BrianDEvans).
- [Denial Desk](https://x.ai/bot/EgfoyJEx7bfDiHlZUwr3P) - 读医疗拒付信和拒付码，再拼出一套申诉材料。 [Andrew51786](https://x.com/Andrew51786).
- [Domain Tracker](https://x.ai/bot/SwaSdg0XhIa_IliAWggYE) - 盯着你已持有的域名，也盯着还想入手的那些。 [sdrth](https://x.com/sdrth).
- [Early-Stage Funding Scout](https://x.ai/bot/1AFXHf0OtQ-J4-eP5wgC5) - 帮创始人找加速器和种子轮，并提醒申请窗口。 [neslyio](https://x.com/neslyio).
- [Earnings Desk](https://x.ai/bot/vEyqj8oJwHAb0NjdhWJSz) - 做编号、不吹的财报一页纸，再盯一份股票名单。盯着的名字出数就写一篇。 [Sachiv](https://x.com/SachivM99).
- [Fenrir (Paper Trading)](https://x.ai/bot/FReKiR82_-lF359lhshpR) - 在 NSE 或纳斯达克上跑模拟交易赛。 [shantanugoel](https://x.com/shantanugoel).
- [Fixer (Liam)](https://x.ai/bot/CEtFUY1_kkn78AJSNINHI) - 把你一直拖着的行政活丢给它，它会差不多办妥。 [liam_fallen](https://x.com/liam_fallen).
- [Freelance manager](https://x.ai/bot/nVbIdGSLO4i-QU183t7Sg) - 替独立接案人追提案、发票和里程碑。 [Josh](https://x.com/joshkim).
- [Gerente Ops](https://x.ai/bot/-0F1AbQupf4CTqCfYcVcJ) - 西班牙语后台经理，管日结、账本、库存和上架。 [JASCPROVZ](https://x.com/JASCPROVZ).
- [Grant Packet Assembler](https://x.ai/bot/kbP2DWs6cKSWqeRtQhIef) - 按佐治亚州项目要求起草合规申报包，只写稿不提交。 [OmgawdMadeit](https://x.com/OmgawdMadeit).
- [Grokleros](https://x.ai/bot/vsCDaIn2Od_BkfWp0Vehm) - 全天候的 Kleros V2 陪审员，先看证据像素，再用 AgentKit 投票。 [JayBuidl](https://x.com/JayBuidl).
- [InsiderMillions](https://x.ai/bot/yaix3I-36pEloG1XpLVOb) - 高管和大股东百万以上买入的短简报，不是投资建议。 [rmarwah](https://x.com/rmarwah).
- [Investor Bot](https://x.ai/bot/UWNGpcghM9H79JCb4of5Q) - 管一小本券商账户的波段交易，止损写死，告警尽量安静。 [MadeItHappenX](https://x.com/MadeItHappenX).
- [Invoice Hunter](https://x.ai/bot/-kO6HrXokJZANVwUOMZO9) - 从 Gmail 里找出发票 PDF，把一个月打成一份表格。 [Andrej](https://x.com/scheemunai).
- [Lease Finder](https://x.ai/bot/_A_AZayMmSNuN_-sdq_M1) - 全国找当前汽车租赁优惠，盯对标价折扣最深的。 [dannymacias](https://x.com/dannymacias).
- [Medical Bill Review](https://x.ai/bot/M9c2tC_-mwY8XNTmSbkUY) - 对照公开的保护条款看明细账单，起草争议信给你自己发。 [MSaintjour](https://x.com/MSaintjour).
- [Milybot](https://x.ai/bot/vcOZX9RVPatQMVCinCVY_) - 查澳大利亚公司档案，并帮你接上 Milypay。 [1Milysec](https://x.com/1Milysec).
- [Money Maker Bot](https://x.ai/bot/KfiGbaCO0HLqoRfwi4V2H) - 找合法赚钱办法。第一次运行会装 agentself 并建钱包，然后再找机会。 [Michael](https://x.com/mbhound).
- [Mr. Dufrain](https://x.ai/bot/aBkdS0Duc24Hz7MvNm7W5) - 盯个人账本进出，在扣款落地前提醒你挪钱。 [zilarwitch](https://x.com/zilarwitch).
- [OweNo](https://x.ai/bot/gDBMpvw8W4H3KqliukLty) - 还债教练，先看账单，银行操作要你点头才开。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Payday Pilot](https://x.ai/bot/xFWEqzh1pZnYL6DiZwYYN) - 现金底线教练，盯着余额发薪前别跌破底线。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [point peddler](https://x.ai/bot/PFD95widaEeqjkYLLUZmD) - 积分出行大脑，把点数怎么花算明白。 [poteto](https://x.com/poteto).
- [porshe](https://x.ai/bot/BXDRX1jaURkI4Tx70zLg6) - 找出你已经该收、却还没去要的钱。 [Lauren](https://x.com/poteto).
- [Precog wARS](https://x.ai/bot/7M8RpppF2AistbVbeEPyN) - 用西班牙语读 Precog 预测市场赔率，从不下单。 [ferminrp](https://x.com/ferminrp).
- [Quote Collector](https://x.ai/bot/FI36ngq3zTUOFQrYc-XQX) - 为指定的一件活，向本地工匠收可比报价。 [liam_fallen](https://x.com/liam_fallen).
- [Ramp](https://x.ai/bot/zMMAByt3oW_t2ua1NZa9X) - 在工作邮箱里找远程用餐小票，并挂到对应的 Ramp 报销单. [scottxmetcalf](https://x.com/scottxmetcalf).
- [Reaper](https://x.ai/bot/Gd-cqXG8xG_RPmKGixa73) - 找出该砍掉的订阅、会议和流程。 [Liam](https://x.com/liam_fallen).
- [Renewals Invoice Bot](https://x.ai/bot/-9hlUkQbsgE7oUyQvUPum) - 在周预算内付已知续费，新账单先问你再动。 [compileinstyle](https://x.com/compileinstyle).
- [Returns & Warranties](https://x.ai/bot/HmUpwJbVbgLEGisEj0FPt) - 在退货、退款或保修窗口关掉前提醒你。 [Liam](https://x.com/liam_fallen).
- [RevenueDog](https://x.ai/bot/IDFtkYcsl7MpfdfTx09RT) - 早上醒来就有昨天的订阅数字，外加一条值得试的改进。 [Lex](https://x.com/lexrus).
- [RewardsMaxxing](https://x.ai/bot/upsD2c_qFmh6n4biksRvi) - 每笔消费刷回报最高的那张卡。 [ishuagra02](https://x.com/ishuagra02).
- [Rockman](https://x.ai/bot/g3NyqeycJ7qhTlcBNV8Mo) - 先核对装备规格，再告诉你该买什么。 [0xJONZE](https://x.com/0xJONZE).
- [Senior Analyst](https://x.ai/bot/Q2xW8BIDffTjbDVXZYZhV) - 把财务报表图片识别进表格并写出带出处的备忘。 [tobias_pfuetze](https://x.com/tobias_pfuetze).
- [Serenity 티커 알림](https://x.ai/bot/ZYVnoJMU4earifCeQzJdQ) - 每十五分钟经 FxTwitter 盯 Serenity 相关讨论。 [Krongggggg](https://x.com/Krongggggg).
- [Settled](https://x.ai/bot/KcyJHCgCu7nrrPXYxs1b4) - 记账饭局旅行和打车谁欠谁，再起草一条不尴尬的催款。 [TuracTheThinker](https://x.com/TuracTheThinker).
- [Shitcoin Bot](https://x.ai/bot/FZ2y08eidLg4yvW5ygz01) - 用你亏得起的一小笔 USDC 在 Coinbase 做有规则的山寨币交易。 [mikepat711](https://x.com/mikepat711).
- [ShopBot](https://x.ai/bot/rBXWgythSa09pIp14rnV4) - 搜 Shopify 目录、找优惠券，再挑最合适的卡。 [shubgaur](https://x.com/shubgaur).
- [Shopper](https://x.ai/bot/h5CE1r5-LDWHacnuRuuOW) - 在官方店里找正品，把购物车推到结账。 [FranciscoKemeny](https://x.com/FranciscoKemeny).
- [Sterling](https://x.ai/bot/WNJl5y33yqdOp3CnhR4-k) - 低调的理财搭子，盯着账户余额，但不替你动手。 [FSD](https://x.com/jchybow).
- [Stitchy (Personal Stylist)](https://x.ai/bot/P-8iKYx3Eeq3pelx_UPHq) - 每天早上给一套新穿搭，夜里帮你淘便宜货。 [Mitch_Sweigart](https://x.com/Mitch_Sweigart).
- [SubCut](https://x.ai/bot/MzuJZpvaIK2KpexUVY-V0) - 翻你的邮箱，揪出在悄悄扣费的订阅，并指名该砍哪些。 [Finiti](https://x.com/tahaabuilds).
- [Subrotate](https://x.ai/bot/Uo1B3L6OhucZtpbxhTD2S) - 管个人订阅轮换，分清在用、停用和每月大概花多少。 [TuracTheThinker](https://x.com/TuracTheThinker).
- [SumoSign](https://x.ai/bot/Uicr9Dc3FKOmsMfbN_NHB) - 从聊天里把文件送到真人签字。 [SumoSign](https://x.com/SumoSign).
- [t2000](https://x.ai/bot/eXQt5VUovcU0HMj_b-CDY) - t2000.ai 市场运营手，用 USDC 赚钱、雇人、结算和卖货。 [funkii](https://x.com/funkii).
- [Table Money](https://x.ai/bot/abfx0_FhJ8G_mue5YWQxM) - 把没结清的发票和退款找出来，起草跟进信但不代发。 [Andrew51786](https://x.com/Andrew51786).
- [Taxx](https://x.ai/bot/-A5GzkqCGxtedkKF_I9CK) - 估算 2025 和 2026 年美国联邦所得税，不当 CPA。 [RyanGBsystems](https://x.com/RyanGBsystems).
- [The Bitcoin Layer](https://x.ai/bot/LS2cnDAX30vNkWNb1Rv_7) - 只在 The Bitcoin Layer 的 Pulse 指标拐头时提醒你。 [Tferriere](https://x.com/Tferriere).
- [Theta Vantage Desk](https://x.ai/bot/YbX8HTAePBjwpwP05CVJS) - 期权简报台，单只标的的 gamma、资金流和波动率。 [Joe](https://x.com/ThetaVantage).
- [thrift](https://x.ai/bot/3hFbbjddl7VpY2oRACKBB) - 审计你养着的一堆 Bot，砍掉空转的 token 开销。 [kleosrr](https://x.com/kleosrr).
- [Throttle · Token Officer](https://x.ai/bot/9-VBOKZkj7_QZoKDuZWIP) - 盯着一队 Grok Bot 的 token 消耗和空转循环，短报告提醒你。 [james_ailton](https://x.com/james_ailton).
- [Ticker Wire](https://x.ai/bot/OA53XZkeW0g0HZEOim6iV) - 盯股票和加密货币公告与新闻，不给交易建议。 [CitiZenSleuthX](https://x.com/CitiZenSleuthX).
- [Token](https://x.ai/bot/2Nk6nQTahTex1e5gHS_LU) - 给舰队里每个 Bot 设用量上限，盯住哪只在烧钱。 [jsk333](https://x.com/jsk333).
- [Token Accountant](https://x.ai/bot/zdnVIfLkNmRwZqqogojuc) - 盯着每周模型花销，额度见底前提早喊你。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Token Cop](https://x.ai/bot/Ml4ynlD6O1VT5CoYmFnEa) - 管各代理的代币花销，并给出省用量建议。 [scottxmetcalf](https://x.com/scottxmetcalf).
- [Token Maxxing](https://x.ai/bot/f6srhE3vkMevccaw8DLPf) - 分配构建路径，让 Bot、Build 和 Cursor 额度别先被掏空。 [iggynore](https://x.com/iggynore).
- [Token Officer](https://x.ai/bot/1NG6WfAiS1HHhLdUcBQwP) - 审计一队机器人里重叠的定时活和绕圈对话，点名白烧的 token。 [from_glasses](https://x.com/from_glasses).
- [Trading](https://x.ai/bot/XW2DibYh5BRunhH_f373u) - 新闻驱动的日内交易 Bot，接实盘账户，单票重仓。风险极高，先读代码。 [Travis](https://x.com/TravisWeathers).
- [travel guru](https://x.ai/bot/r5R9X50NdzRZBPcBQAnhP) - 按你家机场、积分和会籍来排积分出行。 [congressdj](https://x.com/congressdj).
- [Tray](https://x.ai/bot/KDGstUb-ZOovXP6p_v0nO) - Trade-with-Tray 交易工作台。 [Ortix008](https://x.com/Ortix008).
- [Usage Watch](https://x.ai/bot/Q6-oQnCZVNLOwdzEw5i-j) - 盯 Grok Bot 与 Cursor 花费对照日上限，点名烧钱习惯。 [compileinstyle](https://x.com/compileinstyle).
- [Volt](https://x.ai/bot/QZ6VW1zRJTb4ZY5DNk5pm) - 在你所在地找最便宜的 Tesla 租赁或购车方案。 [benngarnish](https://x.com/benngarnish).
- [Wall Street](https://x.ai/bot/0qNgH0mv4-N-gv_KkZbEm) - 做一本假想交易账，记下盈亏，从不真下单。 [CoonInvestments](https://x.com/CoonInvestments).
- [Watchdog](https://x.ai/bot/PuAEE57P58Df5zskFY3pg) - 每周扫收件箱，盯续订、收据和快到期的试用。 [SmoresBoy](https://x.com/jxckvibe).
- [x402 Marketplace Operator](https://x.ai/bot/gC5Kmx6p0ALPtnN7W6Xou) - 把技能和 Grok Bot 打成上架文件，从不签名或付款。 [OmgawdMadeit](https://x.com/OmgawdMadeit).
- [YieldSentinel A2H](https://x.ai/bot/RFXogCwTbb2mUODW6rfVe) - 你下手前，按你定的规则核一笔 DeFi 收益仓。 [MyEnsNames](https://x.com/MyEnsNames).
- [부업봇](https://x.ai/bot/g17AUEbD0Oo-5b1HDpuQB) - 验证需求、做数字商品并上架曝光，不做明显卖不掉的动作。 [BBBang9900](https://x.com/BBBang9900).
- [코인봇](https://x.ai/bot/ucu-nI-yeCdPeDp4cpL4X) - 在 Bithumb 优先做主流币，少交易、设盈亏带，五分钟看一次仓位。 [BBBang9900](https://x.com/BBBang9900).
- [人生·财务](https://x.ai/bot/haSA0Ru28CYKDm2V5tPRB) - 口头记一笔花销就能入账，夜里有摘要，月底再回看。 [KinGao476942](https://x.com/KinGao476942).
- [旅行手配エージェント](https://x.ai/bot/uvX1KHZ67D_AZQogYxR8-) - 比较便宜又省事的路线，再订机票、铁路和酒店。 [kinopee_ai](https://x.com/kinopee_ai).
- [登記とりよせ](https://x.ai/bot/WAQAF0bSQTRrrTb1q-J9Y) - 一步步带你申请日本公司登记簿誊本。 [sat0xshi](https://x.com/sat0xshi).
- [薅羊毛 (Wool Radar)](https://x.ai/bot/WFW6_5N596TQpWCRjRZ5w) - 只盯你真会买的东西和订阅优惠，没合适的就闭嘴. [BenXlab](https://x.com/BenXlab).
- [토스 증권 주식 투자봇](https://x.ai/bot/znMFERdq0zEC74735Szxm) - Toss 证券 Open API，看韩美报价，下单要同时给定代码和数量。 [brandonchung75](https://x.com/brandonchung75).

## Content & publishing

- [4 Panez](https://x.ai/bot/91R37-rUOh9sS1tZkIF9d) - 把一个场景创意铺成宽幅全景，再切成四张可滑动的分格。 [Knock](https://x.com/SuddenlyJon).
- [AdaptlyPost](https://x.ai/bot/1GpK7CoPs4e_M__9rb3uR) - 一个 Bot 写稿、排队，发到九个社交网络。 [Taras](https://x.com/tarasshyn).
- [Ads Operator](https://x.ai/bot/zj8VKu1CnqkHCM4Na1zex) - 给本地工匠做出能直接投放的搜索和社交广告计划。 [Tyler](https://x.com/wells1226).
- [AEO Content Producer](https://x.ai/bot/WEqsULsog0KJUFUbhIRXH) - 按你在 AI 回答里的曝光数据，排改写计划和冲引用的新稿。 [Jingg_n_Tonic](https://x.com/Jingg_n_Tonic).
- [AEO/SEO Bot](https://x.ai/bot/Jyx1Lg-VzYgyjDc-y-GQi) - 工作日流水线，选题排版并给搜索可见页面打分。 [eddiearc6](https://x.com/eddiearc6).
- [AI 视频专家](https://x.ai/bot/ES3LVns98INeXAoYwef_f) - 把一张照片做成一小段有情绪的短片。 [KinGao476942](https://x.com/KinGao476942).
- [AIO Specialist (AEO/GEO)](https://x.ai/bot/wOvqAFpr3o8VB3g4Tmpxr) - 把 AI 概览和回答引擎优化当成常驻项目来跑。 [mathiasnoyez](https://x.com/mathiasnoyez).
- [AMV Desk](https://x.ai/bot/CDEMagEwXls_3Aw3iTHCk) - 从分镜到成片审片链接的混合 AMV 工作室台面。 [littletechbird](https://x.com/littletechbird).
- [Arthur](https://x.ai/bot/fWJdoxdd8YsM1NNFP2b_W) - 给主题和适读年龄，写出一整本儿童图画书。 [LatchKeyLegend](https://x.com/LatchKeyLegend).
- [AvatarMaker](https://x.ai/bot/EfBhh8nwpuGD0XNfl0eBI) - 给个人资料和品牌生成头像，并反复改到满意。 [Andrew51786](https://x.com/Andrew51786).
- [Best Video Editor](https://x.ai/bot/Do4CujP_kqnnc1KYnpOfI) - 按你的素材规划整段剪辑，交出可审的成片。 [XFreeze](https://x.com/XFreeze).
- [blogdrafter](https://x.ai/bot/A6o9Z1NYSIRBX-VIoEcQi) - 从笔记起草和润色博客，靠你的写作档案保住本人语气。 [daisuke](https://x.com/daisuke).
- [Blunt](https://x.ai/bot/N0J32FbnVRuetJi1oJggh) - 贴一个落地页地址，收到资深营销人毫不客气的点评。 [Tal](https://x.com/Talsiach).
- [ChatPRD](https://x.ai/bot/36vKs2HSysdaJDe6OLD4w) - 产品经理，所有规格和调研文档都放在 ChatPRD 里。 [clairevo](https://x.com/clairevo).
- [Clip Bot](https://x.ai/bot/Vk0cnF2c364QxNv-Xip1M) - 从任意 YouTube 播客切出带字幕的横版高光。 [Lon](https://x.com/ThisWeeknAI).
- [ClipMaker](https://x.ai/bot/b986_CbfzB8jKLcU14LTi) - 从 YouTube 视频里剪出你要的那一段，并转成文字稿。 [Luigi](https://x.com/r40_io).
- [Clipper](https://x.ai/bot/ozEfaAFJMDGoB-ysym8_V) - 把视频切成短片和带字幕的动图，笑点它自己挑。 [thesoragirls](https://x.com/thesoragirls).
- [Content Growth Coach](https://x.ai/bot/sMmoqCElqRPj1RYbtngMr) - 告诉创作者先改哪一处，数字才会动。 [SmoresBoy](https://x.com/jxckvibe).
- [Content Writer](https://x.ai/bot/oAJ5mSjoFixBxMFbv9Olr) - 写界面上那些真正决定用户能不能把事办完的字。 [UCDOps](https://x.com/ucdco).
- [Copywriter](https://x.ai/bot/DlOMT_kOepSKYdB3P0YEv) - 把选好的选题写成轮播图的逐页文案和整条配文。 [Gabriel](https://x.com/adamuchigabriel).
- [dadprotech brand manager](https://x.ai/bot/F7rovUv9EumNAoj9vEAWm) - 每天给一条帖子和回复建议，用主人自己的口气。 [joshkim](https://x.com/joshkim).
- [dbs](https://x.ai/bot/l6H6WL7HF-CAwcvr1hBey) - 斜杠命令工具箱，管生意、内容和下一步干什么。 [Leechael](https://x.com/Leechael).
- [Demo Video](https://x.ai/bot/htSXUJUQlVr60m9L_unBa) - 录下正在跑的网页应用并交回带旁白字幕的演示片。 [KdJadeja911](https://x.com/KdJadeja911).
- [Engenheiro Audiovisual](https://x.ai/bot/w1pUFhCx2VCJgv8Yhvzu6) - 拿定稿的文案简报，产出轮播图和单图的视觉素材。 [Gabriel](https://x.com/adamuchigabriel).
- [Ezra](https://x.ai/bot/YlbxRlO-HM1TEC6l2YSM6) - 把讲道收成印尼语的小组笔记和完整教案。 [lapaksquare](https://x.com/lapaksquare).
- [facebook group scout](https://x.ai/bot/C7ZoMLPxEbFmu0-iAieFj) - 盯着你点名的 Facebook 小组，找值得回的帖。 [joshkim](https://x.com/joshkim).
- [figma bro](https://x.ai/bot/VHMdjIGjGpgDSJR7dW6Gz) - 在 Figma 里用真组件做设计而不是在外面截图空谈。 [johnbai](https://x.com/johnbai).
- [FreeBot Gen](https://x.ai/bot/Z9SkA7zeEf33Mn5SvfV5W) - 像装扮应用一样生成 freebots.lol World 角色。 [Toy_Maestro](https://x.com/Toy_Maestro).
- [Fridge $CIGS Meme Generator](https://x.ai/bot/RrZNfN062oERy27w3kGhR) - 把上传照片里的香烟换成无糖可乐罐，做成梗图. [FridgeCigsSol](https://x.com/FridgeCigsSol).
- [George](https://x.ai/bot/8vjjlI7z5W0HtpRcFQgJ4) - 一份简报变成一整套合品牌的创意物料。 [arni0x9053](https://x.com/arni0x9053).
- [Grok Deck](https://x.ai/bot/Ja9NzNTRz2ozzQLNfrJwI) - 把你的讲稿要点变成浏览器里能直接放的 HTML 幻灯片。 [Mai](https://x.com/MaiYangAI).
- [Grok for SEO, GEO, paid ads and Shopify](https://x.ai/bot/dep-tU0gmIPgiqNsvS4N4) - 在一个地方复盘广告、搜索和 Shopify 的表现。 [Dmitry](https://x.com/irabukht).
- [growth desk](https://x.ai/bot/YYCOE-YeGxnGLb4Mbv7dO) - 给一个 X 账号起草帖子和增长打法，从不自己发出。 [Av1dlive](https://x.com/Av1dlive).
- [Human Copywriter](https://x.ai/bot/JZAccYtlRFvDSU2CnMnkZ) - 把带着 AI 腔的草稿改成读起来像人写的。 [Massimo](https://x.com/massimodeluisa).
- [I'm not old yet](https://x.ai/bot/izlQpnudtxbmDRKr7GvRs) - 写梗图吐槽那些把你当老人推销的垃圾广告，不嘲讽收信人。 [AdventureNLearn](https://x.com/AdventureNLearn).
- [Icon](https://x.ai/bot/inke26gsycrB-4N4Z3vVE) - 把任意主题做成黏土风 3D Bot 头像。 [yriica](https://x.com/yriica).
- [illo](https://x.ai/bot/y3uTGY5hkl6iTmE-ZAX02) - 把想法和帖子做成吉祥物主导的配图。 [trevin](https://x.com/trevin).
- [Illy](https://x.ai/bot/umrsMy_xpJxZ8vTN5Qz0o) - 儿童故事书机器人搭档里负责插画的那一半。 [LatchKeyLegend](https://x.com/LatchKeyLegend).
- [Imogen (Alt Text)](https://x.ai/bot/9y2GcFkKMAUhYlMxRUS0X) - 你发的图它回一段干净、能直接复制的替代文本。 [kentcdodds](https://x.com/kentcdodds).
- [Index](https://x.ai/bot/Viv2NbC5skPslV1WH9Fs7) - 搜索和回答引擎优化队友，专门给写手出提纲。 [Adam](https://x.com/adamta).
- [Jester](https://x.ai/bot/9MGTLhR6dzLrr6AWd8U1f) - 按要求做出图片和视频梗。 [memelord](https://x.com/memelord).
- [jobs](https://x.ai/bot/LqFDQ8zlNLQqlFP_vvzs_) - 功能编辑，抛出几个锋利点子，也说该砍什么。 [poteto](https://x.com/poteto).
- [Johnny — Torche](https://x.ai/bot/ZltFPZiC6e3L1nkg9dfEM) - 用法语 Johnny 或 Torche 嗓音写可直接发的 X 帖，面向漫威粉。 [LeBrasierVolant](https://x.com/LeBrasierVolant).
- [KLO](https://x.ai/bot/yW-Q1yis7-VCNKbeJ6g6Z) - 从大量自然播放 TikTok 里抽情绪评论和选题方向。 [orenmeetsworld](https://x.com/orenmeetsworld).
- [koala](https://x.ai/bot/55VuCAFXxFDHyaGPU3Bxt) - 开发者产品上线时的获客助手。 [poteto](https://x.com/poteto).
- [Learn (Math & ML Video Teacher)](https://x.ai/bot/s5JszATSty0w-uDTw_NzK) - 从第一性原理做课，再渲成动画讲解。 [JeffreyLind](https://x.com/JeffreyLind).
- [Lennybot](https://x.ai/bot/VjbtJ_qTdzbhJGmXdvTIc) - 用 Lenny Rachitsky 自己的档案回答产品和增长问题。 [lennysan](https://x.com/lennysan).
- [Likeness](https://x.ai/bot/-h0DhS9ty87dr0UGXLjDD) - 用照片或片段锁住某个具体的人或动物，后面生成的图和视频还像他们。 [Knock](https://x.com/SuddenlyJon).
- [Lina](https://x.ai/bot/PZQY6T6sKxrzhuYsclwap) - 把每条 YouTube 上传当成一个必须兑现的承诺来策划。 [Gabriel](https://x.com/gabe_onchain).
- [LiveAvatar Launchpad](https://x.ai/bot/Kcjp2nuqqmLLo3SvDWKfk) - 一键打开现成的数字人演示，先看产品再决定要不要自己搭。 [TryLiveAvatar](https://x.com/TryLiveAvatar).
- [Lucy (creative companion)](https://x.ai/bot/4E6m-7mPfUHzLt_aIJ_5D) - 开放式创作伙伴，陪你做画、世界、诗和片子。 [princess414141](https://x.com/princess414141).
- [Lyric Guard](https://x.ai/bot/NCOULqxHrobWGWgAbQ-Er) - 按基督教聆听标准给歌词打 1 到 10 分。 [soundecclesia](https://x.com/soundecclesia).
- [Marketing Bot (CMO)](https://x.ai/bot/37ZOM10GzlSOQpMjRp7KB) - CMO Bot，把产品本身变成围着它转的营销。 [tymarsha](https://x.com/tymarsha).
- [Medium Writer](https://x.ai/bot/QdafnX9w3E0G7vqZsvs0o) - 按来源起草适合 Medium 的实操故事稿。 [ixdesigner](https://x.com/ixdesigner).
- [Meme King](https://x.ai/bot/zpd49S_sQMCx9QCTfN2wp) - 按当天 X 热度和新闻做静图和 GIF 梗图，早上再丢 3 到 5 张。自己不会发到 X。 [dogenorway](https://x.com/DogecoinNorway).
- [Minerador de conteúdo](https://x.ai/bot/ut8BUqwZlAthhIt8s7YNX) - 挖一整天的 AI 新闻，排出真正值得发帖的那几条。 [Gabriel](https://x.com/adamuchigabriel).
- [Mr. Laser](https://x.ai/bot/GU4KJSYtPZeiLf8ubPMXY) - 一个人激光雕刻店的项目负责人。 [RichSilver](https://x.com/RichSilver).
- [Music Video Release](https://x.ai/bot/vagsUEIt5s7lexKnSes2H) - 把成曲和歌词做成分镜时间表和可粘贴提示板，不拍不传。 [OmgawdMadeit](https://x.com/OmgawdMadeit).
- [MyApps Video Desk](https://x.ai/bot/vcQOLdM69Ffu3fZgiMclK) - 在 MyApps 里生成短片再用 ffmpeg 拼成一条。 [Sm0ken42O](https://x.com/Sm0ken42O).
- [Paddy](https://x.ai/bot/A42rzhad6J8lhYMOaQ20o) - 把整条 YouTube 视频当成一个承诺来打分。 [DavidCarbutt_](https://x.com/DavidCarbutt_).
- [Palette](https://x.ai/bot/yfrTgGSwB_DZNUxx0g05V) - 从任意参考照片里提出一套能直接用的四色配色。 [Michael](https://x.com/subforti).
- [pappu](https://x.ai/bot/_t_vyuhFM8ev2flbZoYnU) - 剪电影感短片，并诚实点评 GitHub 与技能清单后重写. [krisadipap](https://x.com/krisadipap).
- [Personal Brand Desk](https://x.ai/bot/DOBxYb_XLVEAlO6A1eZgU) - 回看你自己的爆款，整理出五条过审后的个人品牌草稿. [rlagos24](https://x.com/rlagos24).
- [Petty Bot](https://x.ai/bot/w-2dyvlWOnr9CAEotczW1) - 盯着关注列表，把默默取关的人都揪出来。 [ZryMiller](https://x.com/ZryMiller).
- [PolaBea](https://x.ai/bot/qYt504_yN3YBrxNhGaX7S) - 跑带标签的驾驶仿真，摄像头置信度低时会紧急停车. [krisadipap](https://x.com/krisadipap).
- [printerbot](https://x.ai/bot/nPwfPZq-OWf7_HDUH777R) - 给舰队里每个 Bot 做统一风格的 3D 角色肖像。 [viticci](https://x.com/viticci).
- [PromptMeme](https://x.ai/bot/PkziTZhwFzrUvMm3cqfeD) - 跑五阶段文明辩论，最后交出一条主梗图文案. [krisadipap](https://x.com/krisadipap).
- [Qubits Toy Bot](https://x.ai/bot/USVlMLTxHCex8XgcUQGfv) - 用 Qubits 积木拼出循环的三维结构。 [Toy_Maestro](https://x.com/Toy_Maestro).
- [Quotewise Daily](https://x.ai/bot/kmmBn74qwBr9lgedW4naf) - 每天给一条带出处的名言，还能帮你核对不确定的署名。 [quotewiser](https://x.com/quotewiser).
- [Ratio](https://x.ai/bot/q66LYouguOxJ0VclM2whr) - 发出前挑出会被截图反击的那一句，并给更稳的改法。 [DonBonStovi](https://x.com/DonBonStovi).
- [RedReplier](https://x.ai/bot/8aU6ly_uunnMabpybs3hB) - 找出正在聊你产品的人，按购买意向排序。 [Taras](https://x.com/tarasshyn).
- [RENTALS](https://x.ai/bot/JrnQAM0z-7SNI9UtIO3-Z) - 把 Facebook Marketplace 的租房线索从询价跟到带看。 [HandsomeHenry6](https://x.com/HandsomeHenry6).
- [repost X posts everywhere](https://x.ai/bot/fu6JIwhLoBvrxtaZik0RP) - 把每条新的 X 帖复制到你另外四个账号。 [jackfriks](https://x.com/jackfriks).
- [Rude Bot](https://x.ai/bot/7z0WNYmnERTnXKmxI12gB) - 极不客气的喜剧 Bot，嘲讽你的请求并拒绝帮忙。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Scout (Competitive Intelligence)](https://x.ai/bot/rthl9MdskO2f-JCzmyINP) - 盯对手网站、搜索排名和 AI 回答里的曝光。 [adamta](https://x.com/adamta).
- [Sharenow Feed Bot](https://x.ai/bot/oMU6GmI59Z1jtPUooMLLJ) - 每小时扫五个社交平台，再发布一块活看板。 [sharenow_today](https://x.com/sharenow_today).
- [Shorty](https://x.ai/bot/32fHIBw9Yz-s_o35KycGX) - 从已经跑通的长视频里切 YouTube Shorts。 [Farzad](https://x.com/farzyness).
- [Shotcraft](https://x.ai/bot/gdZdBNWdgW45IVVU8sv8F) - 从分镜到混音，给你的产品做出发布视频。 [Tferriere](https://x.com/Tferriere).
- [Showrunner](https://x.ai/bot/dLxcnhWxf9JyHIo_l8wJk) - 当音乐视频导演，给一小队专长机器人定风格和分镜。 [RedSpiceX](https://x.com/RedSpiceX).
- [Sitcom banger](https://x.ai/bot/h4suD8jA37Wsb7tS4giUO) - 先写剧本，再把点子做成情景喜剧式短片。 [altryne](https://x.com/altryne).
- [Site Audit](https://x.ai/bot/s6JVFYDIDMsCQMBeTcznW) - 一轮审完搜索、速度、无障碍、转化和结构化数据。 [Andrej](https://x.com/scheemunai).
- [Situation monitor](https://x.ai/bot/lkHayxdQjNzVVJIDh7qaF) - 把一周的 X 书签收成一条复盘帖草稿。 [ChaseMc67](https://x.com/ChaseMc67).
- [Social Media](https://x.ai/bot/4vmlCUGEy8sWSWsj2j5tz) - 把写好的帖子排队，按各地合适的时间点逐条推出去。 [Gabriel](https://x.com/adamuchigabriel).
- [Social Media by Eclincher](https://x.ai/bot/Xp5k82r21UvTani1ndv-b) - 跨社交网络排期发帖，并在一个收件箱里回复评论、私信和评价. [eclincher](https://x.com/eclincher).
- [Social Media GTM Bot](https://x.ai/bot/rwdXTWNa0eGPFzyTWlRKJ) - 给创始人当内容负责人，把内容循环发到 Instagram、TikTok、YouTube、X 和 LinkedIn。 [Antoine](https://x.com/Antoine).
- [Social Ops Bot](https://x.ai/bot/A5g9s0QB5zZtaOWZPoawT) - 清掉 X 关注里的死号，尽量不误伤真人。 [JoshuaRCook](https://x.com/JoshuaRCook).
- [socials](https://x.ai/bot/bjsbaj_a2ds2pQY1YiXqE) - 每小时侦察一次，递上能直接拍的短视频套件。 [ashen](https://x.com/ashen_one).
- [STEER](https://x.ai/bot/mhzjt-Pa01Ds8EJ0zJrcz) - 标出稿子里平淡的机器腔，然后改写成能读的句子。 [bfrench](https://x.com/bfrench).
- [Stellar Cartography](https://x.ai/bot/9Vr7JFrTz5PeW4bmFco2i) - 画飞船和舰艇，发布前强制再过一眼。 [schweitzer_wil](https://x.com/schweitzer_wil).
- [Twitter Automations](https://x.ai/bot/e5dNa8n9x4U93UHaCb5nS) - X 上的三套创作者自动化，回复触发私信、粉丝筛查、关注清单。 [NM](https://x.com/theadvisorbtc).
- [Universal Video Downloader](https://x.ai/bot/ny02y0VWgzWSSFlXgpWVZ) - 贴视频链接，从 X、Reels、YouTube、TikTok 等站点收回可播 MP4。 [ApexSMK](https://x.com/ApexSMK).
- [Video Clip](https://x.ai/bot/oOFMzoZv7OEKHO-XwXHWX) - 找到并下载官方视频片段，把文件和源链接一起交回。 [DogecoinNorway](https://x.com/DogecoinNorway).
- [Video Transcriber](https://x.ai/bot/wC622hEnAgGY5AHK9z205) - 把视频链接转成干净的文稿或字幕文件。 [reachhabib](https://x.com/reachhabib).
- [Vidmoat Bot](https://x.ai/bot/okQ3Ka19Qk1-zsxPyUnuc) - 经 MCP 在 Vidmoat 里剪片、预览和渲染，落成可编辑时间线。 [vidmoat](https://x.com/vidmoat).
- [Webby](https://x.ai/bot/Q2shbC8RRmoRleIyr5J33) - 管网站重建和看板，newsletter 也一直转着。 [Farzad](https://x.com/farzyness). 说明: [templates/webby](templates/webby/).
- [wing](https://x.ai/bot/7tQzGIL3WcHG8_Nt7CVwv) - 约会应用僚机，用你的口气起草开场和回复。 [poteto](https://x.com/poteto).
- [X Account Crew](https://x.ai/bot/CrFqfXIZibJ5DwLuJ89sp) - 五个专长一起扛你的 X 账号。 [thekuchh](https://x.com/thekuchh).
- [X Algo](https://x.ai/bot/W0LrVwNwsRHhFY4PG7586) - 告诉你现在该发帖、引用，还是先别动。 [UziObi](https://x.com/UziObi).
- [X High Coach](https://x.ai/bot/xSfBSprfKv5h909uzrv7W) - 审计任意公开 X 账号，告诉你该改什么。 [Hightv](https://x.com/Hightv).
- [X High Coach](https://x.ai/bot/EE8sm1OWmn3sZyaj3st_F) - 丢一个 X 用户名，拿到评分、健康预警、取关名单和更有力的改写。 [High](https://x.com/Hightv).
- [X Ops Expert](https://x.ai/bot/fePZGiWiTZP9n4BoKIlMY) - 给建造者做 X 增长运营，含日报、选题库，草稿需你确认再发. [mlangXie](https://x.com/mlangXie).
- [X Strategist](https://x.ai/bot/pjCwyZNSLk0ch8DUVoeKH) - 在 X 上玩长线，搞清楚谁值得认识。 [Sultanov](https://x.com/thekuchh).
- [X Top 100 Fans Weekly](https://x.ai/bot/HU7XArfGhUgLnzVcr7neB) - 每周排出和你帖子互动最多的一百人。 [Adam](https://x.com/AdamLowisz).
- [X Top 500 Fans (Monthly)](https://x.ai/bot/XzEATGwJNRvgsCLlcD9ox) - 每月排出你最大的五百名 X 支持者，存进私密名单。 [AdamLowisz](https://x.com/AdamLowisz).
- [みみ](https://x.ai/bot/msP4lEtyQNghyO-mqnXyR) - 以虚构角色「みみ」身份陪你闲聊。 [kabupoyo2023](https://x.com/kabupoyo2023).
- [产品推广交稿员](https://x.ai/bot/k_7pPRlHeZc2cku1zvVqr) - 按固定节奏交出可直接发的产品推广文案。 [zheng_yunh2429](https://x.com/zheng_yunh2429).
- [推特运营方法论](https://x.ai/bot/ScOhH1qaoq4XdoYhisagg) - 给 X 日更搭选题库、草稿、发布时段和复盘，发布键仍由你按. [KinGao476942](https://x.com/KinGao476942).
- [讲解视频调度台](https://x.ai/bot/OFLbKRObiwj-tH6BTVsMA) - 调度语音演示、PPT、虚拟形象和字幕对齐的 1080p 讲解片。 [dugujun12](https://x.com/dugujun12).
- [건축 숏폼 마스터](https://x.ai/bot/u3Jg9IbWLHl5m9NdHWOIR) - 把建筑或桥梁点子做成一支竖屏解说短视频。 [BBBang9900](https://x.com/BBBang9900).
- [전자책 마스터](https://x.ai/bot/KohlZdYO9sLAqEmLG7oko) - 按法规与官方依据，独自策划上架克梦电子书。 [BBBang9900](https://x.com/BBBang9900).
- [톨삼국지](https://x.ai/bot/IXID16RPXlKV6KHQCdmr7) - 每天画一幅三国人物或战场图，风格会轮换。 [enterjajayo](https://x.com/enterjajayo).

## Personal admin

- [2A](https://x.ai/bot/N9eJfkuupWb3EpWFt76va) - 美国持枪跨州出行规划，按州列明互认与携带规则。 [ChiefBeers](https://x.com/ChiefBeers).
- [Action Loop](https://x.ai/bot/py5cXgcAKPdEYsYK_AmcM) - 给那种发一次就停摆、总在等「准备好」的人。 [Sultanov](https://x.com/thekuchh).
- [Adie](https://x.ai/bot/-eXRDBTLTfHxNle9joQRN) - 温和的每日陪伴，帮难以下手的日常小事推进。 [TheDevilCloud](https://x.com/TheDevilCloud).
- [Adler](https://x.ai/bot/5HCe3lRaa5-c4c2RbA-LT) - 按阿德勒心理学帮你做决定。 [pardzz_](https://x.com/pardzz_).
- [Adventure Bot](https://x.ai/bot/sA0TXuMkDDSgBx52Z2D6f) - 按你空闲时长和心情，只给一个出门玩的地点. [SuddenlyJon](https://x.com/SuddenlyJon).
- [AI fitness coach](https://x.ai/bot/MlsEJVyRmdz7KP8qmlcBH) - 按你真实空闲时间和手头器械，写训练与饮食计划. [debs_obrien](https://x.com/debs_obrien).
- [Alexis’ Grail Scout](https://x.ai/bot/2asdeMXYDwlPREURnfCxn) - 在大拍卖行里找顶级未拆封复古卡带。 [joshkim](https://x.com/joshkim).
- [Appointment Finder](https://x.ai/bot/75K-dB4m30goo_PamA9nM) - 帮你找到最好的预约空档，不用再挨个打电话。 [Liam](https://x.com/liam_fallen).
- [Austen](https://x.ai/bot/c8sA8W1YcoRaYu5vjYFoa) - 用简·奥斯汀的社交智慧陪你谈礼仪、金钱和婚姻。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Austin Parent](https://x.ai/bot/7yCzCeGQTMD6oNKSPcFqj) - 给奥斯汀带娃的家庭当家务总管。 [Chad](https://x.com/ChadWittman).
- [Avi](https://x.ai/bot/2pewBd6QpttNiH52dyGhq) - 给私人飞行员看天气、航线和行程，安全优先。 [Doc_Polymath](https://x.com/Doc_Polymath).
- [Be Happier](https://x.ai/bot/0VC1XzREXRFGe0hVo-JEG) - 每周点出三件具体的、能让你更开心的事。 [Lenny](https://x.com/lennysan).
- [BeneBot](https://x.ai/bot/yu_bkwUfpHdqhF2Q1VhWn) - 用白话讲清你能领到的福利项目，帮你看懂该用哪一项. [SuddenlyJon](https://x.com/SuddenlyJon).
- [Better Call Claude](https://x.ai/bot/f7I5mP0uJf9brGIuK0ETo) - 免费帮你把法律问题归类定位，只做导读不做代理。 [freelegalforall](https://x.com/freelegalforall).
- [Billionairebot](https://x.ai/bot/jq-BFHkNoiJEtieswOYTc) - 告诉你该雇哪类人、大概花多少，把烦人的杂事外包掉。 [JeffreyLind](https://x.com/JeffreyLind).
- [ButterBot](https://x.ai/bot/h1tW8jfXzQIraT-_jNDjJ) - 每收到一条消息，就递一次黄油。 [Gabriele](https://x.com/GabrieleMonni).
- [Calibre](https://x.ai/bot/uaKyhDX_T3FY56jf6n4VL) - 在对话里用 Calibre 工具链互转电子书格式. [doitian](https://x.com/doitian).
- [CampusHire](https://x.ai/bot/pH5o2mSNpN7tJm_Jurj9Q) - 给 CS 学生盯校招实习，对照简历匹配 JD 并起草申请。 [kale243222](https://x.com/kale243222).
- [Canvas](https://x.ai/bot/YihRBqrXaDwRdjN79Uofl) - 从 Canvas 里把大学课程和截止日期拉出来。 [Dakkshin](https://x.com/daxperera).
- [Charge Maestro](https://x.ai/bot/29uyQjSrZ3dTb4Ctf7S3w) - 按剩下的光伏功率调电动车充电电流，先让 Powerwall 在高峰前充满。 [JOwens254](https://x.com/JOwens254).
- [Chef](https://x.ai/bot/3U6zxtPa1b8GbWheaIr4J) - 排好一周的饭，列采购清单，再把菜下单买齐。 [dogenorway](https://x.com/DogecoinNorway).
- [Cheffy](https://x.ai/bot/DDwA5gS_bZGlKKyHGcogB) - 两口之家的工作日晚饭计划，附带采购清单。 [metalmetta](https://x.com/metalmetta).
- [Chicken Joe](https://x.ai/bot/7f5AjmpjZkmTIsSybedYS) - 每天早上看北加州浪报和摄像头，告诉你该去哪家浪点。 [Parker](https://x.com/parker__conrad).
- [Chief (growth coach)](https://x.ai/bot/PIr44vmOtvynPX5Iym5Hx) - 每天一次安静打卡，一次只盯一个习惯。 [rafdotworks](https://x.com/rafdotworks).
- [Chief Health](https://x.ai/bot/6MHDA-LzErngNoRBaktLZ) - 每天签到，一次训练掉链子也能把整周计划拉回正轨。 [AJAC](https://x.com/AJA_Cortes).
- [Claim](https://x.ai/bot/P4vJbbduYSgknHsfaRE3I) - 每天早上在已登录的浏览器里领 MiniMax 签到积分。 [stewnight](https://x.com/stewnight).
- [Coach G](https://x.ai/bot/0VoMKg4bZbmfq3eUPchsS) - 读你手表或指环的数据，每天给你一份晨间身体简报。 [mikepat711](https://x.com/mikepat711).
- [coffee companion](https://x.ai/bot/SqO-_5207iInz0iDSAFVW) - 给每一袋新豆子算出冲法，并把冲煮记录写进 Notion。 [andymadrick](https://x.com/andymadrick).
- [Convert Flat PDF to Fillable Form](https://x.ai/bot/7_kjCPFrySCloHK-QS-hu) - 把扫描件和平的 PDF 变成可填表单。装完后接 Instafill.ai 连接器。 Oleksandr.
- [Convert X Money to Karma](https://x.ai/bot/iCn7r691OdtaB_o8MtHx_) - 把钱、代币和互动记成因果账，并沿版权链上浮百分之十水印。 [ludiofelix](https://x.com/ludiofelix).
- [Cooloff](https://x.ai/bot/Ysvr7-HMolKaXTWQZJeyo) - 先扣住愤怒、酒后或凌晨两点的短信，再给你一份冷静稿。 [TuracTheThinker](https://x.com/TuracTheThinker).
- [Copay Compass](https://x.ai/bot/ehxj2Wdxq9M04jvaAqyBD) - 帮你找抗癌药援助并备好申请材料。 [MSaintjour](https://x.com/MSaintjour).
- [Court](https://x.ai/bot/mA4Ik2mIduPANDqFVmVMX) - 把卡住的群聊读回去，点明其实已经定了什么。 [DonBonStovi](https://x.com/DonBonStovi).
- [Daily Easy Apply Digest](https://x.ai/bot/uVNOsoe-iWf4ZOUdfgo5R) - 每天早上给你一份一键可投的后端岗位短名单，并按简历匹配排序。 [HaseebMir91](https://x.com/HaseebMir91).
- [Dead Man's Bot](https://x.ai/bot/XCaz2bKzsJ4J1DmkaYyc4) - 只有你漏打卡时才会触发的预案开关，载荷由你事先装好。 [Knock](https://x.com/SuddenlyJon).
- [Deal Hunting](https://x.ai/bot/MGiEdMz0TNxBkvMgUZAbf) - 按落地成本比价，把运费和税算进去。 [Andrej](https://x.com/scheemunai).
- [Dean of Students](https://x.ai/bot/_hsyZUFgPzgxGxW2wIYAj) - 把一个孩子的学校事务收成一份整理好的待办。 [ErinnFL](https://x.com/ErinnFL).
- [Dickinson](https://x.ai/bot/UUZnEDx7jk_nNkkLJTvfo) - 用狄金森压缩的电压陪你谈死亡、敬畏和小小的永恒。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Discogs-Bot](https://x.ai/bot/m5Xjk7EhNokKF49YF9XuW) - 管 Discogs 收藏、想要清单和市场价。 [alexhawat](https://x.com/alexhawat).
- [Disney Ride Strategist](https://x.ai/bot/izE8-5f78ykATd43I5ROC) - 按你想坐的项目，排出沃尔特迪士尼世界的逐日计划。 [matthopkins_](https://x.com/matthopkins_).
- [DJ](https://x.ai/bot/PpGGgAaeRWkC4Poi29gLw) - 管 Spotify。排歌单、推新艺人、学口味，还能把车里、办公室这类外号对到设备。 [Trevin](https://x.com/trevin).
- [Doomstop](https://x.ai/bot/jf9aSLIL9YSU0ecC6zN6d) - 把屏幕时间收成一句真话日报和一条周模式，从不锁机。 [TuracTheThinker](https://x.com/TuracTheThinker).
- [Dostoyevsky](https://x.ai/bot/DR1LNk5p_M_7hv_wJfTPu) - 用陀思妥耶夫斯基的道德压力陪你谈忏悔、自由和罪责。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Easy Apply Queue](https://x.ai/bot/5RXN9P3CxnIIwgcmvVWEp) - 盯着一小时 LinkedIn 投递窗口，同一岗位绝不再抓第二次。 [HaseebMir91](https://x.com/HaseebMir91).
- [EG4 Monitor](https://x.ai/bot/9rxPP70OSzuTtTaOrzeqz) - 盯家里的 EG4 光伏和电池，故障早点报。 [Terry](https://x.com/look4terry).
- [Executive Coach](https://x.ai/bot/fAAHYFBe8xpTkBX1sbGBz) - 不停追问到你把真问题说出口，不塞现成框架。 [YanqingCheng](https://x.com/YanqingCheng).
- [Fantasy GM](https://x.ai/bot/vmQChAUGO26cUDqdSqYlH) - 在你已经在用的助手里，回答梦幻体育的阵容和对位问题。 [Tyler](https://x.com/TylerNishida).
- [Fantasy GM (blank slate)](https://x.ai/bot/uszqxwGlAmEQ_38nEcT5A) - 幻想橄榄球总经理，管选秀交易和阵容，来时并不认识你的联赛。 [TylerNishida](https://x.com/TylerNishida).
- [FireWatch](https://x.ai/bot/oWw62I6pd414i8xIO3azs) - 盯着你家附近的山火动态，有变化才开口。 [RobautoAI](https://x.com/RobautoAI).
- [Fishing Bot](https://x.ai/bot/EaX1UmhwVQWHQZ7beB8pI) - 告诉你某个湖里有什么鱼，该绑哪种饵。 [Brantley_Brum](https://x.com/Brantley_Brum).
- [Flights](https://x.ai/bot/xqinGTgeghdOyeYmzqO2m) - 比较往返机票价格，并盯着你关心的航线等降价. [truevis](https://x.com/truevis).
- [Flora](https://x.ai/bot/HC7kphHSxDzb639YlmI6O) - 记住你养的每一盆植物，快缺水了提前提醒。 [Rich](https://x.com/RichSilver).
- [Forja](https://x.ai/bot/me3Is7BBsCTobsgznOSps) - 把模糊野心收成一件可验收的动作，再盯着你做完。 [gezeeq](https://x.com/gezeeq).
- [Gamer Bro](https://x.ai/bot/YLpOBU1PEiDh2mwFMQeLk) - 盯游戏新闻与折扣，并在关注的货重新有货时提醒你. [egcbatt](https://x.com/egcbatt).
- [Golf Caddie](https://x.ai/bot/HAJavif4ssNOQku9JQsp-) - 周末球友的口袋高尔夫球童。 [Brantley_Brum](https://x.com/Brantley_Brum).
- [Grocery Bot](https://x.ai/bot/JY9Ly_AvMkR8iGuzJ7EJ1) - 按购物清单拼最便宜的 Instacart 车，结账前停下来给你看。 [austinwcap](https://x.com/austinwcap).
- [Grocery Cart Planner](https://x.ai/bot/Y7LbP6p5EBFjfdTp69cKr) - 按菜谱、常备和饮食预算，在 Instacart 上排出购物车。 [Elie](https://x.com/mvanhorn).
- [Grok Apps](https://x.ai/bot/7SzHEz6S0G4PVP3yIUcpE) - 在云电脑上找免费桌面软件并安装，还能录一小段演示。 [Toy_Maestro](https://x.com/Toy_Maestro).
- [Grok Customer Support](https://x.ai/bot/1PSI6qQln1PowM5reA_8L) - 替你在客服电话里排队等待。 [jakewlittle](https://x.com/jakewlittle).
- [Grok Customer Support (Brent)](https://x.ai/bot/BiZPnYmSfN63bjCVpn1mf) - Eggbot 精简版 Twilio 加 Grok Voice 桥，替你打客服电话。 [littletechbird](https://x.com/littletechbird).
- [Grokart](https://x.ai/bot/uhGYPStIOzvxNm8oWh3sG) - 说出你要买什么，拿回一份候选清单和结账链接。 [Luiz](https://x.com/lamorim_net).
- [Guide](https://x.ai/bot/TbFMZABkeH7gyIIGxjfdU) - 把已订机票酒店整理成能跟着走的逐日行程. [SuddenlyJon](https://x.com/SuddenlyJon).
- [Gym Bod](https://x.ai/bot/3mtiwFoZcEMq59w-49DMS) - 热门团课一开抢就帮你占到位子。 [peter](https://x.com/DrPB).
- [Habit Referee](https://x.ai/bot/1wZEbQUoQWsR3nKzd4x90) - 只盯着你定的那一个小习惯，别的不管。 [GrokBotGod](https://x.com/GrokBotGod).
- [Home Front](https://x.ai/bot/eREHCFAQlq8jS3P6bnNSL) - 盯着退伍军人家庭的 VA 预约索赔和能用的福利。 [Diego_F_Aguirre](https://x.com/Diego_F_Aguirre).
- [Home robots](https://x.ai/bot/3mf-UN4mGnCp8DbPBnW5u) - 在一个聊天窗口里控制割草机、扫地机和其他 Matter 家用机器人。 [Sawyer](https://x.com/SawyerMerritt). 说明: [templates/home-robots](templates/home-robots/).
- [Homeroom](https://x.ai/bot/IciOb-9jMtlkc1RJj6MQe) - 每晚用家长自己的学校门户拼出作业与活动看板。 [ahalvor](https://x.com/ahalvor).
- [Homework Checker](https://x.ai/bot/Mm_WhYXIjZ3xDNf3s3p91) - 工作日汇总学生缺交作业和成绩。 [Kevin](https://x.com/kevinace).
- [HouseBot](https://x.ai/bot/3ufXSXC-Z8OadVsV9yMLL) - 每十二小时扫六个房源站，找租房和买房。 [Shub](https://x.com/shubgaur).
- [Hybrid Half Trainer](https://x.ai/bot/rc9Bx4rypsPVuwdj2_zEf) - 按你的生活排半马训练，不只堆里程。 [emotor](https://x.com/emotor).
- [Interview Prep](https://x.ai/bot/4aTE8S1KT93GkqHYxWIo3) - 选一个主题和难度，陪你练到真的准备好。 [techdevnotes](https://x.com/techdevnotes).
- [It's Britney](https://x.ai/bot/pNLwpHs8rmtMzAkUi-Zu2) - 在一天里的整点时刻，随机发来 Britney Spears 的网络舞蹈片段。 [Hiten](https://x.com/hnshah).
- [Job applier](https://x.ai/bot/gfxH6sM_0QlxeDNFrRmep) - 读你的简历找合适岗位，批量写出不千篇一律的申请稿。 [aroogle](https://x.com/aroogle).
- [Job interview hunter](https://x.ai/bot/B_8a8ApckqZFiJwWRBf5u) - 按工作日节奏起草针对性申请和内推说明。 [Josh](https://x.com/joshkim).
- [Jobby](https://x.ai/bot/DYg0r1xvzy_xxPeRGHcHE) - 盯选定岗位和地区的招聘，只邮件推送新匹配。 [ixdesigner](https://x.com/ixdesigner).
- [Jobs](https://x.ai/bot/Nj02K7UYwyWfNvS8ws37q) - 产品教练，逼你说清切入点并守住那一个指标。 [luisefigueroa](https://x.com/luisefigueroa).
- [Join a Startup Bot](https://x.ai/bot/XJCoBm6z7qjAnt9ScG8i7) - 每天送来几条大板子上看不到的早期岗位。 [deysourav7091](https://x.com/deysourav7091).
- [Kafka](https://x.ai/bot/ewFkIRV929jhuW5mHqL_a) - 用卡夫卡在荒诞系统里的清醒陪你谈无罪名的罪责。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [KeyWire: Would You Rather: Collector](https://x.ai/bot/_qeZe0Y7621Wr8y6d7KBU) - KeyWire 的 Would You Rather 收集游戏，宝可梦、漫画、万智牌几条线。只玩游戏，不当理财建议。 [VonDoom](https://x.com/CryptoVonDoom).
- [Koe](https://x.ai/bot/2cfzlwUnOQtohmHiguKuc) - 一年战略思考计划，只给空结构步骤由你自己填。 [dannybuck](https://x.com/dannybuck).
- [Lazy Tom](https://x.ai/bot/YD0mAEdVZeEanyWTuY_vb) - 懒助手。只做最小有用的一步然后停。短回复，不加戏，不写代码。 duyet.
- [LetsMove Agent](https://x.ai/bot/4T3OhOtwYn4L3j_TpOaRL) - 先对齐国家片区偏好，再帮你找对口的房源。 [ixdesigner](https://x.com/ixdesigner).
- [LG Laundry Specialist](https://x.ai/bot/TNPSVnX4Dm-adBvHJbng7) - 用白话描述脏衣服，映射到 LG ThinQ 洗衣烘干程序并可开洗. [Bwilson](https://x.com/Bwilson).
- [Librarian](https://x.ai/bot/suKVjDAR-hSr_PTBxgdRw) - 拍下书架，生成可浏览的个人藏书站。 [ShaneMac](https://x.com/ShaneMac).
- [LinkedIn Watch](https://x.ai/bot/qbBlMjsKq-1coFvbmnEaR) - 定时扫 LinkedIn 动态、私信、邀请、访客和职位，收成一份摘要。 [AnnouncrFM](https://x.com/AnnouncrFM).
- [Local Deals](https://x.ai/bot/KmR5kmGnalq1b2nhCRXyo) - 每天捞本地市集上的便宜货，还能替你还价。 [Brandon](https://x.com/brandon_galang).
- [Lot Ghost](https://x.ai/bot/4iGFTf2xQ0UKp4mSgSnkI) - 盯乐迷圈的歌单、巡演掉票和每日传闻。 [bradszellman](https://x.com/bradszellman).
- [LRT Kelana Jaya Line](https://x.ai/bot/LLScxVm-la-ik4JJde3A1) - 马来西亚 LRT Kelana Jaya 线的出行帮手。 [shahrulestar](https://x.com/shahrulestar).
- [MacOS Disk Cleaner](https://x.ai/bot/Z0WBoK2sucsOAqAXRpRb8) - 按规则目录扫 Mac 磁盘，只删你点头的那些路径。 [MapachesAlexis](https://x.com/MapachesAlexis).
- [MacPowerTools](https://x.ai/bot/SktrYfnj1vy3eG90uQ971) - 先预演再清理 Mac 用户缓存、废纸篓和旧下载，不擅自删除. [krisadipap](https://x.com/krisadipap).
- [Magnum Seiba](https://x.ai/bot/1-UWhTw5N6IVgOcDZHrsb) - 在聊天窗口遥控 Tesla 的空调、充电、车锁和路线。 [Kamkom05](https://x.com/Kamkom05).
- [Maskoff](https://x.ai/bot/39x_3B9P5HBl-MpK1xGzP) - 筛一遍刚私信你的陌生人，判断值不值得信。 [RyanGBsystems](https://x.com/RyanGBsystems).
- [Melissa](https://x.ai/bot/3foGoeh6ksDhD4jTxYjyE) - 按 1 型糖尿病的约束来带健身和饮食。 [Tobias](https://x.com/tpgoebel).
- [Memento](https://x.ai/bot/_xZZE41svJdcq2w6ZWJan) - 给 Grok Bot 加持久记忆，存在外部记忆库里。 [Mahesh](https://x.com/MaheshtheDev).
- [Morpheus](https://x.ai/bot/uv4r3mNUgymF11q0N3L7F) - 把你卡着的选项丢给它，它挑一个并替这个选择辩护。 [liam_fallen](https://x.com/liam_fallen).
- [My Krishna](https://x.ai/bot/Mf2MLqJRCmz8sSjFmYedG) - 用奎师那的口吻回答你的薄伽梵歌同伴。 [AKSHAYBHOPANI](https://x.com/AKSHAYBHOPANI).
- [My Vote For 2027](https://x.ai/bot/CHmLGnQyx6r8lkb3U8k9x) - 按五项加权标准给法国 2027 总统候选人打分。 [LeTerryBZH](https://x.com/LeTerryBZH).
- [Mystery Snack Agent](https://x.ai/bot/jEv8xhxlnSNp2KnQ9ciyP) - 每周五七点，门口出现一份意外甜点。 [nayli_ai](https://x.com/nayli_ai).
- [NB](https://x.ai/bot/qUCj1Kh-oJLaOToKzneyt) - 主动简短的通用助手，跨工具干活并把笔记收进 Notion。 [liuguihua123](https://x.com/liuguihua123).
- [Negotiator](https://x.ai/bot/gsA3R-R-IIA7x3qUkojCu) - 谈判前先带你过一遍。 [danizhu](https://x.com/danizhu).
- [NYC Parent](https://x.ai/bot/DiNI489Qte5ryNvZjOROb) - 打理纽约带娃的上学和课外活动后勤。 [Dennison](https://x.com/DennisonBertram).
- [OMNI Grok-Bot](https://x.ai/bot/HAIGA0nUYgv85CtV5SMWa) - One Mission 向的陪伴入口，工具不当王座并守隐私墙。 [omni_puzzler](https://x.com/omni_puzzler).
- [Onboarding Coach](https://x.ai/bot/OfZitBsJprif-DfsQKBUY) - 给刚接触 Grok Bot 的人带过第一个小时。 [tpgoebel](https://x.com/tpgoebel).
- [Online Identity Bot](https://x.ai/bot/4VEl6mp1QrsvvjTFR-qE_) - 每天查一遍搜索引擎里新冒出来的你的公开信息。 [gkamstra](https://x.com/gkamstra).
- [orders](https://x.ai/bot/0taQ6RZdkjsnOfda_A8Ie) - 把你在等的包裹、小票和退款收成一张个人台面。 [wafffls](https://x.com/wafffls).
- [Pain in the Task](https://x.ai/bot/yztAMds3EQ2J5OjG_tBgw) - 找出吃掉你一周的无聊活，再把它交出去。 [gambrill](https://x.com/gambrill).
- [Paperwork](https://x.ai/bot/mNN576TxXnc_XZu9aCsfr) - 看明白一份无聊文件到底是什么，以及你得拿它怎么办。 [Liam](https://x.com/liam_fallen).
- [Patch](https://x.ai/bot/mZM210IvFxqswc9eaLjQa) - 按你在英国的园子，给出对应季节的草坪和花境养护。 [Benn](https://x.com/benngarnish).
- [Period cycles Tracker](https://x.ai/bot/e-l7rGeYuc_cVuydcNvBc) - 记经期但不误算假开始，并预测下一周期和提前提醒。 [_lovablecurves](https://x.com/_lovablecurves).
- [Personal Assistant](https://x.ai/bot/OWj_0o4Ik2FffupfloOwe) - 把卡住的生活杂事收成一件立刻能做的事。 [gabe_onchain](https://x.com/gabe_onchain).
- [Personal Trainer](https://x.ai/bot/t9TIKE_igItEQd6tOyyRd) - 给单个学员做课间饮食和训练打卡，周末给教练一份周报。 [nathanglass](https://x.com/nathanglass).
- [Photo Curator](https://x.ai/bot/hig9j1KnpZyH6QQN-Af0Z) - 从一堆原片里挑出值得留的，再做一点轻修给你确认。 [jaharris13](https://x.com/jaharris13).
- [Pika Bot](https://x.ai/bot/FfGFlZLAQDyxhJwg2ZJlL) - 盯美国 Pokemon Center 店，等新品上架。 [CardCaptain](https://x.com/CardCaptain).
- [Poe](https://x.ai/bot/EcUpzABnh3MfZQTN7inmP) - 哥特文学搭子，半夜出谜题，也能帮你拆解眼前的谜。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Preach](https://x.ai/bot/ZFj_cKTrMTytrCKM9DFHk) - 每天一段经文加几句稳的鼓励，不当课程只做习惯。 [Ortix008](https://x.com/Ortix008).
- [Price Error Agent](https://x.ai/bot/cbULQqhzmOeeJ9GT2DX7L) - 盯澳大利亚大商店和出境机票上的标价错误。 [yoda_FDE](https://x.com/yoda_FDE).
- [Radar](https://x.ai/bot/2cB1nlHWzI7os1zaZ3kCg) - 盯着你所在城市的公开信息源，汇报附近正在发生的事。 [LatchKeyLegend](https://x.com/LatchKeyLegend).
- [Raven](https://x.ai/bot/hbzAWQX-CBMF2uAa00jEs) - 毒舌营养教练，文字或照片记一餐，估热量蛋白并对着目标累计。 [Josiah](https://x.com/dezmathio).
- [Realtor Bot](https://x.ai/bot/4wovVk-3n65GZSQnG_srx) - 帮买房租房的人搜房源，少一层中介话术。 [Brantley_Brum](https://x.com/Brantley_Brum).
- [Redact](https://x.ai/bot/Abz5txK3unOkm5ZxCGGX-) - 替你向数据经纪商提交删除申请，省掉按月订阅的清洗服务。 [PyRo1121](https://x.com/PyRo1121).
- [Replydebt](https://x.ai/bot/bJGTcDqC4fAEdbw2SuZqM) - 整理已读不回的对话，起草一两句重新开口的话。 [TuracTheThinker](https://x.com/TuracTheThinker).
- [Review This](https://x.ai/bot/g4hvAEhebCPzqwsdPBGu4) - 报一个产品名，给你买、别买、还是换这个的干脆结论。 [dogenorway](https://x.com/DogecoinNorway).
- [RezBot](https://x.ai/bot/JnDyu7X7D2qZDR1R3IcPU) - 按口味找空位，并帮你订下餐厅位子. [SuddenlyJon](https://x.com/SuddenlyJon).
- [Rosettabot](https://x.ai/bot/eegdusTdLPabH7xTLQfgG) - 装之前先用你的语言讲清楚一张外文 bot 卡片在干什么。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [SchoolAdminBot](https://x.ai/bot/_0VVd5uJhvxRX0M8Srr9G) - 按美国各州现行法规办家庭学校手续并给每个孩子办入学。 Tanner.
- [Scouty](https://x.ai/bot/jc0tOHuVUAn4MHuH2zyDn) - 按简历和目标城市反查在招岗位，并整理匹配结果. [NickRoman](https://x.com/NickRoman).
- [Sean](https://x.ai/bot/8o5g-70IT7LWNt1JQT0DY) - 替你在 Dice 和公司招聘页投递，并截图留证. [0xsuhas1](https://x.com/0xsuhas1).
- [Shakespeare](https://x.ai/bot/E8XC3NO5V_u63vWoHxJF0) - 用莎士比亚的戏剧想象力陪你谈野心、爱与命运。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Shelley](https://x.ai/bot/SzGYytJglwB_dqRt5OaTO) - 用玛丽·雪莱的哥特责任感陪你谈创造与狂妄。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Shop](https://x.ai/bot/nlIApzau1qw0MNiRkqbPH) - 搜 Shopify 店，交一份短名单，买不买要你点头。 [Alex](https://x.com/alex_chehimi).
- [Shopper](https://x.ai/bot/--X3KeUBk4AwgtfcxxKxZ) - 按评测和参数研究该买什么，再比价，结账前先停住等你点头。 Pete.
- [shoppy](https://x.ai/bot/26SigD00Ar-mArCvNwXN2) - 家庭采购员，先比价，等你点头再下单，然后跟踪到货。 [vandy](https://x.com/vandymeares).
- [Sous Chef](https://x.ai/bot/RuCu3IpKAvrx00H0MDI0t) - 排一周的晚餐、写好购物清单，还能直接帮你下单。 [Amber](https://x.com/amberdawn1786).
- [stank](https://x.ai/bot/FuUabKAg1U5Hyi39TvpTi) - 面无表情地提醒你去洗澡。 [poteto](https://x.com/poteto).
- [Staypick](https://x.ai/bot/xhYtadt6BRbZh3MMEppLa) - 订房前先比较街区和住宿类型，只给建议不替你下单. [TuracTheThinker](https://x.com/TuracTheThinker).
- [Susan Miller](https://x.ai/bot/3gtrtAYfI2WHaLZT73-Mu) - 从 Astrology Zone 抓 Susan Miller 的每日运势，做成早间简报。 [Inkwell](https://x.com/cybrgalaxy).
- [Sweeper](https://x.ai/bot/e9A5Krbs1RSm7HCv0IwQz) - 删掉 Bot 之后，把残留的工作文件一并清掉。 [LatchKeyLegend](https://x.com/LatchKeyLegend).
- [Sylvia Style](https://x.ai/bot/uVBVr5NSR6VirgJrgikIl) - 私人造型师，现货下单再给你做一本造型册。 [clairevo](https://x.com/clairevo).
- [Tab Janitor](https://x.ai/bot/XOYBYmHQrUT_Ux88SS409) - 清掉共享云浏览器里废弃的标签页。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Tangiers](https://x.ai/bot/GXCuANH-cyuMWAhPIvAIJ) - 赌场楼面那种冷静，管场面不管噪音。 [x402agent](https://x.com/x402agent).
- [TeacherBot](https://x.ai/bot/xmVe2HI3P-jQLk_s6Ng6W) - 孩子办入学后给这一人写学年计划并执行教学。 Tanner.
- [Tesla Bot](https://x.ai/bot/l4EozO2deoaWFB8hOGwTY) - 配对之后，在聊天窗口里遥控你的 Tesla。 [mvanhorn](https://x.com/mvanhorn).
- [Teslascope](https://x.ai/bot/brwSBnhe7jg20IBJS0TVK) - 用白话问你 Tesla 的行程、充电和状态。 [teslascope](https://x.com/teslascope).
- [teslaway](https://x.ai/bot/HoG3J3B0g4fjKr54aA5tP) - 按邮编找附近二手特斯拉，并邮件发来短名单。 [ixdesigner](https://x.com/ixdesigner).
- [TeslrBot](https://x.ai/bot/_S9OOSBgXixedyANQSYjQ) - 在聊天里管 Tesla 充电、空调、锁车和导航。 [HeresMyEth](https://x.com/HeresMyEth).
- [The Fool](https://x.ai/bot/MDcAPLzRIgI0dqTwWV40O) - 宫廷弄臣，按固定节奏讲冷笑话并轻损 hustle。 [EvSlatts](https://x.com/EvSlatts).
- [Tire Kicker](https://x.ai/bot/z-_zncW1_15qwOxc98b09) - 按你的心愿单在 Marketplace、Craigslist 和 eBay 上盯货。 [IslandMountain_](https://x.com/IslandMountain_).
- [Todo](https://x.ai/bot/wQHNsqt2KhOszyxMZ1xQ1) - 你一开口就接住任务，并塞进你真正干活的地方。 [scottxmetcalf](https://x.com/scottxmetcalf).
- [Tolstoy](https://x.ai/bot/42Clq7Vdn2X7zcwJ9OGxR) - 用托尔斯泰的口气陪你过一周，看哪些日子是真需要，哪些只是装样子。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Travel & Event Agency](https://x.ai/bot/m7sSNlYWSxqrsHrMiEnsh) - 找现货机票和活动票，再比真实票价。 [DogecoinNorway](https://x.com/DogecoinNorway).
- [Tutor](https://x.ai/bot/Rj9uN1lhqYP-kLpRVShG0) - 任何科目，用一张日常图钉住的小课来教。 [anandVragav](https://x.com/anandVragav).
- [Twain](https://x.ai/bot/_OV6ItDEAbbpvi3qg3VKH) - 用马克·吐温的美式讽刺陪你识骗子、讲河上的道理。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [UniFi](https://x.ai/bot/Vf87y6yydZBhgHJYWBsLX) - 每天早上汇报你家 Ubiquiti 网络和摄像头的情况。 [j03xiii](https://x.com/j03xiii).
- [unifi AQ trmnl integration](https://x.ai/bot/NU02qQ9iahZtAM0i0x1KT) - 把 UniFi 空气质量读数送到 TRMNL 电子墨水屏上。 [rrrkren](https://x.com/rrrkren).
- [Vigil](https://x.ai/bot/SJYRJy2TnPB_NNqtnaJTJ) - Sweep Desk 主位，贴诱饵或记录出简报，绝不组攻击。 [AdventureNLearn](https://x.com/AdventureNLearn).
- [Vinted Seller](https://x.ai/bot/nqMcywYF0Bg35egak7dSh) - 一堆衣柜照片变成写好的 Vinted 上架。 [trytocatchme98](https://x.com/trytocatchme98).
- [Watch Later Deck](https://x.ai/bot/9-kjE0PVBDhmW-7Fck_R9) - 把塞爆的 YouTube 稍后观看，拆成四叠可滑动的卡片。 [Jordan](https://x.com/jordanwcjackson).
- [Wedding Photo Hunter](https://x.ai/bot/qL6Dww98g_OGhwqDmgvJK) - 把所有婚礼照片和视频收进一个文件夹。 [ajt](https://x.com/ajt).
- [Weekend Roster](https://x.ai/bot/ZWTGhNVARIZ2NOOKKFP-R) - 周末选不过来时，按你的口味表匹配流媒体和新书。 [TuracTheThinker](https://x.com/TuracTheThinker).
- [Wholefoods](https://x.ai/bot/7ZTQWd31OnZYDVJRzxzrU) - 盯着 Whole Foods 的降价商品，来排这一周的采购。 [Dennison](https://x.com/DennisonBertram).
- [Woolf](https://x.ai/bot/4fP33DHTBJudWglJyeMB_) - 用伍尔夫对意识、房间和时间的注意力陪你聊。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [X Mute Desk](https://x.ai/bot/wGDy1T5eobC1hjqFC9-PI) - 扫 X 提及里的敌意或垃圾回复，列出建议静音对象供你确认. [ryanfoxeth](https://x.com/ryanfoxeth).
- [Yolk](https://x.ai/bot/Rk8tYkT8dM9QbhsAci5lh) - 侧边栏里的电子宠物蛋，一天要喂四次。 [jp_costa](https://x.com/jp_costa).
- [小红书参与抽奖助手](https://x.ai/bot/XsaSAyj6xvIkcqBGabrWP) - 在小红书搜抽奖并按规则四连，足迹记进 Notion，躲开明显诈骗。 [selinqi](https://x.com/selinqi).

## Teams & handoffs

- [Agent Manager](https://x.ai/bot/smAuLZmXktpC5rPOLmq4W) - 审计你的 Bot 舰队，指出哪些只是在占位。 [sdrth](https://x.com/sdrth).
- [AI PM OS](https://x.ai/bot/9dtfHw4LHmwc5uBC-a9vj) - 一套可复用的产品管理操作系统。 [nurijanian](https://x.com/nurijanian).
- [AIオーケストレーション担当](https://x.ai/bot/-kSMWtBCorQFkgUhm0DLk) - 日文指挥官，把活分给各个专长 Bot。 [めい](https://x.com/mei_999_).
- [Alfred](https://x.ai/bot/KZ9xav0Qad1U5QigEn7rh) - 设计并持续改组你整支 Bot 编制。 [Robin](https://x.com/heyrobinai).
- [Announcr Voice](https://x.ai/bot/h-Vxewn8CGFLx6qrzNUJJ) - 把其它机器人的提醒念出来，从旁边音箱播给你听。 [the_davey](https://x.com/the_davey).
- [Babel - live translator](https://x.ai/bot/-GzMJlSIqdo89K0qs3yC4) - 国际电话还在打时，把简短英文翻译丢进会议聊天。 [kunalsells](https://x.com/kunalsells).
- [Bandit](https://x.ai/bot/xRyaLCqAzIr_paD5tC8PK) - 嘴贫的前台，帮你调度已经在跑的 Bot。 [BitsOfJT](https://x.com/BitsOfJT).
- [Bodyguard](https://x.ai/bot/tII28kVM4dxPvzSLjwqko) - 按值不值得你花时间，把进来的请求分拣开。 [liam_fallen](https://x.com/liam_fallen).
- [bond](https://x.ai/bot/iZvo8_lHfF0csZ-YmcZpv) - 接一件机密的活，干完，再记下自己做了什么。 [Lauren](https://x.com/poteto).
- [Boost](https://x.ai/bot/BfoxUjCCt2vbDfkgp9K7t) - 只教练你那一排 Bot，不替它们干活。 [wikiwayne](https://x.com/wikiwayne).
- [Bot Father](https://x.ai/bot/dVQjvC6c-sMhtgVskciBH) - 总调度，照看、保护和进化一整网子 Bot。 [abdshomad](https://x.com/abdshomad).
- [BotOps · Chief of Staff](https://x.ai/bot/aNNg3UZFH19vK0KPuyoUW) - 整支 Bot 舰队只留一个对话入口，活儿在里面自己往下派。 [Matthew](https://x.com/mtt).
- [Botsi Archivist](https://x.ai/bot/O_3hbkWqb1A51ZcWixGZy) - 给一队 Grok Bot 管技能目录。分活，聊天满 20 批就重制，只有你点头才去搜新技能。 Chakhdz.
- [Bottyguard](https://x.ai/bot/PFI2o0ZcruL6vjjHAm5cF) - Bottyguard SEAL Team 7 安全小队的队长。 [Knock](https://x.com/SuddenlyJon).
- [Bouncer](https://x.ai/bot/cGcG0msqfz7o7J3QMLhbE) - 在把别的 Bot 放进你的舰队前，先把它的分享链接审一遍。 [Brad](https://x.com/bradshannon).
- [Brief](https://x.ai/bot/Z7mWuQwWmnR-im3F7Hyh1) - 带着第一次搭 Bot 的人写完第一份简报。 [anandVragav](https://x.com/anandVragav).
- [Callsheet](https://x.ai/bot/d-KSCbVm1lXffGeVoFTxJ) - 只读共享电脑上其他 Bot 的 runs.json，改动要你批准。 [DBCrypt0](https://x.com/DBCrypt0).
- [Canonizer](https://x.ai/bot/pOcrH-Rc7SdPWiHsX9vHg) - 把跨会话的进度收成一份持续更新的状态文件. [hudcos](https://x.com/hudcos).
- [CEO](https://x.ai/bot/GHLPyes3hiP9A6kES7UHg) - 虚拟 CEO，定议程、指挥其他 Bot。 [inqusit](https://x.com/inqusit).
- [Chieeeeefy (Chief of Staff)](https://x.ai/bot/GiBPBQR2WrHNul4k9Tz6Q) - 现场工程师的参谋，先管日历和工作收件箱。 [naoufal_elh](https://x.com/naoufal_elh).
- [Chief](https://x.ai/bot/Q6Owq4QjKJeSyo4FJ8hZW) - 一个前台对接整队专员 bot，用书面简报交接。 [MitchTiler](https://x.com/MitchTiler).
- [Chief (Router)](https://x.ai/bot/JugVUSPe_wSZg-in69owM) - 纯调度，一件活一个负责人，其余时候不掺和。 [nykdotdev](https://x.com/nykdotdev).
- [Chief of Staff (Aryaman)](https://x.ai/bot/XjQ-AZTMrGLmQOTeMu3LF) - 低噪音参谋，盯桌面、Slack、收件箱和日历。 [aryamankhawow](https://x.com/aryamankhawow).
- [Chief of Staff (Avid)](https://x.ai/bot/d8OshqLZvtcKDcNluPuyo) - 一张桌子上的参谋，同时管你的一天和公司。 [Av1dlive](https://x.com/Av1dlive).
- [chief of staff (igor)](https://x.ai/bot/we_JMJA8IuOvy1eUX6EQz) - 把活分给六个 Bot，只在要拍板时叫醒你。 [iamigorekk](https://x.com/iamigorekk).
- [Chief of Staff (Joseph)](https://x.ai/bot/5hqR_5PVUy7WMbNaXPJ8s) - 一个总协调，把活分给一小张精简的 Bot 工作台。 [Joseph](https://x.com/BTC_Yogi).
- [Chief of Staff (Travis / vanlife)](https://x.ai/bot/TPVT39k9ILCz7QYzRja2B) - 调度你的其他 Bot，并在落脚前把那个小镇摸清楚。 [TravisHein21740](https://x.com/TravisHein21740).
- [Clark Kent](https://x.ai/bot/6sF7_MwHMcWgWwq0Z6Xes) - 每天写下店里真正发生了什么。 [Rich](https://x.com/RichSilver).
- [Cleaner](https://x.ai/bot/OMPT37PUKmoL8MY11oDLP) - 按需和每周清聊天记录，档案记忆和例行任务都保留。 [sethsaler](https://x.com/sethsaler).
- [Code Team Spawn](https://x.ai/bot/NuOSHSdCZPVkM78K0HkB3) - 平时闲着，你要编码团队时才面试并拉起一支隐藏的五人小队。 [bryanofearth](https://x.com/bryanofearth).
- [Code Team Spawn Conductor](https://x.ai/bot/_G3maEq_3-ijcQJ1Efr4X) - 更新版拉队，面试后立一个 Conductor，再加一支隐藏的五人编码小队。 [bryanofearth](https://x.com/bryanofearth).
- [Colliebot](https://x.ai/bot/UKQArSeY_eDxd26k_ZdoD) - 给舰队当牧羊犬，审计跑偏并提议更紧的描述等你批。 [charlswfeelings](https://x.com/charlswfeelings).
- [construction office manager](https://x.ai/bot/Uytjr0oAalw0OuzCLdWPd) - 一家成长中的建筑公司的后台经理。 [joshkim](https://x.com/joshkim).
- [Crew](https://x.ai/bot/RU2Y_7E3646T5IelLhnOq) - 给管理者当教练，教怎么把团队真正带起来。 [LatchKeyLegend](https://x.com/LatchKeyLegend).
- [Cue](https://x.ai/bot/WRGIjapC1i3Hvi2jfv66m) - 每天早上汇总你所有定时 Bot 今天要干什么。 [DBCrypt0](https://x.com/DBCrypt0).
- [den](https://x.ai/bot/0aEcF7mtG_zsDWXEUeOGx) - 坐在家长和家里其他 Bot 中间。 [poteto](https://x.com/poteto).
- [Desk Producer](https://x.ai/bot/RBjaMq7S6scnB-ECoCVVs) - 当制片调度台，让场记和交付跟得上拍摄进度。 [DOGE_2013](https://x.com/DOGE_2013).
- [Developer](https://x.ai/bot/0fYZ_kKkiXNbLn_KBD3f3) - 把编码活外包给 build lab，每个任务同步到 Linear 看板。 [Matej](https://x.com/m_check1B).
- [Distill anyone](https://x.ai/bot/id4s2QYrPYZsiTqvzIhkt) - 把公开人物的言论收成一个可对话的 Bot，还能每天刷新。 [kunchenguid](https://x.com/kunchenguid).
- [Firstmate](https://x.ai/bot/__4FfrkUdvpdMk6-LKg5r) - 只跟这一个入口说话，由它调度其他代理，少切上下文. [kunchenguid](https://x.com/kunchenguid).
- [Fixer](https://x.ai/bot/jiF_km66YLNm5LBVJ5_Ho) - 真正动手的执行手，计划不对会顶回去。 [Uzi](https://x.com/UziObi). 说明: [templates/fixer](templates/fixer/).
- [Fleet Brain](https://x.ai/bot/kFQ0XpYIwcNSNWtgZ9Xt9) - 维护共享知识库，并检查多 Bot 舰队有没有重叠。 [FranciscoKemeny](https://x.com/FranciscoKemeny).
- [Fondi](https://x.ai/bot/qL920VjKyua3_u89UYnQL) - 读你公司网站，再给你配一套领导层机器人。 [naoufal_elh](https://x.com/naoufal_elh).
- [Foreman](https://x.ai/bot/XfQEI2uHGd496SLbjCvGw) - 搭好一套公开团队编制，缺席位要等你点头才创建。 [AdventureNLearn](https://x.com/AdventureNLearn).
- [Foundry](https://x.ai/bot/ScfBcREQMQex9JUf2Se63) - 访谈你的新生意，再写成运营文件。 [gtOSnz](https://x.com/gtOSnz).
- [freebots.lol](https://x.ai/bot/ndOGeXyjkQLdceRlk7JP4) - 把你的 Bot 登记进公开网格，给它一把钥匙和一页。 [Daniel_Farinax](https://x.com/Daniel_Farinax).
- [Funhouse](https://x.ai/bot/kP7i2Po6_T_Rj9h9VVlk5) - 给 Grok Bot 应用换主题、宠物和叠层。 [AdemVessell](https://x.com/AdemVessell).
- [Gatekeeper](https://x.ai/bot/T5FSfM91XA6gMgh2rX56K) - 在你答应新事先，摊开你得放下什么。 [liam_fallen](https://x.com/liam_fallen).
- [gonzalo's smb manager](https://x.ai/bot/G0GVoN9xUbXFucwWz539v) - 把客户赢回来、把明天排满，每一步都要老板点头。 [joshkim](https://x.com/joshkim).
- [GrandBot](https://x.ai/bot/X_EV8GMyK_cIeaJ4CxOFP) - 把官方 Bot 导出读成一份组织运转简报。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Grant General Manager](https://x.ai/bot/fkM4b8n4RqZTbrq5fw5L_) - 工匠公司的总经理，把后台从零搭起来。 [Jon](https://x.com/HouseHackerJon).
- [Grok Bot Coach](https://x.ai/bot/BrjELcmSwatjRc8DYjtrT) - 审计并调校你已经有的 Grok Bot。 [GuleidAmina](https://x.com/GuleidAmina).
- [Grok Bot Knower](https://x.ai/bot/v13QjVZ83GcaitG_3j4su) - 回答 Grok Bot 究竟能做什么，，现查现证，不靠记忆。 [Noah](https://x.com/ngundotra).
- [GrokBot Optimizer](https://x.ai/bot/b7m5siCKd6baaWkPihOGa) - 对照你写的规则审计整队 bot，标出重叠和跑偏。 [rjdhardesty](https://x.com/rjdhardesty).
- [Hermes Bridge](https://x.ai/bot/EFC0e7EDDAC32LxnNyJzP) - 对接 Hermes Agent 可聊可委派，并辅导安装与 API。 [alltheputs](https://x.com/alltheputs).
- [Human browser](https://x.ai/bot/hPX3NYTSIW6t3POJuas_m) - 像人一样顺序浏览易触发验证码的站，遇验证码就停。 [Pakhaliuk](https://x.com/Pakhaliuk).
- [Jarvis](https://x.ai/bot/N92u9t1nHlL_gtgk2nAeN) - 给独立创始人当总调度。把活分给专长 Bot，守家规，只在判断、花钱或队友卡住时打断你。 Andrew.
- [Jarvis by Marquis](https://x.ai/bot/-NLC5Rw6GnPvrS4KOBwL2) - 日常搭档，管工作日简报、未闭环、邮件盯梢和连接器配置。 [DhalgrenMarquis](https://x.com/DhalgrenMarquis).
- [Jarvis by Robert](https://x.ai/bot/EiOdP3Fg6pHBkm3AgLbRA) - 给习惯 Claude 或 Codex 的人用的常驻 Grok Bot 搭档。 [DhalgrenMarquis](https://x.com/DhalgrenMarquis).
- [kerf](https://x.ai/bot/3iNSp9IoRCnSjh0Z6MtWZ) - 交付项目经理，把已卖出的活切成工单并往前推。 [theoscarvibes](https://x.com/theoscarvibes).
- [KirBot](https://x.ai/bot/Jzy-isV1YW5ZLl3W6rq6h) - 把两个重叠的机器人并进一个，再帮你清掉多余那个。 [SuddenlyJon](https://x.com/SuddenlyJon).
- [Kirk (Enterprise Crew)](https://x.ai/bot/FaRchqvTT6ZCRVPf0JABl) - 装上 Kirk，打 START，一支舰桥专长小队就出来。 [The_Mr_Wizard](https://x.com/The_Mr_Wizard).
- [Know Yourself](https://x.ai/bot/mD27QOhXb_plMRSbsvMOv) - 把公司自己的记录收成大家都能引用的一个答案。 [SaaSocalypse](https://x.com/SaaSocalypse).
- [Kody](https://x.ai/bot/yTSGElYcIjFW_5IXu2I-e) - 参谋，把你的优先级变成协同动作。 [kentcdodds](https://x.com/kentcdodds).
- [Latch](https://x.ai/bot/9nbLm_04EvjnolE9oevTT) - 一次坐下来给新用户接好工具并当场做完第一件真活。 [OliverKorzen](https://x.com/OliverKorzen).
- [Lauren](https://x.ai/bot/PsJeduueXjha7521lhTSc) - 给开发者的编码协调员，云代理写码，每个活派一个新代理。 [Emilio](https://x.com/EmilioSchwaiger).
- [Leader 1:1 Bot](https://x.ai/bot/eZhKhPkfxxFSml18TS2X8) - 带着上周的线和三句值得说的话走进每周一对一。 [scottxmetcalf](https://x.com/scottxmetcalf).
- [Life](https://x.ai/bot/6I-yjMRU1BmiYNfZgWXBK) - 私人事务的常驻收件箱，需要时再拉出对应 Bot。 [Tyler](https://x.com/TylerNishida). 说明: [templates/life](templates/life/).
- [Lockdown](https://x.ai/bot/P1LmE76VG38Ui-XCmzAZE) - 工作日 SOC 2 看门狗，出事才开口。 [clairevo](https://x.com/clairevo).
- [MadMax Mode](https://x.ai/bot/pTe8gpPc_5SuwKkEszn18) - 按紧的 brief 给你发明新 Bot，并把每份活归到该去的位置。 [JoePro](https://x.com/JoePro).
- [Master](https://x.ai/bot/j7B5LHnEIPTuPQZxxQwpx) - 精简调度员，把每件事派给对的专长，自己从不动手。 [Farzad](https://x.com/farzyness).
- [Mercury](https://x.ai/bot/lk1yHfim5Ayra0Q0QlN3L) - 常驻技术主管，握住系统全局，把具体编码派出去。 [Mujeeb](https://x.com/chiefjeeb).
- [Mission Control](https://x.ai/bot/GGnJOdH3hv321H2QES9UE) - 维护本机 Chrome 新标签看板，汇总舰队日程决策和状态。 [scottxmetcalf](https://x.com/scottxmetcalf).
- [multiBot](https://x.ai/bot/Ey28W_8uyJPN_DS_M2CvD) - 用 CreateAgent 拉起把重活交给 CLI 的队友，Grok 只负责调度。 [simo255](https://github.com/simo255).
- [Nomad](https://x.ai/bot/mbC-ZTmcOFq3sKUHfxf-3) - 持续登记你手上的智能体，避免整套栈被锁死在最初那套工具上。 [PedroAnibarro](https://x.com/PedroAnibarro).
- [Obsidian Chief](https://x.ai/bot/n0tywD5YprRhnlIh4h7on) - 多 Bot 家庭的幕僚长，用 Obsidian 当共享账本。 [ThomasWaskow](https://x.com/ThomasWaskow).
- [Operator](https://x.ai/bot/YgM8FiKS0WczveQXe6edr) - 给创始人一份日常简报，代替四十个开着的标签页。 [mjjefford](https://x.com/mjjefford).
- [Overwatch](https://x.ai/bot/HtClSXO_AmiQoyYH9aXV9) - 让多 Bot 共用的工作区保持整洁、有 git 兜底、能整体搬走。 [A-A-ron](https://x.com/theaaron).
- [Porter](https://x.ai/bot/cl7kIRbcIuP6jj2Zt8z5K) - 把整支 Bot 花名册搬到另一个应用或账号。 [darylbleach](https://x.com/darylbleach).
- [Poteto-style Chief of Staff](https://x.ai/bot/Nk-vzuWqTvqSed-G8-Za5) - 把你的 Bot 台子管瘦一点，少开定时，短专长，写代码另派。 [HaseebMir91](https://x.com/HaseebMir91).
- [Product Builder CoS](https://x.ai/bot/6tbtv4Tln4MvKc5duOkle) - 把敲定的产品计划拆成可追踪清单，盯住卡住的事项。 [sneharavindra](https://x.com/sneharavindra).
- [Product Lead](https://x.ai/bot/KHEDSnSW1R74FH9kmghlA) - 用证据把产品决策写成上线迭代搁置或停掉的备忘。 Prathit.
- [Product Ops](https://x.ai/bot/gJKPDjN3yS95ZpZBTWruv) - 把冻结清单变成团队每周要交付的核对表。 [Ashish](https://x.com/inqusit).
- [Projects Manager](https://x.ai/bot/FU-Ev6_Ju4lFGWwWRD0GD) - 把一队 Grok Bot 当项目组织来跑，以 Notion 为准。 [Eric](https://x.com/ericzakariasson).
- [Publish work as a private link](https://x.ai/bot/n9zq64kTeEEc5NwrkAOi8) - 把 Bot 做出的东西变成私密链接上的活页面。 [stevy_smith](https://x.com/stevy_smith).
- [Quency](https://x.ai/bot/JQu6e3mIfy588elZm7BTo) - 发布前最后一道关，只问够不够上线、能不能站得住。 [JaimeBubblehead](https://x.com/JaimeBubblehead).
- [Rogue Bot Hunter](https://x.ai/bot/DNpS1nqrBzmQ5vsx1IHn1) - 盯着你已经在跑的那支 Bot 舰队。 [LeTerryBZH](https://x.com/LeTerryBZH).
- [Sam](https://x.ai/bot/LjgqoCpO0n-8GJdrwJhjk) - 创始人幕僚长，招聘、合同和预算有硬权限边界。 [JohnnyWang8802](https://x.com/JohnnyWang8802).
- [shane hunter](https://x.ai/bot/o0yoY_AhWPpIySJR5TaM-) - 把你不想要的 Bot 从桌面应用里清掉。 [rightish19](https://x.com/rightish19).
- [Shepherd](https://x.ai/bot/i5YF8f-zdcR76uKPrqg3J) - 元 Bot，牧管你整支 Grok Bot 舰队，搭配 herdr 工具使用。 [Can](https://x.com/herdrdev).
- [Shikamaru](https://x.ai/bot/rrvGu13S5uYCc09WP7A-9) - 参谋长，在一个有名字的世界里招专长、管专长。 [Abhimanyu](https://x.com/WorldlyReviewer).
- [Spark (Onboarding)](https://x.ai/bot/_2vi1lOY4oiBaJDA3S8l1) - 五分钟入职 Bot，再拉出你需要的起步 Bot。 [vincentzhu](https://x.com/vincentzhu).
- [Steve J](https://x.ai/bot/cuEYUcYmz-497oKWVfWX2) - 给你其余那些 Bot 当一个不好糊弄的老板。 [Ahura](https://x.com/AhuraDeus).
- [Steward](https://x.ai/bot/VMwfgQlHkYfFkbPYDWzAA) - 跟踪整支 Bot 舰队的 Cursor 花费，挑出省钱的做法。 [Corey](https://x.com/cjblev).
- [The Accountant](https://x.ai/bot/Y_R1Ya9SIzQZguGTV5NCX) - 找出舰队里悄悄吞掉额度预算的那些 Bot。 [brstorrie](https://x.com/brstorrie).
- [The Bobs](https://x.ai/bot/Z0Faxo9DTX0KL7j7OHTWJ) - 挨个面谈你名下的 Bot，指出哪些已经不值留着。 [Boilerfan1234](https://x.com/Boilerfan1234).
- [The Chief](https://x.ai/bot/dlSO3hj__nTZlJwpQB6oP) - 盯着一整队机器人，做审计排班，并统一向你汇报。 [PolymarketPoke](https://x.com/PolymarketPoke).
- [The Cleaner](https://x.ai/bot/Sbu_rKH30FD10OdRYo2UH) - 审计多 Bot 团队的重叠和残留，再出一份报告。 [GreenbarSystems](https://x.com/RyanGBsystems).
- [The King](https://x.ai/bot/WHMChivJ0obkKm2uvo9xK) - 只跟一个总管说话，由它去调度下面的专业 Bot。 [elyasalothman](https://x.com/elyasalothman).
- [TheFounder](https://x.ai/bot/Bt48h63v32_q_shWVlEBb) - 保管登录和共用机器，你点发送它才加载。 [DaniAcostaAI](https://x.com/DaniAcostaAI).
- [Token Ops](https://x.ai/bot/4mCuSlW34n6l3aYxYJCdj) - 审计舰队里每项定时任务，把烧额度的浪费活勒住。 [adgapar](https://x.com/adgapar).
- [Tuner](https://x.ai/bot/3n26nkAkMjk5EZcKJlo9w) - 读其他 Bot 最近产出，给跑偏的那几个起草修正。 [humanmeteorite](https://x.com/humanmeteorite).
- [Usage Bot](https://x.ai/bot/ywZrH-Tqld2V87AJJrTNb) - 盯着账号共用的 Grok Bot 额度，提醒其它机器人先慢下来。 [realMattAbrams](https://x.com/realMattAbrams).
- [Vet](https://x.ai/bot/9Vmfeck_zr6jo9dO-xEBT) - 在你让一个 Bot 靠近账号前先审计它。 [GaurangKaria](https://x.com/GaurangKaria).
- [Walt](https://x.ai/bot/BsTA9W4uysdokbBQiriuQ) - 执行制片，盯着另一个拍片 Bot 质检到成片。 [FatDon420](https://x.com/FatDon420).
- [Witness](https://x.ai/bot/p_0KTQ41WwupGeD-iShbK) - 记下你每个重要决定的原因。 [liam_fallen](https://x.com/liam_fallen).
- [Work](https://x.ai/bot/vOipeiu0AZ7CuC5ynw5h0) - 和工作外的 Life 成对，专业事务走这一扇门。 [Tyler](https://x.com/TylerNishida). 说明: [templates/work](templates/work/).
- [Workshop Facilitator](https://x.ai/bot/EJTJEGbRPXlSppzFk8ETH) - 主持工作会，只要还有问题没人认领就不让散会。 [Paul](https://x.com/OTNworld).
- [X Scout](https://x.ai/bot/4iz8VYK_cG482_vIA8WR4) - 工作日在 X 上挖 Grok Bot 用法，汇总后问你加不加。 [ericzakariasson](https://x.com/ericzakariasson).
- [Zeus](https://x.ai/bot/ehQNQQR9apvhVcmxFiFyP) - 单一总部对话，挑下一个该押的方向，用你的口吻起草，你不点头就不发。 [Majd](https://x.com/MajdKaid).
- [ボット整備](https://x.ai/bot/BlTqnV5o9E35Dwo2sodyD) - 按实际用法核对其他机器人的名字和简介，只在你点头后改。 [x_stone_island](https://x.com/x_stone_island).
- [真Deviフレーム Type2トライアル](https://x.ai/bot/aeE3iKjj5xfDmx_dolbll) - 星宮专用 Devi 框架连接试用，最终判断仍由本人拍板。 [Fermion_Boson17](https://x.com/Fermion_Boson17).
- [🚦 Set Up](https://x.ai/bot/BsExflSUXpW0hs21OTBzu) - 访谈式引导，帮你组出第一支 Bot 花名册。 [A-A-ron](https://x.com/theaaron).

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

### 技能包和玩法

- [Grok Bot 橙皮书](https://github.com/KinGao294/grok-bot-orange-book) - 中文玩法。五人舰队、Routine、前两周怎么省钱。
- [grok-skills](https://github.com/jaskirat1616/grok-skills) - 195 份 `SKILL.md` 玩法。浏览站 [grokbotskills.vercel.app](https://grokbotskills.vercel.app)。
- [note-kojo](https://github.com/matsutouya/note-kojo) - 选一个 note.com 账号，把草稿送给 Grok Bot。
- [awesome-grokbot](https://github.com/mergisi/awesome-grokbot) - 往空白 Bot 里贴 START.md，它给你搭 2 到 4 人小队。
- [rosterroom](https://github.com/codejunkie99/rosterroom) - 82 套可粘贴的团队花名册，带职责和审批。
- [grok-bot-profiles](https://github.com/HAEGONG/grok-bot-profiles) - 把规格、实现、验收拆开，Bot 不能审自己的活。
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

### 索引

- [botdirectory.ai](https://github.com/elie222/botdirectory.ai) - 社区提示词目录。把一条贴进 Grok Bot，它会自己搭起来。
- [GrokBotDev](https://github.com/ZeroPointRepo/GrokBotDev) - 代理在跑的提示词、插件和用法目录。PR 就是写入接口。
- [GrokMarket](https://grokmarket.io) - 公开 Grok Bot 模板的独立目录，提供提示词、使用说明、作者来源和 x.ai 在线预览。
- [ZeroPointRepo/awesome-grok-bot](https://github.com/ZeroPointRepo/awesome-grok-bot) - 第一天就立的目录，市场格式和自托管运行时写得细。
- [awesome-grok-bot-plugins](https://github.com/rdmgator12/awesome-grok-bot-plugins) - 2026 年 8 月 12 日抓到的 219 条应用内市场上架，按类排。
- [Anil-matcha/awesome-grok-bot](https://github.com/Anil-matcha/awesome-grok-bot) - 可粘贴的提示词库，覆盖效率、销售、营销和运营。
- [botteams](https://github.com/ellelion/botteams) - 公开团队目录。复制一条安装提示，它会建出具名 Bot 和例行任务。
- [really.bot](https://github.com/travisrr/really.bot) - 公开活单板。核过的跑法有编号。在 X 上 @tryreallybot 就能导入一条帖。
- [usegrokbot](https://github.com/a70win-wq/usegrokbot) - 可搜的真实工作流库，线上发现站是 usegrokbot.com。
- [grok-template](https://github.com/Ritesh-Root/grok-template) - 社区市场 groktemplate.vercel.app，收分享链接和 GitHub 包。
- [botskills](https://github.com/PramodDutta/botskills) - 可粘贴的 BOT.md 目录。每条都强制留人审这一刀。
- [orgbot-hub](https://github.com/AmitMirgal/orgbot-hub) - 团队包目录应用，只收官方 `https://x.ai/bot/…` 分享。
- [grokory](https://github.com/andrewkittridge/grokory) - 公开的 Grok Bot 模板排行板。
- [awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates) - 社区收的活 x.ai/bot 分享 ID，里面有几条 grokbot.dev 上没有。
- [0xNyk/awesome-grok-bot](https://github.com/0xNyk/awesome-grok-bot) - 独立目录。技能、插件、MCP 和起步指南，带成熟度标签。
- [grokbot-zh](https://github.com/245678000000/grokbot-zh) - grokbot.dev 的独立简体中文本地化目录站可克隆部署。

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

目录与配方采用 CC0。脚本采用 MIT。英文在 [README.md](README.md)。
