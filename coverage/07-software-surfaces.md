# Coverage — software industry surfaces

**What this is:** honest **% readiness** of the factory to plan and implement **each kind of software product** (web, mobile, desktop, games, extensions, …) — plus which **languages / stacks** map to which surface.

**What this is not:** a second factory. Generic method (actor loop, day pipeline, CI/CD, security, FEATURE_SDLC) still applies everywhere. This file answers: *“If we build X tomorrow, how covered are we?”*

**Score meaning for a surface:** method rails that already apply **plus** surface-specific judgment, templates, and `technologies/` packs. Same rubric as [`README.md`](README.md) (✅/⚠️/❌ + %).

Last audit: **2026-11-23** (Rust pack landed).

---

## How agents must use this file

1. Owner asks to build / improve a **kind of software** (or “what % are we on mobile?”) → open **this file first**, report mark + % + strongest/weakest packs, then propose deepen vs add.
2. Before inventing a new surface bible → check this table; deepen the named home.
3. After adding a pack, judgment, or template that raises a surface → bump that row **and** the rollup in [`README.md`](README.md) in the same change.
4. **Candor:** do not claim high % from generic method alone. Web method ≠ iOS craft.
5. Languages below are **affinity maps**, not product pins. Product stack still follows [`07-judgment/stack-selection.md`](../07-judgment/stack-selection.md).

---

## Scorecard by surface

| Surface | Mark | % | What exists today | Biggest gap |
|---------|------|---|-------------------|-------------|
| **Web apps** (SSR / SPA / MPA / marketing + signed-in) | ✅ | **82** | Method + FE/BE templates + Next/React/Vue/Inertia/HTML/CSS/JS/Tailwind packs + prototype rails | Mobile-web / PWA depth; full prototype scaffold in templates |
| **Web / HTTP APIs & modular backends** | ✅ | **88** | API contract, readiness, design, Laravel/PHP/Symfony/.NET packs, day gates, testing guides | Non-REST (gRPC/GraphQL) packs thin |
| **Admin / internal tools (web)** | ✅ | **78** | Filament + Livewire + Alpine packs; same web rails | Desktop-admin / thick-client patterns |
| **Mobile — iOS native** | ❌ | **8** | Generic delivery/security/CI judgment only | No Swift / SwiftUI / Xcode pack; no store/TestFlight judgment |
| **Mobile — Android native** | ❌ | **8** | Same generic rails only | No Kotlin / Jetpack Compose pack; no Play Console judgment |
| **Mobile — cross-platform** | ❌ | **12** | React pack helps RN slightly; C#/.NET helps MAUI slightly | No Flutter / RN / MAUI product packs; no store dual-pipeline |
| **Desktop — native** (Win / macOS / Linux) | ⚠️ | **18** | C# / .NET packs (Win/.NET path); generic CI | No WinUI/WPF/AppKit/GTK judgment; signing/notarization |
| **Desktop — hybrid** (Electron / Tauri / similar) | ⚠️ | **20** | JS/TS + web packs; **Rust** language pack (Tauri affinity) | No Electron/Tauri product pack yet; auto-update / sandbox craft |
| **Browser extensions** (Chromium / Firefox / Safari) | ❌ | **5** | Web security judgment partially transferable | No MV3 pack; store review / permissions craft |
| **CLI & developer tools** | ⚠️ | **36** | Agent/CI scripts culture; .NET/`dotnet` CLI notes; **Rust** pack; packages judgment | Dedicated CLI UX / distribution judgment still thin |
| **Libraries / SDKs / packages** | ⚠️ | **40** | Packages judgment; Cargo crate craft in Rust pack; versioning in technologies | Semver/publish/API-compat factory still thin |
| **Games** (engines / realtime interactive) | ❌ | **3** | Almost nothing surface-specific | No engine pack (Unity/Godot/Unreal); no loop/perf craft |
| **Embedded / IoT / firmware** | ❌ | **8** | **Rust** pack + Embedded Book pointer; security red lines | No RTOS / device-specific pack |
| **Operating systems / kernels / drivers** | ❌ | **1** | Out of studio default scope | Do not fake coverage; add only if a real product needs it |
| **Data engineering / pipelines / warehouses** | ❌ | **10** | Backend + integration judgment partial | No Spark/dbt/orchestration pack |
| **ML / model-serving products** | ⚠️ | **40** | AI engineering + AI system-design + product AI template | Training/MLOps depth; Python/ML packs missing |
| **Realtime / multiplayer / streaming** | ⚠️ | **22** | Integration + API judgment; queues in backend culture | No WebSocket/CRDT/game-sync pack |
| **AR / VR / spatial** | ❌ | **2** | None surface-specific | — |
| **Wearables / watch / TV companions** | ❌ | **2** | None surface-specific | — |
| **Blockchain / web3 clients** | ❌ | **5** | Compliance/ethics can refuse bad claims | No chain pack; treat as High-risk until pack exists |
| **DevOps / platform / infra-as-product** | ⚠️ | **45** | `09-CI-CD`, deploy templates, Docker docs patterns | No K8s/Terraform pack; CD Phase A honesty remains |

### Industry-surface rollup

| Metric | Value |
|--------|-------|
| **Surfaces listed** | 21 |
| **Weighted readiness** (equal weight per surface row) | **~25%** |
| **Studio-default strength** (web app + HTTP API + admin web only) | **~83%** |
| **Honest message** | Factory **professionalism inside its homes** is high (~89% in domains 01–06). **Industry breadth** across all software kinds is still early (weighted readiness above). Do not confuse the two numbers. |

---

## Languages & stacks ↔ surfaces

Affinity only. A language can serve many surfaces; a product still pins via stack-selection + ADR.

| Language / platform | Primary surfaces | Pack in `technologies/`? | Notes |
|---------------------|------------------|--------------------------|-------|
| **JavaScript / TypeScript** | Web, hybrid desktop, extensions, RN, CLI | ✅ JS; ⚠️ TS pack missing | TS pack is a high-value upgrade |
| **HTML / CSS** | Web, hybrid shells | ✅ | — |
| **PHP** | Web backends, admin | ✅ | — |
| **Laravel / Livewire / Filament / Inertia / Vue** | Web apps + admin | ✅ | Compositions map exists |
| **React / Next.js** | Web apps; RN partial | ✅ | RN ≠ Next — do not claim mobile from these alone |
| **Symfony** | Web / APIs | ✅ | — |
| **C# / .NET** | Web APIs, desktop, MAUI, games (Unity C#) | ✅ language + platform | ASP.NET / EF / MAUI / Unity still separate packs |
| **Swift** | iOS, macOS, watchOS | ❌ | Priority when first iOS product starts |
| **Kotlin** | Android, multiplatform | ❌ | Priority when first Android product starts |
| **Dart / Flutter** | Mobile + desktop + web cross | ❌ | — |
| **Java** | Android legacy, enterprise backends | ❌ | — |
| **Python** | Data, ML, backends, scripting | ❌ | High value for ML/data surfaces |
| **Go** | APIs, CLI, infra | ❌ | — |
| **Rust** | CLI, systems, Tauri, WASM, embedded | ✅ language | Stable 1.100 + edition 2024; framework crates still separate packs |
| **C / C++** | Native, games, embedded, OS | ❌ | Low studio priority unless product needs it |
| **Ruby / Elixir / Scala / …** | Various | ❌ | Add on demand (owner pastes official docs) |

---

## Priority upgrade backlog (surfaces)

Order is **studio leverage**, not academic completeness. Re-rank when a real product needs a weak surface.

| Priority | Upgrade | Raises surfaces | Suggested sources (official only) |
|----------|---------|-----------------|-----------------------------------|
| 1 | TypeScript pack | Web, RN, Electron, extensions | typescriptlang.org/docs |
| 2 | Mobile judgment + one starter pack (Swift **or** Kotlin **or** Flutter — product-driven) | Mobile rows | Apple / Android / Flutter docs |
| 3 | Browser-extension MV3 judgment + pack | Extensions | developer.chrome.com, MDN WebExtensions |
| 4 | Electron **or** Tauri pack | Hybrid desktop | electronjs.org / tauri.app |
| 5 | Python pack (language) | ML, data, scripting | docs.python.org |
| 6 | ASP.NET Core / EF Core packs | .NET web APIs | learn.microsoft.com |
| 7 | Games judgment only if a game product is real | Games | Engine vendor docs — do not invent |

Agents may **propose** the next gap (“we’re at 8% on iOS native — want Swift pack next?”) when the owner asks about readiness or a new product surface. Do not spam proposals mid implementation day unless the owner asked.

---

## Related homes

| Need | Home |
|------|------|
| Factory *capability* coverage (method, templates, workflows) | [`01`](01-method-docs.md)–[`06`](06-technologies.md), [`README`](README.md) |
| Gaps / intentional exclusions | [`05-gaps-and-upgrades.md`](05-gaps-and-upgrades.md) |
| Stack choice for a product | [`../07-judgment/stack-selection.md`](../07-judgment/stack-selection.md) |
| Pack craft after pin | [`../technologies/README.md`](../technologies/README.md) |
| North star | [`../EXCELLENCE.md`](../EXCELLENCE.md) |
