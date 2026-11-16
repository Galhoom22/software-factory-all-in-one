# Judgment — external methods mapped onto this repo

See playbook [`07-judgment/`](../../07-judgment/README.md). This file is the product-local list of what was absorbed.

## Active maps

| External method | Adopted here as | Forbidden |
|-----------------|-----------------|-----------|
| Spec-driven loop (e.g. Spec Kit) | Map phases onto BRD/PRD/SRS / actors / DECISIONS; converge before claiming alignment | `specify init`, parallel `specs/`, second constitution |
| Boundary / enterprise design lenses | Ask load-bearing questions on schema, authz, money, PII writes | Vendoring a cloud course; inventing SLOs for show |
| Engineering-agent kits | Explore → clarify essentials → verify → deliberate expensive forks | Replacing `AGENTS.md` with an upstream identity |
| Design skill packs | Distill into `DESIGN.md` + `project-ui/PRE-DELIVERY-UX.md` + `ANTI-SLOP.md` | Generators or packs that override product tokens |
| AI system design guides | Map into `docs/AI.md` + `SECURITY.md` LM + FEATURE_SDLC AI module; playbook `07-judgment/ai-system-design.md` | Vendoring the full guide, interview banks, or rotating model price sheets |

## Converge checklist (end of a docs / UI pass)

- [ ] Governing rules and red lines unchanged unless the owner approved.
- [ ] New screens/states appear in the screen index and actor `screens.md` / `flow.md`.
- [ ] API / data facts live only in `docs/API_CONTRACT.md` (and SRS where required).
- [ ] Borrowed patterns logged in `docs/REFERENCES.md` (taken + rejected).
- [ ] Scope answers still match `docs/SCOPE_REJECTIONS.md`.
- [ ] UI defects fixed + logged in `project-ui/DESIGN-ERRORS.md` when the owner reported them.
- [ ] Engineering aha (if any) appended under `docs/learning-from-mistakes/`.

