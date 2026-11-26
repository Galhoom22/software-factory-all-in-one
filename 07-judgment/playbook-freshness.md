# Playbook freshness — always current (hard)

**Purpose:** the Engineering Playbook must stay a **living, up-to-date** reference. Stale packs, stale %, stale version pins, or a local copy that drifted from the studio mirror are professionalism failures — not “fine for later.”

**Pairs with:** [`EXCELLENCE.md`](../EXCELLENCE.md) ratchet · [`coverage/`](../coverage/README.md) · [`technologies/README.md`](../technologies/README.md) (D-79) · Context7 ([`context7-docs.md`](context7-docs.md), D-97) · public mirror sync (D-110).

---

## Hard rule

**After every change that touches the playbook** (method, judgment, `templates/`, `technologies/`, `coverage/`, scripts, examples) **and** whenever the owner adds/edits a practice, stack, surface, or lasting workflow:

1. Leave the playbook **current as of this session** — not “mostly right.”
2. Finish the **Always-Current closeout** below **before** claiming Done / ending the session.
3. Run `node software-factory-all-in-one/scripts/check-structure.mjs` (planning CI runs it too). Fix failures in the same change.
4. Sync the public factory mirror the same session (`node scripts/sync-software-factory.mjs` from the product planning root — D-110).

Candor still wins: if an ask would *lower* bar or freeze outdated advice as “done,” refuse (D-82).

---

## Always-Current closeout (same session)

Agents run this checklist whenever the rule fires. Skip a line only with an explicit **N/A + why**.

| # | Check | Done looks like |
|---|--------|-----------------|
| 1 | **Excellence** | At least one dimension up; none down ([`EXCELLENCE.md`](../EXCELLENCE.md)) |
| 2 | **Atlas** | Matching `coverage/` row(s) and **%** updated; surfaces file if industry/language changed ([`07-software-surfaces.md`](../coverage/07-software-surfaces.md)) |
| 3 | **No orphans** | Counts, file maps, pack tables, and cross-links match what exists (no “Next slot empty” lies; no missing pack rows) |
| 4 | **Official freshness** | For every **touched** `technologies/<slug>/`: re-open official docs and/or Context7 **this session**; set `official-refs.md` **Checked** dates to today; bump pin only with evidence |
| 5 | **Owner-names / URL paste** | If the owner named a stack or pasted docs: refresh/create pack same session (D-79) — no “we’ll update later” |
| 6 | **Templates** | If the practice belongs in seed templates, update `templates/` the same change (generic only) |
| 7 | **Prompts / lessons** | One-line wire in `05-PROMPTS` / `06-LESSONS` when agents must discover the rule |
| 8 | **Structural gate** | `node software-factory-all-in-one/scripts/check-structure.mjs` exits 0 |
| 9 | **Mirror** | Public `Galhoom22/software-factory-all-in-one` synced (D-110) |
| 10 | **Trail** | Lasting bar → product `DECISIONS` + `OWNER_STANDING` changelog when this product hosts the playbook copy |

**Memory is not evidence of “latest.”** Training cut and old chat do not count as a freshness check.

---

## What “current” means (honest)

| Layer | Current means |
|-------|----------------|
| Method / judgment | Text matches how agents must work **today**; no superseded MVP/day-loop advice left standing |
| Technologies packs | Pin + edition/line match **today’s stable** official docs for that pack; Checked dates honest |
| Coverage % | Reflects files that exist **now**; two-numbers rule (craft vs industry) intact |
| Templates | Seed a new planning repo without teaching abandoned procedures |
| Mirror | Public GitHub factory == local `software-factory-all-in-one/` after the session |

Not required every session: re-audit **every** pack on earth. Required: never leave **touched** homes stale, and never invent “current” without an official/Context7 check.

---

## Anti-patterns

| Anti-pattern | Do instead |
|--------------|------------|
| Edit a pack, leave old Checked dates | Re-check official docs; stamp today |
| Add a stack, skip `coverage/` + surfaces language row | Update both in the same change |
| “CI green later” after playbook edit | Run freshness script before push |
| Dual-sync forgotten | D-110 same session — no second ask |
| Claim huge professionalism gain with no ratchet evidence | Cite dimension + checklist rows completed |

---

## Related

- Technologies auto-refresh: [`technologies/README.md`](../technologies/README.md) § Owner names a stack  
- Coverage protocol: [`coverage/README.md`](../coverage/README.md)  
- Day Context7 gate: [`context7-docs.md`](context7-docs.md)  
- Structural check: [`../scripts/check-structure.mjs`](../scripts/check-structure.mjs)
