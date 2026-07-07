import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[oklch(0.10_0.03_250)]">
      <div className="container-x py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="relative flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rounded-sm border border-gold/60 rotate-45" />
              <span className="font-display text-gold text-sm font-semibold">N</span>
            </span>
            <span className="font-display tracking-[0.18em] text-platinum">NAMI GROUP</span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
            A professionally managed corporate ecosystem delivering institutional Investment
            Banking, Treasury, cross-border capital and GIFT IFSC solutions across global markets.
          </p>
          <div className="mt-8 flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            <span>India</span><span className="text-gold">·</span>
            <span>UAE</span><span className="text-gold">·</span>
            <span>USA</span><span className="text-gold">·</span>
            <span>Canada</span><span className="text-gold">·</span>
            <span>GIFT IFSC</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.28em] uppercase text-gold mb-5">Verticals</h4>
          <ul className="space-y-3 text-sm text-platinum/80">
            <li><Link href="/businesses" className="hover:text-gold">Investment Banking</Link></li>
            <li><Link href="/businesses" className="hover:text-gold">Bond &amp; Treasury</Link></li>
            <li><Link href="/businesses" className="hover:text-gold">Aviation Leasing</Link></li>
            <li><Link href="/businesses" className="hover:text-gold">Maritime Finance</Link></li>
            <li><Link href="/businesses" className="hover:text-gold">Trade Finance</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.28em] uppercase text-gold mb-5">Company</h4>
          <ul className="space-y-3 text-sm text-platinum/80">
            <li><Link href="/about" className="hover:text-gold">About</Link></li>
            <li><Link href="/about" className="hover:text-gold">Leadership</Link></li>
            <li><Link href="/insights" className="hover:text-gold">Insights</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.28em] uppercase text-gold mb-5">Headquarters</h4>
          <ul className="space-y-3 text-sm text-platinum/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              GIFT IFSC, Gandhinagar, India
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              contact@namigroup.com
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              +91 79 0000 0000
            </li>
            <li className="flex gap-3">
              <Linkedin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              linkedin.com/company/nami-group
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} NAMI Group. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Corporate Profile · 2025</span>
        </div>
      </div>
    </footer>
  );
}
