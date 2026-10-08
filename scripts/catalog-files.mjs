export const CATEGORY_META = {
  "coding-shipping": { heading: "Coding & shipping", anchor: "coding--shipping" },
  "inbox-calendar": { heading: "Inbox & calendar", anchor: "inbox--calendar" },
  "research-briefings": { heading: "Research & briefings", anchor: "research--briefings" },
  "customer-sales": { heading: "Customer & sales", anchor: "customer--sales" },
  "finance-ops": { heading: "Finance & ops", anchor: "finance--ops" },
  "content-publishing": { heading: "Content & publishing", anchor: "content--publishing" },
  "personal-admin": { heading: "Personal admin", anchor: "personal-admin" },
  "teams-handoffs": { heading: "Teams & handoffs", anchor: "teams--handoffs" },
};

/** GitHub stops rendering Markdown source after 512,000 bytes. Keep headroom. */
export const MAX_MARKDOWN_BYTES = 480_000;

export function catalogFileFor(category, readmeName) {
  return `catalog/${readmeName === "README.zh-CN.md" ? "zh-CN" : "en"}/${category}.md`;
}

export function catalogLinkLine(category, readmeName, count) {
  const rel = catalogFileFor(category, readmeName);
  return readmeName === "README.zh-CN.md"
    ? `完整列表（${count} 条）：[${rel}](${rel})`
    : `Full list (${count} shares): [${rel}](${rel})`;
}
