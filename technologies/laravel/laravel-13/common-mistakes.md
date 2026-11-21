# Laravel 13 — common mistakes

## Upgrade / config

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Composer still on `^12` while coding “13 style” | Attributes / AI SDK / CSRF rename missing | `laravel/framework: ^13`, Pest 4 / PHPUnit 12 per [upgrade](https://laravel.com/docs/13.x/upgrade) |
| Forgetting `PreventRequestForgery` in `withoutMiddleware` tests | Tests exclude wrong class; CSRF surprises | Update test middleware lists |
| Flipping session serialization to `json` without warning | All sessions invalidated | Plan re-auth or keep `php` temporarily |
| Caching Eloquent models without allow-list | Deserialization blocked / security footgun | Arrays or explicit `serializable_classes` |
| Custom cache driver missing `touch` | Contract break | Implement `touch($key, $seconds)` |

## HTTP / auth

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Validating in the controller “just this once” | Drift + untested rules | Form Request |
| Returning Eloquent models as JSON for FE contract | Extra attrs, N+1, shape drift | API Resource / contract DTO |
| Sanctum SPA tested as API token only | Login “doesn’t stick” | Stateful SPA test helpers |
| Policy returns 403 that confirms existence | IDOR oracle | Product rule: foreign → 404 JSON |

## Queues / data

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| `dispatch()` inside the same DB transaction as `create()` | Job runs before commit; missing model | Dispatch after commit |
| Ignoring missing-model behavior on notifications | Unexpected fails vs deletes | `#[DeleteWhenMissingModels]` / property |
| N+1 on index endpoints | Slow staging; fine on laptop with 3 rows | Eager load; assert query count when hot |

## AI / search

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Calling AI providers from the frontend | Secrets + PII leakage | Backend AI SDK + queue |
| Treating embedding model swaps as free | Incomparable vectors | Stamp model id; re-embed |
| Skipping fictional golden set after prompt/model change | Silent quality regression | Product AI.md / day pipeline rule |

## Agent / CI

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Memorizing “Laravel latest” | Wrong major docs | Open [docs/13.x](https://laravel.com/docs/13.x) / Context7 13.x this session |
| Using PHP 8.6-only APIs in Laravel 13 app | Breaks on supported 8.3–8.5 | Check Laravel PHP support table |
| Skipping Pint / feature tests locally | Red CI | Local = CI commands |
