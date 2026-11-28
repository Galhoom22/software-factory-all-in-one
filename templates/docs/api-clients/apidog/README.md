# Apidog

**Official:** https://apidog.com/

Apidog’s portable SoT for this kit is **OpenAPI**, not a proprietary project dump (those drift and are hard to review in git).

## Import (one shot)

1. Apidog → **Import** → **OpenAPI/Swagger**.
2. Select [`../openapi/openapi.yaml`](../openapi/openapi.template.yaml) (product file: `openapi.yaml`).
3. Create environments matching [`environment.template.env`](environment.template.env) (`baseUrl`, `acceptLanguage`, …).
4. Optional: also import the Postman collection if you want Postman-native test scripts; still regenerate from the same inventory.

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
| `../openapi/openapi.template.yaml` | Primary import artifact |
