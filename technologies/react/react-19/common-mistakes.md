# React 19 — common mistakes

## Hooks & Effects

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Calling Hooks inside conditions/loops | Broken Rules of Hooks | Top level only; extract components |
| `useEffect` to transform data for render | Extra renders / bugs | Compute during render |
| Missing Effect cleanup for subscriptions | Leaks / double connect | Return cleanup function |
| Stale closures in Effects | Wrong values | Correct deps or `useEffectEvent` when appropriate |

## Lists & keys

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| `key={index}` for reordering lists | Wrong state reuse | Stable IDs from data |
| Missing `key` | Warnings / broken updates | Always key list children |

## Mounting & legacy

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Copy-paste `ReactDOM.render` from old tutorials | Breaks on React 19 | `createRoot` |
| CRA scaffold for a new product | Deprecated path | Framework / Vite |
| React 18-only Inertia React adapter | Unsupported on Inertia v3 | React **19+** |

## Architecture

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Secrets in client components | Exposure | Server-only env / API |
| Fat page components with no hooks extraction | Unreadable | Custom hooks + smaller components |
| Assuming “React latest” without checking npm | Wrong pin | Re-check `latest` + Context7 this session |

## Agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Memorizing class / createClass samples | Obsolete APIs | react.dev Learn + Hooks |
| Shipping `forwardRef` by habit on React 19 | Noise | Pass `ref` as a prop unless compat needs forwardRef |
| Ignoring product Next pin | Architecture drift | React craft inside the chosen host |

---
