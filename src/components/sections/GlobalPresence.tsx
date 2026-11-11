"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Globe } from "@/components/motion/Globe";

// location = [lat, lng]; the first entry is the hub the arcs radiate from.
const markets = [
  { name: "India & GIFT IFSC", location: [23.16, 72.68] as [number, number] },
  { name: "United States", location: [40.71, -74.0] as [number, number] },
  { name: "United Kingdom", location: [51.51, -0.13] as [number, number] },
  { name: "United Arab Emirates", location: [25.2, 55.27] as [number, number] },
  { name: "China", location: [31.23, 121.47] as [number, number] },
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
          <Globe markers={markets} focus={focus} className="mx-auto max-w-[640px]" />

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
