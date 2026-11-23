# Working with sibling surfaces

Fill this in each **implementation** repository. Planning remains the product SoT; this page is the seat-facing summary so agents do not guess how the other side consumes this code.

Method: playbook [`07-judgment/cross-surface-compatibility.md`](../../07-judgment/cross-surface-compatibility.md).

## One-sentence boundary

{{THIS_SIDE_OWNS}}. {{OTHER_SIDE_OWNS}}. The handshake is {{SHARED_CONTRACT_PATH}} — change that document (with the sibling owner) **before** coding a new field, path, or event.

## Topology for this product

| Fact | Implication for this seat |
|------|---------------------------|
| {{TOPOLOGY — e.g. separate FE/BE repos / monorepo apps / services}} | {{WHAT THIS SEAT MUST NOT BREAK}} |
| Auth / transport | {{COOKIES, CORS, TOKENS, MESSAGE BUS — as applicable}} |
| Local URLs (after both sides exist) | {{THIS_URL}} ↔ {{SIBLING_URL}} |

## Module / feature map (optional table)

| This seat | Sibling seat | Notes |
|-----------|--------------|-------|
| {{MODULE_OR_PACKAGE}} | {{FEATURE_OR_SERVICE}} | {{CONTRACT_SLICE}} |

## Compatibility habits

- Stable shapes and error `code` strings from the shared contract.
- Never invent endpoints/fields outside the contract.
- Before Done: **read** sibling client/mocks/types (or consumers); confirm today’s change still matches.
- **Write boundary:** this chat edits **only this repository** unless product `docs/OWNER_STANDING.md` assigns write access elsewhere. Sibling trees are read-only for verification.

## How to request a cross-surface change

1. Edit the shared contract in planning (or the monorepo contract package) with the sibling owner.
2. Merge / land the contract first.
3. Implement on this seat with tests; sibling wires against the contract.
4. Keep tracker pairing keys in sync.

## What this seat must **not** do

- Put the other seat’s business rules “for speed”
- Edit sibling source to force a green demo
- Ship breaking JSON/events without a paired Story on the other seat
- Hit live sibling environments with real personal data

## Sibling docs to open when stuck

- Sibling repo README / `docs/SIBLING.md` / `docs/LOCAL.md`
- Planning contract + SECURITY + architecture for this seat
