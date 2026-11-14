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
        <span className="eyebrow">NAMI Business Segments</span>
        <Reveal className="mt-8 flex flex-col md:flex-row md:h-[30rem] bg-[#05080f] rounded-2xl overflow-hidden">
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
                className={`group relative overflow-hidden min-w-0 cursor-pointer outline-none border-r border-white/5 transition-[flex-grow,height,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  on
                    ? "z-10 h-64 md:h-auto md:flex-[4] shadow-[0_0_60px_rgba(0,0,0,0.8)]"
                    : "h-20 md:h-auto md:flex-1"
                }`}
              >
                <Image
                  src={c.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectPosition: c.pos }}
                  className={`object-cover transition-all duration-700 ${
                    on ? "scale-100 brightness-100" : "scale-110 grayscale brightness-[0.35]"
                  }`}
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    on
                      ? "opacity-100 bg-gradient-to-b from-black/70 via-transparent to-[#090e1a]/60"
                      : "opacity-100 bg-[#090e1a]/60"
                  }`}
                />
                <h3
                  className={`absolute top-4 left-3 right-2 font-display leading-snug break-words transition-all duration-500 ${
                    on ? "text-xl text-white md:left-6 md:top-6" : "text-[11px] text-white/70"
                  }`}
                >
                  <span className="block text-[10px] tracking-[0.3em] text-gold mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
