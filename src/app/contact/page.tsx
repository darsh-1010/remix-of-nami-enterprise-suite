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

      {/* Contact Info Section */}
      <section className="py-12 lg:py-20 bg-background container-x">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-light text-navy-deep mb-3">Email</h3>
            <a
              href="mailto:ib@namigroup.in"
              className="text-sky hover:text-sky-bright transition-colors"
            >
              ib@namigroup.in
            </a>
          </div>
          <div>
            <h3 className="font-display text-lg font-light text-navy-deep mb-3">Phone</h3>
            <div className="flex flex-col gap-1">
              <a
                href="tel:+919725053938"
                className="text-sky hover:text-sky-bright transition-colors"
              >
                +91-97250 53938 (India)
              </a>
              <a
                href="tel:+971585743938"
                className="text-sky hover:text-sky-bright transition-colors"
              >
                +971 58 57 4 3938 (UAE)
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-light text-navy-deep mb-3">Office</h3>
            <p className="text-foreground/75 font-light">GIFT IFSC, Gandhinagar, India</p>
          </div>
        </div>
      </section>
    </main>
  );
}
