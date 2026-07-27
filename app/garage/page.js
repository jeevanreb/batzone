import HeroSectionIndex from "./herosection-index";
import MetricsIndex from "./metrics-index";
import ServicesIndex from "./services-index";
import CraftmanshipIndex from "./craftmanship-index";
import CtaIndex from "./cta-index";

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