import { AnimatedSection } from "@/components/marketing/animated-section";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { SendButton } from "@/components/ui/send-button";

export const metadata = {
  title: "Frequently Asked Questions | ThinkClock Battery Labs",
  description: "Find answers to common questions about BatteryScope-C, CellScope, EIS spectroscopy, and battery intelligence.",
};

export default function FaqPage() {
  return (
    <main className="bg-[var(--ink)] text-[var(--paper)]">
      <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">
        <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[var(--signal)]/15 blur-3xl" />
          <div className="absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-[var(--copper)]/15 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection animation="fade-up" className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)] animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
                Knowledge Base
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.15] text-[var(--paper)] sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--graphite-on-dark)] sm:text-lg">
              Everything you need to know about ThinkClock&apos;s signal-driven battery diagnostics, hardware instrumentation, and software APIs.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={150} className="mt-8 sm:mt-10 mx-auto max-w-4xl">
            <FaqAccordion />
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={300} className="mt-12 sm:mt-14 text-center mx-auto max-w-3xl">
            <div className="rounded-[14px] border border-[var(--signal)]/40 bg-[var(--card)] p-8 sm:p-10 shadow-2xl">
              <h3 className="font-display text-2xl font-bold text-[var(--paper)]">Have a specific question?</h3>
              <p className="mt-2 text-sm text-[var(--graphite-on-dark)]">
                Our battery engineers and diagnostics team are ready to discuss your custom cell or fleet challenge.
              </p>
              <div className="mt-6 flex justify-center">
                <SendButton href="/contact" label="Contact our team" variant="lab" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
