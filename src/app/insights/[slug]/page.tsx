import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User, Landmark } from "lucide-react";
import { ARTICLES, getRelatedArticles } from "@/lib/articles";
import { SplitReveal } from "@/components/motion/SplitReveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO dynamically based on the current article
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | NAMI Group Insights`,
    description: article.excerpt,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date.split(" · ")[1] || article.date,
      authors: [article.author],
    },
  };
}

// Pre-render static paths at build time
export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

const AUTHOR_BIOS: Record<string, { title: string; bio: string }> = {
  "Dipen U. Shah": {
    title: "Founder Director · CA · CS",
    bio: "Over 18 years of experience with ING, Kotak Mahindra Bank & senior structured finance groups. Expert in capital markets, offshore jurisdictions, and multi-currency fund mobilization.",
  },
  "Dhiren Panchal": {
    title: "Director - Global Banking · CFA",
    bio: "Over 20 years of tier-one banking experience with ICICI Bank, ABN Amro, HSBC, Yes Bank, and DBS Bank. Specializes in global banking networks, cross-border structures, and FEMA compliance.",
  },
  "Shail Shah": {
    title: "Director - M&A & Tax · CA",
    bio: "Over 15 years in regulatory leadership and complex corporate taxation schemes. Specializes in advanced M&A valuations and global corporate structuring frameworks.",
  },
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const authorInfo = AUTHOR_BIOS[article.author] || {
    title: "Director",
    bio: "Member of NAMI Group's senior executive team, leading structured advisory desks.",
  };

  const relatedArticles = getRelatedArticles(article, ARTICLES, 2);

  return (
    <>
      {/* Editorial Header */}
      <section className="pt-40 pb-12 border-b border-border/40">
        <div className="container-x">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-gold transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4.5 w-4.5 transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>

          <span className="eyebrow">{article.cat}</span>

          <SplitReveal
            as="h1"
            className="mt-6 font-display text-3xl md:text-5xl lg:text-6xl text-foreground font-light tracking-tight leading-[1.15] max-w-5xl"
          >
            <>{article.title}</>
          </SplitReveal>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs tracking-wider uppercase text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-3.5 w-3.5 text-gold" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-gold" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-gold" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Article Content */}
            <article className="lg:col-span-8">
              <div className="prose prose-slate max-w-none">
                {article.content.map((block, idx) => {
                  switch (block.type) {
                    case "p":
                      return (
                        <p
                          key={idx}
                          className="text-foreground/90 font-sans leading-relaxed text-base md:text-lg mb-6"
                        >
                          {block.text}
                        </p>
                      );
                    case "h2":
                      return (
                        <h2
                          key={idx}
                          className="font-display text-2xl md:text-3xl text-foreground font-light mt-12 mb-6 tracking-tight"
                        >
                          {block.text}
                        </h2>
                      );
                    case "h3":
                      return (
                        <h3
                          key={idx}
                          className="font-display text-xl md:text-2xl text-foreground font-light mt-8 mb-4 tracking-tight"
                        >
                          {block.text}
                        </h3>
                      );
                    case "blockquote":
                      return (
                        <blockquote
                          key={idx}
                          className="border-l border-gold pl-6 italic text-foreground/85 text-lg md:text-xl font-light leading-relaxed my-10"
                        >
                          &quot;{block.text}&quot;
                        </blockquote>
                      );
                    case "list":
                      return (
                        <ul key={idx} className="list-disc pl-6 mb-6 space-y-3 text-foreground/85">
                          {block.items?.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-base leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </article>

            {/* Sidebar Details */}
            <aside className="lg:col-span-4 space-y-12">
              {/* Author Card */}
              <div className="card-glass border-l-2 border-l-gold">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-sm border border-gold/40 flex items-center justify-center bg-muted/40">
                    <User className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground font-light leading-tight">
                      {article.author}
                    </h4>
                    <span className="text-[10px] tracking-wider uppercase text-gold">
                      {authorInfo.title}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{authorInfo.bio}</p>
              </div>

              {/* Related Articles */}
              <div>
                <h3 className="text-xs tracking-[0.28em] uppercase text-gold mb-6">
                  Related Insights
                </h3>
                <div className="space-y-6">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/insights/${rel.slug}`}
                      className="block group border-b border-border/40 pb-4"
                    >
                      <span className="text-[10px] tracking-wider uppercase text-gold">
                        {rel.cat}
                      </span>
                      <h4 className="font-display text-base text-foreground font-light mt-1.5 leading-snug group-hover:text-gold transition-colors">
                        {rel.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Action Callout */}
              <div className="rounded-2xl bg-muted/40 border border-border/60 p-8 text-center">
                <Landmark className="h-8 w-8 text-gold mx-auto mb-4" strokeWidth={1.2} />
                <h4 className="font-display text-lg text-foreground font-light mb-3">
                  Have a specific mandate?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  Discuss strategic advisory, capital placement, or tax-structured options with NAMI
                  Group&apos;s desks.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy-deep py-3 text-xs tracking-wider uppercase font-medium hover:bg-gold-bright transition-all"
                >
                  Contact the Desk
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
