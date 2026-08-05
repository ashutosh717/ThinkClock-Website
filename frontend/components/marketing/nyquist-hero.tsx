"use client";

import { useEffect, useRef, useState } from "react";
import { SendButton } from "@/components/ui/send-button";

type NyquistHeroProps = {
  title: string;
  subtitle: string;
};

const P_SENSING = "M45,290 C130,85 270,70 360,205 C412,278 458,285 515,290";
const P_MODELLING = "M45,290 C100,160 220,140 330,230 C390,272 440,280 515,290";
const P_ANALYTICS = "M45,290 C150,65 290,55 375,190 C425,265 465,275 515,290";

function interpolatePath(t: number): string {
  if (t <= 0) return P_SENSING;
  if (t >= 1) return P_ANALYTICS;

  const lerp = (a: number, b: number, p: number) => a + (b - a) * p;

  const parsePoints = (d: string) =>
    d.match(/[\d.]+/g)?.map(Number) ?? [];

  const a = parsePoints(t < 0.5 ? P_SENSING : P_MODELLING);
  const b = parsePoints(t < 0.5 ? P_MODELLING : P_ANALYTICS);
  const p = t < 0.5 ? t * 2 : (t - 0.5) * 2;

  if (a.length !== b.length) return t < 0.5 ? P_SENSING : P_MODELLING;

  const mid = a.map((v, i) => lerp(v, b[i], p));
  const cmds = ["M", "C", "C"];
  let result = "";
  let idx = 0;
  for (const cmd of cmds) {
    result += cmd + " ";
    const count = cmd === "M" ? 2 : 6;
    for (let j = 0; j < count; j++) {
      const val = mid[idx++];
      if (val == null) break;
      result += val.toFixed(1) + (j < count - 1 ? "," : " ");
    }
  }
  return result.trim();
}

export function NyquistHero({ title, subtitle }: NyquistHeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragRotate, setDragRotate] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let frameId = 0;
    const tick = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (winH - rect.top) / (winH + rect.height)));
      setScrollProgress(progress);
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    const onMouseMove = (e: MouseEvent) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!pathRef.current) return;
    const d = interpolatePath(scrollProgress);
    pathRef.current.setAttribute("d", d);
  }, [scrollProgress]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = (e.clientX - dragStart.current.x) * 0.3;
    const dy = (e.clientY - dragStart.current.y) * 0.3;
    setDragRotate({ x: dy, y: dx });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setDragRotate({ x: 0, y: 0 });
  };

  const statusIdx = scrollProgress < 0.33 ? 0 : scrollProgress < 0.66 ? 1 : 2;
  const statusLabels = ["Sensing", "Modelling", "Analytics"];

  const glowX = 15 + mousePos.x * 15;
  const glowY = 15 + mousePos.y * 15;
  const parallaxOffset = scrollProgress * 40;
  const contentOpacity = Math.max(0, 1 - scrollProgress * 0.4);
  const svgParallaxY = scrollProgress * 30;

  const tiltX = (mousePos.x - 0.5) * 6 + dragRotate.y;
  const tiltY = (mousePos.y - 0.5) * -6 + dragRotate.x;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[var(--ink)] px-4 pb-20 pt-20 sm:px-6 sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden="true">
        <div
          className="absolute h-80 w-80 rounded-full bg-[var(--signal)]/20 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            left: `${glowX}%`,
            top: `${glowY}%`,
            transform: `translate(-50%, calc(-50% - ${parallaxOffset * 0.3}px))`,
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[var(--copper)]/15 blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        />
        <div
          className="absolute top-1/4 right-[10%] h-48 w-48 rounded-full bg-[var(--signal)]/5 blur-3xl"
          style={{ transform: `translateY(${-parallaxOffset * 0.2}px)` }}
        />
      </div>

      <div className="relative mx-auto grid w-full gap-12 px-6 sm:px-12 lg:px-16 xl:px-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div style={{ opacity: contentOpacity, transform: `translateY(${scrollProgress * 20}px)` }}>
          <p className="font-mono text-xs tracking-[0.18em] text-[var(--signal)] uppercase">
            ThinkClock Battery Labs
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-[var(--paper)] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--graphite-on-dark)] sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <SendButton href="/contact" label="Request a demo" />
            <a
              href="/technology"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--graphite)]/50 px-6 py-3 font-medium text-[var(--paper)] transition-all hover:border-[var(--signal)]/50 hover:text-[var(--signal)]"
            >
              How it works
            </a>
          </div>
        </div>

        <div
          className="rounded-2xl border border-[var(--graphite)]/40 bg-black/30 p-4 shadow-2xl shadow-black/40 backdrop-blur-sm transition-all duration-1000 ease-out cursor-grab active:cursor-grabbing select-none"
          style={{
            transform: `perspective(1000px) rotateY(${tiltX}deg) rotateX(${tiltY}deg) translateY(${svgParallaxY}px)`,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 540 340"
            className="h-auto w-full pointer-events-none"
            role="img"
            aria-label="Animated signal trace"
          >
            <defs>
              <linearGradient id="nyq" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="var(--signal)" />
                <stop offset="100%" stopColor="var(--copper)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <rect x="0" y="0" width="540" height="340" fill="transparent" />
            <g stroke="rgba(91,102,99,0.35)" strokeWidth="1">
              <line x1="45" y1="290" x2="515" y2="290" />
              <line x1="45" y1="290" x2="45" y2="35" />
            </g>
            {["Sensing", "Modelling", "Analytics"].map((label, i) => (
              <text
                key={label}
                x={45 + (i + 1) * 120}
                y="310"
                textAnchor="middle"
                className="font-mono text-[9px]"
                fill="rgba(91,102,99,0.5)"
              >
                {label}
              </text>
            ))}
            <text x="30" y="160" textAnchor="middle" transform="rotate(-90, 30, 160)" className="font-mono text-[9px]" fill="rgba(91,102,99,0.4)">
              Signal
            </text>
            {[1, 2, 3].map((i) => (
              <line
                key={i}
                x1="45"
                y1={290 - i * 50}
                x2="55"
                y2={290 - i * 50}
                stroke="rgba(91,102,99,0.25)"
                strokeWidth="1"
              />
            ))}
            {[1, 2, 3].map((i) => (
              <line
                key={i + 3}
                x1={45 + i * 120}
                y1="290"
                x2={45 + i * 120}
                y2="282"
                stroke="rgba(91,102,99,0.25)"
                strokeWidth="1"
              />
            ))}
            <path
              ref={pathRef}
              d={P_SENSING}
              fill="none"
              stroke="url(#nyq)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            <circle cx="45" cy="290" r="4" fill="var(--signal)">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-mono text-xs text-[var(--graphite-on-dark)]">
              Signal trace &mdash; scroll to degrade
            </p>
            <span
              className="font-mono text-[10px] transition-colors duration-500"
              style={{ color: `var(--${statusIdx === 1 ? "copper" : "signal"})` }}
            >
              {statusLabels[statusIdx]}
            </span>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500"
        style={{ opacity: 1 - scrollProgress }}
      >
        <div className="flex animate-bounce flex-col items-center gap-1 opacity-40">
          <svg className="h-4 w-4 text-[var(--graphite-on-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}