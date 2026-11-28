# Singleton — applicability

## Signals

- A legacy codebase already uses `getInstance()` and you need a removal map.
- An external driver API literally crashes if two instances exist, and the framework cannot wrap lifetime.
- You are writing literacy docs so agents recognize the pattern and **refuse** it as a default.

## Anti-signals

- “I need the cache / logger / config everywhere” — inject or use the framework’s facades/helpers that are already container-backed.
- Request or tenant isolation is required — a process Singleton is the wrong scope.
- Tests must swap fakes — static Singletons block that unless you add reset hooks (another smell).
- You are about to add Singleton “for consistency” to a new module — stop.
- Parallelism / multiple workers each need their own state — Singleton lies about safety.

## Simpler alternative first

1. **Framework container singleton / scoped binding** (preferred default).
2. **Constructor injection** of an interface; bind once at the composition root.
3. **Module-level `const` / exported instance** in JS created in bootstrap and passed down — still better than `getInstance()` if tests can rewire the module.
4. **Parameterized factory** if “one instance” was only needed to carry config.

Classical Singleton ranks **last**.

## Framework-native equivalents

| Platform | Prefer this first | Why it replaces Singleton |
|----------|-------------------|---------------------------|
| Laravel | Service container singleton bindings; service providers; facades that resolve from the container | `$this->app->singleton(CacheStore::class, ...)` (Laravel 12/13 container docs, conceptual) gives one instance **per container** with test rebinding. Middleware shares request state via the pipeline, not via statics ([`technologies/laravel/`](../../technologies/laravel/)). |
| PHP | Composer-loaded composition root; avoid static `$instance` | Static Singletons complicate PHPUnit and Octane/FrankenPHP-style long workers ([`technologies/php/`](../../technologies/php/)). |
| Node / JavaScript | Export a factory; bind in bootstrap; inject into routers | Module cache can act like an accidental Singleton — prefer explicit injection. Use EventEmitter instances per subsystem, not one global emitter. HTTP middleware closures receive `req`/`res` — do not hang process globals for request data ([`technologies/javascript/`](../../technologies/javascript/)). |

Verified claim (conceptual, Laravel service container): the container is the supported “one instance” mechanism; classical Singleton duplicates it with worse testability.
