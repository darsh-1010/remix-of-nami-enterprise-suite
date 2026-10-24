import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { SectionNav } from "@/components/site/SectionNav";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  CheckCircle2,
  Linkedin,
  Building2,
  Landmark,
  Briefcase,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About NAMI Group — Global Advisory, Treasury & GIFT IFSC Ecosystem",
  description:
    "NAMI Group is a professionally managed corporate ecosystem providing premier Investment Banking, Treasury, cross-border capital raising, and GIFT City IFSC advisory led by Founder CA Dipen U. Shah.",
  keywords: [
    "NAMI Group",
    "Investment Banking",
    "Treasury Advisory",
    "GIFT City IFSC",
    "CA Dipen U Shah",
    "Cross-Border Capital",
    "Structured Finance",
    "Debt Syndication",
    "Aviation Leasing",
    "Maritime Leasing",
  ],
  openGraph: {
    title: "About NAMI Group — Global Advisory, Treasury & GIFT IFSC Ecosystem",
    description:
      "Professionally managed corporate ecosystem across India, UAE, UK, USA, and GIFT City IFSC.",
  },
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

const board = [
  {
    name: "CA Dipen U. Shah",
    role: "Founder Director",
    qualifications: "CA · CS · Advisor",
    linkedin: "https://www.linkedin.com/in/dipen-shah-ca-l-cs-49931033",
    bio: "Founder Director of NAMI Group. Over 18 years of corporate experience across ING, Kotak Mahindra Bank, and senior advisory positions. Deep specialization in capital markets, offshore corporate structures, and institutional fund mobilization.",
    stats: [
      { v: "18+ Yrs", l: "Experience" },
      { v: "Kotak / ING", l: "Senior Banking" },
      { v: "CapDesks", l: "Specialization" },
    ],
    image: "/images/team/dipen-shah.png",
  },
  {
    name: "CA Shail Shah",
    role: "Director — M&A & Tax",
    qualifications: "Chartered Accountant (CA)",
    linkedin: null,
    bio: "Over 15 years of regulatory and transaction execution experience. Shail coordinates NAMI Group's advanced M&A valuations, international taxation schemes, and cross-border corporate restructure frameworks.",
    stats: [
      { v: "15+ Yrs", l: "Experience" },
      { v: "Tax Structuring", l: "Focus Area" },
      { v: "M&A Valuations", l: "Specialization" },
    ],
    image: "/images/team/shail-shah.png",
  },
  {
    name: "Dhiren Panchal",
    role: "Director — Global Banking",
    qualifications: "Chartered Financial Analyst (CFA)",
    linkedin: null,
    bio: "CFA charterholder with 20+ years of institutional banking depth across ICICI Bank, ABN Amro, HSBC, Yes Bank, and DBS Bank. Dhiren coordinates international bank relations, offshore syndications, and FEMA regulatory guidelines.",
    stats: [
      { v: "20+ Yrs", l: "Banking Depth" },
      { v: "HSBC / DBS", l: "Global Track" },
      { v: "FEMA Limits", l: "Specialization" },
    ],
    image: "/images/team/dhiren-panchal.png",
  },
];

const execution = [
  {
    name: "Piyush Akhaja",
    role: "Director — Equity Advisory",
    qualifications: "Equity Placement Lead",
    bio: "Over 15 years of investment banking experience. Piyush leads NAMI's structural modeling, detailed cash-flow projection, DCF valuations, and exit preparations.",
    image: "/images/team/piyush-akhaja.png",
  },
  {
    name: "CA Mahit Puri",
    role: "Director — Valuation",
    qualifications: "Chartered Accountant (CA)",
    bio: "A Chartered Accountant with 14+ years of institutional experience. Mahit oversees NAMI's debt syndication, capital placement operations, and structured finance corridors.",
    image: "/images/team/mahit-puri.png",
  },
  {
    name: "Arpi Akhaja",
    role: "Head — Modeling & MIS",
    qualifications: "Financial Modeling Lead",
    bio: "Over 12 years of corporate financial planning and portfolio analysis experience. Arpi leads NAMI's structural modeling, database validation, and transactional support desks.",
    image: "/images/team/arpi-akhaja.png",
  },
];

const awards = [
  {
    title: "Best Boutique Treasury Advisory",
    org: "Capital Markets Forum · 2025",
    desc: "Recognized for institutional fixed-income duration strategies and SDL portfolio outperformance.",
    icon: Award,
  },
  {
    title: "GIFT City Corridor Builder",
    org: "FinTech & IFSC Association · 2024",
    desc: "Awarded for structuring tax-efficient maritime and aviation operating leases within GIFT City IFSC.",
    icon: BadgeCheck,
  },
  {
    title: "Compliance Excellence Citation",
    org: "Global Regulatory Council · 2024",
    desc: "Honored for maintaining zero-audit deviation across multiple operating licenses and jurisdictions.",
    icon: CheckCircle2,
  },
  {
    title: "Best Infrastructure Debt Syndicate",
    org: "Institutional Finance Awards · 2023",
    desc: "Awarded for syndicating INR 2,500 Cr structured debt pipeline for regional highway concessions.",
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative pt-44 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
        <div className="container-x relative">
          <span className="eyebrow">About</span>
          <SplitReveal
            as="h1"
            className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-foreground font-light tracking-tight leading-[0.98] max-w-5xl"
          >
            <>
              A professionally managed{" "}
              <span className="text-gradient-gold">corporate ecosystem.</span>
            </>
          </SplitReveal>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed font-light">
            NAMI Group is dedicated to providing premier Investment Banking, Treasury, cross-border
            capital raising and GIFT City IFSC solutions — directing institutional wealth frameworks
            and cutting-edge technology deployment pathways across global markets.
          </p>
        </div>
      </section>

      <SectionNav
        sections={[
          { id: "vision-mission", label: "Vision & Mission" },
          { id: "chairman", label: "Chairman" },
          { id: "segments", label: "Target Segments" },
          { id: "sectors", label: "Sector Expertise" },
          { id: "channels", label: "Connectivity" },
          { id: "board", label: "Board" },
          { id: "execution", label: "Execution Team" },
          { id: "accreditation", label: "Accreditation" },
          { id: "philosophy", label: "Philosophy" },
        ]}
      />

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-24 border-y border-border/40 bg-muted/10">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <div>
            <span className="eyebrow">Vision</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-3xl md:text-4xl text-foreground font-light leading-tight"
            >
              <>
                To be the most trusted institutional financial corridor connecting India to the
                world.
              </>
            </SplitReveal>
          </div>
          <div>
            <span className="eyebrow">Mission</span>
            <p className="mt-6 text-foreground/75 text-lg leading-relaxed font-light">
              Deliver institutional-grade Investment Banking, Treasury and Cross-Border Capital
              solutions through a regulated, technology-driven platform — purpose-built for funds,
              corporates, banks and sovereign institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section id="chairman" className="py-32">
        <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden ring-1 ring-gold/20 relative">
              <Image
                src="/images/team/dipen-shah.png"
                alt="CA Dipen U. Shah, Founder Director"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow">Chairman&apos;s Message</span>
            <div className="flex items-center gap-4 mt-6">
              <SplitReveal
                as="h2"
                className="font-display text-4xl md:text-5xl text-foreground font-light tracking-tight"
              >
                <>CA Dipen U. Shah</>
              </SplitReveal>
              <a
                href="https://www.linkedin.com/in/dipen-shah-ca-l-cs-49931033"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-bright transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-2 text-sm tracking-[0.32em] uppercase text-gold font-medium">
              CA · CS · Founder Director
            </div>
            <blockquote className="mt-10 text-xl text-foreground/85 font-light italic leading-relaxed border-l border-gold pl-6">
              &quot;Capital follows trust. Our work at NAMI is to engineer the structures,
              relationships and technology that make institutional trust portable across
              jurisdictions.&quot;
            </blockquote>
            <p className="mt-8 text-muted-foreground leading-relaxed font-light">
              Dipen leads NAMI Group&apos;s strategic direction across multiple business verticals.
              A Chartered Accountant and Company Secretary with deep capital-markets, treasury and
              regulatory expertise, he has structured and advised on mandates spanning equity, debt,
              leasing and cross-border capital.
            </p>
          </div>
        </div>
      </section>

      {/* Target Segments (Whom We Serve) */}
      <section id="segments" className="py-24 border-t border-border/40 bg-muted/10">
        <div className="container-x">
          <div className="mb-16">
            <span className="eyebrow">Target Segments</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight"
            >
              <>
                Strategic partnership for{" "}
                <span className="text-gradient-gold">global capital.</span>
              </>
            </SplitReveal>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {segments.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-card border border-border/60 p-8 md:p-12 hover:border-gold/60 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <Icon className="h-8 w-8 text-gold" strokeWidth={1.2} />
                      <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
                        Segment {idx + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl text-foreground font-light mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm font-medium text-gold mb-6">{s.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-light">
                      {s.desc}
                    </p>
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
                            className="text-[11px] border border-border px-3 py-1 bg-muted/30 text-foreground/80 font-light"
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

      {/* Sector Expertise */}
      <section id="sectors" className="py-24 border-t border-border/40">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-6">
              <span className="eyebrow">Sector Expertise</span>
              <SplitReveal
                as="h2"
                className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight"
              >
                <>
                  Global sector coverage &amp;{" "}
                  <span className="text-gradient-gold">market depths.</span>
                </>
              </SplitReveal>
            </div>
            <p className="lg:col-span-6 text-muted-foreground text-base leading-relaxed font-light">
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
                className="rounded-2xl bg-card border border-border/40 p-8 hover:border-gold/60 transition-colors"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {s.depth}
                </span>
                <h3 className="mt-4 font-display text-2xl text-foreground font-light">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Channels */}
      <section id="channels" className="py-24 border-t border-border/40 bg-muted/10">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow">Connectivity</span>
              <SplitReveal
                as="h2"
                className="mt-6 font-display text-4xl text-foreground font-light tracking-tight"
              >
                <>
                  Global connectivity &amp;{" "}
                  <span className="text-gradient-gold">strategic channels.</span>
                </>
              </SplitReveal>
              <p className="mt-8 text-sm text-muted-foreground leading-relaxed font-light">
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
                <div key={ch.c} className="rounded-2xl bg-card border border-border/40 p-6">
                  <h3 className="font-display text-base text-gold mb-2">{ch.c}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">{ch.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section id="board" className="py-24 border-t border-border/40">
        <div className="container-x">
          <div className="border-b border-border/40 pb-6 mb-16">
            <span className="eyebrow">Governance</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-3xl text-foreground font-light tracking-tight"
            >
              <>
                Executive <span className="text-gradient-gold">Board of Directors</span>
              </>
            </SplitReveal>
          </div>
          <div className="space-y-24">
            {board.map((leader) => (
              <div
                key={leader.name}
                className="grid lg:grid-cols-12 gap-16 items-center border-b border-border/40 pb-20 last:border-0 last:pb-0"
              >
                <div className="lg:col-span-4 relative">
                  <div className="aspect-[4/5] overflow-hidden relative border border-border/60">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-4">
                    <span className="text-xs tracking-[0.3em] text-gold uppercase font-medium">
                      {leader.qualifications}
                    </span>
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-gold-bright transition-colors"
                        aria-label={`${leader.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-4xl text-foreground font-light tracking-tight">
                    {leader.name}
                  </h3>
                  <div className="mt-1 text-sm font-medium text-muted-foreground">
                    {leader.role}
                  </div>

                  <p className="mt-8 text-foreground/80 text-base leading-relaxed font-light">
                    {leader.bio}
                  </p>

                  <div className="mt-10 grid grid-cols-3 gap-px bg-border/40 max-w-lg">
                    {leader.stats.map((s, idx) => (
                      <div key={idx} className="bg-card p-5 border border-border/40">
                        <div className="font-display text-xl md:text-2xl text-gold">{s.v}</div>
                        <div className="mt-1 text-[10px] tracking-wider uppercase text-muted-foreground">
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Execution */}
      <section id="execution" className="py-24 border-t border-border/40 bg-muted/10">
        <div className="container-x">
          <div className="pb-6 mb-16">
            <span className="eyebrow">Execution Team</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-3xl text-foreground font-light tracking-tight"
            >
              <>
                Strategic <span className="text-gradient-gold">Execution Directors</span>
              </>
            </SplitReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {execution.map((leader) => (
              <div
                key={leader.name}
                className="rounded-2xl bg-card border border-border/60 p-8 flex flex-col justify-between hover:border-gold/60 transition-colors"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden relative border border-border/60 mb-6">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="text-[10px] tracking-[0.2em] text-gold uppercase font-medium">
                    {leader.qualifications}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-foreground font-light">
                    {leader.name}
                  </h3>
                  <div className="text-xs text-muted-foreground mt-1 mb-6">{leader.role}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Credentials */}
      <section id="accreditation" className="py-24 border-t border-border/40 bg-background">
        <div className="container-x">
          <div className="pb-6 mb-16">
            <span className="eyebrow text-sky">Accreditation</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-3xl text-navy-deep font-light tracking-tight"
            >
              <>Awards &amp; Recognition</>
            </SplitReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, idx) => {
              const Icon = award.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-card border border-border/60 p-8 hover:border-sky/50 transition-colors duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <Icon className="h-8 w-8 text-sky" strokeWidth={1.2} />
                      <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
                        Credential {idx + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-navy-deep font-light mb-1">
                      {award.title}
                    </h3>
                    <div className="text-[10px] text-sky font-medium uppercase tracking-wider mb-6">
                      {award.org}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed font-light">
                      {award.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Philosophy & CTA */}
      <section
        id="philosophy"
        className="relative py-32 overflow-hidden border-t border-border/40 bg-muted/10"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/boardroom.jpg"
            alt=""
            fill
            className="object-cover opacity-25"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container-x relative text-center max-w-3xl mx-auto">
          <span className="eyebrow">Corporate Philosophy</span>
          <SplitReveal
            as="h2"
            className="mt-6 font-display text-3xl md:text-5xl text-foreground font-light tracking-tight"
          >
            <>
              Pristine compliance. Strategic footprint.{" "}
              <span className="text-gradient-gold">Institutional discipline.</span>
            </>
          </SplitReveal>
          <div className="mt-12">
            <Link
              href="/#briefing"
              className="inline-flex items-center gap-3 rounded-full bg-gold text-ink px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
            >
              Engage NAMI <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
