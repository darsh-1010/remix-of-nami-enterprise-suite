import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "NAMI Group Businesses — Specialized Financial & Leasing Desks",
  description:
    "Explore NAMI Group's nine specialized business verticals: Investment Banking, ICASPER Capfin, Bond & Treasury, Aviation & Maritime Leasing, Global Capacity Center, and Trade Finance.",
  keywords: [
    "NAMI Investment Banking",
    "ICASPER Capfin Advisors",
    "Bond and Treasury Desk",
    "Aviation Leasing",
    "Ship Leasing",
    "Global Capacity Center",
    "International Factoring",
    "HealthTech Financing",
    "1BFI",
  ],
  openGraph: {
    title: "NAMI Group Businesses — Specialized Financial & Leasing Desks",
    description: "Nine specialized verticals. One integrated corporate advisory platform.",
  },
};

const verticals = [
  {
    id: "investment-banking",
    logo: { src: "/logos/nami-ib.webp", width: 2000, height: 447 },
    href: "/investment-banking",
    bg: "/assets/boardroom.jpg",
    no: "01",
    name: "NAMI Investment Banking",
    lead: "High-impact financial blueprints and transaction advisory models designed to secure major capital placements and execute mergers.",
    services: [
      "USD 2.0B+ Advisory Value",
      "USD 120M+ Equity Placed",
      "USD 157M+ Debt Mobilized",
      "245+ M&A Advisory",
      "45+ LBO & Acquisition Structure",
      "GIFT IFSC Advisory & Exits",
    ],
  },
  {
    id: "capfin",
    logo: { src: "/logos/icasper.webp", width: 915, height: 200 },
    href: "https://www.icasper.in",
    bg: "/assets/hero-financial.jpg",
    no: "02",
    name: "ICASPER Capfin Advisors",
    lead: "Global & Cross Border Lending pipelines & mobilisation of funds across key financial Markets.",
    services: [
      "135+ Global Lenders",
      "USD 180+ MN Mezzanine Structures",
      "External Commercial Borrowings [ECB]",
      "USD 178+ MN Loan Syndication",
      "Project & Infrastructure Capital",
      "Private & Structure Credits",
    ],
  },
  {
    id: "treasury",
    logo: { src: "/logos/nami-bonds-treasury.webp", width: 2000, height: 525 },
    href: "https://www.anmolfinsec.com",
    bg: "/assets/treasury-gold.jpg",
    no: "03",
    name: "NAMI Bond & Treasury",
    lead: "Institutional-grade sovereign fixed income, T-bills, corporate debt stacks, and active yield curve positioning.",
    services: [
      "Government Securities (G-Sec)",
      "State Development Loans (SDL)",
      "Corporate Fixed Income Stacks",
      "Active Duration Positioning",
      "Counter Party on NDS-OM",
      "Fixed Income Investments Strategy",
    ],
  },
  {
    id: "aviation",
    logo: { src: "/logos/nami-ship-aviation.webp", width: 2000, height: 541 },
    href: "https://www.namiaviation.com",
    bg: "/assets/aviation.jpg",
    no: "04",
    name: "NAMI Aviation",
    lead: "Structure Aviation Funding, Operating & Financial Lease structures.",
    services: [
      "GIFT IFSC, IRELAND, SINGAPORE, UAE, USA Markets",
      "Aircraft Acquisition funding",
      "Aircraft lease - Operating & Finance",
      "Dry, Wet, leverage, Damp, Sale & Lease back Structures",
      "Engine Financing",
      "Aviation Advisory",
    ],
  },
  {
    id: "ship",
    logo: { src: "/logos/nami-ship-aviation.webp", width: 2000, height: 541 },
    href: "https://www.namiship.in",
    bg: "/assets/maritime.jpg",
    no: "05",
    name: "NAMI Ship",
    lead: "Customized maritime operating leases, ship acquisitions, and cross-border shipping finance.",
    services: [
      "USD 95+ MN Vessel & Ship Finance",
      "UAE, GIFT IFSC, USA, SINGAPORE, JAPAN Markets",
      "Vessel Operating Leases",
      "IFSC Ship Leasing Stacks",
      "Cross-Border Debt stacks",
      "Maritime Acquisition Capital",
    ],
  },
  {
    id: "kpo",
    logo: { src: "/logos/nami-group.webp", width: 2000, height: 527 },
    href: "/contact",
    bg: "/assets/boardroom.jpg",
    no: "06",
    name: "Global Capacity Center",
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
    logo: { src: "/logos/nami-group.webp", width: 2000, height: 527 },
    href: "/contact",
    bg: "/assets/world-map.jpg",
    no: "07",
    name: "1Factor Global",
    lead: "Global Supply Chain Finance & Allied Services Platform.",
    services: [
      "USD 345+ MN Export Factoring Sanctions",
      "USD 57+ MN Import Finance Sanctions",
      "UAE, USA, SINGAPORE, INDIA Domestic Supply Chain Finance",
      "100+ Global Supply Chain Lenders, across 12+ Countries",
      "250+ Clients Onboarded",
      "160 Countries Coverage",
    ],
  },
  {
    id: "emark",
    logo: { src: "/logos/emark.png", width: 1648, height: 573 },
    href: "https://emark.health/",
    bg: "/assets/healthcare-corridor-dark.jpg",
    no: "08",
    name: "eMark HealthTech",
    lead: "Specialized healthcare financing solutions, clinical equipment leasing, and digital billing pipelines.",
    services: [
      "Cashless Finance",
      "300+ Hospitals Covered",
      "Digital Stack Claim Processing",
      "2200+ Surgeries Financed",
      "7+ Locations",
      "In-house Doctors, TPA & NBFC",
    ],
  },
  {
    id: "1bfi",
    logo: { src: "/logos/1bfi.webp", width: 2000, height: 507 },
    href: "/contact",
    bg: "/assets/world-map.jpg",
    no: "09",
    name: "1BFI",
    lead: "Focusing Global Banking, Finance & Investments Advisory & Consulting arm.",
    services: ["GIFT IFSC Advisory Desk", "NBFC Advisory Desk", "VCFO Desk", "BFI Club"],
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
          <span className="eyebrow">NAMI Business Segments</span>
          <SplitReveal
            as="h1"
            className="mt-6 font-display text-5xl md:text-7xl text-foreground font-light tracking-tight leading-[1]"
          >
            <>
              Nine specialised verticals.
              <br />
              <span className="text-gradient-gold">One integrated global platform.</span>
            </>
          </SplitReveal>
          <p className="mt-8 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Each vertical operates as a focused, regulated business — connected by shared
            infrastructure, governance and capital relationships across INDIA, UAE, USA and UK.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x flex flex-col">
          {verticals.map((v, i) => {
            return (
              <article
                key={v.id}
                id={v.id}
                className="relative overflow-hidden py-16 px-6 lg:px-10 grid lg:grid-cols-12 gap-10 group bg-cover bg-center"
                style={{ backgroundImage: `url(${v.bg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
                <div className="hairline absolute top-0 left-0 right-0 z-10" />
                <div className="relative lg:col-span-2 flex items-start gap-4">
                  <span className="font-display text-xs tracking-[0.3em] text-gold tabular-nums">
                    {v.no}
                  </span>
                </div>
                <div className="relative lg:col-span-5">
                  <div className="mb-6">
                    <Image
                      src={v.logo.src}
                      alt={v.name}
                      width={v.logo.width}
                      height={v.logo.height}
                      className="h-20 md:h-24 w-auto"
                    />
                  </div>
                  <h2 className="sr-only">{v.name}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">{v.lead}</p>
                </div>
                <div className="relative lg:col-span-5">
                  <div className="text-xs tracking-[0.28em] uppercase text-gold mb-5">
                    Capability
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                    {v.services.map((s) => (
                      <li key={s} className="text-sm text-foreground/85 flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-gold" />
                        <span className="min-w-0">{s}</span>
                      </li>
                    ))}
                  </ul>
                  {(() => {
                    const external = v.href.startsWith("http");
                    return (
                      <Link
                        href={v.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group/btn mt-8 inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-xs tracking-[0.2em] uppercase text-gold transition-all duration-300 hover:scale-105 hover:border-gold hover:bg-gold hover:text-ink"
                      >
                        Explore more
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>
                    );
                  })()}
                </div>
                {i === verticals.length - 1 && (
                  <div className="hairline lg:col-span-12 relative z-10 mt-8" />
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-24 border-t border-border/40 bg-background">
        <div className="container-x text-center">
          <SplitReveal
            as="h2"
            className="font-display text-3xl md:text-5xl text-navy-deep font-light tracking-tight"
          >
            <>Discuss a mandate with the relevant institutional desk.</>
          </SplitReveal>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold text-ink px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
          >
            Contact the Desk <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
