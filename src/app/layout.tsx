import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsent from "@/components/CookieConsent";
import BackToTop from "@/components/BackToTop";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://www.innowisesolutions.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Innowise Solutions — Technology with purpose.",
    template: "%s | Innowise Solutions",
  },
  description: "AI-powered cloud, cybersecurity, ERP, and managed IT services for forward-thinking organisations.",
  openGraph: {
    title: "Innowise Solutions — Technology with purpose.",
    description: "AI-powered cloud, cybersecurity, ERP, and managed IT services for forward-thinking organisations.",
    url: siteUrl,
    siteName: "Innowise Solutions",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innowise Solutions — Technology with purpose.",
    description: "AI-powered cloud, cybersecurity, ERP, and managed IT services for forward-thinking organisations.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Innowise Solutions",
  url: siteUrl,
  logo: `${siteUrl}/hero_image.jpg`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+44-116-225-7865",
      contactType: "sales",
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 112, The Dock, 75 Exploration Drive",
    addressLocality: "Leicester",
    postalCode: "LE4 5NU",
    addressCountry: "GB",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable}`} suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <main id="main-content" className="overflow-x-hidden">{children}</main>
          <Footer />
          <CookieConsent />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
