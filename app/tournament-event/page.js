import HeroIndex from "./hero-index";
import LedWallIndex from "./ledwall-index";
import CompleteTournamentIndex from "./complete-index";
import EventSetupIndex from "./eventsetup-index";
import VersatileIndex from "./versatile-index";
import WhyChooseIndex from "./whychoose-index";
import FinalCtaIndex from "./finalcta-index";

export default function TournamentEventPage() {
    return (
        <div>
            {/* Hero Section */}
            <HeroIndex />

            {/* LED Wall Live Telecast Section */}
            <LedWallIndex />

            {/* Complete Tournament Management Section */}
            <CompleteTournamentIndex />

            {/* Event Setup & Operations */}
            <EventSetupIndex />

            {/* Versatile Stage Programs */}
            <VersatileIndex />

            {/* Why Choose BatZone? Section */}
            <WhyChooseIndex />

            {/* Final CTA */}
            <FinalCtaIndex />
        </div>
    );
}