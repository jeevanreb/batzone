"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function WhyMoneypayGsap({ children }) {
  useGSAP(() => {
    // Tagline + heading reveal
    gsap.from(["#why-batzone-tagline", "#why-batzone-heading"], {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#why-batzone-container",
        start: "top 80%",
      },
    });

    // Feature cards stagger in
    const cards = [
      "#why-batzone-card-unified",
      "#why-batzone-card-secure",
      "#why-batzone-card-seamless",
      "#why-batzone-card-realtime",
    ];

    gsap.from(cards, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#why-batzone-features",
        start: "top 80%",
      },
    });

    // Bottom description fade-up
    gsap.from("#why-batzone-bottom-text", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#why-batzone-bottom-text",
        start: "top 90%",
      },
    });
  });

  return children;
}

export default WhyMoneypayGsap;
