# Insomnia

**Official:** https://insomnia.rest/

## Import (one shot)

1. Insomnia → **Import** → choose `*.insomnia.json` (export format **4**).
2. Or import `../openapi/openapi.yaml` and overlay the environment values from `environment.template.json`.
3. Activate the local environment; set `baseUrl`.

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
