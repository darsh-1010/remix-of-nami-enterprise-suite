import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

export function GlobalPresence() {
  const markets = [
    { name: "India & GIFT IFSC", desc: "Foundational regulatory gateway & HQs" },
    { name: "United States", desc: "North America sovereign capital corridors" },
    { name: "United Kingdom", desc: "UK Dept of Trade & London connectivity" },
    { name: "United Arab Emirates", desc: "Middle East capital structuring hubs" },
    { name: "Europe (FR & CH)", desc: "Offshore wealth and banking access" },
  ];
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
                Capital corridors spanning <span className="text-gradient-gold">four regions.</span>
              </>
            </SplitReveal>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-base leading-relaxed">
            A connected platform of regulated entities, banking relationships and execution desks —
            purpose-built to move capital, advisory and structured solutions across jurisdictions.
          </p>
        </Reveal>

        <div className="relative">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src="/assets/world-map.jpg"
              alt="Global network"
              fill
              className="object-cover opacity-80"
              sizes="100vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {markets.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 0.08}
                className="rounded-2xl bg-card border border-border/40 p-6 hover:bg-muted/20 hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-[10px] tracking-[0.28em] uppercase text-gold">Active</span>
                </div>
                <div className="font-display text-foreground text-lg">{m.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{m.desc}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
