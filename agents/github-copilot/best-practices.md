# GitHub Copilot — best practices (playbook-aligned)

Defaults for agents **and** humans driving **GitHub Copilot** against this Engineering Playbook.

## 1. Load the single rulebook first

1. Open `docs/AGENT_START.md` (hard rails).
2. Open `AGENTS.md` (full rulebook).
3. Open this pack’s slice for harness-specific tips.
4. Never invent a parallel constitution in chat memory.

## 2. Session shape

- Prefer **one clear goal** per session (planning stage, or one implementation day must-finish).
- Keep large outputs as **paths + summaries** (context-window judgment).
- End with evidence: checks run, coverage/% touched, mirror sync when playbook changed.

## 3. Discovery pointer

`.github/copilot-instructions.md` (+ optional `.github/instructions/`).

## 4. Depth note

Pack depth: **full**. If thin: deepen from official docs before claiming high coverage %.
