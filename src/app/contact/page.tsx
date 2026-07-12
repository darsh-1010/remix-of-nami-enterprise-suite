import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — NAMI Group",
  description: "Get in touch with NAMI Group for inquiries about our investment banking, treasury, and leasing services.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 container-x">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl font-light text-foreground tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-foreground/75 font-light">
            Have a question about our services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
      <section className="py-12 lg:py-20 bg-muted/40 container-x">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-light text-foreground mb-3">Email</h3>
            <a href="mailto:contact@namigroup.com" className="text-gold hover:text-gold-bright transition-colors">
              contact@namigroup.com
            </a>
          </div>
          <div>
            <h3 className="font-display text-lg font-light text-foreground mb-3">Phone</h3>
            <a href="tel:+12345678900" className="text-gold hover:text-gold-bright transition-colors">
              +1 (234) 567-8900
            </a>
          </div>
          <div>
            <h3 className="font-display text-lg font-light text-foreground mb-3">Office</h3>
            <p className="text-foreground/75 font-light">
              New York, USA
              <br />
              UAE, India, UK
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
