# English — frontend

Kit docs stay English (SF-21); product UI English is separate.

## Must

- i18n ready even if English-only today: keys not hardcoded mega-strings in many files
- Intl.DateTimeFormat / NumberFormat with explicit locale
- Plural rules via ICU (one/other is not enough for all future locales — keep messages structured)

## Avoid

- String concat for whole sentences
- toLocaleString() without locale argument in shared code

## Stack pointer

Apply with the product's pinned UI stack packs under [`technologies/`](../../technologies/README.md). Locale rules in this folder win over generic English assumptions.
