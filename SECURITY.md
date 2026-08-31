# Security

Community templates are untrusted third-party software. A share link is public. Adding a shared bot accepts Grok Bot third-party bot terms. Full instructions are often visible on the share page.

All bots on one account share one computer (files, browser sessions, logins). Do not treat a second bot as a security boundary.

## After import

1. Inspect the profile and standing instructions.
2. Connect one connector.
3. Run the featured template's first safe task when one is listed; otherwise choose a harmless read-only task.
4. Only then enable routines or writes.

Never paste API keys into SETUP. Reconnect plugins yourself. A share copies first-party marketplace plugins by plugin id, not your credentials.

## Skills may be missing

Preview can show skills while the export ships skills: [] (forum 169911). After import, check skills before relying on one.

## We reject

- Secret exfiltration
- Terms-of-service bypass
- Credential harvesting
- Instructions that disable approvals
- Hidden custom MCP
- Prompt-injection payloads

The lint script also scans template files for secret-like strings and rejects private import / demo hosts.

## Reports

Report vulnerabilities through a GitHub private advisory, not a public issue.
https://github.com/majiayu000/awesome-grok-bot/security/advisories/new
