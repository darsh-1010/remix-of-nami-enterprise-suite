import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Landmark,
  Briefcase,
  LineChart,
  Plane,
  Ship,
  Network,
  TrendingUp,
  HeartPulse,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Businesses — NAMI Group Verticals",
  description:
    "Eight specialised verticals — Investment Banking, Capfin Advisory, Bond & Treasury, Aviation, Maritime, KPO/BPO, Trade Finance and Healthcare Financing.",
  openGraph: {
    title: "NAMI Group — Business Ecosystem",
    description: "Eight specialised verticals. One integrated platform.",
  },
};

const verticals = [
  {
    id: "investment-banking",
    icon: Landmark,
    no: "01",
    name: "NAMI Investment Banking",
    lead: "Equity capital raising, M&A advisory, valuation and structured finance.",
    services: [
      "Equity Capital Raising",
      "M&A Advisory",
      "Financial Modelling",
      "Valuation",
      "Structured Finance",
      "GIFT IFSC Advisory",
    ],
  },
  {
    id: "capfin",
    icon: Briefcase,
    no: "02",
    name: "ICASPER Capfin Advisors",
    lead: "Syndicated structures and term lending pathways.",
    services: [
      "Loan Syndication",
      "Project Finance",
      "Infrastructure Finance",
      "Working Capital",
      "Structured Debt",
      "Banking Relationships",
    ],
  },
  {
    id: "treasury",
    icon: LineChart,
    no: "03",
    name: "NAMI Bond & Treasury",
    lead: "Corporate fixed income and G-Secs allocation.",
    services: [
      "Government Securities",
      "Treasury Bills",
      "Corporate Bonds",
      "SDL",
      "Treasury Advisory",
      "Yield Strategy",
      "Hedging",
      "Fixed Income",
    ],
  },
  {
    id: "aviation",
    icon: Plane,
    no: "04",
    name: "NAMI Aviation",
    lead: "Operating leases & custom aerospace financing.",
    services: [
      "Aircraft Leasing",
      "Operating Lease",
      "Sale & Leaseback",
      "Aviation Finance",
      "Fleet Expansion",
    ],
  },
  {
    id: "ship",
    icon: Ship,
    no: "05",
    name: "NAMI Ship",
    lead: "Maritime leasing and vessel financing across global routes.",
    services: [
      "Maritime Leasing",
      "Vessel Finance",
      "Ship Acquisition",
      "Cross-border Shipping Finance",
    ],
  },
  {
    id: "kpo",
    icon: Network,
    no: "06",
    name: "KPO & BPO Desk",
    lead: "Outsourced finance, audit and compliance services.",
    services: [
      "Accounting",
      "Audit Support",
      "Compliance",
      "Regulatory Reporting",
      "Outsourcing",
      "Process Automation",
    ],
  },
  {
    id: "ifactor",
    icon: TrendingUp,
    no: "07",
    name: "iFactor Global",
    lead: "Trade finance, factoring and supply chain solutions.",
    services: [
      "Factoring",
      "Invoice Discounting",
      "Supply Chain Finance",
      "FX Hedging",
      "Trade Credit Insurance",
    ],
  },
  {
    id: "emark",
    icon: HeartPulse,
    no: "08",
    name: "eMark HealthTech",
    lead: "Specialised healthcare financing platform.",
    services: [
      "Healthcare Finance",
      "Cashless Treatment",
      "EMI Solutions",
      "Hospital Lending",
      "Insurance Settlement",
    ],
  },
];

export default function BusinessesPage() {
  return (
    <>
      <section className="pt-44 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
        <div className="container-x relative">
          <span className="eyebrow">Business Ecosystem</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-foreground font-light tracking-tight leading-[1]">
            Eight specialised verticals.
            <br />
            <span className="italic text-gradient-gold">One integrated platform.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Each vertical operates as a focused, regulated business — connected by shared
            infrastructure, governance and capital relationships across India, UAE, USA, Canada and
            GIFT IFSC.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x flex flex-col">
          {verticals.map((v, i) => {
            const Icon = v.icon;
            return (
              <article
                key={v.id}
                id={v.id}
                className="border-t border-border/60 py-16 grid lg:grid-cols-12 gap-10 group"
              >
                <div className="lg:col-span-2 flex items-start gap-4">
                  <span className="font-display text-xs tracking-[0.3em] text-gold tabular-nums">
                    {v.no}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <Icon className="h-8 w-8 text-gold mb-6" strokeWidth={1.2} />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground font-light tracking-tight">
                    {v.name}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">{v.lead}</p>
                </div>
                <div className="lg:col-span-5">
                  <div className="text-xs tracking-[0.28em] uppercase text-gold mb-5">
                    Capability
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                    {v.services.map((s) => (
                      <li key={s} className="text-sm text-foreground/85 flex items-center gap-3">
                        <span className="h-1 w-1 bg-gold" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                {i === verticals.length - 1 && (
                  <div className="lg:col-span-12 border-b border-border/60 mt-8" />
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-24 border-t border-border/40 bg-muted/80">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-light tracking-tight">
            Discuss a mandate with the relevant{" "}
            <span className="italic text-gradient-gold">institutional desk.</span>
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-gold text-navy-deep px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
          >
            Contact the Desk <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
