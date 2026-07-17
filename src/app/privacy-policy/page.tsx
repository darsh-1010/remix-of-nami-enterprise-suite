import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | NAMI Group",
  description:
    "How NAMI Group collects, uses, and protects information submitted through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-44 pb-24">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow">Legal</span>
            <h1 className="mt-6 font-display text-4xl md:text-5xl font-light text-foreground tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Effective Date: 2026 — <em>placeholder, to be finalized upon legal review</em>
            </p>

            {/* Legal review callout */}
            <div className="mt-10 flex gap-4 rounded-2xl border border-gold/40 bg-muted/40 p-6">
              <AlertTriangle className="h-6 w-6 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-sm text-foreground/85 leading-relaxed">
                <strong className="font-medium text-foreground">Template notice:</strong> This is a
                general template and has not been reviewed by legal counsel. Please have qualified
                legal counsel review and finalize this policy before relying on it publicly.
              </p>
            </div>

            <div className="mt-16 space-y-14">
              <div>
                <p className="text-foreground/85 leading-relaxed font-light">
                  NAMI Group (&quot;NAMI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                  respects your privacy. This Privacy Policy describes the information we collect
                  through this website, how we use it, and the choices available to you. It applies
                  to this website only and does not govern the separate engagement agreements,
                  onboarding documentation, or regulatory disclosures associated with our advisory
                  services, which are addressed under those specific agreements.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  1. Information We Collect
                </h2>
                <div className="mt-5 space-y-4 text-foreground/85 leading-relaxed font-light">
                  <p>We collect information you choose to provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2 marker:text-gold">
                    <li>
                      <span className="font-medium text-foreground">Contact form submissions</span> —
                      your name, email address, organization, phone number, and the content of your
                      message.
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Job applications</span> — your
                      resume/CV, cover letter, and any other details you include as part of an
                      application submitted through this site.
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Analytics &amp; cookies</span> —
                      standard technical information collected automatically when you browse the
                      site, such as IP address, browser type, device information, pages visited, and
                      referring URLs, typically gathered via cookies or similar tracking
                      technologies.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  2. How We Use Your Information
                </h2>
                <div className="mt-5 space-y-4 text-foreground/85 leading-relaxed font-light">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2 marker:text-gold">
                    <li>Respond to your inquiries and communicate with you about our services.</li>
                    <li>Process and evaluate job applications and recruitment inquiries.</li>
                    <li>
                      Operate, maintain, and improve the website, including understanding how
                      visitors use it.
                    </li>
                    <li>Comply with applicable legal, regulatory, or contractual obligations.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  3. How We Do Not Share Your Information
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  We do not sell, rent, or trade your personal data to third parties. We may share
                  information only with trusted service providers who assist us in operating the
                  website (for example, hosting or email delivery providers) under obligations of
                  confidentiality, or where required to comply with applicable law, regulation,
                  legal process, or governmental request.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  4. Data Retention
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  We retain personal information only for as long as reasonably necessary to fulfil
                  the purposes described in this Policy, or as required by applicable law. You may
                  request that we delete your information at any time, as described below, subject
                  to any legal or regulatory retention requirements that may apply.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  5. Your Rights
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  Depending on your jurisdiction, you may have the right to access, correct, or
                  request deletion of the personal information we hold about you. To exercise any of
                  these rights, please contact us at{" "}
                  <a
                    href="mailto:ib@namigroup.in"
                    className="text-sky hover:text-sky-bright transition-colors"
                  >
                    ib@namigroup.in
                  </a>
                  , and we will respond within a reasonable timeframe.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  6. Cookies
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  This website may use cookies and similar technologies to operate reliably and to
                  understand aggregate usage patterns. Most browsers allow you to control cookies
                  through their settings, including blocking or deleting them. Disabling cookies may
                  affect certain features of the site.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  7. Children&apos;s Privacy
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  This website is not directed at, and is not intended for use by, children under
                  the age of 16. We do not knowingly collect personal information from children. If
                  you believe a child has provided us with personal information, please contact us so
                  we can take appropriate action.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  8. Changes to This Policy
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  We may update this Privacy Policy from time to time to reflect changes in our
                  practices or for other operational, legal, or regulatory reasons. Any changes will
                  be posted on this page with an updated effective date.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  9. Contact Us
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  If you have questions about this Privacy Policy or how we handle your information,
                  please contact us at{" "}
                  <a
                    href="mailto:ib@namigroup.in"
                    className="text-sky hover:text-sky-bright transition-colors"
                  >
                    ib@namigroup.in
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
