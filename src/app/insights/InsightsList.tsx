"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Filter, Clock } from "lucide-react";
import { type Article } from "@/lib/articles";
import { searchArticles } from "@/lib/articles";

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

const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Title A-Z", value: "title-asc" },
  { label: "Title Z-A", value: "title-desc" },
  { label: "Read Time", value: "readtime" },
];

export function InsightsList({ initialArticles }: InsightsListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get initial values from URL or defaults
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCat, setSelectedCat] = useState(searchParams.get("category") || "All");
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "newest");
  const [showFilters, setShowFilters] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Update URL when filters change
  const updateURL = useCallback(
    (query: string, category: string, sort: string) => {
      const params = new URLSearchParams();
      if (query) params.set("search", query);
      if (category !== "All") params.set("category", category);
      if (sort !== "newest") params.set("sort", sort);

      const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
      router.replace(newUrl);
    },
    [router, pathname],
  );

  // Clear any pending debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleSearchChange = useCallback(
    (query: string) => {
      setSearchQuery(query);

      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        updateURL(query, selectedCat, sortBy);
      }, 300);
    },
    [selectedCat, sortBy, updateURL],
  );

  const handleCategoryChange = useCallback(
    (category: string) => {
      setSelectedCat(category);
      updateURL(searchQuery, category, sortBy);
    },
    [searchQuery, sortBy, updateURL],
  );

  const handleSortChange = useCallback(
    (sort: string) => {
      setSortBy(sort);
      updateURL(searchQuery, selectedCat, sort);
    },
    [searchQuery, selectedCat, updateURL],
  );

  // Filter by category
  const categoryFiltered = useMemo(() => {
    return selectedCat === "All"
      ? initialArticles
      : initialArticles.filter((a) => a.cat.toLowerCase() === selectedCat.toLowerCase());
  }, [initialArticles, selectedCat]);

  // Apply search
  const searchFiltered = useMemo(
    () => (searchQuery.trim() ? searchArticles(searchQuery, categoryFiltered) : categoryFiltered),
    [searchQuery, categoryFiltered],
  );

  // Apply sorting
  const sortedArticles = useMemo(() => {
    const articles = [...searchFiltered];

    switch (sortBy) {
      case "oldest":
        return articles.reverse();
      case "title-asc":
        return articles.sort((a, b) => a.title.localeCompare(b.title, "en", { numeric: true }));
      case "title-desc":
        return articles.sort((a, b) => b.title.localeCompare(a.title, "en", { numeric: true }));
      case "readtime":
        return articles.sort((a, b) => {
          const aTime = parseInt(a.readTime) || 0;
          const bTime = parseInt(b.readTime) || 0;
          return aTime - bTime;
        });
      case "newest":
      default:
        return articles;
    }
  }, [searchFiltered, sortBy]);

  return (
    <div className="pb-32">
      <div className="container-x">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles by title, author, or keywords..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border/60 rounded bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-colors"
            />
          </div>
        </div>

        {/* Controls Row: Filters and Sort */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => handleCategoryChange(filter)}
                className={`text-[11px] tracking-[0.25em] uppercase px-3 py-2 border cursor-pointer transition-all ${
                  selectedCat === filter
                    ? "border-gold text-gold bg-gold/5"
                    : "border-border/60 text-muted-foreground hover:border-gold/60 hover:text-gold"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="text-[11px] tracking-[0.25em] uppercase px-3 py-2 border border-border/60 rounded bg-card text-foreground cursor-pointer focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-colors"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 text-sm text-muted-foreground">
          {sortedArticles.length} article{sortedArticles.length !== 1 ? "s" : ""} found
          {searchQuery && ` matching "${searchQuery}"`}
          {selectedCat !== "All" && ` in ${selectedCat}`}
        </div>

        {/* Articles Grid */}
        {sortedArticles.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-border/60 rounded">
            <p className="text-muted-foreground">
              No articles found. Try adjusting your filters or search.
            </p>
            <button
              onClick={() => {
                handleSearchChange("");
                handleCategoryChange("All");
                handleSortChange("newest");
              }}
              className="mt-6 text-[11px] tracking-[0.25em] uppercase px-3 py-2 border border-gold text-gold bg-gold/5 cursor-pointer transition-all hover:border-gold/60"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
            {sortedArticles.map((a) => (
              <article
                key={a.slug}
                className="article-card rounded-2xl bg-card border border-border/40 p-8 group hover:bg-muted/30 transition-colors flex flex-col justify-between"
              >
                <Link href={`/insights/${a.slug}`} className="flex flex-col h-full">
                  <div className="flex items-center justify-between text-[10px] tracking-[0.28em] uppercase">
                    <span className="text-gold">{a.cat}</span>
                    <span className="text-muted-foreground">{a.date}</span>
                  </div>
                  <h3 className="mt-8 font-display text-xl md:text-2xl text-foreground font-light leading-snug group-hover:text-gold transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                    {a.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {a.readTime}
                    </span>
                    <span>By {a.author}</span>
                  </div>
                </Link>
                <div className="mt-8 flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read note <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
