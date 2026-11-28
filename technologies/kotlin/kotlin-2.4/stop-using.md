# Kotlin 2.4 — stop using these

Sources: [Compatibility guide for 2.4](https://kotlinlang.org/docs/compatibility-guide-24.html), [Coding conventions](https://kotlinlang.org/docs/coding-conventions.html), [Idioms](https://kotlinlang.org/docs/idioms.html), [K2 migration guide](https://kotlinlang.org/docs/k2-compiler-migration-guide.html).

**Rule for agents:** do not introduce the left column in new code. When touching old code, prefer migrating in the same change if cheap.

## Removed or now an error in 2.4

| Stop using | Use instead |
|------------|-------------|
| K1 compiler / `-language-version=1.9` | K2 (the only compiler); migrate per the K2 guide |
| Array literals (`[a, b]`) outside annotations | `listOf(...)` / `arrayOf(...)` |
| `inline` on enum entries | Plain enum entries |
| `operator getValue()`/`setValue()` with the wrong parameter count | The delegate signatures from the docs |
| `init` block in an anonymous object that initializes a property before its declaration | Declare the property first |
| Deprecated Kotlin Gradle plugin APIs and legacy Kotlin/JS compiler types | Current KGP DSL ([Gradle configure](https://kotlinlang.org/docs/gradle-configure-project.html)) |
| Compose compiler options `enableStrongSkippingMode`, `stabilityConfigurationFile` (old form) | Current Compose compiler Gradle options |
| Maven `KotlinScriptMojo` | A Gradle/Maven task that runs the script explicitly |

## Deprecated in 2.4 — ban in new code

| Stop using | Use instead |
|------------|-------------|
| `readLine()` | `readln()` / `readlnOrNull()` |
| `javaClass` property references | `::class.java` / `obj.javaClass` call |
| `AbstractCoroutineContextKey` and related APIs | Current `kotlinx.coroutines` context APIs |

## Java-in-Kotlin habits

| Stop using | Use instead |
|------------|-------------|
| `!!` to silence the compiler | Model nullability; `?:` with a clear fallback or `requireNotNull` with a message |
| `lateinit var` for values available at construction | Constructor `val` |
| Getter/setter boilerplate and Java-style builders | Properties, default + named arguments |
| Overload ladders in new code | Default arguments — but never replace overloads in an already-published API: JVM callers break with `NoSuchMethodError`; keep the existing signatures per the [backward-compatibility guidelines](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html). Java callers see only the full signature of a function with default arguments: add `@JvmOverloads` to a new Java-facing concrete function or constructor; an abstract or interface method keeps explicit overloads, because `@JvmOverloads` "can't be used on abstract methods, including methods defined in interfaces" ([Java interop](https://kotlinlang.org/docs/java-to-kotlin-interop.html)) |
| `GlobalScope.launch` | A scope tied to a lifecycle (structured concurrency) |
| Mutable collections in public APIs | Read-only interfaces |
| Raw `String`/`Long` IDs across layers | `@JvmInline value class` |
| `_items` + `items` backing-property pairs that only narrow the type (greenfield) | Explicit backing fields (Stable in 2.4); keep the pair where explicit fields are not allowed — a custom getter, a `var`, an `open` or delegated property, or a compile-time constant ([limitations](https://kotlinlang.org/docs/properties.html)) |
| Experimental flags in product builds without an ADR | Stable features only |

## Never as product constitution

| Stop | Why |
|------|-----|
| “Always Kotlin” for every product | [`stack-selection.md`](../../../07-judgment/stack-selection.md) |
| Bumping Kotlin / Gradle / AGP mid-Story without ADR | Product DECISIONS / SRS pin |
| Copying random blog “Kotlin tips” into AGENTS | This pack + kotlinlang.org |
