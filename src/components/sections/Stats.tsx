import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

export function Stats() {
  const stats = [
    { n: "110+", l: "Combined Team Years" },
    { n: "USD 277M+", l: "Funds Mobilized (INR 2500+ Cr)" },
    { n: "135+", l: "Global Lenders Connected" },
    { n: "USD 2.0B+", l: "Combined Deal Advisory Value" },
  ];
  return (
    <section className="py-20">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <Reveal
            key={s.l}
            delay={i * 0.1}
            className="rounded-2xl bg-card border border-border/40 p-6 md:p-8 hover:shadow-elegant transition-shadow duration-500"
          >
            <AnimatedCounter
              value={s.n}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extralight text-gradient-gold tabular-nums"
            />
            <div className="mt-3 text-xs tracking-[0.28em] uppercase text-muted-foreground">
              {s.l}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
