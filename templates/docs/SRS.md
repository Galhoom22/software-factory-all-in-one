# Software Requirements Specification (SRS) — {{PRODUCT}}

> ⚠️ **Planning only.** This repository is for product planning only. It is **not** the implementation repository.

| Field | Value |
|-------|-------|
| Document | Software Requirements Specification |
| Product | {{PRODUCT}} (current actor: {{CURRENT_ACTOR}}) |
| Status | Draft |
| Source of truth | [`requirements.md`](../requirements.md) |
| Related | [`BRD.md`](BRD.md), [`PRD.md`](PRD.md), [`02-DELIVERY.md`](02-DELIVERY.md) |

---

## 1. Introduction

### 1.1 Purpose

This document specifies **how** the **current actor** ({{CURRENT_ACTOR}}) must behave technically at production quality ([`02-DELIVERY.md`](02-DELIVERY.md)): architecture, functional and non-functional requirements, data model, and API outline. There is no MVP delivery mode.

### 1.2 Definitions

| Term | Meaning |
|------|---------|
| {{TERM}} | {{MEANING}} |

## 2. Technology Stack

This table is the **single source of truth for versions and official documentation**. Always use the latest **stable / Active LTS** release of the listed version line (not RCs or tomorrow’s majors), and read the official reference, not tutorials or AI memory.

| Layer | Technology | Version | Official reference | Owner |
|-------|-----------|---------|--------------------|-------|
| Frontend framework | {{FRONTEND}} | {{VERSION}} | {{OFFICIAL_DOCS_URL}} | FE |
| Frontend runtime | Node.js | {{NODE_LTS}} (Active LTS) | {{NODE_DOCS_URL}} | FE |
| Backend framework | {{BACKEND}} | {{VERSION}} | {{OFFICIAL_DOCS_URL}} | BE |
| Database | {{DATABASE}} | {{VERSION}} | {{OFFICIAL_DOCS_URL}} | BE |

Version notes (verified {{MONTH YEAR}}):
- Why each version was chosen, and when to move to the next one.
- Pin CI (`actions/setup-node`, `impeccable@x.y.z`, and similar) to the same lines; Dependabot updates pins afterwards.
- Libraries proposed in the architecture documents are proposals until they are added here with a verified version.

## 3. System Architecture

```text
Browser ──HTTPS──> Frontend ──JSON API──> Backend ──> Database
```

- The frontend handles UI only; the backend owns all business logic and data.
- Detailed proposals: [frontend architecture](frontend/ARCHITECTURE.md) and [backend architecture](backend/ARCHITECTURE.md).

## 4. Functional Requirements

Each requirement traces to a PRD feature (F-xx). **Owner**: **BE** = backend developer, **FE** = frontend developer, **Both** = backend provides the data or endpoint and frontend builds the screen, connected through [`API_CONTRACT.md`](API_CONTRACT.md).

### 4.1 {{AREA}} (F-01)

| ID | Requirement | Owner |
|----|-------------|-------|
| FR-01 | The system shall {{BEHAVIOR}}. | Both |

## 5. Non-Functional Requirements

| ID | Requirement | Owner |
|----|-------------|-------|
| NFR-01 | Secrets come from environment configuration only, never from code or the repository. | Both |
| NFR-02 | Logs never contain passwords, tokens, or personal data. | BE |
| NFR-03 | Every screen meets WCAG 2.2 AA. | FE |
| NFR-04 | The interface is available in {{UI_LANGUAGES}}, with a language switch on every screen. | FE |

## 6. Data Model (Conceptual)

| Entity | Key fields | Belongs to |
|--------|-----------|------------|
| User | id, email, locale | — |

## 7. API Outline

The endpoint list lives only in [`API_CONTRACT.md`](API_CONTRACT.md).

## 8. Background Processing

*Optional:* queued jobs, AI pipeline, imports, exports, and how the frontend follows their status.

## 9. Open Decisions

| Topic | Options | Decide by |
|-------|---------|-----------|
| {{TOPIC}} | {{OPTIONS}} | {{DATE}} |

Once decided, an open decision moves to [`DECISIONS.md`](DECISIONS.md).

## 10. Traceability

| Business requirement | PRD feature | Functional requirements |
|----------------------|-------------|-------------------------|
| BR-01 | F-01 | FR-01 |
