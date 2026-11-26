# JavaScript — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar. Stack-specific syntax lives in [`best-practices.md`](best-practices.md) and [`javascript-es2026/`](javascript-es2026/README.md). Cross-cutting rules live in factory homes below — **do not duplicate them**; apply them in JavaScript form.

## 1. Clean Code (always on)

Source: project / user `clean-code.mdc` + factory Clean Code rules.

| Rule | JavaScript shape |
|------|------------------|
| Names reveal intent | `userId`, `findActiveSubscription()`, not `x`, `doStuff()` |
| Functions do one thing | One export ≈ one behavior; early returns over deep nesting |
| Small focused units | Prefer short modules; extract when a block needs its own name |
| Comments explain **why** | Do not narrate `for`; comment invariants / security / shortcuts |
| Errors are part of the design | Throw/`reject` with real Errors; no silent empty `catch` |
| Campsite rule | Leave the file clearer than you found it — only touch what the task needs |

Ponytail still wins on size: smallest **complete** change that meets this bar — no Observer/DI scaffolding on a three-line fix.

## 2. Clean / modular architecture (JS apps)

| Prefer | Avoid |
|--------|-------|
| Clear module boundaries (`import`/`export`); feature folders the product already uses | God files that mix DOM, network, and domain |
| Framework conventions first (Next/React/Alpine/Livewire when those packs apply) | DIY global state and script-tag soup |
| Depend on stable abstractions the app already uses | New interface packages “for later” with one call site |
| Language features that remove classes of bugs (`===`, modules, private fields) | Clever metaprogramming (`with`, mutable `__proto__`, `eval`) |

When the product is TypeScript + Next.js, also open those packs once they exist — typed APIs beat untyped “clever” JS.

## 3. Design patterns (judgment only)

Source: [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md).

| Do | Don’t |
|----|-------|
| Problem → naive path → why this shape when the abstraction is consequential | Pattern encyclopedia in the PR |
| Composition, closures, and modules before custom Observer/Singleton globals | Pattern-for-show on trivial CRUD |
| Record the choice in DECISIONS / feature note when it matters | Prototype hacks that fight the framework |

## 4. Modern syntax + cleanliness together

A change fails this pack’s quality bar if it is:

- syntactically old (`stop-using.md` hits) **or**
- syntactically new but unreadable / untyped-by-accident / layered wrong **or**
- “clever” iterator/`Proxy` usage that obscures intent.

Prefer boring clarity with current ES idioms (`use-these.md`).

## 5. Automatic latest check (mandatory)

Before non-trivial JavaScript work in a session:

1. Open this pack (`best-practices` + version slice + this file).
2. **Re-verify** the pinned line on [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and/or [ECMA-262](https://262.ecma-international.org/) — do not trust chat memory for “latest.”
3. If the vendor moved (new edition, new deprecations), update the pack in the same session when professionalism rises, through a pull request to the factory repository.
4. Never silently bump the **product** browser/Node pin — propose ADR if the product should move.

## Related

- Day pipeline: `08-IMPLEMENTATION-DAY.md` (stack pack + DSA + API readiness)
- Engineering standards / Ponytail: always-on agent rules
- Coverage: `coverage/06-technologies.md`

---
