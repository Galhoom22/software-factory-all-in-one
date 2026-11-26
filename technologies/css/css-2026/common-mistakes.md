# CSS 2026 — common mistakes

## Cascade & specificity

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Escalating `!important` wars | Unmaintainable overrides | Lower specificity; `@layer`; fix source order |
| ID selectors for routine styling | Hard to override | Classes / attributes / layers |
| Forgetting inheritance | Unexpected text/color leaks | Reset intentionally; use tokens |

## Layout

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Using only floats for page structure | Fragile layouts | Flex/Grid |
| Mixing Grid and absolute without a plan | Overlap bugs | One layout model per region |
| Ignoring logical properties in RTL | Mirrored UI breaks | `*-inline-*` / `*-block-*` |

## Responsive

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Device-sniffing CSS | Wrong breakpoints | Viewport/`@media` + container queries |
| Assuming a new module is universal | Broken UI on older browsers | MDN Baseline vs product floor |
| Animating everything | Motion sickness / jank | Reduced-motion; animate cheap properties |

## Agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Saying “CSS3” as a version pin | Misleading | Modules + Snapshot 2026 + MDN |
| Ignoring Tailwind pack on a Tailwind product | Duplicate systems | Open both packs |
| Memorizing property lists | Drift | Re-open MDN CSS hub + this pack |

---
