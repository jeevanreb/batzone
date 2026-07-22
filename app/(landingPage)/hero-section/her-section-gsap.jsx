"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HeroSectionGsap({ children }) {
  useGSAP(() => {
    const playHeroAnimation = () => {
      // Decorative rings scale up when in view.
      gsap.fromTo(
        ".heroCircleCon",
        { scale: 0 },
        {
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          transformOrigin: "center center",
        }
      );

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Text block reveal
      const textIds = ["#hero-tagline", "#hero-heading", "#hero-description", "#hero-cta"].filter(
        (id) => document.querySelector(id)
      );
      if (textIds.length > 0) {
        tl.from(textIds, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          stagger: 0.15,
        });
      }

      // Phone rises in
      if (document.querySelector("#hero-phone")) {
        tl.from(
          "#hero-phone",
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
          },
          "-=0.3"
        );
      }

      // Floating cards pop in
      const cardIds = [
        "#hero-card-secure",
        "#hero-card-api",
        "#hero-card-payment",
        "#hero-card-fast",
        "#hero-card-enterprise",
      ].filter((id) => document.querySelector(id));
      if (cardIds.length > 0) {
        tl.from(
          cardIds,
          {
            opacity: 0,
            scale: 0.6,
            duration: 0.6,
            ease: "back.out(1.6)",
            stagger: 0.12,
          },
          "-=0.4"
        );
      }
    };

    const preloaderElem = document.getElementById("preloader-section-wrapper");
    const isPreloaderActive =
      preloaderElem &&
      preloaderElem.style.display !== "none" &&
      typeof window !== "undefined" &&
      !window.__preloaderStartRevealed;

    if (isPreloaderActive) {
      const handleReveal = () => {
        playHeroAnimation();
      };
      window.addEventListener("preloaderStartReveal", handleReveal, { once: true });
      return () => {
        window.removeEventListener("preloaderStartReveal", handleReveal);
      };
    } else {
      playHeroAnimation();
    }
  });

  return children;
}

export default HeroSectionGsap;
