import type { Metadata } from "next";
import { InsightsList } from "./InsightsList";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "NAMI Group Insights — Financial Market Research & Commentary",
  description:
    "Stay informed with Next-Gen market intelligence: research on bond markets, corporate treasury duration strategies, GIFT City IFSC regulations, and macro finance commentary.",
  keywords: [
    "NAMI Group Insights",
    "Bond Market Research",
    "GIFT City Regulations",
    "Treasury Strategy",
    "Mid-Market M&A",
    "Capital Corridor Analysis",
    "Aviation Finance Insights",
  ],
  openGraph: {
    title: "NAMI Group Insights — Financial Market Research & Commentary",
    description: "Research, market commentary and capital-markets perspectives.",
  },
};

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
          <InsightsList initialArticles={ARTICLES} />
        </div>
      </section>
    </>
  );
}
