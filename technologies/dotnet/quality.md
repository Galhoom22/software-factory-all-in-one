# .NET — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar. Platform syntax lives in [`best-practices.md`](best-practices.md) and [`dotnet-10/`](dotnet-10/README.md). Language: [`../csharp/quality.md`](../csharp/quality.md). Cross-cutting rules live in factory homes — **do not duplicate them**.

## 1. Clean Code (always on)

| Rule | .NET shape |
|------|------------|
| Names reveal intent | Clear project/assembly/type names; `ISomething` only when abstraction is real |
| Functions do one thing | Thin controllers/endpoints; logic in focused services |
| Small focused units | Prefer small projects over god solutions |
| Comments explain **why** | XML docs on public package APIs; no narrating DI registration |
| Errors are part of the design | Exceptions observed; host lifetime + health; no swallow-all middleware |
| Campsite rule | Touch only what the task needs |

## 2. Architecture

| Prefer | Avoid |
|--------|-------|
| Host composition root + DI | Service locator / static Ambient Context |
| Framework conventions (ASP.NET / Worker / MAUI) | DIY host stacks for ordinary apps |
| Supported TFM + monthly patches | Running EOL runtimes |
| One NuGet graph aligned to TFM | Mixing Framework-only packages into modern .NET blindly |

## 3. Patterns

Source: [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md). Prefer composition and Options/DI idioms the host already uses. No Factory/Observer scaffolding on a three-line fix.

## 4. Human review + docs

- [`human-code-review.md`](../../07-judgment/human-code-review.md)
- [`context7-docs.md`](../../07-judgment/context7-docs.md) — `/websites/learn_microsoft_en-us_dotnet`

---
