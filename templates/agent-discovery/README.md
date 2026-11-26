# Agent discovery templates

Copy these files to the **new planning repository root** (and `docs/AGENT_START.md` from `templates/docs/AGENT_START.md`).

| Template path | Destination |
| --- | --- |
| `../docs/AGENT_START.md` | `docs/AGENT_START.md` |
| `CLAUDE.md` | `CLAUDE.md` |
| `GEMINI.md` | `GEMINI.md` |
| `llms.txt` | `llms.txt` |
| `.github/copilot-instructions.md` | `.github/copilot-instructions.md` |
| `.github/instructions/project-ui.instructions.md` | `.github/instructions/project-ui.instructions.md` |
| `.gemini/settings.json` | `.gemini/settings.json` |
| `.windsurf/rules/00-agent-start.md` | `.windsurf/rules/00-agent-start.md` |

Also copy `scripts/check-agents.mjs` and wire it in CI next to `check-delivery.mjs`.

**Rule:** `AGENTS.md` is the only full rulebook. These files are thin pointers. When product rules change, edit `AGENTS.md` (and `docs/AGENT_START.md` if the hard rails summary changed) — do not fork per-harness copies.
