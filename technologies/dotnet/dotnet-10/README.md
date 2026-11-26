# .NET 10 — version slice

**Platform:** .NET **10** (`net10.0`) — **LTS** (support through **2028-11-14**) — [What's new](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-10/overview) · [Support](https://learn.microsoft.com/en-us/dotnet/core/releases-and-support)  
**Language default:** C# **14** — open [`../../csharp/csharp-14/`](../../csharp/csharp-14/README.md)  
**Checked:** 2026-11-23  

**Also note:** .NET **11** is current **STS** (shipped Nov 2026). Do not retarget to `net11.0` without product ADR.

## Files

| File | Purpose |
|------|---------|
| [`use-these.md`](use-these.md) | Prefer these on .NET 10 |
| [`stop-using.md`](stop-using.md) | Legacy / ban in new code |
| [`common-mistakes.md`](common-mistakes.md) | Failure modes agents hit |

## Agent rule

Before writing .NET platform code: open this slice **and** re-check Learn / Context7 for the product’s TFM. Pair with the C# pack for language.
