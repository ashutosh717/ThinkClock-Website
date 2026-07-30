import { AnimatedSection } from "@/components/marketing/animated-section";
import { ContactForm } from "@/components/marketing/contact-form";

const contactInfo = [
  { label: "Email", value: "hello@thinkclock.com" },
  { label: "Location", value: "United Kingdom" },
  { label: "Response", value: "Within 24 hours" },
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
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">Contact</p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-[var(--paper)] sm:text-6xl">
              Tell us what battery decision is blocking you.
            </h1>
            <p className="mt-4 text-[var(--graphite-on-dark)]">
              Share your fleet, cell-store, or prototyping challenge and we will route you to the right BatteryScope-C or CellScope team.
            </p>
            <div className="mt-10 space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <span className="font-mono text-xs tracking-[0.12em] text-[var(--signal)] uppercase min-w-[80px]">{info.label}</span>
                  <span className="text-sm text-[var(--graphite-on-dark)]">{info.value}</span>
                </div>
              ))}
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
