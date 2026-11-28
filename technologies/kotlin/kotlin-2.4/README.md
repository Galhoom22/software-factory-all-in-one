# Kotlin 2.4 — version slice

**Language release:** Kotlin **2.4.0** — [What's new in 2.4](https://kotlinlang.org/docs/whatsnew24.html)  
**Current stable at check:** **2.4.21** (bug-fix, **2026-10-08**) — [Releases](https://kotlinlang.org/docs/releases.html)  
**Breaking changes:** [Compatibility guide for Kotlin 2.4](https://kotlinlang.org/docs/compatibility-guide-24.html)  
**Checked:** 2026-11-28  

**Also note:** 2.4.0 removed K1 and `-language-version=1.9`; K2 is the only compiler. Kotlin **2.5.0** is planned for December 2026 — when it ships, add a `kotlin-2.5/` slice instead of editing this one in place.

## Files

| File | Purpose |
|------|---------|
| [`use-these.md`](use-these.md) | Prefer these on Kotlin 2.4 |
| [`stop-using.md`](stop-using.md) | Legacy / ban in new code |
| [`common-mistakes.md`](common-mistakes.md) | Failure modes agents hit |

## Agent rule

Before writing Kotlin: open this slice **and** re-check kotlinlang.org for the product’s pinned version. Product SRS/ADR owns the Kotlin, Gradle, JDK, and (for Android) AGP pins.
