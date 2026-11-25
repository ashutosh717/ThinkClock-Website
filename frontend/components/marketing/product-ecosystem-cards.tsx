// From Uiverse.io by gharsh11032000 - https://uiverse.io/gharsh11032000/tricky-monkey-7
// MIT License, Copyright (c) gharsh11032000, gharsh11032000 (Harsh Gupta), gharsh11032000 (Harsh Gupta)

"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import cylindricalImg from "@/images/Home_page/cylinderical.png";
import prismaticImg from "@/images/Home_page/Battery Testing Lab Machine Cutout.png";
import automatedImg from "@/images/UNITS/Automated.jpg";

interface ProductCardData {
  id: string;
  number: string;
  title: string;
  badge: string;
  tagline: string;
  desc: string;
  throughput: string;
  specs: string;
  image: StaticImageData;
  imageFit?: "contain" | "cover";
  link: string;
}

const products: ProductCardData[] = [
  {
    id: "cylindrical",
    number: "01",
    title: "BatteryScope-C Cylindrical",
    badge: "BENCHTOP / OPERATOR-LED",
    tagline: "Battery characteristics in seconds. Not hours.",
    desc: "Production-ready diagnostic unit supporting LG 21700 and 18650 cell profiling with 75-second comprehensive health reports, multi-channel spectroscopy, and zero cycle loss.",
    throughput: "1,920 cells / shift",
    specs: "6 Channels · 18650 / 21700",
    image: cylindricalImg,
    imageFit: "contain",
    link: "/products",
  },
  {
    id: "prismatic",
    number: "02",
    title: "BatteryScope-C Prismatic",
    badge: "PRISMATIC & PACK DIAGNOSTICS",
    tagline: "Bigger cells. Bigger stakes.",
    desc: "High-capacity prismatic cell diagnostics built for module and pack lines. Direct EIS spectroscopy, acoustic sensing, and automated health grading so you know instantly which cells belong together.",
    throughput: "Module & Pack Lines",
    specs: "High-Capacity Sorting",
    image: prismaticImg,
    imageFit: "contain",
    link: "/products",
  },
  {
    id: "automated",
    number: "03",
    title: "BatteryScope-C Automated",
    badge: "INLINE / HIGH-THROUGHPUT",
    tagline: "Everything the manual unit does: now at production speed.",
    desc: "Autonomous cell feeding, automated 6-channel testing, and smart sorting by SoH & capacity for gigafactories. Real-time factory MES sync and zero operator bottleneck.",
    throughput: "2,880 cells / shift",
    specs: "Autonomous Inline Sorting",
    image: automatedImg,
    imageFit: "contain",
    link: "/products",
  },
];

export function ProductEcosystemCards() {
  return (
    <div className="grid items-stretch gap-6 md:grid-cols-3">
      {products.map((item) => (
        <article
          key={item.id}
          className="tc-uiverse-card-container group"
        >
          <div className="tc-uiverse-card">
            {/* ── 1. Front (Non-hovered image display) ── */}
            <div className="tc-uiverse-img-content">
              {/* Top row: Badge and Number */}
              <div className="w-full flex items-center justify-between p-5 z-10">
                <span className="font-mono text-[10px] tracking-widest font-semibold px-2.5 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 uppercase">
                  {item.badge}
                </span>
                <span className="font-mono text-xs font-bold text-orange-400/80">
                  {item.number}
                </span>
              </div>

              {/* Hardware Machine Image */}
              <div className="relative w-full flex-1 flex items-center justify-center px-4 py-2">
                <div className="relative w-full h-[220px] sm:h-[240px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`${item.imageFit === "cover" ? "object-cover rounded-xl" : "object-contain"} drop-shadow-[0_16px_28px_rgba(0,0,0,0.7)]`}
                    priority={item.id === "cylindrical"}
                  />
                </div>
              </div>

              {/* Bottom bar */}
              <div className="w-full p-4 border-t border-white/5 bg-[#090b0e]/80 backdrop-blur-md flex items-center justify-between z-10">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-orange-400 font-medium">
                    {item.throughput}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 group-hover:text-orange-400 transition-colors">
                  Details <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>

            {/* ── 2. Hover Content Overlay (slides up on hover) ── */}
            <div className="tc-uiverse-content">
              {/* Header inside hover */}
              <div className="w-full flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest font-semibold px-2.5 py-1 rounded-full border border-orange-500/40 bg-orange-500/20 text-orange-300 uppercase">
                  {item.badge}
                </span>
                <span className="font-mono text-xs font-bold text-orange-400">
                  {item.number}
                </span>
              </div>

              {/* Body text & specs */}
              <div className="my-auto flex flex-col items-center px-1">
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1 font-display text-sm italic text-[#FA8128] font-medium">
                  &ldquo;{item.tagline}&rdquo;
                </p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-200 text-center font-normal">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <span className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-white">
                    {item.throughput}
                  </span>
                  <span className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300">
                    {item.specs}
                  </span>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="w-full pt-3 border-t border-white/10 flex items-center justify-center">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-white bg-[#FA8128] hover:bg-[#e06b12] px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  View Full Specs <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
