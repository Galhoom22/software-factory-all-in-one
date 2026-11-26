# TestSprite Guidelines — Backend

Copy into the backend implementation repository. Paste into MCP/agent prompts when generating TestSprite API runs.

Upload a lean PRD (`--role prd`) and api-doc or OpenAPI summary (`--role api-doc`) before generation.

## Hard constraints

- Assert authorization: user A cannot access user B resources.
- Webhooks and payments fail closed on bad signatures.
- Fictional fixtures only; never production secrets in the TestSprite env.
- Prefer status codes and stable `error.code` fields from the API contract.

## P0 themes (adapt to the product)

1. 401 without auth
2. Cross-user access denied
3. Market / geo / plan gates as specified
4. Quota / rate-limit error codes
5. Staff-only routes return 403 for normal users
