# Kotlin 2.4 — use these

Prefer on **Kotlin 2.4.x** unless the product ADR pins older.

## Prefer for greenfield

| Prefer | Why / source |
|--------|----------------|
| Kotlin Gradle plugin **2.4.x** pinned in a version catalog | [Releases](https://kotlinlang.org/docs/releases.html) |
| Gradle and AGP inside the KGP table for your patch: 2.4.20–2.4.21 → Gradle 7.6.3–9.7.0, AGP 8.5.2–9.3.1; 2.4.0–2.4.10 → Gradle 7.6.3–9.5.0, AGP 8.5.2–9.1.0. Also meet AGP's own Gradle minimum. | [Gradle configure](https://kotlinlang.org/docs/gradle-configure-project.html) |
| `jvmToolchain(N)` for a reproducible JDK | [Gradle configure](https://kotlinlang.org/docs/gradle-configure-project.html) |
| Non-null types by default; `?.` / `?:` / smart casts | [Null safety](https://kotlinlang.org/docs/null-safety.html) |
| `val`, read-only `List`/`Set`/`Map` | [Coding conventions](https://kotlinlang.org/docs/coding-conventions.html) |
| `data class`, `sealed` + exhaustive `when`, `@JvmInline value class` for IDs | [Data](https://kotlinlang.org/docs/data-classes.html) · [Sealed](https://kotlinlang.org/docs/sealed-classes.html) · [Value classes](https://kotlinlang.org/docs/inline-classes.html) |
| Default + named arguments instead of overloads/builders | [Idioms](https://kotlinlang.org/docs/idioms.html) |
| Coroutines with structured concurrency; `Flow` for streams | [Coroutines](https://kotlinlang.org/docs/coroutines-overview.html) |
| `kotlinx.serialization` for JSON on Kotlin-first code | [Serialization](https://kotlinlang.org/docs/serialization.html) |
| `explicitApi()` + KDoc for published libraries | [Library guidelines](https://kotlinlang.org/docs/api-guidelines-introduction.html) · [KDoc](https://kotlinlang.org/docs/kotlin-doc.html) |
| `readln()` / `readlnOrNull()` for console input | `readLine()` deprecated in 2.4 ([compatibility guide](https://kotlinlang.org/docs/compatibility-guide-24.html)) |

## Newly Stable in 2.4 — fine to use

| Feature | Notes |
|---------|-------|
| **Context parameters** (`context(...)` declarations) | Stable except explicit context arguments and callable references ([Context parameters](https://kotlinlang.org/docs/context-parameters.html)). Use for genuine ambient dependencies, not to hide ordinary parameters. |
| **Explicit backing fields** | Replaces the `_items` / `items` private-backing-property pair when the public property simply exposes the field under a narrower type. Keep a backing property when the public getter needs custom logic (sorting, defensive copy). |
| **`@all` meta-target** and new use-site annotation defaulting | Check annotation targets on properties after upgrading (binary-relevant; see compatibility guide). |
| **`kotlin.uuid.Uuid`** | Stable type; V4/V7 generation is still experimental. |
| `isSorted()` / `isSortedBy()`; `UInt`/`ULong.toBigInteger()` on JVM | New stdlib helpers — prefer over hand-written loops. |

## Still Experimental — ADR before use

| Feature | Flag |
|---------|------|
| Collection literals | `-Xcollection-literals` |
| Explicit context arguments | `-Xexplicit-context-arguments` |
| Improved compile-time constants | `-Xintrinsic-const-evaluation` |
| `returnsResultOf()` contract | `-Xallow-returns-result-of` |
| Swift export (Kotlin/Native) | Alpha |

## Platform notes (2.4)

| Target | Note |
|--------|------|
| JVM | Java 26 bytecode supported; annotations in metadata on by default |
| Native | Concurrent mark GC on by default; default Apple deployment targets raised to iOS/tvOS 15, macOS 12, watchOS 8 — override with `-Xoverride-konan-properties=minVersion.<os>=…` when the product must support older OS versions |
| Wasm | Incremental compilation on by default |
| Maven | JVM target auto-aligned with the Java compiler; Maven Toolchains supported |
