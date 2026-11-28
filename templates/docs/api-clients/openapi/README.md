# OpenAPI 3.1 (hub)

**Official:** https://www.openapis.org/ · https://learn.openapis.org/ · Swagger: https://swagger.io/

**Import anywhere:**

- [Swagger Editor](https://editor.swagger.io/) — paste or open `openapi.json` / `openapi.yaml`
- Swagger UI — point at the committed Description URL or local file
- Postman / Insomnia / Apidog — Import → OpenAPI

## Rules

- Paths and schemas must match `docs/API_CONTRACT.md`.
- Prefer generating this file; do not hand-edit generated output.
- Declare path parameters for every `{id}` segment.
- Keep `servers` for local (and staging when it exists); no secrets in the file.
- Bootstrap on the **first** landed route; regenerate in the **same** change as every route edit (always-current).

## Common mistakes

- Editing only in Swagger UI and never regenerating into git.
- OpenAPI fields the server does not implement.
- Skipping regenerate when a route lands mid-actor.
- Waiting until actor/ship day to create the Description.
