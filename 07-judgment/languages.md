# Judgment — human languages (locale craft)

Absorb **locale / human-language craft** when a product ships (or adds) a UI or content language. Keep the on-demand library in [`languages/`](../languages/README.md) — open it **only through this selector** (SF-23). All guidance is **English only** (SF-21): packs teach agents how to handle Arabic, German, French, Spanish, English product locales — they never switch the kit's documentation language.

## Adopt

| Idea | Lands in |
|------|----------|
| Match **shipped locales** → open those packs | FEATURE design · DESIGN · i18n |
| RTL/LTR, formal address, collation, search are design forces | ARCHITECTURE · ADR |
| Regional variants (en-US/en-GB, es-ES/es-419, fr-FR/fr-CA, de-DE/de-CH) are decisions | DESIGN · DECISIONS |
| Open only locales in scope for the change | Day design |

## Forbid

| Do not | Why |
|--------|-----|
| Write kit docs in Arabic/German/… | SF-21 — English-only instructions |
| Open all language packs every day | Selector; ship what the product uses |
| Treat English UI rules as universal | Breaks RTL, accents, formality |
| Paste packs into products | SF-23 |
| Silent auto-translate of user content | Product rules / COMPLIANCE |

## Selection procedure

1. Which **BCP 47** locales does this product (or this change) ship?
2. Any **regional** variant decision needed?
3. Open those packs under [`languages/`](../languages/README.md) (usually 1–2).
4. Apply UI/UX → frontend → backend → data checklists.
5. ADR if adding a locale or changing default market language.

## Problem → pack

| You need to … | Pack | Do not confuse with |
|---------------|------|---------------------|
| Shipping **Arabic (Modern Standard)** UI or data | Arabic (Modern Standard) (`arabic/`) | English pack (baseline LTR) |
| Arabic **search / normalize / NLP** (display vs index, diacritics, morphology) | `arabic/` especially `data-and-search.md` + `backend-api.md` | DIY character hacks; Latin transliteration encodings in product storage |
| Shipping **English** UI or data | English (`english/`) | Kit documentation language (always English) |
| Shipping **German** UI or data | German (`german/`) | english pack |
| Shipping **French** UI or data | French (`french/`) | spanish pack |
| Shipping **Spanish** UI or data | Spanish (`spanish/`) | french pack |

## Confusion pairs

| Pair | Ask |
|------|-----|
| Kit English vs product English | Are we writing **agent instructions** (always EN) or **product UI** locale `en`? |
| Arabic pack vs bilingual product | MSA/RTL craft vs "we also have English" |
| Arabic display text vs search keys | Preserve user spelling in storage; fold alef/yeh/teh-marbuta/diacritics only on the index/query path |
| es-ES vs es-419 | Which market vocabulary? |
| fr-FR vs fr-CA | Same |
| Sie/du or vous/tú | Formality locked in DESIGN? |

## Day workflow hook

When must-finish adds or changes a **shipped locale**, open the matching pack(s) and note evidence (or N/A) in the day summary. New lasting locale → update product DESIGN/SRS and consider a new `languages/<slug>/` pack if missing.
