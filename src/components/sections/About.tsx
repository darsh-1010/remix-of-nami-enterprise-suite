import Image from "next/image";
import { SplitReveal } from "@/components/motion/SplitReveal";

export function About() {
  return (
    <section className="py-24 relative">
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
          <span className="eyebrow">About Us</span>
          <SplitReveal
            as="h2"
            className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground font-light tracking-tight"
          >
            <>
              An integrated financial ecosystem —{" "}
              <span className="text-gradient-gold">engineered for institutions.</span>
            </>
          </SplitReveal>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed font-light">
            NAMI Group is dedicated to providing premier Investment Banking, Treasury, cross-border
            capital raising and GIFT IFSC solutions — directing institutional wealth frameworks and
            cutting-edge technology deployment pathways across global markets.
          </p>
        </div>
      </div>
    </section>
  );
}
