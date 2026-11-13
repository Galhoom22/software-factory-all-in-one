# Scope and rejections (REJ-xx)

Stable IDs for **out of scope**, **deferred**, and **won-forever** decisions. Agents must be able to answer a scope question from **this file alone**.

Cross-links: `requirements.md` (deferred / governing rules) · `docs/DECISIONS.md` · actor packs under `docs/actors/`.

## How to use

- Assign `REJ-01`, `REJ-02`, … once; never reuse an ID for a different meaning.
- **Won-forever** needs an explicit owner decision (and usually a DECISIONS entry) before it can be reopened.
- **Deferred** may move into a later actor or release when the owner promotes it — update this file in the same commit.

## Register

| ID | Status | Summary | Why | Reopen requires |
|----|--------|---------|-----|-----------------|
| REJ-01 | won-forever / deferred | {{SHORT_BAN}} | {{REASON}} | Owner + new decision / ADR |
| REJ-02 | deferred | {{SHORT_ITEM}} | Sequencing / market | Owner promotion into current actor |

Add rows as the product learns what it is **not**.
