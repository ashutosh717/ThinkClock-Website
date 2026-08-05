import { AnimatedSection } from "@/components/marketing/animated-section";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { SendButton } from "@/components/ui/send-button";

export const metadata = {
  title: "Frequently Asked Questions | ThinkClock Battery Labs",
  description: "Find answers to common questions about BatteryScope-C, CellScope, EIS spectroscopy, and battery intelligence.",
};

export default function FaqPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-24 sm:px-6">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[var(--signal)]/20 blur-3xl" />
          <div className="absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-[var(--copper)]/15 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up" className="text-center">
            <p className="font-mono text-xs tracking-[0.18em] text-[var(--signal)] uppercase">
              Knowledge Base
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--paper)] sm:text-5xl md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-[var(--graphite-on-dark)]">
              Everything you need to know about ThinkClock&apos;s signal-driven battery diagnostics, hardware instrumentation, and software APIs.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200} className="mt-12">
            <FaqAccordion />
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={400} className="mt-16 text-center">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="font-display text-2xl text-[var(--paper)]">Have a specific question?</h3>
              <p className="mt-2 text-sm text-[var(--graphite-on-dark)]">
                Our battery engineers and diagnostics team are ready to discuss your custom cell or fleet challenge.
              </p>
              <div className="mt-6 flex justify-center">
                <SendButton href="/contact" label="Contact our team" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
