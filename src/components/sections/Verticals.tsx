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
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

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
    <section id="verticals" className="py-32 bg-background relative">
      <div className="container-x">
        <Reveal className="max-w-3xl mb-16">
          <span className="eyebrow text-sky">Business Ecosystem</span>
          <SplitReveal
            as="h2"
            className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-navy-deep font-light tracking-tight"
          >
            <>
              Eight specialised verticals.
              <br />
              One integrated platform.
            </>
          </SplitReveal>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {verticals.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal
                key={v.no}
                delay={(i % 4) * 0.08}
                className="group bg-sky rounded-2xl p-8 hover:bg-sky-bright transition-all duration-500 relative"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-xs tracking-[0.3em] text-white/80">
                    {v.no}
                  </span>
                  <Icon
                    className="h-6 w-6 text-white/80 group-hover:text-white transition-colors"
                    strokeWidth={1.2}
                  />
                </div>
                <h3 className="font-display text-xl text-white leading-tight mb-3 min-h-[3rem]">
                  {v.name}
                </h3>
                <p className="text-sm text-white/85 leading-relaxed">{v.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {v.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] tracking-[0.2em] uppercase border border-white/30 px-2 py-1 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 h-px bg-gradient-to-r from-white/40 to-transparent w-0 group-hover:w-full transition-all duration-700" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
