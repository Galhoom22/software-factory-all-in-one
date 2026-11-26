# Next.js — technology pack

**Pinned slice for new work in this pack:** **Next.js 16.4.x** (major **16**; npm `latest` checked **16.4.6** on 2026-11-23).  
**Official home:** [Docs](https://nextjs.org/docs) · [Getting Started](https://nextjs.org/docs/app/getting-started) · [Installation](https://nextjs.org/docs/app/getting-started/installation) · [Upgrading](https://nextjs.org/docs/app/getting-started/upgrading)

**Context7:** `/vercel/next.js` (prefer versioned IDs near **16.x** when available).

**Node:** `>=20.9.0` (re-check `engines` on npm `next`).

## When to open this pack

- Building or changing a **Next.js** app (App Router, Server/Client Components, routing, data, deploy).
- Aligning with **Next 16** conventions (including **Proxy** instead of the old Middleware file name).
- Avoiding Pages Router defaults and legacy data APIs in new App Router work.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated nextjs.org URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern Next defaults |
| [`quality.md`](quality.md) | Clean Code + architecture in Next form |
| [`nextjs-16/`](nextjs-16/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack is **Next.js framework** professionalism.
- Pair with [`../react/`](../react/README.md) for React 19 idioms; HTML/CSS/Tailwind/JS packs for fundamentals.
- Product SRS still owns the product pin (whatever the product SRS pins). Do not silently bump majors — ADR if the product line moves.
- Next is typically the **UI host** — keep AI keys / business entitlement on the backend unless the product architecture explicitly says otherwise.

## Related

- React: [`../react/`](../react/README.md) · Tailwind / JavaScript packs  
- Judgment: `07-judgment/context7-docs.md`, `seo-geo.md` for public pages  

---
