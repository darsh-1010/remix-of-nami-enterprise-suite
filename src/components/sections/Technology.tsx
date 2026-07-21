import { Cpu } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

export function Technology() {
  const items = [
    "AI Models",
    "Automation",
    "Analytics",
    "Workflow Engines",
    "Risk Engine",
    "Financial Dashboards",
    "Client Portal",
    "Secure Data Room",
  ];
  return (
    <section id="technology" className="py-32 bg-muted/80 border-y border-border/40">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">Technology</span>
          <SplitReveal
            as="h2"
            className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight"
          >
            <>
              A modern stack underpinning{" "}
              <span className="text-gradient-gold">institutional execution.</span>
            </>
          </SplitReveal>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            AI-assisted analytics, automated workflows, embedded risk engines and a secure client
            portal — built for the operating tempo of capital markets and cross-border finance.
          </p>
        </Reveal>
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((it, i) => (
            <Reveal
              key={it}
              delay={(i % 4) * 0.06}
              className="group rounded-xl bg-muted/80 aspect-square p-5 flex flex-col justify-between hover:bg-ink hover:shadow-elegant transition-all duration-300"
            >
              <Cpu
                className="h-5 w-5 text-gold/70 group-hover:text-gold-bright transition-colors"
                strokeWidth={1.2}
              />
              <span className="text-sm text-foreground/90 group-hover:text-white leading-tight transition-colors">
                {it}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
