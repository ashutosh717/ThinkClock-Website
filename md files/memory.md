# Memory — running decision log

Purpose: this file is the project's persistent memory across "vibe coding" sessions. An AI agent (or contributor) starting a new session should read this file first, alongside `phases.md`, before writing code. Every session that makes a real decision (not a trivial styling tweak) should append to it — never rewrite history, only add.

How to use this file:
- Keep entries short and dated. State the decision and the one-line reason, not the whole discussion.
- If a decision made here is later reversed, add a new entry noting the reversal and why — don't delete the old entry.
- This is not a changelog of code commits — it's a log of *decisions*, especially ones that aren't obvious from reading the code alone (why FastAPI over Django, why Firebase vs AWS, why a field was renamed).

---

## Decisions log

### 2026-07-30 — Frontend stack: React (Next.js), not Vue
The two component libraries the founder wanted to use conflict: `inspira-ui` is Vue/Nuxt-only, `animate-ui` is React-only. Chose React/Next.js because it pairs more directly with the FastAPI backend's ecosystem tooling and has broader library support. `inspira-ui` is not used in this project. Revisit only if the whole frontend stack is intentionally rebuilt in Vue.

### 2026-07-30 — Backend: Python/FastAPI, Postgres via SQLAlchemy
Founder specified Python backend for auth, email notifications, careers, and database. FastAPI chosen over Flask/Django for async support and typed request/response contracts via Pydantic — fits a decoupled REST API consumed by a separate Next.js frontend.

### 2026-07-30 — Hosting: undecided (Firebase vs AWS)
Not blocking for Phase 0–3 (frontend build, backend scaffolding). Must be resolved before Phase 4 (auth) since Firebase Auth vs. a custom Cognito/Twilio OTP flow changes the auth implementation significantly. See trade-off table in `architecture.md`.

### 2026-07-30 — CMS: recommend headless CMS for job postings/team bios only
Marketplace/inventory data stays in the project's own Postgres tables (transactional, not editorial). Specific CMS product (Sanity/Payload/Directus) not yet chosen — decide in Phase 0.

### 2026-07-30 — Phase 1 typography roles implemented from design spec
Implemented explicit display/body/data font roles in the frontend (`Space Grotesk`, `IBM Plex Sans`, `IBM Plex Mono`) and wired them through global CSS tokens. This keeps technical data and headings visually distinct per `design.md`.

### 2026-07-30 — Phase 1 contact flow uses validated placeholder endpoint
Marketing contact form posts to a local placeholder route (`/api/contact-placeholder`) with Zod validation and explicit loading/success/error UI states. Real backend delivery and notification wiring remains in later phases.

### 2026-07-30 — Lenis scope constrained to marketing layout only
Enabled `lenis` only inside the marketing route group layout to preserve smooth-scroll direction in content pages while avoiding transactional UX friction in future configurator/account flows.

### 2026-07-30 — Phase 2 mock matching rules defined for inventory parity
The configurator matches mock cells by strict type equality, condition filter (`any/new/recycled`), voltage tolerance of ±0.25V, and minimum capacity floor at 90% of requested Ah. This rule set is now the reference behavior for Phase 3 backend endpoint parity.

### 2026-07-30 — Phase 2 configurator uses explicit interaction states
The Cell Store flow uses explicit `idle`, `loading`, `success`, and `error` states with user-visible guidance, including a no-match message that suggests widening ranges. This prevents silent failure behavior during search/match interactions.

### 2026-07-30 — Phase 2 route-level fallback added for marketplace
Added a route-level error boundary for `/marketplace` to surface actionable retry UX if the configurator page fails. This establishes the baseline fault-handling pattern for transactional route segments.

---

## Open items carried forward (check phases.md/PRD.md for full context)
- [ ] Final hosting decision (Firebase vs AWS)
- [ ] SMS/OTP provider choice and cost confirmation (Twilio vs MSG91)
- [ ] Headless CMS product choice
- [ ] Whether Cell Store inventory is real/live data or manually curated at launch

---

## Template for new entries

```
### YYYY-MM-DD — <short decision title>
<What was decided, one or two sentences. Why, one sentence. What it affects (files/phases), if relevant.>
```
