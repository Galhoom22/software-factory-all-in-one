# CSS 2026 — stop using these

Sources: [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), modern layout guides, product a11y expectations.

**Rule for agents:** do not introduce the left column in new stylesheets.

## Legacy layout / presentational CSS

| Stop using | Use instead |
|------------|-------------|
| Float-based full page grids | Flexbox / Grid |
| Table layout for non-tabular UI | Flex/Grid |
| Spacer GIFs / empty layout `div`s driven by CSS hacks | Gap + modern layout |
| Absolute positioning for every column | Grid/flex alignment |
| `!important` as default override tool | Lower specificity / layers / better order |

## Direction & sizing

| Stop using | Use instead |
|------------|-------------|
| Physical-only props in bilingual/RTL UIs (`margin-left` as the only tool) | Logical properties (`margin-inline-start`, …) |
| Fixed px-only for all type/space when product must scale | `rem` / tokens / fluid where appropriate |
| Vendor-prefix soup for long-Baseline properties | Unprefixed standard properties |

## Harmful habits

| Stop using | Use instead |
|------------|-------------|
| Ultra-deep selector chains (`#app div div…`) | Classes / `:is` / layers / utilities |
| Inline `style=""` for design-system work | Stylesheets / Tailwind utilities |
| Hiding content with `display:none` when it must stay accessible incorrectly | Correct a11y patterns (`hidden`, visually-hidden utilities the product already has) |
| Motion that ignores reduced-motion | Wrap non-essential animation in `prefers-reduced-motion` |

## Architecture anti-patterns

| Stop using | Use instead |
|------------|-------------|
| Parallel design tokens fighting Tailwind/`@theme` | One token source |
| Copying 2012 blog “clearfix” page shells | MDN layout cookbook + Flex/Grid |
| Assuming Snapshot inclusion = shipped in product browsers | Check MDN Baseline vs product floor |

---
