# Arabic (Modern Standard) — backend / API

Product COMPLIANCE may require Arabic consumer-facing docs — keep that in product docs, not this pack.

## Must

- Store locale (ar/en/…) on the user/account; Accept-Language is a hint, not the only source of truth when signed in
- Validation messages and emails: MSA catalogs; no auto-translate of user content without explicit request
- APIs: UTF-8 everywhere; do not strip Arabic letters in sanitizers
- Auth and legal pages: Arabic available when local consumer law requires it

## Avoid

- ASCII-only validators that reject Arabic names
- Silent machine translation of resumes/content

## Contract notes

- Locale fields belong on account/session where the product stores preference.
- Do not invent endpoints outside the product API contract.
