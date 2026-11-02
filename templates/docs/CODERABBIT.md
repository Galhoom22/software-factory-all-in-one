# CodeRabbit — Review Setup

> ⚠️ **Planning only.** Copy the owner yaml and guidelines into each **implementation** repository when you subscribe.

> Product: [CodeRabbit](https://www.coderabbit.ai/). Docs: [configuration reference](https://docs.coderabbit.ai/reference/configuration) · [path instructions](https://docs.coderabbit.ai/configuration/path-instructions) · [code guidelines](https://docs.coderabbit.ai/knowledge-base/code-guidelines).

| Field | Value |
|-------|-------|
| Document | CodeRabbit setup |
| Status | Draft |
| Related | SECURITY, COMPLIANCE, API contract, frontend/backend TESTING |

## 1. How we use it

| Repository | Config to copy | Guidelines |
|------------|----------------|------------|
| Frontend | `docs/frontend/coderabbit.yaml` → `.coderabbit.yaml` | `docs/frontend/CODERABBIT_GUIDELINES.md` |
| Backend | `docs/backend/coderabbit.yaml` → `.coderabbit.yaml` | `docs/backend/CODERABBIT_GUIDELINES.md` |

Keep `AGENTS.md` in each implementation repo (CodeRabbit loads it by default).

## 2. Install checklist

1. Subscribe and install the GitHub App on both implementation repos.
2. Commit `.coderabbit.yaml` and `CODERABBIT_GUIDELINES.md`.
3. Open a small PR and confirm a review posts.
4. Tune profile (`assertive` → `chill`) if comments are too noisy.
5. Never put real personal data in branches the bot reviews.

## 3. Non-negotiable review themes

Secrets; trust boundary (server authority); cross-user access; PII in AI/logs/URLs; HTML injection; unsigned payment webhooks; API contract drift; out-of-scope features.

## 4. What CodeRabbit does not replace

Human review of auth, billing, and deletion; CI tests; legal counsel; product decisions.
