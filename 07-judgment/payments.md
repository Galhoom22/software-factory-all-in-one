# Judgment — payments, billing, and provider agents

Absorb **payment-provider agent guidance** (MCP servers, agent skills, sandbox tooling, modern Checkout / PaymentIntent / SetupIntent patterns, webhook-first entitlement) as judgment mapped onto this factory. Do **not** dump a full payment-product catalog, Connect/Issuing/Treasury trees, or agentic-commerce directories into planning.

Upstream reading (human only, optional): the chosen provider’s **Agents / AI** docs, security guide, webhooks, testing, and go-live checklist (example shape: Stripe `docs.stripe.com/agents`, security guide, webhooks, sandboxes). Prefer the **behaviors** below; keep product names and live account URLs out of this file.

## Adopt (map onto existing docs)

| Idea | Lands in |
|------|----------|
| Hosted checkout or provider UI components so PAN never touches the product server (low PCI surface) | `SECURITY.md` SR-07 / WH · `COMPLIANCE.md` RL-03 · `requirements.md` §4 |
| Entitlement and plan changes only after **verified** provider events (webhooks), never from a browser “success” redirect alone | `SECURITY.md` WH · `API_CONTRACT.md` billing errors · BE TESTING |
| Verify webhook signatures; fail closed; process each event **once** (idempotency by event id) | `SECURITY.md` WH · BE TESTING · CodeRabbit BE guidelines |
| Prefer current Payment Intent / Checkout Session / Setup Intent style APIs; save methods with Setup Intent — not deprecated Sources / Charges / Tokens for new work | Implementation FEATURE design · agent prompts · CodeRabbit |
| Separate sandbox/test credentials for **local** vs **CI** so automated runs do not poison shared test data | `09-CI-CD.md` · BE TESTING · DEPLOYMENT |
| Pin SDK versions from the registry (or lockfile), not from model memory; re-verify before go-live | SRS §2 · REFERENCES · supply-chain SC |
| When agents implement payments: use the provider’s **MCP + agent skills** (or `… agent setup`) for live docs and sandbox keys — still obey product SECURITY / COMPLIANCE | Day loop · Context7 / official `.md` docs URLs · this note |
| Go-live: rotate keys, register **live** webhooks, handle duplicate/delayed/out-of-order events, defensive API errors, no secrets in logs | BE DEPLOYMENT · Pre-launch SECURITY / COMPLIANCE checklists |
| Money / billing features default to **Comprehensive** (or Standard with explicit money mitigations) — never Lightweight for first-time checkout or webhook entitlement | [`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md) |

## Forbid

| Do not | Why |
|--------|-----|
| Store or log raw card numbers, CVCs, or full PANs | PCI / RL-03 / SR-07 |
| Trust client-reported “paid” flags or thank-you query params for plan upgrades | Fraud and chargeback-shaped bugs |
| Recommend Sources API, Charges-first flows, or Tokens for **new** integrations when Intent/Checkout/Setup paths exist | Provider LLM agent best practices; obsolete rails |
| Put secret API keys in the frontend, prototype, or chat | Secrets red lines |
| Use the same sandbox/test project for local tinkering and CI | Flaky tests and polluted fixtures |
| Copy the entire provider docs tree (Connect, Issuing, Terminal, Tax, …) into the factory | Forever-generic; product-specific only when the product needs that surface |
| Treat “agentic commerce / Directory / sell-through-agents” as required product scope | Optional market later; not a planning default |
| Weaken webhook verification “for the prototype” in implementation | Prototype stays mock-only; real BE must verify |

## Professional bar (checklist)

Before claiming a payments / billing slice Done:

1. Card data never on product servers (hosted page or provider Elements)?
2. Plan / credits / entitlement change only from verified webhook (or equivalent server confirm) with idempotency proof?
3. Signature-failure and duplicate-event tests exist and fail closed?
4. Sandbox/test keys isolated from live; CI uses its own sandbox or full fakes?
5. Public UI shows full price, period, renewal, and a cancel path as easy as start (`COMPLIANCE` CP / RL-05)?
6. Agent used official provider docs (MCP/skills or `.md` URLs) — not memorized API shapes?

## Day workflow hook

Same as [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md): money paths get an explicit adversarial pass before Done (replayed webhook, forged signature, success-URL without payment, double-click checkout). CI stays on fakes or an isolated sandbox — never live keys.
