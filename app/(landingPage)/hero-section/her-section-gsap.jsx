"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HeroSectionGsap({ children }) {
  useGSAP(() => {
    // Decorative rings scale up when in view.
    // xPercent keeps the -translate-x-1/2 centering intact under GSAP's transform.
    gsap.fromTo(
      ".heroCircleCon",
      { scale: 0 },
      {
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: ".heroCircleCon",
          start: "top 85%",
        },
      },
    );

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Text block reveal
    tl.from(
      ["#hero-tagline", "#hero-heading", "#hero-description", "#hero-cta"],
      {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
      },
    );

    // Phone rises in
    tl.from(
      "#hero-phone",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.3",
    );

    // Floating cards pop in
    tl.from(
      [
        "#hero-card-secure",
        "#hero-card-api",
        "#hero-card-payment",
        "#hero-card-fast",
        "#hero-card-enterprise",
      ],
      {
        opacity: 0,
        scale: 0.6,
        duration: 0.6,
        ease: "back.out(1.6)",
        stagger: 0.12,
      },
      "-=0.4",
    );
  });

  return children;
}

export default HeroSectionGsap;
