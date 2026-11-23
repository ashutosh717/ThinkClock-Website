"use client";

import { useEffect, useRef } from "react";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const map = (progress: number, start: number, end: number) =>
  clamp((progress - start) / (end - start));

const smoothstep = (value: number) => value * value * (3 - 2 * value);

export function ScrollColorReveal() {
  const trackRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstHeadlineRef = useRef<HTMLHeadingElement>(null);
  const secondLineRef = useRef<HTMLSpanElement>(null);
  const batteryHeadlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const blob = blobRef.current;
    const overlay = overlayRef.current;
    const firstHeadline = firstHeadlineRef.current;
    const secondLine = secondLineRef.current;
    const batteryHeadline = batteryHeadlineRef.current;

    if (
      !track ||
      !blob ||
      !overlay ||
      !firstHeadline ||
      !secondLine ||
      !batteryHeadline
    ) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let targetProgress = 0;
    let currentProgress = 0;
    let animationFrame = 0;
    let isAnimating = false;

    const render = (progress: number) => {
      const viewportHeight = window.innerHeight;

      // BatteryScope begins as the second line finishes and uses the same reveal duration.
      const blobProgress = smoothstep(map(progress, 0, 0.7));
      const textProgress = smoothstep(map(progress, 0.2, 0.55));
      const overlayProgress = smoothstep(map(progress, 0.6, 0.8));
      const headlineExit = smoothstep(map(progress, 0.55, 0.65));
      const batteryProgress = smoothstep(map(progress, 0.55, 0.9));
      const blobStart = viewportHeight;
      const blobEnd = -blob.offsetHeight / 2;

      blob.style.top = `${blobStart + (blobEnd - blobStart) * blobProgress}px`;
      overlay.style.opacity = `${overlayProgress}`;
      firstHeadline.style.opacity = `${1 - headlineExit}`;
      firstHeadline.style.transform = `translate3d(0, ${-12 * headlineExit}px, 0)`;
      secondLine.style.opacity = `${textProgress}`;
      secondLine.style.filter = `blur(${14 * (1 - textProgress)}px)`;
      secondLine.style.transform = `translate3d(0, ${24 * (1 - textProgress)}px, 0)`;
      batteryHeadline.style.opacity = `${batteryProgress}`;
      batteryHeadline.style.filter = `blur(${14 * (1 - batteryProgress)}px)`;
      batteryHeadline.style.transform = `translate3d(0, ${24 * (1 - batteryProgress)}px, 0)`;
      firstHeadline.setAttribute("aria-hidden", `${batteryProgress >= 0.5}`);
      batteryHeadline.setAttribute("aria-hidden", `${batteryProgress < 0.5}`);
    };

    const animate = () => {
      isAnimating = false;

      if (reducedMotion.matches) {
        currentProgress = 1;
        targetProgress = 1;
        render(1);
        return;
      }

      currentProgress += (targetProgress - currentProgress) * 0.12;
      if (Math.abs(targetProgress - currentProgress) < 0.001) {
        currentProgress = targetProgress;
      }

      render(currentProgress);

      if (currentProgress !== targetProgress) {
        isAnimating = true;
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const updateProgress = () => {
      if (reducedMotion.matches) {
        currentProgress = 1;
        targetProgress = 1;
        render(1);
        return;
      }

      const trackRange = track.getBoundingClientRect().height - window.innerHeight;
      targetProgress = trackRange > 0
        ? clamp(-track.getBoundingClientRect().top / trackRange)
        : 1;

      if (!isAnimating) {
        isAnimating = true;
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    reducedMotion.addEventListener("change", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      reducedMotion.removeEventListener("change", updateProgress);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <section
        ref={trackRef}
        aria-label="ThinkClock statement and product reveal"
        className="relative h-[300svh] bg-[#f8f4ec] dark:bg-black [html:not(.light)_&]:bg-black motion-reduce:h-svh"
      >
        <div className="sticky top-0 isolate h-svh overflow-hidden bg-[#f8f4ec] dark:bg-black [html:not(.light)_&]:bg-black motion-reduce:static">
          <div
            ref={blobRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[100svh] size-[240vmax] -translate-x-1/2 rounded-full blur-[40px] [background:radial-gradient(circle,#d9480f_0%,#d9480f_36%,rgba(217,72,15,0.82)_52%,rgba(217,72,15,0.4)_68%,transparent_76%)] [will-change:top] motion-reduce:hidden"
          />
          <div
            ref={overlayRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#d9480f] opacity-0 [will-change:opacity] motion-reduce:opacity-100"
          />
          <h2
            ref={firstHeadlineRef}
            id="scroll-color-reveal-title"
            className="absolute inset-0 z-10 grid content-center justify-items-center px-6 text-center font-semibold leading-[1.05] tracking-[-0.04em] text-[#150c07] dark:text-white [html:not(.light)_&]:text-white [font-family:'Plus_Jakarta_Sans',system-ui,sans-serif] text-[clamp(2.6rem,8vw,6rem)] motion-reduce:opacity-0"
          >
            <span className="block text-[#150c07] dark:text-white [html:not(.light)_&]:text-white">Stop guessing,</span>
            <span
              ref={secondLineRef}
              className="block text-white dark:text-black [html:not(.light)_&]:text-black opacity-0 blur-[14px] translate-y-6 [will-change:opacity,filter,transform] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-0"
            >
              start deciding.
            </span>
          </h2>
          <h2
            ref={batteryHeadlineRef}
            id="scroll-color-reveal-brand"
            aria-hidden="true"
            style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
            className="absolute inset-0 z-10 flex items-center justify-center gap-0 px-4 text-center font-bold leading-none tracking-[-0.03em] opacity-0 blur-[14px] [font-family:var(--font-heading),'Playfair_Display',Georgia,serif] text-[clamp(3rem,13vw,14rem)] sm:text-[clamp(3.75rem,14.5vw,15rem)] [will-change:opacity,filter,transform] motion-reduce:translate-y-0 motion-reduce:blur-0 motion-reduce:opacity-100"
          >
            <span style={{ fontFamily: "inherit" }} className="whitespace-nowrap text-[#150c07] dark:text-black [html:not(.light)_&]:text-black">Battery</span>
            <span style={{ fontFamily: "inherit" }} className="whitespace-nowrap text-white">Scope</span>
          </h2>
        </div>
      </section>
      <div aria-hidden="true" className="h-[18svh] bg-[#d9480f]" />
    </>
  );
}
