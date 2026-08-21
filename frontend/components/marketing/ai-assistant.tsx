"use client";

import { useRef, useState } from "react";

const faqs = [
  { q: "What does ThinkClock do?", a: "We build battery diagnostics that make invisible cell health measurable: using EIS, acoustic, and RF spectroscopy." },
  { q: "Who is the CEO?", a: "Babu Devnarayan leads ThinkClock Battery Labs." },
  { q: "What products do you offer?", a: "BatteryScope for fleet health monitoring, CellScope for portable diagnostics, and Digital Twinning services." },
  { q: "Where are you based?", a: "UK-based, Innovate UK-backed R&D lab." },
];

const fallback = "Great question! Please contact us at contact@thinkclock.com and our team will get back to you with the details.";

function findAnswer(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("do") || q.includes("what") || q.includes("battery")) return faqs[0].a;
  if (q.includes("ceo") || q.includes("founder") || q.includes("babu")) return faqs[1].a;
  if (q.includes("product") || q.includes("batteryscope") || q.includes("cellscope")) return faqs[2].a;
  if (q.includes("based") || q.includes("location") || q.includes("uk") || q.includes("where")) return faqs[3].a;
  return fallback;
}

function ThinkClockLoader({ size = "h-22 w-22", isHeader = false }: { size?: string; isHeader?: boolean }) {
  // Outer evolving micro-dots (clockwise)
  const outerParticles = [
    { angle: 0, radius: isHeader ? 12 : 36, size: isHeader ? "w-1 h-1" : "w-1.5 h-1.5", delay: "0s", color: "bg-[#00f2fe]" },
    { angle: 45, radius: isHeader ? 14 : 39, size: isHeader ? "w-0.5 h-0.5" : "w-1 h-1", delay: "0.4s", color: "bg-[#38bdf8]" },
    { angle: 90, radius: isHeader ? 11 : 34, size: isHeader ? "w-1 h-1" : "w-1.5 h-1.5", delay: "0.8s", color: "bg-[#e087ff]" },
    { angle: 135, radius: isHeader ? 15 : 40, size: isHeader ? "w-0.5 h-0.5" : "w-1 h-1", delay: "1.2s", color: "bg-[#5ce1c9]" },
    { angle: 180, radius: isHeader ? 12 : 37, size: isHeader ? "w-1 h-1" : "w-1.5 h-1.5", delay: "1.6s", color: "bg-[#00e5ff]" },
    { angle: 225, radius: isHeader ? 14 : 40, size: isHeader ? "w-0.5 h-0.5" : "w-1 h-1", delay: "2.0s", color: "bg-[#ff7043]" },
    { angle: 270, radius: isHeader ? 11 : 35, size: isHeader ? "w-1 h-1" : "w-1.5 h-1.5", delay: "2.4s", color: "bg-[#3b82f6]" },
    { angle: 315, radius: isHeader ? 15 : 41, size: isHeader ? "w-0.5 h-0.5" : "w-1 h-1", delay: "2.8s", color: "bg-[#a7f3d0]" },
  ];

  // Inner evolving micro-dots (counter-clockwise)
  const innerParticles = [
    { angle: 20, radius: isHeader ? 8 : 26, size: isHeader ? "w-0.5 h-0.5" : "w-1 h-1", delay: "0.2s", color: "bg-[#00f2fe]" },
    { angle: 80, radius: isHeader ? 9 : 28, size: isHeader ? "w-0.5 h-0.5" : "w-0.5 h-0.5", delay: "0.6s", color: "bg-[#5ce1c9]" },
    { angle: 140, radius: isHeader ? 7 : 24, size: isHeader ? "w-0.5 h-0.5" : "w-1 h-1", delay: "1.0s", color: "bg-[#ff7043]" },
    { angle: 200, radius: isHeader ? 9 : 29, size: isHeader ? "w-0.5 h-0.5" : "w-0.5 h-0.5", delay: "1.4s", color: "bg-[#38bdf8]" },
    { angle: 260, radius: isHeader ? 8 : 25, size: isHeader ? "w-0.5 h-0.5" : "w-1 h-1", delay: "1.8s", color: "bg-[#e087ff]" },
    { angle: 320, radius: isHeader ? 9 : 27, size: isHeader ? "w-0.5 h-0.5" : "w-0.5 h-0.5", delay: "2.2s", color: "bg-[#00e5ff]" },
  ];

  return (
    <div className={`relative flex items-center justify-center ${size} select-none transition-transform duration-300 hover:scale-110`}>
      {/* Outer Evolving Bubble Ring (Clockwise) */}
      <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
        {outerParticles.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180;
          const x = Math.cos(rad) * p.radius;
          const y = Math.sin(rad) * p.radius;
          return (
            <div
              key={`outer-${i}`}
              className={`absolute rounded-full ${p.size} ${p.color} shadow-[0_0_10px_rgba(255,255,255,0.9)] ai-bubble-particle`}
              style={{
                top: `calc(50% + ${y}px - ${isHeader ? 2 : 3}px)`,
                left: `calc(50% + ${x}px - ${isHeader ? 2 : 3}px)`,
                animationDelay: p.delay,
              }}
            />
          );
        })}
      </div>

      {/* Inner Evolving Bubble Ring (Counter-Clockwise) */}
      <div className="absolute inset-0 animate-spin-reverse">
        {innerParticles.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180;
          const x = Math.cos(rad) * p.radius;
          const y = Math.sin(rad) * p.radius;
          return (
            <div
              key={`inner-${i}`}
              className={`absolute rounded-full ${p.size} ${p.color} shadow-[0_0_8px_rgba(255,255,255,0.9)] ai-bubble-particle`}
              style={{
                top: `calc(50% + ${y}px - ${isHeader ? 1 : 2}px)`,
                left: `calc(50% + ${x}px - ${isHeader ? 1 : 2}px)`,
                animationDelay: p.delay,
              }}
            />
          );
        })}
      </div>

      {/* High-Visibility Dynamic Color-Shifting Core */}
      <div className={`relative z-10 rounded-full ai-dynamic-core ${isHeader ? "h-4 w-4" : "h-11 w-11"} shadow-[0_0_12px_rgba(92,225,201,0.4)]`} />
    </div>
  );
}

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAsk = (faq: typeof faqs[0]) => {
    setAnswer(faq.a);
    setShowChat(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setAnswer(findAnswer(input.trim()));
    setShowChat(true);
    setInput("");
  };

  return (
    <div
      data-ai-assistant-root
      className="fixed z-50 select-none"
      style={{
        left: 16,
        bottom: 16,
      }}
    >
      {!open ? (
        <div className="group relative flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Open ThinkClock AI Assistant"
          >
            <ThinkClockLoader size="h-22 w-22" />
          </button>

          {/* Aesthetic Hover Popup Badge */}
          <div className="pointer-events-none absolute left-24 whitespace-nowrap rounded-xl border border-white/20 bg-[var(--ink)]/95 px-3.5 py-2 shadow-2xl backdrop-blur-2xl opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--signal)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--signal)]" />
              </span>
              <span className="font-display text-xs font-semibold tracking-wide bg-gradient-to-r from-[#5ce1c9] via-[#60a5fa] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(92,225,201,0.4)]">
                How may I assist you today?
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-80 overflow-hidden rounded-2xl border border-white/20 bg-[var(--ink)]/95 shadow-2xl shadow-black/40 backdrop-blur-2xl">
          <div
            className="flex items-center justify-between border-b border-white/10 px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full">
                <ThinkClockLoader size="h-7 w-7" isHeader />
              </div>
              <span className="text-sm font-medium text-white">Ask about ThinkClock</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-6 w-6 items-center justify-center rounded-md text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {!showChat ? (
            <div className="p-4">
              <p className="mb-3 text-xs text-white/60">Ask me anything about ThinkClock:</p>
              <div className="flex flex-col gap-2">
                {faqs.map((faq) => (
                  <button
                    key={faq.q}
                    type="button"
                    onClick={() => handleAsk(faq)}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-white/80 transition-all hover:border-[var(--signal)]/30 hover:bg-white/10"
                  >
                    {faq.q}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="mt-4 border-t border-white/10 pt-4">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                    className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/40 outline-none transition-all focus:border-[var(--signal)]/50"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="shrink-0 rounded-lg bg-[var(--signal)] px-3 py-2 text-xs font-medium text-[var(--ink)] transition-all hover:brightness-110 disabled:opacity-40"
                  >
                    Ask
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-4">
              <div className="rounded-lg border border-[var(--signal)]/20 bg-[var(--signal)]/10 px-3 py-3">
                <p className="text-xs leading-relaxed text-white/90">{answer}</p>
              </div>
              <button
                type="button"
                onClick={() => setShowChat(false)}
                className="mt-3 text-xs text-white/50 transition-colors hover:text-white"
              >
                &larr; Ask another question
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}