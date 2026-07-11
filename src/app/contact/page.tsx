import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact NAMI Group — Schedule an Institutional Briefing",
  description:
    "Engage NAMI Group's institutional desks across GIFT IFSC, India, UAE, USA and Canada for Investment Banking, Treasury, Leasing and IFSC mandates.",
  openGraph: {
    title: "Contact NAMI Group",
    description: "Schedule an institutional briefing across our global offices.",
  },
};

const offices = [
  { city: "GIFT IFSC", country: "Gandhinagar · India", label: "Headquarters" },
  { city: "Mumbai", country: "India", label: "Capital Markets Desk" },
  { city: "Dubai", country: "United Arab Emirates", label: "Middle East Capital" },
  { city: "New York", country: "United States", label: "North America Desk" },
  { city: "Toronto", country: "Canada", label: "Cross-Border Advisory" },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-44 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
        <div className="container-x relative">
          <span className="eyebrow">Engage NAMI</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-foreground font-light tracking-tight max-w-4xl leading-[1]">
            Schedule an <span className="italic text-gradient-gold">institutional briefing.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground text-lg">
            Submit your enquiry below or reach the relevant desk directly. We respond within one
            business day.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          {/* Client-side contact form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Static sidebar — server component */}
          <aside className="lg:col-span-5">
            <div className="glass p-8 md:p-10">
              <h3 className="text-xs tracking-[0.28em] uppercase text-gold mb-6">Direct</h3>
              <ul className="space-y-5 text-foreground/85">
                <li className="flex gap-4">
                  <Mail className="h-4 w-4 text-gold mt-1 shrink-0" />
                  contact@namigroup.com
                </li>
                <li className="flex gap-4">
                  <Phone className="h-4 w-4 text-gold mt-1 shrink-0" />
                  +91 79 0000 0000
                </li>
                <li className="flex gap-4">
                  <Linkedin className="h-4 w-4 text-gold mt-1 shrink-0" />
                  linkedin.com/company/nami-group
                </li>
                <li className="flex gap-4">
                  <MapPin className="h-4 w-4 text-gold mt-1 shrink-0" />
                  GIFT IFSC, Gandhinagar, India
                </li>
              </ul>
            </div>

            <div className="mt-6 glass p-8 md:p-10">
              <h3 className="text-xs tracking-[0.28em] uppercase text-gold mb-6">Global Offices</h3>
              <ul className="divide-y divide-border/40">
                {offices.map((o) => (
                  <li key={o.city} className="py-4 flex items-center justify-between">
                    <div>
                      <div className="font-display text-foreground">{o.city}</div>
                      <div className="text-xs text-muted-foreground">{o.country}</div>
                    </div>
                    <span className="text-[10px] tracking-[0.28em] uppercase text-gold/70">
                      {o.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
