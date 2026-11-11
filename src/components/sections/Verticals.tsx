import {
  Landmark,
  Briefcase,
  LineChart,
  Plane,
  Ship,
  Network,
  TrendingUp,
  HeartPulse,
  Globe2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

interface Vertical {
  no: string;
  name: string;
  icon: LucideIcon;
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
    icon: Landmark,
    desc: "Equity capital raising, M&A advisory, valuation and structured finance.",
    tags: ["ECM", "M&A", "Valuation"],
    img: "/assets/hero-financial.jpg",
    pos: "center",
  },
  {
    no: "02",
    name: "ICASPER Capfin Advisors",
    icon: Briefcase,
    desc: "Cross-border debt syndication, structured debt and fund raising for global AIFs.",
    tags: ["Syndication", "Structured Debt", "AIF / Fund"],
    img: "/assets/boardroom.jpg",
    pos: "20% 40%",
    href: "https://www.icasper.in",
  },
  {
    no: "03",
    name: "NAMI Bond & Treasury",
    icon: LineChart,
    desc: "G-Secs, SDLs, corporate bonds, treasury advisory and yield strategy.",
    tags: ["Fixed Income", "Treasury"],
    img: "/assets/world-map.jpg",
    pos: "center",
    href: "https://www.anmolfinsec.com",
  },
  {
    no: "04",
    name: "NAMI Aviation",
    icon: Plane,
    desc: "Aircraft finance and lease management, structured lease and aviation advisory.",
    tags: ["Leasing", "Aviation"],
    img: "/assets/aviation.jpg",
    pos: "center",
    href: "https://www.namiaviation.com",
  },
  {
    no: "05",
    name: "NAMI Ship",
    icon: Ship,
    desc: "Ship leasing, vessel finance and global shipping advisory.",
    tags: ["Maritime", "Vessel Finance"],
    img: "/assets/maritime.jpg",
    pos: "center",
    href: "https://www.namiship.in",
  },
  {
    no: "06",
    name: "KPO & BPO Desk",
    icon: Network,
    desc: "KPO/BPO market entry, credit operations outsourcing and process automation.",
    tags: ["KPO", "Compliance"],
    img: "/assets/boardroom.jpg",
    pos: "90% 30%",
  },
  {
    no: "07",
    name: "1Factor Global",
    icon: TrendingUp,
    desc: "Factoring, invoice discounting, supply chain finance and FX hedging.",
    tags: ["Trade Finance", "FX"],
    img: "/assets/maritime.jpg",
    pos: "10% 80%",
  },
  {
    no: "08",
    name: "eMark HealthTech",
    icon: HeartPulse,
    desc: "Healthcare finance, cashless treatment, EMI solutions and hospital lending.",
    tags: ["Healthcare", "EMI"],
    img: "/assets/hero-financial.jpg",
    pos: "80% 50%",
  },
  {
    no: "09",
    name: "1BFI.WORLD",
    icon: Globe2,
    desc: "Global advisory and consulting for GIFT IFSC and NBFC mandates.",
    tags: ["GIFT IFSC Desk", "NBFC Advisory Desk"],
    img: "/assets/world-map.jpg",
    pos: "center",
  },
];

export function Verticals() {
  return (
    <section id="verticals" className="py-32 bg-background relative">
      <div className="container-x">
        <Reveal className="max-w-3xl mb-16">
          <span className="eyebrow text-sky">NAMI FINORBIT</span>
          <SplitReveal
            as="h2"
            className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-navy-deep font-light tracking-tight"
          >
            <>
              Nine specialised verticals.
              <br />
              One integrated platform.
            </>
          </SplitReveal>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {verticals.map((v, i) => {
            const Icon = v.icon;
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
                <div className="relative flex h-full flex-col items-center justify-end p-8 text-center">
                  <span className="absolute top-6 left-6 font-display text-xs tracking-[0.3em] text-gold">
                    {v.no}
                  </span>
                  <Icon className="h-10 w-10 text-gold mb-5" strokeWidth={1.1} />
                  <h3 className="font-display text-xl text-white leading-tight mb-3">{v.name}</h3>
                  <p className="text-sm text-white/80 leading-relaxed min-h-[4.5rem]">{v.desc}</p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
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
