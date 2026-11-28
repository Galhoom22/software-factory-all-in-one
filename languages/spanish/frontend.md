# Spanish — frontend

Sort order: ñ is a distinct letter in traditional Spanish collation — verify engine behavior.

## Must

- ICU plurals for Spanish
- Fonts covering ñ and accented vowels
- Date/number formats via Intl for the chosen regional locale

## Avoid

- Uppercase that corrupts accents inconsistently
- Assuming one Spanish for all markets

## Stack pointer

Apply with the product's pinned UI stack packs under [`technologies/`](../../technologies/README.md). Locale rules in this folder win over generic English assumptions.
