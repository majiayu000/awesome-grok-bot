# Awesome Grok Bot

精选、可导入的 Grok Bot 模板。官方分享链接，不是提示词合集。

> 社区模板是不可信的第三方软件。添加即表示接受 Grok Bot 第三方 Bot 条款。先检查 profile，只接一个连接器，先跑清单里的只读「首次安全任务」，确认后再开例行任务或写入。同一账号下的 Bot 共用一台电脑。不要把 API key 写进 SETUP。技能可能传不过去（预览里有，导入后是空的）。见 [SECURITY.md](SECURITY.md) 和 [docs/vetting.md](docs/vetting.md)。

机器可读目录：[catalog.json](catalog.json)。

## 这里收什么

这是**模板目录**。一行 = 一条活的 `https://x.ai/bot/…` 分享，外加仓库里的 `PROFILE.md` / `SETUP.md`，写清分享带不过去的东西。

不是：

- 资源/文档列表。那是 [RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot)。
- 画廊倾销（[somi.ai](https://somi.ai/grok-bots)、[grokbot.dev](https://grokbot.dev)、[grokyard.com](https://www.grokyard.com)）。
- 模板功能出现之前的提示词合集（[mergisi/awesome-grokbot](https://github.com/mergisi/awesome-grokbot)）。
- 官方 use-case 文案。那些是你**新建** Bot 时贴进去的起步提示，见 [docs/official-starters.md](docs/official-starters.md)。不会编造导入链接。

中文招募卡/玩法（不是原生分享目录）：[KinGao294/grok-bot-orange-book](https://github.com/KinGao294/grok-bot-orange-book)（橙皮书）。

## 如何导入

1. 在浏览器打开官方分享链接（`https://x.ai/bot/…`）。
2. 选择 **Add to Grok Bot**。需要 Grok Bot 桌面端或 iOS 应用。

分享会**复制**：身份、描述、勾选的记忆、技能、例行任务、以及按插件 id 引用的官方市场插件。

**不会复制**：电脑、文件、浏览器会话/登录、API key、自定义 MCP、脚本、对话历史。

导入后请自行重新连接插件。分享链接是公开的，页面上通常能看到完整指令。

`verified: true` 只在维护者真正导入并跑过「首次安全任务」之后才打。下面没这个标记的，是活链接，我们还没跑过。

## 导入之后

按 [docs/vetting.md](docs/vetting.md)。短版：只接一个连接器，检查技能，只读跑 `first_safe_task`，然后再考虑例行任务。

账号上限：**50 个 Bot**（含群聊）；每个 Bot **50 条例行任务**。所有 Bot 共用一台电脑。一条分享只装一个 Bot。团队编制看 [packs/](packs/)，不是一条链接。

已知问题：预览里能看到技能，导出却可能是 `skills: []`。

## 目录

- [Coding & shipping](#coding--shipping)
- [Inbox & calendar](#inbox--calendar)
- [Research & briefings](#research--briefings)
- [Customer & sales](#customer--sales)
- [Finance & ops](#finance--ops)
- [Content & publishing](#content--publishing)
- [Personal admin](#personal-admin)
- [Teams & handoffs](#teams--handoffs)
- [团队配方](#团队配方)

## Coding & shipping

| Name | 干什么 | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |
| [dr eggbot](templates/dr-eggbot/) | 先问偏好，再用 CreateAgent 造专职 Bot。写代码的会走一遍 pstack。 | — | [添加](https://x.ai/bot/93gOz3op1UQdBdbekQFLK) | Lauren | create-agent, unverified |

官方起步（不可导入）：[Product Performance](docs/official-starters.md)、[Bug Reproduction](docs/official-starters.md)。

## Inbox & calendar

| Name | 干什么 | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |

还没有可导入的分享。官方起步：[Chief of Staff](docs/official-starters.md)（只做摘要，不发消息、不改会议）。需要执行手时配 [Fixer](#teams--handoffs)。

## Research & briefings

| Name | 干什么 | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |
| Example Brief Bot（示例） | 只展示目录形态。读指定来源，起草短简报，等待批准。 | — | —（未发布） | [维护者](https://github.com/majiayu000/awesome-grok-bot) | example |

## Customer & sales

| Name | 干什么 | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |

还没有可导入的分享。官方起步：[Sales Outbound](docs/official-starters.md)、[Talent Scout](docs/official-starters.md)、[Account Health](docs/official-starters.md)。

## Finance & ops

| Name | 干什么 | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |

还没有可导入的分享。官方起步：[Paid Media](docs/official-starters.md)、[Expense Manager](docs/official-starters.md)。未核验的炒股/交易 Bot 不收。

## Content & publishing

| Name | 干什么 | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |
| [Webby](templates/webby/) | 管网站、newsletter，再加一块工作日公开看板。只创建/重建，不删除。 | GitHub（可选） | [添加](https://x.ai/bot/Q2shbC8RRmoRleIyr5J33) | Farzad | website, unverified |

## Personal admin

| Name | 干什么 | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |
| [Home robots](templates/home-robots/) | 用聊天控制官方割草机、扫地机、Matter 设备。先列表，不要启动或回充。 | 厂商 / 自定义 MCP | [添加](https://x.ai/bot/3mf-UN4mGnCp8DbPBnW5u) | Sawyer | home, robots, unverified |

## Teams & handoffs

| Name | 干什么 | Connectors | Import | Author | Tags |
| --- | --- | --- | --- | --- | --- |
| [Work](templates/work/) | 空的工作门。你接上工具后，变成常驻工作收件箱。和 Life 成对。 | Gmail、日历、Slack（可选） | [添加](https://x.ai/bot/vOipeiu0AZ7CuC5ynw5h0) | Tyler | two-door, unverified |
| [Life](templates/life/) | 空的生活门。常驻生活收件箱，也能开房间。和 Work 成对。 | 日历（可选） | [添加](https://x.ai/bot/6I-yjMRU1BmiYNfZgWXBK) | Tyler | two-door, unverified |
| [Fixer](templates/fixer/) | 参谋的执行手。先顶回去，再干活。 | Slack（可选） | [添加](https://x.ai/bot/jiF_km66YLNm5LBVJ5_Ho) | Uzi | operator, unverified |

## 团队配方

一条分享 = 一个 Bot。编制要自己拼。

- [Work + Life 两扇门](packs/two-door-work-life.md)
- [参谋 + Fixer + 专职](packs/chief-of-staff.md)

## 贡献

想加模板？Fork 后放入 `templates/<kebab-slug>/{entry.json,PROFILE.md,SETUP.md}`，并在 `catalog.json` 的 `entries` 里加对应对象，运行 `node scripts/lint.mjs`，再开 PR。标题格式、verified 标记等见 [CONTRIBUTING.md](CONTRIBUTING.md)。

只改写公开预览。不要整段粘贴别人的 standing instructions。不要编造分享链接。

## 相关

- 官方：[Bots](https://docs.x.ai/grok-bot/bots) · [FAQ](https://docs.x.ai/grok-bot/faq) · [Use cases](https://docs.x.ai/grok-bot/use-cases) · [Skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations) · [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)
- 资源向 awesome-list（文档、聚会、失败模式）：[RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot)
- 复制粘贴档案（模板功能之前）：[mergisi/awesome-grokbot](https://github.com/mergisi/awesome-grokbot)
- 社区画廊：[somi.ai/grok-bots](https://somi.ai/grok-bots) · [grokbot.dev](https://grokbot.dev) · [grokyard.com](https://www.grokyard.com)
- 中文玩法：[橙皮书 grok-bot-orange-book](https://github.com/KinGao294/grok-bot-orange-book)

目录与配方采用 CC0。脚本采用 MIT。English: [README.md](README.md).
