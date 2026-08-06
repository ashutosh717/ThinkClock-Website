import { AnimatedSection } from "@/components/marketing/animated-section";
import { ContactForm } from "@/components/marketing/contact-form";

const contactInfo = [
  { label: "General Enquiries", value: "contact@thinkclock.com" },
  { label: "India Contact", value: "harish@thinkclock.com | +91 96060 17010" },
  { label: "Response Time", value: "Within 24 hours" },
];

const offices = [
  {
    country: "UK Headquarters 🇬🇧",
    title: "ThinkClock Battery Labs",
    address: "68 Cadbury Road, Sunbury-on-Thames, England TW16 7LT",
  },
  {
    country: "India Office & R&D Lab 🇮🇳",
    title: "Bengaluru R&D Centre",
    address: "3rd floor, Confident Square Mall, Unit-301, Varthur - Sarjapur Rd, Bengaluru 560087",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--ink)] px-4 py-24 sm:px-6">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[var(--signal)]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection animation="fade-left">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">Contact Us</p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-[var(--paper)] sm:text-6xl">
              Tell us what battery decision is blocking you.
            </h1>
            <p className="mt-4 text-[var(--graphite-on-dark)]">
              Share your fleet, cell-store, or prototyping challenge and we will route you to the right BatteryScope-C or CellScope team.
            </p>

            <div className="mt-8 space-y-3">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-mono text-xs tracking-[0.12em] text-[var(--signal)] uppercase min-w-[130px]">
                    {info.label}
                  </span>
                  <span className="text-sm text-[var(--graphite-on-dark)]">{info.value}</span>
                </div>
              ))}
            </div>

            {/* Global Offices */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="font-mono text-xs tracking-[0.16em] text-[var(--copper)] uppercase mb-4">
                Global Offices & R&D Hubs
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {offices.map((office) => (
                  <div
                    key={office.country}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                  >
                    <span className="font-mono text-[10px] tracking-wider text-[var(--signal)] uppercase">{office.country}</span>
                    <h3 className="mt-1 font-display text-sm font-semibold text-[var(--paper)]">
                      {office.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--graphite-on-dark)]">
                      {office.address}
                    </p>
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
