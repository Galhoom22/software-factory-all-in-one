# Vue.js — best practices

Sources: [Introduction](https://vuejs.org/guide/introduction.html), [Quick Start](https://vuejs.org/guide/quick-start.html), [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq.html). Re-check official docs before non-trivial Vue work (SF-05).

## 1. What Vue is

- Progressive framework for UIs on HTML/CSS/JS: **declarative rendering** + **reactivity**.
- Adopt incrementally (enhance HTML, Web Components, SPA, SSR/SSG, etc.) — same core knowledge.
- Docs you are reading are **Vue 3**. Vue 2 is EOL.

## 2. Production defaults (full apps)

1. Scaffold with **`npm create vue@latest`** (Vite + SFC) when starting a Vite Vue app; meet Quick Start Node range.
2. Prefer **Single-File Components** (`*.vue`) when using a build step.
3. Prefer **Composition API + `<script setup>`** for full applications (recommended in Introduction for build-tool apps; create-vue scaffolds this way).
4. Prefer Options API mainly for **no-build / low-complexity** progressive enhancement — both styles share the same core system.
5. Prefer official ecosystem pieces when needed: Vue Router, Pinia, Vitest (as create-vue prompts).

## 3. Reactivity habits (Composition API)

- Prefer `ref` / `reactive` / `computed` / lifecycle `onMounted` etc. from `vue`.
- Remember **`.value`** in script for refs; templates unwrap refs.
- Prefer **composables** for reusable stateful logic — not mixins (Composition API FAQ).

## 4. Templates and components

- Prefer declarative templates + components over manual DOM mutation.
- Prefer `scoped` styles in SFCs when styles should stay local (or product CSS/Tailwind conventions).
- Prefer props/emits contracts; validate at trust boundaries for user input (server still owns security).

## 5. CDN / no-build

- Prefer `vue@3` CDN builds only for small enhancements; use **production** builds for prod CDN use.
- Prefer `petite-vue` when the job is Alpine/jQuery-sized progressive enhancement (Quick Start note) — or use the Alpine pack if that is the product choice.
- Prefer ESM + import maps carefully (Safari support caveats in Quick Start).

## 6. Pairing

- **Inertia + Vue:** open Inertia pack (`@inertiajs/vue3@^3`).
- **SSR frameworks:** Nuxt/etc. only when SSR is required (Quick Start: Vite alone is simpler without SSR).
- Do not invent a second SPA stack beside an existing Next.js product UI without ADR.

---
