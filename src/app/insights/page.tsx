import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights — NAMI Group Research & Market Commentary",
  description:
    "Bond markets, treasury, investment banking, leasing, GIFT IFSC, capital markets and macro updates from NAMI Group.",
  openGraph: {
    title: "NAMI Group Insights",
    description: "Research, market commentary and capital-markets perspective.",
  },
};

const articles = [
  {
    cat: "Treasury",
    date: "Q3 · 2025",
    title: "Duration positioning in a steepening yield curve",
    excerpt:
      "How institutional treasuries are recalibrating G-Sec and SDL allocations in a shifting rate environment.",
  },
  {
    cat: "Investment Banking",
    date: "Q3 · 2025",
    title: "Mid-market M&A momentum across India's industrial corridor",
    excerpt:
      "Strategic consolidation, founder-led exits and cross-border interest are redefining mid-market deal flow.",
  },
  {
    cat: "GIFT IFSC",
    date: "Q2 · 2025",
    title: "Why global fund managers are anchoring vehicles in GIFT City",
    excerpt:
      "Tax efficiency, regulatory clarity and a maturing services ecosystem are accelerating fund migration.",
  },
  {
    cat: "Aviation Leasing",
    date: "Q2 · 2025",
    title: "India's aviation leasing market reaches institutional scale",
    excerpt:
      "Operating-lease structures, IFSC participation and global lessor partnerships are reshaping financing.",
  },
  {
    cat: "Capital Markets",
    date: "Q1 · 2025",
    title: "Corporate bond issuance set to outpace last-year volumes",
    excerpt:
      "Tighter spreads, healthy demand and refinancing pipelines drive a strong primary-market outlook.",
  },
  {
    cat: "Trade Finance",
    date: "Q1 · 2025",
    title: "Factoring and supply-chain finance are quietly scaling in India",
    excerpt:
      "Regulatory enablement and digital infrastructure are unlocking working-capital corridors for exporters.",
  },
];

const filters = [
  "All",
  "Treasury",
  "Investment Banking",
  "GIFT IFSC",
  "Aviation Leasing",
  "Capital Markets",
  "Trade Finance",
];

export default function InsightsPage() {
  return (
    <>
      <section className="pt-44 pb-20">
        <div className="container-x">
          <span className="eyebrow">Insights</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-foreground font-light tracking-tight max-w-4xl leading-[1]">
            Research, market commentary and{" "}
            <span className="italic text-gradient-gold">institutional perspective.</span>
          </h1>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((t, i) => (
              <button
                key={t}
                className={`text-[11px] tracking-[0.25em] uppercase px-4 py-2 border ${
                  i === 0
                    ? "border-gold text-gold"
                    : "border-border/60 text-muted-foreground hover:border-gold/60 hover:text-gold"
                } transition-colors`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
            {articles.map((a) => (
              <article
                key={a.title}
                className="bg-card border border-border/40 p-8 group hover:bg-muted/30 transition-colors flex flex-col"
              >
                <div className="flex items-center justify-between text-[10px] tracking-[0.28em] uppercase">
                  <span className="text-gold">{a.cat}</span>
                  <span className="text-muted-foreground">{a.date}</span>
                </div>
                <h3 className="mt-8 font-display text-xl md:text-2xl text-foreground font-light leading-snug">
                  {a.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                  {a.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read note <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
