import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import boardroomImg from "@/assets/boardroom.jpg";
import chairmanImg from "@/assets/chairman.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NAMI Group — Institutional Financial Ecosystem" },
      { name: "description", content: "NAMI Group is an integrated financial ecosystem delivering Investment Banking, Treasury, Cross-Border Capital and GIFT IFSC solutions, led by Chairman Dipen U Shah (CA, CS)." },
      { property: "og:title", content: "About NAMI Group" },
      { property: "og:description", content: "Professionally managed corporate ecosystem across India, UAE, USA, Canada and GIFT IFSC." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="container-x relative">
          <span className="eyebrow">About</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-platinum font-light tracking-tight leading-[0.98] max-w-5xl">
            A professionally managed <span className="italic text-gradient-gold">corporate ecosystem.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-platinum/70 leading-relaxed">
            NAMI Group is dedicated to providing premier Investment Banking, Treasury, cross-border capital raising
            and GIFT IFSC solutions — directing institutional wealth frameworks and cutting-edge technology
            deployment pathways across global markets.
          </p>
        </div>
      </section>

      <section className="py-24 border-y border-white/5">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <div>
            <span className="eyebrow">Vision</span>
            <h2 className="mt-6 font-display text-3xl md:text-4xl text-platinum font-light leading-tight">
              To be the most trusted institutional financial corridor connecting India to the world.
            </h2>
          </div>
          <div>
            <span className="eyebrow">Mission</span>
            <p className="mt-6 text-platinum/75 text-lg leading-relaxed">
              Deliver institutional-grade Investment Banking, Treasury and Cross-Border Capital solutions through a
              regulated, technology-driven platform — purpose-built for funds, corporates, banks and sovereign
              institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden ring-1 ring-gold/20">
              <img src={chairmanImg} alt="Dipen U Shah, Chairman" className="h-full w-full object-cover" loading="lazy" width={900} height={1100} />
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow">Chairman's Message</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-platinum font-light tracking-tight">Dipen U Shah</h2>
            <div className="mt-2 text-sm tracking-[0.32em] uppercase text-gold">CA · CS · Chairman</div>
            <blockquote className="mt-10 text-xl text-platinum/85 font-light italic leading-relaxed border-l border-gold pl-6">
              "Capital follows trust. Our work at NAMI is to engineer the structures, relationships and technology
              that make institutional trust portable across jurisdictions."
            </blockquote>
            <p className="mt-8 text-platinum/65 leading-relaxed">
              Dipen leads NAMI Group's strategic direction across eight business verticals. A Chartered Accountant
              and Company Secretary with deep capital-markets, treasury and regulatory expertise, he has structured
              and advised on mandates spanning equity, debt, leasing and cross-border capital.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0">
          <img src={boardroomImg} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" width={1600} height={1104} />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="container-x relative text-center max-w-3xl mx-auto">
          <span className="eyebrow">Corporate Philosophy</span>
          <h2 className="mt-6 font-display text-3xl md:text-5xl text-platinum font-light tracking-tight">
            Pristine compliance. Strategic footprint. <span className="italic text-gradient-gold">Institutional discipline.</span>
          </h2>
          <div className="mt-12">
            <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-navy-deep px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-bright transition-all">
              Engage NAMI <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}