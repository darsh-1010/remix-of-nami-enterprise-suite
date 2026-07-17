import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

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
    <section id="esg" className="py-32 bg-background border-y border-border/40">
      <div className="container-x">
        <Reveal className="max-w-3xl mb-16">
          <span className="eyebrow text-sky">ESG & Governance</span>
          <SplitReveal as="h2" className="mt-6 font-display text-4xl md:text-5xl text-navy-deep font-light tracking-tight">
            <>Governance as a first principle.</>
          </SplitReveal>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal
              key={it.t}
              delay={(i % 3) * 0.08}
              className="rounded-2xl border border-border/40 bg-card hover:border-sky/50 transition-colors duration-300 p-8"
            >
              <span className="font-display text-xs text-sky tabular-nums tracking-[0.28em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl text-navy-deep">{it.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
