# Vue 3 — common mistakes

## Reactivity

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Forgetting `.value` on refs in script | Stale / wrong updates | Use `.value` in JS; templates unwrap |
| Destructuring `reactive()` without `toRefs` | Lost reactivity | Keep object access or use `toRefs` |
| Mixing Options `this` mental model in `<script setup>` | Confusion | Stick to Composition style in that file |

## Tooling

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Old Node for `create vue@latest` | Scaffold failures | Meet Quick Start Node range |
| Vue 2 tutorials on Vue 3 project | Wrong APIs (`new Vue`, filters, …) | Vue 3 guide + migration notes |
| Dev CDN build in prod | Perf / warnings | Production build |

## Architecture

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Vue + Next for the same actor UI without plan | Duplicate stacks | One FE architecture |
| Fat SFCs with no composables | Unreadable | Extract `use*` modules |

## Agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Assuming “latest” is 3.6 | Prerelease risk | Check npm `latest` (3.5.x on pack day) |
| Memorizing Options-only samples | Misses create-vue defaults | Prefer Composition samples for app work |

---
