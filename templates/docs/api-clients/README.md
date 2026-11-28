# API description + clients — import packs

**Purpose:** from the **first** landed HTTP route, keep an always-current OpenAPI Description and one-click imports for Postman, Insomnia, and Apidog. Humans can open the pack any day of the build — not only at ship.

**Source of truth:** product `docs/API_CONTRACT.md` (human) → inventory / **OpenAPI 3.1** (machine hub) → generated Postman / Insomnia / Apidog env. Never invent endpoints in a client folder.

**Standards:** [OpenAPI](https://www.openapis.org/) · [learn.openapis.org](https://learn.openapis.org/) · [Swagger](https://swagger.io/)

**Judgment:** [`software-factory-all-in-one/07-judgment/api-clients.md`](../../software-factory-all-in-one/07-judgment/api-clients.md)

## Layout

```text
docs/api-clients/
  README.md
  inventory.json            ← edit this (or generate OpenAPI first)
  openapi/                  ← OpenAPI 3.1 hub (JSON + YAML) — Swagger/Postman/Insomnia/Apidog
  postman/                  ← Collection v2.1 + environment
  insomnia/                 ← export format 4 + environment
  apidog/                   ← imports ../openapi + env notes
```

## Cadence (non-negotiable)

| When | Action |
|------|--------|
| First API Story merges | Bootstrap inventory + generate all packs in the **same** PR |
| Any route/method/header/body change | Update inventory → regenerate → commit generated files |
| Before merge | CI `check-api-clients` must pass (no drift; route parity) |

## How to use

1. Regenerate: `node scripts/generate-api-clients.mjs` (product API repo).
2. Import the file for your tool (see each folder README), or open `openapi/openapi.json` in [Swagger Editor](https://editor.swagger.io/).
3. Select the **local** environment; never commit real secrets.

## After a contract change

Same PR / Story: update `API_CONTRACT.md` → update inventory → regenerate → Feature tests green → optional one Send in Postman/Swagger.
