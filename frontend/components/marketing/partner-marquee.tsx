"use client";

import Image from "next/image";
import miniminesImg from "@/images/Partner/minimines.jpg";
import vivitronImg from "@/images/Partner/vivitron_energy.png";
import licoImg from "@/images/Partner/LICO.jpg";
import soleilImg from "@/images/Partner/soleil_power_logo.jpg";
import newareImg from "@/images/Partner/neware.png";
import zipboltImg from "@/images/Partner/zipbolt_logo.png";
import bhcImg from "@/images/Partner/British_high_comission_india.jpg";

const partners = [
  {
    name: "MiniMines",
    logo: miniminesImg,
  },
  {
    name: "Vivitron Energy",
    logo: vivitronImg,
  },
  {
    name: "LICO Materials",
    logo: licoImg,
  },
  {
    name: "Soleil Power",
    logo: soleilImg,
  },
  {
    name: "Neware Technology",
    logo: newareImg,
  },
  {
    name: "Zipbolt Innovations",
    logo: zipboltImg,
  },
  {
    name: "British High Commission",
    logo: bhcImg,
  },
];

// Duplicate partners 4 times for continuous gapless loop
const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

export function PartnerMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-10 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused] items-center">
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="group relative flex h-24 w-60 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white px-2 py-1 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:border-[var(--signal)] hover:shadow-[0_0_30px_rgba(92,225,201,0.4)]"
          >
            <div className="relative h-[88px] w-[220px] transition-transform duration-300 group-hover:scale-105">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="260px"
                priority={index < 7}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
