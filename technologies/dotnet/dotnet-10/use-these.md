# .NET 10 — use these

Sources: [What's new in .NET 10](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-10/overview), [releases & support](https://learn.microsoft.com/en-us/dotnet/core/releases-and-support), [introduction](https://learn.microsoft.com/en-us/dotnet/core/introduction).

## Prefer on .NET 10

| Prefer | Over | Why |
|--------|------|-----|
| `net10.0` TFM (LTS) | Unsupported majors / Framework for greenfield | Supported platform window |
| Latest **SDK** (may be STS) targeting `net10.0` | Stale SDK forever | New tools can build older TFMs |
| Monthly servicing updates | Skipping Patch Tuesday forever | Security + reliability |
| SDK-style csproj + `dotnet` CLI | Legacy project.json / Framework-only tooling | Modern restore/build/test/publish |
| `<Nullable>enable</Nullable>` + implicit usings | Null-oblivious new projects | Correctness defaults |
| Generic Host + built-in DI | Hand-rolled composition for workers/console | Config, logging, lifetime |
| `IConfiguration` / Options + `ILogger<T>` | Static config bags / Console-only logs | Testable, host-integrated |
| Microsoft.Extensions.* aligned to 10.x | Random major skew | TFM-aligned packages |
| Official NuGet + package validation habits | Unreviewed feed soup | Supply-chain hygiene |
| C# 14 language features (see C# pack) | Pre-nullable / Framework idioms | Matches .NET 10 default LangVersion |

## App-stack pointers (still prefer official docs)

| Area | Prefer starting point |
|------|------------------------|
| Web | ASP.NET Core 10 on Learn |
| Data | EF Core 10 on Learn |
| Cloud composition | Aspire (when product chooses it) |
| Containers | Official containerize docs / SDK container features |

## .NET 11 STS (only if product pins `net11.0`)

Retarget only with ADR. Then re-open [What's new in .NET 11](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-11/overview) + C# 15 pack notes — do not mix `net11` APIs into a `net10` project.
