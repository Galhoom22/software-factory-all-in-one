# Tailwind CSS — quality bar (Clean Code · UI structure · patterns)

Works with Ponytail: smallest complete change that still meets this bar.

## 1. Clean Code in Tailwind shape

| Rule | In Tailwind terms |
|------|-------------------|
| Names reveal intent | Prefer readable utility stacks; extract a named component when the same long stack repeats with meaning |
| One job | One component owns one visual job; do not dump unrelated layout + marketing chrome into one class soup without structure |
| Comments explain why | Comment non-obvious `@theme` tokens or intentional `outline-hidden` a11y choices — not every `flex` |
| DRY at the right time | Shared layout → component or `@utility` / theme token; do not `@apply` everything “for DRYness” |
| Campsite | Leave class lists and CSS entry files clearer than you found them |

## 2. Architecture fit

- **CSS entry** is the composition root for Tailwind (`@import "tailwindcss"` + `@theme`). Keep framework config (Vite plugin) next to other build config.
- **Design tokens** live in CSS (`@theme`) or the product design system — not scattered magic hex in class names when a token exists.
- **FE app vs prototype:** same major Tailwind; mocks stay fictional; no second unofficial theme.

## 3. Design patterns (judgment)

- Utility-first composition is the default — not a BEM layer “for architecture.”
- Extract a **component** when repetition shares meaning (button, field, card-as-interaction). Do not invent a CSS framework inside the product.
- `@apply` is a sharp tool: OK for a tiny repeated primitive; bad as a second stylesheet language.

## 4. Automatic latest check (mandatory)

Before non-trivial Tailwind work:

1. Open this pack (`best-practices` + `tailwindcss-v4/` slice).
2. Re-check [Vite install](https://tailwindcss.com/docs/installation/using-vite) / [upgrade](https://tailwindcss.com/docs/upgrade-guide) or Context7 for the pinned **v4** line — memory is not evidence.
3. If product SRS is still on v3, do not upgrade silently — ADR + SRS/CI.

## Related

- Ponytail / Clean Code project rules
- Coverage: `coverage/06-technologies.md`
