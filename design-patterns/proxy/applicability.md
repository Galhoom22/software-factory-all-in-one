# Proxy — applicability

## Signals

- Real subject construction appears in constructors of screens that often never call it.
- The same authz/audit preamble is duplicated before every method of one collaborator.
- Remote clients are created “just in case” on every request.
- Tests need a stand-in that records access attempts without opening vaults or payment rails.

## Anti-signals

- The object is cheap and always used — wrapping it only adds noise.
- You need many orthogonal wrappers (logging + metrics + retry) around an always-live object — consider Decorator or middleware.
- The APIs differ and need translation — that is Adapter, not Proxy.
- Laravel policies/gates, HTTP middleware, or API gateway rules already enforce the same check.
- A single `lazy()` helper or promise at the composition root already delays construction.

## Simpler alternative first

1. **Framework middleware / gates / policies** for HTTP and request-scoped authz.
2. **Deferred binding** in the container (`lazy` / factory closure) without a named Proxy type.
3. **Decorator** when the real object always exists and you only add behavior.
4. **Adapter** when the foreign API shape does not match your port.

Adopt Proxy when callers must keep the *same* interface and interception belongs at the object boundary (especially non-HTTP subjects: file vaults, sockets, payment SDKs).

## Framework-native equivalents

| Platform | Prefer this first | Why it often replaces Proxy |
|----------|-------------------|------------------------------|
| Laravel | Middleware, policies/gates, `lazy()` container bindings, HTTP client middleware | Request authz and pipeline checks belong in middleware/policies — not a hand-rolled Proxy per controller ([`technologies/laravel/`](../../technologies/laravel/)). |
| PHP | Closure factories at the composition root; stream wrappers only when fitting the stream model | Avoid Proxy classes that merely hide `new` ([`technologies/php/`](../../technologies/php/)). |
| Node / JavaScript | Express/Connect middleware; fetch/axios interceptors; lazy `import()` | Middleware ≠ invent Proxy for every route guard. Use Proxy when a domain port must stay sync-shaped while delaying I/O ([`technologies/javascript/`](../../technologies/javascript/)). |

Verified claim (conceptual): if the only “proxy” work is HTTP auth or logging, the framework pipeline is the supported place — naming GoF Proxy there usually duplicates middleware.
