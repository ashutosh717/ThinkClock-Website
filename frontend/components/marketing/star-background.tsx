"use client";

import { useEffect, useState } from "react";

function generateStars(count: number, maxW = 2000, maxH = 2000) {
  const stars: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * maxW);
    const y = Math.floor(Math.random() * maxH);
    const opacity = (Math.random() * 0.7 + 0.3).toFixed(2);
    stars.push(`${x}px ${y}px rgba(255, 255, 255, ${opacity})`);
  }
  return stars.join(", ");
}

export function StarBackground() {
  const [starShadows, setStarShadows] = useState<{
    small: string;
    medium: string;
    large: string;
  } | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setStarShadows({
        small: generateStars(250),
        medium: generateStars(100),
        large: generateStars(40),
      });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!starShadows) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-10] overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
      }}
      aria-hidden="true"
    >
      <div
        className="star-layer star-layer-small"
        style={{ boxShadow: starShadows.small }}
      />
      <div
        className="star-layer star-layer-medium"
        style={{ boxShadow: starShadows.medium }}
      />
      <div
        className="star-layer star-layer-large"
        style={{ boxShadow: starShadows.large }}
      />
    </div>
  );
}
