import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

interface Faq {
  q: string;
  a: string;
}

export function Faq() {
  const faqs: Faq[] = [
    {
      q: "What is NAMI Group's global footprint?",
      a: "NAMI Group operates active execution desks and partner offices across India, UAE (Dubai), USA (New York), UK, and GIFT IFSC (Gandhinagar).",
    },
    {
      q: "What services does ICASPER Capfin Advisors deliver?",
      a: "ICASPER Capfin Advisors specializes in syndicated loan structures, term lending pathways, infrastructure project finance, and corporate working capital syndication.",
    },
    {
      q: "How does NAMI Group participate in GIFT IFSC?",
      a: "NAMI Group provides end-to-end advisory and operations setup in GIFT City (Gandhinagar) for fund structures, leasing entities, international banking units, and cross-border treasury allocations.",
    },
    {
      q: "What assets does NAMI lease under its Aviation & Maritime vertical?",
      a: "Our Aviation & Maritime desks structure dry and operating leases, sale & leaseback transactions, and vessel acquisitions for airlines and international maritime logistics operators.",
    },
    {
      q: "How can institutions engage NAMI Group?",
      a: "Institutions can contact our direct desks or schedule a formal capital markets briefing via our Contact portal.",
    },
  ];

  return (
    <section className="py-32 bg-background border-y border-border/40">
      <div className="container-x max-w-4xl">
        <Reveal className="text-center mb-16">
          <span className="eyebrow text-sky">FAQ</span>
          <SplitReveal
            as="h2"
            className="mt-6 font-display text-4xl md:text-5xl text-navy-deep font-light tracking-tight"
          >
            <>Frequently Asked Questions.</>
          </SplitReveal>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 0.06}>
              <details className="group rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden hover:border-sky/40">
                <summary className="flex items-center justify-between cursor-pointer rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
                  <span className="font-display text-lg text-navy-deep font-medium group-hover:text-sky transition-colors">
                    {faq.q}
                  </span>
                  <span className="ml-1.5 flex-shrink-0 rounded-full border border-border p-1.5 text-muted-foreground group-open:rotate-180 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground border-t border-border/30 pt-4">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
