# Anti-Corruption Layer — relations

## Confused with

| Other | Note |
|-------|------|
| Adapter (GoF — one interface wrap) | See selector confusion pairs |
| Strangler Fig (migration strategy) | See selector confusion pairs |

## Combines with

- **Strangler Fig** — common pairing; still open at most 1–3 packs
- **Messaging Bridge** — common pairing; still open at most 1–3 packs
- **Gateway Offloading** — common pairing; still open at most 1–3 packs

## Alternatives

- Simpler list in applicability.md
- Related GoF shapes when the pain is in-process: [`design-patterns/`](../../design-patterns/README.md) via [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md)
- Enterprise boundary craft: [`07-judgment/enterprise-system-design.md`](../../07-judgment/enterprise-system-design.md)
