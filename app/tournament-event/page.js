import HeroIndex from "./hero-index";
import LedWallIndex from "./ledwall-index";
import CompleteTournamentIndex from "./complete-index";
import EventSetupIndex from "./eventsetup-index";
import VersatileIndex from "./versatile-index";
import WhyChooseIndex from "./whychoose-index";
import FinalCtaIndex from "./finalcta-index";

export const metadata = {
  title: "Cricket Tournament Management & Event Services – BatZone",
  description:
    "End-to-end cricket tournament management including Auction, live scoring, LED walls, live telecast, stage programs, officials, ground operations and event entertainment.",
  keywords: [
    "tournament auction",
    "tournament management",
    "cricket tournament",
    "event management",
    "LED wall live telecast",
    "live scoring",
    "stage programs",
    "sports event management",
    "BatZone tournament",
  ],
  openGraph: {
    title: "Cricket Tournament Management & Event Services – BatZone",
    description:
      "Complete cricket tournament management with live scoring, LED walls, live telecast and stage programs.",
  },
  alternates: {
    canonical: "https://www.batzone.com/tournament-event",
  },
};

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