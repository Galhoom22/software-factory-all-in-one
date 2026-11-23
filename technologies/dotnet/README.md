# .NET — technology pack

**Pinned slice for new work in this pack:** **.NET 10** (`net10.0`, **LTS** through Nov 2028; docs checked **2026-11-23**).  
**Official home:** [.NET documentation](https://learn.microsoft.com/en-us/dotnet/) · [Introduction](https://learn.microsoft.com/en-us/dotnet/core/introduction) · [Releases & support](https://learn.microsoft.com/en-us/dotnet/core/releases-and-support) · [What's new in .NET 10](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-10/overview)

**Context7:** `/websites/learn_microsoft_en-us_dotnet` (prefer); alternate `/dotnet/docs`.

## When to open this pack

- Choosing **TFM**, SDK/CLI workflow, hosting, DI, configuration, logging, packaging, and support-track decisions for a .NET product.
- Separating **platform** (this pack) from **C# language** ([`../csharp/`](../csharp/README.md)) and from a future ASP.NET Core / EF Core pack when the owner asks.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated Learn.microsoft.com URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern .NET platform defaults |
| [`quality.md`](quality.md) | Clean Code + architecture in .NET form |
| [`dotnet-10/`](dotnet-10/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack is **.NET platform** professionalism (runtime, libraries, SDK, Generic Host, NuGet).
- Pair with [`../csharp/`](../csharp/README.md) for language craft (C# 14 on .NET 10).
- **.NET 11** is the current **STS** line (shipped Nov 2026) — use only when product SRS/ADR pins `net11.0`. Prefer **.NET 10 LTS** for stability-sensitive products ([support policy](https://learn.microsoft.com/en-us/dotnet/core/releases-and-support)).
- You may install the **latest SDK** (even STS) while targeting an older runtime TFM.
- **MasarHub** stays Laravel/Next unless a separate ADR chooses .NET — this pack does not rewrite that stack.

## Related

- C#: [`../csharp/`](../csharp/README.md)
- Packages / stack selection: [`07-judgment/packages.md`](../../07-judgment/packages.md) · [`07-judgment/stack-selection.md`](../../07-judgment/stack-selection.md)
- Context7 day gate: [`07-judgment/context7-docs.md`](../../07-judgment/context7-docs.md)

---
