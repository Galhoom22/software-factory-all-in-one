# Kotlin — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar. Stack-specific syntax lives in [`best-practices.md`](best-practices.md) and [`kotlin-2.4/`](kotlin-2.4/README.md). Cross-cutting rules live in factory homes below — **do not duplicate them**; apply them in Kotlin form.

## 1. Clean Code (always on)

Source: project / user `clean-code.mdc` + factory Clean Code rules.

| Rule | Kotlin shape |
|------|--------------|
| Names reveal intent | `userId`, `findActiveSubscription()`, `UpperCamelCase` types, typed IDs via value classes |
| Functions do one thing | One function ≈ one behavior; early `return` / `?:` over deep nesting |
| Small focused units | Small files and classes; one top-level concept per file where practical |
| Comments explain **why** | KDoc on public API; no narrating comments; no `// TODO` without a ticket |
| Errors are part of the design | Nullability decided at boundaries; sealed results or clear exceptions; no empty `catch` |
| Campsite rule | Leave the file clearer than you found it — only touch what the task needs |

Ponytail still wins on size: smallest **complete** change that meets this bar — no interface + impl + factory + DI module for a three-line fix.

## 2. Clean / modular architecture (Kotlin modules)

| Prefer | Avoid |
|--------|-------|
| Gradle modules with clear boundaries (domain vs platform/IO) | One god module mixing UI, network, and domain |
| `internal` visibility to hide module internals | Everything `public` by default in libraries |
| Framework conventions the product already chose (Android, Spring, Ktor) | A second DI framework or architecture style “for one screen” |
| Shared code in KMP `commonMain` only when it truly is shared | `expect`/`actual` for code only one platform needs |
| Compiler + nullability as the first correctness layer | `!!` and `@Suppress` to silence the compiler |

When the product is not on Kotlin, do not invent a Kotlin rewrite — this pack is craft for when Kotlin **is** the chosen stack ([`stack-selection.md`](../../07-judgment/stack-selection.md)).

## 3. Design patterns (judgment only)

Source: [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md).

| Do | Don’t |
|----|-------|
| Problem → naive path → why this shape when the abstraction is consequential | Pattern encyclopedia in every PR |
| Use language features first: `object` for true singletons, default args instead of Builder, sealed types instead of Visitor | Java-style Builder/Factory boilerplate Kotlin already removes |
| Use idioms the codebase already has (extensions, delegation `by`) | Extension-function sprawl in a global `Utils.kt` |

## 4. Human review + current docs

- Human bar: [`human-code-review.md`](../../07-judgment/human-code-review.md) — idiomatic Kotlin per the official conventions, no Java-in-Kotlin, warnings addressed.
- Freshness: [`context7-docs.md`](../../07-judgment/context7-docs.md) — https://kotlinlang.org/docs/home.html (and Context7 once its ID is recorded) this session.
