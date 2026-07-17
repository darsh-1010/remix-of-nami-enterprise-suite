"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/businesses", label: "Businesses" },
  { to: "/investment-banking", label: "Investment Banking" },
  { to: "/careers", label: "Careers" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > lastY && y > 160);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll, close on Escape, and return focus to the trigger when the
  // mobile menu closes.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [open]);

  const headerClass =
    mounted && scrolled
      ? "bg-background/85 border-b border-border/40 backdrop-blur-xl"
      : "bg-transparent";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${headerClass} ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
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

        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-gold/90 px-2 py-1.5">
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
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[12px] tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${
                  isActive
                    ? "bg-background text-navy-deep font-semibold"
                    : "text-background/90 hover:bg-background hover:text-navy-deep"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#briefing"
            className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase text-background hover:bg-navy transition-all"
          >
            Schedule Briefing
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            onClick={() => setOpen(true)}
            className="rounded-full bg-gold/90 text-navy-deep p-2.5"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-background lg:hidden flex flex-col"
        >
          <div className="container-x flex items-center justify-between h-20 border-b border-border/40">
            <span className="font-display tracking-[0.2em] text-foreground">NAMI GROUP</span>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full bg-gold/90 text-navy-deep p-2.5"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-x flex flex-col gap-6 pt-10">
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
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-2xl font-display tracking-tight hover:text-gold ${
                    isActive ? "text-gold" : "text-foreground"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="container-x mt-auto pb-10">
            <Link
              href="/#briefing"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-full rounded-full bg-navy-deep px-5 py-3.5 text-sm tracking-[0.2em] uppercase text-background"
            >
              Schedule Briefing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
