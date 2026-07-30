# Phases — ThinkClock Website v2 build plan

Each phase should be shippable/demoable on its own. Don't start a phase until the prior one's exit criteria are met. Log any deviation in `memory.md`.

## Phase 0 — Setup & decisions
**Goal**: repo, tooling, and open decisions locked in.
- Scaffold `frontend/` (Next.js + TS + Tailwind + shadcn/animate-ui) and `backend/` (FastAPI) per `architecture.md`.
- Set up local Postgres, Alembic baseline migration.
- Resolve: headless CMS choice, SMS/OTP provider, hosting direction (Firebase vs AWS) — doesn't need to be final, but a working assumption is needed before Phase 4.
- Set up environment config (`.env.example`), linting/formatting (ESLint/Prettier, ruff/black), CI basics (lint + build on push).
- **Exit criteria**: `npm run dev` and `uvicorn app.main:app --reload` both run locally with a hello-world route each.

## Phase 1 — Marketing site (static content, no backend dependency)
**Goal**: Home, Technology, About, Contact pages live, matching current ThinkClock positioning (BatteryScope, CellScope, Digital Twins, EIS/Acoustic/RF spectroscopy, leadership bios).
- Build with the design direction from `design.md`.
- Content sourced from current site + updated to reflect BatteryScope/CellScope (the current site undersells these — pull language from About/Technology pages and leadership bios already gathered).
- Contact form posts to a placeholder endpoint (real wiring happens in Phase 6).
- **Exit criteria**: all marketing pages responsive, deployed to a preview URL, Lighthouse performance/accessibility scores reasonable (>85).

## Phase 2 — Cell Store / Battery Configurator (frontend, mocked data)
**Goal**: rebuild the interactive configurator as a real component, not a template widget.
- Voltage/capacity inputs, cell-type selector, new-vs-recycled toggle, matched-cell results table — using mocked/static inventory data.
- **Exit criteria**: configurator fully interactive and visually matches `design.md`, but not yet wired to a live backend.

## Phase 3 — Backend foundation
**Goal**: FastAPI service with DB models and core CRUD, no auth yet.
- Models: `User`, `JobPosting`, `Application`, `CellInventoryItem`, `ContactSubmission`.
- CRUD endpoints for job postings and cell inventory (read-only from frontend's perspective at this stage).
- Wire Phase 1's contact form and Phase 2's configurator to real endpoints.
- **Exit criteria**: contact form submissions land in the DB; configurator reads real (even if sparse) inventory data.

## Phase 4 — Auth & accounts
**Goal**: email/phone login working end-to-end.
- OTP flow (email and/or phone, per Phase 0 decision), JWT issuance, httpOnly cookie session.
- Account area: profile, saved configurations.
- Rate limiting on OTP endpoints (see `rules.md`).
- **Exit criteria**: a new user can sign up via OTP, stay logged in across a session, and see a saved configuration tied to their account.

## Phase 5 — Careers & applications
**Goal**: full application flow.
- Job listing + detail pages pulling from CMS or backend (per Phase 0 decision).
- Application form: resume upload (signed URL to object storage), applicant info, submission.
- Application-status view in the logged-in account area.
- Transactional emails: application received, status changed.
- **Exit criteria**: a candidate can apply, receive a confirmation email, and see their application status when logged in.

## Phase 6 — Notifications & polish
**Goal**: all transactional email flows complete; error/loading states finished per `rules.md`.
- Email templates: account created, contact form received (to team + sender), application received/updated, configuration/order confirmation.
- Error boundaries and empty/loading states across all pages.
- Basic analytics wired (demo requests, applications, marketplace inquiries as tracked events).
- **Exit criteria**: no silent failure states anywhere in the app; every user-facing action has a confirmation.

## Phase 7 — Hosting, hardening, launch
**Goal**: production deployment on the chosen stack (Firebase or AWS, per Phase 0).
- Domain/DNS cutover plan from the old site.
- Environment secrets in production, backups for Postgres, monitoring/alerting for the backend.
- Security pass: rate limiting, CORS config, dependency audit.
- **Exit criteria**: production site live at thinkclock.com, old site content fully migrated or intentionally retired.

## Later / not in this plan
- Live BatteryScope customer dashboard (product, not marketing site).
- Marketplace payments/checkout.
- Multi-language support.
