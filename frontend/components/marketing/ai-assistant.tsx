"use client";

import { useRef, useState, useEffect } from "react";

const faqs = [
  { q: "What does ThinkClock do?", a: "We build battery diagnostics that make invisible cell health measurable — using EIS, acoustic, and RF spectroscopy." },
  { q: "Who is the CEO?", a: "Babu Devnarayan leads ThinkClock Battery Labs." },
  { q: "What products do you offer?", a: "BatteryScope for fleet health monitoring, CellScope for portable diagnostics, and Digital Twinning services." },
  { q: "Where are you based?", a: "UK-based, Innovate UK-backed R&D lab." },
];

const fallback = "Great question! Please contact us at hello@thinkclock.com and our team will get back to you with the details.";

function findAnswer(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("do") || q.includes("what") || q.includes("battery")) return faqs[0].a;
  if (q.includes("ceo") || q.includes("founder") || q.includes("babu")) return faqs[1].a;
  if (q.includes("product") || q.includes("batteryscope") || q.includes("cellscope")) return faqs[2].a;
  if (q.includes("based") || q.includes("location") || q.includes("uk") || q.includes("where")) return faqs[3].a;
  return fallback;
}

export function AiAssistant() {
  const [open, setOpen] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const [pos, setPos] = useState({ x: 0, y: 100 });
  const dragRef = useRef({ dragging: false, startX: 0, startY: 0, origX: 0, origY: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPos({ x: 16, y: window.innerHeight - 220 });
  }, []);

  const clamp = (x: number, y: number) => ({
    x: Math.max(8, Math.min(x, window.innerWidth - 300)),
    y: Math.max(8, Math.min(y, window.innerHeight - 100)),
  });

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current.dragging = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
    dragRef.current.origX = pos.x;
    dragRef.current.origY = pos.y;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.dragging) return;
    setPos(clamp(
      dragRef.current.origX + (e.clientX - dragRef.current.startX),
      dragRef.current.origY + (e.clientY - dragRef.current.startY),
    ));
  };

  const onPointerUp = () => {
    dragRef.current.dragging = false;
  };

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
      className="fixed z-50 select-none"
      style={{ left: pos.x, top: pos.y }}
    >
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-white/30 bg-black/40 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[var(--signal)]/70 hover:shadow-[var(--signal)]/20"
        >
          <video
            src="/Ai.mp4"
            muted
            loop
            playsInline
            autoPlay
            className="h-full w-full object-cover"
          />
        </button>
      ) : (
        <div className="w-80 overflow-hidden rounded-2xl border border-white/20 bg-[var(--ink)]/95 shadow-2xl shadow-black/40 backdrop-blur-2xl">
          <div
            className="flex cursor-grab items-center justify-between border-b border-white/10 px-4 py-3 active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 overflow-hidden rounded-full">
                <video src="/Ai.mp4" muted loop playsInline autoPlay className="h-full w-full object-cover" />
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