# French — frontend

Uppercase French may drop accents in some house styles — define the rule in DESIGN.

## Must

- ICU messages for plurals (one/other/…); watch gendered nouns in templates
- Fonts with full French coverage
- Intl for currency € and decimal comma

## Avoid

- Hardcoded English plurals (+ 's') on French nouns
- Breaking ligatures/accents in CSS uppercase without testing

## Stack pointer

Apply with the product's pinned UI stack packs under [`technologies/`](../../technologies/README.md). Locale rules in this folder win over generic English assumptions.
