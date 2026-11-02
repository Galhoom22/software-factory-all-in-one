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

- Test each candidate on the same fictional dataset and record quality, speed, and cost; the final choice becomes a DECISIONS.md entry.

## 6. Keeping This File Current

- Re-verify models, limits, and terms on each provider's official page before relying on them.

## 7. Provider and model independence

- Prefer the framework AI SDK (or one thin OpenAI-compatible adapter) over a bespoke multi-provider client layer.
- Configure chat and embeddings separately; allow per-task model IDs.
- Vectors from different embedding models are not interchangeable: stamp the model id on each row and re-embed on change.
- A fixed fictional evaluation set must pass before a production model lock or swap; API compatibility is not quality proof.
