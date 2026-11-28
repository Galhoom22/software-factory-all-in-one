# French — backend / API

Canada (fr-CA) legal requirements differ — product COMPLIANCE.

## Must

- UTF-8 catalogs; accept accented input in names
- Locale-specific validation messages
- Address: Code postal, not ZIP

## Avoid

- Normalizing away accents before storage unless search layer needs a separate normalized column

## Contract notes

- Locale fields belong on account/session where the product stores preference.
- Do not invent endpoints outside the product API contract.
