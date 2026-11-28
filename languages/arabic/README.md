# Arabic (Modern Standard)

| | |
|--|--|
| **BCP 47** | `ar` |
| **Direction** | rtl |
| **Script** | Arabic script (abjad); contextual letter forms; optional Eastern Arabic-Indic digits |
| **Intent** | Ship Arabic UI and data correctly: RTL layout, MSA copy, collation, display-vs-index normalization, and search without dialect leakage unless the product explicitly chooses it. |

## Summary

Agent guidance for building **product** experiences in **Arabic (Modern Standard)**. This pack is written in **English only** (SF-21) — it teaches how to handle the locale; it does not switch the kit's documentation language.

Open only after [`07-judgment/languages.md`](../../07-judgment/languages.md) names this locale. Never paste packs into products (SF-23).

## File map

| File | Contents |
|------|----------|
| [`ui-ux.md`](ui-ux.md) | Layout, copy, a11y, direction |
| [`frontend.md`](frontend.md) | i18n, fonts, `lang`/`dir`, formatting |
| [`backend-api.md`](backend-api.md) | Locale resolution, messages, validation |
| [`data-and-search.md`](data-and-search.md) | Collation, search, exports |
| [`pitfalls.md`](pitfalls.md) | Common failures + checklist |

## Sources

| Source | Checked |
|--------|---------|
| Unicode / CLDR / ICU locale concepts (general) | 2026-11-28 |
| W3C i18n / WCAG direction & language (general) | 2026-11-28 |
| CAMeL Lab Arabic NLP practice (normalize, dediacritize, clean presentation forms, MSA vs dialect tooling — concepts only; MIT-licensed CAMeL Tools as reference) | 2026-11-28 |
| Product DESIGN + COMPLIANCE when market law applies | 2026-11-28 |


