# Laravel — best practices (13.x baseline)

Defaults for agents under this pack. Grounded in [Laravel 13.x docs](https://laravel.com/docs/13.x). Version-specific prefer/stop lists: [`laravel-13/`](laravel-13/README.md). Also required: [`quality.md`](quality.md) and the [`php/`](../php/README.md) pack.

## 1. Framework first

- Prefer **Laravel features** (container, Form Requests, Eloquent, Jobs, Events, Middleware, Policies, Validation, Queues) over DIY ServiceLocator / global state.
- Generate with **Artisan** (`make:model -crR`, `make:request`, `make:job`, …) then slim the stubs — do not hand-roll parallel structures.
- Keep **thin controllers**: authorize → validate (Form Request) → call application/domain → return resource/response.

## 2. HTTP boundary

- Validate with **Form Requests** (or equivalent dedicated validators) — not fat `Validator::make` blocks inside controllers for new endpoints ([validation](https://laravel.com/docs/13.x/validation)).
- Use `$request->validated()` / `$request->safe()` — never trust raw input for persistence.
- Return **API Resources** / JSON:API resources when shaping API JSON; keep Eloquent models out of the HTTP response layer when the contract is shared with FE.
- CSRF / forgery: use **`PreventRequestForgery`** (13.x name); do not weaken SPA cookie auth.

## 3. Eloquent & database

- Prefer **Eloquent + query builder** with clear scopes; avoid N+1 — eager load intentionally.
- Migrations are the source of schema truth; no manual prod schema edits.
- Mass assignment: `$fillable` / `$guarded` deliberate; never `User::create($request->all())`.
- Soft deletes / unique indexes / foreign keys as the domain requires — document irreversible migrations.

## 4. Queues & async

- Long / AI / email / webhook side effects → **Jobs** on the queue; keep HTTP fast.
- **Dispatch after DB commit** when the job needs the new row (see factory lessons).
- Use job attributes (`#[Tries]`, `#[Backoff]`, `#[Timeout]`, …) and `Queue::route(...)` where they clarify ops ([releases](https://laravel.com/docs/13.x/releases)).
- Idempotent jobs for webhooks / payments.

## 5. Authz & authn

- **Policies / gates** for object-level auth; foreign IDs → not-found JSON, not “exists but forbidden” leaks.
- SPA: **Sanctum** cookie session as product contract; stateful feature tests, not bearer-only assumptions when the app is SPA.
- Never log tokens / passwords; hash with framework Hash facade.

## 6. Testing & quality tools

- Feature (HTTP) tests are the default for API behavior; factories for data ([HTTP tests](https://laravel.com/docs/13.x/http-tests)).
- Run **Pint** (or project formatter) + the suite CI runs — local = CI.
- Fake AI / HTTP / mail / queue in tests; no live keys in CI.

## 7. Config & security

- Secrets only in env / host — never commit `.env`.
- Prefer `json` session serialization when not storing PHP objects in session ([upgrade](https://laravel.com/docs/13.x/upgrade)).
- Cache: do not unserialize arbitrary objects; use `serializable_classes` allow-list if objects must be cached.
- Prefer `Illuminate\Support\Arr::first` over ambiguous global `array_first()` helpers (polyfill conflicts).

## 8. AI (when the product uses it)

- Use the **Laravel AI SDK** as the integration surface when on 13.x — keep calls on the backend, queued, with PII stripped per product COMPLIANCE/SECURITY.
- Never put provider secrets in the frontend.
