# Languages (locale craft)

On-demand **human-language / locale** guidance for AI agents building multilingual products. Each pack teaches UI/UX, frontend, backend/API, and data/search rules for that locale.

**Critical:** every file in this folder is **English only** (SF-21). Packs describe how to handle Arabic, German, … — they are not written *in* those languages. Future locale packs keep the same rule.

## How to load

1. Open [`07-judgment/languages.md`](../07-judgment/languages.md) first.
2. Open **only** the locale packs the product actually ships (often 1–2; rarely more than 3 in one change).
3. Pair with product DESIGN / COMPLIANCE / SEO for market law and defaults.
4. Never paste packs into product repos (SF-23).

## Index

| Pack | Language | BCP 47 | Dir | Intent |
|------|----------|--------|-----|--------|
| [`arabic/`](arabic/README.md) | Arabic (Modern Standard) | `ar` | rtl | Ship Arabic UI and data correctly: RTL layout, MSA copy, collation, and search without dialect leakage unless the product explicitly chooses it. |
| [`english/`](english/README.md) | English | `en` | ltr | Treat English as the baseline LTR locale and the instruction language of this kit — clear UI copy, consistent locale formats, and no US/UK silent mix. |
| [`german/`](german/README.md) | German | `de` | ltr | Ship German UI with correct formal address, compound words, noun capitalization, and locale formats (de-DE vs de-AT/de-CH when relevant). |
| [`french/`](french/README.md) | French | `fr` | ltr | Ship French UI with accents, gender agreement in messages, correct spacing before punctuation, and fr-FR vs fr-CA awareness. |
| [`spanish/`](spanish/README.md) | Spanish | `es` | ltr | Ship Spanish UI with accents, inverted punctuation, pluralization, and explicit es-ES vs es-419 (Latin America) choices. |

**Count:** 5 packs (starter set). Add more locales with `_pack-template/` when a product earns them.

## Criticism

- Locale packs do not replace product bilingual requirements — they operationalize them.
- Do not open every language "just in case."
- Do not put Arabic/German/… prose into the kit README or judgment files.

## Sources (library-level)

| Source | Checked |
|--------|---------|
| Unicode / CLDR / ICU locale model | 2026-11-28 |
| W3C Internationalization (language & direction) | 2026-11-28 |
