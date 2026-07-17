import type { Metadata } from "next";
import { Shield, Globe2, Network } from "lucide-react";
import { CareersForm } from "./CareersForm";
import { SplitReveal } from "@/components/motion/SplitReveal";

export const metadata: Metadata = {
  title: "Careers at NAMI Group — Join Our Capital Advisory Desks",
  description:
    "Explore career opportunities in Investment Banking, Corporate Treasury, structured trade finance, and GIFT City IFSC advisory at NAMI Group.",
  keywords: [
    "NAMI Group Careers",
    "Finance Jobs Gandhinagar",
    "Investment Banking Analyst",
    "Treasury Operations Jobs",
    "GIFT City IFSC Careers",
    "Financial Analyst Openings",
  ],
  openGraph: {
    title: "Careers at NAMI Group — Join Our Capital Advisory Desks",
    description: "Build the next global financial corridor. Join our institutional teams.",
  },
};

const benefits = [
  {
    icon: Shield,
    title: "Regulatory Alignment",
    desc: "Work within a pristine compliance environment across multiple sovereign jurisdictions.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Collaborate across our execution corridors spanning India, UAE, USA, and Canada.",
  },
  {
    icon: Network,
    title: "Professional Scope",
    desc: "Execute structured debt, equity, and asset leasing mandates for tier-one institutions.",
  },
];

const jobs = [
  {
    title: "Associate — Investment Banking",
    dept: "M&A and ECM Desk",
    loc: "Mumbai / GIFT City",
    desc: "Lead financial modelling, valuation mandates, and deal structuring for mid-market corporate exits and equity capital raising.",
  },
  {
    title: "Analyst — Fixed Income & Treasury",
    dept: "Treasury & Bond Desk",
    loc: "GIFT IFSC",
    desc: "Manage yield strategy execution, duration positioning, and secondary market trading in government securities and corporate debt.",
  },
  {
    title: "Officer — Compliance & Operations",
    dept: "IFSCA Regulated Entity",
    loc: "GIFT IFSC",
    desc: "Ensure multi-jurisdictional reporting, tax filing compliance, and fund audit liaison under IFSCA frameworks.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="pt-44 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
        <div className="container-x relative">
          <span className="eyebrow">Careers</span>
          <SplitReveal
            as="h1"
            className="mt-6 font-display text-5xl md:text-7xl text-foreground font-light tracking-tight max-w-4xl leading-[1]"
          >
            <>
              Join the <span className="text-gradient-gold">corridor of trust.</span>
            </>
          </SplitReveal>
          <p className="mt-8 max-w-2xl text-muted-foreground text-lg">
            NAMI Group is built on professional integrity, pristine compliance, and strategic
            footprints. We recruit professionals who seek to lead in capital markets, treasury
            advisory, leasing platforms, and GIFT City operations.
          </p>
        </div>
      </section>

      <section className="py-24 border-y border-border/40 bg-muted/20">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-10">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="rounded-2xl bg-card border border-border/40 p-8">
                  <Icon className="h-8 w-8 text-gold mb-6" strokeWidth={1.2} />
                  <h3 className="font-display text-xl text-foreground mb-3">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          {/* Jobs List */}
          <div className="lg:col-span-7">
            <SplitReveal
              as="h2"
              className="font-display text-3xl text-navy-deep font-light mb-8"
            >
              <>Open Opportunities</>
            </SplitReveal>
            <div className="space-y-6">
              {jobs.map((job, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/60 bg-card p-8 hover:border-sky/50 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs tracking-wider uppercase text-sky">
                    <span>{job.dept}</span>
                    <span className="text-muted-foreground">{job.loc}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-navy-deep font-light">
                    {job.title}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-5">
            <CareersForm />
          </div>
        </div>
      </section>
    </>
  );
}
