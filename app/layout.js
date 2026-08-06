import { Figtree } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/context/lenis-wrapper";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layouts/Footer";
import Script from "next/script";

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
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "BatZone",
    title: "BatZone | Premium Sports Store",
    description:
      "Cricket bat customization, custom jerseys, premium trophies, medals, tournament management & Auction from Hemmadi.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BatZone - Premium Sports Store in Hemmadi",
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": SITE_URL,
  name: "BatZone",
  description:
    "BatZone is a premium sports store in Hemmadi offering cricket bat customization, custom jerseys, trophies, medals, and tournament management.",
  url: SITE_URL,
  telephone: "+917892735114",
  email: "batzone99@gmail.com",
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [
    "https://www.instagram.com/bat.zone/",
    "https://wa.me/917892735114",
    "https://batzoneauctionmanagement.com/",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "MD Complex, 1st floor",
    addressLocality: "Hemmadi",
    addressRegion: "Karnataka",
    postalCode: "576230",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.5620",
    longitude: "74.9820",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "BatZone Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cricket Bat Customization & Restoration",
          url: `${SITE_URL}/garage`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Sports Jerseys",
          url: `${SITE_URL}/jersey`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trophies, Medals & Mementos",
          url: `${SITE_URL}/trophies`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cricket Tournament Management",
          url: `${SITE_URL}/tournament-event`,
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="batzone-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${figtree.variable} antialiased`}>
        <LenisWrapper>
          <Toaster />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
}
