# Judgment — API clients (Postman · Insomnia · Apidog)

Manual API exploration that stays honest with the contract. Complements automated tests — it does not replace them.

**Official homes:** [Postman](https://www.postman.com/) · [Insomnia](https://insomnia.rest/) · [Apidog](https://apidog.com/)

## Problem this prevents

- “Green tests” while nobody can import and exercise the live API in one click.
- Three hand-edited collections that drift from `API_CONTRACT` / OpenAPI.
- Secrets, production PII, or real billing keys inside committed collections.
- Treating a Postman dump as a second source of truth for paths and shapes.

## Adopt (wire into planning + implementation)

1. **Contract stays SoT.** Human agreement lives in product `docs/API_CONTRACT.md` (or equivalent). Machine inventory / OpenAPI is **derived** from that contract — never invent paths in a client folder.
2. **One inventory → many clients.** Keep a single endpoint inventory (or OpenAPI 3.1). Generate or export **Postman Collection v2.1**, **Insomnia export**, and **Apidog-ready OpenAPI** from that inventory. Prefer a small generator script over hand-syncing three trees.
3. **Folder per client** under `docs/api-clients/` (implementation API repo) or planning `docs/api-clients/` when the product is API-only:

   | Folder | Import file | Also include |
   |--------|-------------|--------------|
   | `openapi/` | `openapi.yaml` (OpenAPI 3.1) | README: regenerate rule |
   | `postman/` | `*.postman_collection.json` + `*.postman_environment.json` | README: auth, variables, practices |
   | `insomnia/` | `*.insomnia.json` (export format 4) + env | README: same |
   | `apidog/` | Prefer OpenAPI import (`../openapi/…`) + env notes | README: Apidog project setup |

4. **Environments, not hard-coded hosts.** `baseUrl`, `acceptLanguage`, and auth placeholders live in environment files. Local / staging / production are separate envs; production env never ships real secrets.
5. **Auth as the product does it.** Cookie/CSRF SPA, Bearer, API keys — document the exact pre-request steps in each client README. Collections that skip CSRF for Sanctum-style APIs lie to the team.
6. **Idempotency and consent.** Requests that spend money, start jobs, or need AI consent include the required headers/`code` expectations in the request description.
7. **Day evidence.** When an API Story lands, cite: contract change (if any) + regenerated clients + at least one happy-path import smoke in the chosen client (or N/A with reason). Automated Feature tests remain the judge plane; the collection is the human verify plane.

Product template: [`templates/docs/api-clients/`](../templates/docs/api-clients/README.md).

## Forbid

| Forbid | Why |
|--------|-----|
| Hand-maintaining three full collections as independent SoTs | Drift; wrong paths ship |
| Committing tokens, session cookies, webhook secrets, or real PII | Security / COMPLIANCE |
| Replacing Feature/CI tests with “I clicked Send in Postman” | Builder-only verification |
| OpenAPI that invents fields not in the contract | Cross-surface breakage |
| One giant undocumented dump with no folders or env | Unusable for the team |

## Best practices (all three tools)

- Folder by domain (Auth, Account, Billing, …) matching the contract sections.
- Name requests `METHOD path` or a short intent (`Register`, `Start tailor`).
- Document expected status + business `code` on failure in the request description.
- Use variables for IDs returned by prior steps (`{{jobDescriptionId}}`).
- Keep example bodies **fictional** (clearly fake emails/names).
- After every contract change that adds/renames/removes an endpoint: regenerate clients in the **same** change.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Importing once, never regenerating | Tie regenerate to the contract PR checklist |
| Putting `Authorization: Bearer` on a cookie SPA API | Match Sanctum/CSRF (or your real auth) |
| Same Idempotency-Key forever in the collection | Generate per intentional user action; reuse only on retry |
| Testing webhooks with unsigned bodies | Use provider test tools / signed fixtures |
| Apidog “sync from production” inventing docs | Import **your** OpenAPI; do not scrape live as SoT |

## Related homes

- [`api-design.md`](api-design.md) — how the HTTP API should look
- [`api-readiness.md`](api-readiness.md) — local / CI / staging smoke bar
- [`verification-engineering.md`](verification-engineering.md) — criteria → evidence
- [`cross-surface-compatibility.md`](cross-surface-compatibility.md) — FE/BE handshake
- Product `docs/API_CONTRACT.md` · Feature tests · 09-CI-CD
