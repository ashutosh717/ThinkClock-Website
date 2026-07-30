# Architecture — ThinkClock Website v2

## 1. High-level shape

Decoupled frontend/backend:

```
[ Next.js frontend ]  <--REST/JSON-->  [ FastAPI backend ]  <--> [ PostgreSQL ]
        |                                      |
        |                                      +--> Email (transactional)
        |                                      +--> File storage (resumes, images)
        v
   Vercel / static hosting
```

Frontend and backend are separate deployables from day one, even though they'll likely be built by the same person — this keeps the Python backend swappable (Firebase Functions, AWS Lambda, a VM, whatever you land on) without touching the frontend.

## 2. Tech stack

### Frontend
- **Framework**: Next.js (React, App Router) — SSR/SSG for marketing pages (SEO matters for a company like this), client-side for the interactive configurator and account areas.
- **Styling**: Tailwind CSS.
- **Components/animation**: `animate-ui` (React + Tailwind + Motion + shadcn CLI) for interactive components; `shadcn/ui` as the underlying primitive layer.
- **Smooth scroll / scroll-driven motion**: `lenis` (darkroomengineering) for the marketing pages' scroll feel — used sparingly, not on every page (see `design.md`).
- **Note on `inspira-ui`**: this is a **Vue/Nuxt** library — incompatible with the React stack above. Not used in v1. If you decide you'd rather build in Vue/Nuxt instead of React, swap the whole frontend stack (`inspira-ui` + `lenis` + Nuxt) — don't try to mix Vue and React libraries in one app.
- **Forms**: React Hook Form + Zod validation.
- **State/data fetching**: TanStack Query for server state (configurator inventory, application status, etc).

### Backend
- **Framework**: FastAPI (Python) — async, strong typing via Pydantic, good fit for auth, background email jobs, and a REST API the frontend consumes.
- **Database**: PostgreSQL (via SQLAlchemy + Alembic for migrations).
- **Auth**: Email/phone login.
  - Email: magic-link or OTP via a transactional email provider (Resend / Postmark / SES).
  - Phone: OTP via Twilio or MSG91 (cost trade-off — confirm before committing, see PRD open questions).
  - JWT (short-lived access + refresh token) issued by FastAPI; avoid rolling fully custom crypto — use `fastapi-users` or `authlib` rather than hand-writing session/token logic.
- **File storage**: resumes/CVs and team/job images go to object storage (S3, or Firebase Storage if you go all-in on Firebase) — never store binary files in Postgres.
- **Background jobs**: email sending and any inventory-sync jobs should be async/queued (e.g. FastAPI `BackgroundTasks` for v1; move to a real queue like Celery/RQ only if volume demands it — don't over-engineer this at launch).
- **CMS for job postings/team bios**: pick one, don't build a custom admin UI for this in v1:
  - **Option A**: headless CMS (e.g. Sanity, Payload, or Directus) — team edits content visually, frontend fetches via API.
  - **Option B**: simple admin routes in the FastAPI app gated by an admin role — more work, more control.
  - Recommendation: Option A for job postings/team bios (low custom-logic content), keep the configurator/marketplace inventory in your own Postgres tables since that data is transactional, not editorial.

### Hosting (undecided — trade-offs)

| | Firebase | AWS |
|---|---|---|
| Frontend | Firebase Hosting, or just deploy Next.js to Vercel regardless | Vercel, Amplify, or S3+CloudFront |
| Backend (Python) | Cloud Functions/Cloud Run | Lambda (via Mangum) or a small EC2/ECS service |
| Auth | Firebase Auth handles phone/email OTP out of the box — least custom code | Build OTP flow yourself with Cognito or Twilio/SES — more control, more work |
| DB | Firestore (NoSQL — a real modeling shift from the relational plan above) or Cloud SQL (Postgres) | RDS Postgres — matches the SQLAlchemy plan above directly |
| File storage | Firebase Storage | S3 |
| Verdict | Fastest to ship auth; forces either NoSQL or an extra managed-Postgres decision | More setup work, but matches the Postgres/FastAPI plan with no rework |

**Recommendation**: if you want to move fast and don't have strong data-modeling needs yet, Firebase (Auth + Cloud Run + Cloud SQL) gets you there with less glue code. If you want the backend to stay portable and squarely Postgres/FastAPI-native, AWS (Lambda or ECS + RDS) is the cleaner long-term fit. This doesn't need to be decided before Phase 1–2 (frontend build) — resolve it before Phase 4 (auth/backend).

## 3. App flow (user-facing)

```
Visitor lands on Home
  → browses Technology / About (static, SSG)
  → Cell Store: configures battery → sees matched cells (reads from inventory API)
     → "Procure cells" / "Request analysis" → requires login → OTP → account created/found
  → Careers: browses roles → applies (form + resume upload) → confirmation email
     → can check application status when logged in
  → Contact: submits form → lead email to team + confirmation to sender
```

## 4. Folder structure (proposed)

```
thinkclock-web/
├── frontend/                      # Next.js app
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx           # Home
│   │   │   ├── technology/
│   │   │   ├── about/
│   │   │   └── contact/
│   │   ├── careers/
│   │   │   ├── page.tsx           # listing
│   │   │   └── [slug]/            # job detail + apply
│   │   ├── marketplace/           # Cell Store / configurator
│   │   ├── account/                # login, profile, saved configs, application status
│   │   └── api/                    # thin proxy routes only if needed (BFF), not business logic
│   ├── components/
│   │   ├── ui/                     # shadcn/animate-ui primitives
│   │   ├── marketing/
│   │   ├── configurator/
│   │   └── careers/
│   ├── lib/                        # api client, auth helpers, validation schemas
│   └── styles/
├── backend/                        # FastAPI app
│   ├── app/
│   │   ├── main.py
│   │   ├── api/
│   │   │   ├── auth.py
│   │   │   ├── users.py
│   │   │   ├── careers.py
│   │   │   ├── applications.py
│   │   │   ├── marketplace.py
│   │   │   └── contact.py
│   │   ├── models/                 # SQLAlchemy models
│   │   ├── schemas/                 # Pydantic schemas
│   │   ├── services/                # email, storage, OTP providers
│   │   ├── core/                    # config, security, db session
│   │   └── tasks/                   # background jobs (email, notifications)
│   ├── alembic/                     # migrations
│   └── tests/
├── PRD.md
├── architecture.md
├── rules.md
├── phases.md
├── design.md
└── memory.md
```

## 5. Key integration points

- Frontend never talks to the database directly — always through the FastAPI REST API.
- Auth tokens: httpOnly cookies (not localStorage) for the web app to reduce XSS risk.
- File uploads (resumes) go straight from the browser to a signed upload URL (S3/Firebase Storage), not proxied through the backend, to avoid large-payload bottlenecks.
- Email sending always goes through the backend's `services/email` layer — never call a provider SDK directly from a route handler, so provider swaps (Resend ↔ SES) don't ripple through the codebase.
