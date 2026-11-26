# C# 14 — common mistakes

## Nullability

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Treating nullable warnings as noise | NullReferenceException in prod | Enable nullable; use `?`, `!` sparingly with proof |
| `string` vs `string?` ignored | Wrong contracts across APIs | Annotate intent ([null safety](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/null-safety/)) |
| Null-forgiving `!` everywhere | Hides real bugs | Fix the type flow; `!` only at proven boundaries |

## Async

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Forgetting `await` | Fire-and-forget races; lost exceptions | Await; analyze with analyzers |
| `async void` business APIs | Unobserved exceptions | `async Task`; try/catch only for event handlers |
| Sync-over-async | Deadlocks / thread-pool starvation | Full async chain + CancellationToken |
| Ignoring cancellation | Hung requests | Pass `CancellationToken` end-to-end |

## Language / TFM

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Using C# 15 unions/`closed` on .NET 10 | Won’t compile / unsupported | Pin features to TFM ([versioning](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-versioning)) |
| Setting `LangVersion=latest` on old TFM | Hard-to-diagnose runtime gaps | Prefer SDK default for TFM |
| Confusing `field` keyword with a member named `field` | Ambiguous identity | Rename member or use `@field` / `this.field` ([C# 14](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-14)) |

## Design / agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| God `Program.cs` / Service classes | Untestable, unreadable | Small types; host composition root only |
| Inventing ASP.NET APIs from memory | Wrong middleware/DI shapes | Context7 / official ASP.NET docs when that pack exists |
| Pattern-for-show (Factory on 3 lines) | Noise | [`design-patterns.md`](../../../07-judgment/design-patterns.md) |
| Assuming the product is .NET without an ADR | Wrong stack | Product SRS; this pack is craft, not a silent rewrite |

## Security

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| String-built SQL | Injection | Parameterized APIs / EF |
| Logging secrets/PII | Compliance breach | Redact; follow product SECURITY |
| Trusting client-supplied types blindly | Deserialization gadgets | Explicit DTOs + validation |
