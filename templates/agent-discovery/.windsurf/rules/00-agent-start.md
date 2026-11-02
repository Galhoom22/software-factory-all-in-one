---
trigger: always_on
---

# Always-on rules (Windsurf / Cascade)

Follow root `AGENTS.md` and `docs/AGENT_START.md` completely.

Hard rails:

- Planning repository only — never add application code outside `project-ui/`.
- There is no MVP delivery mode — actor loop only (`docs/DELIVERY.md`, D-40).
- English replies; no secrets; no real personal data; no force-push or history rewrite.
- Smallest correct change; keep affected documents current; run `node scripts/check-delivery.mjs`, `check-agents.mjs`, and `check-scope.mjs` before claiming done.
- Do not weaken Governing Product Rules or `docs/DELIVERY.md` without explicit user approval.
- For `project-ui/`: read PRODUCT.md, DESIGN.md, and `.cursor/rules/project-ui-design.mdc` first (open that file even if you are not Cursor).
