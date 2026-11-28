# Kotlin — technology pack

**Pinned slice for new work in this pack:** **Kotlin 2.4** (language release **2.4.0**; current stable bug-fix **2.4.21**, released **2026-10-08**). K2 is the only compiler. Docs checked **2026-11-28**.  
**Official home:** [Kotlin Docs](https://kotlinlang.org/docs/home.html) · [Basic syntax](https://kotlinlang.org/docs/basic-syntax.html) · [Idioms](https://kotlinlang.org/docs/idioms.html) · [Coding conventions](https://kotlinlang.org/docs/coding-conventions.html) · [What's new in 2.4](https://kotlinlang.org/docs/whatsnew24.html) · [Compatibility guide 2.4](https://kotlinlang.org/docs/compatibility-guide-24.html) · [Releases](https://kotlinlang.org/docs/releases.html)

**Context7:** resolve with `resolve-library-id` ("Kotlin") on first use; keep the chosen ID in your session notes. In a vendored copy this file is read-only — propose the verified ID upstream instead of editing it here. Not verified in the session that created this pack.

## When to open this pack

- Writing or reviewing **Kotlin language** code: Android apps, JVM services, Kotlin Multiplatform shared code, Gradle build scripts (`*.gradle.kts`), CLIs.
- Choosing modern **Kotlin 2.4 / K2** defaults over Kotlin 1.x habits (K1, `-language-version=1.9`, Java-style nullability).
- Separating **language** (this pack) from future framework packs (Jetpack Compose, Ktor, Spring, Compose Multiplatform) when the owner asks for one.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated kotlinlang.org URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern Kotlin defaults |
| [`quality.md`](quality.md) | Clean Code + architecture + patterns in Kotlin form |
| [`kotlin-2.4/`](kotlin-2.4/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack is **Kotlin language + stdlib + Kotlin Gradle plugin** professionalism grounded in kotlinlang.org.
- **Language version and compiler version are separate pins.** Pin the Kotlin Gradle plugin / compiler version (prefer current stable **2.4.x**) and leave `languageVersion` / `apiVersion` at the default unless an ADR needs an older API surface for library consumers.
- Android specifics (Android Gradle Plugin, Compose, Play Console) belong to Android's official docs and a future Android/Compose pack; this pack only notes the Kotlin-side range (AGP **8.5.2–9.3.1** for Kotlin 2.4.20+; see the KGP compatibility table).
- Do **not** silently rewrite a product to Kotlin — stack choice stays [`stack-selection.md`](../../07-judgment/stack-selection.md) + product ADR.
- Prefer **Stable** components ([components stability](https://kotlinlang.org/docs/components-stability.html)); Experimental / Alpha features (collection literals, explicit context arguments, Swift export) need an ADR and a removal plan.

## Related

- Design patterns / Context7 / human review: factory `07-judgment/`
- Packages over reinvention (Maven Central): [`07-judgment/packages.md`](../../07-judgment/packages.md)
- Industry surfaces (Android, multiplatform, JVM backends): [`coverage/07-software-surfaces.md`](../../coverage/07-software-surfaces.md)
- Stack selection before forcing Kotlin onto a product: [`07-judgment/stack-selection.md`](../../07-judgment/stack-selection.md)
