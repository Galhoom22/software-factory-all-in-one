# API Contract — {{PRODUCT}}

> ⚠️ **Planning only.** This repository is for product planning only. It is **not** the implementation repository.

| Field | Value |
|-------|-------|
| Document | API Contract (frontend ↔ backend) |
| Product | {{PRODUCT}} |
| Status | Draft |
| Consumers | {{FRONTEND}} frontend |
| Provider | {{BACKEND}} API |
| Source of truth | [`requirements.md`](../requirements.md), [`SRS.md`](SRS.md) |

This document is the single agreement between the frontend and backend. Any change to an endpoint, field, or error is made **here first**, then implemented on both sides. It is the only endpoint list; [SRS §7](SRS.md#7-api-outline) points here.

---

## 1. Conventions

| Topic | Rule |
|-------|------|
| Base URL | `/api/v1` |
| Format | JSON, UTF-8. |
| Field names | Follow the backend framework's default (for example `snake_case`). |
| IDs | Opaque strings; the frontend never parses or builds them. |
| Timestamps | ISO 8601 in UTC. |
| Nullability | Optional fields are always present with `null`, never omitted. |
| Localization | `Accept-Language` selects the language of validation and error messages. |
| Versioning | Breaking changes need `/api/v2`; additive changes are allowed, and the frontend ignores unknown fields. |

### 1.1 Response Envelope

Use the framework's default resource format; no custom envelope.

### 1.2 Errors

| HTTP | `code` | When |
|------|--------|------|
| 401 | `unauthenticated` | Not signed in or session expired. |
| 403 | `forbidden` | Not allowed. |
| 404 | `not_found` | Does not exist or is not visible to the user. |
| 422 | `validation_failed` | Field validation errors. |
| 429 | `rate_limited` | Too many requests; respect `Retry-After`. |
| 500 | `server_error` | Unexpected error; show a retry option. |

Error messages never contain personal data or internal details.

## 2. Authentication

How the frontend signs in and sends credentials (prefer HTTP-only cookie sessions over tokens in browser storage).

## 3. Data Types

<!-- One block per type, exactly as the API returns it. Prototype mocks copy these shapes. -->

## 4. Endpoints

### 4.1 {{AREA}} (F-01)

| Method | Path | Body | Success |
|--------|------|------|---------|
| GET | `/{{resource}}` | — | `200` |

## 5. Main Flow (sequence)

1. The ordered calls of the core user flow.

## 6. Ownership and Working Agreement

| Topic | Backend developer | Frontend developer |
|-------|-------------------|--------------------|
| This contract | Drafts new or changed endpoints | Reviews and approves before implementation |
| Validation | Authoritative, server-side | UX only, shows `422` errors |
| Business rules | Implements all of them | Never re-implements them |
| Mock data | Provides example responses | Builds screens on mocks until the endpoint is live |

### 6.1 Change Process (contract-first)

1. Whoever needs a change opens a pull request that edits **this file only**.
2. The other developer approves it. No code is written against an unapproved change.
3. Both implement in parallel: the backend builds the endpoint; the frontend builds against mocks in the new shape.
4. Integrate, run the main flow (§5) end to end, then remove the mock.
