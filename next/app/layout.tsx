import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    default: "Good Governance Corvallis",
    template: "%s — Good Governance Corvallis",
  },
  metadataBase: new URL("https://goodgovernancecorvallis.org"),
  openGraph: {
    siteName: "Good Governance Corvallis",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <SiteNav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
