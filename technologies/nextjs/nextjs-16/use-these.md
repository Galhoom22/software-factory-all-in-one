# Next.js 16 — prefer these

Sources: [Getting Started](https://nextjs.org/docs/app/getting-started), [Installation](https://nextjs.org/docs/app/getting-started/installation), [Proxy](https://nextjs.org/docs/app/api-reference/file-conventions/proxy), [Upgrading](https://nextjs.org/docs/app/getting-started/upgrading).

## App setup

| Prefer | Notes |
|--------|-------|
| `next@16` / **16.4.x** stable | Pin from npm `latest`; re-check before bump |
| Matching `react` / `react-dom` / `eslint-config-next` | `next upgrade` or install `@latest` together |
| `create-next-app@latest` | App Router + TS + ESLint + Turbopack defaults |
| Node **≥ 20.9** | Per package `engines` |
| Turbopack for local `next dev` when scaffolded | Installation default |

## App Router

| Prefer | Notes |
|--------|-------|
| `app/` directory | Layouts, pages, nested routes |
| Server Components by default | Async server data when needed |
| `"use client"` islands | Interactivity only |
| Server Actions / mutating data guides | Forms and mutations |
| `fetch` caching / revalidate options as documented | Static vs dynamic intent |
| Route Handlers (`route.ts`) | Web Request/Response APIs when an HTTP endpoint is needed in-app |
| `proxy.ts` + `export function proxy` | Next 16 request interception (ex-Middleware) |
| `next/link`, `next/image`, `next/font` | Navigation / images / fonts |
| Metadata APIs | Titles, OG, SEO for public pages |

## Upgrade path

| Prefer | Notes |
|--------|-------|
| `npx next upgrade` (16.1+) | Official upgrade command |
| `@next/codemod` `middleware-to-proxy` | When migrating Middleware → Proxy |

---
