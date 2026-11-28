# Kotlin 2.4 — common mistakes

## Nullability / Java interop

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| `!!` on values from I/O, intents, or JSON | `NullPointerException` in production | Model `T?`; handle absence at the boundary ([Null safety](https://kotlinlang.org/docs/null-safety.html)) |
| Trusting Java platform types (`String!`) | Nulls leak into “non-null” Kotlin code | Decide nullability once in a wrapper; annotate Java APIs |
| Upgrading to 2.4 without reading the compatibility guide | New errors for Java nullability annotations and always-false `is` checks | Read [compatibility guide 2.4](https://kotlinlang.org/docs/compatibility-guide-24.html) before bumping |

## Errors / coroutines

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| `catch (e: Exception)` around suspend code | Swallows `CancellationException`; coroutines never cancel | Rethrow cancellation; catch specific exceptions |
| `GlobalScope` / unscoped `launch` | Leaks and work outliving its screen/request | Lifecycle-bound scope ([Coroutines](https://kotlinlang.org/docs/coroutines-overview.html)) |
| Blocking calls on the main/UI dispatcher | Frozen UI, ANRs | Move blocking I/O to an I/O dispatcher; inject dispatchers |
| `runCatching` around everything | Hides bugs and cancellation | Use it at narrow seams only |

## Idioms / language

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Nested `let`/`apply`/`also` chains | Unreadable `it` / `this` shadowing | One scope function per purpose ([Scope functions](https://kotlinlang.org/docs/scope-functions.html)) |
| `data class` with mutable state (a `var`, or a `val` holding a mutable collection) used as a map or set key | `hashCode` changes after insertion; lookups fail | Deeply immutable equality fields, or key on a stable ID |
| Non-exhaustive `when` via `else` on sealed types | New subtypes silently fall through | Exhaustive `when` without `else` |
| Global `Utils.kt` of extension functions | Discoverability and coupling | Keep extensions near their use |
| Context parameters for ordinary inputs | Hidden dependencies | Use them only for genuine ambient context ([Context parameters](https://kotlinlang.org/docs/context-parameters.html)) |

## Tooling / agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Inventing stdlib / `kotlinx` APIs from memory | Wrong signatures, deprecated calls | kotlinlang.org docs + the library's own docs for the pinned version |
| Kotlin version in several `build.gradle.kts` files | Drift between modules | One version catalog entry |
| Enabling Experimental `-X` flags casually | Breakage on the next release | Stable only, or ADR + removal plan |
| Mismatched Kotlin / Gradle / AGP versions | Build failures | Check the KGP compatibility table for your 2.4 patch and AGP's own Gradle minimum |
| Pattern-for-show (Builder on 3 fields) | Noise | Default args; [`design-patterns.md`](../../../07-judgment/design-patterns.md) |
| Assuming every product should be Kotlin | Wrong stack | Product SRS; this pack is craft only |

## Security

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Logging secrets / PII (incl. `data class` `toString()`) | Compliance breach | Override `toString` or redact; product SECURITY |
| Deserializing untrusted input into broad polymorphic types | Unexpected types / injection | Closed polymorphism (sealed) with explicit serializers |
| DIY crypto | Broken crypto | Platform / audited libraries only |
