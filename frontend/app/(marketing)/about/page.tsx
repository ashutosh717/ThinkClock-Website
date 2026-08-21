import Image from "next/image";
import { Microscope, Activity, RotateCcw, Coins, Globe, Sprout, Trophy, Rocket, Award } from "lucide-react";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { PhaseJourney } from "@/components/about/phase-journey";
import { SendButton } from "@/components/ui/send-button";
import { PartnerMarquee } from "@/components/marketing/partner-marquee";

import babuImg from "@/images/Leadership/babu.jpeg";
import ajithImg from "@/images/Leadership/Ajith.jpeg";
import sumanImg from "@/images/Leadership/Suman.jpg";

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.43 1.43 0 1 0 0 2.86 1.43 1.43 0 0 0 0-2.86Z" />
    </svg>
  );
}

function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const coreActivities = [
  {
    title: "R&D Innovation",
    desc: "Next-gen diagnostics research across LFP, NMC, solid-state, and sodium-ion chemistries combining EIS, acoustic, and RF spectroscopy.",
    Icon: Microscope,
    color: "#5ce1c9",
  },
  {
    title: "Battery Characterization & Profiling",
    desc: "Deployment of the BatteryScope tool for high-speed non-invasive cell profiling, 6-channel simultaneous testing, and third-party lab triage.",
    Icon: Activity,
    color: "#c97a4a",
  },
  {
    title: "Second-Life Battery Enablement",
    desc: "Deploying second-life EV battery energy storage systems (BESS) to replace fossil-fuel generators in emerging economies, with accurate SoH and RUL evaluation.",
    Icon: RotateCcw,
    color: "#5ce1c9",
  },
];

const backingRecognition = [
  {
    title: "£246,050 UKRI Grant",
    desc: "Awarded £246,050 in core R&D funding from UKRI Innovate UK between April and July 2025.",
    badge: "R&D Funding",
    Icon: Coins,
    color: "#5ce1c9",
  },
  {
    title: "Innovate UK GBIP Australia",
    desc: "Selected by Innovate UK for the Global Business Innovation Programme to Australia focusing on battery technologies.",
    badge: "GBIP Australia",
    Icon: Globe,
    color: "#c97a4a",
  },
  {
    title: "ZE-Gen Accelerator Phase 1",
    desc: "Consortium award with Celloop and Decibels Lab under Innovate UK's Zero Emission Generators Accelerator.",
    badge: "ZE-Gen Award",
    Icon: Sprout,
    color: "#34d399",
  },
  {
    title: "Cleantech Open 2024",
    desc: "Named among the Global Top 20 companies in clean technology innovation.",
    badge: "Top 20 Global",
    Icon: Trophy,
    color: "#fbbf24",
  },
  {
    title: "Innovate UK GIP T-Hub",
    desc: "Selected for the Global Incubator Programme powered by Innovate UK in partnership with T-Hub, Hyderabad.",
    badge: "GIP Hyderabad",
    Icon: Rocket,
    color: "#5ce1c9",
  },
  {
    title: "India Energy Week Recognition",
    desc: "Recognised by UK Department for Business and Trade (DBT) as a UK clean energy business in UK–India collaboration.",
    badge: "UK DBT Clean Tech",
    Icon: Award,
    color: "#c97a4a",
  },
];

const companyFacts = [
  { label: "Supported & Funded", value: "Innovate UK", subtext: "National Innovation Agency" },
  { label: "UK Office", value: "New Malden, KT3 3ST", subtext: "Kingspark Business Centre" },
  { label: "India R&D Lab", value: "Bengaluru 562125", subtext: "Varthur-Sarjapur Road" },
];

const leaders = [
  {
    roleHeader: "About CEO, ThinkClock Battery Labs",
    name: "Babu Devnarayan",
    role: "Co-Founder & Chief Executive Officer",
    image: babuImg,
    linkedin: "https://www.linkedin.com/in/bdevnarayan/",
    twitter: "https://x.com/BDevnarayan",
    summary: (
      <>
        <strong className="text-[var(--paper)] font-bold">Babu Devnarayan</strong> has over 15-years of R&D experience spanning across Academia (<strong className="text-[var(--paper)] font-bold">Imperial College London</strong>, IIIT Allahabad, India) and Industry in the UK ( <strong className="text-[var(--copper)] font-semibold">Rolls-Royce Aerospace</strong>, Cobham, Ultra CSS, Trelleborg Offshore, Xtract One etc.). His current expertise is focused on Data-driven modelling of complex physical systems (such as batteries), creating digital twins by combining Physics-based models with Machine Learning, developing <span className="text-[var(--copper)] font-medium">soft-sensors for Battery Health Monitoring</span> with low-cost hardware while exploiting the digital-twins, Spectroscopic techniques for non-invasive sensing. He has a proven track record of conceptualizing high-impact novel technologies and successfully taking them to field deployments. While working at Xtract One Technologies, he has transformed a questionable academic concept into a field-deployable flagship product for the company related to Concealed Weapons Detection using RF Spectroscopy within a year. One of his <span className="text-[var(--copper)] font-medium">patented invention: CogniSense</span> (related to Machine monitoring using RF Spectroscopy) from his PhD research at <strong className="text-[var(--copper)] font-semibold">Imperial College London</strong> (one of the top-10 universities in the world) has resulted in a spinout in 2017. It was awarded <strong className="text-[var(--copper)] font-semibold">£200,000</strong> of funding by the Technology Transfer Office of Imperial College based on its novelty and commercial potential. He is an alumnus of <strong className="text-[var(--copper)] font-semibold">Entrepreneur First</strong> (LD10 batch), which is a globally renowned startup accelerator.
      </>
    ),
  },
  {
    roleHeader: "About COO, ThinkClock Battery Labs",
    name: "Ajith Muthayil",
    role: "Co-Founder & Chief Operating Officer",
    image: ajithImg,
    linkedin: "https://www.linkedin.com/in/ajithmuthayil/",
    twitter: null,
    summary: (
      <>
        <strong className="text-[var(--paper)] font-bold">Ajith Muthayil</strong> is a seasoned product strategy expert and business leader with over 17 years of global experience in driving innovation, operational excellence, and sustainable technology solutions. As Co-founder and Chief Operating Officer at ThinkClock Battery Labs, he leads the company&apos;s operations, strategic growth, commercialization, customer development and partnerships, shaping the future of battery health analytics and clean mobility. Ajith previously served as <strong className="text-[var(--copper)] font-semibold">Global Product Manager at Johnson Controls</strong>, where he successfully led multiple <strong className="text-[var(--copper)] font-semibold">£10M+</strong> programs for <span className="text-[var(--copper)] font-medium">EN54-approved Fire Detection Panels and Loop Devices</span>. His leadership spanned across several countries, managing diverse cross-functional teams and aligning R&D with commercialization to deliver complex, regulatory-compliant products at scale. An <strong className="text-[var(--copper)] font-semibold">Electronics and Communications Engineer</strong> by profession and training, Ajith also holds an <strong className="text-[var(--copper)] font-semibold">MBA from the University of Westminster, London</strong>. Ajith excels at bridging the gap between research and commercialization, with a deep commitment to sustainable innovation. At ThinkClock, he is at the forefront of delivering <strong className="text-[var(--copper)] font-semibold">BatteryScope</strong> to customers : a next-generation Battery Health Analytics as a Service (HaaS) platform designed to revolutionize battery characterization, monitoring and lifecycle management. A champion of responsible tech and net-zero progress, Ajith is dedicated to forging global partnerships and driving ThinkClock&apos;s mission to power a more sustainable, data-driven battery ecosystem.
      </>
    ),
  },
  {
    roleHeader: "About CMO, ThinkClock Battery Labs",
    name: "Suman",
    role: "Co-Founder & Chief Marketing Officer",
    image: sumanImg,
    linkedin: null,
    twitter: null,
    summary: (
      <>
        As a Co-founder and Chief Marketing Officer at ThinkClock, <strong className="text-[var(--paper)] font-bold">Suman</strong> drives the company&apos;s marketing strategy, shaping how its deep-tech battery analytics innovations are adopted across mobility, energy storage, and recycling ecosystems. She focuses on translating complex diagnostic technologies into clear, compelling value propositions that enable stakeholders : from fleet operators to Battery OEMs, Recyclers, System Integrators, and financial partners : to confidently adopt new technologies like <strong className="text-[var(--copper)] font-semibold">BatteryScope</strong>. Driven by a deep personal commitment to <span className="text-[var(--copper)] font-medium">sustainability</span>, Suman is passionate about the power of storytelling in advancing the <span className="text-[var(--copper)] font-medium">circular economy</span> for battery assets. She believes that extending battery life, improving resource efficiency, and enabling responsible second-life deployment are essential to building a truly low-carbon energy future. Her work at ThinkClock is centered on unlocking real-world impact by connecting cutting-edge science with scalable market adoption, making battery reuse safer, more transparent, and economically viable.
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden bg-[var(--ink)] px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--signal)]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[var(--copper)]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              ThinkClock Battery Labs | Sensing, Modelling, Analytics
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-[var(--paper)] sm:text-5xl lg:text-6xl">
              Innovate UK-backed battery intelligence grounded in lab reality.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite-on-dark)] sm:text-xl">
              ThinkClock Battery Labs is an R&D-driven organization focused on Battery Health Analytics using non-invasive spectroscopy techniques, digital twins, AI, and machine learning. Supported and funded by Innovate UK.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Who We Are ── */}
      <section className="bg-[var(--paper)] px-6 py-28 text-[var(--ink)] sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-5xl">
          <AnimatedSection className="mx-auto text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
              Who We Are
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--ink)] sm:text-5xl">
              R&D-driven battery health analytics.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite)] sm:text-xl">
              Batteries don&apos;t fail randomly. They fail because of what we don&apos;t measure. ThinkClock exists to close that blind spot by relating microscopic spectroscopic data with observable system-level behaviour through models based on physics, digital twins, and machine learning.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3. Core Activities ── */}
      <AnimatedSection className="bg-[var(--ink)] px-6 py-28 text-[var(--paper)] sm:px-12 lg:px-16 xl:px-24" animation="fade-up">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Core Activities
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-5xl">
              Three pillars driving our R&D mission.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {coreActivities.map((item, i) => (
              <AnimatedSection
                key={item.title}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--signal)]/40"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}35`,
                  }}
                >
                  <item.Icon className="h-7 w-7 stroke-[2]" style={{ color: item.color }} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-[var(--paper)]">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--graphite-on-dark)]">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── 4. Strategic Partnerships ── */}
      <section className="bg-[var(--ink)] px-6 py-24 text-[var(--paper)] sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Strategic Partnerships
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-5xl">
              Global collaborations driving innovation.
            </h2>
          </AnimatedSection>

          <div className="mt-10">
            <PartnerMarquee />
          </div>
        </div>
      </section>

      {/* ── 5. Development Roadmap ── */}
      <PhaseJourney />

      {/* ── 6. Backing & Recognition ── */}
      <section className="bg-[var(--paper)] px-6 py-28 text-[var(--ink)] sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Funding & Accolades
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--ink)] sm:text-5xl">
              Backing & international recognition.
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {backingRecognition.map((item, i) => (
              <AnimatedSection
                key={item.title}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-3xl border border-[var(--graphite)]/20 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${item.color}15`,
                      borderColor: `${item.color}35`,
                    }}
                  >
                    <item.Icon className="h-6 w-6 stroke-[2]" style={{ color: item.color }} />
                  </div>
                  <span className="rounded-full bg-[var(--paper)] px-3 py-1 font-mono text-xs font-bold text-[var(--graphite)] uppercase">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--graphite)]">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Company Facts & Leadership ── */}
      <AnimatedSection className="bg-[var(--ink)] px-6 py-28 text-[var(--paper)] sm:px-12 lg:px-16 xl:px-24" animation="fade-up">
        <div className="mx-auto w-full max-w-7xl">
          {/* Company Facts Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            {companyFacts.map((fact) => (
              <div key={fact.label} className="p-6 text-center">
                <p className="font-mono text-xs font-semibold tracking-wider text-[var(--signal)] uppercase">{fact.label}</p>
                <p className="mt-3 font-display text-3xl font-bold sm:text-4xl text-[var(--paper)]">{fact.value}</p>
                <p className="mt-2 text-sm text-[var(--graphite-on-dark)] font-medium">{fact.subtext}</p>
              </div>
            ))}
          </div>

          {/* Leadership Section */}
          <div className="mt-28">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">Leadership</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-5xl">
                The team behind the signal.
              </h2>
            </div>

            <div className="space-y-20">
              {leaders.map((leader, i) => (
                <AnimatedSection
                  key={leader.name}
                  as="article"
                  animation="fade-up"
                  stagger
                  staggerIndex={i}
                  className="space-y-6"
                >
                  <h3 className="font-display text-2xl font-bold text-[var(--copper)] sm:text-3xl">
                    {leader.roleHeader}
                  </h3>

                  <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
                    {/* Left: Leader Image & Socials */}
                    <div className="flex flex-col items-center">
                      <div className="group relative w-full max-w-[320px] aspect-[4/5] overflow-hidden rounded-3xl border border-white/20 bg-black/40 shadow-2xl transition-all duration-500 hover:border-[var(--copper)] hover:shadow-[0_0_35px_rgba(201,122,74,0.25)]">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="320px"
                          priority={i === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
                      </div>

                      {/* Social Icons under Image */}
                      <div className="mt-4 flex items-center justify-center gap-3">
                        {leader.linkedin && (
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#0a66c2] hover:scale-110"
                            title="LinkedIn Profile"
                          >
                            <LinkedInIcon className="h-4 w-4" />
                          </a>
                        )}
                        {leader.twitter && (
                          <a
                            href={leader.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-black hover:border hover:border-white/40 hover:scale-110"
                            title="X (Twitter) Profile"
                          >
                            <XIcon className="h-4 w-4" />
                          </a>
                        )}
                      </div>

                      <p className="mt-2 font-display text-lg font-bold text-[var(--copper)]">
                        {leader.name}
                      </p>
                    </div>

                    {/* Right: Bio Text Paragraph */}
                    <div className="flex flex-col justify-between py-1">
                      <p className="text-base sm:text-lg leading-relaxed text-[var(--paper)]/90">
                        {leader.summary}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── 8. CTA ── */}
      <section className="bg-[var(--paper)] px-6 py-28 text-[var(--ink)] sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--copper)]/30 bg-gradient-to-br from-[var(--copper)]/10 via-[var(--paper)] to-transparent p-10 sm:p-12 text-center shadow-lg">
          <h2 className="font-display text-3xl font-bold text-[var(--ink)] sm:text-4xl lg:text-5xl">
            Interested in partnering with ThinkClock Battery Labs?
          </h2>
          <p className="mt-4 text-lg text-[var(--graphite)]">
            Explore diagnostic validation, battery pack benchmarking, or second-life triage with our team.
          </p>
          <SendButton href="/contact" label="Request a demo" className="mt-8" />
        </div>
      </section>
    </main>
  );
}
