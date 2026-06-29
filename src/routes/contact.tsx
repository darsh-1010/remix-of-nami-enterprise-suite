import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NAMI Group — Schedule an Institutional Briefing" },
      { name: "description", content: "Engage NAMI Group's institutional desks across GIFT IFSC, India, UAE, USA and Canada for Investment Banking, Treasury, Leasing and IFSC mandates." },
      { property: "og:title", content: "Contact NAMI Group" },
      { property: "og:description", content: "Schedule an institutional briefing across our global offices." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const offices = [
    { city: "GIFT IFSC", country: "Gandhinagar · India", label: "Headquarters" },
    { city: "Mumbai", country: "India", label: "Capital Markets Desk" },
    { city: "Dubai", country: "United Arab Emirates", label: "Middle East Capital" },
    { city: "New York", country: "United States", label: "North America Desk" },
    { city: "Toronto", country: "Canada", label: "Cross-Border Advisory" },
  ];
  return (
    <>
      <section className="pt-44 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="container-x relative">
          <span className="eyebrow">Engage NAMI</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-platinum font-light tracking-tight max-w-4xl leading-[1]">
            Schedule an <span className="italic text-gradient-gold">institutional briefing.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-platinum/70 text-lg">
            Submit your enquiry below or reach the relevant desk directly. We respond within one business day.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass-strong p-8 md:p-12"
            >
              <h2 className="font-display text-2xl text-platinum mb-8">Enquiry</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full name" required name="name" />
                <Field label="Organisation" name="org" />
                <Field label="Email" type="email" required name="email" />
                <Field label="Phone" name="phone" />
                <div className="sm:col-span-2">
                  <label className="text-[11px] tracking-[0.28em] uppercase text-platinum/70">Area of interest</label>
                  <select className="mt-3 w-full bg-transparent border border-white/15 px-4 py-3 text-platinum focus:border-gold outline-none">
                    {["Investment Banking", "Treasury & Bonds", "Aviation Leasing", "Maritime Finance", "GIFT IFSC", "Trade Finance", "Healthcare Finance", "Other"].map(o => <option key={o} className="bg-navy-deep">{o}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[11px] tracking-[0.28em] uppercase text-platinum/70">Message</label>
                  <textarea rows={5} className="mt-3 w-full bg-transparent border border-white/15 px-4 py-3 text-platinum focus:border-gold outline-none resize-none" />
                </div>
              </div>
              <button type="submit" className="mt-10 inline-flex items-center gap-3 bg-gold text-navy-deep px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all">
                {sent ? "Received — we'll be in touch" : "Send Enquiry"} <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <aside className="lg:col-span-5">
            <div className="glass p-8 md:p-10">
              <h3 className="text-xs tracking-[0.28em] uppercase text-gold mb-6">Direct</h3>
              <ul className="space-y-5 text-platinum/85">
                <li className="flex gap-4"><Mail className="h-4 w-4 text-gold mt-1 shrink-0" /> contact@namigroup.com</li>
                <li className="flex gap-4"><Phone className="h-4 w-4 text-gold mt-1 shrink-0" /> +91 79 0000 0000</li>
                <li className="flex gap-4"><Linkedin className="h-4 w-4 text-gold mt-1 shrink-0" /> linkedin.com/company/nami-group</li>
                <li className="flex gap-4"><MapPin className="h-4 w-4 text-gold mt-1 shrink-0" /> GIFT IFSC, Gandhinagar, India</li>
              </ul>
            </div>

            <div className="mt-6 glass p-8 md:p-10">
              <h3 className="text-xs tracking-[0.28em] uppercase text-gold mb-6">Global Offices</h3>
              <ul className="divide-y divide-white/5">
                {offices.map((o) => (
                  <li key={o.city} className="py-4 flex items-center justify-between">
                    <div>
                      <div className="font-display text-platinum">{o.city}</div>
                      <div className="text-xs text-platinum/55">{o.country}</div>
                    </div>
                    <span className="text-[10px] tracking-[0.28em] uppercase text-gold/70">{o.label}</span>
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

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[11px] tracking-[0.28em] uppercase text-platinum/70">{label}{required && <span className="text-gold ml-1">*</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full bg-transparent border border-white/15 px-4 py-3 text-platinum focus:border-gold outline-none transition-colors"
      />
    </div>
  );
}