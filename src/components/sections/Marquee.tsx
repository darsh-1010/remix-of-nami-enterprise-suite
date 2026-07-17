export function Marquee() {
  const items = [
    "INVESTMENT BANKING",
    "TREASURY & BONDS",
    "GIFT IFSC ADVISORY",
    "AVIATION LEASING",
    "MARITIME FINANCE",
    "TRADE FINANCE",
    "HEALTHCARE FINANCING",
    "CORPORATE ADVISORY",
  ];
  return (
    <section className="border-y border-border/40 bg-muted/40 py-6 overflow-hidden">
      <div
        className="flex gap-16 animate-[ticker_40s_linear_infinite] whitespace-nowrap will-change-transform hover:[animation-play-state:paused]"
      >
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-16 text-xs tracking-[0.4em] text-muted-foreground"
          >
            {it}
            <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
