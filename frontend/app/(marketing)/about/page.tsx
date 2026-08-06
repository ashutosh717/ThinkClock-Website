import { AnimatedSection } from "@/components/marketing/animated-section";
import { PhaseJourney } from "@/components/about/phase-journey";
import { SendButton } from "@/components/ui/send-button";
import { PartnerMarquee } from "@/components/marketing/partner-marquee";

const whatWeDo = [
  {
    title: "Cell Characterisation",
    desc: "Lab-based performance and uniformity assessment for cell OEMs and battery pack manufacturers.",
    icon: "🔬",
  },
  {
    title: "Battery Prototyping",
    desc: "Digital twin-driven rapid development and characterisation of battery packs under various climatic conditions.",
    icon: "⚡",
  },
  {
    title: "Battery Health Analytics",
    desc: "In-depth diagnostics through advanced spectroscopy (EIS, Acoustic, and RF).",
    icon: "📊",
  },
  {
    title: "Second-Life Battery Marketplace",
    desc: "Fully characterised recycled cells promoting circular economy and sustainable reuse.",
    icon: "♻️",
  },
];



const backingRecognition = [
  {
    title: "£246,050 UKRI Grant",
    desc: "Awarded £246,050 in core R&D funding from UKRI Innovate UK between April and July 2025.",
    badge: "R&D Funding",
    icon: "💷",
  },
  {
    title: "Innovate UK GBIP Australia",
    desc: "Selected by Innovate UK for the Global Business Innovation Programme to Australia focusing on battery technologies.",
    badge: "GBIP Australia",
    icon: "🇬🇧",
  },
  {
    title: "ZE-Gen Accelerator Phase 1",
    desc: "Consortium award with Celloop and Decibels Lab under Innovate UK's Zero Emission Generators Accelerator.",
    badge: "ZE-Gen Award",
    icon: "🌱",
  },
  {
    title: "Cleantech Open 2024",
    desc: "Named among the Global Top 20 companies in clean technology innovation.",
    badge: "Top 20 Global",
    icon: "🏆",
  },
  {
    title: "Innovate UK GIP T-Hub",
    desc: "Selected for the Global Incubator Programme powered by Innovate UK in partnership with T-Hub, Hyderabad.",
    badge: "GIP Hyderabad",
    icon: "🚀",
  },
  {
    title: "India Energy Week Recognition",
    desc: "Recognised by UK Department for Business and Trade (DBT) as a UK clean energy business in UK–India collaboration.",
    badge: "UK DBT Clean Tech",
    icon: "🇮🇳",
  },
];

const companyFacts = [
  { label: "Founded", value: "2019", subtext: "Incorporated Oct 2019" },
  { label: "UK HQ", value: "Sunbury-on-Thames", subtext: "United Kingdom" },
  { label: "India R&D Lab", value: "Bengaluru", subtext: "Sarjapur Road" },
];

const leaders = [
  {
    name: "Babu Devnarayan",
    role: "Co-Founder & Chief Executive Officer",
    summary: "Leads product vision and commercial strategy for BatteryScope, steering global deployments across OEM and recycling partners.",
    initials: "BD",
  },
  {
    name: "Ajith Muthayil, FRSA",
    role: "Co-Founder & Chief Operating Officer",
    summary: "17+ years global industrial tech leader (ex-NodeIN founder, ex-Johnson Controls Product Lead). Joined April 2025 to scale operations and strategic partnerships.",
    initials: "AM",
  },
  {
    name: "Suman",
    role: "Chief Technology Officer",
    summary: "Drives electrochemical spectroscopy research, physics-based digital twin modelling, and AI diagnostics algorithms.",
    initials: "S",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden bg-[var(--ink)] px-4 py-24 sm:px-6">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--signal)]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[var(--copper)]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">
              ThinkClock Battery Labs | Sensing, Modelling, Analytics
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-[var(--paper)] sm:text-6xl">
              Innovate UK-backed battery intelligence grounded in lab reality.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[var(--graphite-on-dark)]">
              ThinkClock exists to close the gap between battery signal and operational decision. We focus on diagnostics that engineers can trust and teams can act on.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Who We Are ── */}
      <section className="bg-[var(--paper)] px-4 py-24 text-[var(--ink)] sm:px-6">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection className="mx-auto text-center" animation="fade-up">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--copper)] uppercase">
              Who We Are
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
              R&D-driven battery health analytics.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite)]">
              An R&D-driven company specialising in Battery Health Analytics using advanced spectroscopy techniques — EIS, Acoustic, and RF Spectroscopy. We reveal diagnostic insights into battery health by relating microscopic data with observable system-level behaviour through models based on physics and machine learning.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3. What We Do ── */}
      <AnimatedSection className="bg-[var(--ink)] px-4 py-24 text-[var(--paper)] sm:px-6" animation="fade-up">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">
              What We Do
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--paper)] sm:text-5xl">
              From cell characterisation to circular economy.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((item, i) => (
              <AnimatedSection
                key={item.title}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--signal)]/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--signal)]/10 text-xl">
                  {item.icon}
                </span>
                <h3 className="mt-5 font-display text-xl text-[var(--paper)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--graphite-on-dark)]">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── 4. Strategic Partnerships ── */}
      <section className="bg-[var(--ink)] px-4 py-24 text-[var(--paper)] sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedSection className="mx-auto max-w-2xl text-center" animation="fade-up">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">
              Strategic Partnerships
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--paper)] sm:text-5xl">
              Global collaborations driving innovation.
            </h2>
          </AnimatedSection>

          <div className="mt-8">
            <PartnerMarquee />
          </div>
        </div>
      </section>

      {/* ── 5. Development Roadmap ── */}
      <PhaseJourney />

      {/* ── 6. Backing & Recognition ── */}
      <section className="bg-[var(--paper)] px-4 py-24 text-[var(--ink)] sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedSection className="mx-auto max-w-2xl text-center" animation="fade-up">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">
              Funding & Accolades
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
              Backing & international recognition.
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {backingRecognition.map((item, i) => (
              <AnimatedSection
                key={item.title}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-2xl border border-[var(--graphite)]/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="rounded-full bg-[var(--paper)] px-2.5 py-1 font-mono text-[10px] font-bold text-[var(--graphite)] uppercase">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--graphite)]">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Company Facts & Leadership ── */}
      <AnimatedSection className="bg-[var(--ink)] px-4 py-24 text-[var(--paper)] sm:px-6" animation="fade-up">
        <div className="mx-auto w-full max-w-6xl">
          {/* Company Facts Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            {companyFacts.map((fact) => (
              <div key={fact.label} className="p-4 text-center">
                <p className="font-mono text-xs tracking-wider text-[var(--signal)] uppercase">{fact.label}</p>
                <p className="mt-2 font-display text-2xl font-semibold sm:text-3xl text-[var(--paper)]">{fact.value}</p>
                <p className="mt-1 text-xs text-[var(--graphite-on-dark)]">{fact.subtext}</p>
              </div>
            ))}
          </div>

          {/* Leadership */}
          <div className="mt-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">Leadership</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--paper)] sm:text-5xl">
                The team behind the signal.
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {leaders.map((leader, i) => (
                <AnimatedSection
                  key={leader.name}
                  as="article"
                  animation="fade-up"
                  stagger
                  staggerIndex={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--signal)]/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--signal)]/10 font-mono text-lg font-bold text-[var(--signal)]">
                    {leader.initials}
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-[var(--paper)]">{leader.name}</h3>
                  <p className="mt-1 font-mono text-xs tracking-wider text-[var(--copper)] uppercase">
                    {leader.role}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--graphite-on-dark)]">
                    {leader.summary}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── 8. CTA ── */}
      <section className="bg-[var(--paper)] px-4 py-24 text-[var(--ink)] sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--copper)]/30 bg-gradient-to-br from-[var(--copper)]/10 via-[var(--paper)] to-transparent p-10 text-center shadow-lg">
          <h2 className="font-display text-3xl text-[var(--ink)] sm:text-4xl">
            Interested in partnering with ThinkClock Battery Labs?
          </h2>
          <p className="mt-4 text-base text-[var(--graphite)]">
            Explore diagnostic validation, battery pack benchmarking, or second-life triage with our team.
          </p>
          <SendButton href="/contact" label="Get in touch" className="mt-8" />
        </div>
      </section>
    </main>
  );
}
