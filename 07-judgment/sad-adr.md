# Judgment — SAD / ADR best practices

Absorb **Solution Architecture Document** and **Architecture Decision Record** craft without inventing a second architecture bible next to BRD / PRD / SRS / FE·BE `ARCHITECTURE.md`.

Upstream reading (human only, optional): SAD+ADR template packs that use C4 + Mermaid (e.g. community “SAD best practices” repos). Prefer [C4 Model](https://c4model.com/) and [MADR](https://adr.github.io/madr/) as stable references.

## Adopt (map onto existing docs)

| Idea | Lands in |
|------|----------|
| One lasting decision = one immutable record; supersede, never rewrite | `docs/DECISIONS.md` |
| Context → options → decision → consequences (✅/❌) | Every D-xx entry |
| Optional impact sections only when the decision earns them (architecture / data / security / performance / deps / deploy) | `DECISIONS.md` entry shape |
| Link related decisions | Index + **Related** on each entry |
| Progressive views: landscape → context → containers → (components only if needed) | `docs/frontend/ARCHITECTURE.md`, `docs/backend/ARCHITECTURE.md` |
| Mermaid (incl. C4) in-repo so GitHub renders without extra tools | Architecture docs + decision impact when a diagram changes |
| Light forks stay out of the ADR log | `docs/decision-logs/` |
| Evidence-driven ADRs: name verification class (local / contractual / concurrent / consequential) and recovery | [`enterprise-system-design.md`](enterprise-system-design.md) · FEATURE Verification |
| Workload trade-offs across reliability / security / cost / ops / performance when the whole deployable changes | ADR + ARCHITECTURE (cloud-agnostic Well-Architected lens) |

## Forbid

| Do not | Why |
|--------|-----|
| Require a full standalone `SAD.md` that rewrites BRD/PRD/SRS/SECURITY | One home per fact; documents drift |
| Copy Uber/ride-share examples or multi-language template trees into the factory | Forever-generic; noise |
| Force microservices C4 examples onto a modular monolith | Architecture must match the product’s DECISIONS |
| Put every small choice in `DECISIONS.md` | Use `decision-logs/` or skip |
| Edit an **Accepted** entry’s decision text | Add D-xx and mark the old one Superseded |

## Professional bar (checklist)

When writing or reviewing architecture / decisions:

1. Can a new engineer see **why** this option beat the alternatives?
2. Are trade-offs honest (at least one real ❌)?
3. Does a consequential decision say what happens to security, data, or deploy — or explicitly say “none”?
4. Do FE and BE architecture docs show **context** (actors + externals) and **containers** (deployable pieces) before deep folder trees?
5. Is there still only one place for stack versions (SRS §2) and one place for API shapes (`API_CONTRACT.md`)?
6. For consequential boundaries: can you answer the six questions ([`enterprise-system-design.md`](enterprise-system-design.md))?

## Day workflow hook

When a day’s must-finish changes stack boundaries, ownership of a deployable, or a lasting trade-off: add or supersede a `DECISIONS.md` entry **in the same session** before closeout — see [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md).

When the ADR is about **queues, gateways, multi-region, sagas, or strangler slices**, complete the Architecture Decision Record in [`architecture-patterns.md`](architecture-patterns.md) (SF-20) and cite the chosen pack (or none).

Large-scale capacity/topology ADRs: also run [`system-design.md`](system-design.md) (SF-22).
