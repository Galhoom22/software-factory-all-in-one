# .NET 10 — stop using these

Sources: [releases & support](https://learn.microsoft.com/en-us/dotnet/core/releases-and-support), [porting](https://learn.microsoft.com/en-us/dotnet/core/porting/), [introduction](https://learn.microsoft.com/en-us/dotnet/core/introduction).

**Rule for agents:** do not introduce the left column in new code.

## Ban in new code

| Stop using | Use instead |
|------------|-------------|
| EOL runtimes (.NET 6/7/8/9 after their end dates) | Supported LTS/STS per support page |
| .NET Framework as default greenfield | Modern .NET (`net10.0`) |
| Disabling nullable on new projects | `<Nullable>enable</Nullable>` |
| Non-SDK-style / packages.config for new apps | SDK-style + PackageReference |
| Second DI container “for habit” | Built-in `Microsoft.Extensions.DependencyInjection` |
| Hardcoding secrets in appsettings committed to git | User secrets / env / vault ([SECURITY](../../../templates/docs/) product rules) |
| Retargeting to `net11.0` without ADR | Stay on `net10.0` LTS until decided |
| Inventing ASP.NET/EF APIs from memory | Official Learn / Context7 |

## Avoid unless product requires

| Avoid | Prefer |
|-------|--------|
| Premature NativeAOT everywhere | Default JIT publish; AOT when measured need |
| Microservices fashion on a modular-monolith ADR | Clear projects inside one deployable |
| Mixing Framework-only Windows APIs into cross-platform libs | Abstractions platform packages |

## Never as product constitution

| Stop | Why |
|------|-----|
| “Always use .NET 11 because newest” | Support track is a product decision |
| Silent rewrite of MasarHub to .NET | Needs stack-selection ADR |
