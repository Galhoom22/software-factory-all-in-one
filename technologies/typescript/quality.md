# TypeScript — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar. Stack-specific syntax lives in [`best-practices.md`](best-practices.md) and [`typescript-7.0/`](typescript-7.0/README.md). Cross-cutting rules live in factory homes below — **do not duplicate them**; apply them in TypeScript form.

## 1. Clean Code (always on)

Source: project / user `clean-code.mdc` + factory Clean Code rules.

| Rule | TypeScript shape |
|------|------------------|
| Names reveal intent | `userId`, `findActiveSubscription()`, `UserId` branded types when earned |
| Functions do one thing | One export ≈ one behavior; early returns; narrow before branch |
| Small focused units | Prefer short modules; extract types next to use or into a dedicated types module when shared |
| Comments explain **why** | Do not narrate types; comment invariants / security / intentional `as` |
| Errors are part of the design | Typed error results or thrown `Error` with `cause`; no empty `catch` |
| Campsite rule | Leave the file clearer — tighten types when you touch the area |

## 2. Clean / modular architecture (TS apps)

| Prefer | Avoid |
|--------|-------|
| Clear module boundaries; feature folders the product already uses | God `types.ts` dumping the whole domain |
| Framework conventions first (Next/React/Vue when those packs apply) | DIY global `declare` soup |
| Depend on stable abstractions the app already uses | New interface packages “for later” with one call site |
| `unknown` + validation at trust boundaries | `any` leaking through API DTOs |

Also open [`../javascript/`](../javascript/README.md) for emitted/runtime JS quality.

## 3. Design patterns (judgment only)

Source: [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md).

| Do | Don’t |
|----|-------|
| Problem → naive path → typed enhance when consequential | Pattern encyclopedia in the PR |
| Discriminated unions before Strategy class trees | Pattern-for-show on trivial CRUD |
| Record the choice in DECISIONS / feature note when it matters | `enum` + switch sprawl that a union would clarify |

## 4. Modern syntax + cleanliness together

A change fails this pack’s quality bar if it is:

- syntactically banned (`stop-using.md` hits) **or**
- modern but unreadable / `any`-poisoned / layered wrong **or**
- “clever” conditional types that obscure intent for no gain.

Prefer boring clarity with current TS idioms (`use-these.md`).

## 5. Automatic latest check (mandatory)

Before non-trivial TypeScript work in a session:

1. Open this pack (`best-practices` + version slice + this file).
2. **Re-verify** the pinned line on [typescriptlang.org/docs](https://www.typescriptlang.org/docs/) and/or Context7 — do not trust chat memory for “latest.”
3. If the vendor moved (new minor/major, new deprecations), update the pack in the same session when professionalism rises, through a pull request to the factory repository.
4. Never silently bump the **product** `typescript` pin — propose ADR if the product should move.

## Related

- Day pipeline: `08-IMPLEMENTATION-DAY.md` (stack pack + DSA + API readiness)
- Coverage: `coverage/06-technologies.md`
