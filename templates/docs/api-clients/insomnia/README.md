# Insomnia

**Official:** https://insomnia.rest/

## Import (runnable)

Cookie-session products: Insomnia is **not** a verified runnable client. Its docs list Postman `request`-object operations (the CSRF script uses `pm.request.headers.upsert`) among Postman import limitations ([scripts docs](https://developer.konghq.com/insomnia/scripts/)); the format 4 export has no documented script field; and the Cookie template tag yields the URL-encoded value, which the server rejects as a token header. Run the session flow in Postman or Apidog. In Insomnia, send the CSRF-cookie request first, then set `X-XSRF-TOKEN` to the URL-decoded `XSRF-TOKEN` cookie before each unsafe request (re-copy it after login, which rotates it).

Setup (all products):

1. Insomnia → **Import** → choose `*.insomnia.json` (export format **4**).
2. Or import `../openapi/openapi.yaml` and overlay the environment values from `environment.template.json` (browsing only: it sends no `Origin`/`Referer`, so a cookie session will not stick).
3. Activate the local environment; set `baseUrl`. Cookie-session products using the format 4 export also set `frontendUrl` (it feeds `Origin`/`Referer`) to an origin, with port, in the server's stateful-domains list, before the CSRF-cookie request.

## Best practices

- Prefer regenerating the export from the shared inventory/OpenAPI.
- Keep request groups aligned with contract sections.
- Store secrets in environment / OS keychain — not in the committed export.
- Document CSRF / login order in the workspace description when using cookie auth.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Mixing Design and Debug docs as SoT | Contract + OpenAPI remain SoT |
| Committing `.insomnia` app data with cookies | Export clean resources only |
| Skipping TLS verification “forever” | Local only; never as a habit for staging |

## Files

| File | Role |
|------|------|
| [`collection.template.json`](collection.template.json) | Insomnia export format 4 skeleton |
| [`environment.template.json`](environment.template.json) | Variable names to mirror in Insomnia env |
