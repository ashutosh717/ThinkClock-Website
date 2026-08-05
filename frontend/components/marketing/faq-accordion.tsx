"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What is ThinkClock Battery Labs?",
    answer: "ThinkClock Battery Labs is a deep-tech battery intelligence company based in the UK. We combine physics-aware digital twins, Electrochemical Impedance Spectroscopy (EIS), acoustic, and RF traces to predict battery degradation, safety risks, and remaining useful life in seconds.",
  },
  {
    id: 2,
    question: "What is BatteryScope-C and how does it work?",
    answer: "BatteryScope-C is our cloud-native battery diagnostics platform. It ingests multi-spectral impedance, thermal, and electrical traces from EV fleets, lab cycling stations, and energy storage systems to deliver real-time State-of-Health (SoH) metrics and physical defect mapping.",
  },
  {
    id: 3,
    question: "What is CellScope portable instrumentation?",
    answer: "CellScope is our proprietary, high-speed hardware unit engineered for field triage and lab screening. It enables battery technicians and engineers to execute non-invasive spectroscopy on battery cells and modules without opening or damaging the pack.",
  },
  {
    id: 4,
    question: "How accurate are ThinkClock's health and safety predictions?",
    answer: "Our physics-informed AI models achieve over 99.2% accuracy in State-of-Health estimation and early lithium plating detection—reducing traditional laboratory testing cycles from weeks down to seconds.",
  },
  {
    id: 5,
    question: "Can ThinkClock integrate with existing BMS and cloud platforms?",
    answer: "Yes. ThinkClock provides RESTful APIs, Python SDKs, and CAN-bus gateway modules designed to integrate seamlessly into OEM battery management systems, test bench software, and fleet cloud telemetry pipelines.",
  },
  {
    id: 6,
    question: "Who uses ThinkClock's battery diagnostic solutions?",
    answer: "ThinkClock serves EV manufacturers (OEMs), battery cell gigafactories, grid energy storage operators, fleet operators, and second-life battery repurposing facilities across Europe and global markets.",
  },
];

export function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-[var(--signal)]/50 bg-[var(--signal)]/5 shadow-xl shadow-[var(--signal)]/10"
                : "border-[var(--graphite)]/30 bg-white/5 hover:border-[var(--copper)]/40"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(faq.id)}
              className="flex w-full items-center justify-between p-6 text-left transition-colors focus:outline-none"
            >
              <span className="font-display text-lg font-semibold text-[var(--paper)]">
                {faq.question}
              </span>
              <span
                className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 bg-[var(--signal)] text-[var(--ink)]"
                    : "bg-white/10 text-[var(--graphite-on-dark)]"
                }`}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="px-6 pb-6 pt-0 text-[var(--graphite-on-dark)] leading-relaxed text-sm">
                    <motion.p
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
