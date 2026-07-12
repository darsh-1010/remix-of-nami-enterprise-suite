import {
  Landmark,
  Briefcase,
  LineChart,
  Plane,
  Ship,
  Network,
  TrendingUp,
  HeartPulse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Vertical {
  no: string;
  name: string;
  icon: LucideIcon;
  desc: string;
  tags: string[];
}

const verticals: Vertical[] = [
  {
    no: "01",
    name: "NAMI Investment Banking",
    icon: Landmark,
    desc: "Equity capital raising, M&A advisory, valuation and structured finance.",
    tags: ["ECM", "M&A", "Valuation"],
  },
  {
    no: "02",
    name: "ICASPER Capfin Advisors",
    icon: Briefcase,
    desc: "Loan syndication, project finance, working capital and structured debt.",
    tags: ["Syndication", "Project Finance"],
  },
  {
    no: "03",
    name: "NAMI Bond & Treasury",
    icon: LineChart,
    desc: "G-Secs, SDLs, corporate bonds, treasury advisory and yield strategy.",
    tags: ["Fixed Income", "Treasury"],
  },
  {
    no: "04",
    name: "NAMI Aviation",
    icon: Plane,
    desc: "Aircraft leasing, operating lease, sale & leaseback and fleet finance.",
    tags: ["Leasing", "Aviation"],
  },
  {
    no: "05",
    name: "NAMI Ship",
    icon: Ship,
    desc: "Maritime leasing, vessel finance and cross-border shipping capital.",
    tags: ["Maritime", "Vessel Finance"],
  },
  {
    no: "06",
    name: "KPO & BPO Desk",
    icon: Network,
    desc: "Accounting, audit support, compliance and process automation outsourcing.",
    tags: ["KPO", "Compliance"],
  },
  {
    no: "07",
    name: "iFactor Global",
    icon: TrendingUp,
    desc: "Factoring, invoice discounting, supply chain finance and FX hedging.",
    tags: ["Trade Finance", "FX"],
  },
  {
    no: "08",
    name: "eMark HealthTech",
    icon: HeartPulse,
    desc: "Healthcare finance, cashless treatment, EMI solutions and hospital lending.",
    tags: ["Healthcare", "EMI"],
  },
];

export function Verticals() {
  return (
    <section className="py-32 bg-muted/60 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">Business Ecosystem</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light tracking-tight">
            Eight specialised verticals.
            <br />
            <span className="italic text-gradient-gold">One integrated platform.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {verticals.map((v) => {
            const Icon = v.icon;
            return (
              <article
                key={v.no}
                className="group bg-muted/60 p-8 hover:bg-muted/60 transition-all duration-500 relative"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-xs tracking-[0.3em] text-gold/70">{v.no}</span>
                  <Icon
                    className="h-6 w-6 text-gold/70 group-hover:text-gold transition-colors"
                    strokeWidth={1.2}
                  />
                </div>
                <h3 className="font-display text-xl text-foreground leading-tight mb-3 min-h-[3rem]">
                  {v.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {v.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] tracking-[0.2em] uppercase border border-border/60 px-2 py-1 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 h-px bg-gradient-to-r from-gold/40 to-transparent w-0 group-hover:w-full transition-all duration-700" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
