# Next.js 16 — common mistakes

## Server vs client

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| `"use client"` on every file | Huge bundles / lost RSC benefits | Default server; mark only interactive leaves |
| Passing non-serializable props to Client Components | Runtime errors | Pass plain data; keep functions on the server |
| Secrets imported into a client module | Leak | Server-only modules / env |

## Routing & Proxy

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Still scaffolding `middleware.ts` on Next 16 new apps | Deprecated convention | Use `proxy.ts` / `proxy` |
| Forgetting `config.matcher` on Proxy | Runs too broadly | Narrow matcher |
| Mixing Pages and App routers without a plan | Dual conventions | Prefer App for new work; migrate deliberately |

## Data

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Copy-paste `getServerSideProps` into `app/` | Wrong API | Server Component `fetch` / caching docs |
| Ignoring cache/revalidate intent | Stale or over-fetched data | Explicit `cache` / `revalidate` as needed |
| Mutating without Server Actions / handlers | Ad-hoc client POSTs | Follow Mutating Data guide |

## Agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Memorizing Next 14 Middleware-only samples | Stale Next 16 guidance | Official Proxy docs + Context7 16.x |
| Assuming npm canary is “latest” | Unstable pin | Check `latest` tag (16.4.x on pack day) |
| Bumping product SRS silently when npm moves | Unplanned upgrades | ADR for major/product pin changes |

---
