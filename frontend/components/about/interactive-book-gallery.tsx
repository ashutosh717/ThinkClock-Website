"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, BookOpen, Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform, useMotionValueEvent, animate } from "framer-motion";
import thinkclockLogo from "@/images/thinkclock_logo.png";

export interface GalleryItem {
  image: StaticImageData | string;
  title: string;
  tag: string;
  desc: string;
}

interface InteractiveBookGalleryProps {
  items: GalleryItem[];
}

export function InteractiveBookGallery({ items }: InteractiveBookGalleryProps) {
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [targetIndex, setTargetIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [dragDir, setDragDir] = useState<"next" | "prev">("next");

  const [isPastHalf, setIsPastHalf] = useState(false);
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const totalPages = items.length;

  // Motion value for page turn progress: 0 (flat open on right) to 1 (flat open on left)
  const turnProgress = useMotionValue(0);

  // Subscribe to turnProgress change to trigger front/back face switch at 50%
  useMotionValueEvent(turnProgress, "change", (latest) => {
    setIsPastHalf(latest >= 0.5);
  });

  // Derived 3D transforms for page turn
  const rotateY = useTransform(turnProgress, [0, 1], dragDir === "next" ? [0, -180] : [-180, 0]);
  const pageShadowOpacity = useTransform(turnProgress, [0, 0.5, 1], [0.03, 0.35, 0.03]);
  const cornerCurl = useTransform(turnProgress, [0, 0.5, 1], [0, -2.5, 0]);

  // Pointer drag tracking
  const dragStartX = useRef<number | null>(null);
  const dragStartProgress = useRef<number>(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>, side: "left" | "right") => {
    if (isFlipping) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);

    const dir = side === "right" ? "next" : "prev";
    const tIdx = side === "right"
      ? (displayedIndex + 1) % totalPages
      : (displayedIndex - 1 + totalPages) % totalPages;

    setDragDir(dir);
    setTargetIndex(tIdx);
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartProgress.current = dir === "next" ? 0 : 1;
    turnProgress.set(dragStartProgress.current);
    setIsPastHalf(dragStartProgress.current >= 0.5);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartX.current === null || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const halfWidth = rect.width / 2;
    const deltaX = e.clientX - dragStartX.current;

    let deltaProgress = 0;
    if (dragDir === "next") {
      deltaProgress = -deltaX / halfWidth;
    } else {
      deltaProgress = deltaX / halfWidth;
    }

    const newProgress = Math.max(0, Math.min(1, dragStartProgress.current + deltaProgress));
    turnProgress.set(newProgress);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    setIsDragging(false);

    const currentProg = turnProgress.get();
    const shouldComplete = currentProg > 0.35;
    const finalProg = shouldComplete ? 1 : 0;

    setIsFlipping(true);
    animate(turnProgress, finalProg, {
      type: "spring",
      stiffness: 260,
      damping: 28,
      onComplete: () => {
        if (shouldComplete) {
          setDisplayedIndex(targetIndex);
        }
        turnProgress.set(0);
        setIsPastHalf(false);
        setIsFlipping(false);
      },
    });
  };

  // Programmatic Button Turn
  const triggerTurn = useCallback(
    (dir: "next" | "prev") => {
      if (isFlipping || isDragging) return;

      const tIdx = dir === "next"
        ? (displayedIndex + 1) % totalPages
        : (displayedIndex - 1 + totalPages) % totalPages;

      setDragDir(dir);
      setTargetIndex(tIdx);
      setIsFlipping(true);

      const startVal = dir === "next" ? 0 : 1;
      const endVal = dir === "next" ? 1 : 0;

      turnProgress.set(startVal);
      setIsPastHalf(startVal >= 0.5);

      animate(turnProgress, endVal, {
        type: "spring",
        stiffness: 220,
        damping: 26,
        onComplete: () => {
          setDisplayedIndex(tIdx);
          turnProgress.set(0);
          setIsPastHalf(false);
          setIsFlipping(false);
        },
      });
    },
    [displayedIndex, isDragging, isFlipping, totalPages, turnProgress]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") triggerTurn("next");
      if (e.key === "ArrowLeft") triggerTurn("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [triggerTurn]);

  const currentItem = items[displayedIndex];
  const targetItem = items[targetIndex];

  return (
    <div className="relative mx-auto w-full max-w-5xl py-8 sm:py-12 px-2 sm:px-6 select-none">
      {/* ── Outer Floating Side Navigation Arrows ── */}
      <button
        onClick={() => triggerTurn("prev")}
        disabled={isFlipping || isDragging}
        className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/95 dark:bg-neutral-900/95 text-neutral-800 dark:text-neutral-100 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 hover:border-[#c97a4a] hover:text-[#c97a4a] active:scale-95 disabled:opacity-40"
        title="Previous Page"
        aria-label="Previous Page"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => triggerTurn("next")}
        disabled={isFlipping || isDragging}
        className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/95 dark:bg-neutral-900/95 text-neutral-800 dark:text-neutral-100 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 hover:border-[#c97a4a] hover:text-[#c97a4a] active:scale-95 disabled:opacity-40"
        title="Next Page"
        aria-label="Next Page"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* ── Book Frame Wrapper with Perspective ── */}
      <div
        ref={containerRef}
        className="relative mx-auto w-full min-h-[460px] sm:min-h-[500px] transition-all duration-300"
        style={{ perspective: "2400px" }}
      >
        {/* Soft Ambient Contact Shadow */}
        <div className="pointer-events-none absolute inset-x-6 -bottom-8 h-16 rounded-full bg-black/35 blur-2xl dark:bg-black/75" />

        {/* ── LAYER 4: HARDCOVER BASE ── */}
        <div className="pointer-events-none absolute -bottom-[8px] left-[5px] right-[5px] top-[8px] rounded-[20px] bg-[#2d241e] dark:bg-[#16120e] shadow-xl border border-amber-950/30 -z-30" />

        {/* ── LAYER 3: STACKED PAGES LAYER 2 ── */}
        <div className="pointer-events-none absolute -bottom-[5px] left-[3px] right-[3px] top-[5px] rounded-[18px] bg-[#f2e7d8] dark:bg-[#26201b] border border-neutral-300/60 dark:border-neutral-700/60 -z-20 shadow-sm" />

        {/* ── LAYER 2: STACKED PAGES LAYER 1 ── */}
        <div className="pointer-events-none absolute -bottom-[2.5px] left-[1.5px] right-[1.5px] top-[2.5px] rounded-[17px] bg-[#f7ede0] dark:bg-[#2c2621] border border-neutral-300/70 dark:border-neutral-700/70 -z-10 shadow-sm" />

        {/* ── LAYER 1: MAIN TOP OPEN BOOK PAGES ── */}
        <div className="relative flex h-full min-h-[460px] sm:min-h-[500px] w-full flex-col md:flex-row overflow-hidden rounded-[16px] bg-[#faf8f4] text-[#1c2220] border border-neutral-300/80 shadow-[0_12px_35px_rgba(0,0,0,0.18)]">
          
          {/* Natural Center Book Spine / Narrow Clean Crease Line (Matching Image 2 Exactly) */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden md:block w-3 -translate-x-1/2 z-20">
            <div className="h-full w-full bg-gradient-to-r from-black/8 via-black/2 to-black/8 opacity-60" />
            <div className="absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-neutral-300/60" />
          </div>

          {/* ── LEFT PAGE ── */}
          <div
            onPointerDown={(e) => handlePointerDown(e, "left")}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onMouseEnter={() => setHoverSide("left")}
            onMouseLeave={() => setHoverSide(null)}
            className={`relative flex h-1/2 md:h-auto md:w-1/2 flex-col justify-between p-6 sm:p-8 lg:p-9 transition-all duration-300 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/[0.02] via-transparent to-black/[0.06] pointer-events-none" />

            {/* Printed Photo Card pasted onto page */}
            <div className="relative flex flex-col items-center w-full max-w-sm rounded-xl bg-white p-3 sm:p-4 shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-neutral-200/90 transition-transform duration-300 hover:rotate-0.5 my-auto">
              {/* Corner photo tape accents */}
              <div className="absolute -top-2.5 left-4 w-8 h-4 bg-amber-100/70 border border-amber-200/60 backdrop-blur-sm transform -rotate-12 shadow-sm pointer-events-none" />
              <div className="absolute -top-2.5 right-4 w-8 h-4 bg-amber-100/70 border border-amber-200/60 backdrop-blur-sm transform rotate-12 shadow-sm pointer-events-none" />

              {/* 100% Uncropped Fully Visible Photo */}
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[270px] overflow-hidden rounded-lg bg-neutral-50 flex items-center justify-center border border-neutral-200/60">
                <Image
                  src={isDragging || isFlipping ? (dragDir === "prev" ? targetItem.image : currentItem.image) : currentItem.image}
                  alt={currentItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain p-1"
                  priority
                />
              </div>

              {/* Caption under photo */}
              <div className="mt-2.5 text-center">
                <span className="font-display text-xs font-semibold tracking-wider text-[#b45d27] uppercase flex items-center justify-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#c97a4a]" />
                  {isDragging || isFlipping ? (dragDir === "prev" ? targetItem.tag : currentItem.tag) : currentItem.tag}
                </span>
              </div>
            </div>

            {/* Left Page Bottom Center Publisher Brand Mark */}
            <div className="relative z-10 w-full pt-3 mt-auto border-t border-neutral-300/60 flex items-center justify-center">
              <Image
                src={thinkclockLogo}
                alt="ThinkClock Battery Labs"
                className="h-6 w-auto object-contain"
                priority
              />
            </div>

            {/* Subtle Outer Edge Glow on Left Hover */}
            <div
              className={`pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-500/10 to-transparent transition-opacity duration-300 ${
                hoverSide === "left" && !isDragging && !isFlipping ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* ── RIGHT PAGE ── */}
          <div
            onPointerDown={(e) => handlePointerDown(e, "right")}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onMouseEnter={() => setHoverSide("right")}
            onMouseLeave={() => setHoverSide(null)}
            className={`relative flex h-1/2 md:h-auto md:w-1/2 flex-col justify-between p-6 sm:p-8 lg:p-9 transition-all duration-300 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/[0.02] via-transparent to-black/[0.06] pointer-events-none" />

            {/* Header Markings */}
            <div className="relative z-10 space-y-3.5">
              <div className="flex items-center justify-between border-b border-neutral-300/60 pb-3.5">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[#b45d27]" />
                  <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#b45d27] uppercase">
                    THINKCLOCK IN ACTION
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white px-3.5 py-1 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0d9488] animate-pulse" />
                  <span className="font-mono text-xs font-bold text-[#0f1715]">
                    {String(((isDragging || isFlipping) && dragDir === "next" ? targetIndex : displayedIndex) + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Tag Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0d9488]/30 bg-[#f0fdfa] px-3.5 py-1 text-xs font-semibold text-[#0d9488] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0d9488]" />
                <span>{(isDragging || isFlipping) && dragDir === "next" ? targetItem.tag : currentItem.tag}</span>
              </div>
            </div>

            {/* Main Heading & Description */}
            <div className="relative z-10 my-auto py-2 space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-[1.25] text-[#0f1715] tracking-tight">
                {(isDragging || isFlipping) && dragDir === "next" ? targetItem.title : currentItem.title}
              </h3>
              <p className="font-sans text-sm sm:text-base leading-relaxed text-[#374151] max-w-lg">
                {(isDragging || isFlipping) && dragDir === "next" ? targetItem.desc : currentItem.desc}
              </p>
            </div>

            {/* Right Page Bottom Center Publisher Brand Mark */}
            <div className="relative z-10 w-full pt-3 mt-auto border-t border-neutral-300/60 flex items-center justify-center">
              <Image
                src={thinkclockLogo}
                alt="ThinkClock Battery Labs"
                className="h-6 w-auto object-contain"
                priority
              />
            </div>

            {/* Subtle Outer Edge Glow on Right Hover */}
            <div
              className={`pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-amber-500/10 to-transparent transition-opacity duration-300 ${
                hoverSide === "right" && !isDragging && !isFlipping ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* ── REAL-TIME INTERACTIVE 3D TURNING PAGE SHEET ── */}
          {(isDragging || isFlipping) && (
            <motion.div
              style={{
                rotateY,
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                left: "50%",
                skewY: cornerCurl,
              }}
              className="pointer-events-none absolute inset-y-0 w-1/2 z-30 hidden md:block overflow-hidden bg-[#faf8f4] text-[#1c2220] shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
            >
              {/* Dynamic Fold Shadow Overlay */}
              <motion.div
                style={{ opacity: pageShadowOpacity }}
                className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/15 pointer-events-none z-40"
              />

              {!isPastHalf ? (
                /* ── FRONT FACE (0% to 50% turn): Shows Outgoing Right-Page Text Details + Logo ── */
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-9 bg-[#faf8f4] border-l border-neutral-300 shadow-xl">
                  <div className="flex items-center justify-between border-b border-neutral-300 pb-3.5">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#b45d27]">THINKCLOCK IN ACTION</span>
                    <span className="font-mono text-xs font-bold text-[#0f1715]">
                      {String((dragDir === "next" ? displayedIndex : targetIndex) + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="space-y-4 my-auto">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0f1715] leading-[1.25]">
                      {dragDir === "next" ? currentItem.title : targetItem.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#374151] leading-relaxed">
                      {dragDir === "next" ? currentItem.desc : targetItem.desc}
                    </p>
                  </div>
                  <div className="w-full pt-3 mt-auto border-t border-neutral-300/60 flex items-center justify-center">
                    <Image
                      src={thinkclockLogo}
                      alt="ThinkClock Battery Labs"
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                </div>
              ) : (
                /* ── BACK FACE (50% to 100% turn): Shows Target Incoming Photo Card + Logo ── */
                <div
                  style={{ transform: "scaleX(-1)" }}
                  className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-9 bg-[#faf8f4] border-r border-neutral-300 shadow-xl"
                >
                  <div className="relative flex flex-col items-center w-full max-w-sm rounded-xl bg-white p-3 sm:p-4 shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-neutral-200/90 my-auto">
                    <div className="relative w-full h-[220px] sm:h-[250px] md:h-[270px] overflow-hidden rounded-lg bg-neutral-50 flex items-center justify-center border border-neutral-200/60">
                      <Image
                        src={dragDir === "next" ? targetItem.image : currentItem.image}
                        alt={dragDir === "next" ? targetItem.title : currentItem.title}
                        fill
                        sizes="40vw"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="mt-2.5 text-center">
                      <span className="font-display text-xs font-semibold tracking-wider text-[#b45d27] uppercase flex items-center justify-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-[#c97a4a]" />
                        {dragDir === "next" ? targetItem.tag : currentItem.tag}
                      </span>
                    </div>
                  </div>

                  <div className="w-full pt-3 mt-auto border-t border-neutral-300/60 flex items-center justify-center">
                    <Image
                      src={thinkclockLogo}
                      alt="ThinkClock Battery Labs"
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
