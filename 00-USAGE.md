# How to use this Engineering Playbook

**One principle:** create `my-project-requirements.md`. The AI Agent owns the planning process.

You do **not** need to learn the internal folder layout, pick templates by hand, or tell the agent “start planning.” The requirements file **is** the instruction to begin.


## Why bother (speed × quality)

AI agents are fast by default. **Quality** only stays high when requirements, rails, contracts, stack craft, day loops, and lessons live in **one** loadable reference — this factory (vendored read-only in your repository, maintained upstream). Use it for hands-off agent coding and for professional products alike. North star: [`EXCELLENCE.md`](EXCELLENCE.md) § Why this playbook exists.

## What this is

A reusable **project-planning engine** for a **planning repository** (requirements, specs, architecture, contracts, prototype, backlog) — **not** the place for production application code.

After planning is ready enough, you create separate **implementation** repositories (frontend, backend, mobile, infra, …) and build there.

## What you need before starting

- A GitHub account (private repos recommended).
- An AI coding agent that can read this repo (Cursor, Codex, Claude, …).
- Your product idea in any language (incomplete is fine).

## Step 1 — Create a Planning Repository

1. Seed a private planning repository — pick one:
   - **From a clone of this kit:** `node scripts/seed.mjs ../<product>-planning`
   - **From GitHub:** click **Use this template** (private), clone the new repository, then run `node scripts/seed.mjs --in-place`
2. The seed vendors the kit into `software-factory-all-in-one/` (read-only — improve it upstream with a pull request) and instantiates `templates/` at the root: `AGENTS.template.md` → `AGENTS.md`, `LICENSE.template` → `LICENSE`, `cursor-rules/` → `.cursor/rules/`, `codex/` → `.codex/`, `agent-discovery/` pointers → root. It never overwrites an existing file. `templates/implementation/` stays in the kit for your implementation repositories.
3. The seeded checks (`.github/workflows/ci.yml`) are green before you write any requirements; `node scripts/seed.mjs --update <repo>` later refreshes only the vendored kit.
4. Open the repo in your AI agent from the git root.

This repo is the **planning workspace** only.

## Step 2 — Provide project requirements (your only required input)

Create **one file at the repository root**:

```text
my-project-requirements.md
```

Put in it whatever you know: vision, goals, users, features, constraints, markets, languages, stack preferences, out-of-scope notes. Incomplete is OK.

Copy and adapt the example: [`examples/my-project-requirements.example.md`](examples/my-project-requirements.example.md).

**Stack is not assumed:** there is no universal default stack. From your requirements the agent must **advise** (options + recommendation + architecture/patterns fit) using [`07-judgment/stack-selection.md`](07-judgment/stack-selection.md), then pin the lasting choice in `DECISIONS.md` + SRS. [`technologies/`](technologies/README.md) packs are for writing well **after** that pin — not for picking by fashion.

**Do not** delete or empty this file after the agent starts. The agent must **not overwrite** it. It is your human entry point; the agent derives the formal `requirements.md` and other planning docs from it.

## Step 3 — Automatic AI Agent activation

Whenever the agent starts or inspects the repo and finds root `my-project-requirements.md`, that file is the **activation signal**.

The agent must automatically:

1. Read the whole file.
2. Inspect this playbook (`00-USAGE`, `01-STEPS`, `02-DELIVERY`, templates, …).
3. Apply the **80/20** rule: smallest complete planning set for this project’s complexity.
4. **Advise and pin the stack** from requirements ([`07-judgment/stack-selection.md`](07-judgment/stack-selection.md)): constraints that bite → 2–3 options → one recommendation → specify language/frameworks/FE↔BE join/packages → architecture + earned patterns → ADR + SRS pin. Never claim one stack fits every product.
5. Fill placeholders, instantiate templates, and run [`01-STEPS.md`](01-STEPS.md) in order (adapted to what the product needs).
6. Produce a usable planning workspace (formal `requirements.md`, shared docs, agent rules, CI, prototype when UI exists, CI/CD phase A by default — see [`09-CI-CD.md`](09-CI-CD.md)).
7. Ask only **blocking** questions; record assumptions otherwise.
8. Keep the playbook **generic** — never paste product names into `software-factory-all-in-one/` method docs.

No separate “initialize” command is required. If the file is **absent**, the agent must **not** assume a new-project bootstrap was requested.

## What the agent may produce (examples, not a mandatory checklist)

Vision and scope · formal requirements · BRD/PRD/SRS · architecture and ADRs · security/compliance · API contract · FE/BE guides · testing and CI/CD strategy · backlog/roadmap · prototype · agent rules · implementation handoff.

Skip anything the project does not need. Prefer links over duplication.

## Planning vs implementation

| Repository | Role |
|------------|------|
| **Planning** (this pattern) | Requirements, specs, contracts, standards, prototype mocks, backlog wording |
| **Implementation** (separate repos) | Real frontend / backend / mobile / infra code |

The agent prepares boundaries and handoff; it does **not** mix production app code into the planning repo, and does **not** create implementation repos unless you authorize that.

## When requirements change

Edit `my-project-requirements.md` again. On the next session the agent reconciles: update derived docs, preserve decisions unless the new text justifies revisiting them, and list what is still incomplete. Do not duplicate whole documents from scratch.

## After planning is ready

1. Review the formal `requirements.md` and key docs with the agent.
2. Create implementation repositories when you choose.
3. Use [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md) and [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md) in those repos for feature and day delivery.
4. CI/CD stays **progressive** (Phase A = CI only until host hooks exist) — [`09-CI-CD.md`](09-CI-CD.md).

## Quick checklist for a new user

- [ ] Empty planning repo created  
- [ ] Playbook method + `templates/` seeded at root  
- [ ] `my-project-requirements.md` written at root  
- [ ] Agent opened on the repo (it should start from that file)  
- [ ] Fill `docs/STUDIO_ORG.md` (seats + company goal)
- [ ] Review generated planning docs; answer only blocking questions  
- [ ] Later: create implementation repos and build  

**Provide the requirements file. The AI Agent handles the planning process.**

## Studio org seats

After seeding templates, fill `docs/STUDIO_ORG.md` (company seats, goals, exclusive checkout, factory line). Methods: [`07-judgment/studio-company.md`](07-judgment/studio-company.md) + [`07-judgment/software-factory.md`](07-judgment/software-factory.md).

## Excellence trajectory

This playbook improves forever via [`EXCELLENCE.md`](EXCELLENCE.md) (north star + ratchet) and [`coverage/`](coverage/README.md). New products inherit the latest bar; they do not freeze a “finished” template.

## Automation (CI)

Planning CI runs these without a manual step:

- `software-factory-all-in-one/scripts/check-requirements-activation.mjs` — playbook still wires activation.
- `scripts/check-planning-entry.mjs` — if `my-project-requirements.md` exists, agent rules must be wired; prints derived-doc progress. If the file is absent, the check skips.

This kit's own CI runs `scripts/check-seed.mjs`, which seeds the templates into temporary repositories (fresh, activated, in-place, updated) and runs exactly these product checks, so a template change that would break a new repository fails before it merges.
