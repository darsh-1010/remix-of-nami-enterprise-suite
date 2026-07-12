import { ArrowUpRight } from "lucide-react";

export function Treasury() {
  const left = [
    "Government Securities",
    "Corporate Bonds",
    "State Development Loans",
    "TREPS",
    "Money Market",
    "Commercial Papers",
    "Certificates of Deposit",
  ];
  const right = [
    "Bond Portfolio Advisory",
    "Treasury Risk Management",
    "Yield Forecasting",
    "Duration Management",
    "Liquidity Planning",
    "Hedging Strategies",
  ];
  return (
    <section className="py-32 bg-muted/60">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">Treasury & Capital Markets</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight">
            Institutional fixed-income, <span className="italic text-gradient-gold">at scale.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border/40">
          <div className="bg-muted/60 p-10">
            <h3 className="text-xs tracking-[0.28em] uppercase text-gold mb-8">Instruments</h3>
            <ul className="space-y-5">
              {left.map((it) => (
                <li
                  key={it}
                  className="flex items-center justify-between border-b border-border/40 pb-5 last:border-0"
                >
                  <span className="text-foreground/85">{it}</span>
                  <span className="text-[10px] tracking-[0.28em] uppercase text-gold/70">
                    Active
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-muted/60 p-10">
            <h3 className="text-xs tracking-[0.28em] uppercase text-gold mb-8">Advisory</h3>
            <ul className="space-y-5">
              {right.map((it) => (
                <li
                  key={it}
                  className="flex items-center justify-between border-b border-border/40 pb-5 last:border-0"
                >
                  <span className="text-foreground/85">{it}</span>
                  <ArrowUpRight className="h-4 w-4 text-gold/60" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
