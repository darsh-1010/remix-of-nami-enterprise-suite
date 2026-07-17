import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

export function Gift() {
  const items = [
    "Fund Setup",
    "Treasury Operations",
    "IFSC Advisory",
    "Cross-border Structuring",
    "Global Investments",
    "Leasing Structures",
    "Tax Efficient Structures",
    "International Banking",
  ];
  return (
    <section className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="container-x relative">
        <div className="glass-strong rounded-3xl p-10 md:p-16 lg:p-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <Reveal className="lg:col-span-5">
              <span className="eyebrow">GIFT IFSC Solutions</span>
              <SplitReveal
                as="h2"
                className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight"
              >
                <>
                  The gateway to{" "}
                  <span className="text-gradient-gold">India&apos;s global financial</span>{" "}
                  jurisdiction.
                </>
              </SplitReveal>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                Dedicated IFSC structuring, advisory and execution — purpose-built for funds,
                treasuries, leasing vehicles and international institutional capital.
              </p>
              <Link
                href="/businesses"
                className="mt-10 inline-flex items-center gap-3 text-gold text-sm tracking-[0.22em] uppercase hover:gap-5 transition-all"
              >
                Explore IFSC capability <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {items.map((it, i) => (
                <Reveal
                  key={it}
                  delay={(i % 4) * 0.08}
                  className="rounded-xl bg-muted/40 p-6 flex items-center gap-4"
                >
                  <span className="font-display text-xs text-gold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/90 text-sm">{it}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
