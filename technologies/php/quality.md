# PHP — quality bar (Clean Code · architecture · patterns)

This file answers the owner’s bar: **modern syntax alone is not enough**. PHP code under this pack must also be readable, maintainable, and structured. Stack-specific syntax lives in [`best-practices.md`](best-practices.md) and [`php-8.6/`](php-8.6/README.md). Cross-cutting rules live in the playbook homes below — **do not duplicate them**; apply them in PHP form.

## 1. Clean Code (always on)

Source: project / user `clean-code.mdc` + playbook Clean Code rules.

| Rule | PHP shape |
|------|-----------|
| Names reveal intent | `$userId`, `findActiveSubscription()`, not `$x`, `doStuff()` |
| Functions do one thing | One public method ≈ one behavior; early returns over deep nesting |
| Small focused units | Prefer short methods; extract when a block needs its own name |
| Comments explain **why** | Do not narrate `foreach`; comment invariants / security / shortcuts |
| Errors are part of the design | Typed exceptions / domain results at trust boundaries; no `@` as control flow |
| Campsite rule | Leave the file clearer than you found it — but only touch what the task needs |

Ponytail still wins on size: smallest **complete** change that meets this bar — no Factory/Observer scaffolding on a three-line fix.

## 2. Clean / modular architecture (PHP apps)

Source: product FE/BE `ARCHITECTURE.md` templates + studio modular-monolith decisions.

| Prefer | Avoid |
|--------|-------|
| Clear layers: HTTP (controllers/routes) → application/services → domain → infrastructure | Fat controllers with SQL + HTTP + mail in one method |
| Framework features first (container, jobs, validation, middleware) | DIY service locators / global god objects |
| Depend on stable abstractions the app already uses | New interface packages “for later” with one call site |
| Modules/boundaries that match the product’s architecture doc | Tangled cross-module imports with no owner |

When the product is Laravel (or similar), also open `technologies/laravel/` once that pack exists — framework conventions beat generic PHP DIY.

## 3. Design patterns (judgment only)

Source: [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md).

| Do | Don’t |
|----|-------|
| Problem → naive path → why this shape (Strategy, Decorator, …) when the abstraction is consequential | Pattern encyclopedia in the PR |
| Composition over inheritance; framework middleware/jobs/events before custom Observer | Singleton-as-global for request state |
| Record the choice in DECISIONS / feature note when it matters | Pattern-for-show on trivial CRUD |

## 4. Modern syntax + cleanliness together

A change fails this pack’s quality bar if it is:

- syntactically old (`stop-using.md` hits) **or**
- syntactically new but unreadable / untyped / layered wrong **or**
- “clever” PFA/`match` that obscures intent.

Prefer boring clarity with current PHP 8.6 idioms (`use-these.md`).

## 5. Automatic latest check (mandatory)

Before non-trivial PHP work in a session:

1. Open this pack (`best-practices` + version slice + this file).
2. **Re-verify** the pinned line on official pages / Context7 ([php.net manual](https://www.php.net/manual/en/), [supported versions](https://www.php.net/supported-versions.php)) — do not trust chat memory for “latest.”
3. If the vendor moved (new minor, new deprecations), update the pack in the same session when professionalism rises, then sync the public Software Factory mirror.
4. Never silently bump the **product** SRS pin — propose ADR if the product should move.

## Related

- Day pipeline: `08-IMPLEMENTATION-DAY.md` (stack pack + DSA + API readiness)
- Engineering standards / Ponytail: always-on agent rules
- Security: PHP Security manual chapter + product `SECURITY.md`
