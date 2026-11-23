import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { SplitReveal } from "@/components/motion/SplitReveal";

export const metadata: Metadata = {
  title: "Contact Us — NAMI Group",
  description:
    "Get in touch with NAMI Group for inquiries about our investment banking, treasury, and leasing services.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/contact-bg.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background dark:from-black/55 dark:via-black/75 dark:to-black/95" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 container-x">
        <div className="max-w-2xl">
          <SplitReveal
            as="h1"
            className="font-display text-4xl md:text-5xl font-light text-foreground tracking-tight mb-6"
          >
            <>Get in Touch</>
          </SplitReveal>
          <p className="text-lg text-foreground/75 font-light">
            Have a question about our services? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-12 lg:py-20 container-x flex-grow">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
