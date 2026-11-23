# Technologies — reusable stack references

**What this is:** a growing library of **per-technology** packs. Goal: when an agent writes code in that stack, the result is **modern syntax**, **Clean Code**, **sound architecture**, and **patterns only when earned** — using **today’s** official standards, not memory.

**What this is not:** a second SRS, a full vendor-manual mirror, a silent upgrade of a product’s pinned versions, or permission to force one stack onto every product.

**Select before craft:** which language/framework/packages a product uses is decided by **that product’s requirements** ([`07-judgment/stack-selection.md`](../07-judgment/stack-selection.md)). Packs teach **how to write well** in a chosen stack. They never mean “always use TALL / always use Next / always use Filament.”

**TALL / VILT / PHP compositions:** which packs to open together → [`php-laravel-compositions.md`](php-laravel-compositions.md).

**Packages over reinvention:** for non-trivial capabilities, prefer a **verified** ecosystem package when it saves cost and raises professionalism — see [`07-judgment/packages.md`](../07-judgment/packages.md). Never add a package for a few obvious lines.

## Does this meet the quality bar?

| Need | How the library meets it |
|------|--------------------------|
| Latest standards / modern syntax | Version slice `use-these.md` + `stop-using.md`; **automatic** re-check of official docs before coding |
| Clean Code | Each pack’s `quality.md` + always-on `clean-code` rules |
| Clean / modular architecture | `quality.md` + product `ARCHITECTURE.md` (framework pack when present) |
| Good design patterns | Link to [`07-judgment/design-patterns.md`](../07-judgment/design-patterns.md) — problem→naive→enhance; no pattern-for-show |
| Auto search without owner ask | **Hard rule below** — Context7 / official vendor pages every non-trivial coding session on that stack |

If a pack is missing a row above, deepen that pack — do not invent a parallel bible outside `technologies/`.

## Layout

```text
playbook/technologies/
  README.md                 ← this file (agent protocol)
  _pack-template/           ← copy when adding Laravel, Next.js, …
  php/                      ← first language pack
    README.md
    official-refs.md
    best-practices.md
    quality.md              ← Clean Code + architecture + patterns in PHP form
    php-8.6/
      use-these.md
      stop-using.md
      common-mistakes.md
  laravel/                  ← Laravel 13 pack
  tailwindcss/              ← Tailwind CSS v4 pack
  alpinejs/                 ← Alpine.js 3.x pack
  livewire/                 ← Livewire 4.x pack
  filament/                 ← Filament 5.x pack
  javascript/               ← ECMAScript / JavaScript language pack
  html/                     ← HTML Living Standard pack
  css/                      ← CSS (Snapshot 2026) pack
  inertiajs/                ← Inertia.js 3.x pack
  vue/                      ← Vue 3 pack
  symfony/                  ← Symfony 8 pack
  php-laravel-compositions.md ← TALL / VILT / PHP pack map
  nextjs/                   ← add when owner asks
```

| Folder naming | Rule |
|---------------|------|
| Top-level slug | Lowercase (`php`, `laravel`, `tailwindcss`, `alpinejs`, `livewire`, `filament`, `javascript`, `html`, `css`, `inertiajs`, `vue`, `symfony`, `nextjs`, `postgresql`) |
| Version slice | Exact line (`php-8.6`, `laravel-13`, `tailwindcss-v4`, `alpinejs-v3`, `livewire-4`, `filament-5`, `javascript-es2026`, `html-living`, `css-2026`, `inertiajs-v3`, `vue-3`, `symfony-8`, `nextjs-16`) |
| Required files | See [`_pack-template/README.md`](_pack-template/README.md) — always include `quality.md` |

## How agents must use a pack (hard rules)

**Current docs gate:** Context7 MCP and/or official vendor pages this session — [`07-judgment/context7-docs.md`](../07-judgment/context7-docs.md). Packs distill craft; they do not replace a freshness check on non-trivial APIs.

**Before** treating a stack as the product default: run [`07-judgment/stack-selection.md`](../07-judgment/stack-selection.md) (requirements → options → recommendation → ADR/SRS pin). Do not invent a product stack from pack availability.

When the task writes or reviews code in a stack the product **already pinned** (or the owner named for a greenfield after selection):

1. **Open the pack first** — `best-practices.md`, `quality.md`, and the current version slice (`use-these` / `stop-using` / `common-mistakes`).
2. **Automatic latest check (no owner ask):** re-verify the pinned line on the **official** vendor site and/or Context7 in that session before non-trivial code. Memory and old chat are not evidence of “latest.” Same duty applies when the owner **names** a stack to work with — see **Owner names a stack** below.
3. **Apply the full bar:** modern syntax **and** Clean Code **and** architecture fit **and** patterns only when earned (see pack `quality.md`).
4. **Product SRS wins** for which version the product runs. If the pack is ahead of SRS, do not upgrade silently — propose an ADR.
5. **If the pack is missing** for a stack the owner named **or the owner pastes an official docs URL**: create/deepen it from `_pack-template/` the same session, fill from that URL + related official pages today, update [`coverage/`](../coverage/README.md), sync the studio playbook mirror.
6. Prefer **deepening** an existing pack over a second folder with the same slug.

## Owner names a stack (hard trigger — no ask)

When the owner says they will **use / work on / build with** a technology (e.g. “we’ll use Laravel”, “يلا PHP و Laravel”, “start with Filament”), treat that as an immediate cue — **do not wait** for “update the playbook” or a docs URL paste:

1. **Search latest (same session):** open official vendor docs and/or Context7 for that stack’s **current stable** line. Memory and old chat are not evidence.
2. **Compare to the playbook pack:** read `technologies/<slug>/` (or note that it is missing). Match version slice, `use-these` / `stop-using`, `official-refs` dates, and `quality.md` against what official docs say **today**.
3. **If current:** say so briefly and proceed with advice/coding from the pack + product SRS pin.
4. **If stale or missing:** update or create the pack from `_pack-template/` the **same session** (latest line + use/stop/mistakes + quality + dated official-refs), bump [`coverage/`](../coverage/README.md), commit path through planning `main` per product rules, and run `node scripts/sync-planning-playbook.mjs` (D-52). The playbook is a **starting point that must stay current**, not a frozen snapshot.
5. **Product SRS still wins** for what that product *runs*. If the pack moves ahead of a product pin, update the pack and **propose** an ADR — do not silently bump production versions.
6. Still run [`07-judgment/stack-selection.md`](../07-judgment/stack-selection.md) when the question is “which stack?” — this trigger is for **freshness of craft**, not for forcing one stack onto every product.

## Adding the next technology

1. Copy [`_pack-template/`](_pack-template/) → `technologies/<slug>/`.
2. Fill from **official** docs only (date the check in `official-refs.md`).
3. Add version slice + `quality.md`.
4. Link in the table below; bump coverage %; sync studio mirror.

## Packs present

| Pack | Current slice | Quality bar file | Status |
|------|---------------|------------------|--------|
| [`php/`](php/README.md) | [`php-8.6/`](php/php-8.6/README.md) | [`quality.md`](php/quality.md) | ✅ |
| [`laravel/`](laravel/README.md) | [`laravel-13/`](laravel/laravel-13/README.md) | [`quality.md`](laravel/quality.md) | ✅ |
| [`tailwindcss/`](tailwindcss/README.md) | [`tailwindcss-v4/`](tailwindcss/tailwindcss-v4/README.md) | [`quality.md`](tailwindcss/quality.md) | ✅ |
| [`alpinejs/`](alpinejs/README.md) | [`alpinejs-v3/`](alpinejs/alpinejs-v3/README.md) | [`quality.md`](alpinejs/quality.md) | ✅ |
| [`livewire/`](livewire/README.md) | [`livewire-4/`](livewire/livewire-4/README.md) | [`quality.md`](livewire/quality.md) | ✅ |
| [`filament/`](filament/README.md) | [`filament-5/`](filament/filament-5/README.md) | [`quality.md`](filament/quality.md) | ✅ |
| [`javascript/`](javascript/README.md) | [`javascript-es2026/`](javascript/javascript-es2026/README.md) | [`quality.md`](javascript/quality.md) | ✅ |
| [`html/`](html/README.md) | [`html-living/`](html/html-living/README.md) | [`quality.md`](html/quality.md) | ✅ |
| [`css/`](css/README.md) | [`css-2026/`](css/css-2026/README.md) | [`quality.md`](css/quality.md) | ✅ |
| [`inertiajs/`](inertiajs/README.md) | [`inertiajs-v3/`](inertiajs/inertiajs-v3/README.md) | [`quality.md`](inertiajs/quality.md) | ✅ |
| [`vue/`](vue/README.md) | [`vue-3/`](vue/vue-3/README.md) | [`quality.md`](vue/quality.md) | ✅ |
| [`symfony/`](symfony/README.md) | [`symfony-8/`](symfony/symfony-8/README.md) | [`quality.md`](symfony/quality.md) | ✅ |
| [`php-laravel-compositions.md`](php-laravel-compositions.md) | TALL + VILT + Symfony map | — | ✅ |
| `nextjs/` | — | — | ❌ Add when owner asks |
