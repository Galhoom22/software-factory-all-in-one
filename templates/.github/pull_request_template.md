## What and why

<!-- One or two sentences. Link the requirement (requirements.md §, SRS FR/NFR, or PRD F-xx). -->

## Checklist

- [ ] Consistent with `requirements.md`; every affected doc is updated (AGENTS.md).
- [ ] New or changed requirements are specific, testable, one per row, have an Owner, and appear in SRS §10 traceability; lasting decisions are logged in `docs/DECISIONS.md`.
- [ ] No secrets and no real personal data; sample data is clearly fictional.
- [ ] Satisfies `docs/COMPLIANCE.md` and `docs/SECURITY.md` (UI work: its Every Page Checklist, §14).
- [ ] If the change creates a reusable practice, `software-factory-all-in-one/` is updated.

**If `project-ui/` changed:**

- [ ] Follows `project-ui/DESIGN.md`: design tokens only, existing components reused.
- [ ] Works in every interface language, with the language switch visible when there is more than one.
- [ ] Every state is reachable from the screen index; the user flows and the README Screen Index are updated.
- [ ] Keyboard, visible focus, labels, 4.5:1 contrast; no axe violations.
- [ ] No behavior-design tricks (fake proof, urgency, gamification, pre-checked consent).
- [ ] The CI checks pass locally.
- [ ] Screenshots attached (each language, desktop and mobile).
