import HeroIndex from "./hero-index";
import IntroIndex from "./intro-index";
import ServicesIndex from "./services-index";
import WhyBatzoneIndex from "./whybatzone-index";

export default function JerseyPage() {
    return (
        <div>
            {/* Hero Section */}
            <HeroIndex />

            {/* Introduction Section */}
            <IntroIndex />

            {/* Services Bento Grid */}
            <ServicesIndex />

            {/* Why Choose BatZone */}
            <WhyBatzoneIndex />
        </div>
    );
}