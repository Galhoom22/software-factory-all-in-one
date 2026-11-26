# Laravel 13 — stop using these

Sources: [upgrade guide](https://laravel.com/docs/13.x/upgrade), [releases](https://laravel.com/docs/13.x/releases), plus older patterns that fight modern Laravel.

## Deprecated / renamed on 13.x

| Stop using | Use instead |
|------------|-------------|
| New references to `VerifyCsrfToken` / `ValidateCsrfToken` in app code & tests | `PreventRequestForgery` (aliases exist but update direct refs) |
| Relying on `$event->exceptionOccurred` on `JobAttempted` | `$event->exception` |
| `$event->connection` on `QueueBusy` | `$event->connectionName` |
| Empty `uniqueBy` on `upsert` (MySQL/MariaDB) | Always pass non-empty unique columns (validated in 13) |
| Instantiating models inside `boot` / `boot*` while booting | Move logic outside boot cycle |
| Assuming singular inferred morph pivot table names with custom pivots | Explicit `$table` on the pivot model |
| Global `array_first($arr, $callback)` from legacy helpers | `Arr::first($arr, $callback)` — polyfill has different semantics |
| Unserializing arbitrary PHP objects from cache by default | Allow-list `serializable_classes` or store arrays |
| Leaving session `serialization` as `php` when you do not store objects | Prefer `json` when safe for the app (know it invalidates sessions) |

## Already obsolete (ban in new Laravel code)

| Stop using | Use instead |
|------------|-------------|
| Fat controllers with validation + SQL + mail | Form Request + action/job |
| `$request->all()` into Eloquent | `$request->validated()` + explicit mapping |
| `DB::raw` with user input | Bindings / query builder |
| Sync AI/provider HTTP in the request when contract is async | Queued job + 202 pattern |
| Bearer-only tests for Sanctum SPA apps | Stateful / session SPA test harness |
| Laravel Mix as the default for new Vite apps | Vite asset bundling docs |
| Inventing microservices for a modular monolith product | Domain modules in one app |
| DIY auth when Sanctum/Fortify/Socialite cover the product | First-party packages per SRS |

## PHP version note

Do not write Laravel app code that **requires PHP 8.6-only** syntax until Laravel’s support policy lists 8.6 — stick to 8.3–8.5 features for portable Laravel 13 apps (see [releases](https://laravel.com/docs/13.x/releases#support-policy)).
