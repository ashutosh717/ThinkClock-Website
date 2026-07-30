"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

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

const animationClasses: Record<AnimationVariant, string> = {
  "fade-up": "translate-y-6",
  "fade-left": "-translate-x-6",
  "fade-right": "translate-x-6",
  "scale-in": "scale-[0.96]",
};

const visibleClasses: Record<AnimationVariant, string> = {
  "fade-up": "translate-y-0 opacity-100",
  "fade-left": "translate-x-0 opacity-100",
  "fade-right": "translate-x-0 opacity-100",
  "scale-in": "scale-100 opacity-100",
};

export function AnimatedSection({
  children,
  className,
  as: Tag = "section",
  animation = "fade-up",
  delay = 0,
  stagger = false,
  staggerIndex = 0,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.08 });

  const baseDelay = delay + (stagger ? staggerIndex * 120 : 0);

  return (
    <Tag
      ref={ref}
      className={cn(
        "opacity-0 transition-all duration-700 ease-out will-change-transform",
        animationClasses[animation],
        isVisible && visibleClasses[animation],
        className,
      )}
      style={{ transitionDelay: `${baseDelay}ms` }}
    >
      {children}
    </Tag>
  );
}
