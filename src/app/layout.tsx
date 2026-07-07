import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: {
    default: "NAMI Group — Global Financial, Advisory & Technology Solutions",
    template: "%s | NAMI Group",
  },
  description:
    "NAMI Group is a professionally managed corporate ecosystem delivering Investment Banking, Treasury, Aviation & Maritime Leasing, GIFT IFSC advisory, Trade Finance and Healthcare Financing across India, UAE, USA, Canada and GIFT IFSC.",
  authors: [{ name: "NAMI Group" }],
  openGraph: {
    title: "NAMI Group — Building the Next Global Financial Corridor",
    description:
      "An integrated platform for institutional Investment Banking, Treasury, Cross-Border Capital, Leasing and GIFT IFSC solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
