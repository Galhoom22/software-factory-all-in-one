# API clients — import packs

**Purpose:** one-click import into Postman, Insomnia, or Apidog so humans can verify the HTTP API alongside automated tests.

**Source of truth:** product `docs/API_CONTRACT.md` (human) → `openapi/openapi.yaml` + inventory (machine) → generated client files. Never invent endpoints in a client folder.

**Judgment:** [`software-factory-all-in-one/07-judgment/api-clients.md`](../../software-factory-all-in-one/07-judgment/api-clients.md) (from this file after seed: `docs/api-clients/README.md`).

## Layout

```text
docs/api-clients/
  README.md                 ← this index
  openapi/                  ← OpenAPI 3.1 (Apidog + many tools import this)
  postman/                  ← Collection v2.1 + environment
  insomnia/                 ← Insomnia export + environment
  apidog/                   ← Apidog setup (imports ../openapi)
```

## How to use (any product)

1. Fill or regenerate `openapi/openapi.yaml` from the contract (prefer a generator script over hand edits).
2. Regenerate `postman/` and `insomnia/` from the same inventory/OpenAPI.
3. Import the file for the tool you use today (see each folder’s README).
4. Select the **local** environment; never commit real secrets.

## After a contract change

Same PR / Story: update contract → regenerate all clients → smoke one happy path in your preferred client → keep Feature tests green.

