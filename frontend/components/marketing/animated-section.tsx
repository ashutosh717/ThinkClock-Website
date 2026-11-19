"use client";

import { Children, isValidElement, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade-up" | "fade-left" | "fade-right" | "scale-in";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  animation?: AnimationVariant;
  delay?: number;
  stagger?: boolean;
  staggerIndex?: number;
}

const motionTags = {
  section: motion.section,
  div: motion.div,
  article: motion.article,
};

const initialStates: Record<
  AnimationVariant,
  { opacity: number; x?: number; y?: number; scale?: number }
> = {
  "fade-up": { opacity: 0, y: 24 },
  "fade-left": { opacity: 0, x: -24 },
  "fade-right": { opacity: 0, x: 24 },
  "scale-in": { opacity: 0, scale: 0.98 },
};

export function AnimatedSection({
  children,
  className,
  as: Element = "section",
  animation = "fade-up",
  delay = 0,
  stagger = false,
  staggerIndex = 0,
}: AnimatedSectionProps) {
  const reducedMotion = useReducedMotion();
  const Tag = motionTags[Element];
  const animationDelay = Math.min(delay + (stagger ? staggerIndex * 80 : 0), 400) / 1000;
  const animatedChildren = Children.map(children, (child) => {
    if (!isValidElement(child) || typeof child.type !== "string") return child;
    if (!["h1", "h2", "h3"].includes(child.type)) {
      if (child.type !== "p") return child;
    }

    const isParagraph = child.type === "p";
    return (
      <motion.div
        key={child.key}
        className="w-full"
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: reducedMotion ? 0 : 0.6,
          delay: reducedMotion ? 0 : isParagraph ? 0.1 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {child}
      </motion.div>
    );
  });

  return (
    <Tag
      className={cn(className)}
      initial={reducedMotion ? false : initialStates[animation]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.6,
        delay: reducedMotion ? 0 : animationDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {animatedChildren}
    </Tag>
  );
}
