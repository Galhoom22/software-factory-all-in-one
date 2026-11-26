# Next.js — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar.

## 1. Clean Code in Next shape

| Rule | Next terms |
|------|------------|
| Names reveal intent | Route segments and feature folders match the job |
| One job | Thin `page.tsx` / layouts; logic in feature modules or server libs |
| Readable in one pass | Prefer Server Components + clear client islands over effect-heavy pages |
| Trust boundaries | Validate in Server Actions / Route Handlers; no secrets in the client bundle |
| Campsite | Delete dead routes, unused `"use client"`, and obsolete `pages/` files when migrating |

## 2. Architecture fit

- Next = **UI host** (+ optional thin Route Handlers). Domain rules and entitlement stay where the product architecture puts them (often a separate API).
- Prefer **modular monolith** feature folders when the product uses that shape — not micro-frontends by habit.
- Do not invent a second SPA (Vite/CRA) beside Next for the same actor UI without an ADR.

## 3. Design patterns (judgment)

- Default: App Router + Server Components + composition.
- Client Components and Context only where interactivity or browser APIs require them.
- Avoid duplicating Pages Router data APIs (`getServerSideProps`, etc.) in new App Router code.

## 4. Automatic latest check (mandatory)

Before non-trivial Next work:

1. Open this pack (`best-practices` + `nextjs-16/` slice) and the React pack.
2. Re-check [nextjs.org/docs](https://nextjs.org/docs) and/or Context7 `/vercel/next.js` for the **pinned** major (16.x), plus npm `next` **latest**.
3. Do not silently bump a product SRS major — propose an ADR if the pack/npm line moves ahead of the product pin.

## Related

- React pack · Tailwind · `coverage/06-technologies.md` · `07-judgment/context7-docs.md` · product `docs/frontend/`

---
