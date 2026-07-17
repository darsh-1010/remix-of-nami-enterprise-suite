import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LenisProvider } from "@/components/LenisProvider";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // Runs before paint to avoid a flash of the wrong theme. Reads the saved
          // preference (falling back to the OS setting) and applies it synchronously.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,200..700&display=swap"
        />
        <noscript>
          <style>{`.reveal-fallback{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body suppressHydrationWarning>
        <LenisProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
