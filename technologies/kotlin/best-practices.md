# Kotlin — best practices (modern baseline)

Defaults for agents writing **Kotlin** under this pack. Grounded in [Idioms](https://kotlinlang.org/docs/idioms.html), [Coding conventions](https://kotlinlang.org/docs/coding-conventions.html), [Null safety](https://kotlinlang.org/docs/null-safety.html), and the [library authors' guidelines](https://kotlinlang.org/docs/api-guidelines-introduction.html). Version-specific 2.4 notes live in [`kotlin-2.4/`](kotlin-2.4/README.md).

## 1. Toolchain and project shape

- Prefer **Gradle with the Kotlin DSL** (`build.gradle.kts`) and the Kotlin Gradle plugin at the product pin (this pack: **2.4.x**). Check the KGP compatibility table for the exact patch: Kotlin **2.4.20–2.4.21** fully supports Gradle **7.6.3–9.7.0** and AGP **8.5.2–9.3.1**; **2.4.0–2.4.10** stops at Gradle 9.5.0 / AGP 9.1.0 ([Gradle configure](https://kotlinlang.org/docs/gradle-configure-project.html)). On Android, AGP has its own Gradle minimum — satisfy both tables.
- Prefer a **version catalog** (`gradle/libs.versions.toml`) so the Kotlin version is pinned in one place across modules.
- Prefer **JVM toolchains** (`kotlin { jvmToolchain(N) }`) over relying on whatever JDK is on the machine ([Gradle configure](https://kotlinlang.org/docs/gradle-configure-project.html)).
- Maven is supported ([Maven](https://kotlinlang.org/docs/maven.html)); pick one build tool per product, not both.
- Default gate set: compile with warnings visible, unit tests (`kotlin.test` / the product's runner), a formatter/linter the product pins, and `allWarningsAsErrors` when the DoD allows ([compiler options](https://kotlinlang.org/docs/gradle-compiler-options.html)).

## 2. Types, nullability, and data

- Design with **null safety first**: non-null types by default, `T?` only where absence is real. Use `?.`, `?:`, and smart casts; treat `!!` as a bug marker ([Null safety](https://kotlinlang.org/docs/null-safety.html)).
- Treat **Java platform types** at the boundary: annotate or wrap Java APIs so nullability is decided once, not at every call site. Kotlin 2.4 enforces more Java nullability annotations (Jakarta, flexible type arguments) — see the [compatibility guide](https://kotlinlang.org/docs/compatibility-guide-24.html).
- Prefer **`val`** and read-only collection interfaces (`List`, `Set`, `Map`) ([coding conventions](https://kotlinlang.org/docs/coding-conventions.html)).
- Prefer **`data class`** for value carriers, **`sealed`** hierarchies for closed state/result sets with exhaustive `when`, and **`@JvmInline value class`** for typed IDs (`UserId`) instead of raw `String`/`Long` ([sealed](https://kotlinlang.org/docs/sealed-classes.html), [value classes](https://kotlinlang.org/docs/inline-classes.html)).
- Prefer **default and named arguments** over overload ladders and builders.

## 3. Errors

- Kotlin has no checked exceptions ([Exceptions](https://kotlinlang.org/docs/exceptions.html)). Pick one error style per layer and keep it: exceptions for programmer bugs and infrastructure failure; a sealed result type (or `Result<T>` at narrow internal seams) for expected domain outcomes.
- Use `require` / `check` / `error` for preconditions and invariants — they fail loudly with a message.
- Never catch `Throwable` / `Exception` broadly and continue; and in coroutines never swallow `CancellationException`.

## 4. Concurrency and coroutines

- Prefer **coroutines with structured concurrency** ([Coroutines overview](https://kotlinlang.org/docs/coroutines-overview.html)): launch inside a scope the product owns (lifecycle, request, application), not `GlobalScope`.
- Prefer `suspend` functions for one-shot async work and `Flow` for streams; inject dispatchers instead of hard-coding them so tests can control time.
- `kotlinx.coroutines` is a separate library — look up its current docs for the pinned version; do not invent APIs from memory.

## 5. Idioms and style

- Follow the official [coding conventions](https://kotlinlang.org/docs/coding-conventions.html): 4-space indent, no semicolons, trailing commas at declaration sites, `UpperCamelCase` types, `lowerCamelCase` members, `SCREAMING_SNAKE_CASE` constants; class layout = properties/init → secondary constructors → methods → companion object.
- Prefer expression bodies, `if`/`when` as expressions, `when` for three or more branches, string templates, and `..<` for open-ended ranges.
- Use **scope functions** (`let`, `apply`, `also`, `run`, `with`) for one clear purpose each; do not nest them ([Scope functions](https://kotlinlang.org/docs/scope-functions.html)).
- Prefer **extension functions** for small helpers on types you do not own; keep them near their use, not in a global `Utils.kt`.

## 6. Libraries and public APIs

- For published libraries: enable **explicit API mode** (`kotlin { explicitApi() }`) so every public declaration states visibility and type, add KDoc to public members ([KDoc](https://kotlinlang.org/docs/kotlin-doc.html)), and follow the [backward-compatibility guidelines](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html).
- Prefer verified libraries for non-trivial work (serialization → `kotlinx.serialization`, HTTP, DI) after [`packages.md`](../../07-judgment/packages.md) checks.
- Re-check kotlinlang.org (and Context7 once its ID is recorded) for the pinned line before non-trivial APIs ([`context7-docs.md`](../../07-judgment/context7-docs.md)).
