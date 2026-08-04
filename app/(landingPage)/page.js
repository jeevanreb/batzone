import PreloaderIndex from "./preloader-index"
import HeroSectionIndex from "./hero-section-index"
import OurServicesIndex from "./our-services-index"
import HearClientsIndex from "./hear-clients-index"
import WhoWeAre from "./who-we-are/who-we-are"
import AmbassadorIndex from "./ambassador-index"
import Contact from "./Contact/Contact"

export const metadata = {
  title: "BatZone | Premium Sports Store in Hemmadi – Cricket Bats, Custom Jerseys, Trophies & More",
  description:
    "BatZone is a premium sports store based in Hemmadi offering cricket bat customization & restoration, custom jerseys, premium trophies & medals, and complete tournament event management.",
  keywords: [
    "BatZone",
    "premium sports store",
    "cricket bat customization",
    "bat restoration Hemmadi",
    "custom jerseys",
    "sports trophies medals",
    "cricket equipment store",
  ],
  openGraph: {
    title: "BatZone | Premium Sports Store in Hemmadi",
    description:
      "Cricket bat customization, custom jerseys, premium trophies, medals & tournament management from Hemmadi.",
  },
};

function LandingPage() {
    return (
        <>
            <PreloaderIndex />
            <HeroSectionIndex />
            <WhoWeAre />
            <AmbassadorIndex />
            {/* <WhatWeDoIndex /> */}
            {/* <IndustriesIndex /> */}
            <OurServicesIndex />
            {/* <WhyBatZone /> */}
            {/* <GetStarted /> */}
            <HearClientsIndex />
            <Contact />
            {/* <HelpSectionIndex /> */}
        </>
    )
}

export default LandingPage