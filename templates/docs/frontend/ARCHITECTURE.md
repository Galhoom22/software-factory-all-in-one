# Frontend Architecture — {{PRODUCT}}

> ⚠️ **Planning only.** A proposal for the implementation repository. Libraries named here are proposals until they are added to [SRS §2](../SRS.md#2-technology-stack) with a verified version.

## 1. Principles

- Framework-native features first; every extra library needs a reason.
- Server-side data access; the browser holds no secrets.
- Prefer a **frontend modular monolith** (one deployable app; feature/module folders, shared UI, one API client) — not micro-frontends and not a BFF that reimplements backend rules. Pair with a backend modular monolith so either side can extract a module later.

## 2. Rendering Strategy

Which pages are static, which are server-rendered, and which are client-only, and why.

## 3. Folder Structure (feature-based)

```text
src/
  app/          routes
  components/   shared UI
  features/     one folder per feature
  lib/          API client, i18n, utilities
```

## 4. Data Layer

How the app calls the API (one typed client generated from or matching [`API_CONTRACT.md`](../API_CONTRACT.md) §3), and how each contract error code is shown to the user.

## 5. Forms

Client validation for usability; server `422` errors shown next to their fields.

## 6. Internationalization and RTL

{{UI_LANGUAGES}}; logical CSS properties; the interface language never translates user content.

## 7. Styling and Design System

Tokens and components carried over from `project-ui/DESIGN.md`.

## 8. Security and Privacy

The SECURITY rules with Owner = FE or Both.

## 9. Testing

Full guide: [`TESTING.md`](TESTING.md). Unit/component for client logic; short E2E list; accessibility on critical journeys.

## 10. From Prototype to Product

What moves over from `project-ui/` (design tokens, components, copy, screen IDs) and what is rebuilt (data fetching, auth).
