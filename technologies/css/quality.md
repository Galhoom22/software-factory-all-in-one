# CSS — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar.

## 1. Clean Code in CSS shape

| Rule | CSS shape |
|------|-----------|
| Names reveal intent | Class/token names match the job (`--color-danger`, `.site-nav`) |
| One job | One rule set ≈ one concern; avoid mega “god” selectors |
| Readable in one pass | Prefer flat/layered structure over nested specificity wars |
| Trust boundaries | Do not style secrets into the page; keep unsafe user HTML unstyled-as-trusted |
| Campsite | Delete dead rules when touching a sheet |

## 2. Architecture fit

- CSS = presentation layer. Prefer the product’s existing tokens, layers, and Tailwind/`@theme` setup.
- Prefer composition (utilities + small custom CSS) over one-off snowflake sheets per screen.
- For bilingual/RTL products, logical properties are part of correctness — not optional polish.

## 3. Design patterns (judgment)

- Default: Flex/Grid + logical spacing + custom properties.
- Prefer container queries for component-owned responsiveness when the layout is container-driven.
- Do not invent BEM-on-BEM-on-Tailwind without cause.

## 4. Automatic latest check (mandatory)

Before non-trivial CSS work:

1. Open this pack (`best-practices` + `css-2026/` slice) and Tailwind pack if the product uses it.
2. Re-check [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) / relevant module guide and/or [Snapshot 2026](https://www.w3.org/TR/css-2026/).
3. Gate new features on product browser floor (MDN Baseline).
4. Update the pack same session if professionalism rises, through a pull request to the factory repository.

## Related

- HTML + Tailwind + JavaScript packs
- Coverage: `coverage/06-technologies.md`

---
