import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, Landmark, Briefcase, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Serve — NAMI Group",
  description:
    "Sophisticated capital structures, treasury solutions, and cross-border corridors for Corporates, Family Offices, Funds, and Financial Institutions.",
};

const segments = [
  {
    icon: Building2,
    title: "Corporates & Enterprises",
    subtitle: "Capital structure and operational advisory.",
    desc: "Supporting growing enterprises with debt syndication, working capital frameworks, structured trade finance, and long-term operating leases.",
    verticals: ["Investment Banking", "Capfin Advisory", "Trade Finance", "Leasing Solutions"],
  },
  {
    icon: Landmark,
    title: "Family Offices & HNIs",
    subtitle: "Wealth stewardship and yield advisory.",
    desc: "Designing tailored treasury investment strategies, fixed income allocations (G-Secs, SDLs, corporate bonds), and offshore fund structures in GIFT City.",
    verticals: ["Bond & Treasury", "GIFT IFSC Advisory", "Fixed Income Allocation"],
  },
  {
    icon: Briefcase,
    title: "Fund & Asset Managers",
    subtitle: "Regulated structures and operations setups.",
    desc: "Providing legal structuring, tax-efficient pathways, and outsourcing capabilities (KPO/BPO) for launching offshore funds or leasing platforms.",
    verticals: ["GIFT IFSC Advisory", "Aviation & Maritime SPVs", "Audit & Compliance Outsourcing"],
  },
  {
    icon: TrendingUp,
    title: "Banks & Financial Institutions",
    subtitle: "Liquidity management and distribution.",
    desc: "Facilitating secondary market bond placement, syndication partnerships, inter-bank credit lines, and technology-driven operations.",
    verticals: ["Secondary Market Bond Desk", "Liquidity Strategies", "KPO/BPO Desk"],
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <section className="pt-44 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
        <div className="container-x relative">
          <span className="eyebrow">Target Segments</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-foreground font-light tracking-tight max-w-4xl leading-[1]">
            Strategic partnership for{" "}
            <span className="italic text-gradient-gold">global capital.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground text-lg">
            NAMI Group serves a diverse cohort of corporate, institutional, and private clients who
            require sophisticated structuring, capital deployment, and cross-border capabilities.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-8">
            {segments.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-card border border-border/60 p-8 md:p-12 hover:border-gold/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <Icon className="h-8 w-8 text-gold" strokeWidth={1.2} />
                      <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
                        Segment {idx + 1}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl text-foreground font-light mb-2">
                      {s.title}
                    </h2>
                    <p className="text-sm font-medium text-gold mb-6">{s.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8">{s.desc}</p>
                  </div>
                  <div>
                    <div className="border-t border-border/40 pt-6">
                      <div className="text-[10px] tracking-wider uppercase text-muted-foreground mb-4">
                        Core Desks
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {s.verticals.map((v) => (
                          <span
                            key={v}
                            className="text-[11px] border border-border px-3 py-1 bg-muted/30 text-foreground/80"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/40 bg-muted/20">
        <div className="container-x text-center max-w-3xl">
          <span className="eyebrow">Client Engagement</span>
          <h2 className="mt-6 font-display text-3xl md:text-5xl text-foreground font-light tracking-tight">
            Schedule a briefing with our{" "}
            <span className="italic text-gradient-gold">client relationships desk.</span>
          </h2>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold text-navy-deep px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
            >
              Contact Relationship Manager <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
