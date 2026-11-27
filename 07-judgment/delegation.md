# Judgment — agent delegation (orchestrator → implementer)

Absorb **agent delegation** as **judgment only**: when one agent (the **orchestrator**) hands a bounded coding task to a **separate** implementer (another CLI, Cursor Task/subagent, second session, or fleet lane), then **reviews the diff and lands the commit**. Use this whenever must-finish explicitly dispatches work to a second coding agent. Pure single-session inline work: **N/A**.

**Sources distilled (not dependencies):** [amElnagdy/delegate-skills](https://github.com/amElnagdy/delegate-skills) (MIT) — brief → dispatch → review → land loop; fleet/lane idea; “relay never commits.” Do **not** vendor the Skills CLI package, nineteen `*-delegate` trees, or `relay.mjs` into the factory as AGENTS or a required toolchain.

**When this applies:** the day agent (or human) asks another coding agent/CLI to implement while staying reviewer; multi-task queues through a second implementer; adversarial read-only second opinion from another agent. Default product day run-through remains **one seat, one checkout** ([`studio-company.md`](studio-company.md)) — delegation is an optional tool, not a second constitution.

## Problem this prevents

Orchestrators paste half a chat into a second agent; the implementer invents gates, commits (or auto-commits), and the orchestrator “lands” from a self-report. Diffs grow past the brief; premises change mid-run with no re-brief; tiny tasks pay delegation tax; two agents fight the same working tree. Result: unverified merges and lost rollback clarity.

**Target:** every delegated run has a **self-contained brief**, **one task**, **implementer never commits**, **orchestrator re-runs real gates**, and **surface-don’t-absorb** for scope/design turns.

## Controlled vocabulary (use these terms)

| Use | For | Not |
|-----|-----|-----|
| **orchestrator** | Agent/session that writes the brief, reviews, lands | “driver”, “controller” as synonyms in docs |
| **implementer** | Separate coding agent/CLI that edits the tree | generic “subagent” when you mean a full CLI dispatch |
| **brief** | Self-contained task spec (no shared chat memory) | “the prompt”, “task file” without structure |
| **gates** | Project’s real test/lint/build commands | Vague “run CI” without copying actual commands |
| **dispatch** | Sending the brief to the implementer | — |
| **land** | Orchestrator commits after review | Implementer commit / auto-commit |
| **lane** / **fleet** | Optional map of work-kind → implementer | Required Paperclip/Mastra install |

Harness-native “subagents” / Task tools stay valid **implementers** when they edit a real tree and return a diff — still apply brief + review + land rules.

## Core ideas

| Idea | Agent meaning |
|------|----------------|
| **Loop, not forwarder** | Brief → dispatch → wait → review gates+diff → land. Not “fire and forget.” |
| **No shared memory** | Implementer sees only the brief + repo. If a constraint is missing from the brief, it does not exist for them. |
| **One task per brief** | One dispatch → one reviewed commit. Split mixed jobs. |
| **Diff is the deliverable** | Trust `git status` / diff over the implementer’s narrative. |
| **Relay never commits** | Whatever launches the implementer must leave the tree uncommitted for the orchestrator. |
| **Self-report ≠ evidence** | Re-run real gates; treat loosened/skipped tests as fail until proven. |
| **Premises freeze** | Wrong facts mid-run → stop, inspect tree, re-dispatch corrected brief — don’t “discount” contaminated output. |
| **Surface, don’t absorb** | Report unasked design turns; stop and ask on scope expansion. |
| **Skip small work** | Inline when overhead exceeds benefit. |

Complements: [`software-factory.md`](software-factory.md) (factory stages; independent review), [`verification-engineering.md`](verification-engineering.md) (author≠judge), [`studio-company.md`](studio-company.md) (atomic checkout), [`context-window.md`](context-window.md) (bounded helpers), [`agent-skills.md`](agent-skills.md).

## Delegation checklist

Run before dispatch and again before land:

1. **Worth it?** Task large/mechanical enough that a second session helps; else inline.
2. **Checkout** — One active writer on the tree (or an isolated worktree). No dual uncoordinated edits on the same files.
3. **Brief** — Goal, current state, change list, leave-untouched list, **copied** real gate commands, “do not commit,” structured report contract.
4. **Pins** — Model/effort only if the harness supports them; prefer live model lists over invented names.
5. **Dispatch** — Prefer harness Task/subagent or an optional installed delegate skill; do not invent a second agent OS in-repo.
6. **Wait** — Completion = process/session done + inspectable tree (and structured result if the tool provides one).
7. **Review** — Re-run gates yourself; read diff vs brief; check test edits for weakened asserts; migrations/renames get specialized checks.
8. **Land** — Orchestrator commits with a clear message; or discard after inspection if premises were wrong.
9. **Rework** — Delta brief in the same session when possible; same review bar.
10. **Evidence** — Note implementer + brief scope + gate proof in the day summary (or N/A).

## Day workflow hook

1. **Default day** — Single seat implements inline; mark **delegation N/A**.
2. **When delegating** — Open this file; write the brief; keep commit authority on the orchestrator (day agent or human).
3. **Before Done** — Gates green from orchestrator’s re-run; diff matches brief; no implementer commit on `HEAD`.
4. **Day summary** — **Delegation:** implementer + evidence, or N/A.

## Optional tooling (never required)

Owners may install [delegate-skills](https://github.com/amElnagdy/delegate-skills) via the Skills CLI for fleet lanes / `relay.mjs` experiments. That is a **local harness choice**. Product repos stay free of vendored relay trees unless a DECISIONS row says otherwise. Pair reviews with existing CI + human bar (+ any AI PR reviewer) — not a substitute.

## Anti-patterns

| Do not | Why |
|--------|-----|
| Paste chat history as the brief | Missing constraints; silent wrong premises |
| Let the implementer `git commit` / auto-commit | Reviewer loses the land boundary |
| Trust “tests passed” in the final message | Self-report ≠ evidence |
| Delegate every one-liner | Overhead tax |
| Two agents on one dirty tree without coordination | Collisions; lost work |
| Vendor all `*-delegate` skills as AGENTS | Second constitution; flag rot |
| Expand scope mid-run without asking | Mandate creep |
| Reflexive `git checkout`/`clean` before inspecting a failed run | Destroys the only copy of the work |

## Professional bar (checklist)

- [ ] Brief self-contained with real gates + no-commit rule — or day marked N/A
- [ ] One task per dispatch
- [ ] Orchestrator re-ran gates and read the diff
- [ ] `HEAD` advanced only by orchestrator land (or intentional discard after inspect)
- [ ] Scope/design surprises surfaced to the human when needed
- [ ] Day summary records delegation or N/A

## Related homes

- Method: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) · [`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md)  
- Factory / seats: [`software-factory.md`](software-factory.md) · [`studio-company.md`](studio-company.md)  
- Upstream (optional human reading): [amElnagdy/delegate-skills](https://github.com/amElnagdy/delegate-skills) — re-verify; do not copy skill trees into the repo.
