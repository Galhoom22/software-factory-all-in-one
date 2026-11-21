# Judgment — Competitor recon & clean-room parity

## Problem this prevents

Competitor study that steals owned assets (code, logos, copy, private APIs), invents “user hate” quotes, or ships a lookalike without a distinct brand. Also: vague “we researched X” with no screen/flow/feature matrix — so the prototype and SRS miss states and must-haves.

## Source (judgment only)

Absorb **methods** from [replica-skill](https://github.com/Jakeschincariol/replica-skill) (MIT): recon map, feature matrix, evidence-linked reviews, parity scoring, brand leftover sweep, clean-room rails. Log the borrow in product `docs/REFERENCES.md`.

**Do not** install the Replica pack as `AGENTS.md`, as a second delivery constitution, or as a default “clone any app” studio workflow. This playbook builds **original products** that learn from peers — not shippable copies of others’ trade dress, catalogues, or networks.

## Adopt

### 1. Clean-room rails (always)

| Do | Do not |
|----|--------|
| Study **functionality and UX patterns** from public pages, help docs, pricing, store listings, walkthroughs, and the owner’s **own** account | Copy source, logos, trademarks, marketing copy, private APIs, or licensed catalogues |
| Prefer reading at human pace; respect site terms | Bulk scrape, bypass paywalls/logins, use someone else’s account |
| Mark what **cannot** be cloned (network effects, partner deals, regulated licences, owned content) as out of scope | Pretend “clone any app” includes what the peer owns |
| Give the product its **own** name, palette, voice, and strings before launch | Ship with peer colours/names/identifiers still in the tree |

### 2. Recon map (when studying a peer)

Write a short recon (product path e.g. `docs/competitor-recon/` or BRD §8 appendix) covering:

1. **Sources table** — every row has a URL  
2. **Screen inventory** — stable IDs, purpose, key components, states (empty / loading / filled / error / denied / mobile)  
3. **Flows** — goal → screens; happy-path click count; edge cases  
4. **Components** — repeated UI parts + variants  
5. **Inferred data model** — entities with evidence + confidence (guesses marked)  
6. **Feature matrix** — must / should / could; status for *our* product (`yes` / `partial` / `no` / `skip`+reason)  
7. **Size honesty** — S / M / L / XL; hard parts named  

Templates: [`templates/docs/competitor-recon.md`](../templates/docs/competitor-recon.md).

### 3. Evidence-backed gap research (entrepreneur craft)

When using peer reviews to find differentiation:

- **Never fabricate** reviews, quotes, ratings, or counts  
- Every quote **verbatim + linked**; state sample size  
- Mark thin themes (< 3 reviews or one source) as thin  
- Reviewers are research — **not** testimonials on the landing page  
- Output three lists: hate / missing / unsolved → fix plan → positioning angle with evidence  

Pairs with COMPLIANCE marketing honesty and Governing Product Rules (no fabricated social proof).

### 4. Parity scoring (honest Done)

- Weight **must > should > could**; partial = half; `skip` excluded  
- **Must-haves incomplete ⇒ not shippable** for that competitor-parity slice  
- Layout checks (if used) compare **structure/hierarchy**, not peer brand colours (trade dress)  
- Verdict language: not shippable / shippable / stronger than peer *because of evidenced fixes* — never vibe scores  

For **our** prototype vs `DESIGN.md`, prefer product anti-slop + PRE-DELIVERY checklists; do not chase pixel identity with a competitor.

### 5. Brand leftover sweep (before public launch)

Before marketing/legal go live: search the tree for peer names, domains, and brand colours (including inside identifiers). Fix until clean. Trademark/domain checks are **run or marked to-run** — never claimed “available” without evidence.

## Forbid

| Do not | Why |
|--------|-----|
| Vendor Replica skills as always-on product authority | Second constitution; clone framing fights original-product delivery |
| Clone peer trade dress / copy / assets | Legal + professionalism failure |
| Invent review quotes for positioning | Fabrication; COMPLIANCE / FTC-style risk |
| Call a product “done” on layout vibes while must-haves are `no` | Dishonest parity |

## Day / planning placement

- **Planning step 0.2** ([`01-STEPS.md`](../01-STEPS.md)): competitor list + closest peer + stronger features → use this recon depth when the peer is load-bearing.  
- **Prototype** ([`03-PROTOTYPE.md`](../03-PROTOTYPE.md)): screen/flow/state completeness matches recon discipline; brand is ours.  
- **Implementation days**: only if must-finish explicitly includes competitor-parity or marketing differentiation work.

## Related homes

- BRD competitors / REFERENCES borrow register  
- `project-ui/ANTI-SLOP.md`, `PRE-DELIVERY-UX.md`  
- Candor / ethics: [`compliance-ethics-risk.md`](compliance-ethics-risk.md)  
- Excellence ratchet: [`EXCELLENCE.md`](../EXCELLENCE.md)
