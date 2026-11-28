# Judgment — API description + clients (OpenAPI · Swagger · Postman · Insomnia · Apidog)

Human-verify the HTTP API **from the first route that lands**, not after the actor is finished. Complements automated tests — never replaces them.

**Standards / tools:** [OpenAPI Initiative](https://www.openapis.org/) · [OpenAPI learning](https://learn.openapis.org/) · [Swagger](https://swagger.io/) · [Postman](https://www.postman.com/) · [Insomnia](https://insomnia.rest/) · [Apidog](https://apidog.com/)

## Problem this prevents

- Waiting until “the project is done” to get a usable collection — then discovering contract drift.
- Three hand-edited Postman/Insomnia/Apidog trees that disagree with `API_CONTRACT` and with each other.
- Treating a client dump as a second source of truth.
- Secrets or real PII inside committed collections.
- “Green Feature tests” while nobody can open Swagger/Postman and exercise the live API in one import.

## Adopt (always-current — day one)

1. **Contract stays human SoT.** Product `docs/API_CONTRACT.md` (or equivalent) is the agreement. Machine artifacts are **derived**.
2. **OpenAPI is the machine hub.** Maintain an **OpenAPI 3.1** Description (`openapi` + `info` + `paths` / `components` — see [learn.openapis.org structure](https://learn.openapis.org/specification/structure)). Commit **JSON and/or YAML**. Swagger Editor / Swagger UI, Postman, Insomnia, and Apidog all import OpenAPI.
3. **One inventory → many clients.** From that OpenAPI (or a single endpoint inventory that generates it), produce:
   - OpenAPI 3.1 (hub)
   - Postman Collection **v2.1** + environment
   - Insomnia export (format 4) + environment
   - Apidog pack = import OpenAPI + env notes (do not rely on proprietary project dumps as SoT)
4. **Bootstrap on the first API Story.** Empty or stub folders are fine on day 0 of coding; the **first** authenticated route that merges must update inventory/OpenAPI + regenerate clients in the **same** change. Then **every** Story that adds, renames, removes, or changes a path/method/header/body updates the pack again — same PR. Never “we’ll fill Postman at the end.”
5. **CI drift gate.** Implementation API repos run a check that regenerates clients and **fails if git would change** generated files, and that inventory paths stay aligned with the framework route table. Stale collections cannot merge.
6. **Environments, not hard-coded hosts.** `baseUrl`, locale, idempotency placeholders live in env files. Production secrets never ship in git.
7. **Auth as the product does it.** Document CSRF/cookie vs Bearer in each client README. Wrong auth in the collection lies to the team.
8. **Day evidence.** On API days: contract IDs + regenerated clients + Feature tests. Optional: one happy-path Send in Postman/Swagger against local. Collections are the **human verify plane**; CI Feature tests are the **judge plane**.

Product template: [`templates/docs/api-clients/`](../templates/docs/api-clients/README.md).  
Impl CI sketch: regenerate + `check-api-clients` in [`templates/implementation/github-actions/backend-ci.yml`](../templates/implementation/github-actions/backend-ci.yml).

## Forbid

| Forbid | Why |
|--------|-----|
| Deferring collections until actor/ship day | Unusable mid-build; drift accumulates |
| Hand-maintaining three full collections as independent SoTs | Drift; wrong paths ship |
| Committing tokens, cookies, webhook secrets, or real PII | Security / COMPLIANCE |
| Replacing Feature/CI tests with “I clicked Send” | Builder-only verification |
| OpenAPI that invents fields not in the contract | Cross-surface breakage |
| “Auto sync from production URL” as SoT in Apidog/Swagger | Live scrape ≠ contract |
| Skipping the CI drift check | Stale packs merge silently |

## Best practices

### OpenAPI / Swagger

- Keep `openapi: 3.1.0` (or the line your tools pin); bump `info.version` when the **description** of the API changes.
- List `servers` with clear descriptions (local / staging); use variables, not secrets.
- Path item parameters for `{id}`-style segments; reusable pieces under `components` when they repeat.
- Operation `summary` / `description` carry expected status and business `code`s the UI branches on.
- Import the same file into [Swagger Editor](https://editor.swagger.io/) for a quick read; Swagger UI for browse — still regenerate from inventory/contract, do not edit only in the UI.

### Postman / Insomnia / Apidog

- Folders match contract sections.
- Fictional example bodies only (`@example.test`).
- Fresh `Idempotency-Key` per intentional money/job action.
- After contract change: regenerate → re-import or refresh → smoke one path.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| “Collections later when FE is ready” | Backend owns the pack from first route |
| Editing only inside Postman/Apidog cloud | Change contract → inventory → regenerate → commit |
| OpenAPI without path parameters for `{id}` | Declare them; clients need them |
| Inventory missing new artisan/framework routes | CI route-parity fails until inventory catches up |
| Same Idempotency-Key forever | Generate per user action; reuse only on retry |

## Related homes

- [`api-design.md`](api-design.md) — how the HTTP API should look
- [`api-readiness.md`](api-readiness.md) — local / CI / staging smoke bar
- [`verification-engineering.md`](verification-engineering.md) — criteria → evidence
- [`cross-surface-compatibility.md`](cross-surface-compatibility.md) — FE/BE handshake
- Day pipeline: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) API + clients gate
- Product `docs/API_CONTRACT.md` · Feature tests · 09-CI-CD
