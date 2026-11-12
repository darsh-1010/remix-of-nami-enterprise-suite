import Image from "next/image";
import { SplitReveal } from "@/components/motion/SplitReveal";

export function About() {
  return (
    <section className="py-24 relative">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/assets/boardroom.jpg"
              alt="Executive boardroom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden md:block w-48 h-48 border border-gold/40" />
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow">About &amp; Governance</span>
          <SplitReveal
            as="h2"
            className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground font-light tracking-tight"
          >
            <>
              An integrated financial ecosystem —{" "}
              <span className="text-gradient-gold">engineered for institutions.</span>
            </>
          </SplitReveal>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed font-light">
            NAMI Group is dedicated to providing premier Investment Banking, Treasury, cross-border
            capital raising and GIFT IFSC solutions — directing institutional wealth frameworks and
            cutting-edge technology deployment pathways across global markets.
          </p>
        </div>
        <div className="lg:col-span-12 grid lg:grid-cols-2 lg:gap-x-16">
          {[
            [
              "Professional Management",
              "Seasoned banking and capital-markets leadership across regulated jurisdictions.",
            ],
            [
              "Institutional Advisory",
              "Mandates structured to the standards of sovereign and institutional capital.",
            ],
            [
              "Global Partnerships",
              "Distribution and execution rails across India, UAE, USA, UK and IFSC.",
            ],
            ["Technology Driven", "Workflow, risk and data infrastructure integrated end-to-end."],
            ["Corporate Governance", "Independent oversight and board-level discipline."],
            ["Compliance", "Multi-jurisdictional regulatory alignment."],
            ["Risk Management", "Enterprise risk framework across every mandate."],
            ["Ethics", "Codified conduct standards for the entire group."],
            ["Sustainability", "ESG-aware structuring across capital and advisory."],
            ["Global Standards", "Aligned with international institutional benchmarks."],
          ].map(([t, d]) => (
            <div
              key={t}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-t border-border/50 py-4"
            >
              <h3 className="font-display text-base text-gold sm:w-48 shrink-0">{t}</h3>
              <p className="text-sm text-muted-foreground leading-snug">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
