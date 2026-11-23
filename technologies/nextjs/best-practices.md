# Next.js — best practices

Sources: [Docs](https://nextjs.org/docs), [Getting Started](https://nextjs.org/docs/app/getting-started), [Installation](https://nextjs.org/docs/app/getting-started/installation), [Proxy](https://nextjs.org/docs/app/api-reference/file-conventions/proxy).

## 1. What Next.js is

- A **React framework** for full-stack web apps: routing, rendering, bundling, and optimizations on top of React.
- **App Router** is the current default path for new apps (Server Components, modern React).
- **Pages Router** remains supported for existing apps — not the default for greenfield App Router work.

## 2. Production defaults (new apps)

1. Scaffold with `create-next-app@latest` (TypeScript, ESLint, App Router, Turbopack, `@/*` alias — re-check Installation).
2. Prefer **App Router** (`app/`) for new features and new products.
3. Default UI to **Server Components**; add `"use client"` only for interactivity that needs the browser.
4. Fetch and mutate on the server when possible (async Server Components, Server Actions / Server Functions).
5. Use **`next/link`**, **`next/image`**, **`next/font`** for navigation, images, and fonts.
6. Keep Node on the documented engine range (`>=20.9.0` as of pack day).

## 3. Request interception (Next 16)

- Starting with **Next.js 16**, the old **Middleware** convention is renamed **Proxy** (`proxy.ts` / `proxy.js`, export `proxy`) — same job (rewrite, redirect, headers), clearer name.
- Prefer `proxy` for new Next 16 apps; migrate with the official codemod when upgrading older apps.

## 4. Security & boundaries

- Never put provider secrets or real PII in Client Components or public env (`NEXT_PUBLIC_*`).
- Treat Route Handlers and Server Actions as trust boundaries — validate inputs; authz on the server.
- Prefer the product’s API/backend for AI and entitlement unless architecture explicitly colocates that work.

## 5. Pairing

- Always open the **React** pack for component/hooks craft.
- Tailwind / SEO judgment when styling or public pages change.
- Re-check Context7 `/vercel/next.js` + official docs this session for non-trivial APIs (D-66 / D-97).

---
