import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  Plane,
  Ship,
  Landmark,
  Briefcase,
  HeartPulse,
  LineChart,
  Cpu,
  Shield,
  Globe2,
  Network,
  Sparkles,
  Scale,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "NAMI Group — Building the Next Global Financial Corridor",
  description:
    "Institutional Investment Banking, Treasury, Aviation & Maritime Leasing, Trade Finance and GIFT IFSC advisory across India, UAE, USA, Canada and GIFT IFSC.",
  openGraph: {
    title: "NAMI Group — Building the Next Global Financial Corridor",
    description:
      "A professionally managed corporate ecosystem delivering Investment Banking, Treasury, Cross-Border Capital, Leasing and GIFT IFSC solutions.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <GlobalPresence />
      <Verticals />
      <Industries />
      <WhyChoose />
      <Gift />
      <Treasury />
      <AviationMaritime />
      <Technology />
      <Leadership />
      <Esg />
      <Faq />
      <CTA />
    </>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-financial.jpg"
          alt="Global financial district at dusk"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      </div>

      <div className="container-x relative z-10 pb-24 lg:pb-32 pt-12 w-full">
        <div className="max-w-4xl animate-fade-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold" />
            <span className="eyebrow">Corporate Profile · 2025</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] font-light text-foreground tracking-tight">
            Building the next
            <br />
            <span className="italic font-extralight text-gradient-gold">global financial</span>{" "}
            corridor.
          </h1>

          <p className="mt-10 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed font-light">
            A professionally managed corporate ecosystem delivering Investment Banking, Treasury,
            Cross-Border Capital, Leasing, Technology and GIFT IFSC Solutions.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/businesses"
              className="group inline-flex items-center gap-3 bg-gold text-navy-deep px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
            >
              Explore Our Businesses
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:border-gold hover:text-gold transition-all"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] tracking-[0.32em] uppercase text-muted-foreground">
            <span className="text-gold">●</span>
            <span>India</span>
            <span>·</span>
            <span>UAE</span>
            <span>·</span>
            <span>USA</span>
            <span>·</span>
            <span>Canada</span>
            <span>·</span>
            <span>GIFT IFSC</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-end gap-2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground z-10">
        <span>Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}

/* ───────────────────────── MARQUEE ───────────────────────── */
function Marquee() {
  const items = [
    "INVESTMENT BANKING",
    "TREASURY & BONDS",
    "GIFT IFSC ADVISORY",
    "AVIATION LEASING",
    "MARITIME FINANCE",
    "TRADE FINANCE",
    "HEALTHCARE FINANCING",
    "CORPORATE ADVISORY",
  ];
  return (
    <section className="border-y border-border/40 bg-muted/40 py-6 overflow-hidden">
      <div
        className="flex gap-16 animate-[shimmer_40s_linear_infinite] whitespace-nowrap will-change-transform"
        style={{ animationDuration: "60s" }}
      >
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-16 text-xs tracking-[0.4em] text-muted-foreground"
          >
            {it}
            <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── ABOUT ───────────────────────── */
function About() {
  return (
    <section className="py-32 relative">
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
          <span className="eyebrow">About NAMI Group</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground font-light tracking-tight">
            An integrated financial ecosystem —{" "}
            <span className="italic text-gradient-gold">engineered for institutions.</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed font-light">
            NAMI Group is dedicated to providing premier Investment Banking, Treasury, cross-border
            capital raising and GIFT IFSC solutions — directing institutional wealth frameworks and
            cutting-edge technology deployment pathways across global markets.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-border/40">
            {[
              {
                t: "Professional Management",
                d: "Seasoned banking and capital-markets leadership across regulated jurisdictions.",
              },
              {
                t: "Institutional Advisory",
                d: "Mandates structured to the standards of sovereign and institutional capital.",
              },
              {
                t: "Global Partnerships",
                d: "Distribution and execution rails across India, UAE, USA, Canada and IFSC.",
              },
              {
                t: "Technology Driven",
                d: "Workflow, risk and data infrastructure integrated end-to-end.",
              },
            ].map((b) => (
              <div key={b.t} className="bg-card border border-border/40 p-6">
                <h3 className="font-display text-base text-gold mb-2">{b.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── STATS ───────────────────────── */
function Stats() {
  const stats = [
    { n: "110+", l: "Combined Team Years" },
    { n: "USD 277M+", l: "Funds Mobilized (INR 2500+ Cr)" },
    { n: "135+", l: "Global Lenders Connected" },
    { n: "USD 2.0B+", l: "Combined Deal Advisory Value" },
  ];
  return (
    <section className="border-y border-border/40 bg-muted/50 py-20">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-y-12">
        {stats.map((s, i) => (
          <div key={s.l} className={`px-6 ${i > 0 ? "lg:border-l border-border/60" : ""}`}>
            <div className="font-display text-5xl md:text-6xl font-extralight text-gradient-gold tabular-nums">
              {s.n}
            </div>
            <div className="mt-3 text-xs tracking-[0.28em] uppercase text-muted-foreground">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── GLOBAL PRESENCE ───────────────────────── */
function GlobalPresence() {
  const markets = [
    { name: "India & GIFT IFSC", desc: "Foundational regulatory gateway & HQs" },
    { name: "United States", desc: "North America sovereign capital corridors" },
    { name: "United Kingdom", desc: "UK Dept of Trade & London connectivity" },
    { name: "United Arab Emirates", desc: "Middle East capital structuring hubs" },
    { name: "Europe (FR & CH)", desc: "Offshore wealth and banking access" },
  ];
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow">Global Presence</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light tracking-tight">
              Capital corridors spanning{" "}
              <span className="italic text-gradient-gold">four regions.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-base leading-relaxed">
            A connected platform of regulated entities, banking relationships and execution desks —
            purpose-built to move capital, advisory and structured solutions across jurisdictions.
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/assets/world-map.jpg"
              alt="Global network"
              fill
              className="object-cover opacity-80"
              sizes="100vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border/40">
            {markets.map((m) => (
              <div
                key={m.name}
                className="bg-card border border-border/40 p-6 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-[10px] tracking-[0.28em] uppercase text-gold">Active</span>
                </div>
                <div className="font-display text-foreground text-lg">{m.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── VERTICALS ───────────────────────── */
const verticals = [
  {
    no: "01",
    name: "NAMI Investment Banking",
    icon: Landmark,
    desc: "Equity capital raising, M&A advisory, valuation and structured finance.",
    tags: ["ECM", "M&A", "Valuation"],
  },
  {
    no: "02",
    name: "ICASPER Capfin Advisors",
    icon: Briefcase,
    desc: "Loan syndication, project finance, working capital and structured debt.",
    tags: ["Syndication", "Project Finance"],
  },
  {
    no: "03",
    name: "NAMI Bond & Treasury",
    icon: LineChart,
    desc: "G-Secs, SDLs, corporate bonds, treasury advisory and yield strategy.",
    tags: ["Fixed Income", "Treasury"],
  },
  {
    no: "04",
    name: "NAMI Aviation",
    icon: Plane,
    desc: "Aircraft leasing, operating lease, sale & leaseback and fleet finance.",
    tags: ["Leasing", "Aviation"],
  },
  {
    no: "05",
    name: "NAMI Ship",
    icon: Ship,
    desc: "Maritime leasing, vessel finance and cross-border shipping capital.",
    tags: ["Maritime", "Vessel Finance"],
  },
  {
    no: "06",
    name: "KPO & BPO Desk",
    icon: Network,
    desc: "Accounting, audit support, compliance and process automation outsourcing.",
    tags: ["KPO", "Compliance"],
  },
  {
    no: "07",
    name: "iFactor Global",
    icon: TrendingUp,
    desc: "Factoring, invoice discounting, supply chain finance and FX hedging.",
    tags: ["Trade Finance", "FX"],
  },
  {
    no: "08",
    name: "eMark HealthTech",
    icon: HeartPulse,
    desc: "Healthcare finance, cashless treatment, EMI solutions and hospital lending.",
    tags: ["Healthcare", "EMI"],
  },
];

function Verticals() {
  return (
    <section className="py-32 bg-muted/60 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">Business Ecosystem</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light tracking-tight">
            Eight specialised verticals.
            <br />
            <span className="italic text-gradient-gold">One integrated platform.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {verticals.map((v) => {
            const Icon = v.icon;
            return (
              <article
                key={v.no}
                className="group bg-muted/60 p-8 hover:bg-muted/60 transition-all duration-500 relative"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-xs tracking-[0.3em] text-gold/70">{v.no}</span>
                  <Icon
                    className="h-6 w-6 text-gold/70 group-hover:text-gold transition-colors"
                    strokeWidth={1.2}
                  />
                </div>
                <h3 className="font-display text-xl text-foreground leading-tight mb-3 min-h-[3rem]">
                  {v.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {v.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] tracking-[0.2em] uppercase border border-border/60 px-2 py-1 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 h-px bg-gradient-to-r from-gold/40 to-transparent w-0 group-hover:w-full transition-all duration-700" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── INDUSTRIES ───────────────────────── */
function Industries() {
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
          <div className="lg:col-span-5">
            <span className="eyebrow">Industries Served</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight">
              Capital and advisory for the institutions that{" "}
              <span className="italic text-gradient-gold">build economies.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-px bg-border/40">
            {items.map((it) => (
              <div
                key={it}
                className="bg-card border border-border/40 p-5 text-sm text-foreground/80 tracking-wide hover:text-gold transition-colors flex items-center gap-3"
              >
                <span className="h-1 w-1 bg-gold" />
                {it}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── WHY CHOOSE ───────────────────────── */
function WhyChoose() {
  const reasons = [
    {
      i: Shield,
      t: "Senior-Led Focus",
      d: "Direct operational management from highly experienced directors on every transaction.",
    },
    {
      i: Scale,
      t: "Institutional Grade",
      d: "Impeccable quality controls and structured finance models designed to clear regulatory audits.",
    },
    {
      i: Network,
      t: "Domain Expertise",
      d: "Decades of combined corporate transaction experience with global capital corridors.",
    },
    {
      i: Globe2,
      t: "Global Placement",
      d: "Vast network linking strategic partners across major offshore investment corridors.",
    },
    {
      i: TrendingUp,
      t: "Result Orientation",
      d: "Committed to robust advisory execution, corporate targets, and final deal closing.",
    },
    {
      i: Building2,
      t: "135+ Global Lenders",
      d: "Direct access to Tier-1 banks, sovereign funds, and institutional family offices.",
    },
    {
      i: LineChart,
      t: "285+ Valuations",
      d: "Asset and business valuations prepared, assessed, and backed across regulatory bodies.",
    },
    {
      i: Cpu,
      t: "150+ Blueprints",
      d: "Rigorous compilation of investment structure files and institutional sanction documents.",
    },
  ];
  return (
    <section className="py-32 bg-muted/80 border-y border-border/40">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">Why Choose NAMI</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight">
            A platform designed for{" "}
            <span className="italic text-gradient-gold">institutional trust.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {reasons.map((r) => {
            const Icon = r.i;
            return (
              <div key={r.t} className="bg-muted/80 p-8 group hover:bg-muted/50 transition-all">
                <Icon className="h-7 w-7 text-gold mb-6" strokeWidth={1.2} />
                <h3 className="font-display text-lg text-foreground mb-3">{r.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── GIFT IFSC ───────────────────────── */
function Gift() {
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
        <div className="glass-strong p-10 md:p-16 lg:p-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow">GIFT IFSC Solutions</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight">
                The gateway to{" "}
                <span className="italic text-gradient-gold">India&apos;s global financial</span>{" "}
                jurisdiction.
              </h2>
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
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border/40">
              {items.map((it, i) => (
                <div key={it} className="bg-muted/40 p-6 flex items-center gap-4">
                  <span className="font-display text-xs text-gold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/90 text-sm">{it}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TREASURY ───────────────────────── */
function Treasury() {
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

/* ───────────────────────── AVIATION + MARITIME ───────────────────────── */
function AviationMaritime() {
  const cards = [
    {
      img: "/assets/aviation.jpg",
      eyebrow: "NAMI Aviation",
      title: "Aircraft Leasing & Aviation Finance",
      items: [
        "Operating Lease",
        "Sale & Leaseback",
        "Fleet Expansion",
        "Asset Portfolio Structuring",
      ],
    },
    {
      img: "/assets/maritime.jpg",
      eyebrow: "NAMI Ship",
      title: "Maritime Leasing & Vessel Finance",
      items: [
        "Vessel Acquisition Finance",
        "Cross-border Shipping",
        "Charter Structuring",
        "Asset Financing",
      ],
    },
  ];
  return (
    <section className="py-0">
      <div className="grid md:grid-cols-2">
        {cards.map((c) => (
          <article key={c.title} className="relative group overflow-hidden">
            <div className="relative aspect-[4/5] md:aspect-[3/4]">
              <Image
                src={c.img}
                alt={c.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-background/40 to-background/10" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-16">
              <span className="eyebrow">{c.eyebrow}</span>
              <h3 className="mt-4 font-display text-3xl md:text-4xl text-foreground font-light max-w-md leading-tight">
                {c.title}
              </h3>
              <ul className="mt-8 grid grid-cols-2 gap-y-3 gap-x-6 max-w-md">
                {c.items.map((it) => (
                  <li key={it} className="text-sm text-foreground/75 flex items-center gap-2">
                    <span className="h-1 w-1 bg-gold" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── TECHNOLOGY ───────────────────────── */
function Technology() {
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

/* ───────────────────────── LEADERSHIP ───────────────────────── */
function Leadership() {
  return (
    <section className="py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden relative">
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
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light tracking-tight">
              Dipen U Shah
            </h2>
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
            <div className="mt-10 grid grid-cols-3 gap-px bg-border/40 max-w-md">
              {[
                { v: "25+", l: "Years" },
                { v: "100+", l: "Mandates" },
                { v: "08", l: "Verticals" },
              ].map((s) => (
                <div key={s.l} className="bg-card border border-border/40 p-5">
                  <div className="font-display text-2xl text-gold">{s.v}</div>
                  <div className="mt-1 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── ESG ───────────────────────── */
function Esg() {
  const items = [
    { t: "Corporate Governance", d: "Independent oversight and board-level discipline." },
    { t: "Compliance", d: "Multi-jurisdictional regulatory alignment." },
    { t: "Risk Management", d: "Enterprise risk framework across every mandate." },
    { t: "Ethics", d: "Codified conduct standards for the entire group." },
    { t: "Sustainability", d: "ESG-aware structuring across capital and advisory." },
    { t: "Global Standards", d: "Aligned with international institutional benchmarks." },
  ];
  return (
    <section className="py-32 bg-muted/60 border-y border-border/40">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">ESG & Governance</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight">
            Governance as a <span className="italic text-gradient-gold">first principle.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
          {items.map((it, i) => (
            <div key={it.t} className="bg-muted/60 p-8">
              <span className="font-display text-xs text-gold tabular-nums tracking-[0.28em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl text-foreground">{it.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */
function Faq() {
  const faqs = [
    {
      q: "What is NAMI Group's global footprint?",
      a: "NAMI Group operates active execution desks and partner offices across India, UAE (Dubai), USA (New York), Canada (Toronto), and GIFT IFSC (Gandhinagar).",
    },
    {
      q: "What services does ICASPER Capfin Advisors deliver?",
      a: "ICASPER Capfin Advisors specializes in syndicated loan structures, term lending pathways, infrastructure project finance, and corporate working capital syndication.",
    },
    {
      q: "How does NAMI Group participate in GIFT IFSC?",
      a: "NAMI Group provides end-to-end advisory and operations setup in GIFT City (Gandhinagar) for fund structures, leasing entities, international banking units, and cross-border treasury allocations.",
    },
    {
      q: "What assets does NAMI lease under its Aviation & Maritime vertical?",
      a: "Our Aviation & Maritime desks structure dry and operating leases, sale & leaseback transactions, and vessel acquisitions for airlines and international maritime logistics operators.",
    },
    {
      q: "How can institutions engage NAMI Group?",
      a: "Institutions can contact our direct desks or schedule a formal capital markets briefing via our Contact portal.",
    },
  ];

  return (
    <section className="py-32 bg-muted/30 border-y border-border/40">
      <div className="container-x max-w-4xl">
        <div className="text-center mb-16">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-foreground font-light tracking-tight">
            Frequently Asked <span className="italic text-gradient-gold">Questions.</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group border border-border/60 bg-card p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <span className="font-display text-lg text-foreground font-medium group-hover:text-gold transition-colors">
                  {faq.q}
                </span>
                <span className="ml-1.5 flex-shrink-0 rounded-full border border-border p-1.5 text-muted-foreground group-open:rotate-180 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground border-t border-border/30 pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */
function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="container-x relative">
        <div className="text-center max-w-4xl mx-auto">
          <span className="eyebrow">Engage NAMI</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl text-foreground font-light tracking-tight leading-[1.05]">
            Let&apos;s build the next{" "}
            <span className="italic text-gradient-gold">capital corridor</span> — together.
          </h2>
          <p className="mt-8 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Engage our institutional desks for Investment Banking, Treasury, Leasing, Trade Finance
            or GIFT IFSC mandates.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold text-navy-deep px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
            >
              Schedule a Briefing <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/businesses"
              className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all"
            >
              View All Businesses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
