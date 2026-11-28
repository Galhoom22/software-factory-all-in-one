# Arabic (Modern Standard) — backend / API

Product COMPLIANCE may require Arabic consumer-facing docs — keep that in product docs, not this pack.

## Must

- Store locale (`ar`/`en`/…) on the user/account; `Accept-Language` is a hint, not the only source of truth when signed in
- Validation messages and emails: MSA catalogs; no auto-translate of user content without explicit request
- APIs: UTF-8 everywhere; do not strip Arabic letters in sanitizers
- Persist **Unicode Arabic script** for names, resumes, and free text — not Latin transliteration encodings
- Auth and legal pages: Arabic available when local consumer law requires it
- Search/filter endpoints: apply the same normalization policy as [`data-and-search.md`](data-and-search.md) on both write-index and query paths (idempotent)

## Avoid

- ASCII-only validators that reject Arabic names
- Silent machine translation of resumes/content
- Treating MSA and dialect as interchangeable in stored labels without an explicit product dialect policy
- Shipping Buckwalter (or similar) strings over the public API

## NLP packages (judgment)

When the product needs morphology, dialect ID, NER, or robust Arabic cleaning beyond a few documented folds, evaluate a maintained Arabic NLP suite under [`07-judgment/packages.md`](../../07-judgment/packages.md) (cost, license, OS support, model size). Do not invent a private morphology engine for a small match feature.

## Contract notes

- Locale fields belong on account/session where the product stores preference.
- Do not invent endpoints outside the product API contract.
