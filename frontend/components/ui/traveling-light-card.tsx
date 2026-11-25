/*
 * From Uiverse.io by ElSombrero2 - https://uiverse.io/ElSombrero2/fresh-wombat-97
 * MIT License, Copyright (c) ElSombrero2 (Rakotondrasoa Nirilala)
 */

"use client";

import React from "react";

interface TravelingLightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  beamGradient?: string;
  speedMs?: number;
  hoverSpeedMs?: number;
  alwaysTravel?: boolean;
}

export function TravelingLightCard({
  children,
  className = "",
  contentClassName = "",
  beamGradient = "linear-gradient(135deg, #ff5722 0%, #f97316 35%, #387ef0 70%, #ff2288 100%)",
  speedMs = 8000,
  hoverSpeedMs = 5000,
  alwaysTravel = true,
  style,
  ...props
}: TravelingLightCardProps) {
  return (
    <div
      className={`group relative isolate overflow-hidden rounded-2xl p-[1.5px] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.35)] ${className}`}
      style={style}
      {...props}
    >
      <style>{`
        @keyframes uiverse-rotation-9018 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .uiverse-traveling-beam {
          animation: uiverse-rotation-9018 var(--travel-speed, ${speedMs}ms) infinite linear;
          animation-play-state: ${alwaysTravel ? "running" : "paused"};
        }
        .group:hover .uiverse-traveling-beam {
          animation-play-state: running;
          animation-duration: var(--travel-hover-speed, ${hoverSpeedMs}ms);
        }
        @media (prefers-reduced-motion: reduce) {
          .uiverse-traveling-beam {
            animation: none !important;
          }
        }
      `}</style>

      {/* Rotating Light Beam (Adapted from .card::before) */}
      <div
        aria-hidden="true"
        className={`uiverse-traveling-beam pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[400%] min-h-[1600px] transition-opacity duration-300 ${alwaysTravel ? "opacity-85 group-hover:opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        style={{
          background: beamGradient,
          // @ts-expect-error custom CSS property
          "--travel-speed": `${speedMs}ms`,
          "--travel-hover-speed": `${hoverSpeedMs}ms`,
        }}
      />

      {/* Secondary Ambient Dispersion Glow */}
      <div
        aria-hidden="true"
        className={`uiverse-traveling-beam pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[420%] min-h-[1600px] blur-[16px] transition-opacity duration-300 ${alwaysTravel ? "opacity-40 group-hover:opacity-60" : "opacity-0 group-hover:opacity-60"
          }`}
        style={{
          background: beamGradient,
          // @ts-expect-error custom CSS property
          "--travel-speed": `${speedMs}ms`,
          "--travel-hover-speed": `${hoverSpeedMs}ms`,
        }}
      />

      {/* Dispersion / Backdrop Layer (Adapted from .card::after) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#14171b]/25 backdrop-blur-[35px]"
      />

      {/* Inner Content Card (Adapted from .card .content) */}
      <div
        className={`relative z-10 h-full w-full rounded-[14px] bg-[var(--card)] p-6 sm:p-7 transition-colors duration-300 ${contentClassName}`}
      >
        {/* Soft Ambient Inner Glow on Hover (Adapted from .content::before) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-white/10 dark:bg-[#f97316]/15 blur-[45px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
