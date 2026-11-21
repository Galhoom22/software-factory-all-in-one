# Inertia.js 3.x — stop using these

Sources: [Upgrade guide for v3.0](https://inertiajs.com/docs/v3/getting-started/upgrade-guide), install docs.

**Rule for agents:** do not introduce the left column in new Inertia 3 code.

## Versions / stack

| Stop using | Use instead |
|------------|-------------|
| Inertia **2.x** recipes on a 3.x pin | v3 docs + `^3.0` packages |
| PHP **&lt; 8.2** / Laravel **&lt; 11** with Laravel adapter | Meet official minimums |
| React **18** / Svelte **4** adapters | React **19+** / Svelte **5** runes |
| Vite **6** with `@inertiajs/vite` | Vite **7+** |
| CommonJS `require()` of Inertia packages | ESM `import` |

## Removed / renamed APIs

| Stop using | Use instead |
|------------|-------------|
| Axios as required Inertia transport | Built-in XHR (or explicit Axios adapter only if chosen) |
| `Inertia::lazy()` / `LazyProp` | `Inertia::optional()` |
| `router.cancel()` | `router.cancelAll()` (+ options to match old sync-only) |
| Events `invalid` / `exception` | `httpException` / `networkError` |
| `createInertiaApp` `future: { … }` block | Remove — always on in v3 |
| `inertia` attribute on head tags | `data-inertia` |
| `hideProgress` / `revealProgress` named exports | `progress.hide()` / `progress.reveal()` |
| Assuming `qs` / `lodash-es` from Inertia | Install yourself if the app imports them |
| React `.layout = ArrowLayout` directly | Wrap layout in an array: `.layout = [Layout]` |

## Architecture anti-patterns

| Stop using | Use instead |
|------------|-------------|
| Bolting Inertia onto a product that already ships SPA ↔ JSON API | Keep API architecture or ADR a deliberate switch |
| Duplicating Livewire full-app UI + Inertia shell | One UI architecture |
| Dumping entire Eloquent models into props | Explicit `only` / resources / DTOs |
| Putting secrets in shared Inertia props | Server-only config / never expose |

## Config

| Stop using | Use instead |
|------------|-------------|
| v2 `config/inertia.php` shape without republish | Republish + migrate to `pages` / simplified `testing` |
| Relying only on `@inertia` / `@inertiaHead` for new apps | Prefer `<x-inertia::*>` components |

---
