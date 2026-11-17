# References register — what we borrow from and depend on

Single source of truth for every **external** source that shaped {{PRODUCT}}: competitors, UI kits, templates, icon sets, fonts, packages, and agent methods.

**Rule:** any time an idea, pattern, asset, or dependency is taken from outside, add or update its row here **in the same commit**. Record what was taken, where it landed, and what was **rejected** so the next pass does not re-evaluate it from scratch.

Product locks and Governing Product Rules always win. A reference is inspiration, never authority.

## 1. Competitors and peer products

| Source | Market | Date studied | Taken (where it landed) | Rejected (why) | Commit |
|--------|--------|--------------|-------------------------|----------------|--------|
| {{COMPETITOR_OR_PEER}} | {{MARKET}} | YYYY-MM-DD | … | … | `abc1234` |

## 2. UI kits, templates, and design references

| Source | Role here | Taken | Rejected | Commit |
|--------|-----------|-------|----------|--------|
| {{UI_KIT_OR_TEMPLATE}} | Locked shell / visual reference only | … | … | … |

## 3. Icons, fonts, assets

| Source | Version | Use | Notes |
|--------|---------|-----|-------|
| {{ICON_OR_FONT}} | … | … | … |

## 4. Stack and packages

| Package | Version | Why |
|---------|---------|-----|
| {{PACKAGE}} | … | … |

## 5. Agent methods and skills (subordinate — judgment only)

| Source | Adopted as | Never |
|--------|------------|-------|
| {{METHOD_OR_SKILL}} | Checklist / judgment note path | Installing it as a competing constitution |
| AI system design guide (staff patterns) | `docs/AI.md` / `SECURITY.md` LM / FEATURE_SDLC AI module; playbook `07-judgment/ai-system-design.md` | Full guide tree, interview banks, rotating price tables |
| SAD / ADR best-practice templates (C4 + Mermaid) | `DECISIONS.md` shape + FE/BE architecture views; playbook `07-judgment/sad-adr.md` | Copying full SAD examples or multi-language template trees |
| Agent skills packs (lifecycle engineering) | Day closeout review axes + incremental slices; playbook `07-judgment/agent-skills.md` | Full pack install as AGENTS; autonomous build past owner gates |
| Payment-provider Agents / security / webhooks / sandboxes docs | `SECURITY.md` WH, `COMPLIANCE.md` CP, BE TESTING, playbook `07-judgment/payments.md` | Product catalog dump; Connect/Issuing/Treasury unless the product needs them |
| Playwright docs (intro, best practices, CI, accessibility) | FE `TESTING.md`, FE CI, playbook `07-judgment/playwright-e2e.md` | Exhaustive PR E2E; untrusted report uploads with secrets |

Read this file **before** a new borrowing pass.
