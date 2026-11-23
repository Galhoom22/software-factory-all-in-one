# React 19 — stop using these

Sources: [React 19 Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide), [Creating a React app](https://react.dev/learn/creating-a-react-app), [Versions](https://react.dev/versions).

**Rule for agents:** do not introduce the left column in new React 19 application code.

## Versions / tooling

| Stop using | Use instead |
|------------|-------------|
| **Create React App** for new apps | Recommended framework or Vite/Parcel/Rsbuild |
| React **16/17** patterns as defaults | React **19** + current docs |
| `react` / `react-dom` major mismatch | Align majors (both 19.x) |

## Removed / legacy APIs (React 19)

| Stop using | Use instead |
|------------|-------------|
| `ReactDOM.render` / `ReactDOM.hydrate` | `createRoot` / `hydrateRoot` |
| `unmountComponentAtNode` | `root.unmount()` |
| `ReactDOM.findDOMNode` | Refs |
| Function-component `propTypes` / `defaultProps` | TypeScript + ES6 defaults |
| Legacy Context (`contextTypes` / `getChildContext`) | `createContext` + `useContext` |
| String refs | Callback / object refs (`useRef`) |
| `React.createFactory` | JSX |
| Module pattern factories | Function components |
| `react-dom/test-utils` as default | `act` from `react`; modern test libs |
| Relying on `element.ref` special case | `ref` as a normal prop |

## Patterns

| Stop using | Use instead |
|------------|-------------|
| Class components as default style | Function components + Hooks |
| Effects to sync props → state | Derive during render / adjust data flow |
| `useMemo`/`useCallback` everywhere “for perf” | Measure first; React Compiler guidance when product uses it |
| Rewriting a Next.js app into bare Vite silently | Keep product architecture or ADR |

---
