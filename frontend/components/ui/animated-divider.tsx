"use client";

import { motion } from "framer-motion";

interface AnimatedDividerProps {
  label?: string;
  className?: string;
}

export function AnimatedDivider({
  label = "THINKCLOCK BATTERY LABS",
  className = "",
}: AnimatedDividerProps) {
  return (
    <div className={`relative my-2 flex w-full items-center justify-center overflow-hidden py-10 ${className}`}>
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--signal)]/15 via-[var(--copper)]/20 to-[var(--signal)]/15 blur-2xl" />

      {/* Main track line */}
      <div className="relative h-[2px] w-full max-w-5xl overflow-hidden bg-gradient-to-r from-transparent via-[var(--graphite)]/30 to-transparent">
        {/* Animated travelling cyan laser pulse */}
        <motion.div
          className="absolute inset-y-0 h-full w-56 bg-gradient-to-r from-transparent via-[var(--signal)] to-transparent shadow-[0_0_15px_#5ce1c9]"
          animate={{
            x: ["-100%", "600%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.2,
            ease: "easeInOut",
          }}
        />

        {/* Counter travelling copper laser pulse */}
        <motion.div
          className="absolute inset-y-0 h-full w-56 bg-gradient-to-r from-transparent via-[var(--copper)] to-transparent shadow-[0_0_15px_#c97a4a]"
          animate={{
            x: ["600%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 4.2,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Center professional node badge */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-[var(--signal)]/40 bg-[var(--paper)] px-4 py-1.5 shadow-xl shadow-[var(--signal)]/15 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--signal)] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--signal)]" />
        </span>
        <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--ink)] uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
