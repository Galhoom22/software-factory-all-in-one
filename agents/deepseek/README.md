# DeepSeek — agent harness pack

**Pinned slice:** **DeepSeek API / Coder models (host-agnostic)** (checked **2026-11-23**).  
**Official home:** [platform.deepseek.com](https://platform.deepseek.com/) · [deepseek.com](https://www.deepseek.com/)

**Region note:** API global-ish; host IDE may be Cursor/Claude/Trae/etc. — this pack is the **model/API** layer.

Shared rules for every harness — the single rulebook, session habits and quality bar — are in [`../README.md`](../README.md).

## When to open this pack

- Product or host routes coding tasks through DeepSeek models.

## Official references

Re-verify on the vendor site when bumping; prefer these over blogs.

| Topic | Official URL | Checked |
|-------|--------------|---------|
| DeepSeek platform | https://platform.deepseek.com/ | 2026-11-23 |
| DeepSeek site | https://www.deepseek.com/ | 2026-11-23 |

## How to drive it

- **Discovery pointer:** Not an IDE — configure the host harness (Cursor/CLI) to use DeepSeek; still load AGENTS.md in that host.
- **Depth:** **skeleton**. If thin: deepen from official docs before claiming high coverage %.

## Use these

- Treat DeepSeek as the model behind a host harness — open the host pack too.
- Re-verify pricing/rate limits on official pages before budgeting agent loops.
- Deepen when owner pastes DeepSeek API docs.

## Stop using

- Do not confuse “DeepSeek model” with a complete IDE discovery pack.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Skipping host AGENTS.md | Load AGENTS in Cursor/CLI/Trae that calls DeepSeek |

## Product vs pack

- **Single rulebook:** product `AGENTS.md` (+ `docs/AGENT_START.md`) remains the only full constitution. This pack teaches **how to drive DeepSeek** so it obeys that rulebook.
- Discovery pointer: Not an IDE — configure the host harness (Cursor/CLI) to use DeepSeek; still load AGENTS.md in that host.
- Do not fork a second rulebook inside this pack.
