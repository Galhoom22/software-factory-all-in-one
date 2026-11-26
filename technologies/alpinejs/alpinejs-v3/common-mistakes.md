# Alpine.js 3.x — common mistakes

## Install / boot

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Forgetting `defer` | Alpine runs before DOM; flaky init | Always `defer` |
| `Alpine.start()` in two bundles | Double-binding, weird duplicates | One start per page |
| Plugin registered after `start()` | Plugin never wires | Register then start |
| CDN `@3.x.x` forever in prod with no pin policy | Surprise breakage on minor | Pin exact version; bump deliberately |

## Directives

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Using `@click` / `x-show` outside any `x-data` | Silent no-op | Wrap with `x-data` |
| `x-for` not on `<template>` | Broken lists | Official requirement |
| Missing `x-cloak` CSS for `x-show="false"` defaults | Flash of hidden content | `[x-cloak]{display:none!important}` |
| Using `this.property` in templates like inside the object | Confusion | Inside `x-data` object use `this.`; in attributes usually bare `property` |
| Filtering with methods that mutate then expecting reactivity magic | Stale UI | Prefer getters / replace arrays immutably |

## Architecture

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Adding Alpine to Next.js “because it’s lighter” without ADR | Two FE paradigms; a11y/test drift | Product stack wins |
| Putting secrets / authz decisions only in Alpine state | Trivial bypass | Server/API trust boundary |
| `x-html` of user content | XSS | Never; escape / sanitize / prefer `x-text` |

## Agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Memorizing directive lists | Miss new plugins / CSP path | Open Start Here + this pack |
| Treating Start Here demos as production architecture | Unmaintainable attribute JS | Extract `Alpine.data` when it grows |
