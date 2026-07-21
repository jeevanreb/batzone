"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HearClientsGsap({ children }) {

  useGSAP(
    () => {

      const heads = gsap.utils.toArray("#hc-head");

      gsap.from(heads, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#hear-clients",
          start: "top 80%",
          end: "+=30%",
          scrub: true,
        },
      });

      const cards = gsap.utils.toArray("#hc-card");

      gsap.from(cards, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        stagger: () => gsap.utils.random(0, 0.6),
        scrollTrigger: {
          trigger: "#hear-clients",
          start: "top 65%",
          end: "+=50%",
          scrub: true,
        },
      });
    },
  )

  return children;
}

export default HearClientsGsap;
