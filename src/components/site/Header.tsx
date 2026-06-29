import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/businesses", label: "Businesses" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[oklch(0.10_0.03_250/0.85)] backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-sm border border-gold/60 rotate-45" />
            <span className="font-display text-gold text-sm font-semibold tracking-widest">N</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-[0.18em] text-platinum">NAMI</span>
            <span className="text-[10px] tracking-[0.32em] text-muted-foreground mt-1">GROUP</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[13px] tracking-[0.18em] uppercase text-platinum/80 hover:text-gold transition-colors font-medium"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase border border-gold/40 px-5 py-2.5 text-gold hover:bg-gold hover:text-navy-deep transition-all"
        >
          Schedule Briefing
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-platinum p-2"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-navy-deep lg:hidden flex flex-col">
          <div className="container-x flex items-center justify-between h-20">
            <span className="font-display tracking-[0.2em] text-platinum">NAMI GROUP</span>
            <button onClick={() => setOpen(false)} className="text-platinum p-2" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container-x flex flex-col gap-6 pt-10">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-2xl font-display tracking-tight text-platinum hover:text-gold"
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