# C# 14 — use these

Sources: [What's new in C# 14](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-14), [coding conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions), [null safety](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/null-safety/).

## Prefer on .NET 10 / C# 14

| Prefer | Over | Why |
|--------|------|-----|
| Target `net10.0` (LTS) + default LangVersion | Random `LangVersion` bumps | TFM-aligned language ([versioning](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-versioning)) |
| Nullable reference types enabled | Ignoring nullability | Compile-time null safety |
| `async`/`await` + `Task`/`ValueTask` | Blocking `.Result` / `.Wait()` | Correct async I/O |
| File-scoped namespaces | Nested `namespace X { … }` blocks in new files | Less nesting |
| Records / primary constructors (when clear) | Boilerplate DTOs with public fields | Intent + immutability |
| Collection expressions `[…]` | Verbose `new List<T> { … }` when equivalent | Concise, consistent |
| Pattern matching / `switch` expressions | Chains of `is` + casts | Exhaustiveness + clarity |
| Raw string literals `"""…"""` | Heavy escape/`@` soup | Readable multi-line text |
| `field` keyword in property accessors (C# 14) | Hand-rolled `_backing` when simple | Less boilerplate ([C# 14](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-14)) |
| Null-conditional assignment `x?.Prop = …` (C# 14) | Manual null `if` before assign | RHS skipped when null |
| Extension members / `extension` blocks (C# 14) when earned | Static helper soup that fights discoverability | Instance/static extension properties & methods |
| Implicit `Span`/`ReadOnlySpan` conversions (C# 14) | Awkward copies in perf-sensitive APIs | First-class span |
| LINQ for clarity | Nested mutation loops for simple queries | Readability (measure hot paths) |
| `string` / `int` keywords | `System.String` / `System.Int32` in app code | Convention |
| Specific exception types | Bare `catch (Exception)` | Recoverable errors only |

## Still prefer from C# 12–13 (on current targets)

| Prefer | Notes |
|--------|-------|
| Primary constructors on classes | When they clarify injected deps |
| `required` members / `init` | Safer object initialization |
| `params` collections / modern collection APIs | Prefer current SDK docs |
| Alias `any` / generic math only when the domain needs it | Don’t force novelty |

## C# 15 (only if product TFM is `net11.0`)

Do **not** use on this pack’s default pin. When ADR pins .NET 11, prefer official [C# 15](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-15) features (union types, closed hierarchies, labeled `break`/`continue`, collection expression `with(…)`, etc.) after a Context7/Learn check — and keep memory-safety preview behind explicit preview flags.
