import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

export function Industries() {
  const items = [
    "Infrastructure",
    "Healthcare",
    "Manufacturing",
    "Logistics",
    "Financial Institutions",
    "NBFCs",
    "Banks",
    "Corporates",
    "Government",
    "Shipping",
    "Airlines",
    "Technology",
    "Exporters",
    "Importers",
  ];
  return (
    <section className="py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Industries Served</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight"
            >
              <>
                Capital and advisory for the institutions that{" "}
                <span className="text-gradient-gold">build economies.</span>
              </>
            </SplitReveal>
          </Reveal>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-3">
            {items.map((it, i) => (
              <Reveal
                key={it}
                delay={(i % 6) * 0.06}
                className="rounded-xl bg-card border border-border/40 p-5 text-sm text-foreground/80 tracking-wide hover:text-gold hover:shadow-elegant transition-all duration-300 flex items-center gap-3"
              >
                <span className="h-1 w-1 bg-gold" />
                {it}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
