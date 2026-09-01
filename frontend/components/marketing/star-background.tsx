"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
}

export function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(Math.floor((width * height) / 30000), 48);
    let particles: Particle[] = [];

    const colorsDark = [
      "255, 255, 255", // Crisp White
      "92, 225, 201",  // Brand Cyan (#5ce1c9)
      "201, 122, 74",  // Brand Copper (#c97a4a)
      "140, 235, 215", // Bright Mint
    ];

    const colorsLight = [
      "13, 148, 136",  // Vibrant Signal Teal (#0d9488)
      "194, 65, 12",   // Warm Hardware Copper (#c2410c)
      "15, 118, 110",  // Deep Cyan Teal (#0f766e)
      "30, 41, 38",    // Deep Obsidian Charcoal (#1e2926)
    ];

    function initParticles() {
      particles = [];
      const isLight = document.documentElement.classList.contains("light");
      const currentColors = isLight ? colorsLight : colorsDark;

      for (let i = 0; i < particleCount; i++) {
        const color = currentColors[Math.floor(Math.random() * currentColors.length)];
        const size = isLight ? Math.random() * 0.8 + 0.6 : Math.random() * 0.8 + 0.5;
        const baseAlpha = isLight ? Math.random() * 0.35 + 0.3 : Math.random() * 0.4 + 0.2;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: -Math.random() * 0.25 - 0.05,
          size,
          color,
          baseAlpha,
          alpha: baseAlpha,
          twinkleSpeed: Math.random() * 0.02 + 0.008,
        });
      }
    }

    initParticles();

    // Listen to theme class changes on <html> to update particle colors immediately
    const themeObserver = new MutationObserver(() => {
      initParticles();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    let time = 0;

    function render() {
      if (!ctx) return;
      time += 0.02;

      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.classList.contains("light");

      if (isLight) {
        // Light laboratory background gradient
        const bgGradient = ctx.createRadialGradient(
          width / 2,
          height,
          10,
          width / 2,
          height / 2,
          Math.max(width, height)
        );
        bgGradient.addColorStop(0, "#f8faf8");
        bgGradient.addColorStop(1, "#f2f4f1");
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, width, height);

        if (mouse.active) {
          const auraGradient = ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            200
          );
          auraGradient.addColorStop(0, "rgba(13, 148, 136, 0.14)");
          auraGradient.addColorStop(0.5, "rgba(194, 65, 12, 0.06)");
          auraGradient.addColorStop(1, "rgba(242, 244, 241, 0)");
          ctx.fillStyle = auraGradient;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        // Dark space observatory background gradient
        const bgGradient = ctx.createRadialGradient(
          width / 2,
          height,
          10,
          width / 2,
          height / 2,
          Math.max(width, height)
        );
        bgGradient.addColorStop(0, "#050807");
        bgGradient.addColorStop(1, "#010302");
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, width, height);

        if (mouse.active) {
          const auraGradient = ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            200
          );
          auraGradient.addColorStop(0, "rgba(92, 225, 201, 0.18)");
          auraGradient.addColorStop(0.5, "rgba(201, 122, 74, 0.08)");
          auraGradient.addColorStop(1, "rgba(9, 10, 15, 0)");
          ctx.fillStyle = auraGradient;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const maxDistance = 140;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Twinkle oscillation
        p.alpha = p.baseAlpha + Math.sin(time + i * 1.5) * 0.18;
        if (p.alpha < 0.1) p.alpha = 0.1;
        if (p.alpha > 0.95) p.alpha = 0.95;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const force = (maxDistance - dist) / maxDistance;
            const angle = Math.atan2(dy, dx);
            p.x -= Math.cos(angle) * force * 1.8;
            p.y -= Math.sin(angle) * force * 1.8;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;

        if (isLight) {
          ctx.shadowBlur = 2;
          ctx.shadowColor = `rgba(${p.color}, 0.25)`;
        } else {
          ctx.shadowBlur = 4;
          ctx.shadowColor = `rgba(${p.color}, 0.6)`;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      themeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[-10] h-full w-full"
      aria-hidden="true"
    />
  );
}
