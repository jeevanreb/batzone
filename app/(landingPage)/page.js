import PreloaderIndex from "./preloader-index"
import HeroSectionIndex from "./hero-section-index"
import OurServicesIndex from "./our-services-index"
import HearClientsIndex from "./hear-clients-index"
import WhoWeAre from "./who-we-are/who-we-are"
import AmbassadorIndex from "./ambassador-index"
import Contact from "./Contact/Contact"

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