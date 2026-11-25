# Judgment — AI system design (production patterns)

Absorb **staff-level AI system design** ideas as planning judgment. Do **not** vendor interview banks, model price tables, framework deep-dives, or voice/multimodal chapters into the planning tree.

Upstream reading (human only, optional): [ombharatiya/ai-system-design-guide](https://github.com/ombharatiya/ai-system-design-guide) (MIT). Patterns change; re-verify before locking a product decision.

## Adopt (map onto existing docs)

| Idea | Lands in |
|------|----------|
| Treat user uploads, retrieved chunks, and tool results as **untrusted data** (indirect prompt injection) | `docs/SECURITY.md` LM rules, `docs/AI.md` data path |
| Defense is **architectural** (least privilege, no tools on quarantined content, egress allowlists) — not keyword filters alone | `docs/SECURITY.md`, feature threat tables |
| Escalate capability only when simpler fails: prompt → few-shot → retrieval → fine-tune last | `docs/AI.md` |
| Pin **model IDs** (and embedding model ids); silent SDK defaults are a reliability bug | `docs/AI.md`, DECISIONS on swap |
| Fixed **fictional golden set** before lock or swap; API compatibility ≠ quality | `docs/AI.md`, FEATURE_SDLC verification |
| If the product has RAG: evaluate **context relevance**, **groundedness**, **answer relevance** | `docs/AI.md`, feature verification matrix |
| Queued AI work: timeouts, retries with backoff, terminal `failed` cleanup, atomic status | FEATURE_SDLC resilience + implementation day proof |
| Cost: route by task; cache stable prefixes when the provider supports it; do not max effort on every call | `docs/AI.md` |
| Document ingest: content sniffing, compressed + expanded size limits, no fabricated professional facts | `docs/SECURITY.md` FU + product rules |
| Anti-patterns: god prompt, retrieve-everything, no observability, floating model defaults, single-provider with no evalled failover | `docs/AI.md` |
| **Practice level** (advisory / assisted / delegated / consequential) matches side effects — not model confidence | `docs/AI.md` · [`enterprise-system-design.md`](enterprise-system-design.md) |
| **Output admission** after generation stop: schema/policy/product-rule check before publish or tool/commit (fail closed when consequential) | `docs/AI.md` · FEATURE verification |
| Untrusted retrieval/tool text never silently gains write authority (promotion gate outside the model) | SECURITY · [`enterprise-system-design.md`](enterprise-system-design.md) |

## Forbid

| Do not | Why |
|--------|-----|
| Copy the guide tree into `software-factory-all-in-one/` or the product repo | Forever-generic playbook; prices and model names rot |
| Install LangChain / multi-agent kits as the product constitution | Framework-native first; second stack fights D-03-style rules |
| Claim Done on an AI path without golden-set evidence | Same as FEATURE_SDLC: observation over hope |
| Give an AI job tools + private data + open egress together | “Lethal trifecta” — remove one leg |
| Fine-tune before exhausting prompt / few-shot / retrieval | Premature complexity |
| Treat “model finished generating” as safe to commit side effects | Termination ≠ admission |
| Raise tool/write power because the model is “confident” | Practice level follows consequence |

## Day workflow hook

Day craft checklist: [`ai-engineering.md`](ai-engineering.md). When a calendar day’s must-finish touches model choice, prompts, retrieval, or AI jobs: re-run the product’s fictional eval set (or assert-based smoke) before closeout marks Done; name practice level + admission rule for any new side effect — see [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) and [`enterprise-system-design.md`](enterprise-system-design.md).
