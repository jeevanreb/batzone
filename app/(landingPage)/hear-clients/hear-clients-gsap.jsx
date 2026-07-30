"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HearClientsGsap({ children }) {
  useGSAP(() => {
    const isMobile = window.innerWidth < 1024;
    const heads = gsap.utils.toArray("#hc-head");
    const cards = gsap.utils.toArray("#hc-card");

    if (isMobile) {
      gsap.fromTo(
        heads,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#hear-clients",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        cards,
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#hear-clients",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    } else {
      gsap.fromTo(
        heads,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: "#hear-clients",
            start: "top 80%",
            end: "+=30%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        cards,
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#hear-clients",
            start: "top 68%",
            end: "+=50%",
            scrub: 1,
          },
        }
      );
    }
  });

  return children;
}

export default HearClientsGsap;
