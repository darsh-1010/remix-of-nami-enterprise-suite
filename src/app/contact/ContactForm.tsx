"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full bg-transparent border border-border px-4 py-3 text-foreground focus:border-gold outline-none transition-colors"
      />
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="glass-strong p-8 md:p-12"
    >
      <h2 className="font-display text-2xl text-foreground mb-8">Enquiry</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Full name" required name="name" />
        <Field label="Organisation" name="org" />
        <Field label="Email" type="email" required name="email" />
        <Field label="Phone" name="phone" />
        <div className="sm:col-span-2">
          <label className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
            Area of interest
          </label>
          <select className="mt-3 w-full bg-transparent border border-border px-4 py-3 text-foreground focus:border-gold outline-none">
            {[
              "Investment Banking",
              "Treasury & Bonds",
              "Aviation Leasing",
              "Maritime Finance",
              "GIFT IFSC",
              "Trade Finance",
              "Healthcare Finance",
              "Other",
            ].map((o) => (
              <option key={o} className="bg-card border border-border/40">
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
            Message
          </label>
          <textarea
            rows={5}
            className="mt-3 w-full bg-transparent border border-border px-4 py-3 text-foreground focus:border-gold outline-none resize-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-10 inline-flex items-center gap-3 bg-gold text-navy-deep px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
      >
        {sent ? "Received — we'll be in touch" : "Send Enquiry"}{" "}
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </form>
  );
}
