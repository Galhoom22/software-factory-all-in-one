# Pre-delivery UX checklist — {{PRODUCT}}

Tick before closing any visible UI screen. Inspired by common UX skill checklists (**checklist only** — do not install a competing design-system generator).

Visual authority stays with: `PRODUCT.md` · `DESIGN.md` · Impeccable (if used) · `ANTI-SLOP.md` · `DESIGN-ERRORS.md`.

## Before delivery (every screen)

### Accessibility and focus

- [ ] Text contrast meets WCAG 2.2 AA for the surface
- [ ] Keyboard focus is visible — never `outline: none` without a replacement
- [ ] Meaning is not carried by color alone
- [ ] Clickable targets ≈ 44px with a suitable cursor

### Copy and direction

- [ ] Every interface language is complete (no mixed chrome)
- [ ] RTL / LTR alignment matches `dir` (icons, chevrons, progress)
- [ ] Long identifiers wrap safely; headings do not clip
- [ ] Empty / error / network states have a clear next action

### Icons and motion

- [ ] No emoji as product UI icons — use the locked icon set
- [ ] At most purposeful motion; respect `prefers-reduced-motion`
- [ ] No banned AI-slop patterns from `ANTI-SLOP.md`

### Frames and sanity

- [ ] Verify at the product’s staff and mobile viewports
- [ ] Rebuild assets if styles changed; check the page in the browser (not from memory)
- [ ] Owner-reported design defect: fix + log in `DESIGN-ERRORS.md`
- [ ] Screen index / actor `screens.md` updated when a specimen was added or renamed
