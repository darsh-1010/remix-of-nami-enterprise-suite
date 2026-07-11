"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Award, BadgeCheck, CheckCircle2 } from "lucide-react";

const leadership = [
  {
    name: "CA Dipen U. Shah",
    role: "Founder Director",
    qualifications: "CA · CS · Advisor",
    bio: "Founder Director of NAMI Group. Over 18 years of corporate experience across ING, Kotak Mahindra Bank, and senior advisory positions. Deep specialization in capital markets, offshore corporate structures, and institutional fund mobilization.",
    stats: [
      { v: "18+ Yrs", l: "Experience" },
      { v: "Kotak / ING", l: "Senior Banking" },
      { v: "CapDesks", l: "Specialization" },
    ],
    image: "/assets/chairman.jpg",
  },
  {
    name: "CA Shail Shah",
    role: "Director — M&A & Tax",
    qualifications: "Chartered Accountant (CA)",
    bio: "Over 15 years of regulatory and transaction execution experience. Shail coordinates NAMI Group's advanced M&A valuations, international taxation schemes, and cross-border corporate restructure frameworks.",
    stats: [
      { v: "15+ Yrs", l: "Experience" },
      { v: "Tax Structuring", l: "Focus Area" },
      { v: "M&A Valuations", l: "Specialization" },
    ],
    image: "/assets/boardroom.jpg",
  },
  {
    name: "Dhiren Panchal",
    role: "Director — Global Banking",
    qualifications: "Chartered Financial Analyst (CFA)",
    bio: "CFA charterholder with 20+ years of institutional banking depth across ICICI Bank, ABN Amro, HSBC, Yes Bank, and DBS Bank. Dhiren coordinates international bank relations, offshore syndications, and FEMA regulatory guidelines.",
    stats: [
      { v: "20+ Yrs", l: "Banking Depth" },
      { v: "HSBC / DBS", l: "Global Track" },
      { v: "FEMA Limits", l: "Specialization" },
    ],
    image: "/assets/hero-financial.jpg",
  },
  {
    name: "Piyush Akhaja",
    role: "Director — Equity Advisory",
    qualifications: "Director — Equity Advisory",
    bio: "Over 15 years of investment banking experience. Piyush leads NAMI's structural modeling, detailed cash-flow projection, DCF valuations, and exit preparations.",
    stats: [
      { v: "15+ Yrs", l: "Experience" },
      { v: "Equity Models", l: "Focus Area" },
      { v: "DCF Valuations", l: "Specialization" },
    ],
    image: "/assets/boardroom.jpg",
  },
  {
    name: "CA Mahit Puri",
    role: "Director — Valuation",
    qualifications: "Chartered Accountant (CA)",
    bio: "A Chartered Accountant with 14+ years of institutional experience. Mahit oversees NAMI's debt syndication, capital placement operations, and structured finance corridors.",
    stats: [
      { v: "14+ Yrs", l: "Valuations Experience" },
      { v: "Syndication", l: "Focus Area" },
      { v: "Offshore Flows", l: "Specialization" },
    ],
    image: "/assets/hero-financial.jpg",
  },
  {
    name: "Arpi Akhaja",
    role: "Head — Modeling & MIS",
    qualifications: "Financial Modeling Lead",
    bio: "Over 12 years of corporate financial planning and portfolio analysis experience. Arpi leads NAMI's structural modeling, database validation, and transactional support desks.",
    stats: [
      { v: "12+ Yrs", l: "Experience" },
      { v: "MIS Desks", l: "Focus Area" },
      { v: "Validation", l: "Specialization" },
    ],
    image: "/assets/chairman.jpg",
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

export default function LeadershipAwardsPage() {
  const [activeTab, setActiveTab] = useState<"team" | "awards">("team");

  return (
    <>
      <section className="pt-44 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
        <div className="container-x relative">
          <span className="eyebrow">Governance & Excellence</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-foreground font-light tracking-tight max-w-4xl leading-[1]">
            Our leadership and <span className="italic text-gradient-gold">credentials.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground text-lg">
            A corporate culture anchored on deep professional qualifications, regulated structures,
            and a proven track record of successful transactional mandates.
          </p>
        </div>
      </section>

      {/* Tabs Controller */}
      <section className="pb-32">
        <div className="container-x">
          <div className="flex border-b border-border/60 mb-16 gap-8">
            <button
              onClick={() => setActiveTab("team")}
              className={`pb-4 text-sm tracking-[0.25em] uppercase font-medium transition-all ${
                activeTab === "team"
                  ? "border-b-2 border-gold text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Leadership &amp; Bios
            </button>
            <button
              onClick={() => setActiveTab("awards")}
              className={`pb-4 text-sm tracking-[0.25em] uppercase font-medium transition-all ${
                activeTab === "awards"
                  ? "border-b-2 border-gold text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Awards &amp; Recognition
            </button>
          </div>

          {/* Tab Content: Leadership & Bios */}
          {activeTab === "team" && (
            <div className="space-y-24">
              {leadership.map((leader, i) => (
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
                    <span className="text-xs tracking-[0.3em] text-gold uppercase">
                      {leader.qualifications}
                    </span>
                    <h2 className="mt-3 font-display text-4xl text-foreground font-light tracking-tight">
                      {leader.name}
                    </h2>
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
          )}

          {/* Tab Content: Awards & Credentials */}
          {activeTab === "awards" && (
            <div className="grid md:grid-cols-2 gap-8">
              {awards.map((award, idx) => {
                const Icon = award.icon;
                return (
                  <div
                    key={idx}
                    className="bg-card border border-border/60 p-8 md:p-12 hover:border-gold/60 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <Icon className="h-8 w-8 text-gold" strokeWidth={1.2} />
                      <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
                        Credential {idx + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-foreground font-light mb-1">
                      {award.title}
                    </h3>
                    <div className="text-xs text-gold font-medium uppercase tracking-wider mb-6">
                      {award.org}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{award.desc}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 border-t border-border/40 bg-muted/20">
        <div className="container-x text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-light tracking-tight">
            NAMI is governed by strict multi-jurisdictional{" "}
            <span className="italic text-gradient-gold">corporate standards.</span>
          </h2>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold text-navy-deep px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
            >
              Verify Credentials <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
