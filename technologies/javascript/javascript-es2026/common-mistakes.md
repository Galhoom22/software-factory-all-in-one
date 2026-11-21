# ECMAScript 2026 — common mistakes

## Equality and types

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Using `==` with mixed types | Silent coercion bugs | Prefer `===`; read [sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness) |
| Treating `null` and `undefined` interchangeably without intent | Branch misses | Use `??` / explicit checks |
| `typeof null === "object"` surprises | Wrong null guards | Check `== null` carefully or use nullish operators |

## Async / iteration

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Forgetting `await` | Unhandled Promise / wrong order | `async` function + await; lint `no-floating-promises` where available |
| `for...in` over arrays | Sparse keys / prototype noise | `for...of` or indexed `for` |
| Assuming ES2026 APIs everywhere | Runtime `TypeError` on older engines | Check MDN Baseline vs product floor |

## Objects / prototypes

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Using objects as general maps | Key coercion to strings; prototype hits | `Map` / `Set` |
| Mutating `__proto__` | Hard-to-debug inheritance | `Object.setPrototypeOf` only if required; prefer composition |
| Ignoring closures retaining DOM/nodes | Memory leaks | [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures) + drop references |

## Security

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| `eval` / `innerHTML` with user text | XSS / RCE class bugs | Safe sinks only; sanitize or textContent |
| `escape` for URLs | Wrong encoding | `encodeURIComponent` / `URL` |

## Agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Confusing MDN **language** docs with **Web APIs** | Wrong APIs invented | Language = this pack; DOM/Fetch = Web APIs |
| Shipping Stage-3 proposals from blogs | Non-portable code | Prefer MDN + ECMA-262 Stage 4 / Baseline |
| Memorizing ES year feature lists | Drift | Re-open MDN hub + this pack (D-66) |
| Silent product target bump for one API | Breaks older browsers/Node | ADR + SRS/browserslist change |

---
