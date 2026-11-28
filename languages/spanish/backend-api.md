# Spanish — backend / API

Phone and ID formats vary by country — do not hardcode one country.

## Must

- UTF-8; accept ñ and accents in names/addresses
- Message catalogs per regional locale if you ship both ES and LatAm

## Avoid

- Treating ñ as n in unique keys/slugs without a redirect strategy

## Contract notes

- Locale fields belong on account/session where the product stores preference.
- Do not invent endpoints outside the product API contract.
