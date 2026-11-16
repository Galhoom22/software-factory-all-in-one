# Security Requirements — {{PRODUCT}}

> ⚠️ **Planning only.** This repository is for product planning only. It is **not** the implementation repository.

> 🛡️ **Baseline, not a guarantee.** These rules come from the official sources in section 16, checked {{MONTH YEAR}}. A security review and a penetration test are still required before launch.

| Field | Value |
|-------|-------|
| Document | Security Requirements |
| Status | Draft |
| Related | [`requirements.md`](../requirements.md), [`SRS.md`](SRS.md) §5, [`API_CONTRACT.md`](API_CONTRACT.md), [`COMPLIANCE.md`](COMPLIANCE.md) |

Every page, component, endpoint, and job must satisfy this file and [`COMPLIANCE.md`](COMPLIANCE.md). Each rule has an **Owner** (FE / BE / Both), like the SRS.

---

## 1. Red Lines (Never Violate)

| ID | Rule |
|----|------|
| SR-01 | Never trust the client. Every authorization, validation, limit, and price check runs on the server. |
| SR-02 | Never return or change a record without checking that it belongs to the signed-in user. |
| SR-03 | Never put a secret in code, the repository, the frontend bundle, or logs. |
| SR-04 | Never send personal data to third parties (AI providers, analytics, logs) beyond what the user consented to. |
| SR-05 | Never render user or external text as HTML; no `dangerouslySetInnerHTML`, `eval`, `new Function`, or `javascript:` URLs. |
| SR-06 | Never build SQL, shell commands, file paths, or URLs by joining untrusted strings. |
| SR-07 | Never store or process card data; payments stay on the provider's hosted page. |
| SR-08 | Never show internal details to users: no stack traces, SQL, file paths, or debug pages in production. |
| SR-09 | Never add a dependency, script, font, or service without review. |
| SR-10 | Never disable a security control (CSRF, CSP, rate limit, HTTPS, signature check) to make a feature work. |

## 2. OWASP Top 10 and Where Each Is Covered

| OWASP risk | What it means for {{PRODUCT}} | Rules |
|------------|-------------------------------|-------|
| A01 Broken Access Control | {{EXAMPLE}} | SR-02, AZ |
| A02 Security Misconfiguration | Debug mode on, missing headers | HD, CR |
| A03 Software Supply Chain Failures | A compromised or outdated package | SC |
| A04 Cryptographic Failures | Plain HTTP, weak password hashing | CR |
| A05 Injection | SQL injection, XSS, unsafe file parsing | SR-05, SR-06, IV |
| A06 Insecure Design | Missing limits or abuse cases in a flow | RC |
| A07 Authentication Failures | Credential stuffing, weak passwords, account enumeration | AU |
| A08 Software or Data Integrity Failures | Unsigned webhooks, tampered builds | WH, SC |
| A09 Security Logging and Alerting Failures | Attacks unnoticed, or logs leak personal data | LG |
| A10 Mishandling of Exceptional Conditions | Errors that fail open or leak details | LG, IV |

## 3. Authorization and Access Control (AZ)

| ID | Rule | Owner |
|----|------|-------|
| AZ-01 | Every route except public pages and auth requires a signed-in user; deny by default. | BE |
| AZ-02 | Load every record through its owner; a foreign ID returns `404`. | BE |

## 4. Authentication and Sessions (AU)

| ID | Rule | Owner |
|----|------|-------|
| AU-01 | Session cookies, never tokens in browser storage. | Both |
| AU-02 | Passwords: at least 15 characters while the password is the only factor; no composition rules (NIST SP 800-63B-4). | Both |
| AU-03 | Responses never reveal whether an email exists. | Both |

## 5. Input, Output, and Injection (IV)

| ID | Rule | Owner |
|----|------|-------|
| IV-01 | Validate every request on the server; client validation is for usability only. | Both |
| IV-02 | On any error, keep the user's input on screen and save nothing partial. | Both |

## 6. File Uploads (FU)

*Optional:* allowed types and sizes, signature checks, private storage, parsing limits.

## 7. AI and LLM Safety (LM)

*Optional:* delete this section if the product uses no AI. Align with [`AI.md`](AI.md) and OWASP Top 10 for LLM Applications (verify current edition on owasp.org).

| ID | Rule | Owner |
|----|------|-------|
| LM-01 | Personal / regulated data reaches an external model only after product strip/redact rules and user consent (`SR-04`). | BE |
| LM-02 | Treat user uploads, retrieved documents, and tool results as **untrusted data**, not as instructions that can override system policy. | BE |
| LM-03 | Models that hold privileged tools must not be the same path that freely reads untrusted text; quarantine or strip agency from untrusted content. | BE |
| LM-04 | Validate model output before HTML, SQL, shell, file, or redirect use (`SR-05`, `SR-06`). | Both |
| LM-05 | Cap tokens, rate, and spend per user; fail closed when limits or timeouts fire. | BE |
| LM-06 | Tool/egress allowlists by default; never combine private data + untrusted content + open outbound fetch without a documented exception. | BE |
| LM-07 | Pin model IDs; re-run the fictional golden set before a production model swap (`AI.md`). | BE |

Upload parsing for AI ingest also follows §6 (content type by bytes, size caps including expanded archive entries).

## 8. Secrets and Cryptography (CR)

| ID | Rule | Owner |
|----|------|-------|
| CR-01 | HTTPS everywhere with HSTS. | Both |
| CR-02 | Secrets come from environment configuration; `.env` is never committed; CI scans for secrets. | Both |

## 9. Supply Chain and Dependencies (SC)

| ID | Rule | Owner |
|----|------|-------|
| SC-01 | Commit lock files and install with the lock file in CI. | Both |
| SC-02 | Run dependency audits in CI; fix critical and high findings before release. | Both |
| SC-03 | Enable dependency update alerts; keep each framework on the latest release of its version line. | Both |

## 10. Browser Security and Headers (HD)

| ID | Rule | Owner |
|----|------|-------|
| HD-01 | Content Security Policy on every page. | FE |
| HD-02 | `X-Content-Type-Options: nosniff`, `Referrer-Policy`, and a restrictive `Permissions-Policy`. | Both |
| HD-03 | No page can be framed by another site (`frame-ancestors 'none'`). | FE |

## 11. Abuse, Limits, and Business Flows (RC)

| ID | Rule | Owner |
|----|------|-------|
| RC-01 | Rate-limit authentication and expensive endpoints per user and per IP. | BE |
| RC-02 | Buttons disable while a request runs; the server handles repeats idempotently. | Both |

## 12. Payments and Webhooks (WH)

*Optional:* verify every webhook signature, process each event once, change plans only from verified webhooks.

## 13. Logging, Errors, and Monitoring (LG)

| ID | Rule | Owner |
|----|------|-------|
| LG-01 | Log security events without personal data. | BE |
| LG-02 | Users see a short, translated error; details stay in server logs. | Both |

## 14. Every Page Checklist (UI/UX)

Run this for every new or changed page, in the prototype and the real frontend.

- [ ] No user or external text is rendered as HTML (SR-05).
- [ ] No secret, token, or personal data in the code, URL, page title, or browser storage (SR-03, AU-01).
- [ ] Forms validate on the client for usability; errors keep the input (IV-01, IV-02).
- [ ] Error messages reveal nothing internal or whether an account exists (SR-08, AU-03).
- [ ] Destructive actions need an explicit confirmation.
- [ ] No third-party script, image, font, or iframe (SR-09).
- [ ] Buttons that start a job or payment disable while it runs (RC-02).

### 14.1 Prototype (`project-ui/`)

The prototype has no backend, so server rules do not apply to it, but it must not model an unsafe pattern the real frontend could copy. Its UI guard enforces the banned patterns.

## 15. Pre-Launch Security Checklist

- [ ] Every rule above reviewed against the implementation.
- [ ] Verified against OWASP ASVS Level 1 at least.
- [ ] Independent penetration test; critical and high findings fixed.

## 16. Sources

| Source | Version | Link |
|--------|---------|------|
| OWASP Top 10 | {{VERSION}} | [owasp.org/Top10](https://owasp.org/Top10/) |
| OWASP ASVS | {{VERSION}} | [owasp.org/www-project-application-security-verification-standard](https://owasp.org/www-project-application-security-verification-standard/) |
| OWASP API Security Top 10 | {{VERSION}} | [owasp.org/API-Security](https://owasp.org/API-Security/) |
| NIST SP 800-63B | {{VERSION}} | [pages.nist.gov/800-63-4/sp800-63b](https://pages.nist.gov/800-63-4/sp800-63b/) |
| OWASP Top 10 for LLM Applications | {{VERSION}} | [owasp.org/www-project-top-10-for-large-language-model-applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) |
