"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import cylindricalImg from "@/images/Home_page/cylinderical.png";
import prismaticImg from "@/images/Home_page/Battery Testing Lab Machine Cutout.png";
import { SendButton } from "@/components/ui/send-button";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const map = (progress: number, start: number, end: number) =>
  clamp((progress - start) / (end - start));

const smoothstep = (value: number) => value * value * (3 - 2 * value);

export function ScrollColorReveal() {
  const trackRef = useRef<HTMLElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);
  const firstHeadlineRef = useRef<HTMLHeadingElement>(null);
  const secondLineRef = useRef<HTMLSpanElement>(null);
  const batteryHeadlineRef = useRef<HTMLHeadingElement>(null);
  const cylindricalRef = useRef<HTMLDivElement>(null);
  const cylindricalTextRef = useRef<HTMLDivElement>(null);
  const prismaticRef = useRef<HTMLDivElement>(null);
  const prismaticTextRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const pattern = patternRef.current;
    const firstHeadline = firstHeadlineRef.current;
    const secondLine = secondLineRef.current;
    const batteryHeadline = batteryHeadlineRef.current;
    const cylindrical = cylindricalRef.current;
    const cylindricalText = cylindricalTextRef.current;
    const prismatic = prismaticRef.current;
    const prismaticText = prismaticTextRef.current;
    const buttonContainer = buttonRef.current;

    if (
      !track ||
      !pattern ||
      !firstHeadline ||
      !secondLine ||
      !batteryHeadline ||
      !cylindrical ||
      !cylindricalText ||
      !prismatic ||
      !prismaticText ||
      !buttonContainer
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
      const isDesktop = window.innerWidth >= 768;

      // Stage 1: Aurora pattern evolution & "Stop guessing, start deciding." -> "BatteryScope"
      const patternProgress = smoothstep(map(progress, 0, 0.28));
      const textProgress = smoothstep(map(progress, 0.08, 0.22));
      const headlineExit = smoothstep(map(progress, 0.22, 0.27));
      const batteryEnter = smoothstep(map(progress, 0.22, 0.36));

      // Stage 2: BatteryScope holds briefly, then blurs out
      const batteryExit = smoothstep(map(progress, 0.4, 0.48));
      const batteryOpacity = batteryEnter * (1 - batteryExit);
      const batteryBlur = 14 * (1 - batteryEnter) + 20 * batteryExit;
      const batteryScale = 1 + 0.08 * batteryExit;

      const patternStyle = pattern.style as CSSStyleDeclaration & {
        webkitMaskImage?: string;
      };

      if (patternProgress <= 0.005) {
        pattern.style.opacity = "0";
      } else if (patternProgress >= 0.98) {
        pattern.style.opacity = "1";
        patternStyle.webkitMaskImage = "none";
        pattern.style.maskImage = "none";
      } else {
        const maskY = 250 - patternProgress * 200;
        const mask = `radial-gradient(ellipse 180% 140% at 50% ${maskY.toFixed(1)}%, #000 40%, transparent 68%)`;
        pattern.style.opacity = "1";
        patternStyle.webkitMaskImage = mask;
        pattern.style.maskImage = mask;
      }

      firstHeadline.style.opacity = `${1 - headlineExit}`;
      firstHeadline.style.transform = `translate3d(0, ${-12 * headlineExit}px, 0)`;
      secondLine.style.opacity = `${textProgress}`;
      secondLine.style.filter = `blur(${14 * (1 - textProgress)}px)`;
      secondLine.style.transform = `translate3d(0, ${24 * (1 - textProgress)}px, 0)`;

      batteryHeadline.style.opacity = `${batteryOpacity}`;
      batteryHeadline.style.filter = `blur(${batteryBlur}px)`;
      batteryHeadline.style.transform = `translate3d(0, ${24 * (1 - batteryEnter)}px, 0) scale(${batteryScale})`;
      firstHeadline.setAttribute("aria-hidden", `${batteryEnter >= 0.5}`);
      batteryHeadline.setAttribute(
        "aria-hidden",
        `${batteryEnter < 0.5 || batteryExit >= 0.5}`,
      );

      // Stage 3: Cylindrical unit rises from left and sets on right
      const cylMove = smoothstep(map(progress, 0.4, 0.54));
      const cylFadeIn = smoothstep(map(progress, 0.4, 0.47));
      const cylExit = smoothstep(map(progress, 0.62, 0.7));
      const cylOpacity = cylFadeIn * (1 - cylExit);
      const cylStartX = isDesktop ? -32 : -20;
      const cylEndX = isDesktop ? 23 : 0;
      const cylX = cylStartX + (cylEndX - cylStartX) * cylMove;
      const cylY = isDesktop ? 44 * (1 - cylMove) : -17 + 44 * (1 - cylMove);
      const cylBlur = 12 * (1 - cylFadeIn) + 14 * cylExit;
      const cylScale = 0.82 + 0.18 * cylMove - 0.06 * cylExit;

      cylindrical.style.opacity = `${cylOpacity}`;
      cylindrical.style.filter = `blur(${cylBlur}px)`;
      cylindrical.style.transform = `translate3d(${cylX}vw, ${cylY}vh, 0) scale(${cylScale})`;

      const cylTextIn = smoothstep(map(progress, 0.5, 0.57));
      const cylTextOpacity = cylTextIn * (1 - cylExit);
      cylindricalText.style.opacity = `${cylTextOpacity}`;
      cylindricalText.style.transform = `translate3d(0, ${20 * (1 - cylTextIn)}px, 0)`;

      // Stage 4: Opposite flow — Prismatic rises from right and sets on left (same margin & duration)
      const prisMove = smoothstep(map(progress, 0.62, 0.76));
      const prisFadeIn = smoothstep(map(progress, 0.62, 0.69));
      const prisStartX = isDesktop ? 32 : 20;
      const prisEndX = isDesktop ? -23 : 0;
      const prisX = prisStartX + (prisEndX - prisStartX) * prisMove;
      const prisY = isDesktop ? 44 * (1 - prisMove) : -20 + 44 * (1 - prisMove);
      const prisBlur = 12 * (1 - prisFadeIn);
      const prisScale = 0.82 + 0.18 * prisMove;

      prismatic.style.opacity = `${prisFadeIn}`;
      prismatic.style.filter = `blur(${prisBlur}px)`;
      prismatic.style.transform = `translate3d(${prisX}vw, ${prisY}vh, 0) scale(${prisScale})`;

      const prisTextIn = smoothstep(map(progress, 0.72, 0.79));
      prismaticText.style.opacity = `${prisTextIn}`;
      prismaticText.style.transform = `translate3d(0, ${20 * (1 - prisTextIn)}px, 0)`;

      // Stage 5: Final CTA button pops up after the same reading margin
      const buttonProgress = smoothstep(map(progress, 0.84, 0.94));
      const buttonScale = 0.85 + 0.15 * buttonProgress;
      const buttonY = 24 * (1 - buttonProgress);
      const buttonOffsetX = isDesktop ? 48 : 0;
      buttonContainer.style.opacity = `${buttonProgress}`;
      buttonContainer.style.transform = `translate3d(${buttonOffsetX}px, ${buttonY}px, 0) scale(${buttonScale})`;
      buttonContainer.style.pointerEvents = buttonProgress > 0.5 ? "auto" : "none";
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
        className="relative h-[560dvh] bg-[#f8f4ec] dark:bg-black [html:not(.light)_&]:bg-black motion-reduce:h-dvh"
      >
        <div className="sticky top-0 isolate h-dvh overflow-hidden bg-[#f8f4ec] dark:bg-black [html:not(.light)_&]:bg-black motion-reduce:static">
          <div
            ref={patternRef}
            aria-hidden="true"
            className="tc-aurora-pattern pointer-events-none absolute inset-0 opacity-0 [will-change:mask-image,-webkit-mask-image,opacity] motion-reduce:opacity-100"
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
            <span style={{ fontFamily: "inherit" }} className="whitespace-nowrap text-[#FFFFFF]">Battery</span>
            <span style={{ fontFamily: "inherit" }} className="whitespace-nowrap text-[#FFE3B3]">Scope</span>
          </h2>

          {/* Cylindrical Unit Reveal */}
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4 md:px-16">
            <div
              ref={cylindricalTextRef}
              className="absolute bottom-24 sm:bottom-24 inset-x-4 md:inset-x-auto md:bottom-auto md:left-8 lg:left-14 xl:left-20 md:w-[43%] max-w-xl opacity-0 [will-change:opacity,transform]"
            >
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 md:w-8 bg-[#FA8128]" />
                <span className="font-mono text-[11px] sm:text-xs md:text-sm lg:text-base font-extrabold tracking-[0.18em] text-[#FA8128] uppercase">
                  01 · CYLINDRICAL DIAGNOSTICS
                </span>
              </div>
              <h3
                style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
                className="mt-1.5 md:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-[3.4rem] xl:text-[4rem] font-bold leading-[1.08] tracking-tight text-white"
              >
                One cell. One minute. Zero guesswork.
              </h3>
              <p className="mt-2 md:mt-4 max-w-xl text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed text-white/90">
                Scan any cylindrical cell format and get a complete health report in about a minute. Non-invasive, multi-channel, and built for 21700, 18650, Gotion/Nash, and Beyond.
              </p>

              {/* Report Chips */}
              <div className="mt-3 md:mt-5 flex flex-wrap items-center gap-1.5 md:gap-2">
                {["OCV", "DC-IR", "Capacity", "SOH", "Cell Grade"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-2.5 py-0.5 md:px-3.5 md:py-1 font-mono text-[10px] md:text-xs font-bold tracking-wider text-white shadow-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <p className="mt-2.5 md:mt-4 max-w-xl border-l-2 border-[#FA8128] pl-3 text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-snug text-white">
                Every scan ends with a clear Grade, so you know instantly which cells to use, pair, or reject.
              </p>
            </div>

            <div
              ref={cylindricalRef}
              className="relative flex max-w-[68vw] md:max-w-[44vw] items-center justify-center opacity-0 [will-change:opacity,filter,transform] motion-reduce:hidden"
            >
              <Image
                src={cylindricalImg}
                alt="BatteryScope Cylindrical Cell Diagnostic System"
                className="h-[30dvh] sm:h-[36dvh] md:h-[58dvh] lg:h-[64dvh] w-auto max-w-full object-contain drop-shadow-[0_28px_48px_rgba(0,0,0,0.65)]"
                priority
              />
            </div>
          </div>

          {/* Prismatic Unit Reveal */}
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4 md:px-16">
            <div
              ref={prismaticTextRef}
              className="absolute bottom-36 sm:bottom-32 inset-x-4 md:inset-x-auto md:bottom-auto md:right-8 lg:right-14 xl:right-20 md:w-[43%] max-w-xl opacity-0 [will-change:opacity,transform]"
            >
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 md:w-8 bg-[#FA8128]" />
                <span className="font-mono text-[11px] sm:text-xs md:text-sm lg:text-base font-extrabold tracking-[0.18em] text-[#FA8128] uppercase">
                  02 · PRISMATIC &amp; PACK DIAGNOSTICS
                </span>
              </div>
              <h3
                style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
                className="mt-1.5 md:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-[3.6rem] xl:text-[4.25rem] font-bold leading-[1.08] tracking-tight text-white"
              >
                Big cells. Bigger answers.
              </h3>
              <p className="mt-2 md:mt-4 max-w-xl text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed text-white/90">
                Scan any prismatic cell format and get a complete health report in minutes. High-precision diagnostics built for module and pack lines.
              </p>

              {/* Report Chips */}
              <div className="mt-3 md:mt-5 flex flex-wrap items-center gap-1.5 md:gap-2">
                {["OCV", "DC-IR", "Capacity", "SOH", "Cell Grade"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-2.5 py-0.5 md:px-3.5 md:py-1 font-mono text-[10px] md:text-xs font-bold tracking-wider text-white shadow-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <p className="mt-2.5 md:mt-4 max-w-xl border-l-2 border-[#FA8128] pl-3 text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-snug text-white">
                Every scan ends with a clear Grade, so you know instantly which cells to use, pair, or reject.
              </p>
            </div>

            <div
              ref={prismaticRef}
              className="relative flex max-w-[68vw] md:max-w-[44vw] items-center justify-center opacity-0 [will-change:opacity,filter,transform] motion-reduce:opacity-100 motion-reduce:blur-0"
            >
              <Image
                src={prismaticImg}
                alt="BatteryScope Prismatic Cell Diagnostic System"
                className="h-[28dvh] sm:h-[34dvh] md:h-[58dvh] lg:h-[64dvh] w-auto max-w-full object-contain drop-shadow-[0_28px_48px_rgba(0,0,0,0.65)]"
                priority
              />
            </div>
          </div>

          {/* Final Pop-up CTA Button (Centered at bottom on the orange aurora at animation end) */}
          <div
            ref={buttonRef}
            className="absolute bottom-20 sm:bottom-8 inset-x-0 z-30 flex justify-center px-4 opacity-0 pointer-events-none [will-change:opacity,transform] motion-reduce:opacity-100 motion-reduce:pointer-events-auto motion-reduce:translate-y-0"
          >
            <SendButton href="/products" label="Explore Detailed Product Specs" />
          </div>
        </div>
      </section>
    </>
  );
}
