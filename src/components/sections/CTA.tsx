import { ContactForm } from "@/app/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

export function CTA() {
  return (
    <section
      id="briefing"
      className="py-32 relative overflow-hidden scroll-mt-20 border-t border-border/40"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Engage NAMI</span>
            <SplitReveal
              as="h2"
              className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light tracking-tight leading-[1.1]"
            >
              <>
                Let&apos;s build the next{" "}
                <span className="text-gradient-gold">capital corridor</span> — together.
              </>
            </SplitReveal>
            <p className="mt-8 text-muted-foreground text-base leading-relaxed">
              Schedule an institutional briefing with our client relationships desk for Investment
              Banking, Treasury, Aviation &amp; Maritime Leasing, or GIFT City IFSC advisory.
            </p>
            <div className="mt-8 space-y-6 text-sm text-foreground/80">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Direct Desk
                </span>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="mailto:ib@namigroup.in"
                    className="text-gold font-medium hover:underline"
                  >
                    ib@namigroup.in
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nami-investment-banking/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs font-medium hover:underline flex items-center gap-1"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Hotlines
                </span>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919725053938" className="hover:text-gold transition-colors">
                    +91-97250 53938 (India)
                  </a>
                  <a href="tel:+971585743938" className="hover:text-gold transition-colors">
                    +971 58 57 4 3938 (UAE)
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal
            delay={0.1}
            className="lg:col-span-7 rounded-2xl bg-card border border-border/60 p-8 md:p-12"
          >
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
