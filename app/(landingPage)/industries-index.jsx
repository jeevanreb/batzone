import IndustriesGsap from "./industries/industries-gsap";
import IndustriesMarkup from "./industries/industries-markup";
import ecommerce from "@/assets/landingPage/industries/ecommerce.png";
import lending from "@/assets/landingPage/industries/lending.png";
import healthcare from "@/assets/landingPage/industries/healthcare.png";
import fintech from "@/assets/landingPage/industries/fintech.png";
import education from "@/assets/landingPage/industries/education.png";
import logistics from "@/assets/landingPage/industries/logistics.png";
import saas from "@/assets/landingPage/industries/saas.png";
import insurance from "@/assets/landingPage/industries/insurance.png";
import travel from "@/assets/landingPage/industries/travel.png";
import retail from "@/assets/landingPage/industries/retail.png";

// Staggered cluster — one inner array per visual row (matches the design layout)
const rows = [
    [
        { label: "E-Commerce", variant: "pink", icon: ecommerce },
        { label: "Lending", variant: "dark", icon: lending },
    ],
    [
        { label: "Healthcare", variant: "maroon", icon: healthcare },
        { label: "Fintech", variant: "dark", icon: fintech },
        { label: "Education", variant: "pink", icon: education },
    ],
    [
        { label: "Logistics", variant: "pink", icon: logistics },
        { label: "SaaS", variant: "maroon", icon: saas },
        { label: "Insurance", variant: "dark", icon: insurance },
    ],
    [
        { label: "Travel", variant: "dark", icon: travel },
        { label: "Retail", variant: "pink", icon: retail },
    ],
];

function IndustriesIndex() {
    return (
        <>
            <IndustriesGsap>
                <IndustriesMarkup rows={rows} />
            </IndustriesGsap>
        </>
    );
}

export default IndustriesIndex;
