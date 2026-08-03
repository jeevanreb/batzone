import HeroIndex from "./hero-index";
import PremiumTrophiesIndex from "./premiumtrophies-index";
import MedalsIndex from "./medals-index";
import AwardsIndex from "./awards-index";
import WhyChooseIndex from "./whychoose-index";
import CtaIndex from "./cta-index";

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

