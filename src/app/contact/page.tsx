import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { SplitReveal } from "@/components/motion/SplitReveal";

export const metadata: Metadata = {
  title: "Contact Us — NAMI Group",
  description:
    "Get in touch with NAMI Group for inquiries about our investment banking, treasury, and leasing services.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 container-x">
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
      <section className="py-12 lg:py-20 container-x flex-grow">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
