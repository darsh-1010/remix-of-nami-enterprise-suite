import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-muted/50">
      <div className="container-x py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="relative flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rounded-sm border border-gold/60 rotate-45" />
              <span className="font-display text-gold text-sm font-semibold">N</span>
            </span>
            <span className="font-display tracking-[0.18em] text-foreground">NAMI GROUP</span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
            A professionally managed corporate ecosystem delivering institutional Investment
            Banking, Treasury, cross-border capital and GIFT IFSC solutions across global markets.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">
            <span>India</span>
            <span className="text-gold">·</span>
            <span>UAE</span>
            <span className="text-gold">·</span>
            <span>USA</span>
            <span className="text-gold">·</span>
            <span>Canada</span>
            <span className="text-gold">·</span>
            <span>GIFT IFSC</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.28em] uppercase text-gold mb-5">Verticals</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>
              <Link href="/businesses" className="hover:text-gold transition-colors">
                Investment Banking
              </Link>
            </li>
            <li>
              <Link href="/businesses" className="hover:text-gold transition-colors">
                Bond &amp; Treasury
              </Link>
            </li>
            <li>
              <Link href="/businesses" className="hover:text-gold transition-colors">
                Aviation Leasing
              </Link>
            </li>
            <li>
              <Link href="/businesses" className="hover:text-gold transition-colors">
                Maritime Finance
              </Link>
            </li>
            <li>
              <Link href="/businesses" className="hover:text-gold transition-colors">
                Trade Finance
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.28em] uppercase text-gold mb-5">Company</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>
              <Link href="/about" className="hover:text-gold transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/who-we-serve" className="hover:text-gold transition-colors">
                Who We Serve
              </Link>
            </li>
            <li>
              <Link href="/leadership" className="hover:text-gold transition-colors">
                Leadership &amp; Awards
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-gold transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-gold transition-colors">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.28em] uppercase text-gold mb-5">Headquarters</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
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
            <li className="flex gap-3 items-center">
              <Linkedin className="h-4 w-4 text-gold shrink-0" />
              <a
                href="https://linkedin.com/company/nami-group"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Instagram className="h-4 w-4 text-gold shrink-0" />
              <a
                href="https://instagram.com/nami.group"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} NAMI Group. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Corporate Profile · 2025</span>
        </div>
      </div>
    </footer>
  );
}
