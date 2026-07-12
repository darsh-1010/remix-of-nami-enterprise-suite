import Image from "next/image";

interface Card {
  img: string;
  eyebrow: string;
  title: string;
  items: string[];
}

export function AviationMaritime() {
  const cards: Card[] = [
    {
      img: "/assets/aviation.jpg",
      eyebrow: "NAMI Aviation",
      title: "Aircraft Leasing & Aviation Finance",
      items: [
        "Operating Lease",
        "Sale & Leaseback",
        "Fleet Expansion",
        "Asset Portfolio Structuring",
      ],
    },
    {
      img: "/assets/maritime.jpg",
      eyebrow: "NAMI Ship",
      title: "Maritime Leasing & Vessel Finance",
      items: [
        "Vessel Acquisition Finance",
        "Cross-border Shipping",
        "Charter Structuring",
        "Asset Financing",
      ],
    },
  ];
  return (
    <section className="py-0">
      <div className="grid md:grid-cols-2">
        {cards.map((c) => (
          <article key={c.title} className="relative group overflow-hidden">
            <div className="relative aspect-[4/5] md:aspect-[3/4]">
              <Image
                src={c.img}
                alt={c.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-background/40 to-background/10" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-16">
              <span className="eyebrow">{c.eyebrow}</span>
              <h3 className="mt-4 font-display text-3xl md:text-4xl text-foreground font-light max-w-md leading-tight">
                {c.title}
              </h3>
              <ul className="mt-8 grid grid-cols-2 gap-y-3 gap-x-6 max-w-md">
                {c.items.map((it) => (
                  <li key={it} className="text-sm text-foreground/75 flex items-center gap-2">
                    <span className="h-1 w-1 bg-gold" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
