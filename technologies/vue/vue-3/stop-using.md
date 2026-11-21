# Vue 3 — stop using these

Sources: [Introduction](https://vuejs.org/guide/introduction.html) (Vue 2 EOL), [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq.html), [Quick Start](https://vuejs.org/guide/quick-start.html).

**Rule for agents:** do not introduce the left column in new Vue 3 application code.

## Versions / stack

| Stop using | Use instead |
|------------|-------------|
| **Vue 2** for new work | Vue 3 (+ [migration guide](https://v3-migration.vuejs.org/) if upgrading) |
| Vue 2 + `@vue/composition-api` plugin for new apps | Built-in Vue 3 Composition API |
| Vue 3 **3.6 RC/beta** in production by habit | Stay on **3.5.x** `latest` until product pins 3.6 stable |
| Class API as default Vue 3 style | Composition API (FAQ: no longer recommended) |

## Patterns

| Stop using | Use instead |
|------------|-------------|
| Mixins for logic reuse in new Composition code | Composables |
| Options API as the only style for large SFC apps | Composition API + `<script setup>` |
| Manual DOM updates fighting the template | Declarative binding |
| Global CDN **dev** build in production | Production Vue build / Vite build |
| Opening `file://` ES module demos | Local HTTP server (`npx serve`, etc.) |

## Architecture anti-patterns

| Stop using | Use instead |
|------------|-------------|
| Rewriting a Next.js product UI in Vue silently | Keep product architecture or ADR |
| Adding Nuxt when SSR is not required | Vite SPA (Quick Start) |
| Putting secrets in client reactive state | Server-only secrets |

---
