# AI Sources — {{PRODUCT}}

> ⚠️ **Planning only.** *Optional:* delete this file (and its README and CI entries) if the product uses no AI.

| Field | Value |
|-------|-------|
| Document | AI Sources |
| Status | Draft |
| Related | [`COMPLIANCE.md`](COMPLIANCE.md), [`SECURITY.md`](SECURITY.md), [`DECISIONS.md`](DECISIONS.md) |

---

## 1. Rules Every Source Must Pass

A source may handle **real user data** only if it:

- Does not train on the data it receives.
- Documents its retention period and processing region.
- Signs a data processing agreement.

Sources that fail these rules are for development with fictional data only.

## 2. AI Tasks in the Product

| Task | Input | Output |
|------|-------|--------|
| {{TASK}} | {{INPUT}} | {{OUTPUT}} |

## 3. Sources at a Glance

| Source | Free tier | Trains on data | Real data allowed |
|--------|-----------|----------------|-------------------|
| {{SOURCE}} | {{LIMITS}} | {{YES/NO}} | {{YES/NO}} |

## 4. Starting Map per Task

| Task | Development | Production candidate |
|------|-------------|----------------------|
| {{TASK}} | {{SOURCE}} | {{SOURCE}} |

## 5. Evaluation Before Choosing

- Test each candidate on the same **fictional** golden set; record quality, speed, and cost.
- The final production lock (or swap) becomes a `DECISIONS.md` entry **after** the golden set passes.
- API compatibility alone is not quality proof.
- If the product uses retrieval (RAG): score **context relevance**, **groundedness** (faithfulness), and **answer relevance** on that set — not only “the model answered.”

## 6. Keeping This File Current

- Re-verify models, limits, and terms on each provider's official page before relying on them.
- Pin concrete model IDs in config; do not rely on SDK “default model” that can change on a dependency bump.

## 7. Provider and model independence

- Prefer the framework AI SDK (or one thin OpenAI-compatible adapter) over a bespoke multi-provider client layer.
- Configure chat and embeddings separately; allow per-task model IDs.
- Vectors from different embedding models are not interchangeable: stamp the model id on each row and re-embed on change.
- A fixed fictional evaluation set must pass before a production model lock or swap.

## 8. Data path and trust boundaries

- Call external AI only from the **backend**, preferably from **queued jobs**, on text that already meets product privacy rules (strip or redact personal data before any provider that must not see it).
- Treat **user uploads**, **retrieved chunks**, web pages, and tool results as **untrusted data** — never as instructions that can raise privilege or call tools.
- Prefer a clear separation: privileged planner (may call tools under policy) vs quarantined analysis of untrusted text (no tools, no egress).
- Validate and sanitize **outputs** before they hit the browser, shell, SQL, or file system (`SECURITY.md` LM / IV).

## 9. Capability ladder (avoid premature fine-tuning)

Try in order until quality on the golden set is enough:

1. Clear task prompts + structured output  
2. Few-shot / in-context examples from the product domain  
3. Retrieval over owned knowledge (with access control on every fetch)  
4. Fine-tuning or heavier adaptation — only with evidence that 1–3 failed  

## 10. Reliability for AI jobs

- Timeouts, bounded retries with backoff, and a terminal failure path that marks the user-visible job failed and cleans temporary uploads.
- Claim or lock work so queue redelivery cannot wipe a completed result.
- Cross-vendor failover only if the **same golden set** still passes on the fallback (a silent quality change is an outage).
- Observe refusals and empty outputs as failures when the product contract expects content — not only HTTP 5xx.

## 11. Cost and routing

- Route cheap models to cheap tasks; reserve stronger models for high-stakes steps.
- Use provider prompt/prefix caching only for **stable, non-secret** prefixes.
- Do not “max effort” or max tokens on every request by default.

## 12. Anti-patterns (reject in design review)

| Anti-pattern | Prefer |
|--------------|--------|
| One giant “god prompt” for every feature | Small task-specific prompts |
| Retrieve top-N large and stuff the context | Smaller top-K + relevance threshold (and rerank if needed) |
| Floating model defaults | Pinned model IDs + eval on change |
| Tools + private data + open network together | Remove egress or tools or private data from that agent |
| Fabricating missing professional facts “to help” | Leave unknown / require user confirm (product rules win) |

## 13. Judgment source

Staff-level AI design patterns are absorbed as judgment only — see playbook [`07-judgment/ai-system-design.md`](../software-factory-all-in-one/07-judgment/ai-system-design.md). Day workflow for AI paths (det/prob seam, golden eval, admission, practice level): [`07-judgment/ai-engineering.md`](../software-factory-all-in-one/07-judgment/ai-engineering.md). Do not vendor interview guides or rotating price sheets into this repo.
