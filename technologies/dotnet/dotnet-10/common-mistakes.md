# .NET 10 — common mistakes

## Support / TFM

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Shipping on EOL runtime | No security patches | Track [support](https://learn.microsoft.com/en-us/dotnet/core/releases-and-support); retarget |
| Confusing SDK version with app TFM | “We installed 11 so the app is 11” | SDK builds many TFMs; set `TargetFramework` explicitly |
| Jumping to `net11.0` for one API | Unplanned STS commitment | ADR + C# 15 check; or stay on 10 |

## Host / DI

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Captive dependency (Singleton → Scoped) | Stale/wrong scoped state | Lifetime rules; validate with analyzers |
| Building a second IoC | Dual containers, confusion | Use Generic Host DI |
| `BuildServiceProvider()` inside registration | Incorrect root scopes | Register and resolve via host |

## Config / ops

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Secrets in committed `appsettings.json` | Leak | User secrets / env / secret store |
| Ignoring monthly patches | Known CVEs | Patch Tuesday cadence |
| `Console.WriteLine` as production logging | No levels/correlation | `ILogger<T>` |

## Agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Treating this pack as ASP.NET expertise | Wrong middleware/Minimal API shapes | ASP.NET Learn / future aspnetcore pack |
| Ignoring C# pack | Pre-nullable language habits | Open [`../../csharp/`](../../csharp/README.md) |
| Assuming MasarHub is .NET | Wrong stack | Product SRS; stack-selection ADR first |
