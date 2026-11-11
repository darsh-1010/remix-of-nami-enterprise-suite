"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const categories = [
  { name: "Capital Market", img: "/assets/hero-financial.jpg", pos: "center" },
  {
    name: "Capital Market Intermediary - Broking & Distribution",
    img: "/assets/boardroom.jpg",
    pos: "20% 40%",
  },
  { name: "Global Fund Raising & Arrangements", img: "/assets/world-map.jpg", pos: "center" },
  { name: "Global Supply Chain Finance & Services", img: "/assets/maritime.jpg", pos: "10% 80%" },
  { name: "Aviation & Ship", img: "/assets/aviation.jpg", pos: "center" },
  { name: "Global Advisory & Consulting", img: "/assets/boardroom.jpg", pos: "60% 60%" },
  { name: "KPO BPO", img: "/assets/boardroom.jpg", pos: "90% 30%" },
  { name: "FinTech & HealthTech", img: "/assets/hero-financial.jpg", pos: "80% 50%" },
  { name: "Trading", img: "/assets/world-map.jpg", pos: "80% 30%" },
];

export function AviationMaritime() {
  const [active, setActive] = useState(0);
  return (
    <section id="aviation-maritime" className="py-20">
      <div className="container-x">
        <span className="eyebrow">Categories</span>
        <Reveal className="mt-8 flex flex-col md:flex-row gap-3 md:h-[28rem]">
          {categories.map((c, i) => {
            const on = active === i;
            return (
              <div
                key={c.name}
                tabIndex={0}
                role="button"
                aria-expanded={on}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-2xl bg-[#090e1a] border border-border/40 cursor-pointer outline-none transition-[flex-grow,height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  on ? "h-64 md:h-auto md:flex-[6]" : "h-20 md:h-auto md:flex-1"
                } min-w-0`}
              >
                <Image
                  src={c.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectPosition: c.pos }}
                  className={`object-cover transition-all duration-700 ${
                    on ? "opacity-90 scale-100" : "opacity-40 grayscale scale-110"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-[#090e1a]/50 to-[#090e1a]/10" />
                <span className="absolute top-4 left-4 font-display text-xs tracking-[0.3em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* collapsed: vertical label on desktop */}
                <h3
                  className={`absolute font-display text-sm text-white/80 transition-opacity duration-300 md:[writing-mode:vertical-rl] md:rotate-180 md:bottom-5 md:left-1/2 md:-translate-x-1/2 bottom-3 left-4 right-4 ${
                    on ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  {c.name}
                </h3>
                {/* expanded: horizontal title */}
                <h3
                  className={`absolute bottom-6 left-6 right-6 font-display text-2xl leading-snug text-white transition-all duration-500 ${
                    on ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-3"
                  }`}
                >
                  {c.name}
                </h3>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
