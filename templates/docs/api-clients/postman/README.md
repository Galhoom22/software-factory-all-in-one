# Postman

**Official:** https://www.postman.com/ · [Import docs](https://learning.postman.com/docs/getting-started/importing-and-exporting/importing-data/)

## Import (one shot)

1. Postman → **Import** → select:
   - `*.postman_collection.json` (Collection **v2.1**)
   - `*.postman_environment.json`
2. Top-right environment picker → your **local** env.
3. Set `baseUrl` (e.g. `http://localhost:8000`). Fill auth vars only in the env — never in the collection JSON in git.

## Best practices

- Collection v2.1 only (v1 unsupported).
- Folders match contract sections.
- Collection-level `Accept` / `Accept-Language`; override per request when needed.
- Pre-request scripts only for CSRF/idempotency helpers — keep them small and documented.
- Tests tab: assert status + optional `code` for business errors; do not duplicate the whole Feature suite.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Embedding production tokens in the collection | Environment secrets / local overrides only |
| Forgetting CSRF cookie step on SPA APIs | Document and script `GET /sanctum/csrf-cookie` first |
| Using Collection Runner against production | Local/staging only unless explicitly approved |
| Editing paths only in Postman | Change contract → regenerate |

## Files

| File | Role |
|------|------|
| [`collection.template.json`](collection.template.json) | Importable Collection v2.1 skeleton |
| [`environment.template.json`](environment.template.json) | Local environment skeleton |
