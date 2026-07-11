"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function CareersForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="glass-strong p-8 md:p-10">
      <h3 className="font-display text-2xl text-foreground mb-6">Submit Interest</h3>
      {sent ? (
        <div className="border border-gold/40 p-6 text-center">
          <h4 className="font-display text-lg text-gold mb-2">Thank you</h4>
          <p className="text-sm text-muted-foreground">
            Your interest has been received. Our HR desk will review your details and reach out.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-6"
        >
          <div>
            <label className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
              Full Name *
            </label>
            <input
              type="text"
              required
              className="mt-2 w-full bg-transparent border border-border px-4 py-3 text-foreground focus:border-gold outline-none transition-colors"
            />
          </div>
          <div>
            <label className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
              Email Address *
            </label>
            <input
              type="email"
              required
              className="mt-2 w-full bg-transparent border border-border px-4 py-3 text-foreground focus:border-gold outline-none transition-colors"
            />
          </div>
          <div>
            <label className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
              Area of Expertise *
            </label>
            <select
              required
              className="mt-2 w-full bg-card border border-border px-4 py-3 text-foreground focus:border-gold outline-none"
            >
              <option value="">Select a vertical...</option>
              <option value="ib">Investment Banking</option>
              <option value="treasury">Treasury & Bonds</option>
              <option value="leasing">Aviation & Maritime Leasing</option>
              <option value="gift">GIFT IFSC Compliance</option>
              <option value="tech">FinTech & Outsourcing</option>
            </select>
          </div>
          <div>
            <label className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
              Resume File *
            </label>
            <input
              type="file"
              required
              className="mt-2 w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-semibold file:bg-gold file:text-navy-deep hover:file:bg-gold-bright file:cursor-pointer cursor-pointer border border-border p-2"
            />
          </div>
          <div>
            <label className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
              Cover Note
            </label>
            <textarea
              rows={4}
              className="mt-2 w-full bg-transparent border border-border px-4 py-3 text-foreground focus:border-gold outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 bg-gold text-navy-deep py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all"
          >
            Submit Application <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
