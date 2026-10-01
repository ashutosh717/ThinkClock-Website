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
      <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16 border-b border-[var(--border)]">
        <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[var(--signal)]/15 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-[var(--copper)]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[var(--signal)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
                BATTERYSCOPE ECOSYSTEM
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.15] text-[var(--paper)] sm:text-5xl lg:text-6xl">
              Non-Invasive Diagnostic Systems built for{" "}
              <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                Speed, Precision, and Scale
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--graphite-on-dark)] sm:text-lg lg:text-xl">
              From bench-top lab evaluation to fully autonomous production line sorting and pack-level intelligence: explore the complete BatteryScope product line.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Interactive Products Narrative Showcase ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 border-b border-[var(--border)]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <ProductsNarrative />
        </div>
      </section>

      {/* ── 3. Technical Ecosystem Comparison Table ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 border-b border-[var(--border)]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[var(--copper)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
                SPECIFICATION MATRIX
              </span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Compare BatteryScope{" "}
              <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                Diagnostics
              </span>
            </h2>
          </AnimatedSection>

          <div className="mt-10 sm:mt-12 overflow-x-auto rounded-[20px] border border-[var(--border)] bg-[var(--card)] shadow-xl">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--secondary)]/60">
                  <th className="py-5 px-6 font-mono text-xs font-bold text-[var(--graphite)] uppercase tracking-wider w-[28%]">
                    SPECIFICATION
                  </th>
                  <th className="py-5 px-6 w-[24%] border-x border-[var(--border)]">
                    <div className="flex flex-col gap-1.5">
                      <span className="inline-block w-fit rounded-full border border-orange-500/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                        BENCHTOP QC
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-[var(--paper)]">
                        BatteryScope-C Manual
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-6 w-[24%] border-r border-[var(--border)]">
                    <div className="flex flex-col gap-1.5">
                      <span className="inline-block w-fit rounded-full border border-orange-500/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                        INLINE GIGAFACTORY
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-[var(--paper)]">
                        BatteryScope-C Automated
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-6 w-[24%]">
                    <div className="flex flex-col gap-1.5">
                      <span className="inline-block w-fit rounded-full border border-orange-500/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                        PACK TELEMETRY
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-[var(--paper)]">
                        BatteryScope-P
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className="hover:bg-[var(--secondary)]/50 transition-colors">
                    <td className="py-4 px-6 font-display text-sm sm:text-base font-bold text-[var(--paper)]">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-sm sm:text-base border-x border-[var(--border)]">
                      <span className="inline-block font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-1.5">
                        {row.manual}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm sm:text-base border-r border-[var(--border)]">
                      <span className="inline-block font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-1.5">
                        {row.auto}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm sm:text-base">
                      <span className="inline-block font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-1.5">
                        {row.pack}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4. Technology Advantage ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 border-b border-[var(--border)]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[var(--signal)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
                TECHNOLOGY ADVANTAGE
              </span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Why BatteryScope Outperforms{" "}
              <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                Traditional Cycling
              </span>
            </h2>
          </AnimatedSection>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {techAdvantages.map((item, i) => (
              <AnimatedSection
                key={item.title}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg transition-all duration-300 hover:border-[var(--signal)]/40 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm transition-transform duration-300 group-hover:scale-105"
                    style={{
                      borderColor: `${item.color}40`,
                      backgroundColor: `${item.color}15`,
                    }}
                  >
                    <item.Icon className="h-5 w-5 stroke-[2.2]" style={{ color: item.color }} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-[var(--paper)]">{item.title}</h3>
                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)]">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Call to Action Banner ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-[20px] border border-purple-500/25 bg-[var(--card)] p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="relative z-10">
              <h3 className="font-display text-2xl font-bold text-[var(--paper)] sm:text-3xl lg:text-4xl">
                Unsure which BatteryScope configuration{" "}
                <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                  fits your line?
                </span>
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[var(--graphite-on-dark)] max-w-2xl mx-auto">
                Our engineering team can evaluate your throughput, cell chemistry, and form factor requirements to recommend the optimal setup.
              </p>
              <div className="mt-8 flex justify-center">
                <SendButton href="/contact" label="Schedule a Product Demo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
