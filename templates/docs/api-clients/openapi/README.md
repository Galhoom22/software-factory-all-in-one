# OpenAPI 3.1

**Import:** Apidog → Import → OpenAPI; Postman → Import → OpenAPI; Insomnia → Import → OpenAPI / Swagger.

**File:** [`openapi.template.yaml`](openapi.template.yaml) — rename to `openapi.yaml` and replace placeholders.

## Rules

- Paths and schemas must match `docs/API_CONTRACT.md`.
- Do not document fields the server does not implement.
- Prefer generating this file from an inventory script in the API implementation repo.

## Common mistakes

- Hand-editing OpenAPI and the Postman collection separately.
- Marking auth as Bearer when the product uses cookie sessions.
- Omitting error `code` strings the frontend branches on.
