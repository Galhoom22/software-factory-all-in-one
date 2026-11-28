# German — backend / API

Formal email salutations follow the Sie/du decision.

## Must

- UTF-8; accept äöüß in names and addresses
- Validation messages in German catalogs when locale=de
- Address forms: consider Straße, PLZ, Bundesland — not US state

## Avoid

- Rejecting ß as invalid character
- Shipping English-only invoices where German is required

## Contract notes

- Locale fields belong on account/session where the product stores preference.
- Do not invent endpoints outside the product API contract.
