"use client";

import { useEffect, useRef, useState } from "react";
import { SendButton } from "@/components/ui/send-button";

type NyquistHeroProps = {
  title?: string;
  subtitle?: string;
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

export function NyquistHero({
  title = "Battery Characterization in Seconds. Not Hours.",
  subtitle = "Supported and funded by Innovate UK. Non-invasive spectroscopy, digital twins, and AI machine learning delivering total battery cell health signatures in 75 seconds without cycle loss.",
}: NyquistHeroProps) {
  const [slider, setSlider] = useState(0.5);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const [svgParallaxY, setSvgParallaxY] = useState(0);
  const isDragging = useRef(false);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const activeStageLabel =
    slider < 0.33 ? "SENSING" : slider < 0.66 ? "MODELLING" : "ANALYTICS";

  const activeStageValue =
    slider < 0.33
      ? "Multi-Physics Spectroscopy (EIS + Acoustic + RF)"
      : slider < 0.66
      ? "Digital Twin State Estimation & AI"
      : "Predictive SoH, RUL, Micro-Fault Diagnostics";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setSvgParallaxY(scrollY * 0.05);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    const rotY = (mouseX / (rect.width / 2)) * 3;
    const rotX = -(mouseY / (rect.height / 2)) * 3;
    setTiltX(rotY);
    setTiltY(rotX);

    if (isDragging.current && svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const relativeX = e.clientX - svgRect.left;
      const progress = Math.max(0, Math.min(1, relativeX / svgRect.width));
      setSlider(progress);
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    setTiltX(0);
    setTiltY(0);
  };

  const dPath = interpolatePath(slider);

  return (
    <section className="relative overflow-hidden bg-transparent px-4 pt-24 pb-14 sm:px-8 sm:pt-28 sm:pb-20 lg:px-16 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)] animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
              Quantum Battery Observatory
            </span>
          </div>

          <h1 className="mt-4 sm:mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] text-[var(--paper)]">
            {title}
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl leading-relaxed text-[var(--graphite-on-dark)]">
            {subtitle}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <SendButton href="/contact" label="Book a BatteryScope Demo" className="w-full sm:w-auto text-center" />
            <a
              href="/technology"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[var(--border)] bg-[var(--secondary)] px-5 py-3 font-sans text-sm font-semibold text-[var(--paper)] transition-all hover:border-[var(--signal)] hover:text-[var(--signal)] text-center"
            >
              How It Works →
            </a>
          </div>
        </div>

        <div
          className="rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6 shadow-2xl backdrop-blur-md transition-all duration-1000 ease-out cursor-grab active:cursor-grabbing select-none hover:border-[var(--signal)]/60 touch-pan-y"
          style={{
            transform: `perspective(1200px) rotateY(${tiltX}deg) rotateX(${tiltY}deg) translateY(${svgParallaxY}px)`,
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
              <linearGradient id="nyquistGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--signal)" />
                <stop offset="50%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="var(--copper)" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            {[60, 120, 180, 240, 300].map((y) => (
              <line
                key={y}
                x1="40"
                y1={y}
                x2="515"
                y2={y}
                stroke="var(--graphite)"
                strokeOpacity="0.2"
                strokeDasharray="4 4"
              />
            ))}
            {[120, 220, 320, 420].map((x) => (
              <line
                key={x}
                x1={x}
                y1="40"
                x2={x}
                y2="300"
                stroke="var(--graphite)"
                strokeOpacity="0.2"
                strokeDasharray="4 4"
              />
            ))}

            {/* Axis Labels */}
            <text x="45" y="325" fill="var(--graphite-on-dark)" fontSize="10" fontFamily="var(--font-mono)">
              0.1 Hz
            </text>
            <text x="250" y="325" fill="var(--graphite-on-dark)" fontSize="10" fontFamily="var(--font-mono)">
              1 kHz
            </text>
            <text x="460" y="325" fill="var(--graphite-on-dark)" fontSize="10" fontFamily="var(--font-mono)">
              10 kHz
            </text>

            {/* Interactive Nyquist Curve */}
            <path
              d={dPath}
              fill="none"
              stroke="url(#nyquistGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>

          {/* Controls & Active Readout */}
          <div className="mt-4 flex flex-col gap-3 border-t border-[var(--border)] pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs text-[var(--graphite-on-dark)]">
              <span className="font-semibold text-[var(--signal)] shrink-0">{activeStageLabel}</span>
              <span className="font-semibold text-[var(--paper)] text-[11px] sm:text-xs truncate">{activeStageValue}</span>
            </div>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={slider}
              onChange={(e) => setSlider(parseFloat(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[var(--secondary)] accent-[var(--signal)] focus:outline-none touch-none"
              aria-label="Spectroscopy frequency slider"
            />
          </div>
        </div>
      </div>
    </section>
  );
}