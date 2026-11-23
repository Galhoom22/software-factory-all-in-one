# C# — best practices (modern baseline)

Defaults for agents writing **C#** under this pack. Grounded in [coding conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions), [null safety](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/null-safety/), and [async programming](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/). Version-specific C# 14 notes live in [`csharp-14/`](csharp-14/README.md).

## 1. Language vs platform

- This pack is **C# language**. ASP.NET Core, EF Core, MAUI, Aspire, etc. are **.NET libraries** — look them up on Learn / Context7 for that product; do not invent API shapes.
- **LangVersion follows TFM.** Prefer omitting `LangVersion` so the SDK picks the default for the target ([language versioning](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-versioning)). Do not force C# 15 syntax onto a `net10.0` project.
- Prefer **.NET** (`net10.0` LTS) over **.NET Framework** for new work unless the product explicitly maintains Framework.

## 2. Types, null, and clarity

- Enable **nullable reference types** (`<Nullable>enable</Nullable>`) on new projects. Use `string` vs `string?` intentionally ([null safety](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/null-safety/)).
- Prefer language keywords (`string`, `int`, `nint`) over `System.String` / `System.Int32` in ordinary code ([coding conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)).
- Prefer **`int`** over unsigned types unless the domain needs unsigned.
- Prefer **`var` only when the type is obvious** from the right-hand side; otherwise write the type.
- Prefer **`?.` / `??` / `??=`**, and (on C# 14+) null-conditional **assignment** (`customer?.Order = …`) when intent matches.

## 3. Async / concurrency

- Prefer **`async` / `await`** with `Task` / `ValueTask` for I/O-bound work. Prefer `async Task` methods — reserve **`async void`** for event handlers and wrap body in try/catch.
- Prefer passing **`CancellationToken`** through public async APIs.
- Prefer **`ConfigureAwait(false)`** in library code that must not resume on a captured sync context; follow the host’s rules in UI/ASP.NET apps.
- Do not block on async with `.Result` / `.Wait()` on ASP.NET / UI threads.

## 4. Modern syntax defaults

- Prefer **file-scoped namespaces**, **top-level statements** for small programs when the project template uses them.
- Prefer **records** / **record structs** for immutable DTOs; prefer **primary constructors** when they clarify dependencies without hiding state.
- Prefer **collection expressions** (`[…]`) and **pattern matching** / `switch` expressions over verbose type tests.
- Prefer **raw string literals** (`"""…"""`) for multi-line text; prefer interpolation `$"…"` for short strings; use `StringBuilder` in hot loops.
- Prefer **LINQ** for readable collection transforms; avoid LINQ in known hot paths when a simple loop is clearer and measured faster.

## 5. Errors and APIs

- Catch **specific** exceptions you can handle; avoid bare `catch (Exception)` without a filter or rethrow strategy.
- Prefer throwing meaningful exception types; validate at trust boundaries.
- Prefer **interfaces and DI** the host already uses; do not invent a second IoC for one call site (Ponytail).

## 6. Tooling

- Prefer an **`.editorconfig`** + analyzers (start from [dotnet/docs conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)) so CI and the IDE share one style.
- Re-check Context7 / official Learn for the pinned line before non-trivial APIs ([`context7-docs.md`](../../07-judgment/context7-docs.md)).

---
