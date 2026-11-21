# Inertia.js — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar.

## 1. Clean Code in Inertia shape

| Rule | Inertia terms |
|------|---------------|
| Names reveal intent | Page components match routes/features (`Users/Index`) |
| One job | Controllers authorize + shape props; pages render; avoid fat shared bags |
| Readable in one pass | Explicit props; deferred/optional props labeled clearly |
| Trust boundaries | Server validation + policies; props are public to the browser |
| Campsite | Drop unused shared props and dead pages when touching them |

## 2. Architecture fit

- Inertia = **server-driven SPA without a UI API**.
- If the product is already **SPA ↔ REST/JSON API**, do **not** replace that with Inertia by habit — record an ADR if the architecture should change.
- Domain rules stay in Laravel (or the server adapter); page components stay a view over that domain.

## 3. Design patterns (judgment)

- Default: controller `Inertia::render` + page component + shared middleware data.
- Prefer official defer/optional/merge props and form helpers before inventing parallel data loaders.
- Prefer one client adapter per app (React **or** Vue **or** Svelte).

## 4. Automatic latest check (mandatory)

Before non-trivial Inertia work:

1. Open this pack (`best-practices` + `inertiajs-v3/` slice).
2. Re-check [Introduction](https://inertiajs.com/docs/v3/getting-started/index) / install guides / [upgrade guide](https://inertiajs.com/docs/v3/getting-started/upgrade-guide) for **v3**.
3. Confirm PHP / Laravel / React|Svelte|Vite minimums vs product SRS.

## Related

- Laravel pack · coverage `coverage/06-technologies.md`

---
