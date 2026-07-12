import Image from "next/image";

export function About() {
  return (
    <section className="py-32 relative">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/assets/boardroom.jpg"
              alt="Executive boardroom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden md:block w-48 h-48 border border-gold/40" />
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow">About NAMI Group</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground font-light tracking-tight">
            An integrated financial ecosystem —{" "}
            <span className="italic text-gradient-gold">engineered for institutions.</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed font-light">
            NAMI Group is dedicated to providing premier Investment Banking, Treasury, cross-border
            capital raising and GIFT IFSC solutions — directing institutional wealth frameworks and
            cutting-edge technology deployment pathways across global markets.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-border/40">
            {[
              {
                t: "Professional Management",
                d: "Seasoned banking and capital-markets leadership across regulated jurisdictions.",
              },
              {
                t: "Institutional Advisory",
                d: "Mandates structured to the standards of sovereign and institutional capital.",
              },
              {
                t: "Global Partnerships",
                d: "Distribution and execution rails across India, UAE, USA, Canada and IFSC.",
              },
              {
                t: "Technology Driven",
                d: "Workflow, risk and data infrastructure integrated end-to-end.",
              },
            ].map((b) => (
              <div key={b.t} className="bg-card border border-border/40 p-6">
                <h3 className="font-display text-base text-gold mb-2">{b.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
