# My project requirements (example — copy to repo root as `my-project-requirements.md`)

Replace this example with your real product. Incomplete sections are fine. Write in any language; the agent will keep planning docs in English unless you set another reply language in standing preferences.

## Working title

Acme Planner

## One-sentence vision

A bilingual planning workspace for small product teams to turn ideas into a shared, actionable plan.

## Problem

Teams lose decisions in chat. Specs drift from what ships. New teammates cannot see why a choice was made.

## Who it is for

- Primary actor: product lead at a 2–10 person software team  
- Secondary (later): engineer who executes the plan  

## Markets and languages

- Launch market: Egypt  
- UI languages: Modern Standard Arabic + English, with a language switch on every screen (RTL for Arabic)

## Core flow (as I imagine it today)

1. Sign in  
2. Create or open a project  
3. Capture requirements and decisions  
4. Share a read-only plan with the team  
5. Export or hand off to implementation repos  

## Must-have features (current actor)

- Email sign-in; Google optional if cheap enough  
- Account settings, sign-out, data download, account delete  
- Project list + one project workspace  
- Requirements notes that stay the source of truth  
- Decision log (why we chose X)  
- Empty states for “no projects yet”

## Nice-to-have / later

- Mobile apps  
- Second actor: client reviewer portal  

## Constraints and preferences

- Stack preference (optional hint only): e.g. Next.js + Laravel — agent must still **advise** from these requirements (`software-factory-all-in-one/07-judgment/stack-selection.md`); no universal default stack  
- Hosted checkout only if we take payments (payments may be “later”)  
- No real personal data in prototypes or sample content  
- Private GitHub repos  

## Out of scope for now

- Marketplace of templates sold to strangers  
- On-prem enterprise install  

## Open questions / unknowns

- Exact pricing (if any)  
- Whether we need offline mode  

## Anything else

Keep the planning method simple. I will only maintain this file; the agent should build the rest of the planning repository from the playbook.
