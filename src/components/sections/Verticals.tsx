import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

interface VerticalLogo {
  src: string;
  width: number;
  height: number;
}

interface Vertical {
  no: string;
  name: string;
  logo: VerticalLogo;
  desc: string;
  tags: string[];
  img: string;
  pos: string;
  href?: string;
}

const verticals: Vertical[] = [
  {
    no: "01",
    name: "NAMI Investment Banking",
    logo: { src: "/logos/nami-ib.webp", width: 2000, height: 447 },
    desc: "Equity & Debt Capital Market, M&A Advisory, Valuations & Structured Finance.",
    tags: ["ECM", "M&A", "Valuation", "Capital Markets"],
    img: "/assets/hero-financial.jpg",
    pos: "center",
  },
  {
    no: "02",
    name: "ICASPER Capfin Advisors",
    logo: { src: "/logos/icasper.webp", width: 1223, height: 260 },
    desc: "Cross-Border Debt Syndication, Structured Debt and Fund Raising for Global AIFs.",
    tags: ["Syndication", "Structured Debt", "AIF / Fund"],
    img: "/assets/boardroom.jpg",
    pos: "20% 40%",
    href: "https://www.icasper.in",
  },
  {
    no: "03",
    name: "NAMI Bond & Treasury",
    logo: { src: "/logos/nami-bonds-treasury.webp", width: 2000, height: 525 },
    desc: "G-Secs, SDLs, Corporate Bonds, Treasury Advisory and Yield Strategy.",
    tags: ["Fixed Income", "Treasury"],
    img: "/assets/world-map.jpg",
    pos: "center",
    href: "https://www.anmolfinsec.com",
  },
  {
    no: "04",
    name: "NAMI Aviation",
    logo: { src: "/logos/nami-ship-aviation.webp", width: 2000, height: 541 },
    desc: "Aviation Finance & Structured Lease, Aviation Advisory.",
    tags: ["Finance & Leasing", "Advisory"],
    img: "/assets/aviation.jpg",
    pos: "center",
    href: "https://www.namiaviation.com",
  },
  {
    no: "05",
    name: "NAMI Ship",
    logo: { src: "/logos/nami-ship-aviation.webp", width: 2000, height: 541 },
    desc: "Ship Leasing, Vessel Finance and Global Shipping Advisory.",
    tags: ["Maritime", "Vessel Finance"],
    img: "/assets/maritime.jpg",
    pos: "center",
    href: "https://www.namiship.in",
  },
  {
    no: "06",
    name: "Global Capacity Center",
    logo: { src: "/logos/nami-group.webp", width: 816, height: 335 },
    desc: "Market Entry & Distributor Search, Credit Operation Outsourcing, Process Automation.",
    tags: ["Market Entry", "Credit", "Automation"],
    img: "/assets/boardroom.jpg",
    pos: "90% 30%",
  },
  {
    no: "07",
    name: "1Factor Global",
    logo: { src: "/logos/1factor.webp", width: 1908, height: 450 },
    desc: "International Trade Finance: Export & Import Finance, Vendor Finance, Invoice Discounting, Global Supply Chain Allied Services.",
    tags: ["Trade Finance", "Domestic Supply Chain Finance", "Supply Chain Services"],
    img: "/assets/maritime.jpg",
    pos: "10% 80%",
  },
  {
    no: "08",
    name: "eMark HealthTech",
    logo: { src: "/logos/emark.png", width: 1648, height: 573 },
    desc: "Healthcare Finance, Cashless Treatment, EMI Solutions and Hospital Lending.",
    tags: ["Healthcare Finance", "EMI"],
    img: "/assets/hero-financial.jpg",
    pos: "80% 50%",
    href: "https://emark.health/",
  },
  {
    no: "09",
    name: "1BFI",
    logo: { src: "/logos/1bfi.webp", width: 2000, height: 624 },
    desc: "Global Banking, Finance & Investments Advisory Desk, GIFT IFSC Desk, Virtual CFO Consulting, NBFC Advisory.",
    tags: ["BFI Sector", "GIFT IFSC", "Virtual CFO", "NBFC"],
    img: "/assets/world-map.jpg",
    pos: "center",
  },
];

export function Verticals() {
  return (
    <section id="verticals" className="py-32 bg-background relative">
      <div className="container-x">
        <Reveal className="max-w-3xl mb-16">
          <span className="eyebrow text-sky block !text-3xl md:!text-4xl lg:!text-5xl !tracking-[0.12em] font-display font-light">
            NAMI FINORBIT
          </span>
          <SplitReveal
            as="h2"
            className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-navy-deep font-light tracking-tight"
          >
            <>
              <span className="bg-gradient-to-r from-[#ff8c1a] via-[#ffb21e] to-[#ffd75e] bg-clip-text text-transparent">
                Nine specialised verticals.
                <br />
                One integrated global platform.
              </span>
            </>
          </SplitReveal>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {verticals.map((v, i) => {
            return (
              <Reveal
                key={v.no}
                delay={(i % 3) * 0.08}
                className="group relative overflow-hidden bg-[#090e1a] min-h-[24rem]"
              >
                <Image
                  src={v.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectPosition: v.pos }}
                  className="object-cover opacity-80 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-[#090e1a]/60 to-[#090e1a]/10" />
                {v.href && (
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${v.name}`}
                    className="absolute inset-0 z-10"
                  />
                )}
                <div className="relative flex h-full flex-col items-center justify-start px-8 pb-8 pt-20 text-center">
                  <span className="absolute top-6 left-6 font-display text-xs tracking-[0.3em] text-gold">
                    {v.no}
                  </span>
                  <Image
                    src={v.logo.src}
                    alt={v.name}
                    width={v.logo.width}
                    height={v.logo.height}
                    className="h-12 w-auto mb-5 object-contain"
                  />
                  <h3 className="font-display text-xl text-white leading-tight mb-3 uppercase">
                    {v.name}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed min-h-[6rem]">{v.desc}</p>
                  <div className="mt-5 min-h-[4rem] flex flex-wrap content-start justify-center gap-2">
                    {v.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-[0.2em] uppercase border border-gold/40 px-2 py-1 text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
