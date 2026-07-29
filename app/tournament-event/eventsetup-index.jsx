import EventSetupGsap from "./eventsetup/eventsetup-gsap";
import EventSetupMarkup from "./eventsetup/eventsetup-markup";

export default function EventSetupIndex() {
    return (
        <EventSetupGsap>
            <EventSetupMarkup />
        </EventSetupGsap>
    );
}
