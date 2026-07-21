import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | NAMI Group",
  description: "The terms and conditions governing use of the NAMI Group website.",
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen">
      <section className="pt-44 pb-24">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow">Legal</span>
            <h1 className="mt-6 font-display text-4xl md:text-5xl font-light text-foreground tracking-tight">
              Terms of Use
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
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  By accessing or using this website (the &quot;Site&quot;), you agree to be bound
                  by these Terms of Use. If you do not agree to these terms, please do not use the
                  Site.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  2. Description of the Site
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  This Site is an informational marketing website for NAMI Group and is not itself a
                  transactional platform. It is not designed to originate, execute, or complete any
                  financial transaction, and no content on the Site constitutes an offer to provide
                  services. Engaging NAMI Group&apos;s actual advisory, treasury, leasing, trade
                  finance, or other services is governed exclusively by separate signed engagement
                  agreements executed with the relevant NAMI Group entity, together with any
                  applicable regulatory onboarding and compliance processes.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  3. Intellectual Property
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  All content on this Site, including text, graphics, logos, images, and the
                  underlying software and design, is the property of NAMI Group or its licensors and
                  is protected by applicable intellectual property laws. No content may be
                  reproduced, distributed, modified, or otherwise used without our prior written
                  consent, except as necessary for ordinary personal, non-commercial viewing of the
                  Site.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  4. Acceptable Use
                </h2>
                <div className="mt-5 space-y-4 text-foreground/85 leading-relaxed font-light">
                  <p>When using this Site, you agree that you will not:</p>
                  <ul className="list-disc pl-6 space-y-2 marker:text-gold">
                    <li>
                      Scrape, harvest, or extract data from the Site using automated means without
                      our prior written permission.
                    </li>
                    <li>
                      Attempt to gain unauthorized access to the Site, its servers, or any connected
                      systems.
                    </li>
                    <li>
                      Interfere with or disrupt the operation of the Site or the servers or networks
                      used to make it available.
                    </li>
                    <li>
                      Use the Site for any unlawful purpose or in violation of any applicable local,
                      national, or international law or regulation.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  5. No Warranty; Limitation of Liability
                </h2>
                <div className="mt-5 space-y-4 text-foreground/85 leading-relaxed font-light">
                  <p>
                    This Site and its content are provided on an &quot;as is&quot; and &quot;as
                    available&quot; basis, without warranties of any kind, whether express or
                    implied. NAMI Group does not warrant that the Site will be uninterrupted,
                    error-free, or free of harmful components.
                  </p>
                  <p>
                    <strong className="font-medium text-foreground">
                      Nothing on this Site constitutes financial, investment, legal, or tax advice.
                    </strong>{" "}
                    Content is provided for general informational purposes only and should not be
                    relied upon as the basis for any financial, investment, legal, or tax decision.
                    Engaging any NAMI Group entity for advisory or transactional services requires
                    separate formal agreements and completion of applicable regulatory and
                    compliance processes. You should seek independent professional advice before
                    making any decision based on information found on this Site.
                  </p>
                  <p>
                    To the fullest extent permitted by applicable law, NAMI Group shall not be
                    liable for any direct, indirect, incidental, consequential, or special damages
                    arising out of or in connection with your use of, or inability to use, this
                    Site.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  6. Third-Party Links
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  This Site may contain links to third-party websites or resources. Such links are
                  provided for convenience only. NAMI Group does not endorse and is not responsible
                  for the content, products, services, or practices of any linked third-party sites.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  7. Governing Law
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  These Terms of Use shall be governed by and construed in accordance with the laws
                  of{" "}
                  <span className="italic">
                    [Governing Law Jurisdiction — to be confirmed by legal counsel]
                  </span>
                  , without regard to its conflict of law principles.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  8. Changes to These Terms
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  We may revise these Terms of Use at any time by updating this page. Continued use
                  of the Site following any changes constitutes acceptance of the revised terms.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                  9. Contact Us
                </h2>
                <p className="mt-5 text-foreground/85 leading-relaxed font-light">
                  If you have questions about these Terms of Use, please contact us at{" "}
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
