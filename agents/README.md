# Agents — reusable harness references

**What this is:** a growing library of **per-AI-agent / IDE / CLI harness** packs. Goal: when a human or coding agent works through Cursor, Codex, Claude Code, Gemini, ChatGPT, Antigravity, Copilot, Windsurf, Trae, Tongyi Lingma, and peers, the result follows **this factory's** rails at maximum quality.

**Single rulebook (hard):** product `AGENTS.md` (+ `docs/AGENT_START.md`) is the only full constitution. Packs teach **how to drive that harness** — discovery pointers, session habits, anti-patterns. They never replace `AGENTS.md`.

**Select before craft:** which harness the team uses is an owner/studio choice. Packs do not mean “always use Cursor” or “always use Trae.”

## Layout

```text
software-factory-all-in-one/agents/
  README.md              ← this file: shared rules for every harness + the pack list
  _pack-template/        ← copy when adding a harness
  <harness>/README.md    ← one file per harness: pin, official refs, drive-craft, use / stop / mistakes
```

A pack grows into more files only when its single README passes about 150 lines ([`ARCHITECTURE.md`](../ARCHITECTURE.md) § 5).

## How agents must use a pack

1. Open product `AGENT_START` + `AGENTS.md` first.
2. Open only the matching `agents/<slug>/README.md` — the harness you are driving.
3. Keep discovery files thin (`templates/agent-discovery/`).
4. If the owner names a harness or pastes official docs: create/deepen the pack the **same session** in the factory repository (from a product, as an upstream pull request — the vendored copy is read-only), update [`coverage/08-ai-agents.md`](../coverage/08-ai-agents.md) and run the structure gate (`node scripts/check-structure.mjs` in the factory, `node software-factory-all-in-one/scripts/check-structure.mjs` in a product) (SF-14 / SF-11).

## Driving any harness (shared habits)

1. **Load the single rulebook first:** `docs/AGENT_START.md` (hard rails), then `AGENTS.md` (full rulebook), then the harness pack for tips. Never invent a parallel constitution in chat memory.
2. **One clear goal per session** — a planning stage, or one implementation day's must-finish list.
3. **Keep large outputs as paths and summaries** ([`context-window.md`](../07-judgment/context-window.md)).
4. **End with evidence:** checks run, coverage/% touched, and an upstream pull request when you improved the factory.

## Shared quality bar (every pack)

| Rule | Shape for every harness |
|------|-------------------------|
| Single SoT | `AGENTS.md` wins; a pack is craft only |
| Honest coverage | Atlas % matches discovery + pack depth |
| No fork | Do not copy product rules into a second long file |
| Freshness | Official refs Checked dates stay current when touched |
| Candor | Refuse harness tips that weaken SECURITY / COMPLIANCE / delivery |

## Packs present

| Pack | Pinned form | Status |
|------|-------------|--------|
| [`cursor/`](cursor/README.md) | Cursor IDE | ✅ |
| [`openai-codex/`](openai-codex/README.md) | Codex CLI | ✅ |
| [`claude-code/`](claude-code/README.md) | Claude Code CLI | ✅ |
| [`chatgpt/`](chatgpt/README.md) | ChatGPT web | ✅ |
| [`gemini/`](gemini/README.md) | Gemini CLI | ✅ |
| [`github-copilot/`](github-copilot/README.md) | Copilot in the IDE | ✅ |
| [`windsurf/`](windsurf/README.md) | Windsurf Cascade | ✅ |
| [`google-antigravity/`](google-antigravity/README.md) | Antigravity (preview) | ⚠️ |
| [`trae/`](trae/README.md) | Trae IDE | ⚠️ |
| [`tongyi-lingma/`](tongyi-lingma/README.md) | Lingma plugin | ⚠️ |
| [`codebuddy/`](codebuddy/README.md) | CodeBuddy IDE | ⚠️ |
| [`deepseek/`](deepseek/README.md) | DeepSeek API | ⚠️ |

## Related

- Atlas + %: [`../coverage/08-ai-agents.md`](../coverage/08-ai-agents.md)
- Freshness: [`../07-judgment/playbook-freshness.md`](../07-judgment/playbook-freshness.md)
- Agent discovery templates: [`../templates/agent-discovery/`](../templates/agent-discovery/README.md)
