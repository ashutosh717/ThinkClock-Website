"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

const numberFormatter = new Intl.NumberFormat("en-US");

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const reducedMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const match = /^([\d,]+)(.*)$/.exec(value);
  const target = match ? Number(match[1].replaceAll(",", "")) : 0;
  const suffix = match?.[2] ?? "";
  const isNumeric = match !== null;
  const displayValue = useTransform(
    progress,
    (current) => `${numberFormatter.format(Math.round(current))}${suffix}`,
  );

  useEffect(() => {
    if (!isNumeric) return;
    if (!isInView || reducedMotion) return;

    const controls = animate(progress, target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [isInView, isNumeric, progress, reducedMotion, target, value]);

  if (!match || reducedMotion) return <span ref={ref}>{value}</span>;

  return (
    <motion.span
      ref={ref}
      aria-label={value}
      className="inline-block tabular-nums"
      style={{ minWidth: `${value.length}ch` }}
    >
      {isInView ? displayValue : value}
    </motion.span>
  );
}
