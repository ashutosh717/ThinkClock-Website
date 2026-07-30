# Rules — coding guardrails for this project

These rules exist so an AI coding agent (or any contributor) makes consistent decisions without re-litigating them every session. Read this before generating code. When a request conflicts with this file, this file wins unless the user explicitly overrides it in that session.

## 1. Stack — use only these

**Frontend**
- Next.js (App Router) + React + TypeScript. No JavaScript files — everything is `.ts`/`.tsx`.
- Tailwind CSS for styling. No CSS-in-JS libraries (styled-components, emotion).
- `shadcn/ui` + `animate-ui` for components. Extend/compose these before reaching for a new UI library.
- `lenis` for smooth scroll — only on marketing pages, never inside forms, the configurator, or account/dashboard screens (motion-heavy scroll hijacking on transactional UI hurts usability).
- React Hook Form + Zod for all forms and validation — no uncontrolled ad-hoc form state.
- TanStack Query for all server-state fetching — no raw `useEffect` + `fetch` data-loading patterns.

**Backend**
- Python 3.11+, FastAPI, Pydantic v2, SQLAlchemy 2.x, Alembic for migrations.
- `fastapi-users` or `authlib` for auth — do not hand-roll password/token/OTP cryptography.
- `httpx` for any outbound HTTP calls (email/SMS providers) — not `requests` (keep async-consistent).

## 2. Explicitly avoid

- **`inspira-ui`** — Vue/Nuxt only, incompatible with the React stack. Do not install it into the Next.js app. (If the project ever pivots to Vue/Nuxt, revisit this file entirely — it's a different stack, not an add-on.)
- No jQuery, no Bootstrap (the old site's stack) — do not reintroduce either even for "quick fixes."
- No client-side-only auth (no storing tokens in `localStorage`/`sessionStorage`) — httpOnly cookies only.
- No direct frontend-to-database calls of any kind — everything goes through the FastAPI API.
- No hand-written SQL string concatenation — SQLAlchemy ORM/Core with parameter binding only, to close off SQL injection by construction.
- No committing secrets, API keys, or `.env` files to the repo — use `.env.local` (frontend) and `.env` (backend), both gitignored, with a checked-in `.env.example`.
- No new npm/pip dependency added without checking it's actively maintained (recent commits, no critical open CVEs) — don't add a library for a one-off need that Tailwind/React/FastAPI already covers.
- Don't build a custom admin CMS UI from scratch for job postings/team bios — use the headless CMS decided in `architecture.md`.

## 3. Error handling & boundaries (for AI-assisted development specifically)

- **Every API route must validate input with a Pydantic schema and return typed error responses** (consistent `{ "error": { "code": ..., "message": ... } }` shape) — no bare 500s with stack traces exposed to the client.
- **Every form submission must handle three states explicitly**: loading, success, error — no silent failures. Error messages describe what happened and what to do next, in the interface's voice (see `design.md` for tone).
- **Frontend**: wrap route segments that can fail (data fetching, the configurator, account pages) in React Error Boundaries with a real fallback UI, not a blank screen.
- **File uploads (resumes)**: validate file type and size *before* generating an upload URL, both client-side (fast feedback) and server-side (source of truth — never trust the client-side check alone).
- **Auth/OTP endpoints**: rate-limit by IP and by target email/phone to prevent OTP-spam abuse. This is a security boundary, not a nice-to-have — implement it in Phase 4, not "later."
- **When an AI agent is uncertain about a schema, endpoint contract, or a decision already made elsewhere in the project, it must check `memory.md` and the relevant phase in `phases.md` before inventing a new pattern.** If still unresolved, it should flag the ambiguity to the user rather than silently picking an approach that could conflict with existing code.
- **Do not silently change an established API contract** (route shape, field names) to make a new feature easier — if a change is needed, call it out explicitly since the frontend depends on it.

## 4. Process rules for AI-assisted ("vibe coding") sessions

- Before writing code for a new feature, check `phases.md` to confirm it's in scope for the current phase — don't build Phase 5 features while on Phase 2.
- After any significant decision (library choice, schema change, API contract), log it in `memory.md` so future sessions don't re-derive or contradict it.
- Prefer editing/extending existing components over creating parallel near-duplicates ("Button2.tsx") — search the codebase first.
- Keep commits/PRs scoped to one phase or one feature — don't bundle unrelated frontend and backend changes together, since they may ship on different timelines depending on the hosting decision.
