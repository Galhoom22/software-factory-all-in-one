# .NET — best practices (modern baseline)

Defaults for agents building on the **.NET platform** under this pack. Grounded in [introduction](https://learn.microsoft.com/en-us/dotnet/core/introduction), [releases & support](https://learn.microsoft.com/en-us/dotnet/core/releases-and-support), SDK/CLI docs, and [DI](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection). Version-specific .NET 10 notes live in [`dotnet-10/`](dotnet-10/README.md). Language details: [`../csharp/`](../csharp/README.md).

## 1. Choose the right track

- Prefer **.NET 10 LTS** (`net10.0`) for new products that need a long support window.
- Use **.NET 11 STS** (`net11.0`) only when the product ADR wants newest features and accepts a shorter support window — re-check [support](https://learn.microsoft.com/en-us/dotnet/core/releases-and-support).
- Prefer installing the **latest SDK**; it can target older runtimes. Keep apps on monthly **servicing** updates.
- Prefer modern **.NET** over **.NET Framework** for greenfield (Framework is Windows maintenance).

## 2. Project defaults

- Prefer SDK-style projects (`Microsoft.NET.Sdk` / Worker / Web).
- Prefer `<TargetFramework>net10.0</TargetFramework>`, `<Nullable>enable</Nullable>`, `<ImplicitUsings>enable</ImplicitUsings>` on new projects (templates already do this).
- Prefer omitting `LangVersion` so it follows the TFM ([C# pack](../csharp/README.md)).
- Prefer `dotnet new`, `dotnet restore`, `dotnet build`, `dotnet test`, `dotnet publish` — one CLI workflow for local and CI.

## 3. Host, DI, config, logging

- Prefer the **Generic Host** (`Microsoft.Extensions.Hosting`) for console/worker apps that need DI, config, and logging.
- Prefer built-in **DI** (`IServiceCollection` / constructor injection) over a second IoC container for ordinary apps.
- Prefer `IConfiguration` + options pattern over scattered static settings.
- Prefer `ILogger<T>` over `Console.WriteLine` in library/app code.
- Prefer registering lifetimes deliberately (`Singleton` / `Scoped` / `Transient`); do not captive-depend Scoped from Singleton.

## 4. Packages and boundaries

- Prefer verified **NuGet** packages for non-trivial capabilities ([`packages.md`](../../07-judgment/packages.md)); pin versions; review licenses and maintenance.
- Prefer clear project/assembly boundaries the product already uses; do not invent microservices for a modular monolith ADR.
- Prefer official Microsoft.* packages aligned to the TFM major (e.g. 10.x on `net10.0`) unless docs say otherwise.

## 5. App stacks (pointers)

- **Web:** ASP.NET Core — open Learn ASP.NET Core / a future `aspnetcore/` pack; do not invent middleware from memory.
- **Data:** EF Core — official EF docs; do not invent migrations from blogs.
- **Cloud-native:** Aspire / containers — only when the product chooses them; Prefer official Aspire docs.

## 6. Freshness

- Re-check Context7 (`/websites/learn_microsoft_en-us_dotnet`) and/or Learn this session before non-trivial platform APIs ([`context7-docs.md`](../../07-judgment/context7-docs.md)).

---
