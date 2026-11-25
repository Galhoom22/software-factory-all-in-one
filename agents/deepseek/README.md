# DeepSeek — agent harness pack

**Pinned slice:** **DeepSeek API / Coder models (host-agnostic)** (checked **2026-11-23**).  
**Official home:** [platform.deepseek.com](https://platform.deepseek.com/) · [deepseek.com](https://www.deepseek.com/)

**Region note:** API global-ish; host IDE may be Cursor/Claude/Trae/etc. — this pack is the **model/API** layer.

## When to open this pack

- Product or host routes coding tasks through DeepSeek models.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Dated official URLs |
| [`best-practices.md`](best-practices.md) | How to get the best result with this harness on this playbook |
| [`quality.md`](quality.md) | Quality bar for harness-specific guidance |
| [`deepseek-api/`](deepseek-api/README.md) | Current product-form slice: use / stop / mistakes |

## Product vs pack

- **Single rulebook:** product `AGENTS.md` (+ `docs/AGENT_START.md`) remains the only full constitution. This pack teaches **how to drive DeepSeek** so it obeys that rulebook.
- Discovery pointer: Not an IDE — configure the host harness (Cursor/CLI) to use DeepSeek; still load AGENTS.md in that host.
- Do not fork a second rulebook inside this pack.

## Related

- Atlas: [`../../coverage/08-ai-agents.md`](../../coverage/08-ai-agents.md)
- Freshness: [`../../07-judgment/playbook-freshness.md`](../../07-judgment/playbook-freshness.md)
- Agent discovery templates: [`../../templates/agent-discovery/`](../../templates/agent-discovery/)
