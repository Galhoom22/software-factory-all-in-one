# React — best practices

Sources: [Learn](https://react.dev/learn), [Creating a React app](https://react.dev/learn/creating-a-react-app), [Hooks](https://react.dev/reference/react/hooks), [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect).

## 1. What React is

- A **library** for building UIs from **components** (functions that return markup).
- Pair with a **renderer** (`react-dom` on web, React Native elsewhere) and usually a **framework** or bundler for real apps.

## 2. Production defaults (new apps)

1. Prefer a **recommended framework** (e.g. Next.js App Router when the product chose it) over Create React App — CRA is **deprecated** for new apps.
2. For a custom SPA without a full framework: **Vite** / Parcel / Rsbuild (official “from scratch” path) — not CRA.
3. Use **function components + Hooks**; call Hooks only at the top level.
4. Mount with **`createRoot`** (`react-dom/client`) — not `ReactDOM.render`.
5. Keep components small; lift state up when siblings must share data; use Context sparingly for distant shared values.

## 3. Data and Effects

- Derive UI from props/state during render when possible.
- Use **`useEffect`** only to sync with **external** systems (network widgets, browser APIs) — not to mirror props into state or orchestrate app data flow ([You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)).
- Prefer framework data patterns / Server Components where the host supports them (e.g. Next App Router) over client-only fetch-in-effect for initial page data.

## 4. React 19 habits

- Prefer **Actions** / `useActionState` / `useOptimistic` / `use` where they fit forms and async UI.
- Treat **`ref` as a prop** on function components (React 19) — avoid legacy `forwardRef` unless required for compatibility.
- Use TypeScript (or equivalent) instead of runtime `propTypes`.

## 5. Pairing

- Next.js product → React pack + (when present) Next pack; do not invent a second SPA.
- Inertia → React **19+** client adapter + Inertia pack.
- Always respect product SRS pin; re-check Context7 `/reactjs/react.dev` this session for non-trivial APIs.

---
