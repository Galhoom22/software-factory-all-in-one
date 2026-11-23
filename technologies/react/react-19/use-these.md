# React 19 — prefer these

Sources: [Learn](https://react.dev/learn), [Hooks](https://react.dev/reference/react/hooks), [React 19](https://react.dev/blog/2024/12/05/react-19), [createRoot](https://react.dev/reference/react-dom/client/createRoot), [Creating a React app](https://react.dev/learn/creating-a-react-app).

## App setup

| Prefer | Notes |
|--------|-------|
| `react@19` / **19.3.x** stable | Pin from npm `latest`; re-check before bump |
| Matching `react-dom@19` | Keep major aligned |
| Framework (Next.js, etc.) when product needs routing/SSR/RSC | Official recommendation over CRA |
| Vite / Parcel / Rsbuild for custom SPA | Official alternative to frameworks |
| `createRoot` / `hydrateRoot` | `react-dom/client` |

## Components & Hooks

| Prefer | Notes |
|--------|-------|
| Function components | Default UI unit |
| `useState` / `useReducer` | Local state |
| `useContext` | Distant shared values |
| `useRef` | DOM nodes / non-reactive boxes |
| `useEffect` (sparingly) | External systems only |
| `useMemo` / `useCallback` | When measuring shows need — not by default |
| `useTransition` / `useDeferredValue` | Non-blocking UI updates |
| `useId` | Stable a11y IDs |
| `useOptimistic` / `useActionState` | Optimistic UI / form Actions (React 19) |
| `use` | Read promises/context in render when appropriate |
| Custom Hooks (`useX`) | Shared logic |
| Lists with stable `key` from data | Identity across updates |

## JSX / markup

| Prefer | Notes |
|--------|-------|
| `className` / camelCase events (`onClick`) | JSX rules |
| Fragments `<>…</>` | Multi-root returns |
| Props + ES6 defaults | Instead of function `defaultProps` |
| TypeScript types for props | Instead of `propTypes` |

## Server (when host supports RSC)

| Prefer | Notes |
|--------|-------|
| Async Server Components for server-only data | Next App Router / RSC hosts |
| `"use client"` only for interactive islands | Keep server work on the server |

---
