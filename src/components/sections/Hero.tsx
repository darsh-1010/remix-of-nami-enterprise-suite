import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-financial.jpg"
          alt="Global financial district at dusk"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      </div>

      <div className="container-x relative z-10 pb-24 lg:pb-32 pt-12 w-full">
        <div className="max-w-4xl animate-fade-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold" />
            <span className="eyebrow">Corporate Profile · 2025</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] font-light text-foreground tracking-tight">
            Building the next
            <br />
            <span className="italic font-extralight text-gradient-gold">global financial</span>{" "}
            corridor.
          </h1>

          <p className="mt-10 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed font-light">
            A professionally managed corporate ecosystem delivering Investment Banking, Treasury,
            Cross-Border Capital, Leasing, Technology and GIFT IFSC Solutions.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/businesses"
              className="group inline-flex items-center gap-3 bg-gold text-navy-deep px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
            >
              Explore Our Businesses
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:border-gold hover:text-gold transition-all"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] tracking-[0.32em] uppercase text-muted-foreground">
            <span className="text-gold">●</span>
            <span>India</span>
            <span>·</span>
            <span>UAE</span>
            <span>·</span>
            <span>USA</span>
            <span>·</span>
            <span>Canada</span>
            <span>·</span>
            <span>GIFT IFSC</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-end gap-2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground z-10">
        <span>Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
