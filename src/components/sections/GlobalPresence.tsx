"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { WorldMap, type MapMarker } from "@/components/motion/WorldMap";

// pin = position on the WorldMap canvas; labels sit left/right with leader lines to the pin.
const markets: MapMarker[] = [
  { name: "India & GIFT IFSC", pin: [863, 334], side: "right", labelY: 490 },
  { name: "United States", pin: [519, 250], side: "left", labelY: 150 },
  { name: "United Kingdom", pin: [671, 204], side: "left", labelY: 70 },
  { name: "United Arab Emirates", pin: [829, 307], side: "right", labelY: 570 },
  { name: "China", pin: [1030, 292], side: "right", labelY: 70 },
];

export function GlobalPresence() {
  const [focus, setFocus] = useState<number | null>(null);
  return (
    <section id="global-presence" className="py-32 relative overflow-hidden">
      <div className="container-x">
        <Reveal className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow">Global Presence</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light tracking-tight"
            >
              <>
                Capital corridors spanning <span className="text-gradient-gold">five regions.</span>
              </>
            </SplitReveal>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-base leading-relaxed">
            A connected platform of regulated entities, banking relationships and execution desks —
            purpose-built to move capital, advisory and structured solutions across jurisdictions.
          </p>
        </Reveal>

        <div className="relative">
          <WorldMap markers={markets} focus={focus} onFocus={setFocus} className="mx-auto w-full" />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {markets.map((m, i) => (
              <div
                key={m.name}
                onMouseEnter={() => setFocus(i)}
                onMouseLeave={() => setFocus(null)}
              >
                <Reveal
                  delay={i * 0.08}
                  className="rounded-2xl bg-card border border-border/40 p-6 hover:bg-muted/20 hover:shadow-elegant transition-all duration-300"
                >
                  <div className="font-display text-foreground text-2xl">{m.name}</div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
