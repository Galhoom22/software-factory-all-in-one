# Arabic (Modern Standard) — frontend

Pair with technologies packs for the UI framework; locale rules here win for Arabic-specific behavior.

## Must

- i18n catalogs with ar keys; never concatenate sentences — use ICU/MessageFormat for plurals where needed
- Fonts that cover Arabic (and Latin if bilingual); test shaping for lam-alif and diacritics
- dir and lang on the document root; per-snippet lang when embedding English inside Arabic
- Input: allow Arabic Yeh/Kaf variants users type; normalize carefully for search without destroying stored forms

## Avoid

- Browser default fonts that miss Arabic glyphs
- Assuming string.length === visual length for truncation

## Stack pointer

Apply with the product's pinned UI stack packs under [`technologies/`](../../technologies/README.md). Locale rules in this folder win over generic English assumptions.
