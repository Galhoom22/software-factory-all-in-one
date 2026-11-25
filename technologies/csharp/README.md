# C# — technology pack

**Pinned slice for new work in this pack:** **C# 14** (default language version for **.NET 10** LTS; docs checked **2026-11-23**).  
**Official home:** [C# language documentation](https://learn.microsoft.com/en-us/dotnet/csharp/) · [What's new](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/) · [Language reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/) · [Language versioning](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-versioning)

**Context7:** `/websites/learn_microsoft_en-us_dotnet_csharp` (prefer over locale forks).

## When to open this pack

- Writing or reviewing **C# language** code (class libraries, console, workers, ASP.NET Core handlers, MAUI, games — language craft).
- Choosing modern C# 12–14 defaults vs legacy Framework / pre-nullable patterns.
- Separating **language** (this pack) from a future **ASP.NET Core / .NET** framework pack when the owner asks for one.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated Learn.microsoft.com URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern C# defaults |
| [`quality.md`](quality.md) | Clean Code + architecture + patterns in C# form |
| [`csharp-14/`](csharp-14/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack is **C# language** professionalism grounded in Microsoft Learn.
- **Language version follows TFM** ([language versioning](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-versioning)): `.NET 10` → C# **14** (default here); `.NET 11` → C# **15**; `.NET 9` → C# **13**. Do not set `LangVersion` newer than the target framework supports.
- The product keeps its **SRS-pinned** stack unless an ADR chooses .NET — this pack does not silently replace that stack.
- Prefer **.NET 10 LTS + C# 14** for new .NET products unless the owner/ADR pins .NET 11 (C# 15). Re-check [What's new](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/) before adopting C# 15-only features.

## Related

- Platform: [`../dotnet/`](../dotnet/README.md) (.NET 10 LTS host / SDK / DI)
- Design patterns / Context7 / human review: playbook `07-judgment/`
- Packages over reinvention: [`07-judgment/packages.md`](../../07-judgment/packages.md)
- Stack selection before forcing .NET onto a product: [`07-judgment/stack-selection.md`](../../07-judgment/stack-selection.md)

---
