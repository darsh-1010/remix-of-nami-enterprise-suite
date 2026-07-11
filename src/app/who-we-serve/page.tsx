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

      {/* Sector Coverage */}
      <section className="py-24 border-t border-border/40">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-6">
              <span className="eyebrow">Sector Expertise</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight">
                Global sector coverage &amp;{" "}
                <span className="italic text-gradient-gold">market depths.</span>
              </h2>
            </div>
            <p className="lg:col-span-6 text-muted-foreground text-base leading-relaxed">
              We leverage deep vertical domain expertise to structure, advise, and execute
              transactions across key global growth segments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Tech & FinTech",
                depth: "30% Market Depth",
                desc: "Enterprise SaaS, payments infrastructure, cybersecurity, and advanced software platforms seeking capital rounds.",
              },
              {
                title: "Industrials & Manufacturing",
                depth: "25% Market Depth",
                desc: "Aerospace components, precision engineering systems, advanced automotive parts, and specialty chemicals.",
              },
              {
                title: "Consumer & Retail",
                depth: "15% Market Depth",
                desc: "Omnichannel premium brands, e-commerce platforms, food & beverage chains, and consumer network setups.",
              },
              {
                title: "Healthcare",
                depth: "12% Market Depth",
                desc: "Medical devices, tech-enabled clinical setups, specialized diagnostic networks, and digital healthcare platforms.",
              },
              {
                title: "Energy & Resources",
                depth: "10% Market Depth",
                desc: "Solar arrays, infrastructure projects, traditional utilities, and renewable transition syndicates.",
              },
              {
                title: "Real Estate & PropTech",
                depth: "8% Market Depth",
                desc: "Logistics spaces, commercial properties, hotel developments, and property technology software setups.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-card border border-border/40 p-8 hover:border-gold/60 transition-colors"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {s.depth}
                </span>
                <h3 className="mt-4 font-display text-2xl text-foreground font-light">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Channels */}
      <section className="py-24 border-t border-border/40 bg-muted/40">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow">Connectivity</span>
              <h2 className="mt-6 font-display text-4xl text-foreground font-light tracking-tight">
                Global connectivity &amp;{" "}
                <span className="italic text-gradient-gold">strategic channels.</span>
              </h2>
              <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
                NAMI maintains direct links with cross-border institutional bodies and offshore
                regulatory agencies to accelerate client execution corridors outside mainland India.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border/40">
              {[
                {
                  c: "BRICS Chamber",
                  d: "Official chamber alignments to accelerate capital flow pathways.",
                },
                {
                  c: "UK Dept of Trade",
                  d: "Active corridor support with deputy high commissions.",
                },
                {
                  c: "Embassy Networks",
                  d: "Structural transaction pathways across key sovereign business hubs.",
                },
                {
                  c: "135+ Global Lenders",
                  d: "Direct connections with global banks, sovereign wealth, and private family offices.",
                },
              ].map((ch) => (
                <div key={ch.c} className="bg-card border border-border/40 p-6">
                  <h4 className="font-display text-base text-gold mb-2">{ch.c}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{ch.d}</p>
                </div>
              ))}
            </div>
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
