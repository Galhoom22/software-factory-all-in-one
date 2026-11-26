# Inertia.js 3.x — prefer these

Sources: [Introduction](https://inertiajs.com/docs/v3/getting-started/index), [Server-side setup](https://inertiajs.com/docs/v3/installation/server-side-setup), [Client-side setup](https://inertiajs.com/docs/v3/installation/client-side-setup), [Upgrade guide](https://inertiajs.com/docs/v3/getting-started/upgrade-guide).

## Install / boot

| Prefer | Notes |
|--------|-------|
| `inertiajs/inertia-laravel:^3.0` | PHP 8.2+, Laravel 11+ |
| `@inertiajs/{vue3\|react\|svelte}@^3.0` | Matching client |
| `@inertiajs/vite@^3.0` | Page resolution + simplified SSR (Vite 7/8) |
| `createInertiaApp()` minimal entry | Plugin mounts / resolves pages |
| `<x-inertia::head />` + `<x-inertia::app />` | New Blade components; SSR head fallback |
| `php artisan inertia:middleware` + `HandleInertiaRequests` on `web` | Shared data + asset versioning |

## Server responses

| Prefer | Notes |
|--------|-------|
| `Inertia::render('Page', $props)` | Page components |
| `Inertia::optional()` | Replaces removed `lazy()` |
| Nested `defer` / `optional` / `merge` | Dot-notation partial reloads |
| Enums in render props | Supported in v3 |
| Shared props in middleware | Auth, flash, locale |

## Client / visits

| Prefer | Notes |
|--------|-------|
| Built-in XHR client | No Axios dependency |
| `router.on('httpException'\|'networkError')` | Renamed events |
| `router.cancelAll()` | Replaces `router.cancel()` |
| `useHttp` when needed | Standalone HTTP without page visits |
| Optimistic updates + rollback | v3 feature — use when UX needs it |
| ESM `import` only | Packages are ESM-only |

## SSR

| Prefer | Notes |
|--------|-------|
| Dev SSR via `npm run dev` with Vite plugin | No separate Node SSR process in development |
| Production SSR build/start as documented | Still required for prod SSR |

---
