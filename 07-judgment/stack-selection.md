# Judgment — requirements-driven stack selection

**Hard rule:** there is **no** single tech stack that fits every product. Programming language, frameworks, packages, hosting shape, and UI style are chosen from **this product’s requirements** — not from habit, fashion, or “what we used last time.”

Agents **advise** before they lock. Owners decide lasting pins via ADR / `DECISIONS.md` + SRS §2 (or the product’s equivalent).

## When this judgment applies

- Owner asks “what stack should we use?” / “TALL?” / “Filament?” / “Inertia?” / “Next + API?”
- Starting a **new** planning product from the factory template (`my-project-requirements.md` → planning)
- Changing FE/BE framework, major language, or “how the UI talks to the server”
- Adding a heavy package that implies an architecture (admin panel builder, SPA glue, SSR framework)

## Adopt

| Do | Lands in |
|----|----------|
| Read requirements first (actors, constraints, markets, languages, compliance, team skills, timeline) | Entry requirements file → formal `requirements.md` / BRD / PRD |
| Compare **2–3 real options** with honest trade-offs (at least one ❌ each) | Chat advice → then `DECISIONS.md` when lasting |
| Recommend **one** default stack for *this* product, with why | ADR + SRS technology section |
| Specify the stack **completely enough to build**: language + major frameworks + how FE/BE connect + auth shape + data store class + notable packages | SRS §2 + FE/BE `ARCHITECTURE.md` + API contract (if any) |
| Tie architecture and **earned** patterns to that choice (modular monolith vs other; Resource/controller patterns; etc.) | Architecture docs + [`design-patterns.md`](design-patterns.md) |
| Open matching [`technologies/`](../technologies/README.md) packs **after** the pin for professionalism (syntax, quality, stop-using) | Packs are **how to write well**, not **which stack to pick** |
| For Laravel TALL / VILT, open the composition map so every letter’s pack is loaded | [`php-laravel-compositions.md`](../technologies/php-laravel-compositions.md) |
| Re-check official docs / Context7 for pinned lines before non-trivial code | SF-05 habit |
| When the owner **names** a stack to work with, search latest + refresh the pack if stale (same session, no ask — as an upstream pull request when the kit is vendored) | [`technologies/README`](../technologies/README.md) § Owner names a stack (SF-05) |

## Forbid

| Do not | Why |
|--------|-----|
| Claim one stack (TALL, MERN, “always Next”, “always Laravel”) fits every project | Requirements differ |
| Pick a stack because a technologies pack exists | Packs are libraries of craft, not product constitution |
| Lock FE/BE framework in chat without writing requirements + ADR when the choice is lasting | Drift and silent architecture changes |
| Bolt Livewire / Filament / Inertia / Vue onto a product that already chose SPA ↔ API (or the reverse) without an ADR | Different architectures |
| Dump a pattern encyclopedia or microservices C4 onto a modular monolith by fashion | [`sad-adr.md`](sad-adr.md), [`design-patterns.md`](design-patterns.md) |
| Invent versions from memory | Official docs + product SRS pin |
| Leave a technologies pack stale after the owner named that stack | The factory is a living starting point: refresh the pack, or propose the refresh upstream when the kit is vendored (SF-05) |

## Advice shape (when the owner consults)

Answer in this order (short, decisive):

1. **Requirements that bite** — 3–7 constraints that actually change the stack (team skills, SEO/SSR need, admin vs public SPA, offline, compliance, time-to-ship, bilingual/RTL, etc.).
2. **Options** — 2–3 credible stacks, each with fit / cost / risk.
3. **Recommendation** — one primary choice for *this* product and why the others lose.
4. **Specification** — language(s), frameworks, FE↔BE join (API contract vs server-driven UI vs hybrid), data store class, key packages, and which `technologies/` packs agents must open when coding.
5. **Architecture & patterns** — one paragraph + pointers: modular boundaries, auth posture, where domain logic lives; patterns only if earned.
6. **Decision gate** — if lasting: propose ADR text; do not silently edit SRS pins.

## Technologies packs vs selection

| Question | Home |
|----------|------|
| Which stack should **this** product use? | **This judgment** + requirements + ADR |
| How do we write **professional** code in a chosen stack? | [`technologies/<slug>/`](../technologies/README.md) |
| What versions does **this** product run? | Product SRS (or equivalent) — packs do not override |

## Template / new-product hook

When activating planning from `my-project-requirements.md` ([`00-USAGE.md`](../00-USAGE.md)):

1. Extract constraints that affect stack.
2. Advise with the shape above (do not skip options/recommendation).
3. Record the lasting choice in `DECISIONS.md` + pin versions in SRS.
4. Only then deepen implementation guides and open the matching technology packs.

## Related

- [`sad-adr.md`](sad-adr.md) — how to record the choice
- [`design-patterns.md`](design-patterns.md) — patterns after architecture is clear
- [`../technologies/README.md`](../technologies/README.md) — craft packs
- Product `SECURITY` / `COMPLIANCE` — may veto an otherwise “nice” stack
