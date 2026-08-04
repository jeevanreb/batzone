import HeroIndex from "./hero-index";
import IntroIndex from "./intro-index";
import ServicesIndex from "./services-index";
import WhyBatzoneIndex from "./whybatzone-index";

export const metadata = {
  title: "Custom Sports Jerseys & Track Pants – BatZone Apparel",
  description:
    "Get premium custom cricket, football and corporate team jerseys with sublimation printing, personalized names, numbers and logos. High-quality fabric, fast production.",
  keywords: [
    "custom jerseys",
    "custom cricket jersey",
    "sublimation printing",
    "team jerseys",
    "track pants",
    "sports apparel",
    "BatZone apparel",
    "customized team wear",
  ],
  openGraph: {
    title: "Custom Sports Jerseys & Track Pants – BatZone Apparel",
    description:
      "Premium custom jerseys with sublimation printing, personalized names, numbers and logos.",
  },
};

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