export function Stats() {
  const stats = [
    { n: "110+", l: "Combined Team Years" },
    { n: "USD 277M+", l: "Funds Mobilized (INR 2500+ Cr)" },
    { n: "135+", l: "Global Lenders Connected" },
    { n: "USD 2.0B+", l: "Combined Deal Advisory Value" },
  ];
  return (
    <section className="border-y border-border/40 bg-muted/50 py-20">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-y-12">
        {stats.map((s, i) => (
          <div key={s.l} className={`px-6 ${i > 0 ? "lg:border-l border-border/60" : ""}`}>
            <div className="font-display text-5xl md:text-6xl font-extralight text-gradient-gold tabular-nums">
              {s.n}
            </div>
            <div className="mt-3 text-xs tracking-[0.28em] uppercase text-muted-foreground">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
