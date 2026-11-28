# Arabic (Modern Standard) — frontend

Pair with technologies packs for the UI framework; locale rules here win for Arabic-specific behavior.

## Must

- i18n catalogs with `ar` keys; never concatenate sentences — use ICU/MessageFormat for plurals where needed
- Fonts that cover Arabic (and Latin if bilingual); test shaping for lam-alif, contextual forms, and optional diacritics
- `dir` and `lang` on the document root; per-snippet `lang` when embedding English inside Arabic
- Input: accept keyboard variants users type (ي/ى, ك/ک, ه/ة); **normalize for search**, not for every keystroke display
- Digits: product DESIGN picks Western (`0-9`) or Eastern Arabic-Indic; render consistently; do not silently convert in the UI without a product rule
- Clean paste: presentation-form Arabic (Unicode compatibility / Arabic Presentation Forms) should round-trip to basic letters for editing; strip non-text noise without deleting legitimate Latin/ASCII in bilingual fields

## Avoid

- Browser default fonts that miss Arabic glyphs
- Assuming `string.length ===` visual length for truncation (grapheme clusters + combining marks)
- Dedializing (stripping tashkeel) in the UI when the user entered vocalized text
- Client-side "Arabic cleanup" that deletes Latin-1 letters the product still needs (emails, codes)

## Stack pointer

Apply with the product's pinned UI stack packs under [`technologies/`](../../technologies/README.md). Locale rules in this folder win over generic English assumptions.
