import { Zap, RefreshCw, Cpu, Gauge, TrendingUp } from "lucide-react";
import { ProductsNarrative } from "@/components/marketing/products-narrative";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { SendButton } from "@/components/ui/send-button";

export const metadata = {
  title: "Battery Diagnostic Systems | BatteryScope-C & BatteryScope-P | ThinkClock",
  description:
    "Explore ThinkClock's non-invasive battery diagnostic systems: BatteryScope-C Manual (1,920 cells/shift), BatteryScope-C Automated (2,880 cells/shift), and BatteryScope-P for multi-module pack intelligence.",
};

const comparisonFeatures = [
  { feature: "Primary Deployment", manual: "Lab QC / Operator-Led", auto: "Inline Production / Autonomous", pack: "Pack Assembly & Fleet Integration" },
  { feature: "Shift Capacity (8 hrs)", manual: "1,920 cells", auto: "2,880+ cells", pack: "Scalable Pack Modules" },
  { feature: "Diagnostic Time", manual: "75 seconds / run", auto: "75 seconds inline", pack: "Continuous Pack Telemetry" },
  { feature: "Cycle Loss", manual: "0 (Non-Invasive)", auto: "0 (Non-Invasive)", pack: "0 (Non-Invasive)" },
  { feature: "Simultaneous Channels", manual: "6 Channels", auto: "6 Channels Inline", pack: "Multi-Module Telemetry" },
  { feature: "Sorting Mechanism", manual: "Manual / Operator Sorting", auto: "Automated Multi-Channel Sorting", pack: "Software Pack Grading" },
  { feature: "Cell Format Support", manual: "21700 (18650 Ready)", auto: "21700 / Prismatic Ready", pack: "Module & Pack Formats" },
];

const techAdvantages = [
  {
    title: "Non-Invasive",
    desc: "No cell disassembly, no structural damage, and zero cycle loss.",
    Icon: Zap,
    color: "#0d9488",
  },
  {
    title: "Versatile",
    desc: "Expandable to new chemistries (LFP, NMC, solid-state, sodium-ion) and form factors.",
    Icon: RefreshCw,
    color: "#c2410c",
  },
  {
    title: "Intelligent",
    desc: "AI and physics-aware digital twin models trained on real cell datasets, continuously improving.",
    Icon: Cpu,
    color: "#0d9488",
  },
  {
    title: "Quick & Comprehensive",
    desc: "Full battery characterization and health signature in seconds vs. hours or days.",
    Icon: Gauge,
    color: "#c2410c",
  },
  {
    title: "Scalable",
    desc: "From bench testing to Gigafactory inline deployment, BatteryScope grows with your operation.",
    Icon: TrendingUp,
    color: "#0d9488",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-[var(--ink)] text-[var(--paper)]">
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">
        <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[var(--signal)]/15 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-[var(--copper)]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)] animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
                BatteryScope Ecosystem
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.15] text-[var(--paper)] sm:text-5xl lg:text-6xl">
              Non-Invasive Diagnostic Systems built for Speed, Precision, and Scale
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--graphite-on-dark)] sm:text-lg lg:text-xl">
              From bench-top lab evaluation to fully autonomous production line sorting and pack-level intelligence: explore the complete BatteryScope product line.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Interactive Products Narrative Showcase ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <ProductsNarrative />
        </div>
      </section>

      {/* ── 3. Technical Ecosystem Comparison Table ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--copper)] uppercase">
              Specification Matrix
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Compare BatteryScope Diagnostics
            </h2>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10 overflow-x-auto rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6 shadow-2xl">
            <table className="w-full text-left font-sans text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] text-[var(--signal)] font-mono text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4">Feature / Spec</th>
                  <th className="py-3.5 px-4">BatteryScope-C Manual</th>
                  <th className="py-3.5 px-4">BatteryScope-C Automated</th>
                  <th className="py-3.5 px-4">BatteryScope-P</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)] text-[var(--paper)]">
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className="hover:bg-[var(--secondary)]/40 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[var(--paper)]">{row.feature}</td>
                    <td className="py-3.5 px-4 font-mono text-xs text-[var(--graphite-on-dark)]">{row.manual}</td>
                    <td className="py-3.5 px-4 font-mono text-xs font-bold text-[var(--signal)]">{row.auto}</td>
                    <td className="py-3.5 px-4 font-mono text-xs text-[var(--copper)]">{row.pack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4. Technology Advantage ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
              Technology Advantage
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Why BatteryScope Outperforms Traditional Cycling
            </h2>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {techAdvantages.map((item, i) => (
              <AnimatedSection
                key={item.title}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl transition-all duration-300 hover:border-[var(--signal)]/50 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-[10px] border shadow-sm transition-transform duration-300 group-hover:scale-105"
                    style={{
                      borderColor: `${item.color}40`,
                      backgroundColor: `${item.color}15`,
                    }}
                  >
                    <item.Icon className="h-6 w-6 stroke-[2.2]" style={{ color: item.color }} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-[var(--paper)]">{item.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[var(--graphite-on-dark)]">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Call to Action Banner ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-[14px] border border-[var(--signal)]/40 bg-[var(--card)] p-8 sm:p-12 text-center shadow-2xl">
            <h3 className="font-display text-2xl font-bold text-[var(--paper)] sm:text-3xl lg:text-4xl">
              Unsure which BatteryScope configuration fits your line?
            </h3>
            <p className="mt-4 text-sm text-[var(--graphite-on-dark)] sm:text-base">
              Our engineering team can evaluate your throughput, cell chemistry, and form factor requirements to recommend the optimal setup.
            </p>
            <div className="mt-8 flex justify-center">
              <SendButton href="/contact" label="Schedule a Product Demo" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
