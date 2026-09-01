import Image from "next/image";
import { Award, Microscope, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { PhaseJourney } from "@/components/about/phase-journey";
import { InteractiveBookGallery } from "@/components/about/interactive-book-gallery";
import { SendButton } from "@/components/ui/send-button";

import babuImg from "@/images/Leadership/babu.jpeg";
import ajithImg from "@/images/Leadership/Ajith.jpeg";
import sumanImg from "@/images/Leadership/Suman.jpg";

import companyImg1 from "@/images/Company/DSC01836.JPG.jpeg";
import companyImg2 from "@/images/Company/DSC02826.jpg.jpeg";
import companyImg3 from "@/images/Company/IMG_9628.JPG.jpeg";
import companyImg4 from "@/images/Company/WhatsApp Image 2026-08-24 at 9.49.49 AM.jpeg";
import companyImg5 from "@/images/Company/WhatsApp Image 2026-08-24 at 9.50.35 AM.jpeg";

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
        <strong className="text-[var(--paper)] font-bold">Ajith Muthayil</strong> is a seasoned product strategy expert and business leader with over 17 years of global experience in driving innovation, operational excellence, and sustainable technology solutions. As Co-founder and Chief Operating Officer at ThinkClock Battery Labs, he leads the company&apos;s operations, strategic growth, commercialization, customer development and partnerships, shaping the future of battery health analytics and clean mobility. Ajith previously served as <strong className="text-[var(--copper)] font-semibold">Global Product Manager at Johnson Controls</strong>, where he successfully led multiple <strong className="text-[var(--copper)] font-semibold">£10M+</strong> programs for <span className="text-[var(--copper)] font-medium">EN54-approved Fire Detection Panels and Loop Devices</span>. His leadership spanned across several countries, managing diverse cross-functional teams and aligning R&D with commercialization to deliver complex, regulatory-compliant products at scale. An <strong className="text-[var(--copper)] font-semibold">Electronics and Communications Engineer</strong> by profession and training, Ajith also holds an <strong className="text-[var(--copper)] font-semibold">MBA from the University of Westminster, London</strong>. Ajith excels at bridging the gap between research and commercialization, with a deep commitment to sustainable innovation. At ThinkClock, he is at the forefront of delivering <strong className="text-[var(--copper)] font-semibold">BatteryScope</strong> to customers — a next-generation Battery Health Analytics as a Service (HaaS) platform designed to revolutionize battery characterization, monitoring and lifecycle management. A champion of responsible tech and net-zero progress, Ajith is dedicated to forging global partnerships and driving ThinkClock&apos;s mission to power a more sustainable, data-driven battery ecosystem.
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
        As a Co-founder and Chief Marketing Officer at ThinkClock, <strong className="text-[var(--paper)] font-bold">Suman</strong> drives the company&apos;s marketing strategy, shaping how its deep-tech battery analytics innovations are adopted across mobility, energy storage, and recycling ecosystems. She focuses on translating complex diagnostic technologies into clear, compelling value propositions that enable stakeholders — from fleet operators to Battery OEMs, Recyclers, System Integrators, and financial partners — to confidently adopt new technologies like <strong className="text-[var(--copper)] font-semibold">BatteryScope</strong>. Driven by a deep personal commitment to <span className="text-[var(--copper)] font-medium">sustainability</span>, Suman is passionate about the power of storytelling in advancing the <span className="text-[var(--copper)] font-medium">circular economy</span> for battery assets. She believes that extending battery life, improving resource efficiency, and enabling responsible second-life deployment are essential to building a truly low-carbon energy future. Her work at ThinkClock is centered on unlocking real-world impact by connecting cutting-edge science with scalable market adoption, making battery reuse safer, more transparent, and economically viable.
      </>
    ),
  },
];

const coreActivities = [
  {
    title: "R&D Innovation",
    desc: "Next-gen diagnostics research across LFP, NMC, solid-state, and sodium-ion chemistries.",
    Icon: Microscope,
    color: "#0d9488",
  },
  {
    title: "Battery Characterization & Profiling",
    desc: "Deployment of the BatteryScope tool and third-party lab testing.",
    Icon: Award,
    color: "#c2410c",
  },
  {
    title: "Second-life Battery Enablement",
    desc: "Deploying second-life EV battery energy storage systems to replace fossil-fuel generators in emerging economies, with accurate SoH and RUL evaluation to unlock value in stationary storage and resale.",
    Icon: Sparkles,
    color: "#0d9488",
  },
];

const companyGallery = [
  {
    image: companyImg1,
    title: "ThinkClock Battery Labs Engineering Team",
    tag: "Core Team",
    desc: "The multidisciplinary team of engineers, researchers, and data scientists behind BatteryScope.",
  },
  {
    image: companyImg2,
    title: "BatteryScope-C Inauguration by British Deputy High Commission",
    tag: "UK–India Milestone",
    desc: "Officially launched by Mr. Owen Richards, Deputy Head of Mission, British Deputy High Commission Bengaluru, celebrating bilateral clean energy collaboration.",
  },
  {
    image: companyImg3,
    title: "BatteryScope-C Launch Week Showcase",
    tag: "Launch Milestone",
    desc: "Demonstrating the BatteryScope-C Manual and Automated systems to industry leaders, pack manufacturers, and recyclers during launch week.",
  },
  {
    image: companyImg4,
    title: "Partner Deployments & Field Trials",
    tag: "Collaborative R&D",
    desc: "Collaborating with battery recyclers, OEMs, and pack manufacturers across the UK and India.",
  },
  {
    image: companyImg5,
    title: "Ecosystem & Team Collaboration",
    tag: "Team & Community",
    desc: "Pioneering the circular battery economy with deep-tech diagnostics and clean mobility innovation.",
  },
];

export const metadata = {
  title: "About ThinkClock Battery Labs | Innovate UK Backed Battery Diagnostics",
  description:
    "Learn about ThinkClock Battery Labs — an Innovate UK-backed R&D organization pioneering non-invasive spectroscopy, digital twin AI, and machine learning for battery health analytics.",
};

export default function AboutPage() {
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
                About ThinkClock
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.15] text-[var(--paper)] sm:text-5xl lg:text-6xl">
              Innovate UK Backed Battery Health Intelligence
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--graphite-on-dark)] sm:text-lg lg:text-xl">
              ThinkClock Battery Labs is an R&amp;D-driven organization focused on Battery Health Analytics using non-invasive spectroscopy techniques, digital twins, AI, and machine learning. Our business is supported and funded by Innovate UK, the UK&apos;s national innovation agency for business-led innovation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Core Activities Grid ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
              Core Activities
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              What We Do
            </h2>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-3">
            {coreActivities.map((act, i) => (
              <AnimatedSection
                key={act.title}
                as="article"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group flex flex-col justify-between rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-[var(--signal)]/60"
              >
                <div>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-[10px] border shadow-sm transition-transform duration-300 group-hover:scale-105"
                    style={{
                      borderColor: `${act.color}40`,
                      backgroundColor: `${act.color}15`,
                    }}
                  >
                    <act.Icon className="h-6 w-6 stroke-[2]" style={{ color: act.color }} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold leading-snug text-[var(--paper)]">{act.title}</h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)]">{act.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Inside ThinkClock: Labs, Expos & Engineering Gallery ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-8 sm:mb-12" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
              ThinkClock In Action
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Inside Our Labs, Expos &amp; Field Engagements
            </h2>
            <p className="mt-4 text-base text-[var(--graphite-on-dark)] sm:text-lg">
              From lab-bench spectroscopy validation to live international exhibitions and industrial partner trials.
            </p>
          </AnimatedSection>

          {/* Interactive 3D Book Gallery */}
          <AnimatedSection animation="fade-up" className="mt-4">
            <InteractiveBookGallery items={companyGallery} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. Phase Journey (R&D Timeline) ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--copper)] uppercase">
              Development Roadmap
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              From Fundamental R&D to Production Deployments
            </h2>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10">
            <PhaseJourney />
          </div>
        </div>
      </section>

      {/* ── 5. Leadership ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-10 sm:mb-12" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Leadership
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-5xl">
              The team behind the signal.
            </h2>
          </AnimatedSection>

          <div className="space-y-12 sm:space-y-14">
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

                <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:items-stretch">
                  {/* Left: Leader Image */}
                  <div className="flex flex-col items-center">
                    <div className="group relative w-full max-w-[240px] flex-1 overflow-hidden rounded-[14px] border border-[var(--border)] bg-[var(--card)] shadow-2xl transition-all duration-500 hover:border-[var(--copper)] hover:shadow-[0_0_35px_rgba(201,122,74,0.25)]">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="240px"
                        priority={i === 0}
                      />
                    </div>

                    {/* Name & Social Icons under Image */}
                    <p className="mt-3 font-display text-base font-bold text-[var(--copper)]">
                      {leader.name}
                    </p>
                    <div className="mt-2 flex items-center justify-center gap-2.5">
                      {leader.linkedin && (
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--paper)] transition-all duration-300 hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2] hover:scale-110"
                          title="LinkedIn Profile"
                        >
                          <LinkedInIcon className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {leader.twitter && (
                        <a
                          href={leader.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--paper)] transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:scale-110"
                          title="X (Twitter) Profile"
                        >
                          <XIcon className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Bio Text */}
                  <div className="flex flex-col justify-center">
                    <p className="text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)]">
                      {leader.summary}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Partner CTA Banner ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-[14px] border border-[var(--signal)]/40 bg-[var(--card)] p-8 sm:p-12 text-center shadow-2xl">
            <h3 className="font-display text-2xl font-bold text-[var(--paper)] sm:text-3xl lg:text-4xl">
              Partner with ThinkClock Battery Labs
            </h3>
            <p className="mt-4 text-sm text-[var(--graphite-on-dark)] sm:text-base">
              Learn how non-invasive spectroscopy can transform your cell grading, second-life evaluation, or production line QA.
            </p>
            <div className="mt-8 flex justify-center">
              <SendButton href="/contact" label="Contact Our Team" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
