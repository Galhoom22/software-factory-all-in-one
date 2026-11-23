# React — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar.

## 1. Clean Code in React shape

| Rule | React terms |
|------|-------------|
| Names reveal intent | Component / hook names match the job (`UserMenu`, `useCheckout`) |
| One job | One component ≈ one UI concern; extract custom hooks for reusable logic |
| Readable in one pass | Prefer clear JSX + early returns over nested ternaries and effect spaghetti |
| Trust boundaries | Never put secrets or real PII in client bundles; validate at APIs |
| Campsite | Delete dead components/hooks when touching a feature |

## 2. Architecture fit

- React = **UI**. Domain rules, authz, and entitlement stay where the product architecture puts them (Laravel API, Next server, etc.).
- Prefer the product’s chosen host (Next App Router, Vite SPA, Inertia) — do not add another framework “for later.”
- If the product UI is Next.js, improve React craft **inside** Next — do not migrate to a bare CRA/Vite app by habit.

## 3. Design patterns (judgment)

- Default: function components + Hooks + composition.
- Context for ambient UI concerns (theme, locale) — not a global dump for all app state.
- Avoid class components and HOCs in new code unless an old library forces them.

## 4. Automatic latest check (mandatory)

Before non-trivial React work:

1. Open this pack (`best-practices` + `react-19/` slice).
2. Re-check [react.dev](https://react.dev/) / [Hooks](https://react.dev/reference/react/hooks) and/or Context7 `/reactjs/react.dev`, plus npm `react` **latest** (19.3.x line as of pack day).
3. Do not silently bump a product SRS pin (e.g. Next major) from a React patch — ADR if the product line moves.

## Related

- JS / HTML / CSS / Tailwind · [`../nextjs/`](../nextjs/README.md) · Inertia · `coverage/06-technologies.md` · `07-judgment/context7-docs.md`

---
