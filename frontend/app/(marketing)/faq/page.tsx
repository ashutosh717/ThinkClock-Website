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
      <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16 border-b border-[var(--border)]">
        <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[var(--signal)]/15 blur-3xl" />
          <div className="absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-[var(--copper)]/15 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection animation="fade-up" className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[var(--signal)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
                KNOWLEDGE BASE
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.15] text-[var(--paper)] sm:text-5xl lg:text-6xl">
              Frequently Asked{" "}
              <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                Questions
              </span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--graphite-on-dark)] sm:text-lg">
              Everything you need to know about ThinkClock&apos;s signal-driven battery diagnostics, hardware instrumentation, and software APIs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. FAQ Accordion Section ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 border-b border-[var(--border)]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection animation="fade-up" delay={150} className="mx-auto max-w-4xl">
            <FaqAccordion />
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3. Bottom CTA ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection animation="scale-in" delay={300} className="text-center mx-auto max-w-3xl">
            <div className="rounded-[20px] border border-purple-500/25 bg-[var(--card)] p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-[var(--paper)] sm:text-3xl">
                  Have a specific{" "}
                  <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                    question?
                  </span>
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[var(--graphite-on-dark)] max-w-xl mx-auto leading-relaxed">
                  Our battery engineers and diagnostics team are ready to discuss your custom cell or fleet challenge.
                </p>
                <div className="mt-8 flex justify-center">
                  <SendButton href="/contact" label="Contact our team" variant="lab" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
