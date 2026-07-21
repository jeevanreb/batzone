import HeroSectionIndex from "./hero-section-index"
import HelpSectionIndex from "./help-section-index"
import WhatWeDoIndex from "./what-we-do-index"
import OurServicesIndex from "./our-services-index"
import IndustriesIndex from "./industries-index"
import HearClientsIndex from "./hear-clients-index"
import GetStarted from "./get-started"
import WhoWeAre from "./who-we-are/who-we-are"
import Contact from "./Contact/Contact"


function LandingPage() {
    return (
        <>
            <HeroSectionIndex />
            <WhoWeAre />
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