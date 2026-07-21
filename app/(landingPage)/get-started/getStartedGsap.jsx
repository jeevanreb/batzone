"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GetStartedGsap = ({ children }) => {
  useGSAP(() => {
    const stepTags = gsap.utils.toArray(".get-started-step-tag");
    const cards = gsap.utils.toArray(".get-started-card");
    const sectionWrapper = document.getElementById("get-started-pin");

    const totalSteps = stepTags.length;

    if (!sectionWrapper || !totalSteps) return;

    let currentStep = 0;

    // Initial state — GSAP must own transforms from the start
    gsap.set(cards, {
      filter: "grayscale(100%)",
      y: 20,
    });

    gsap.set(cards[0], {
      filter: "grayscale(0%)",
      y: 0,
    });

    const activateStep = (activeIndex) => {
      // Step Tags
      stepTags.forEach((tag, index) => {
        gsap.to(tag, {
          backgroundColor:
            index === activeIndex ? "#E51A6E" : "#e5e7eb",
          color:
            index === activeIndex ? "#ffffff" : "#9ca3af",
          borderColor:
            index === activeIndex ? "#E51A6E" : "#e5e7eb",
          duration: 0.2,
          ease: "none",
          overwrite: true,
        });
      });

      // Cards — use GSAP's `y` shorthand, NOT CSS `transform` string
      cards.forEach((card, index) => {
        gsap.to(card, {
          filter:
            index === activeIndex
              ? "grayscale(0%)"
              : "grayscale(100%)",
          y: index === activeIndex ? 0 : 20,
          duration: 0.2,
          ease: "none",
          overwrite: true,
        });
      });
    };

    ScrollTrigger.create({
      trigger: sectionWrapper,
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,

      onUpdate: (self) => {
        const activeIndex = Math.min(
          Math.floor(self.progress * totalSteps),
          totalSteps - 1
        );

        if (activeIndex !== currentStep) {
          currentStep = activeIndex;
          activateStep(activeIndex);
        }
      },
    });

    activateStep(0);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  });

  return children;
};

export default GetStartedGsap;