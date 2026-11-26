# Laravel 13 — prefer these

Sources: [releases](https://laravel.com/docs/13.x/releases), [docs 13.x](https://laravel.com/docs/13.x).

## Framework 13 highlights

| Prefer | Why |
|--------|-----|
| **`PreventRequestForgery`** middleware | Formalized forgery/origin protection (replaces CSRF alias usage in new code) |
| **Controller attributes** `#[Middleware]`, `#[Authorize]` | Declarative authz/middleware colocated with actions |
| **Job attributes** `#[Tries]`, `#[Backoff]`, `#[Timeout]`, `#[FailOnTimeout]`, … | Ops-visible retry/timeout policy on the job class |
| **`Queue::route(Job::class, …)`** | Central queue/connection routing for job classes |
| **`Cache::touch(...)`** | Extend TTL without read/rewrite |
| **Laravel AI SDK** (when product has AI) | First-party text/embeddings/agents — backend only |
| **JSON:API resources** (when API style fits) | Spec-compliant resource serialization |
| **Vector / semantic query helpers** (pgvector products) | `whereVectorSimilarTo`-style APIs from docs — stamp embedding model on rows |
| **Form Requests + `$request->validated()`** | Trust boundary at HTTP |
| **API Resources** for outbound JSON | Stable FE contract shapes |
| **Sanctum SPA** cookie auth (when product is SPA) | Documented first-party pattern |
| **Pest / PHPUnit feature tests** + factories | Prove HTTP + authz |
| **Pint** | Project formatter aligned with Laravel |

## Still prefer (any recent Laravel)

| Prefer | Notes |
|--------|-------|
| Policies for object auth | Foreign ID → 404 JSON per product contract |
| Queued jobs for slow/AI/mail/webhooks | Dispatch after commit when needed |
| Explicit `$fillable` / casts | No `$request->all()` into models |
| Eager loading | Kill N+1 in feature tests when lists grow |
| `Arr::first` / `Arr::last` with callbacks | Avoid global helper ambiguity with PHP 8.5 polyfills |
