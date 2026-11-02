---
applyTo: "project-ui/**"
---

# project-ui path instructions (GitHub Copilot)

UI-only prototype. No backend, no real API/auth/DB/AI. Fictional mocks only.

Before editing: read `project-ui/PRODUCT.md`, `project-ui/DESIGN.md`, and `.cursor/rules/project-ui-design.mdc`.

Non-negotiables: bilingual MSA Arabic + English with language switch; full RTL with logical CSS; WCAG 2.2 AA; Phosphor icons only; mocks in `project-ui/src/mocks/` shaped like `docs/API_CONTRACT.md` §3; no fabricated social proof; update `screens.ts`, `flows.ts`, and Screen Index when screens change.

After edits: `cd project-ui && npm test && npm run check:ui && npm run lint`.

Full rules: `AGENTS.md` and `docs/AGENT_START.md`.
