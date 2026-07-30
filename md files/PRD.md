# PRD — ThinkClock Battery Labs Website v2

## 1. Why we're rebuilding

The current site (thinkclock.com) is a static Bootstrap template with an inline battery-configurator widget, no CMS, no accounts, and no career/application flow. It doesn't reflect ThinkClock's current position as an Innovate UK–funded, R&D-driven company shipping **BatteryScope** (Battery Health-as-a-Service) and **CellScope** (portable cell diagnostics), plus a cell marketplace. This rebuild is a full replacement, not a redesign pass.

## 2. What we're building

A modern marketing + product website for ThinkClock Battery Labs, with:
- A public marketing site (Home, Technology, About, Careers, Contact) that actually communicates what BatteryScope/CellScope do and why battery SoH matters.
- A **Cell Marketplace / Battery Configurator** — the interactive tool currently on the homepage (pick cell type, condition, voltage/capacity, get matched cells), rebuilt as a real product surface, not a template widget.
- **Accounts** — phone/email login so customers, cell buyers, and partners can save configurations, track orders, and access their portal.
- A **Careers page with a real application flow** (not just job text — resume upload, application status, notifications).
- Email notifications (application received, contact form received, configuration saved, order status).
- An admin-manageable content layer so the team isn't editing HTML to change job listings, team bios, or blog/news content.

## 3. Target users

| User | What they need from the site |
|---|---|
| **Battery pack developers / OEMs** | Understand Digital/Physical Twinning service, request cell characterization, browse the Cell Store, get in touch for prototyping |
| **EV fleet operators & OEMs (BatteryScope customers)** | Understand BatteryScope value prop (predictive maintenance, warranty insights), request a demo/pilot |
| **Recyclers / second-life buyers** | Buy recycled cells with traceable SoH data from the marketplace |
| **Job candidates** | See open roles, understand the company mission, apply and track application status |
| **Investors / partners** | Understand the R&D story, Innovate UK track record, leadership team, credibility signals |
| **Internal team (admin)** | Update job listings, team bios, cell inventory, and respond to leads without a dev |

## 4. Core features (v1 scope)

1. **Marketing pages**: Home, Technology (EIS / Acoustic / RF spectroscopy explainers), About (mission, leadership: Babu Devnarayan (CEO), Ajith Muthayil (COO), Suman (CMO)), Contact.
2. **Cell Store / Battery Configurator**: interactive tool to configure a battery (voltage, capacity, cell type, new vs. recycled), see matched cells from inventory, view pricing.
3. **Accounts & auth**: sign up / log in via email or phone number (OTP), password-less preferred. Persistent user profile, saved configurations.
4. **Careers**: job listing pages (role, responsibilities, requirements), application form with resume/CV upload, application-status tracking, confirmation + status-change emails.
5. **Contact & lead capture**: contact form routed to team inbox + confirmation email to sender.
6. **Notifications**: transactional email for account creation, application received/updated, contact form submitted, order/configuration confirmation.
7. **Admin/CMS layer**: internal-only screens (or headless CMS) to manage job postings, team bios, and cell inventory without redeploying code.
8. **Analytics**: basic traffic + conversion tracking (demo requests, applications, marketplace inquiries).

## 5. Explicitly out of scope for v1

- Live BatteryScope dashboard / data ingestion from customer BMS (that's the product itself, not the marketing site — future integration point only).
- Payments/checkout for the cell marketplace (v1 is inquiry/quote-based, not a live cart+checkout).
- Multi-language support.
- Native mobile app.

## 6. Success criteria

- Site accurately represents current products (BatteryScope, CellScope) — not just the old Cell Store framing.
- A candidate can apply for a job and receive a confirmation email without any manual team intervention.
- A prospective customer can request a demo/quote and the lead reaches the team inbox reliably.
- Site is fully responsive and meaningfully faster than the current template site.
- Team can update job postings and team bios without a developer.

## 7. Open questions (resolve before/at Phase 0)

- Final hosting decision: Firebase vs AWS (see `architecture.md` for trade-offs) — **not blocking** for frontend/UI build, but blocks backend deployment planning.
- Headless CMS choice for job postings/team bios (options in `architecture.md`).
- Whether phone-number OTP requires a paid SMS provider (Twilio/MSG91) — cost implication to confirm.
- Whether the Cell Store inventory data will come from a real database/API at launch or is still manually curated.
