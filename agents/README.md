# Agents — reusable harness references

**What this is:** a growing library of **per-AI-agent / IDE / CLI harness** packs. Goal: when a human or coding agent works through Cursor, Codex, Claude Code, Gemini, ChatGPT, Antigravity, Copilot, Windsurf, Trae, Tongyi Lingma, and peers, the result follows **this playbook’s** rails at maximum quality.

**Single rulebook (hard):** product `AGENTS.md` (+ `docs/AGENT_START.md`) is the only full constitution. Packs teach **how to drive that harness** — discovery pointers, session habits, anti-patterns. They never replace `AGENTS.md`.

**Select before craft:** which harness the team uses is an owner/studio choice. Packs do not mean “always use Cursor” or “always use Trae.”

## Layout

```text
software-factory-all-in-one/agents/
  README.md
  _pack-template/
  cursor/  openai-codex/  claude-code/  chatgpt/  gemini/
  github-copilot/  windsurf/  google-antigravity/
  trae/  tongyi-lingma/  codebuddy/  deepseek/
```

## How agents must use a pack

1. Open product `AGENT_START` + `AGENTS.md` first.
2. Open the matching `agents/<slug>/` pack (best-practices + slice).
3. Keep discovery files thin (`templates/agent-discovery/`).
4. If the owner names a harness or pastes official docs: create/deepen the pack **same session**, update [`coverage/08-ai-agents.md`](../coverage/08-ai-agents.md), run freshness check, sync mirror (D-110 / D-108).

## Packs present

| Pack | Current slice | Status |
|------|---------------|--------|
| [`cursor/`](cursor/README.md) | [`cursor-ide/`](cursor/cursor-ide/README.md) | ✅ |
| [`openai-codex/`](openai-codex/README.md) | [`codex-cli/`](openai-codex/codex-cli/README.md) | ✅ |
| [`claude-code/`](claude-code/README.md) | [`claude-code-cli/`](claude-code/claude-code-cli/README.md) | ✅ |
| [`chatgpt/`](chatgpt/README.md) | [`chatgpt-web/`](chatgpt/chatgpt-web/README.md) | ✅ |
| [`gemini/`](gemini/README.md) | [`gemini-cli/`](gemini/gemini-cli/README.md) | ✅ |
| [`github-copilot/`](github-copilot/README.md) | [`copilot-ide/`](github-copilot/copilot-ide/README.md) | ✅ |
| [`windsurf/`](windsurf/README.md) | [`windsurf-cascade/`](windsurf/windsurf-cascade/README.md) | ✅ |
| [`google-antigravity/`](google-antigravity/README.md) | [`antigravity-preview/`](google-antigravity/antigravity-preview/README.md) | ⚠️ |
| [`trae/`](trae/README.md) | [`trae-ide/`](trae/trae-ide/README.md) | ⚠️ |
| [`tongyi-lingma/`](tongyi-lingma/README.md) | [`lingma-plugin/`](tongyi-lingma/lingma-plugin/README.md) | ⚠️ |
| [`codebuddy/`](codebuddy/README.md) | [`codebuddy-ide/`](codebuddy/codebuddy-ide/README.md) | ⚠️ |
| [`deepseek/`](deepseek/README.md) | [`deepseek-api/`](deepseek/deepseek-api/README.md) | ⚠️ |

Atlas + %: [`../coverage/08-ai-agents.md`](../coverage/08-ai-agents.md)
