# ThinkClock Website v2 — Copilot instructions

You are working in the ThinkClock Battery Labs website rebuild. Before writing any code, read these files in `md files/`:
- `PRD.md` — what we're building and for whom
- `architecture.md` — tech stack, folder structure, hosting trade-offs
- `rules.md` — what to use/avoid, and mandatory error-handling patterns
- `phases.md` — the current build phase and its exit criteria
- `design.md` — visual direction (palette, type, motion) for any UI work
- `memory.md` — decisions already made; check before re-deciding anything

## Non-negotiable rules (full detail in `rules.md`)
- Stack is React/Next.js (App Router) + TypeScript + Tailwind + `shadcn/ui` + `animate-ui`. Do **not** suggest or install `inspira-ui` — it's Vue-only and incompatible with this stack.
- Backend is Python/FastAPI + SQLAlchemy + Postgres. No Django/Flask suggestions.
- No `localStorage`/`sessionStorage` for auth tokens — httpOnly cookies only.
- Frontend never queries the database directly — always through the FastAPI REST API.
- Every API route: Pydantic validation in, typed error response out. Every form: explicit loading/success/error states. No silent failures.
- Don't add a new dependency without checking `rules.md` first — most needs are already covered by the chosen stack.

## Workflow
- Only build what the **current phase** in `phases.md` covers. If a request would jump ahead to a later phase, say so before proceeding.
- If a decision isn't covered by these docs (a new library, a schema choice, an API contract change), flag it — don't invent silently.
- After any non-trivial decision, remind me to log it in `memory.md` (you can draft the entry, but don't edit the file without confirmation).
- Match UI work to `design.md` — the EIS Nyquist-curve motif, the color tokens, and the type roles (display / body / mono-for-data) are intentional, not placeholders.

## Current phase
> **Active phase: Phase 3 — Backend foundation**
