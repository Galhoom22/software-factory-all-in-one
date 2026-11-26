# Next.js 16 — stop using these

Sources: [Docs](https://nextjs.org/docs) (App vs Pages), [Proxy](https://nextjs.org/docs/app/api-reference/file-conventions/proxy), upgrade/codemod notes, React pack (CRA).

**Rule for agents:** do not introduce the left column in new Next **16** App Router application code.

## Versions / tooling

| Stop using | Use instead |
|------------|-------------|
| Next **13/14/15** patterns as “current” without checking | Next **16** docs + this slice |
| Canary as production pin by habit | Stable **16.4.x** `latest` until product decides |
| Node **18** for new Next 16 apps | Node **≥ 20.9** |
| Create React App beside Next for the same UI | Stay on Next |

## Routing & data

| Stop using | Use instead |
|------------|-------------|
| Pages Router as default for **new** apps | App Router (`app/`) |
| `getStaticProps` / `getServerSideProps` / `getInitialProps` in new App Router features | Server Components + `fetch` / caching guides |
| `_app` / `_document` patterns for new App Router apps | Root `layout.tsx` |
| New `middleware.ts` / `middleware` export on Next 16 greenfield | `proxy.ts` / `proxy` export (codemod for upgrades) |

## Architecture anti-patterns

| Stop using | Use instead |
|------------|-------------|
| AI provider keys or secrets in Client Components / `NEXT_PUBLIC_*` | Server-only env; backend for AI |
| Fat Client Components that fetch everything in `useEffect` | Server fetch + small client islands |
| Second SPA (Vite/CRA) for the same actor without ADR | One Next UI host |
| Business entitlement only in the browser | Server/API source of truth |

---
