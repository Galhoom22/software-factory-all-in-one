# C# — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar. Stack-specific syntax lives in [`best-practices.md`](best-practices.md) and [`csharp-14/`](csharp-14/README.md). Cross-cutting rules live in factory homes below — **do not duplicate them**; apply them in C# form.

## 1. Clean Code (always on)

Source: project / user `clean-code.mdc` + factory Clean Code rules.

| Rule | C# shape |
|------|----------|
| Names reveal intent | `userId`, `FindActiveSubscriptionAsync()`, PascalCase types/methods, camelCase locals |
| Functions do one thing | One public method ≈ one behavior; early returns over deep nesting |
| Small focused units | Prefer small classes/records; extract when a block needs its own name |
| Comments explain **why** | XML docs on public APIs when useful; no narrating `foreach` |
| Errors are part of the design | Specific exceptions; no empty `catch`; async faults observed on `Task` |
| Campsite rule | Leave the file clearer than you found it — only touch what the task needs |

Ponytail still wins on size: smallest **complete** change that meets this bar — no Factory/Observer scaffolding on a three-line fix.

## 2. Clean / modular architecture (.NET apps)

| Prefer | Avoid |
|--------|-------|
| Clear project/assembly boundaries the product already uses | God assemblies mixing UI, I/O, and domain |
| Framework conventions first (ASP.NET Core / EF / workers when those packs exist) | DIY host, DIY DI container for one service |
| Nullable + analyzers as the default correctness layer | Ignoring nullable warnings as “noise” |
| Depend on stable abstractions already in the solution | New interface packages “for later” with one call site |

When the product is not on .NET, do not invent a C# rewrite — this pack is craft for when C# **is** the chosen stack ([`stack-selection.md`](../../07-judgment/stack-selection.md)).

## 3. Design patterns (judgment only)

Source: [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md).

| Do | Don’t |
|----|-------|
| Problem → naive path → why this shape when the abstraction is consequential | Pattern encyclopedia in every PR |
| Prefer composition, `record`, and small services | Singleton globals and static mutable bags |
| Use GoF / .NET idioms the codebase already has | Drop DI/Factory on a local helper |

## 4. Human review + current docs

- Human bar: [`human-code-review.md`](../../07-judgment/human-code-review.md) — readable C#, modern pinned-line syntax.
- Freshness: [`context7-docs.md`](../../07-judgment/context7-docs.md) — Context7 ID `/websites/learn_microsoft_en-us_dotnet_csharp` and/or Learn URLs this session.

---
