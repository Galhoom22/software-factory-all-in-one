# HTML — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar. Markup habits live in [`best-practices.md`](best-practices.md) and [`html-living/`](html-living/README.md).

## 1. Clean Code in HTML shape

| Rule | HTML shape |
|------|------------|
| Names reveal intent | `id`/`class`/`data-*` names match the job; landmarks match purpose |
| One job | One `main`; sections have a clear heading; forms do one task |
| Readable in one pass | Prefer semantic tags a reviewer can scan without CSS |
| Trust boundaries | Native validation + labels; never trust client-only checks |
| Campsite | Replace `div` soup with semantics when touching the markup |

## 2. Architecture fit

- HTML = **structure and meaning**. CSS = presentation. JS/framework = behavior.
- Framework templates (React/Next, Blade, Livewire) still emit HTML — obsolete tags and a11y anti-patterns are still forbidden.
- Do not invent a second document outline that fights the product’s layout system.

## 3. Design patterns (judgment)

- Default: semantic landmarks + native forms/media.
- Prefer platform features (constraint validation, `dialog`, `details`) before custom widgets when they meet the need.
- Pattern-for-show custom elements without necessity fails this bar.

## 4. Automatic latest check (mandatory)

Before non-trivial HTML work:

1. Open this pack (`best-practices` + `html-living/` slice).
2. Re-check [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and/or [WHATWG HTML](https://html.spec.whatwg.org/multipage/) (especially [obsolete](https://html.spec.whatwg.org/multipage/obsolete.html)).
3. Update the pack same session if professionalism rises, through a pull request to the factory repository.

## Related

- JavaScript + Tailwind packs
- Product SECURITY / COMPLIANCE / a11y (WCAG) docs
- Coverage: `coverage/06-technologies.md`

---
