import WhatWeDoGsap from './what-we-do/what-we-do-gsap'
import WhatWeDoMarkup from './what-we-do/what-we-do-markup'
import profile from "@/assets/landingPage/what-we-do/profile.png";
import star from "@/assets/landingPage/what-we-do/star.png";
import cards from "@/assets/landingPage/what-we-do/cards.png";
import dots from "@/assets/landingPage/what-we-do/dots.png";
import bar from "@/assets/landingPage/what-we-do/bar.png";

function WhatWeDoIndex() {

//   const accounts = [
//   {
//     icon: profile,
//     title: "Personal Account",
//     description: "Fast, secure payments with easy setup, and transparent fees.",
//   },
//   {
//     icon: star,
//     title: "Business Account",
//     description:
//       "Business Payments Simplified, Streamlined Financial Operations",
//   },
// ];

const features = [
  {
    icon: cards,
    title: "Payment Solutions",
    description:
      "Accept UPI, cards, net banking, and wallets through a single integration with secure payments and real-time settlements.",
  },
  {
    icon: dots,
    title: "Connected People",
    description:
      "Smooth onboarding and secure KYC for customers and partners, plus developer APIs to connect your systems quickly and safely.",
  },
  {
    icon: bar,
    title: "Business Growth",
    description:
      "Tools to scale — subscription billing, recurring payments, payouts and detailed analytics to boost conversion and reduce churn.",
  },
];

  return (
    <>
      <WhatWeDoGsap>
        <WhatWeDoMarkup features={features} />
      </WhatWeDoGsap>
    </>
  )
}

export default WhatWeDoIndex