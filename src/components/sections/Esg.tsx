interface EsgItem {
  t: string;
  d: string;
}

export function Esg() {
  const items: EsgItem[] = [
    { t: "Corporate Governance", d: "Independent oversight and board-level discipline." },
    { t: "Compliance", d: "Multi-jurisdictional regulatory alignment." },
    { t: "Risk Management", d: "Enterprise risk framework across every mandate." },
    { t: "Ethics", d: "Codified conduct standards for the entire group." },
    { t: "Sustainability", d: "ESG-aware structuring across capital and advisory." },
    { t: "Global Standards", d: "Aligned with international institutional benchmarks." },
  ];
  return (
    <section className="py-32 bg-muted/60 border-y border-border/40">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">ESG & Governance</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight">
            Governance as a <span className="italic text-gradient-gold">first principle.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
          {items.map((it, i) => (
            <div key={it.t} className="bg-muted/60 p-8">
              <span className="font-display text-xs text-gold tabular-nums tracking-[0.28em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl text-foreground">{it.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
