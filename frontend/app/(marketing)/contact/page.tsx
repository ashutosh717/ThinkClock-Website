import { AnimatedSection } from "@/components/marketing/animated-section";
import { ContactForm } from "@/components/marketing/contact-form";

const contactInfo = [
  { label: "General Enquiries", value: "contact@thinkclock.com" },
  { label: "India Contact", value: "bdc@thinkclock.com | +91 9461160122, +91 9148104639" },
  { label: "UK Contact", value: "ajith@thinkclock.com | +44 7773171072" },
  { label: "Response Time", value: "Within 24 hours" },
];

const offices = [
  {
    country: "UK Headquarters 🇬🇧",
    title: "ThinkClock Battery Labs",
    address: "68 Cadbury Road, Sunbury-on-Thames, England TW16 7LT",
  },
  {
    country: "India Office 🇮🇳",
    title: "Bengaluru R&D Centre",
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
    <main>
      <section className="relative overflow-hidden bg-[var(--ink)] px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-[var(--signal)]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1fr_1fr]">
          <AnimatedSection animation="fade-left">
            <p className="font-mono text-sm tracking-[0.2em] text-[var(--signal)] uppercase font-semibold">
              Contact Us
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-[var(--paper)] sm:text-5xl lg:text-6xl">
              Tell us what battery decision is blocking you.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite-on-dark)] sm:text-xl">
              Share your fleet, cell-store, or prototyping challenge and we will route you to the right BatteryScope-C or CellScope team.
            </p>

            <div className="mt-10 space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-white/5 pb-3">
                  <span className="font-mono text-xs font-semibold tracking-wider text-[var(--signal)] uppercase min-w-[160px]">
                    {info.label}
                  </span>
                  <span className="text-base font-medium text-[var(--paper)]">{info.value}</span>
                </div>
              ))}
            </div>

            {/* Global Offices */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="font-mono text-xs tracking-[0.2em] font-semibold text-[var(--copper)] uppercase mb-6">
                Global Offices & R&D Hubs
              </p>
              <div className="grid gap-5 sm:grid-cols-3">
                {offices.map((office) => (
                  <div
                    key={office.title + office.country}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md h-full transition-all duration-300 hover:border-[var(--signal)]/40 hover:bg-white/10"
                  >
                    <div>
                      <span className="font-mono text-xs font-semibold tracking-wider text-[var(--signal)] uppercase">
                        {office.country}
                      </span>
                      <h3 className="mt-2 font-display text-base font-bold text-[var(--paper)]">
                        {office.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--graphite-on-dark)]">
                        {office.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-right" delay={150}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
