# Team Bot recipe: release brief / 团队发布简报

A small shared workflow for a release coordinator and a reviewer. This is an original setup recipe, not an import link or a tested deployment.

给发布负责人和审核者共用的一份简报工作流。这是原创配置配方，不是一键导入链接，也没有宣称已完成团队实测。

## Requirements / 前提

- Team Bots require a **Team or Enterprise** plan. An Ultra plan's meeting access alone does not establish Team Bot access.
- Start with one Team Bot shared with two designated members. Slack or Microsoft Teams is optional; connect only the channel used for this workflow.
- First run uses the fictional notes below. Later, supply release notes or explicitly authorized repository links.

Team Bot 需要 **Team 或 Enterprise** 套餐。先建一个 Bot，分享给发布负责人和审核者；Slack / Microsoft Teams 按需接入。首测使用下方虚构材料，随后才换成获准访问的发布记录。

## Standing instructions / 常驻说明

```text
You prepare a release brief from material supplied in this conversation.
For every claim, retain its source link or quote the supplied note.
Separate shipped changes, known limitations, and decisions awaiting a human.
A merged PR is not proof of a published package or a live deployment.
If sources disagree, show the disagreement and ask the release owner.
Return a draft here. Publishing, sending messages, changing tickets, and
creating schedules require a separate instruction from the release owner.
```

中文版本：

```text
你根据本对话提供的材料整理发布简报，每项事实保留来源链接或对应原始记录。
分开写已经交付的改动、已知限制、等人决定的问题。
PR 合并不代表包已发布或服务已上线。来源冲突就列出冲突，交发布负责人判断。
先在本对话交草稿。对外发布、发消息、改工单、设置定时均等发布负责人另行指示。
```

## First run / 首测

Paste this fictional evidence:

```text
Project: CSV Desk, version 0.2
Merged: PR 12 adds CSV-to-Markdown output.
Release: the package has not been published.
Check: one UTF-8 sample converted; Windows has not been tested.
Decision: release owner has not approved a date.
Create a 100-word internal release brief. No external actions.
```

Have the second member ask: “Is 0.2 available to install, and does it support Windows?” The expected answer is that neither is established by the supplied evidence. Ask the Bot to revise the brief after the owner provides a new release receipt; the revision should update that fact without erasing the remaining platform limitation.

让第二位成员问“0.2 已经能安装了吗，Windows 能用吗？”预期回答是材料均不足以证明。随后给出一条新的发布回执，让 Bot 只更新对应事实，保留尚未验证的平台限制。

## Acceptance / 验收

- Both designated members can use the same Bot in the intended conversation.
- The brief cites supplied evidence and distinguishes merge, release, and platform testing.
- The reviewer can correct a fact and the next answer reflects that correction.
- No message, issue, release, or routine is created by this draft-only task.

Record the plan, app version, sharing scope, test date, and visible results before calling this workflow tested. Do not test permission isolation with real confidential data.

Official basis, checked 2026-11-16: [Grok Bot 1.0](https://x.ai/news/grok-bot-1-0) describes Team Bot sharing with specific people/groups and Slack/Teams use. The workflow and sample above are our proposal, not a claim from xAI. Team Bots existed before 1.0; that release improved sharing and management.
