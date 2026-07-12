import { Cpu } from "lucide-react";

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
    <section className="py-32 bg-muted/80 border-y border-border/40">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <span className="eyebrow">Technology</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight">
            A modern stack underpinning{" "}
            <span className="italic text-gradient-gold">institutional execution.</span>
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            AI-assisted analytics, automated workflows, embedded risk engines and a secure client
            portal — built for the operating tempo of capital markets and cross-border finance.
          </p>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40">
          {items.map((it) => (
            <div
              key={it}
              className="bg-muted/80 aspect-square p-5 flex flex-col justify-between hover:bg-[oklch(0.15_0.03_250)] transition-all"
            >
              <Cpu className="h-5 w-5 text-gold/70" strokeWidth={1.2} />
              <span className="text-sm text-foreground/90 leading-tight">{it}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
