# Vue 3 — prefer these

Sources: [Introduction](https://vuejs.org/guide/introduction.html), [Quick Start](https://vuejs.org/guide/quick-start.html), [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq.html), [`<script setup>`](https://vuejs.org/api/sfc-script-setup.html).

## App setup

| Prefer | Notes |
|--------|-------|
| `vue@3` / **3.5.x** stable | Pin from npm `latest`; re-check before bump |
| `npm create vue@latest` | Official Vite SFC scaffold |
| `createApp(…).mount('#app')` | Vue 3 entry |
| SFCs (`*.vue`) with build tools | Recommended for real apps |
| Composition API + `<script setup>` | Full apps / create-vue default |

## Composition API

| Prefer | Notes |
|--------|-------|
| `ref` / `reactive` / `computed` | Reactive state |
| `onMounted` and other `on*` hooks | Lifecycle |
| Composables (`useX`) | Logic reuse (FAQ) |
| `defineProps` / `defineEmits` in `<script setup>` | Typed contracts |
| `defineOptions` (3.3+) when needed | name / `inheritAttrs` without leaving setup |

## Options API (when appropriate)

| Prefer | Notes |
|--------|-------|
| Options API for no-build / simple enhance | Introduction recommendation |
| Same templates either style | Shared core system |

## Ecosystem (as product needs)

| Prefer | Notes |
|--------|-------|
| Vue Router / Pinia via create-vue prompts | Official path |
| Vite alone without Nuxt if no SSR | Quick Start guidance |
| Inertia Vue adapter when that architecture is chosen | See Inertia pack |

---
