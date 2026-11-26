# DeepSeek — best practices (playbook-aligned)

Defaults for agents **and** humans driving **DeepSeek** against this Engineering Playbook.

## 1. Load the single rulebook first

1. Open `docs/AGENT_START.md` (hard rails).
2. Open `AGENTS.md` (full rulebook).
3. Open this pack’s slice for harness-specific tips.
4. Never invent a parallel constitution in chat memory.

## 2. Session shape

- Prefer **one clear goal** per session (planning stage, or one implementation day must-finish).
- Keep large outputs as **paths + summaries** (context-window judgment).
- End with evidence: checks run, coverage/% touched, and an upstream pull request when you improved the factory.

## 3. Discovery pointer

Not an IDE — configure the host harness (Cursor/CLI) to use DeepSeek; still load AGENTS.md in that host.

## 4. Depth note

Pack depth: **skeleton**. If thin: deepen from official docs before claiming high coverage %.
