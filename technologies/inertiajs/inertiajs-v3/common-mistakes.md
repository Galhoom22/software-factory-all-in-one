# Inertia.js 3.x — common mistakes

## Install

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Skipping `HandleInertiaRequests` on `web` | Broken shared data / visits | Publish + append middleware |
| Root view id mismatch | App does not mount | Match `<x-inertia::app id>` and client |
| React 18 on v3 React adapter | Unsupported | React 19+ |
| Forgetting republish after 2→3 | Stale config keys | `vendor:publish --force` + `view:clear` |

## Runtime

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Listening for `invalid` / `exception` | Handlers never fire | Use `httpException` / `networkError` |
| Expecting Axios interceptors by default | Missing | Built-in interceptors or Axios adapter |
| Over-sharing props | Leaks / fat payloads | Share minimally; authorize |
| Using `lazy()` | Gone in v3 | `optional()` |

## Architecture

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Replacing SPA+API with Inertia silently | Breaks FE/BE contract plan | ADR required |
| Mixing `@inertia` SSR head duplicates | Duplicate titles | Prefer `x-inertia::head` with slot fallback |

## Agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Following v2 tutorials on a v3 pin | Wrong APIs | v3 docs + upgrade guide |
| Memorizing package paths | Drift | Open Introduction + install guides |

---
