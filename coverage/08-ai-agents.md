# Coverage — AI agent / IDE harnesses

**What this is:** honest **% readiness** of the playbook to drive **popular coding agents and AI IDEs** (US + China + cloud chat) so each harness produces playbook-grade results.

**What this is not:** a second constitution. Product `AGENTS.md` remains the only full rulebook. Packs under [`playbook/agents/`](../agents/README.md) teach **how to drive** each harness.

**Score meaning:** discovery pointer (if any) + harness pack depth + prompts/lessons wiring + proven CI discovery checks. Same rubric as [`README.md`](README.md).

Last audit: **2026-11-23**.

---

## How agents must use this file

1. Owner asks “what % are we on Cursor / Codex / Trae / Antigravity / ChatGPT?” → open **this file**, report mark + %, pack path, deepen vs add.
2. Owner names a new harness or pastes official docs → create/deepen `agents/<slug>/` same session; bump this table; freshness + D-52.
3. **Candor:** do not claim high % from AGENTS.md alone when the harness has no pointer/pack.

---

## Scorecard by harness

### Global / US-led

| Harness | Mark | % | Pack / discovery | Biggest gap |
|---------|------|---|------------------|-------------|
| **Cursor** (IDE + Agent + Cloud Agents) | ✅ | **94** | `agents/cursor/` + `.cursor/rules` | Cloud Agents day-loop lessons |
| **OpenAI Codex** (CLI / IDE / Desktop) | ✅ | **93** | `agents/openai-codex/` + `.codex/` | Desktop-specific edge lessons |
| **Claude Code** | ✅ | **90** | `agents/claude-code/` + `CLAUDE.md` | Skills absorb boundaries (judgment exists) |
| **ChatGPT** (web / app teaching + design) | ✅ | **78** | `agents/chatgpt/` (no native discovery file) | Project memory / custom GPT template |
| **Gemini** (CLI / Code Assist) | ✅ | **86** | `agents/gemini/` + `GEMINI.md` | Code Assist vs CLI split depth |
| **GitHub Copilot** | ✅ | **85** | `agents/github-copilot/` + copilot-instructions | Coding-agent PR DoD examples |
| **Windsurf Cascade** | ✅ | **84** | `agents/windsurf/` + `.windsurf/rules` | Cascade multi-file edge lessons |
| **Google Antigravity** | ⚠️ | **42** | `agents/google-antigravity/` (skeleton) | Dedicated discovery pointer; preview churn |
| **VS Code + generic agent hosts** | ⚠️ | **35** | Copilot pack partial | Host-agnostic “any VS Code agent” pack |

### China-led / China-strong

| Harness | Mark | % | Pack / discovery | Biggest gap |
|---------|------|---|------------------|-------------|
| **Trae** (ByteDance IDE) | ⚠️ | **38** | `agents/trae/` skeleton | Official docs deepen + discovery pointer |
| **Tongyi Lingma** (Alibaba plugin) | ⚠️ | **36** | `agents/tongyi-lingma/` skeleton | Project-instructions recipe |
| **CodeBuddy** (Tencent) | ⚠️ | **34** | `agents/codebuddy/` skeleton | Domestic vs international edition craft |
| **DeepSeek** (model/API layer) | ⚠️ | **40** | `agents/deepseek/` skeleton | Host-wiring recipes (Cursor/CLI/Trae) |
| **Qoder** (Alibaba agentic IDE) | ❌ | **8** | Atlas only | Pack when owner pastes official docs |
| **Baidu Comate / 文心快码** | ❌ | **5** | Atlas only | Pack on demand |
| **iFlow / other CN CLI agents** | ❌ | **5** | Atlas only | Pack on demand |

### Cross-cutting (all harnesses)

| Capability | Mark | % | Home |
|------------|------|---|------|
| Single rulebook | ✅ | **95** | `AGENTS.template.md` |
| Multi-harness discovery pack | ✅ | **93** | `templates/agent-discovery/` |
| Always-Current freshness | ✅ | **95** | `07-judgment/playbook-freshness` + CI |
| First-session prompts | ✅ | **90** | `05-PROMPTS.md` |
| Harness lesson (no shared rule files) | ✅ | **92** | `06-LESSONS.md` |

### Rollup

| Metric | Value |
|--------|-------|
| Harnesses with packs | **12** |
| **Weighted harness readiness** (scorecard rows, equal weight) | **~58%** |
| **Studio-default strength** (Cursor + Codex + Claude Code) | **~92%** |
| **Honest message** | Discovery + rulebook are strong; **China + Antigravity** packs are intentionally skeleton until official docs deepen. Do not confuse ~92% studio-default with ~58% industry breadth. |

---

## Priority upgrade backlog

| Priority | Upgrade | Raises |
|----------|---------|--------|
| 1 | Antigravity discovery pointer + deepen from official docs | Antigravity % |
| 2 | Trae / Lingma deepen from official Chinese + intl docs | CN harness % |
| 3 | ChatGPT custom-GPT / project template for AGENT_START | ChatGPT % |
| 4 | Qoder pack on owner URL paste | Qoder row |
| 5 | Host-wiring recipes for DeepSeek behind Cursor/CLI | DeepSeek % |

---

## Related

| Need | Home |
|------|------|
| Pack craft | [`../agents/README.md`](../agents/README.md) |
| Discovery templates | [`../templates/agent-discovery/`](../templates/agent-discovery/) |
| Agents CI inventory | [`03-agents-ci-tooling.md`](03-agents-ci-tooling.md) |
| Software industry surfaces | [`07-software-surfaces.md`](07-software-surfaces.md) |
| Freshness | [`../07-judgment/playbook-freshness.md`](../07-judgment/playbook-freshness.md) |
