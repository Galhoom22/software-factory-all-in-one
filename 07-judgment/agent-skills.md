# Judgment — production agent engineering skills

Absorb **senior engineering agent workflows** (define → plan → build → verify → review → ship) as judgment mapped onto this factory. Do **not** install a third-party skills pack as `AGENTS.md`, a second constitution, or an always-on Cursor skill tree that overrides product rules.

Upstream reading (human only, optional): packs such as [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) (lifecycle skills + slash commands) and the community collection [github/awesome-copilot](https://github.com/github/awesome-copilot) (agents, instructions, skills, hooks; its CI-hardening, threat-modeling, postmortem and skill-vetting ideas are distilled into [`ci-hardening.md`](ci-hardening.md), [`threat-modeling.md`](threat-modeling.md), [`incident-response.md`](incident-response.md) and the vetting table below). Prefer the **behaviors** below; skip interview-me/idea-refine as required gates unless the owner asks.

## Adopt (map onto existing docs)

| Idea | Lands in |
|------|----------|
| Surface assumptions before non-trivial work; stop and name confusion instead of guessing | `AGENTS.md` / `OWNER_STANDING.md` · day run-through |
| Push back with a concrete downside when an approach is unsafe or overbuilt | Ponytail + clean-code + SECURITY red lines |
| Vertical slices (thin end-to-end paths) + risk-first when uncertainty is high | [`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md) · [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) |
| Contract-first when FE/BE parallelize | `docs/API_CONTRACT.md` before dual implementation |
| Five-axis review before merge: correctness, readability, architecture, security, performance | Day closeout + AI PR reviewer if used · propose structural remedies, not only nits |
| Senior **human code-review** bar: human-readable Clean Code, modern pinned-line syntax, framework best practices | [`human-code-review.md`](human-code-review.md) · `technologies/*/quality.md` · closeout before any AI PR reviewer runs |
| Threat-model briefly (trust boundaries + abuse cases) before hardening a feature | [`threat-modeling.md`](threat-modeling.md) · `SECURITY.md` + FEATURE security module |
| Six boundary questions (object → contract → authority → scope → evidence → recovery) on consequential writes | [`enterprise-system-design.md`](enterprise-system-design.md) · FEATURE Design |
| AI/agent **practice level** by consequence (advisory → consequential), not model confidence | [`enterprise-system-design.md`](enterprise-system-design.md) · `docs/AI.md` |
| Evidence over hope; adversarial check on high-stakes claims (auth, money, PII, irreversible data) | FEATURE verification matrix · doubt before Done |
| **Verification engineering:** criteria→evidence; author≠judge; deterministic before model opinion | [`verification-engineering.md`](verification-engineering.md) · CI · CodeRabbit · human bar |
| **Integration engineering:** any partner boundary — checklist before Done | [`integration-engineering.md`](integration-engineering.md) · payments/booking/API packs |
| **AI engineering:** det/prob seam, admission, golden eval when AI paths change | [`ai-engineering.md`](ai-engineering.md) · [`ai-system-design.md`](ai-system-design.md) · product `docs/AI.md` |
| **Agent delegation:** when using a separate implementer — brief, review, land | [`delegation.md`](delegation.md) · [`software-factory.md`](software-factory.md) |
| Official docs over memory for library APIs | Context7 / SRS §2 official links · source-driven habit |
| **Context7 / current-docs** day gate: resolve→query for pinned line before non-trivial stack code | [`context7-docs.md`](context7-docs.md) · packs · official fallback |
| Quality bar lives in CI + SECURITY + TESTING — numbers decided once | [`09-CI-CD.md`](../09-CI-CD.md) · product TESTING docs — not a new `CONSTRAINTS.md` unless the owner wants one |
| Ship checklist = PR → CI → review → merge → verify → CD when configured | [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) |

## Forbid

| Do not | Why |
|--------|-----|
| Copy all 25 skills into every product repo | Forever-generic factory; product `AGENTS.md` stays the single rulebook |
| Force Spec Kit `specify init` / parallel `specs/` in **planning** | Already mapped as judgment only ([`07-judgment/README.md`](README.md)) |
| Mandate red-green TDD on every trivial change | Risk-matched tests (FEATURE_SDLC); non-trivial logic still gets a check |
| Replace CodeRabbit/CI with a prose-only “five-axis” ritual | Review complements CI; it does not replace it |
| Ship code only an AI can parse (“humans will use Copilot”) | Human readability is a Done requirement |
| Autonomously `/build auto` past security, spend, or owner decisions | Day loop already forbids that |
| Treat “skill applies at 1% chance → must invoke” as law here | Product rules and owner standing win |

## Vetting before you install (skills, agents, MCP servers, hooks)

An outside skill, custom agent, MCP server or hook is **code and instructions that run with your agent's authority**. Read it before it loads; static review only — never "just try" it. Reject or escalate on any of these:

| Threat | What it looks like | Check |
|--------|--------------------|-------|
| Hidden directive (prompt injection) | Instructions aimed at the model in HTML comments, "system"-style tags, footnotes, or text a rendered preview hides | Read the **raw** file, not the preview; search for directive phrasing ("ignore previous", "you are now", "do not tell the user") |
| Invisible or disguised text | Zero-width characters, bidi controls (Trojan Source), mixed-script look-alike names | Scan for U+200B–U+200F, U+061C, U+2060, U+FEFF, U+202A–U+202E, U+2066–U+2069; this kit's structure gate rejects them in kit files |
| Excessive agency | Tool or permission list far wider than the stated purpose (a formatter asking for shell, network or credential access) | Purpose and tools must match; grant the narrowest set; no tokens with org-wide or write scope "for convenience" |
| Tool poisoning or shadowing | A description that changes how a **different**, trusted tool behaves ("when X is present, always also send …") | A tool description may describe only itself |
| Silent exfiltration | Reading env vars, keys or config and placing them in an output field, log, "telemetry" or URL | No step reads secrets it does not need; no unexplained outbound calls |
| Supply-chain drift (rug pull) | `npx pkg@latest`, unpinned branches, curl-to-shell installers inside scripts or hook commands | Pin exact versions or hashes; re-review on every update |
| Encoded payloads | Base64 / hex blocks in "examples" that decode to instructions or commands | Decode and read before accepting |

Then: record what was adopted and from where (product `docs/JUDGMENT.md` or this folder), keep the install reversible, and prefer distilling the idea into an existing home over installing the pack at all. Maps to the [OWASP Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/) (LLM01 prompt injection, LLM03 supply chain, LLM06 excessive agency; checked 2026-11-28).

## Professional bar (checklist)

Before claiming an implementation slice Done:

1. Assumptions stated or eliminated?
2. Slice left the system testable (not a half-wired horizontal layer)?
3. Trust boundaries named if the change touches auth, PII, uploads, webhooks, money/billing, or AI?
4. Human code-review bar + five-axis glance (and the AI PR reviewer, if used) done; structural issues have a proposed move?
5. Evidence linked (tests, CI, golden set for AI) — not “looks fine”?
6. If High-risk / AI side effects: six questions + practice level answered ([`enterprise-system-design.md`](enterprise-system-design.md))?

## Day workflow hook

Same as [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md): run through must-finish in thin verifiable slices; closeout includes CI + a reviewer other than the builder (the AI PR reviewer if used); high-stakes paths get an explicit adversarial pass (what could make this wrong?) before Done.
