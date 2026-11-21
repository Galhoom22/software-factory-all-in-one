# PHP / Laravel compositions — TALL, VILT, and siblings

**What this is:** a **map** of which technology packs to open together for the Laravel-centered stacks this studio cares about. It does not replace [`07-judgment/stack-selection.md`](../07-judgment/stack-selection.md) (which stack a *product* should use).

**What this is not:** permission to bolt TALL/VILT onto a product that already pinned SPA ↔ API (or the reverse) without an ADR.

## Web fundamentals (always underneath)

Every Blade, Livewire, Vue, or Inertia page still emits **HTML + CSS + JS**. Open these when markup, cascade, or language-level JS matters:

| Layer | Pack |
|-------|------|
| HTML | [`html/`](html/README.md) |
| CSS (cascade / modern CSS) | [`css/`](css/README.md) |
| JavaScript (language) | [`javascript/`](javascript/README.md) |
| Utility CSS | [`tailwindcss/`](tailwindcss/README.md) (complements CSS pack — does not replace it) |

## PHP language + frameworks

| Concern | Pack | Notes |
|---------|------|-------|
| PHP language | [`php/`](php/README.md) (slice **8.6**) | Modern syntax / stop-using |
| Laravel | [`laravel/`](laravel/README.md) (slice **13**) | Requires PHP **8.3–8.5** per Laravel support — do not assume 8.6 until Laravel lists it |
| Symfony | [`symfony/`](symfony/README.md) (slice **8**) | Broader PHP ecosystem / components; **not** a silent Laravel replacement |

## TALL stack (Tailwind · Alpine · Laravel · Livewire)

**Server-driven UI.** Most state and rendering stay in PHP/Blade; Alpine for small client behavior. Livewire **bundles** Alpine — do not load a second Alpine copy.

| Letter | Pack |
|--------|------|
| **T**ailwind | [`tailwindcss/`](tailwindcss/README.md) |
| **A**lpine | [`alpinejs/`](alpinejs/README.md) |
| **L**aravel | [`laravel/`](laravel/README.md) + [`php/`](php/README.md) |
| **L**ivewire | [`livewire/`](livewire/README.md) |

**Common add-on:** Filament admin panels ride Livewire + Tailwind → also open [`filament/`](filament/README.md).

**Fit (short):** CRUD/forms/admin, PHP-first teams, stay close to Blade. **Not** a substitute for a rich client SPA when the product needs heavy client state.

## VILT stack (Vue · Inertia · Laravel · Tailwind)

**Client-driven UI with server routing.** Laravel owns routes/data/auth; Inertia passes props; Vue renders; Tailwind styles. No separate JSON API required for page navigation.

| Letter | Pack |
|--------|------|
| **V**ue | [`vue/`](vue/README.md) |
| **I**nertia | [`inertiajs/`](inertiajs/README.md) |
| **L**aravel | [`laravel/`](laravel/README.md) + [`php/`](php/README.md) |
| **T**ailwind | [`tailwindcss/`](tailwindcss/README.md) |

Also open HTML/CSS/JS packs for fundamentals. Inertia Vue adapter → Vue + Inertia packs together.

**Fit (short):** richer client interactivity, Vue-skilled teams, SPA-feel without a separate FE deploy. **Not** the same as Next.js ↔ Laravel API.

## Choosing TALL vs VILT vs SPA↔API

| Need | Lean toward |
|------|-------------|
| PHP-first, forms/tables, admin | **TALL** (+ Filament when panel builder fits) |
| Vue UI, complex client UX, one Laravel deploy | **VILT** |
| Separate FE/BE repos, public API, Next/mobile clients | **SPA ↔ HTTP API** (e.g. Next + Laravel API) — different architecture; do not “partially” mix without ADR |
| Non-Laravel PHP / shared components | **Symfony** pack where the product uses Symfony |

Always run [`stack-selection.md`](../07-judgment/stack-selection.md) for a **new** product. For non-trivial features, also [`packages.md`](../07-judgment/packages.md).

## Agent checklist when the owner says “TALL” or “VILT”

1. Confirm product architecture allows that composition (ADR if switching).
2. D-79 freshness: official docs/Context7 for each letter’s pack; update stale packs same session.
3. Open **all** packs in the table for that stack (+ web fundamentals as needed).
4. Apply each pack’s `quality.md` — modern syntax + Clean Code + earned patterns only.

## Honest gaps (not blockers for TALL/VILT craft)

These raise professionalism later when the owner pastes official docs or names them:

| Gap | Why it can wait |
|-----|-----------------|
| Dedicated **Vite** pack | Covered inside Laravel + Tailwind install paths today |
| **Pest** / PHPUnit pack | Testing lives in product TESTING docs + FEATURE_SDLC |
| **PostgreSQL** / Redis / queue workers | Infra — add when named |
| **Next.js** pack | Separate SPA world (MasarHub FE); not part of TALL/VILT |
| React/Svelte Inertia adapters as deep packs | VILT here means **Vue**; other adapters when a product needs them |

## Related

- Library protocol: [`README.md`](README.md)
- Coverage atlas: [`../coverage/06-technologies.md`](../coverage/06-technologies.md)
