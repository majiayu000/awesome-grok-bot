# Try one Grok Bot: 10 starter tasks / 先试一个 Bot

Choose by the job and the account you are willing to connect. Every row needs a Grok Bot account and the official app. The requirements below come from the linked public description; they are not a complete audit of the imported configuration.

按任务和愿意连接的账号选一个。所有条目都需要 Grok Bot 账号和官方客户端。下表依据公开介绍列出前提；完整插件、例行任务和技能仍需在导入详情里检查。

**Checked 2026-11-16:** all 10 public descriptions were readable with HTTP 200. **Import and first-task status: not tested for all 10.** Their catalog `verified` flags remain false. A proposed task below is an acceptance test, not a reported result.

**核对日期 2026-11-16：**10 个公开介绍均可读取、HTTP 200。**10 个均未验证导入和任务运行**，目录的 `verified` 保持 false。下列首个任务是验收用例，不是运行成绩。

## Choose a starter / 选一个开始

| Bot | Accounts, tools and inputs / 账号、工具与输入 | First task to copy / 可复制的首个任务 |
| --- | --- | --- |
| [Human Copywriter](https://x.ai/bot/JZAccYtlRFvDSU2CnMnkZ) | Paste a draft; the description names no required external account. Defaults to American English. / 粘贴草稿；介绍未列必需外部账号，默认美式英语。 | Rewrite only this sentence in plain English, preserving the facts: “Our CLI converts a CSV file into a Markdown table.” Return one draft. Do not publish or contact anyone. |
| [产品推广交稿员](https://x.ai/bot/k_7pPRlHeZc2cku1zvVqr) | Product facts and audience; scheduling and view-based iteration need later setup. No named connector in the preview. / 产品事实、受众；定时及按阅读量迭代另需配置，预览未列具体插件。 | 根据这些事实写一条中文草稿：开源 Rust CLI，把 CSV 转成 Markdown；读者是开发者。不要补性能数字，不发布、不设定时。 |
| [Online Identity Bot](https://x.ai/bot/4VEl6mp1QrsvvjTFR-qE_) | Public search; full workflow reports to a coordinator. Preview says the daily task does not use Incogni. / 公开搜索；完整流程还向协调 Bot 汇报，每日任务不使用 Incogni。 | Search for the public project “Rust Programming Language”. Return three source URLs and distinguish the official site from third-party mentions. Do not search for a private person, contact anyone, or create a routine. |
| [Join a Startup Bot](https://x.ai/bot/XJCoBm6z7qjAnt9ScG8i7) | Public job sources and role/location preferences; no account for outreach is named. / 公开职位来源和岗位、地点偏好；预览未列外联账号。 | Find three publicly listed remote Rust engineering roles. Include source links and mark missing salary or location details as unknown. Do not apply, send messages, or start a daily routine. |
| [薅羊毛 / Wool Radar](https://x.ai/bot/WFW6_5N596TQpWCRjRZ5w) | A buy list and public deal information; AI reset reminders additionally need supplied plan details. / 购物清单与公开优惠信息；AI 额度提醒还需套餐资料。 | 只比较这两条虚构报价：A 店 1kg 咖啡豆 100 元，B 店 500g 55 元。算每公斤价格，不登录、不下单、不设提醒。 |
| [记账管家](https://x.ai/bot/WW-UbmTKXn79q0yXapvJE) | Text/receipt/audio input and local CSV. Optional Feishu Bitable sync needs Feishu CLI and authorization; preview says onboarding prompts for it. / 文字、小票或音频及本地 CSV；可选飞书同步需 CLI 和授权，开箱流程会引导。 | 仅在回复里把“2026-11-16，咖啡，18 元，餐饮”整理成一行 CSV。不要安装 CLI、登录飞书、写文件或同步。若不能跳过授权，说明卡在哪一步。 |
| [SubCut](https://x.ai/bot/MzuJZpvaIK2KpexUVY-V0) | An inbox for the full subscription audit; provider and permission scopes are unspecified. / 完整审计需要邮箱；预览未说明服务商与权限范围。 | Use only these fictional charges: A costs $10/month and B costs $96/year. Calculate their annual total and list renewal questions. Do not open email or cancel anything. |
| [Gmail Bot](https://x.ai/bot/4Kert6xnfaArPgZmyJi5M) | Google account and Gmail connection for the full workflow; label/trash actions have side effects. / 完整流程需要 Google 账号和 Gmail 连接；改标签、移入垃圾箱会改变邮箱。 | 只根据两条虚构邮件做摘要：“周五前审阅 PR”“图书馆周日还书”。按截止时间列待办，不读真实邮箱、不发信、不改标签、不设例行任务。 |
| [Token Efficiency Optimizer](https://x.ai/bot/cp_nk3ftrAgaKbYONW6fa) | Supplied usage/reset evidence; preview does not name a usage connector. / 需要用量及重置时间证据；预览未列具体用量插件。 | 根据虚构数据分析：10 次运行中有 4 次完全重复，剩余额度和重置时间未知。只提一个节省建议；不要猜额度百分比，不停止任务、不改设置。 |
| [X Ops Expert](https://x.ai/bot/fePZGiWiTZP9n4BoKIlMY) | Supplied post metrics for a dry run; full account analysis needs X access, whose mechanism is unspecified. English-first. / 演练可粘贴数据；完整账号分析需 X 访问，预览未说明接入方式，偏英文。 | Compare two fictional posts: A has 100 views and 5 link clicks; B has 200 views and 4 link clicks. Return click-through rates and one next topic. Do not access X, publish, or engage with accounts. |

These tasks deliberately use public or fictional inputs. If a Bot insists on connecting an account first, record that prerequisite instead of granting access to complete the test. Passing a dry run would not establish that Gmail, Feishu, X, routines, or payments work.

这些首测只用公开或虚构输入。若 Bot 要求先连接账号，记录该前提；不要为了通过测试扩大权限。干跑通过也不代表 Gmail、飞书、X 或定时任务已验收。

## Record the result / 记录结果

After importing one share, record the date, app version, imported Bot name, actual connected tools, exact task, visible output, and whether it tried an unrequested action. Set `verified: true` only after the maintainer imports that share and completes a documented safe first task, per [the existing vetting guide](vetting.md).

导入后记录日期、客户端版本、Bot 名称、实际连接工具、原始任务、可见结果及是否尝试额外操作。遵循[现有验证口径](vetting.md)，只给已导入且完成安全首测的条目设置 `verified: true`。

Adding a share accepts the [third-party Bot terms](https://x.ai/legal/bot-sharing-terms). A template does not transfer the creator's files, credentials, or complete environment; see the [official template guide](https://x.ai/bot/guides/templates-for-grok-bot).

For a shared team workflow, use the [Team Bot release-brief recipe](../packs/team-release-brief.md).
