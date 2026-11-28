# Apidog

**Official:** https://apidog.com/

Apidog’s portable SoT for this kit is the committed, generated packs (OpenAPI + Postman), not a proprietary project dump (those drift and are hard to review in git).

## Import (runnable)

1. Apidog → **Import** → **Postman** → select the generated collection **and** environment from [`../postman/`](../postman/README.md). Its request-level scripts (for example the CSRF token fetch) come along; an OpenAPI import cannot carry scripts, so it leaves the auth flow to manual steps.
2. Select the **local** environment and Send — no hand-added headers. On the first unsafe Send, confirm `X-XSRF-TOKEN` appears under **Actual Request**; Apidog documents Postman script compatibility, and this one look proves it for your version.
3. For docs/mocks only, also import [`../openapi/openapi.yaml`](../openapi/openapi.template.yaml) (product file: `openapi.yaml`); env names match [`environment.template.env`](environment.template.env).

## Best practices

- Treat Apidog docs as a **view** of your OpenAPI/contract — push fixes back to the contract, then re-import.
- Use Apidog’s test scenarios for happy-path smoke; keep CI Feature tests as the judge plane.
- Separate local / staging / production environments; lock production behind approval.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| “Auto sync from production URL” as SoT | Import your committed OpenAPI |
| Editing only inside Apidog cloud without git | Export or regenerate OpenAPI into the repo |
| Sharing team workspace with live secrets | Env secrets / vault; fictional samples in git |

## Files

| File | Role |
|------|------|
| [`environment.template.env`](environment.template.env) | Env var names for Apidog environments |
| `../postman/*.json` | Runnable import (collection + environment) |
| `../openapi/openapi.template.yaml` | Reviewable description (docs/mocks) |
