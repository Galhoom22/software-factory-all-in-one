# OpenAI Codex — agent harness pack

**Pinned slice:** **Codex CLI + IDE / Desktop (project .codex/)** (checked **2026-11-23**).  
**Official home:** [OpenAI Codex](https://openai.com/codex/) · project `.codex/CLI.md`

**Region note:** Global (OpenAI availability).

Shared rules for every harness — the single rulebook, session habits and quality bar — are in [`../README.md`](../README.md).

## When to open this pack

- Running **Codex CLI**, IDE extension, or Desktop on a planning or implementation repo.

## Official references

Re-verify on the vendor site when bumping; prefer these over blogs.

| Topic | Official URL | Checked |
|-------|--------------|---------|
| OpenAI Codex product | https://openai.com/codex/ | 2026-11-23 |
| OpenAI platform / docs | https://platform.openai.com/docs | 2026-11-23 |

## How to drive it

- **Discovery pointer:** `.codex/` (config + hooks) + `AGENTS.md`. Prefer CLI from git root after trust.
- **Depth:** **full**. If thin: deepen from official docs before claiming high coverage %.

## Use these

- Start from repo root; trust project; approve hooks if prompted (`.codex/hooks.json`).
- Obey SessionStart rails; run verify script when documented.
- Small stages + Conventional Commits on planning repos.
- Use prompts in `05-PROMPTS.md` § Codex for first-session ok cue.

## Stop using

- Do not skip `.codex/` hooks “to save time.”
- Do not invent endpoints outside API_CONTRACT.
- Do not force-push or rewrite main history.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Starting CLI outside git root | cd to repo root before `codex` |
| Ignoring stop-check failures | Fix rails; re-run verify |
| Second constitution in chat | Point back to AGENTS.md |

## Product vs pack

- **Single rulebook:** product `AGENTS.md` (+ `docs/AGENT_START.md`) remains the only full constitution. This pack teaches **how to drive OpenAI Codex** so it obeys that rulebook.
- Discovery pointer: `.codex/` (config + hooks) + `AGENTS.md`. Prefer CLI from git root after trust.
- Do not fork a second rulebook inside this pack.
