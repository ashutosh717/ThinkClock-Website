"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
  id: number;
  category: "Overview" | "Products" | "Technology" | "Deployment";
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    category: "Overview",
    question: "What is ThinkClock Battery Labs?",
    answer: "ThinkClock Battery Labs is an R&D-driven organization focused on Battery Health Analytics. Supported and funded by Innovate UK, we combine non-invasive spectroscopy, digital twins, AI, and machine learning to deliver complete battery cell health signatures in seconds without disassembly or charge-discharge cycling.",
  },
  {
    id: 2,
    category: "Products",
    question: "What is the difference between BatteryScope-C Manual and Automated?",
    answer: "BatteryScope-C Manual is a bench-deployable, operator-led unit ideal for lab QC sampling, pilot grading, and second-life evaluation (1,920 cells/8-hr shift). BatteryScope-C Automated integrates directly into production or recycling lines with automated cell input, autonomous testing, and smart multi-channel sorting by State-of-Health (2,880 cells/8-hr shift).",
  },
  {
    id: 3,
    category: "Products",
    question: "What is BatteryScope-P and how does it scale cell diagnostics to packs?",
    answer: "BatteryScope-P scales cell-level spectroscopic intelligence up to pack-level architectures. It helps EV OEMs, ESS integrators, and fleet operators understand how cell-to-cell variability translates into overall pack performance, lifetime degradation, and cascade safety risks.",
  },
  {
    id: 4,
    category: "Technology",
    question: "Why is non-invasive spectroscopy superior to traditional battery cycling?",
    answer: "Traditional battery cyclers require hours or days of charge-discharge cycling, consuming high energy and sacrificing precious cycle life just to measure health. BatteryScope delivers a full 75-second diagnostic report assessing State of Health (SoH), self-discharge, DCIR, predictive Remaining Useful Life (RUL), and internal micro-faults with zero cycle loss and zero damage.",
  },
  {
    id: 5,
    category: "Technology",
    question: "What cell form factors and chemistries does BatteryScope support?",
    answer: "Out of the box, BatteryScope-C supports profiling and grading of LG 21700 cylindrical cells with flexible clamping. It can be rapidly trained for 18650 and other cylindrical or prismatic form factors across LFP, NMC, solid-state, and sodium-ion chemistries.",
  },
  {
    id: 6,
    category: "Technology",
    question: "What specific metrics and health signatures are measured during a test?",
    answer: "Each 75-second test measures State of Health (SoH), predicted self-discharge rate, internal resistance (DCIR), predictive Remaining Useful Life (RUL), proprietary cell health spectroscopic fingerprints, and micro-fault indicators (detecting internal short circuits and electrolyte leaks).",
  },
  {
    id: 7,
    category: "Deployment",
    question: "Is BatteryScope-C ready for commercial customer deployment today?",
    answer: "Yes. BatteryScope-C Manual is a fully manufactured, production-ready diagnostic unit: not a lab prototype. Units can be deployed out-of-the-box for QA sampling, pilot-scale grading, and second-life battery triage.",
  },
  {
    id: 8,
    category: "Deployment",
    question: "Does ThinkClock offer Hardware-as-a-Service (HaaS) options?",
    answer: "Yes. In addition to direct hardware purchase, ThinkClock provides flexible Hardware-as-a-Service (HaaS) delivery models with low upfront cost, making lab-grade spectroscopy accessible for teams expanding their diagnostics capabilities.",
  },
  {
    id: 9,
    category: "Technology",
    question: "How accurate are ThinkClock's health and degradation models?",
    answer: "Our physics-informed digital twin AI models achieve over 99% accuracy in State-of-Health estimation and early fault detection: reducing laboratory characterization timelines from weeks down to seconds.",
  },
  {
    id: 10,
    category: "Deployment",
    question: "Can BatteryScope integrate with existing factory software and BMS systems?",
    answer: "Yes. BatteryScope comes fully connected with Wi-Fi, Ethernet, and HDMI readiness, alongside integrated software that auto-captures test values, generates reports, and streams data via RESTful APIs and CAN-bus telemetry.",
  },
  {
    id: 11,
    category: "Overview",
    question: "Where are ThinkClock's R&D facilities and global offices located?",
    answer: "ThinkClock operates an R&D Laboratory in Bengaluru, India (Sarjapur Road) and UK Headquarters in New Malden, United Kingdom (Kingspark Business Centre).",
  },
  {
    id: 12,
    category: "Deployment",
    question: "How can my team request a live BatteryScope demonstration or trial?",
    answer: "You can request a demo by contacting our engineering team at bdc@thinkclock.com (India) or ajith@thinkclock.com (UK), or by using our online contact request form.",
  },
];

const categories = ["All", "Overview", "Products", "Technology", "Deployment"] as const;

export function FaqAccordion() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openId, setOpenId] = useState<number | null>(1);

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-[6px] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? "border border-[var(--signal)] bg-[var(--signal)] text-[var(--ink)] shadow-md shadow-[var(--signal)]/20"
                  : "border border-[var(--border)] bg-[var(--card)] text-[var(--paper)] hover:border-[var(--signal)]/40"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className="mt-8 space-y-3.5">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          const contentId = `faq-answer-${faq.id}`;
          return (
            <div
              key={faq.id}
              className={`overflow-hidden rounded-[10px] border transition-all duration-300 ${
                isOpen
                  ? "border-[var(--signal)]/60 bg-[var(--card)] shadow-xl"
                  : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--signal)]/30"
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="flex w-full items-center justify-between p-5 text-left focus:outline-none focus:ring-1 focus:ring-[var(--signal)]"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-[4px] border border-[var(--copper)]/30 bg-[var(--copper)]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[var(--copper)] uppercase tracking-wider">
                    {faq.category}
                  </span>
                  <h3 className="font-display text-base font-bold text-[var(--paper)] sm:text-lg">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] border border-[var(--border)] text-sm transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[var(--signal)] text-[var(--ink)] border-[var(--signal)]" : "text-[var(--paper)] bg-[var(--secondary)]"
                  }`}
                >
                  ↓
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="border-t border-[var(--border)] px-5 pb-5 pt-3.5 text-xs sm:text-sm leading-relaxed text-[var(--graphite-on-dark)]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
