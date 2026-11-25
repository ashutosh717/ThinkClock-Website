import { AnimatedSection } from "@/components/marketing/animated-section";
import { ContactForm } from "@/components/marketing/contact-form";

const contactChannels = [
  {
    label: "General Enquiries",
    email: "contact@thinkclock.com",
    phones: [],
  },
  {
    label: "India R&D Centre",
    email: "bdc@thinkclock.com",
    phones: ["+91 9461160122", "+91 9148104639"],
  },
  {
    label: "UK Operations",
    email: "ajith@thinkclock.com",
    phones: ["+44 7773171072"],
  },
  {
    label: "Response Time",
    note: "Within 24 hours on business days",
  },
];

const offices = [
  {
    country: "UK Headquarters 🇬🇧",
    title: "ThinkClock Battery Labs",
    address: "68 Cadbury Road, Sunbury-on-Thames, England TW16 7LT",
  },
  {
    country: "India R&D Centre 🇮🇳",
    title: "Bengaluru Technology Centre",
    address: "3rd floor, Confident Square Mall, Unit-301, Varthur - Sarjapur Rd, Bengaluru 560087",
  },
  {
    country: "UK Office 🇬🇧",
    title: "ThinkClock Ltd.",
    address: "Unit 100, Kingspark Business Centre, Kingston Rd, New Malden KT3 3ST, United Kingdom",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[var(--ink)] text-[var(--paper)]">
      {/* ── 1. Header & Contact Form Grid ── */}
      <section className="relative overflow-hidden tc-section-hero">
        <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-[var(--signal)]/15 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-[var(--copper)]/10 blur-3xl" />
        </div>

        <div className="tc-container relative grid gap-10 lg:gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          {/* Left Column: Intro & Direct Channels */}
          <AnimatedSection animation="fade-left" className="flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)] animate-pulse" />
                <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
                  Contact Us
                </span>
              </div>

              <h1 className="mt-5 font-display tc-h1 font-bold text-[var(--paper)]">
                Tell us what battery decision is blocking you.
              </h1>

              <p className="mt-6 tc-body text-[var(--graphite-on-dark)]">
                Share your cell grading, battery pack QA, second-life evaluation, or prototyping challenge and our engineering team will get back to you with actionable insights.
              </p>
            </div>

            <div className="tc-card mt-8 divide-y divide-[var(--border)]">
              {contactChannels.map((info) => (
                <div
                  key={info.label}
                  className="grid grid-cols-1 sm:grid-cols-[170px_1fr] items-start gap-1.5 sm:gap-4 py-3.5 first:pt-0 last:pb-0"
                >
                  <span className="font-mono text-xs font-semibold tracking-wider text-[var(--signal)] uppercase pt-0.5">
                    {info.label}
                  </span>

                  <div className="flex flex-col gap-1 text-xs sm:text-sm font-mono font-medium text-[var(--paper)]">
                    {info.email && (
                      <a
                        href={`mailto:${info.email}`}
                        className="transition-colors hover:text-[var(--signal)]"
                      >
                        {info.email}
                      </a>
                    )}
                    {info.phones && info.phones.length > 0 && (
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[var(--graphite-on-dark)]">
                        {info.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/\s+/g, "")}`}
                            className="whitespace-nowrap transition-colors hover:text-[var(--paper)]"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    )}
                    {info.note && (
                      <span className="text-[var(--graphite-on-dark)] font-mono text-xs sm:text-sm">
                        {info.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Column: Clean Form */}
          <AnimatedSection animation="fade-right" delay={150} className="h-full">
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Full-Width Global Offices & R&D Hubs Section ── */}
      <section className="tc-section">
        <div className="tc-container">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-5 sm:mb-6" animation="fade-up">
            <p className="tc-label font-mono tracking-[0.18em] font-semibold text-[var(--copper)] uppercase">
              Global Presence
            </p>
            <h2 className="mt-2 font-display tc-h2 font-bold text-[var(--paper)]">
              Our Offices &amp; Engineering Centres
            </h2>
          </AnimatedSection>

          <div className="grid items-stretch gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((office, i) => (
              <AnimatedSection
                key={office.title + office.country}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="tc-card flex h-full flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--signal)] uppercase">
                    {office.country}
                  </span>
                  <h3 className="mt-2.5 font-display text-lg font-bold text-[var(--paper)]">
                    {office.title}
                  </h3>
                  <p className="mt-2.5 font-mono text-xs leading-relaxed text-[var(--graphite-on-dark)]">
                    {office.address}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
