# Setup — installing the project's open-source tooling

These libraries are **not** downloaded/cloned into the repo by hand. Each has a proper install method — follow these exactly, in your own project folder (not in this chat). Doing it this way means you get updates, no dead vendored code, and no merge-conflict-prone copies of someone else's repo sitting in your project.

Run these **after** Phase 0 scaffolding (`frontend/` created with Next.js + Tailwind, per `architecture.md`).

## 1. `animate-ui` (React components)

Not a package you `npm install` wholesale — it uses the shadcn CLI, and you pull in components one at a time (you own the code once it's added, so you can edit it freely).

```bash
cd frontend
npx shadcn@latest init
```

Then add components as you need them, e.g.:

```bash
npx shadcn@latest add "https://animate-ui.com/r/install-tabs"
npx shadcn@latest add "https://animate-ui.com/r/button"
```

Browse available components and their install URLs at [animate-ui.com/docs](https://animate-ui.com/docs).

## 2. `lenis` (smooth scroll)

A normal npm package.

```bash
cd frontend
npm install lenis
```

Initialize it only on marketing routes (Home, Technology, About) per `design.md` and `rules.md` — not on the configurator, account, or careers application flow.

## 3. `unovue/inspira-ui` — **not used**

This is Vue/Nuxt-only. Our stack decision (`memory.md`, 2026-07-30) is React/Next.js, so this is skipped for v1. Only revisit this if you deliberately rebuild the frontend in Vue/Nuxt — don't install it alongside `animate-ui`.

## 4. `github/spec-kit` (Spec-Driven Development CLI)

A Python CLI tool, installed once on your machine (not per-project), then run inside each project.

**Install once:**
```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```
(Requires `uv` — install it first if needed: `curl -LsSf https://astral.sh/uv/install.sh | sh` on macOS/Linux, or `powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"` on Windows.)

**Run inside your project folder:**
```bash
specify init --here --ai claude
```

This creates a `.specify/` folder (templates, memory, scripts) that plays a similar role to our own `phases.md`/`memory.md`/`rules.md` files — decide whether you want to run both systems or fold one into the other, rather than maintaining two overlapping planning systems.

**Verify install anytime:**
```bash
specify check
```

## 5. Backend equivalents (for completeness)

Not requested above, but since `rules.md` calls for `fastapi-users`/`authlib` instead of hand-rolled auth:

```bash
cd backend
pip install fastapi "uvicorn[standard]" sqlalchemy alembic pydantic fastapi-users[sqlalchemy]
```

## Quick reference

| Tool | Install method | Command |
|---|---|---|
| animate-ui | shadcn CLI, per-component | `npx shadcn@latest add "<component-url>"` |
| lenis | npm package | `npm install lenis` |
| inspira-ui | — | not used (Vue-only, conflicts with stack) |
| spec-kit | Python CLI (uv) | `specify init --here --ai claude` |
