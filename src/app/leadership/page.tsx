"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Award, BadgeCheck, CheckCircle2 } from "lucide-react";

const leadership = [
  {
    name: "CA Dipen U Shah",
    role: "Founder & Chairman",
    qualifications: "CA · CS · Advisor",
    bio: "Dipen leads NAMI Group's strategic direction across eight business verticals. A Chartered Accountant and Company Secretary with deep capital-markets, treasury and regulatory expertise, he has structured and advised on mandates spanning equity, debt, leasing and cross-border capital corridors. Under his guidance, NAMI has positioned itself as the primary corridor connecting GIFT City to international financial jurisdictions.",
    stats: [
      { v: "25+", l: "Years Experience" },
      { v: "100+", l: "Mandates Handled" },
      { v: "08", l: "Verticals Orchestrated" },
    ],
    image: "/assets/chairman.jpg",
  },
  {
    name: "Dr. Sarah Jenkins",
    role: "Managing Director — Capital Markets",
    qualifications: "PhD (Economics) — Wharton",
    bio: "Sarah leads our Cross-Border Advisory desk. With 18 years of investment banking experience across New York, London, and Mumbai, she specializes in M&A syndication and private placements for high-growth tech and infrastructure groups.",
    stats: [
      { v: "$4B+", l: "Capital Raised" },
      { v: "50+", l: "M&A Closures" },
      { v: "New York", l: "Desk Lead" },
    ],
    image: "/assets/boardroom.jpg", // reuse courtroom/boardroom image
  },
  {
    name: "Amitabh Roy",
    role: "Head — Fixed Income & Treasury",
    qualifications: "Ex-Executive Director, PSU Bank",
    bio: "Amitabh has over three decades of institutional treasury management experience. He directs NAMI's yield strategy, G-Sec duration allocations, and corporate bond secondary placements for primary treasuries.",
    stats: [
      { v: "30+", l: "Years in Banking" },
      { v: "12%", l: "Avg Portfolio Yield" },
      { v: "GIFT IFSC", l: "Desk Lead" },
    ],
    image: "/assets/hero-financial.jpg", // reuse existing assets
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
