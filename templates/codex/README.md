# Codex setup (CLI-first)

<!-- Copy to `.codex/README.md`. Plain path names only (template lives under software-factory-all-in-one/templates/). -->

OpenAI Codex (**CLI**, IDE extension, and Desktop app) share this folder. **Primary target: Codex CLI.**

| Path | Purpose |
| --- | --- |
| `CLI.md` | **Start here for CLI** — trust, `/hooks`, verify |
| `config.toml` | Project `developer_instructions` + hooks feature |
| `hooks.json` | SessionStart rails + Stop checks |
| `scripts/` | Hook scripts (Node, no extra deps) |
| `agents/` | Optional Codex agent definitions (`.toml`; Cursor mirrors under `.cursor/agents/`) |

Skills for Codex live under `.agents/skills/` when used (keep in sync with `.cursor/skills/`).

Root rulebook: `AGENTS.md`. Weak-model map: `docs/AGENT_START.md`.

## Quick CLI check

```bash
node scripts/verify-codex-cli.mjs
```

## What Codex must never do here

- Add application code outside `project-ui/`
- Cite MVP / “good enough for now” to leave the current actor incomplete
- Force-push, rewrite history, or commit secrets / real personal data
- Skip document cascade or CI-equivalent checks after a change

Full delivery method: `docs/DELIVERY.md`.

