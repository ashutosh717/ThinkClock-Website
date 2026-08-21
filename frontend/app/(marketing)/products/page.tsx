import { Metadata } from "next";
import { Zap, RefreshCw, Cpu, Gauge, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { ProductsNarrative } from "@/components/marketing/products-narrative";
import { SendButton } from "@/components/ui/send-button";

export const metadata: Metadata = {
  title: "Products & BatteryScope Platform | ThinkClock Battery Labs",
  description:
    "Explore the BatteryScope product line: BatteryScope-C Manual, BatteryScope-C Automated, and BatteryScope-P. Lab-grade battery diagnostics in seconds without charge-discharge cycling.",
};

const techAdvantages = [
  {
    title: "Non-Invasive",
    desc: "No cell disassembly, no structural damage, and zero cycle loss.",
    Icon: Zap,
    color: "#5ce1c9",
  },
  {
    title: "Versatile",
    desc: "Expandable to new chemistries (LFP, NMC, solid-state, sodium-ion) and form factors.",
    Icon: RefreshCw,
    color: "#c97a4a",
  },
  {
    title: "Intelligent",
    desc: "AI and physics-aware digital twin models trained on real cell datasets, continuously improving.",
    Icon: Cpu,
    color: "#5ce1c9",
  },
  {
    title: "Quick & Comprehensive",
    desc: "Full battery characterization and health signature in seconds vs. hours or days.",
    Icon: Gauge,
    color: "#c97a4a",
  },
  {
    title: "Scalable",
    desc: "From bench testing to Gigafactory inline deployment, BatteryScope grows with your operation.",
    Icon: TrendingUp,
    color: "#5ce1c9",
  },
];

const developmentTimeline = [
  {
    phase: "Phase 1",
    date: "June 2025",
    milestone: "Proof of Concept",
    detail: "Handmade unit validating core spectroscopy technology in lab conditions.",
  },
  {
    phase: "Phase 2",
    date: "Dec 2025",
    milestone: "Portable Prototype",
    detail: "Refined portable unit enabling field demos and early customer trials.",
  },
  {
    phase: "Phase 3",
    date: "April 2026",
    milestone: "Manufactured Unit",
    detail: "Production-ready device, customer-deployable, 21700 cylindrical cells supported today.",
  },
  {
    phase: "Phase 4",
    date: "Q3 2026",
    milestone: "Automated System",
    detail: "Inline, hands-free diagnostics integrated into production workflows.",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-[var(--ink)] text-[var(--paper)]">
      {/* Products Page Hero */}
      <AnimatedSection className="relative px-6 pt-32 pb-20 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
            ThinkClock Product Ecosystem
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Battery Characterization in Seconds. <br className="hidden sm:block" /> Not Hours.
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-[var(--graphite-on-dark)] sm:text-xl">
            Every battery pack is only as good as its weakest cell. ThinkClock builds the diagnostic tools that let Gigafactories, battery pack manufacturers, resellers, and recyclers see inside every cell in seconds: no charge-discharge cycling required.
          </p>
        </div>
      </AnimatedSection>

      {/* Main Interactive Product Showcase */}
      <section className="px-6 py-12 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 text-center">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
              Product Platform
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl text-[var(--paper)]">
              Choose the BatteryScope Solution Built for Your Scale
            </h2>
          </div>

          <ProductsNarrative />
        </div>
      </section>

      {/* The Technology Advantage */}
      <AnimatedSection className="bg-white/5 px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Technology Advantage
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl text-[var(--paper)]">
              Why BatteryScope Outperforms Traditional Cycling
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {techAdvantages.map((adv, i) => (
              <AnimatedSection
                key={adv.title}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-3xl border border-white/10 bg-[var(--ink)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--signal)]/50 hover:shadow-2xl hover:shadow-[var(--signal)]/15"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${adv.color}15`,
                    borderColor: `${adv.color}35`,
                    boxShadow: `0 0 20px ${adv.color}20`,
                  }}
                >
                  <adv.Icon className="h-7 w-7 stroke-[2.2]" style={{ color: adv.color }} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-[var(--paper)]">{adv.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--graphite-on-dark)]">{adv.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Credibility Timeline */}
      <AnimatedSection className="px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
              Credibility Timeline
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl text-[var(--paper)]">
              From Proof of Concept to Production: Built in the Open
            </h2>
            <p className="mt-4 text-base text-[var(--graphite-on-dark)]">
              Iterating from lab prototype to manufactured, customer-deployable diagnostic systems in under a year.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {developmentTimeline.map((item, i) => (
              <AnimatedSection
                key={item.phase}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md"
              >
                <div className="flex items-center justify-between font-mono text-xs font-semibold text-[var(--signal)]">
                  <span>{item.phase}</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-[var(--paper)]">{item.milestone}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--graphite-on-dark)]">{item.detail}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Clean Single Final CTA */}
      <AnimatedSection className="px-6 pb-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--signal)]/30 bg-gradient-to-br from-[var(--signal)]/10 via-white/5 to-transparent p-10 sm:p-12 text-center backdrop-blur-xl">
          <h3 className="font-display text-3xl font-bold text-[var(--paper)] sm:text-4xl">
            Ready to integrate BatteryScope into your operation?
          </h3>
          <p className="mt-4 text-base text-[var(--graphite-on-dark)] sm:text-lg max-w-2xl mx-auto">
            Connect with our engineering team to evaluate BatteryScope-C Manual, Automated inline sorting, or BatteryScope-P pack diagnostics.
          </p>
          <div className="mt-8 flex justify-center">
            <SendButton href="/contact" label="Contact Engineering Team" />
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
