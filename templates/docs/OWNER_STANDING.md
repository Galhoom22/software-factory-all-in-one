# Owner standing instructions

**What this is:** the durable ledger of lasting preferences the product owners state in chat. Agents must follow these **without re-asking** and **without relying on chat memory**.

**What this is not:** product/tech decisions (`DECISIONS.md`), product requirements, or tool-specific board rules alone.

## How agents must use this file

1. **Read** this file at session start (from `AGENT_START.md`).
2. When the user states a **lasting** working preference, **append or update a bullet here in the same session**.
3. Prefer editing an existing section over duplicating.
4. Date the change in the **Changelog** below.
5. Keep tool-specific boards (e.g. Jira) in their own standing file; point to them from here.
6. If the preference is a **reusable method** (day loop, closeout order, CI/CD gates, final reply shape, remotes mirror), also update the product’s `playbook/` copy in generic wording (especially `playbook/08-IMPLEMENTATION-DAY.md`, `playbook/09-CI-CD.md`, and this template) **and** sync any studio playbook GitHub mirror in the same session.

---

## Language and communication

- Always reply in **English**, even when the user writes in another language.
- Be direct and concise.

## Candor with the owner (hard rule)

- Be **frank**, not agreeable. If the owner asks to add/change/do something that would **lower professionalism**, weaken a working workflow, duplicate a strong practice, fight SECURITY / COMPLIANCE / governing rules, violate **professional ethics**, or create unmanaged **High** risk, **say no clearly** before implementing.
- Reply: (1) no / not as asked (or blocked on red lines), (2) why — cite COMPLIANCE/SECURITY ID, ethics principle, or risk class when possible, (3) **better alternative scenario** or recommend skipping. Wait for the owner’s choice unless it is already a hard red-line block.
- Judgment: playbook `07-judgment/compliance-ethics-risk.md`. Blind obedience that degrades the system is a failure. Push back only when professionalism, ethics, compliance, or risk rails would drop — not for taste nits.

## Owner supervises; agent executes

- The owner is the **supervisor**, not the hands-on executor (unless they choose otherwise).
- The agent executes commands, code, checks, PRs/merges (when the day’s cadence allows), and tracker/checklist updates.

### Day run-through (implementation FE/BE)

Default for implementation chats. Full method: `playbook/08-IMPLEMENTATION-DAY.md` + `playbook/09-CI-CD.md`.

- **Proportional depth (template default):** match day-loop rigor to product size and risk (`08` § Proportional day pipeline). Small/early products use core closeout + N/A on unused gates; grow gates when money/PII/API/public/booking appear. Never skip CI, red lines, or honest proof. This product may **pin full cadence** below if it is a real multi-day FE/BE build.
- When the owner says to work **today’s** tasks, finish the **whole** must-finish list without mid-day continue / “approve next slice” waits.
- **Context window:** follow playbook `07-judgment/context-window.md` — pointers over paste-bombs; fresh-chat handoff; mid-day context checkpoint allowed, mid-day slice-approval waits are not.
- **Final reply after closeout:** (1) **Pareto 20% (teachable depth)** — most important topics only, each explained thoroughly so the owner can paste into ChatGPT and learn (terms, concepts, what shipped, why) — not ultra-short stubs; (2) **New-chat handoff** — copy-paste block for tomorrow. Emit both automatically.
- **Closeout (automatic when 100%):** PR → **CI green** (GitHub Actions) → **CodeRabbit** (Free: CLI/IDE full review + optional PR summary; paid: GitHub review) → merge → verify on default branch (+ confirm CI on that branch, **including API tests**) → **CD when configured** (staging deploy → **API smoke** → Sentry if live) → tracker → day page. **API readiness** (contract + **API design bar** + local + CI + phase smoke) is a day gate like DSA/CodeRabbit — see `playbook/07-judgment/api-readiness.md` + `playbook/07-judgment/api-design.md`. **Cross-surface compatibility** (read sibling; write only owned seat; contract-first handoff) — `playbook/07-judgment/cross-surface-compatibility.md`. Stay on Free CodeRabbit until the owner explicitly pays; no paid trials/usage products by default.
- Pause only for real blockers (security/compliance/product/spend decisions, interactive approvals, unfixable hard stops).

## Playbook generic (hard rule)

- The product’s `playbook/` copy (and any studio playbook mirror) must stay **generic forever**: practices only, never product names, people, tracker keys, or day-page URLs. Those belong in this OWNER_STANDING file and other product docs.

## Automatic playbook improvement (hard rule)

- When agents hit non-obvious problems or useful discoveries during build, they **automatically** (no owner ask) write `docs/learning-from-mistakes/` and, if the rule is reusable **and** raises professionalism, add a generic bullet to `playbook/06-LESSONS.md` (or the matching template) and sync any studio playbook mirror the same session. Skip noise and duplicates. Method: `playbook/08-IMPLEMENTATION-DAY.md` § Lesson capture.
- When the owner says to **add something to the playbook / template**, always update local `playbook/` **and** sync the studio GitHub mirror in the same session — no second ask. Quality bar: only changes that raise professionalism; forever-generic. If the request would **lower** professionalism or weaken the day/workflow, **refuse and advise** per Candor (do not dual-sync a bad change).
- **Requirements-driven stack selection (hard rule):** there is **no** universal default stack (not TALL, not MERN, not “always Next”). When the owner asks what to use, or when activating from `my-project-requirements.md`, agents **advise** from **this** product’s requirements (options → recommendation → full specification including architecture and earned patterns) per `playbook/07-judgment/stack-selection.md`, then pin lasting choices in `DECISIONS.md` + SRS. `playbook/technologies/` packs are craft after the pin — never the reason to pick a stack.
- **Technologies packs:** when coding a stack, open `playbook/technologies/<slug>/` (`best-practices` + `quality` + version slice) and **automatically** re-check official docs/Context7 for the pinned line. Modern syntax + Clean Code + architecture + earned patterns. Product SRS owns the product pin.
- **Owner names a stack → auto-refresh (hard rule):** when the owner says they will use/work on a technology (e.g. Laravel), the agent **immediately** (no ask) searches official docs/Context7 for the latest stable line, compares it to `playbook/technologies/<slug>/`, and **updates or creates** the pack the same session if anything is stale or missing — then syncs the studio playbook mirror. The playbook/template is a living starting point. Do not silently bump a product SRS pin — propose an ADR if the pack moves ahead. Method: `playbook/technologies/README.md` § Owner names a stack (D-79).
- **Booking / reservations (when the product books capacity):** `playbook/07-judgment/booking.md` (holds, recheck, idempotency, inventory, cancel snapshots; D-84). Pair with payments when money moves.
- **Packages over reinvention (hard rule):** language-agnostic. For **non-trivial** work, search and prefer a **verified** package when it saves time/money and raises professionalism; recommend it and use it. Do **not** add a package for trivial helpers. Verify fit, maintenance, license, security, and architecture before adopting. Method: `playbook/07-judgment/packages.md` (D-80).
- **Software Factory line:** day work follows intake→triage→plan→build→independent review→Done (`07-judgment/software-factory.md`); CI/CodeRabbit = independent review.
- **Studio as a company:** fill `docs/STUDIO_ORG.md`; day agents confirm goal + seat + exclusive checkout (`07-judgment/studio-company.md`). Do not replace trackers with an agent-company OS unless decided.
- **Excellence north star:** every playbook/template upgrade follows `playbook/EXCELLENCE.md` (ratchet; raise a dimension; never claim one-prompt “best forever”). Atlas + Candor still apply.
- **Coverage atlas first:** before adding a practice, read `playbook/coverage/README.md` (and the matching domain file). Report ✅/⚠️/❌ + coverage %. If already strong, deepen that home instead of duplicating. When coverage changes, update the atlas row/% in the same change.

## Git and remotes

- Keep local default branch and `origin` identical after verified work: commit, push, confirm CI.
- Never force-push or rewrite pushed history on the default branch.

## Delivery pointers

- Link your delivery / actor-loop doc here.
- Link your board standing rules here (if any).
- Implementation day pipeline: `playbook/08-IMPLEMENTATION-DAY.md`.
- CI/CD gates: `playbook/09-CI-CD.md`.

## Changelog

| Date (UTC) | Change |
| YYYY-MM-DD | Proportional day pipeline — scale rigor with product risk (D-85). |
| YYYY-MM-DD | API design judgment (consumer-first REST; design bar in API readiness) (D-92). |
| YYYY-MM-DD | Cross-surface compatibility day gate (FE↔BE↔services; sibling read-only unless standing grants write) (D-91). |
| YYYY-MM-DD | Booking/reservations judgment + day gate (D-84). |
| YYYY-MM-DD | Candor hard rule: push back when a request would lower professionalism (D-82). |
| YYYY-MM-DD | Compliance / ethics / risk judgment; candor covers unlawful/unethical/High-risk asks (D-83). |
|------------|--------|
| YYYY-MM-DD | Packages over reinvention when earned; verify before adopt (D-80). |
| YYYY-MM-DD | Owner names a stack → auto search latest + refresh technologies pack (D-79). |
| YYYY-MM-DD | Requirements-driven stack selection (no universal stack; advise from requirements). |
| YYYY-MM-DD | Laravel 13 technologies pack. |
| YYYY-MM-DD | Technologies packs: quality.md + automatic latest-docs check (D-66). |
| YYYY-MM-DD | Technologies library (`playbook/technologies/`); PHP 8.6 first pack. |
| YYYY-MM-DD | API readiness gate in day loop (contract + local + CI + env smoke). |
| YYYY-MM-DD | Coverage atlas: consult `playbook/coverage/` before adding practices; update % when coverage changes. |
| YYYY-MM-DD | Playbook forever-generic hard rule.
| YYYY-MM-DD | CI/CD (GitHub Actions + staging/prod delivery) is a hard gate in implementation day closeout (`09-CI-CD.md`). |
| YYYY-MM-DD | Created ledger; seeded day run-through + Pareto/handoff + playbook dual-update rule. |
