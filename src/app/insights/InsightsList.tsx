"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Article } from "@/lib/articles";

interface InsightsListProps {
  initialArticles: Article[];
}

const FILTERS = [
  "All",
  "Treasury",
  "Investment Banking",
  "GIFT IFSC",
  "Aviation Leasing",
  "Capital Markets",
  "Trade Finance",
];

export function InsightsList({ initialArticles }: InsightsListProps) {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredArticles =
    selectedCat === "All"
      ? initialArticles
      : initialArticles.filter((a) => a.cat.toLowerCase() === selectedCat.toLowerCase());

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {FILTERS.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`text-[11px] tracking-[0.25em] uppercase px-4 py-2 border cursor-pointer transition-all ${
              selectedCat === cat
                ? "border-gold text-gold bg-gold/5"
                : "border-border/60 text-muted-foreground hover:border-gold/60 hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-border/60">
          <p className="text-muted-foreground text-sm">No articles found in this category.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
          {filteredArticles.map((a) => (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              className="bg-card border border-border/40 p-8 group hover:bg-muted/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] tracking-[0.28em] uppercase">
                  <span className="text-gold">{a.cat}</span>
                  <span className="text-muted-foreground">{a.date}</span>
                </div>
                <h3 className="mt-8 font-display text-xl md:text-2xl text-foreground font-light leading-snug group-hover:text-gold transition-colors">
                  {a.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {a.excerpt}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                Read note <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
