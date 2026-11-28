# English — backend / API

Agent replies to humans in English per standing — that is communication, not this pack.

## Must

- Default message catalogs in English for logs and admin when no locale is set — never leak other locales into kit docs
- UTF-8; ASCII transliteration only when a legacy interface requires it and is documented

## Avoid

- Assuming all names are ASCII
- Logging PII in English prose dumps

## Contract notes

- Locale fields belong on account/session where the product stores preference.
- Do not invent endpoints outside the product API contract.
