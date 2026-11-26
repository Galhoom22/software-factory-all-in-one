# Delivery Method — Actor Loop (Planning Repositories)

**Mandatory** for every product started from this factory. Product-specific copy lives in that repo’s `docs/DELIVERY.md`; this file is the reusable method.

## There is no MVP delivery mode

Do not build “an MVP first, then the real product.” Do not omit, stub, or weaken screens, copy, pricing, or rules for the **actor in focus** by citing MVP, phase 1, or “good enough for now.”

Deferred features and other actors wait their turn. That is **sequencing**, not permission to half-finish the current actor.

## The only loop

1. **Plan** in the planning repository: pick one actor.
2. **Discuss** business and product until rules are written.
3. **Design production-ready:** every screen, state, email, and rule for that actor at the **same bar as production** (millimetre-accurate).
4. **Implement** that actor in the backend and frontend repositories until done and correct.
5. **Return** to the planning repository for the next actor. Repeat.

## Production bar

If a prototype screen would not ship as drawn, fix it in planning before implementation. No second, weaker UI for “later.”

## Wire it so agents cannot forget

In every new planning repository:

| Artifact | Requirement |
|----------|-------------|
| `docs/DELIVERY.md` | Product copy of this method |
| `AGENTS.md` | Points at `docs/DELIVERY.md`; states there is no MVP delivery mode; documents Codex / Cursor / Claude |
| `.cursor/rules/delivery.mdc` | `alwaysApply: true` |
| `.codex/` | Codex `config.toml` developer_instructions + SessionStart/Stop hooks (template: `templates/codex/`) so OpenAI Codex does not miss Cursor-only rules |
| `docs/AGENT_START.md` + harness pointers | Short onboarding for any AI; thin `CLAUDE.md` / `GEMINI.md` / Copilot / Windsurf / `llms.txt` files that all point at `AGENTS.md` (never fork a second rulebook) |
| Decision log | A lasting decision that records the actor loop |
| CI | Run `scripts/check-delivery.mjs` and `scripts/check-agents.mjs` (or the template equivalents) so removing the method or discovery wiring fails the build |

## Related

- [`01-STEPS.md`](01-STEPS.md) — when to design screens vs implement
- [`03-PROTOTYPE.md`](03-PROTOTYPE.md) — prototype fidelity
- [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md) — implementation repos after planning is ready for an actor
- [`06-LESSONS.md`](06-LESSONS.md) — do not reopen incomplete-actor mistakes
