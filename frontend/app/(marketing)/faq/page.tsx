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
      <section className="relative overflow-hidden tc-section-hero">
        <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[var(--signal)]/15 blur-3xl" />
          <div className="absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-[var(--copper)]/15 blur-3xl" />
        </div>

        <div className="tc-container relative">
          <AnimatedSection animation="fade-up" className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[var(--signal)]" />
              <span className="tc-label font-mono font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
                KNOWLEDGE BASE
              </span>
            </div>
            <h1 className="mt-5 font-display tc-h1 font-bold text-[var(--paper)]">
              Frequently Asked{" "}
              <span className="inline italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-1">
                Questions
              </span>
            </h1>
            <p className="mx-auto mt-4 tc-body text-[var(--graphite-on-dark)]">
              Everything you need to know about ThinkClock&apos;s signal-driven battery diagnostics, hardware instrumentation, and software APIs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. FAQ Accordion Section ── */}
      <section className="tc-section">
        <div className="tc-container">
          <AnimatedSection animation="fade-up" delay={150} className="mx-auto max-w-4xl">
            <FaqAccordion />
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3. Bottom CTA ── */}
      <section className="tc-section">
        <div className="tc-container">
          <AnimatedSection animation="scale-in" delay={300} className="text-center mx-auto max-w-3xl">
            <div className="tc-card relative mx-auto max-w-3xl text-center">
              <div className="relative z-10">
                <h3 className="font-display tc-h3-lg font-bold text-[var(--paper)]">
                  Have a specific{" "}
                  <span className="inline italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-1">
                    question?
                  </span>
                </h3>
                <p className="mt-3 tc-body text-[var(--graphite-on-dark)] mx-auto">
                  Our battery engineers and diagnostics team are ready to discuss your custom cell or fleet challenge.
                </p>
                <div className="mt-8 flex justify-center">
                  <SendButton href="/contact" label="Contact our team" variant="lab" className="w-full sm:w-auto" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
