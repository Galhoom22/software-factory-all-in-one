# Publisher-Subscriber — relations

## Confused with

| Other | Note |
|-------|------|
| Observer (in-process) | See selector confusion pairs |
| Competing Consumers (competing on one queue) | See selector confusion pairs |

## Combines with

- **Idempotent Consumer** — common pairing; still open at most 1–3 packs
- **Claim Check** — common pairing; still open at most 1–3 packs
- **Choreography** — common pairing; still open at most 1–3 packs

## Alternatives

- Simpler list in applicability.md
- Related GoF shapes when the pain is in-process: [`design-patterns/`](../../design-patterns/README.md) via [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md)
- Enterprise boundary craft: [`07-judgment/enterprise-system-design.md`](../../07-judgment/enterprise-system-design.md)
