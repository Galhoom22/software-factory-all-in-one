# German — frontend

Test sort order with umlauts (Ä often near A depending on collation).

## Must

- Normalize ß/ss only with a documented policy; do not corrupt user input
- Fonts covering umlauts and ß
- Date format TT.MM.JJJJ (or locale Intl) — not US mm/dd
- Plural and gendered terms: prefer inclusive patterns the product DESIGN defines (e.g. neutral phrasing)

## Avoid

- ASCII folding that strips umlauts in display
- Hard-wrapped English layouts that clip German

## Stack pointer

Apply with the product's pinned UI stack packs under [`technologies/`](../../technologies/README.md). Locale rules in this folder win over generic English assumptions.
