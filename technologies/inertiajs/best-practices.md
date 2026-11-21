# Inertia.js — best practices

Sources: [Introduction](https://inertiajs.com/docs/v3/getting-started/index), [Server-side setup](https://inertiajs.com/docs/v3/installation/server-side-setup), [Client-side setup](https://inertiajs.com/docs/v3/installation/client-side-setup), [Upgrade guide](https://inertiajs.com/docs/v3/getting-started/upgrade-guide). Re-check official docs before non-trivial Inertia work (D-66).

## 1. What Inertia is

- **Modern monolith:** server controllers + page components; **no client-side routing** and **no API required** for the UI.
- Not a framework — **glue** via adapters (official clients: React, Vue, Svelte; Laravel is the primary documented server).
- Prefer this stack when the product wants classic server patterns with SPA UX — not when the product already committed to a separate SPA + JSON API.

## 2. Install defaults (Laravel + Vite)

1. Meet prerequisites: **PHP 8.2+**, **Laravel 11+**, chosen client (React 19+ / Vue 3 / Svelte 5+), Vite **7+** for `@inertiajs/vite`.
2. Server:
   ```bash
   composer require inertiajs/inertia-laravel
   php artisan inertia:middleware
   ```
   Append `HandleInertiaRequests` to the `web` group; use root `app.blade.php` with `<x-inertia::head />` and `<x-inertia::app />` + `@vite(...)`.
3. Client (pick one):
   ```bash
   npm install @inertiajs/vue3 @inertiajs/vite
   # or @inertiajs/react / @inertiajs/svelte
   ```
   Add `inertia()` to Vite; boot with `createInertiaApp()` (plugin resolves pages under `./pages` or `./Pages`).
4. Prefer Laravel **starter kits** for greenfield speed when they match the product.

## 3. Responses and pages

- Prefer `Inertia::render('Page/Name', […props])` from controllers — pass only what the page needs (`only` / selective props).
- Prefer **shared data** via `HandleInertiaRequests::share()` for auth/flash — not copy-paste on every render.
- Prefer v3 **Blade components** (`x-inertia::head` / `x-inertia::app`) over legacy `@inertia` / `@inertiaHead` for new apps (SSR head fallback).

## 4. v3 platform habits

- Prefer the **built-in XHR client** — do not add Axios “because Inertia always had it” (removed as a dependency in v3).
- Prefer `@inertiajs/vite` for page resolution + simplified SSR (dev SSR via `npm run dev`; production still builds SSR as documented).
- Prefer `Inertia::optional()` over removed `Inertia::lazy()`.
- Prefer new event names: `httpException` / `networkError` (not `invalid` / `exception`).

## 5. Security / trust

- Authorize in controllers/policies the same as any Laravel app — Inertia is not an auth boundary.
- Validate on the server; form helpers are UX.
- Never put secrets in shared Inertia props.

## 6. Pairing

- Laravel pack for backend conventions; JS/HTML/CSS (and Tailwind) for the page layer.
- Do not mix Livewire full-page UI and Inertia as competing shells without a product decision.

---
