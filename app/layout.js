import { Figtree } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/context/lenis-wrapper";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layouts/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const SITE_URL = "https://www.batzone.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BatZone | Premium Sports Store, Cricket Bats, Custom Jerseys, Trophies & Tournament Management",
    template: "%s | BatZone",
  },
  description:
    "BatZone is a premium sports store based in Hemmadi. We offer cricket bat customization & restoration, custom jerseys, premium trophies, medals, and complete tournament event management.",
  keywords: [
    "BatZone",
    "cricket bat customization",
    "bat restoration",
    "custom jerseys",
    "sports trophies",
    "medals",
    "tournament management",
    "cricket equipment",
    "Hemmadi",
    "sports store",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "BatZone",
    title: "BatZone | Premium Sports Store",
    description:
      "Cricket bat customization, custom jerseys, premium trophies, medals , tournament management & Auction from Hemmadi.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BatZone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BatZone | Premium Sports Store",
    description:
      "Cricket bat customization, custom jerseys, premium trophies, medals & tournament management.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} antialiased`}
      >
        <LenisWrapper>
          <Toaster />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
}
