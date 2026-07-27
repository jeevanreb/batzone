import ServicesGsap from "./services/services-gsap";
import ServicesMarkup from "./services/services-markup";

export default function ServicesIndex() {
    return (
        <ServicesGsap>
            <ServicesMarkup />
        </ServicesGsap>
    );
}
