# Throttling — trade-offs

## Pros

- Addresses a named distributed-systems pain with a shared vocabulary.
- Encourages explicit failure and capacity thinking.
- Composes with related patterns in relations.md.

## Cons

- More moving parts and operational surface.
- Easy to cargo-cult without an ADR.
- Wrong pattern family worsens latency or consistency.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Extra services/queues/config |
| Indirection | Harder request traces |
| Performance | Often helps under load; can add hops |
| Testability | Needs failure injection |

## Common misuse

- Selecting by technology fashion instead of problem match.
- Skipping simpler platform features.
- No alerts on the degraded mode the pattern introduces.

## Review checklist

1. Problem sentence matches this pack's intent?
2. Simpler alternative rejected with reason?
3. Failure modes listed and tested?
4. Confused-with patterns considered?
5. ADR recorded for consequential change?
6. Forever-generic — no private product facts in kit copies?
