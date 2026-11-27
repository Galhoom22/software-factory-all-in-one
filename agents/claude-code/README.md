# Claude Code — agent harness pack

**Pinned slice:** **Claude Code CLI (CLAUDE.md pointer + optional machine defaults)** (checked **2026-11-27**).  
**Official home:** [Claude Code docs](https://code.claude.com/docs/en/overview) (re-verify)

**Region note:** Global (Anthropic availability).

Shared rules for every harness — the single rulebook, session habits and quality bar — are in [`../README.md`](../README.md).

## When to open this pack

- Using **Claude Code** CLI or Anthropic coding harness on this repo.

## Official references

Re-verify on the vendor site when bumping; prefer these over blogs.

| Topic | Official URL | Checked |
|-------|--------------|---------|
| Claude Code docs | https://code.claude.com/docs/en/overview | 2026-11-27 |
| Anthropic docs hub | https://docs.anthropic.com/ | 2026-11-23 |

## How to drive it

- **Discovery pointer:** Root `CLAUDE.md` → `@docs/AGENT_START.md` + `@AGENTS.md`.
- **Depth:** **full**. If thin: deepen from official docs before claiming high coverage %.

## Use these

- Keep project `CLAUDE.md` a thin pointer only.
- Prefer long-running harness habits: one feature / clean commit / progress outside chat.
- Use Skills only when they map to factory judgment — do not vendor a second constitution.
- **Machine defaults layer (optional, local):** keep a user-level craft home (rules + skills + MCP inventory) outside the repo, then sync into Claude’s user dirs (`~/.claude/rules/`, `~/.claude/skills/`, user-scope MCP). Project `AGENTS.md` stays the product constitution; machine defaults only supply cross-product craft (least-code bar, English replies, current-docs MCP). Never commit user MCP tokens or product-private paths into this kit.

## Stop using

- Do not paste a third-party skills pack as AGENTS.md.
- Do not wrap Antigravity / other logins in ways that violate third-party ToS.
- Do not publish personal MCP secrets or machine-absolute private paths in this pack.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Forking rules into CLAUDE.md | Keep pointer; edit AGENTS.md |
| Huge chat dumps as SoT | Use handoff + git |
| Expecting Claude to see Cursor-only skills | Junction or pointer into `~/.claude/skills/` / project `.claude/skills/` |
| Copying MCP bearer tokens into the kit | Keep tokens in user-scope config or env vars only |

## Product vs pack

- **Single rulebook:** product `AGENTS.md` (+ `docs/AGENT_START.md`) remains the only full constitution. This pack teaches **how to drive Claude Code** so it obeys that rulebook.
- Discovery pointer: Root `CLAUDE.md` → `@docs/AGENT_START.md` + `@AGENTS.md`.
- Do not fork a second rulebook inside this pack.

