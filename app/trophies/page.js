import HeroIndex from "./hero-index";
import PremiumTrophiesIndex from "./premiumtrophies-index";
import MedalsIndex from "./medals-index";
import AwardsIndex from "./awards-index";
import WhyChooseIndex from "./whychoose-index";
import CtaIndex from "./cta-index";

export const metadata = {
  title: "Premium Trophies, Medals & Mementos – BatZone",
  description:
    "Premium sports trophies, customized medals and special mementos for tournaments, schools, clubs and corporate events. Custom engraving and bulk orders available.",
  keywords: [
    "sports trophies",
    "custom trophies",
    "medals",
    "mementos",
    "tournament trophies",
    "trophy bulk order",
    "custom medals",
    "awards",
  ],
  openGraph: {
    title: "Premium Trophies, Medals & Mementos – BatZone",
    description:
      "Premium trophies, customized medals and special mementos for tournaments, schools, clubs and corporate events.",
  },
};

export default function TrophiesPage() {
    return (
        <div>
            {/* Hero Section */}
            <HeroIndex />

            {/* Premium Trophies */}
            <PremiumTrophiesIndex />

            {/* Customized Medals of Valor */}
            <MedalsIndex />

            {/* Mementos & Special Awards */}
            <AwardsIndex />

            {/* Why Choose BatZone? */}
            <WhyChooseIndex />

            {/* Final CTA */}
            <CtaIndex />
        </div>
    );
}

