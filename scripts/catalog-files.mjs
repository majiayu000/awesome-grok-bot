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

/**
 * Categories whose catalog file outgrew MAX_MARKDOWN_BYTES are split into
 * numbered parts: <category>.md, <category>-2.md, ... New lines go to the last part.
 */
export const CATEGORY_PARTS = {
  "personal-admin": 2,
};

export function catalogFileFor(category, readmeName) {
  return `catalog/${readmeName === "README.zh-CN.md" ? "zh-CN" : "en"}/${category}.md`;
}

export function catalogFilesFor(category, readmeName) {
  const parts = CATEGORY_PARTS[category] || 1;
  const dir = `catalog/${readmeName === "README.zh-CN.md" ? "zh-CN" : "en"}`;
  return Array.from({ length: parts }, (_, i) => `${dir}/${category}${i === 0 ? "" : `-${i + 1}`}.md`);
}

export function catalogLinkLine(category, readmeName, count) {
  const zh = readmeName === "README.zh-CN.md";
  const links = catalogFilesFor(category, readmeName).map((rel) => `[${rel}](${rel})`);
  const joined = links.join(zh ? "、" : ", ");
  return zh
    ? `完整列表（${count} 条）：${joined}`
    : `Full list (${count} shares): ${joined}`;
}
