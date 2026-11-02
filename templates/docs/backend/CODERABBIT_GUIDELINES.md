# CodeRabbit guidelines — backend

Copy into the backend implementation repository. Keep this short; point to SECURITY and the API contract for full rules.

## Red lines

- Server-side authz and validation on every request.
- No cross-user resource access.
- No secrets in code or logs.
- No PII in AI payloads or application logs.
- Webhook signatures verified; no card data stored.
- Governing product rules enforced in code (no fabrication, limits, consent).

## Prefer

- Form requests + policies.
- Feature HTTP tests with a second-user authz case.
- Faked external providers in CI.
- Small PRs with contract-aligned shapes.
