import type { Metadata } from "next";
import Link from "next/link";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { SectionNav } from "@/components/site/SectionNav";
import {
  ArrowUpRight,
  TrendingUp,
  Zap,
  Globe,
  BarChart3,
  Shield,
  Code2,
  Cpu,
  Package,
  Leaf,
  DollarSign,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "NAMI Investment Banking — High-Impact Financial Advisory & Capital Markets",
  description:
    "Expert investment banking services combining capital markets expertise, M&A advisory, structured finance, and global capital placement for enterprise-scale transactions.",
  keywords: [
    "NAMI Investment Banking",
    "M&A Advisory",
    "Capital Markets",
    "Structured Finance",
    "Debt Syndication",
    "Equity Placement",
    "LBO Structuring",
    "Corporate Advisory",
    "Financial Advisory",
  ],
  openGraph: {
    title: "NAMI Investment Banking — High-Impact Financial Advisory & Capital Markets",
    description:
      "Tier-one analytical depth combined with boutique advisory focus. 245+ deals advised, USD 2.0B+ combined deal value.",
    type: "website",
  },
};

const servicePillars = [
  {
    id: "capital-markets",
    no: "01",
    icon: DollarSign,
    title: "Capital Markets Advisory",
    description:
      "Public & private equity placements and structured debt syndication models across active sovereign corridors.",
    services: [
      "IPO & SME Listings: Full-scope placement preparation and prospectus filing",
      "Debt Capital: Access to 135+ global credit lenders and institutional funds",
      "Private Equity Placements: Direct institutional investor networks",
      "Structured Debt Syndication: Multi-lender coordination frameworks",
    ],
    metrics: [
      "USD 120M+ Equity Placed",
      "USD 157M+ Debt Mobilized",
      "135+ Global Lenders Network",
    ],
  },
  {
    id: "mergers-acquisitions",
    no: "02",
    icon: TrendingUp,
    title: "Mergers & Acquisitions",
    description:
      "Strategic sell-side optimization, buy-side target maps, and comprehensive cross-border joint venture mandates.",
    services: [
      "Buy-Side Strategy: Precise market screen maps and diligence pipelines",
      "Sell-Side Optimization: Premium confidential memorandums and structural positioning",
      "Cross-Border JV Mandates: Multi-jurisdictional transaction structuring",
      "Post-Deal Advisory: Integration planning and regulatory clearances",
    ],
    metrics: [
      "245+ Deals Advised & Cleared",
      "USD 2.0B+ Combined Deal Value",
      "11+ Countries Served",
    ],
  },
  {
    id: "structured-finance",
    no: "03",
    icon: Zap,
    title: "Structured Finance",
    description:
      "Leveraged buyout debt stacks, mezzanine options, waterfall configurations, and customized funding structures.",
    services: [
      "Acquisition Finance: Mezzanine options, unitranche, and hybrid structures",
      "Waterfall Design: Custom equity return stacks and structural optimization plans",
      "LBO Structuring: Multi-tranche debt and equity configurations",
      "Project Finance: Infrastructure and capital-intensive project funding",
    ],
    metrics: [
      "45+ LBOs Structured",
      "USD 85M+ Project Finance Stack",
      "150+ Investment Blueprints",
    ],
  },
  {
    id: "support-services",
    no: "04",
    icon: BarChart3,
    title: "Deal Support & Execution",
    description:
      "Institutional-grade financial valuation modeling, validation reports, investor memorandum packs, and diligence rooms.",
    services: [
      "Research & Valuations: DCF models, comp analysis, and operational benchmarking",
      "Execution Support: Data room setup, credential compilations, and diligence reviews",
      "Risk & Compliance: Transaction governance and cross-border regulatory alignment",
      "Client Relations: Post-deal advisory and custom portfolio reporting",
    ],
    metrics: [
      "285+ Valuations Completed",
      "150+ Investment Blueprints Compiled",
      "Institutional-Grade Quality Controls",
    ],
  },
  {
    id: "sustainability",
    no: "05",
    icon: Leaf,
    title: "Sustainability & Risk Management",
    description:
      "Green capital placement strategies, transition frameworks, and derivatives-based market hedging algorithms.",
    services: [
      "Green Finance: Structuring green, social, and sustainability-linked options",
      "Transition Finance: ESG framework advisory for corporate transitions",
      "Risk Advisory: FX, interest rate, and currency swap modeling",
      "Hedging Frameworks: Active derivatives strategies for cash flow management",
    ],
    metrics: [
      "USD 45M+ Green Deal Allocations",
      "18+ Active Hedging Frameworks",
      "Comprehensive ESG Advisory",
    ],
  },
];

const sectorCoverage = [
  {
    depth: "30%",
    sector: "Tech & Fintech",
    description:
      "Enterprise SaaS, payments infrastructure, cybersecurity, and advanced software ecosystems seeking capital rounds.",
    icon: Code2,
  },
  {
    depth: "25%",
    sector: "Industrials & Manufacturing",
    description:
      "Aerospace components, precision engineering systems, advanced automotive parts, and speciality chemicals.",
    icon: Cpu,
  },
  {
    depth: "15%",
    sector: "Consumer & Retail",
    description:
      "Omnichannel premium brands, e-commerce platforms, food & beverage chains, and consumer network setups.",
    icon: Package,
  },
  {
    depth: "12%",
    sector: "Healthcare",
    description:
      "Medical devices, tech-enabled clinical setups, specialized diagnostic networks, and digital healthcare platforms.",
    icon: Shield,
  },
  {
    depth: "10%",
    sector: "Energy & Resources",
    description:
      "Solar arrays, infrastructure projects, traditional utilities, and renewable transition syndicates.",
    icon: Zap,
  },
  {
    depth: "8%",
    sector: "Real Estate & PropTech",
    description:
      "Logistics spaces, commercial properties, hotel developments, and property technology software setups.",
    icon: Globe,
  },
];

const coreStrengths = [
  {
    no: "01",
    title: "Senior-Led Focus",
    description: "Direct operational management from highly experienced directors on every transaction",
  },
  {
    no: "02",
    title: "Institutional Grade",
    description: "Impeccable quality controls and structured finance models designed to clear regulatory audits",
  },
  {
    no: "03",
    title: "Domain Expertise",
    description: "Decades of combined corporate transaction experience with global capital corridors",
  },
  {
    no: "04",
    title: "Global Placement",
    description: "Vast network linking strategic partners across major offshore investment corridors",
  },
  {
    no: "05",
    title: "Result Orientation",
    description: "Committed to robust advisory execution and absolute final deal closing",
  },
];

const leadership = [
  {
    name: "Dipen U. Shah",
    title: "Founder Director",
    credentials: "CA | CS",
    experience: "18+ Years",
    background: "ING, Kotak Mahindra Bank & senior structures",
    expertise: "Capital markets, offshore setups, fund mobilisation",
  },
  {
    name: "Shail Shah",
    title: "Director - M&A & Tax",
    credentials: "CA",
    experience: "15+ Years",
    background: "Regulatory leadership, corporate taxation schemes",
    expertise: "Advanced M&A valuation, global corporate frameworks",
  },
  {
    name: "Dhiren Panchal",
    title: "Director - Global Banking",
    credentials: "CFA",
    experience: "20+ Years",
    background: "ICICI Bank, ABN Amro, HSBC, Yes Bank, DBS Bank",
    expertise: "Global banking networks, structures, FEMA guidelines",
  },
  {
    name: "Piyush Akhaja",
    title: "Director - Equity Advisory",
    experience: "15+ Years",
    background: "Investment Banking, corporate structuring",
    expertise: "Detailed operational models, DCF valuation, exits",
  },
];

const trackRecordMetrics = [
  {
    metric: "USD 277M+",
    label: "Funds Mobilized",
    sublabel: "INR 2500+ Crores",
  },
  {
    metric: "245+",
    label: "M&A Transactions",
    sublabel: "Sector-agnostic deals",
  },
  {
    metric: "USD 2.0B+",
    label: "Combined Deal Value",
    sublabel: "Advisory value across transactions",
  },
  {
    metric: "135+",
    label: "Global Lenders",
    sublabel: "Tier-1 banks & family offices",
  },
  {
    metric: "285+",
    label: "Valuations Completed",
    sublabel: "Across diverse regulatory bodies",
  },
  {
    metric: "110+",
    label: "Years Combined Experience",
    sublabel: "Specialized advisory team",
  },
  {
    metric: "11+",
    label: "Global Countries",
    sublabel: "Active client transactions",
  },
  {
    metric: "USD 45M+",
    label: "Green Deal Allocations",
    sublabel: "Sustainable financing structures",
  },
];

export default function InvestmentBankingPage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="pt-44 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
        <div className="container-x relative">
          <span className="eyebrow">Investment Banking</span>
          <SplitReveal
            as="h1"
            className="mt-6 font-display text-5xl md:text-7xl text-foreground font-light tracking-tight leading-[1]"
          >
            <>
              High-impact financial blueprints
              <br />
              <span className="text-gradient-gold">designed for major capital placements.</span>
            </>
          </SplitReveal>
          <p className="mt-8 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Blending the comprehensive analytical depth of tier-one banks with the dedicated focus of an elite corporate advisory boutique. We combine strategic counsel with institutional-grade execution models across capital markets, M&A, and structured finance.
          </p>
        </div>
      </section>

      <SectionNav
        sections={[
          { id: "pillars", label: "Service Pillars" },
          { id: "track-record", label: "Track Record" },
          { id: "sectors", label: "Sector Coverage" },
          { id: "strengths", label: "Core Strengths" },
          { id: "connectivity", label: "Connectivity" },
          { id: "leadership", label: "Leadership" },
          { id: "cta", label: "Contact" },
        ]}
      />

      {/* Service Pillars */}
      <section id="pillars" className="pb-32">
        <div className="container-x">
          {servicePillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.id}
                id={pillar.id}
                className="border-t border-border/60 py-16 grid lg:grid-cols-12 gap-10 group"
              >
                <div className="lg:col-span-2 flex items-start gap-4">
                  <span className="font-display text-xs tracking-[0.3em] text-gold tabular-nums">
                    {pillar.no}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <Icon className="h-8 w-8 text-gold mb-6" strokeWidth={1.2} />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground font-light tracking-tight">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">{pillar.description}</p>
                </div>
                <div className="lg:col-span-5">
                  <div className="text-xs tracking-[0.28em] uppercase text-gold mb-5">Services</div>
                  <ul className="grid sm:grid-cols-1 gap-y-3 gap-x-6 mb-8">
                    {pillar.services.map((s) => (
                      <li key={s} className="text-sm text-foreground/85 flex items-start gap-3">
                        <span className="h-1 w-1 bg-gold mt-2 flex-shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs tracking-[0.28em] uppercase text-gold mb-4">Metrics</div>
                  <ul className="space-y-2">
                    {pillar.metrics.map((m) => (
                      <li key={m} className="text-sm text-foreground/85 flex items-center gap-2">
                        <span className="h-0.5 w-3 bg-gold" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                {i === servicePillars.length - 1 && (
                  <div className="lg:col-span-12 border-b border-border/60 mt-8" />
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Track Record Metrics */}
      <section id="track-record" className="py-32 border-t border-border/40">
        <div className="container-x">
          <div className="mb-16">
            <span className="eyebrow">Proven Track Record</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight"
            >
              <>Eight years of institutional-grade results</>
            </SplitReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trackRecordMetrics.map((item, i) => (
              <div key={i} className="border border-border/40 rounded-lg p-6 hover:border-gold/40 transition-colors">
                <div className="font-display text-3xl md:text-4xl text-gold font-light tracking-tight">
                  {item.metric}
                </div>
                <div className="mt-3 text-sm font-medium text-foreground tracking-[0.1em] uppercase">
                  {item.label}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Coverage */}
      <section id="sectors" className="py-32 border-t border-border/40 bg-muted/40">
        <div className="container-x">
          <div className="mb-16">
            <span className="eyebrow">Market Coverage</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight"
            >
              <>
                Sector-agnostic expertise
                <br />
                <span className="text-gradient-gold">across six key verticals.</span>
              </>
            </SplitReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectorCoverage.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <article key={i} className="border border-border/40 rounded-lg p-8 hover:border-gold/40 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
                    <span className="font-display text-lg text-gold font-light">{sector.depth}</span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl text-foreground font-light tracking-tight mb-3">
                    {sector.sector}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{sector.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section id="strengths" className="py-32 border-t border-border/40">
        <div className="container-x">
          <div className="mb-16">
            <span className="eyebrow">Core Strengths</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight"
            >
              <>Five commitments to excellence</>
            </SplitReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreStrengths.map((strength, i) => (
              <article key={i} className="border border-border/40 rounded-lg p-8 hover:border-gold/40 transition-colors">
                <span className="inline-block font-display text-xs tracking-[0.3em] text-gold mb-4">
                  {strength.no}
                </span>
                <h3 className="font-display text-lg md:text-xl text-foreground font-light tracking-tight mb-3">
                  {strength.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{strength.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Global Connectivity */}
      <section id="connectivity" className="py-32 border-t border-border/40 bg-background">
        <div className="container-x">
          <div className="mb-16">
            <span className="eyebrow text-sky">Global Reach</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-4xl md:text-5xl text-navy-deep font-light tracking-tight"
            >
              <>Institutional channels across key corridors</>
            </SplitReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-card border border-border/60 rounded-lg p-8 hover:border-sky/50 transition-colors duration-300">
              <h3 className="font-display text-lg text-navy-deep font-light tracking-tight mb-3">
                BRICS Chamber
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Official chamber alignment to accelerate capital flow pathways across emerging markets.
              </p>
            </article>
            <article className="bg-card border border-border/60 rounded-lg p-8 hover:border-sky/50 transition-colors duration-300">
              <h3 className="font-display text-lg text-navy-deep font-light tracking-tight mb-3">
                UK Department of Trade
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Active corridor support with deputy high commissions for trans-Atlantic transaction pathways.
              </p>
            </article>
            <article className="bg-card border border-border/60 rounded-lg p-8 hover:border-sky/50 transition-colors duration-300">
              <h3 className="font-display text-lg text-navy-deep font-light tracking-tight mb-3">
                Embassy Networks
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Structural transaction pathways across key sovereign business hubs and offshore jurisdictions.
              </p>
            </article>
          </div>
          <div className="mt-8 p-8 border border-border/40 rounded-lg">
            <p className="text-sm text-muted-foreground mb-4">
              <span className="font-medium text-foreground">Key Markets:</span> USA, UAE, UK, France, Switzerland, Saudi Arabia
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-32 border-t border-border/40">
        <div className="container-x">
          <div className="mb-16">
            <span className="eyebrow">Leadership Team</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight"
            >
              <>
                Decades of institutional
                <br />
                <span className="text-gradient-gold">investment banking expertise.</span>
              </>
            </SplitReveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {leadership.map((member, i) => (
              <article key={i} className="border border-border/40 rounded-lg p-8 hover:border-gold/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-lg md:text-xl text-foreground font-light tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gold mt-1 font-medium tracking-[0.1em] uppercase">
                      {member.title}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground text-right">{member.experience}</span>
                </div>
                {member.credentials && (
                  <p className="text-xs text-muted-foreground mb-3">{member.credentials}</p>
                )}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-[0.1em] font-medium mb-1">
                      Background
                    </p>
                    <p className="text-sm text-foreground/85">{member.background}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-[0.1em] font-medium mb-1">
                      Expertise
                    </p>
                    <p className="text-sm text-foreground/85">{member.expertise}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 border-t border-border/40 bg-muted/80">
        <div className="container-x text-center">
          <SplitReveal
            as="h2"
            className="font-display text-3xl md:text-5xl text-foreground font-light tracking-tight"
          >
            <>
              Ready to discuss your
              <br />
              <span className="text-gradient-gold">institutional mandate?</span>
            </>
          </SplitReveal>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Contact our investment banking team to explore capital markets, M&A advisory, structured finance, or sustainability-linked solutions for your transaction.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold text-navy-deep px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
          >
            Contact Investment Banking <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
