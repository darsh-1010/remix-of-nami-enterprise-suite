import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

export function Leadership() {
  return (
    <section className="py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <Reveal className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden relative rounded-2xl">
              <Image
                src="/assets/chairman.jpg"
                alt="Dipen U Shah, Chairman"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
            </div>
            <div className="absolute top-6 -left-6 hidden md:flex flex-col gap-2">
              <span className="h-12 w-px bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold rotate-180 [writing-mode:vertical-rl]">
                Chairman
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <span className="eyebrow">Leadership</span>
            <SplitReveal as="h2" className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light tracking-tight">
              <>Dipen U Shah</>
            </SplitReveal>
            <div className="mt-3 text-sm tracking-[0.32em] uppercase text-gold">
              CA · CS · Chairman
            </div>
            <blockquote className="mt-10 text-xl md:text-2xl text-foreground/85 font-light italic leading-relaxed border-l border-gold pl-6">
              &quot;We are building an institutional platform that combines the trust of traditional
              finance with the precision of modern technology — a corridor for global capital,
              advisory and execution.&quot;
            </blockquote>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              A Chartered Accountant and Company Secretary by training, Dipen has spent decades
              structuring capital, advising boards and building regulated financial businesses
              across India and global markets. He leads NAMI Group&apos;s strategy across investment
              banking, treasury, leasing and IFSC mandates.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
              {[
                { v: "25+", l: "Years" },
                { v: "100+", l: "Mandates" },
                { v: "08", l: "Verticals" },
              ].map((s, i) => (
                <Reveal
                  key={s.l}
                  delay={0.2 + i * 0.08}
                  className="rounded-xl bg-card border border-border/40 p-5"
                >
                  <div className="font-display text-2xl text-gold">{s.v}</div>
                  <div className="mt-1 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                    {s.l}
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
