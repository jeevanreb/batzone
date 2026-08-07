import HeroSectionIndex from "./herosection-index";
import MetricsIndex from "./metrics-index";
import ServicesIndex from "./services-index";
import CraftmanshipIndex from "./craftmanship-index";
import CtaIndex from "./cta-index";

export const metadata = {
  title: "BatZone Garage – Cricket Bat Customization & Restoration",
  description:
    "BatZone Garage specializes in premium cricket bat customization, knocking-in, repairs, handle replacement, and complete restoration by master craftsmen in Hemmadi.",
  keywords: [
    "cricket bat restoration",
    "bat customization",
    "bat knocking",
    "handle replacement",
    "bat repair",
    "BatZone Garage",
    "cricket bat service Hemmadi",
  ],
  openGraph: {
    title: "BatZone Garage – Cricket Bat Customization & Restoration",
    description:
      "Premium cricket bat customization, knocking-in, repairs, and complete restoration by master craftsmen.",
  },
  alternates: {
    canonical: "https://www.bat-zone.com/garage",
  },
};

export default function GaragePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSectionIndex />

      {/* Metrics Bar */}
      <MetricsIndex />

      {/* Services Bento Grid */}
      <ServicesIndex />

      {/* Craftsmanship Section */}
      <CraftmanshipIndex />

      {/* CTA Banner */}
      <CtaIndex />
    </div>
  );
}