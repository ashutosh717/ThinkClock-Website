import { Zap, RefreshCw, Cpu, Gauge, TrendingUp } from "lucide-react";
import { ProductsNarrative } from "@/components/marketing/products-narrative";
import { AnimatedSection } from "@/components/marketing/animated-section";

export const metadata = {
  title: "Battery Diagnostic Systems | BatteryScope-C Cylindrical, Prismatic & Automated | ThinkClock",
  description:
    "Explore ThinkClock's non-invasive battery diagnostic systems: BatteryScope-C Cylindrical (1,920 cells/shift), BatteryScope-C Prismatic for module & pack lines, and BatteryScope-C Automated (2,880 cells/shift) for gigafactories.",
};

const comparisonFeatures = [
  { feature: "Primary Deployment", cylindrical: "Lab QC / Operator-Led", auto: "Inline Production / Autonomous", prismatic: "Module & Pack Lines / Heavy Duty" },
  { feature: "Shift Capacity (8 hrs)", cylindrical: "1,920 cells", auto: "2,880+ cells", prismatic: "Module & Pack Line Throughput" },
  { feature: "Diagnostic Time", cylindrical: "75 seconds / run", auto: "75 seconds inline", prismatic: "Rapid EIS Spectroscopy Sweep" },
  { feature: "Cycle Loss", cylindrical: "0 (Non-Invasive)", auto: "0 (Non-Invasive)", prismatic: "0 (Non-Invasive)" },
  { feature: "Simultaneous Channels", cylindrical: "6 Channels", auto: "6 Channels Inline", prismatic: "High-Capacity Contact Array" },
  { feature: "Sorting Mechanism", cylindrical: "Manual / Operator Sorting", auto: "Automated Multi-Channel Sorting", prismatic: "Automated Module Grading" },
  { feature: "Cell Format Support", cylindrical: "18650, 21700 & beyond", auto: "21700 / High-Throughput Formats", prismatic: "Prismatic Cells & Modules" },
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
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <ProductsNarrative />
        </div>
      </section>

      {/* ── 3. Technical Ecosystem Comparison Table ── */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[var(--copper)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
                SPECIFICATION MATRIX
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Compare BatteryScope{" "}
              <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                Diagnostics
              </span>
            </h2>
          </AnimatedSection>

          <div className="tc-card tc-card-flush mt-5 sm:mt-6">
            <table className="hidden w-full min-w-[700px] border-collapse text-left lg:table">
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
                        BatteryScope-C Cylindrical
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-6 w-[24%] border-r border-[var(--border)]">
                    <div className="flex flex-col gap-1.5">
                      <span className="inline-block w-fit rounded-full border border-orange-500/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                        PRISMATIC &amp; PACK
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-[var(--paper)]">
                        BatteryScope-C Prismatic
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-6 w-[24%]">
                    <div className="flex flex-col gap-1.5">
                      <span className="inline-block w-fit rounded-full border border-orange-500/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                        INLINE GIGAFACTORY
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-[var(--paper)]">
                        BatteryScope-C Automated
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
                        {row.cylindrical}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm sm:text-base border-r border-[var(--border)]">
                      <span className="inline-block font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-1.5">
                        {row.prismatic}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm sm:text-base">
                      <span className="inline-block font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-1.5">
                        {row.auto}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="divide-y divide-[var(--border)] p-5 sm:p-7 lg:hidden">
              {comparisonFeatures.map((row) => (
                <div key={row.feature} className="space-y-3 py-5 first:pt-0 last:pb-0">
                  <h3 className="font-display font-bold text-[var(--paper)]">{row.feature}</h3>
                  <dl className="space-y-2.5 text-sm">
                    <div className="space-y-0.5">
                      <dt className="text-[var(--graphite)]">BatteryScope-C Cylindrical</dt>
                      <dd className="break-words font-semibold text-[var(--signal)]">{row.cylindrical}</dd>
                    </div>
                    <div className="space-y-0.5">
                      <dt className="text-[var(--graphite)]">BatteryScope-C Prismatic</dt>
                      <dd className="break-words font-semibold text-[var(--signal)]">{row.prismatic}</dd>
                    </div>
                    <div className="space-y-0.5">
                      <dt className="text-[var(--graphite)]">BatteryScope-C Automated</dt>
                      <dd className="break-words font-semibold text-[var(--signal)]">{row.auto}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Technology Advantage ── */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:py-8">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[var(--signal)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
                TECHNOLOGY ADVANTAGE
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Why BatteryScope Outperforms{" "}
              <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                Traditional Cycling
              </span>
            </h2>
          </AnimatedSection>

          <div className="mt-5 sm:mt-6 grid items-stretch gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
            {techAdvantages.map((item, i) => (
              <AnimatedSection
                key={item.title}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="tc-card group flex h-full flex-col justify-between"
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
                  <h3 className="mt-4 font-display text-lg font-bold text-[var(--paper)]">{item.title}</h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)]">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
