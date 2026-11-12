import Image from "next/image";

const PROMPT = encodeURIComponent("Summary of NAMI Group");

const TARGETS = [
  { name: "ChatGPT", href: `https://chat.openai.com/?prompt=${PROMPT}`, icon: "openai" },
  { name: "Google AI", href: `https://www.google.com/search?udm=50&q=${PROMPT}`, icon: "google" },
  { name: "Perplexity", href: `https://www.perplexity.ai/search?q=${PROMPT}`, icon: "perplexity" },
  { name: "Claude", href: `https://claude.ai/new?q=${PROMPT}`, icon: "claude" },
] as const;

export function AskAI() {
  return (
    <div className="mt-10">
      <h4 className="text-xs tracking-[0.28em] uppercase text-gold mb-4">
        Ask AI for a summary of NAMI Group
      </h4>
      <div className="flex gap-3">
        {TARGETS.map((t) => (
          <a
            key={t.name}
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Summarise NAMI Group with ${t.name}`}
            title={t.name}
            className="size-11 rounded-lg bg-white flex items-center justify-center transition-transform hover:-translate-y-1"
          >
            <Image src={`/ai/${t.icon}.svg`} alt="" width={22} height={22} />
          </a>
        ))}
      </div>
    </div>
  );
}
