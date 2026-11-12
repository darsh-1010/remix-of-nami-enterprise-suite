import { Reveal } from "@/components/motion/Reveal";

const PROMPT = encodeURIComponent("Summary of NAMI Group");

// Monogram tiles; swap for official logos in /public if desired.
const TARGETS = [
  {
    name: "ChatGPT",
    href: `https://chat.openai.com/?prompt=${PROMPT}`,
    mark: "GPT",
    color: "#10a37f",
  },
  {
    name: "Google AI",
    href: `https://www.google.com/search?udm=50&q=${PROMPT}`,
    mark: "G",
    color: "#4285f4",
  },
  {
    name: "Perplexity",
    href: `https://www.perplexity.ai/search?q=${PROMPT}`,
    mark: "P",
    color: "#20808d",
  },
  { name: "Claude", href: `https://claude.ai/new?q=${PROMPT}`, mark: "C", color: "#d97757" },
] as const;

export function AskAI() {
  return (
    <section className="py-16 border-t border-border/40">
      <div className="container-x">
        <Reveal className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <h2 className="font-display text-2xl md:text-3xl text-foreground font-light tracking-tight">
            Ask AI for a summary of <span className="text-gradient-gold">NAMI Group</span>
          </h2>
          <div className="flex gap-3">
            {TARGETS.map((t) => (
              <a
                key={t.name}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Summarise NAMI Group with ${t.name}`}
                title={t.name}
                style={{ color: t.color }}
                className="size-14 rounded-xl bg-card border border-border/60 flex items-center justify-center text-sm font-bold transition-transform hover:-translate-y-1 hover:border-gold/60"
              >
                {t.mark}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
