/** Escape summary markup and URL autolinks without escaping prose periods. */
export function escapeMarkdownSummary(text) {
  return String(text).replace(/[\r\n]+/g, " ").replace(/([\\`[\]()<>:])/g, "\\$1").replace(/\b(www)\./gi, "$1\\.");
}
