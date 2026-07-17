import type { Metadata } from "next";
import Link from "next/link";
import { SplitReveal } from "@/components/motion/SplitReveal";
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
  title: "NAMI Group Businesses — Specialized Financial & Leasing Desks",
  description:
    "Explore NAMI Group's eight specialized business verticals: Investment Banking, ICASPER Capfin, Bond & Treasury, Aviation & Maritime Leasing, KPO/BPO, and Trade Finance.",
  keywords: [
    "NAMI Investment Banking",
    "ICASPER Capfin Advisors",
    "Bond and Treasury Desk",
    "Aviation Leasing",
    "Ship Leasing",
    "Financial KPO Support",
    "International Factoring",
    "HealthTech Financing",
  ],
  openGraph: {
    title: "NAMI Group Businesses — Specialized Financial & Leasing Desks",
    description: "Eight specialized verticals. One integrated corporate advisory platform.",
  },
};

const verticals = [
  {
    id: "investment-banking",
    icon: Landmark,
    no: "01",
    name: "NAMI Investment Banking",
    lead: "High-impact financial blueprints and transaction advisory models designed to secure major capital placements and execute mergers.",
    services: [
      "USD 2.0B+ Advisory Value",
      "USD 120M+ Equity Placed",
      "USD 157M+ Debt Mobilized",
      "M&A Advisory (245+ Deals)",
      "45+ LBOs Structured",
      "GIFT IFSC Advisory & Exits",
    ],
  },
  {
    id: "capfin",
    icon: Briefcase,
    no: "02",
    name: "ICASPER Capfin Advisors",
    lead: "Term lending pipelines and corporate syndicated debt mobilized across key credit paths.",
    services: [
      "Project Finance Stack (USD 85M+)",
      "Loan Syndication Models",
      "135+ Global Lenders Network",
      "Infrastructure Capital",
      "Working Capital Lines",
      "Structured Credit Stack",
    ],
  },
  {
    id: "treasury",
    icon: LineChart,
    no: "03",
    name: "NAMI Bond & Treasury",
    lead: "Institutional-grade sovereign fixed income, T-bills, corporate debt stacks, and active yield curve positioning.",
    services: [
      "Government Securities (G-Sec)",
      "State Development Loans (SDL)",
      "Corporate Fixed Income Stacks",
      "Active Duration Positioning",
      "Yield Optimization Advisory",
      "18+ Active Hedging Frameworks",
    ],
  },
  {
    id: "aviation",
    icon: Plane,
    no: "04",
    name: "NAMI Aviation",
    lead: "Operating leases and customized aerospace funding frameworks structured out of GIFT City IFSC.",
    services: [
      "Aircraft Operating Leases",
      "GIFT IFSC Tax Structuring",
      "Sale & Leaseback Models",
      "Mezzanine Fleet Financing",
      "Lessor Corridor Management",
    ],
  },
  {
    id: "ship",
    icon: Ship,
    no: "05",
    name: "NAMI Ship",
    lead: "Customized maritime operating leases, ship acquisitions, and cross-border shipping finance.",
    services: [
      "Vessel Operating Leases",
      "IFSC Ship Leasing Stacks",
      "Cross-Border Debt stacks",
      "Maritime Acquisition Capital",
    ],
  },
  {
    id: "kpo",
    icon: Network,
    no: "06",
    name: "KPO & BPO Desk",
    lead: "Institutional-grade financial valuation modeling, validation reports, investor memorandum packs, and diligence rooms.",
    services: [
      "DCF & Comp Valuations (285+ Done)",
      "Investor Memo Compilation",
      "Diligence Data Rooms Setup",
      "FEMA Compliance & Filings",
      "Regulatory Reporting Files",
      "Process Automation Desks",
    ],
  },
  {
    id: "ifactor",
    icon: TrendingUp,
    no: "07",
    name: "iFactor Global",
    lead: "Trade finance, international factoring, invoice discounting, and cross-border currency hedging.",
    services: [
      "International Factoring",
      "Supply-Chain Invoice Discounting",
      "FX & Currency Swap Modeling",
      "Trade Credit Insurances",
      "Active Hedging Frameworks",
    ],
  },
  {
    id: "emark",
    icon: HeartPulse,
    no: "08",
    name: "eMark HealthTech",
    lead: "Specialized healthcare financing solutions, clinical equipment leasing, and digital billing pipelines.",
    services: [
      "Hospital Equipment Leasing",
      "Medical Diagnostic Financing",
      "Digital Cashless Billing Platforms",
      "Clinical Network Capital",
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
          <SplitReveal
            as="h1"
            className="mt-6 font-display text-5xl md:text-7xl text-foreground font-light tracking-tight leading-[1]"
          >
            <>
              Eight specialised verticals.
              <br />
              <span className="text-gradient-gold">One integrated platform.</span>
            </>
          </SplitReveal>
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
          <SplitReveal
            as="h2"
            className="font-display text-3xl md:text-5xl text-foreground font-light tracking-tight"
          >
            <>
              Discuss a mandate with the relevant{" "}
              <span className="text-gradient-gold">institutional desk.</span>
            </>
          </SplitReveal>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold text-navy-deep px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
          >
            Contact the Desk <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
