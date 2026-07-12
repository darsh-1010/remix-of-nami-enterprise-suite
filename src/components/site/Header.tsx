"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/businesses", label: "Businesses" },
  { to: "/careers", label: "Careers" },
  { to: "/insights", label: "Insights" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 border-b border-border/40 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-sm border border-gold/60 rotate-45" />
            <span className="font-display text-gold text-sm font-semibold tracking-widest">N</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-[0.18em] text-foreground">
              NAMI
            </span>
            <span className="text-[10px] tracking-[0.32em] text-muted-foreground mt-1">GROUP</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {nav.map((n) => {
            const isActive = pathname
              ? n.to === "/"
                ? pathname === "/"
                : pathname.startsWith(n.to)
              : false;
            return (
              <Link
                key={n.to}
                href={n.to}
                className={`text-[12px] tracking-[0.15em] uppercase font-medium transition-colors ${
                  isActive ? "text-gold font-semibold" : "text-foreground/80 hover:text-gold"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#briefing"
          className="hidden lg:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase border border-gold/40 px-4 py-2 text-gold hover:bg-gold hover:text-navy-deep transition-all"
        >
          Schedule Briefing
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-foreground p-2"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden flex flex-col">
          <div className="container-x flex items-center justify-between h-20 border-b border-border/40">
            <span className="font-display tracking-[0.2em] text-foreground">NAMI GROUP</span>
            <button
              onClick={() => setOpen(false)}
              className="text-foreground p-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container-x flex flex-col gap-6 pt-10">
            {nav.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="text-2xl font-display tracking-tight text-foreground hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
