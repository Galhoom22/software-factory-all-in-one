# Laravel — quality bar (Clean Code · architecture · patterns)

Modern Laravel syntax alone is not enough. Apply this file with [`best-practices.md`](best-practices.md) and [`../php/quality.md`](../php/quality.md).

## 1. Clean Code in Laravel shape

| Rule | Laravel shape |
|------|---------------|
| Names reveal intent | `StoreResumeRequest`, `ProcessWritingSuggestionsJob`, not `DataHandler` |
| One thing per unit | Controller method ≠ repository ≠ mailer |
| Thin HTTP layer | Form Request + Action/Service/Job; no 200-line `store()` |
| Honest errors | Domain/HTTP exceptions mapped to contract error codes |
| Campsite | Touch only task files; leave clearer Form Requests / tests |

Ponytail: smallest complete change — do not invent a Service + Interface + Repository for one query the query builder already expresses clearly.

## 2. Architecture (modular monolith)

Studio default for Laravel APIs: **modular monolith** (one app, one DB, domain modules) — not microservices on day one.

| Prefer | Avoid |
|--------|-------|
| Domain modules (`Identity`, `Billing`, …) + thin Shared | Flat `app/Http/Controllers` god-folder with cross-domain SQL |
| Framework container / providers for wiring | Global facades called from deep domain for everything without seams |
| Jobs/Events for side effects | Synchronous AI/email in the request when the contract is async |
| API contract as FE↔BE boundary | Returning ad-hoc arrays that drift from `API_CONTRACT.md` |

## 3. Design patterns (judgment)

Source: [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md).

| Do | Don’t |
|----|-------|
| Use Jobs, Middleware, Policies, Events as the framework’s patterns | DIY Observer/Singleton scaffolding |
| Strategy-like drivers via Laravel’s manager/`extend` when needed | Pattern encyclopedia in every feature PR |
| State problem → naive → why when adding a consequential abstraction | Factory for a single Eloquent call |

## 4. Automatic latest check (mandatory)

Before non-trivial Laravel work:

1. Open this pack + PHP pack.
2. Re-check [laravel.com/docs/13.x](https://laravel.com/docs/13.x) and/or Context7 `/laravel/docs` **13.x** — no owner ask.
3. If docs moved (new minor practices, new deprecations), update this pack when professionalism rises; sync the public Software Factory mirror.
4. Product SRS pin still wins for upgrades.

## Related

- API readiness across environments: `07-judgment/api-readiness.md`
- Day pipeline: `08-IMPLEMENTATION-DAY.md`
