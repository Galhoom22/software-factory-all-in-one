# Vue.js — technology pack

**Pinned slice for new work in this pack:** **Vue 3.5.x** (latest stable checked **3.5.46** on 2026-11-21; docs are Vue 3). Vue 2 reached EOL 2023-12-31.  
**Official home:** [Introduction](https://vuejs.org/guide/introduction.html) · [Quick Start](https://vuejs.org/guide/quick-start.html) · [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq.html)

**Scaffold Node (create-vue):** `^22.18.0 || >=24.12.0` per Quick Start (re-check when scaffolding).

## When to open this pack

- Building UI with **Vue 3** (SFC, SPA, progressive enhancement, or Inertia Vue pages).
- Choosing **Composition API + `<script setup>`** vs Options API.
- Avoiding Vue 2 / Options-only habits in new full applications.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated Vue 3 URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern Vue defaults |
| [`quality.md`](quality.md) | Clean Code + architecture in Vue form |
| [`vue-3/`](vue-3/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack is **Vue 3 language/framework** professionalism.
- Products that already chose **Next.js** (or another SPA) for the actor UI must **not** silently rewrite in Vue — use Vue where the product stack includes it (e.g. Inertia + Vue, admin shells, other products).
- Pair with Inertia pack when using `@inertiajs/vue3`; pair with HTML/CSS/JS packs for fundamentals.

## Related

- Inertia: [`../inertiajs/`](../inertiajs/README.md)
- JavaScript / HTML / CSS / Tailwind packs
- Alpine: lighter progressive enhancement alternative for small cases (Vue docs also mention `petite-vue`)

---
