import type { Metadata } from "next";
import {
  Hero,
  About,
  Stats,
  GlobalPresence,
  Verticals,
  Industries,
  WhyChoose,
  Gift,
  Treasury,
  AviationMaritime,
  Technology,
  Leadership,
  Esg,
  Faq,
  CTA,
} from "@/components/sections";

export const metadata: Metadata = {
  metadataBase: new URL("https://remix-of-nami-enterprise-suite.vercel.app"),
  title: "NAMI Group — Building the Next Global Financial Corridor",
  description:
    "A professionally managed corporate ecosystem delivering Investment Banking, Treasury, Cross-Border Capital, Aviation & Maritime Leasing, and GIFT City IFSC solutions.",
  keywords: [
    "NAMI Group",
    "Investment Banking",
    "Treasury Advisory",
    "GIFT City IFSC",
    "Capfin Advisory",
    "Cross-Border Capital Corridor",
    "Aviation Leasing",
    "Maritime Leasing",
    "Trade Finance",
    "Bond Placement",
  ],
  openGraph: {
    title: "NAMI Group — Building the Next Global Financial Corridor",
    description:
      "A professionally managed corporate ecosystem delivering Investment Banking, Treasury, Cross-Border Capital, Leasing and GIFT IFSC solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAMI Group — Building the Next Global Financial Corridor",
    description:
      "A professionally managed corporate ecosystem delivering Investment Banking, Treasury, Cross-Border Capital, Leasing and GIFT IFSC solutions.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Verticals />
      <Gift />
      <Treasury />
      <AviationMaritime />
      <Technology />
      <About />
      <Stats />
      <GlobalPresence />
      <Industries />
      <WhyChoose />
      <Leadership />
      <Esg />
      <Faq />
      <CTA />
    </>
  );
}
