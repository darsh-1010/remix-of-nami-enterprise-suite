import type { Metadata } from "next";
import Image from "next/image";
import { CareersForm } from "./CareersForm";
import { SplitReveal } from "@/components/motion/SplitReveal";

export const metadata: Metadata = {
  title: "Careers at NAMI Group — Apply Now",
  description: "Apply to NAMI Group by submitting your resume and the role you're interested in.",
};

export default function CareersPage() {
  return (
    <section className="pt-44 pb-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-financial.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background dark:from-black/55 dark:via-black/75 dark:to-black/95" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      </div>
      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">Careers</span>
          <SplitReveal
            as="h1"
            className="mt-6 font-display text-5xl md:text-6xl text-foreground font-light tracking-tight leading-[1]"
          >
            <>
              Join the <span className="text-gradient-gold">corridor of trust.</span>
            </>
          </SplitReveal>
          <p className="mt-8 text-muted-foreground text-lg">
            Tell us the role you&apos;re interested in and attach your resume — we&apos;ll take it
            from there.
          </p>
        </div>

        <CareersForm />
      </div>
    </section>
  );
}
