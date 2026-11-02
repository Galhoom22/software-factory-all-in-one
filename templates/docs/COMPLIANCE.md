# Compliance Requirements — {{PRODUCT}}

> ⚠️ **Planning only.** This repository is for product planning only. It is **not** the implementation repository.

> ⚖️ **Not legal advice.** This file lists the obligations found while planning. A lawyer in each launch market reviews it before launch.

| Field | Value |
|-------|-------|
| Document | Compliance Requirements |
| Status | Draft |
| Markets | {{MARKETS}} |
| Related | [`requirements.md`](../requirements.md), [`SECURITY.md`](SECURITY.md) |

Every page, feature, and document must satisfy this file and [`SECURITY.md`](SECURITY.md). When the two overlap, apply the stricter rule.

---

## 1. Red Lines (Never Violate)

| ID | Rule |
|----|------|
| RL-01 | Collect and process personal data only with a lawful basis, and only what the product needs. |
| RL-02 | Never sell user data or use it for model training without explicit, separate consent. |
| RL-03 | Never store or process card data; payments stay on the provider's hosted page. |
| RL-04 | Never make exaggerated or unverifiable claims, or show fabricated reviews or metrics. |
| RL-05 | Cancelling a subscription is as easy as starting it. |

## 2. Applicable Laws by Market

| Market | Law | Key obligations |
|--------|-----|-----------------|
| {{MARKET}} | {{LAW}} | {{OBLIGATIONS}} |

Launch in a market only after its row is reviewed.

## 3. Data Protection Obligations

| ID | Rule | Owner |
|----|------|-------|
| DP-01 | Consent is explicit, separate per purpose, and never pre-checked. | Both |
| DP-02 | Users can download their data and permanently delete their account themselves. | Both |
| DP-03 | Retention periods are defined for every kind of data. | BE |

## 4. Vendor Requirements

- Every sub-processor has a signed data processing agreement and is listed publicly.

## 5. Consumer Protection, Subscriptions, and Payments

| ID | Rule | Owner |
|----|------|-------|
| CP-01 | Show the full price, period, taxes, and renewal terms before payment. | FE |
| CP-02 | No dark patterns: no hidden costs, fake urgency, or confirm-shaming. | FE |

## 6. Marketing and Cookies

- Marketing messages only with opt-in consent; every message has a one-click unsubscribe.
- Essential cookies only by default; no analytics before consent.

## 7. Intellectual Property and Licensing

- Every font, icon, image, and library is licensed for commercial use.

## 8. Accessibility

- WCAG 2.2 AA on every page.

## 9. Legal Documents Required Before Launch

- Terms of service, privacy policy, cookie policy, refund policy, company information, sub-processor list.

## 10. Pre-Launch Compliance Checklist

- [ ] Every market's laws reviewed by a lawyer.
- [ ] Legal documents published and linked from every public page's footer.
- [ ] Data processing agreements signed with every vendor.
