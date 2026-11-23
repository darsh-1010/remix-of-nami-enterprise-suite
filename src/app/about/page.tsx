import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { SectionNav } from "@/components/site/SectionNav";
import { ArrowUpRight } from "lucide-react";

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

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/boardroom.jpg"
            alt="Corporate boardroom"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background dark:from-black/55 dark:via-black/75 dark:to-black/95" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
        </div>
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
          { id: "channels", label: "Connectivity" },
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
                To Create a Single Global Financial Corridor for Capital, Finance, Investments &amp;
                Advisory with Future Technology.
              </>
            </SplitReveal>
          </div>
          <div>
            <span className="eyebrow">Mission</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-3xl md:text-4xl text-foreground font-light leading-tight"
            >
              <>
                Deliver institutional-grade Investment Banking, Treasury and Cross-Border Capital
                solutions through a regulated &amp; technology.
              </>
            </SplitReveal>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section id="chairman" className="py-32 bg-background">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <Reveal className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden relative rounded-2xl">
                <Image
                  src="/images/team/dipen-shah.png"
                  alt="Dipen U Shah, Chairman"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-sky/20" />
              </div>
              <div className="absolute top-6 -left-6 hidden md:flex flex-col gap-2">
                <span className="h-12 w-px bg-sky" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-sky rotate-180 [writing-mode:vertical-rl]">
                  Chairman
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <span className="eyebrow text-sky">Leadership</span>
              <SplitReveal
                as="h2"
                className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-navy-deep font-light tracking-tight"
              >
                <>Dipen U Shah</>
              </SplitReveal>
              <div className="mt-3 text-sm tracking-[0.32em] uppercase text-sky">
                CA · CS · Chairman
              </div>
              <blockquote className="mt-10 text-xl md:text-2xl text-navy-deep/85 font-light italic leading-relaxed rounded-xl bg-card border border-border/40 p-6 md:p-8">
                &quot;We are building an institutional platform that combines the trust of
                traditional finance with the precision of modern technology — a corridor for global
                capital, advisory and execution.&quot;
              </blockquote>
              <div className="mt-8 inline-block">
                <Image
                  src="/images/experience-logos.png"
                  alt="Experience: ING, KC Mehta & Co LLP, Kotak Mahindra Bank"
                  width={438}
                  height={150}
                  className="h-auto w-full max-w-sm"
                />
              </div>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl">
                {[
                  { v: "CA", l: "Chartered Accountant" },
                  { v: "CS", l: "Company Secretary" },
                  { v: "20+", l: "Years of Global Experience" },
                  { v: "5+", l: "Jurisdiction BFI & Capital Market Exposure" },
                  { v: "4+", l: "Techno-Intelligent Regulatory Advisory & Consulting" },
                ].map((s, i) => (
                  <Reveal
                    key={s.l}
                    delay={0.2 + i * 0.08}
                    className="rounded-xl bg-card border border-border/40 p-5"
                  >
                    <div className="font-display text-2xl text-sky">{s.v}</div>
                    <div className="mt-1 text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                      {s.l}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
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
                  c: "BRICS CCI",
                  d: "Cross Border Trades & Investment between BRICS Members Nations.",
                },
                {
                  c: "UK DIT",
                  d: "Active UK-INDIA Corridor for Business, Trades, Finance, supporting British High Commissions.",
                },
                {
                  c: "Embassy Network",
                  d: "Engagement with 9+ Embassies for Cross Border Investments & Funds.",
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
