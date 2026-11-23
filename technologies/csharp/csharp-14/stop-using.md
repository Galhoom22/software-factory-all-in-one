# C# 14 — stop using these

Sources: [coding conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions), [language versioning](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-versioning), modern C# guidance on Learn.

**Rule for agents:** do not introduce the left column in new code. When touching old code, prefer migrating in the same change if cheap.

## Ban in new code

| Stop using | Use instead |
|------------|-------------|
| .NET Framework as default for greenfield | .NET (`net10.0` LTS) unless product maintains Framework |
| `LangVersion` newer than TFM allows | Default LangVersion for the target TFM |
| Nullable disabled on new projects | `<Nullable>enable</Nullable>` |
| `async void` outside event handlers | `async Task` / `async ValueTask` |
| `.Result` / `.Wait()` / `.GetAwaiter().GetResult()` on request/UI threads | `await` |
| Hungarian / cryptic abbreviations | Intention-revealing PascalCase / camelCase |
| Public fields for domain state | Properties / records |
| Nested namespace blocks in new files | File-scoped namespaces |
| String concat in tight loops | `StringBuilder` or pooled writers |
| Catching `Exception` without filter/rethrow | Specific types or filtered catch |
| `ArrayList` / non-generic collections | Generic `List<T>` / spans |
| `Thread.Abort` and related legacy threading | Cooperative cancellation |
| Regions to hide god-classes | Split types / files |
| C# 15-only syntax on `net10.0` | Stay on C# 14 feature set |

## Avoid unless measured need

| Avoid | Prefer |
|-------|--------|
| Premature `unsafe` / pointers | Safe spans / libraries; document when unsafe is required |
| Reflection for ordinary business rules | Source generators / explicit code |
| Dynamic/`ExpandoObject` for typed domains | Records + JSON source-gen |
| Multiple DI containers | Host’s built-in DI |

## Never as product constitution

| Stop | Why |
|------|-----|
| Copying random StyleCop rule dumps into AGENTS | Product `.editorconfig` + this pack |
| Bumping TFM “for one language feature” without ADR | Stack selection / DECISIONS |
