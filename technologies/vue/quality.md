# Vue.js — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar.

## 1. Clean Code in Vue shape

| Rule | Vue terms |
|------|-----------|
| Names reveal intent | Component/composable names match the job |
| One job | One SFC ≈ one UI concern; extract composables for shared state logic |
| Readable in one pass | Prefer `<script setup>` clarity over opaque Options soup in large apps |
| Trust boundaries | Props are public; never put secrets in client state |
| Campsite | Delete dead components/composables when touching a feature |

## 2. Architecture fit

- Vue = **UI framework**. Domain/API rules stay where the product architecture puts them (Laravel API, Inertia controllers, etc.).
- Prefer the product’s chosen host (Vite SPA, Inertia, Nuxt) — do not add Nuxt “for later” without need.
- If the product UI is Next.js, do not migrate pages to Vue by habit.

## 3. Design patterns (judgment)

- Default: SFC + Composition API + composables.
- Prefer Pinia/Router when create-vue / product already chose them — not a global store for every bit of local UI state.
- Avoid Class API (docs no longer recommend with Vue 3).

## 4. Automatic latest check (mandatory)

Before non-trivial Vue work:

1. Open this pack (`best-practices` + `vue-3/` slice).
2. Re-check [Introduction](https://vuejs.org/guide/introduction.html) / [Quick Start](https://vuejs.org/guide/quick-start.html) and npm `vue` **latest** tag (3.5.x line as of check day).
3. Do not pin prerelease 3.6 RC/beta in production without product decision.

## Related

- Inertia / JS / HTML / CSS packs · coverage `coverage/06-technologies.md`

---
