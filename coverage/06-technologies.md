# Coverage — technologies library

Paths under `software-factory-all-in-one/technologies/`.

| ✅ | Capability | Path | % | Notes |
|----|------------|------|---|-------|
| ✅ | Technologies library layout | `technologies/README.md` | **90** | Slug + version-slice convention; agent protocol |
| ✅ | Select-before-craft gate | `07-judgment/stack-selection.md` + `technologies/README` | **90** | Packs ≠ product stack; requirements decide |
| ✅ | Owner-names-stack freshness | `technologies/README` § Owner names a stack | **90** | Auto search official/Context7; update the pack if stale — upstream pull request when vendored (SF-05) |
| ✅ | Context7 day gate (judgment) | `07-judgment/context7-docs` + `08` | **93** | resolve→query / official fallback; day summary evidence (SF-05) |
| ✅ | TALL / VILT / PHP compositions map | `technologies/php-laravel-compositions.md` | **90** | Which packs to open together; gaps listed honestly |
| ✅ | PHP pack hub | `technologies/php/` | **90** | Official refs + modern baseline + `quality.md` |
| ✅ | PHP 8.6 version slice | `technologies/php/php-8.6/` | **85** | use / stop / common mistakes from php.net |
| ✅ | Quality bar + auto latest-docs | `technologies/README` + each `quality.md` | **92** | Clean Code/architecture/patterns + mandatory official refresh (SF-05) |
| ✅ | Pack template for next stacks | `technologies/_pack-template/` | **90** | Required file list for Laravel/Next/… |
| ✅ | Laravel pack hub | `technologies/laravel/` | **88** | Official 13.x refs + practices + quality |
| ✅ | Laravel 13 version slice | `technologies/laravel/laravel-13/` | **88** | use / stop / mistakes from laravel.com/docs/13.x |
| ✅ | Tailwind CSS pack hub | `technologies/tailwindcss/` | **88** | Vite install + v4 practices + quality |
| ✅ | Tailwind CSS v4 slice | `technologies/tailwindcss/tailwindcss-v4/` | **88** | use / stop / mistakes from tailwindcss.com |
| ✅ | Alpine.js pack hub | `technologies/alpinejs/` | **88** | Start Here + install + quality |
| ✅ | Alpine.js 3.x slice | `technologies/alpinejs/alpinejs-v3/` | **88** | use / stop / mistakes from alpinejs.dev |
| ✅ | Livewire pack hub | `technologies/livewire/` | **88** | Quickstart + install + quality |
| ✅ | Livewire 4.x slice | `technologies/livewire/livewire-4/` | **88** | use / stop / mistakes from livewire.laravel.com/docs/4.x |
| ✅ | Filament pack hub | `technologies/filament/` | **88** | Getting started + install + quality |
| ✅ | Filament 5.x slice | `technologies/filament/filament-5/` | **88** | use / stop / mistakes from filamentphp.com/docs/5.x |
| ✅ | JavaScript pack hub | `technologies/javascript/` | **88** | MDN hub + Guide/Reference + quality |
| ✅ | ECMAScript 2026 slice | `technologies/javascript/javascript-es2026/` | **88** | use / stop / mistakes from MDN + ECMA-262 |
| ✅ | TypeScript pack hub | `technologies/typescript/` | **88** | typescriptlang.org/docs; Context7 `/websites/typescriptlang` |
| ✅ | TypeScript 7.0 slice | `technologies/typescript/typescript-7.0/` | **88** | use / stop / mistakes; native tsc; TS 6 side-by-side for API tools |
| ✅ | HTML pack hub | `technologies/html/` | **88** | MDN HTML + WHATWG Living Standard + quality |
| ✅ | HTML Living Standard slice | `technologies/html/html-living/` | **88** | use / stop / mistakes from MDN + obsolete.html |
| ✅ | CSS pack hub | `technologies/css/` | **88** | MDN CSS + Snapshot 2026 + quality |
| ✅ | CSS Snapshot 2026 slice | `technologies/css/css-2026/` | **88** | use / stop / mistakes from MDN + W3C snapshot |
| ✅ | Inertia.js pack hub | `technologies/inertiajs/` | **88** | Getting started + install + quality |
| ✅ | Inertia.js 3.x slice | `technologies/inertiajs/inertiajs-v3/` | **88** | use / stop / mistakes from inertiajs.com/docs/v3 |
| ✅ | Vue.js pack hub | `technologies/vue/` | **88** | Introduction + Quick Start + quality |
| ✅ | Vue 3 slice | `technologies/vue/vue-3/` | **88** | use / stop / mistakes from vuejs.org (3.5.x) |
| ✅ | React pack hub | `technologies/react/` | **90** | react.dev + quality |
| ✅ | React 19 slice | `technologies/react/react-19/` | **90** | use / stop / mistakes (npm 19.3.x) |
| ✅ | Symfony pack hub | `technologies/symfony/` | **88** | Doc hub + setup + official best practices + quality |
| ✅ | Symfony 8 slice | `technologies/symfony/symfony-8/` | **88** | use / stop / mistakes (8.1 stable; LTS 7.4 noted) |
| ✅ | Next.js pack hub | `technologies/nextjs/` | **92** | nextjs.org/docs + quality |
| ✅ | Next.js 16 slice | `technologies/nextjs/nextjs-16/` | **92** | App Router; Proxy; npm 16.4.x |
| ✅ | C# pack hub | `technologies/csharp/` | **88** | Learn.microsoft.com csharp; Context7 `/websites/learn_microsoft_en-us_dotnet_csharp` |
| ✅ | C# 14 version slice | `technologies/csharp/csharp-14/` | **88** | use / stop / mistakes; .NET 10 LTS default; C# 15 noted for net11 |
| ✅ | .NET pack hub | `technologies/dotnet/` | **88** | Learn.microsoft.com/dotnet; Context7 `/websites/learn_microsoft_en-us_dotnet` |
| ✅ | .NET 10 version slice | `technologies/dotnet/dotnet-10/` | **88** | LTS TFM; SDK/CLI/host/DI; .NET 11 STS noted |
| ✅ | Rust pack hub | `technologies/rust/` | **88** | doc.rust-lang.org/stable; Context7 `/rust-lang/rust` |
| ✅ | Rust 1.100 + edition 2024 slice | `technologies/rust/rust-1.100/` | **88** | use / stop / mistakes; stable 1.100.0; edition 2024 |
| ❌ | Other stacks | — | **0** | Add on demand (owner pastes official docs URL → fill pack same session) |

**Domain average (started packs only): ~89%.**

## Agent decision cheat-sheet

| Owner ask | Action |
|-----------|--------|
| Add PHP / 8.6 practices | Deepen `php/` — do not fork a second PHP bible |
| Pastes an official stack docs URL (e.g. Tailwind Vite install) | Create or deepen `technologies/<slug>/` from `_pack-template/`; pin latest official line; update this atlas + sync |
| Asks if TALL / VILT / PHP world is covered | Open `php-laravel-compositions.md`; deepen packs or fill listed gaps |
| Pastes MDN JavaScript / ECMAScript docs | Deepen `javascript/` — do not fork a second JS bible |
| Pastes TypeScript docs (typescriptlang.org/docs) | Deepen `typescript/` — do not fork a second TS bible |
| Pastes MDN HTML / WHATWG HTML docs | Deepen `html/` — do not fork a second HTML bible |
| Pastes MDN CSS / W3C CSS Snapshot docs | Deepen `css/` (keep Tailwind pack for utilities) — do not fork a second CSS bible |
| Pastes Inertia.js docs URL | Deepen `inertiajs/` — do not fork a second Inertia bible |
| Pastes Vue.js docs URL | Deepen `vue/` — do not fork a second Vue bible |
| Pastes React docs URL (react.dev) | Deepen `react/` — do not fork a second React bible |
| Pastes Next.js docs URL (nextjs.org/docs) | Deepen `nextjs/` — do not fork a second Next bible |
| Pastes Symfony docs URL | Deepen `symfony/` — do not fork a second Symfony bible |
| Pastes Rust docs (doc.rust-lang.org/stable) | Deepen `rust/` — do not fork a second Rust bible |
| Pastes C# / .NET Learn docs | Deepen `csharp/` / `dotnet/` — do not fork second bibles |
| Add Laravel / Next.js | Create `technologies/<slug>/` from README template; pin official version |
| Product still on older PHP / CSS / JS engines | Keep SRS pin; use pack as upgrade guide, not silent bump |



