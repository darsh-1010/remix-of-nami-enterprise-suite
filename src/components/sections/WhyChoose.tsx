import {
  Shield,
  Scale,
  Network,
  Globe2,
  TrendingUp,
  Building2,
  LineChart,
  Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

interface Reason {
  i: LucideIcon;
  t: string;
  d: string;
}

export function WhyChoose() {
  const reasons: Reason[] = [
    {
      i: Shield,
      t: "Senior-Led Focus",
      d: "Direct operational management from highly experienced directors on every transaction.",
    },
    {
      i: Scale,
      t: "Institutional Grade",
      d: "Impeccable quality controls and structured finance models designed to clear regulatory audits.",
    },
    {
      i: Network,
      t: "Domain Expertise",
      d: "Decades of combined corporate transaction experience with global capital corridors.",
    },
    {
      i: Globe2,
      t: "Global Placement",
      d: "Vast network linking strategic partners across major offshore investment corridors.",
    },
    {
      i: TrendingUp,
      t: "Result Orientation",
      d: "Committed to robust advisory execution, corporate targets, and final deal closing.",
    },
    {
      i: Building2,
      t: "135+ Global Lenders",
      d: "Direct access to Tier-1 banks, sovereign funds, and institutional family offices.",
    },
    {
      i: LineChart,
      t: "285+ Valuations",
      d: "Asset and business valuations prepared, assessed, and backed across regulatory bodies.",
    },
    {
      i: Cpu,
      t: "150+ Blueprints",
      d: "Rigorous compilation of investment structure files and institutional sanction documents.",
    },
  ];
  return (
    <section className="py-32 bg-muted/80 border-y border-border/40">
      <div className="container-x">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">Why Choose NAMI</span>
          <SplitReveal
            as="h2"
            className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight"
          >
            <>
              A platform designed for{" "}
              <span className="text-gradient-gold">institutional trust.</span>
            </>
          </SplitReveal>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.i;
            return (
              <Reveal
                key={r.t}
                delay={(i % 4) * 0.08}
                className="rounded-2xl border border-border/40 bg-muted/80 p-8 group hover:bg-muted/50 hover:shadow-elegant transition-all duration-300"
              >
                <Icon className="h-7 w-7 text-gold mb-6" strokeWidth={1.2} />
                <h3 className="font-display text-lg text-foreground mb-3">{r.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.d}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
