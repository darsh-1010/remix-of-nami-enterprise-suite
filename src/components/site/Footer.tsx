import Image from "next/image";
import { AskAI } from "./AskAI";
import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-muted/50">
      <div className="container-x py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Image
            src="/logo.png"
            alt="NAMI Group"
            width={737}
            height={408}
            className="h-14 w-auto rounded-md bg-white px-2 py-1"
          />
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
            <span>UK</span>
            <span className="text-gold">·</span>
            <span>China</span>
          </div>
          <AskAI />
        </div>

        <div>
          <h4 className="text-xs tracking-[0.28em] uppercase text-gold mb-5">Verticals</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>
              <Link
                href="/businesses#investment-banking"
                className="hover:text-gold transition-colors"
              >
                NAMI Investment Banking
              </Link>
            </li>
            <li>
              <Link href="/businesses#capfin" className="hover:text-gold transition-colors">
                ICASPER Capfin Advisors
              </Link>
            </li>
            <li>
              <Link href="/businesses#treasury" className="hover:text-gold transition-colors">
                NAMI Bond &amp; Treasury
              </Link>
            </li>
            <li>
              <Link href="/businesses#aviation" className="hover:text-gold transition-colors">
                NAMI Aviation
              </Link>
            </li>
            <li>
              <Link href="/businesses#ship" className="hover:text-gold transition-colors">
                NAMI Ship
              </Link>
            </li>
            <li>
              <Link href="/businesses#kpo" className="hover:text-gold transition-colors">
                KPO &amp; BPO Desk
              </Link>
            </li>
            <li>
              <Link href="/businesses#ifactor" className="hover:text-gold transition-colors">
                1Factor Global
              </Link>
            </li>
            <li>
              <Link href="/businesses#emark" className="hover:text-gold transition-colors">
                eMark HealthTech
              </Link>
            </li>
            <li>
              <Link href="/businesses#1bfi" className="hover:text-gold transition-colors">
                1BFI.WORLD
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
              <a href="mailto:info@namigroup.in" className="hover:text-gold transition-colors">
                info@namigroup.in
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="tel:+919725053938" className="hover:text-gold transition-colors">
                  +91-97250 53938
                </a>
                <a href="tel:+971585743938" className="hover:text-gold transition-colors">
                  +971 58 57 4 3938
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Linkedin className="h-4 w-4 text-gold shrink-0" />
              <a
                href="https://www.linkedin.com/company/nami-investment-banking/"
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
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-gold transition-colors">
              Terms of Use
            </Link>
            <span className="tracking-[0.2em] uppercase">Corporate Profile · 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
