import Image from "next/image";

export function GlobalPresence() {
  const markets = [
    { name: "India & GIFT IFSC", desc: "Foundational regulatory gateway & HQs" },
    { name: "United States", desc: "North America sovereign capital corridors" },
    { name: "United Kingdom", desc: "UK Dept of Trade & London connectivity" },
    { name: "United Arab Emirates", desc: "Middle East capital structuring hubs" },
    { name: "Europe (FR & CH)", desc: "Offshore wealth and banking access" },
  ];
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow">Global Presence</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light tracking-tight">
              Capital corridors spanning{" "}
              <span className="italic text-gradient-gold">four regions.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-base leading-relaxed">
            A connected platform of regulated entities, banking relationships and execution desks —
            purpose-built to move capital, advisory and structured solutions across jurisdictions.
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/assets/world-map.jpg"
              alt="Global network"
              fill
              className="object-cover opacity-80"
              sizes="100vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border/40">
            {markets.map((m) => (
              <div
                key={m.name}
                className="bg-card border border-border/40 p-6 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-[10px] tracking-[0.28em] uppercase text-gold">Active</span>
                </div>
                <div className="font-display text-foreground text-lg">{m.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
