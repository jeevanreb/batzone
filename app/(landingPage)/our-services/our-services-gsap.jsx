"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function OurServicesGsap({ children }) {
  useGSAP(() => {
    // Header section premium reveal
    const headTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#our-services",
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    });

    headTimeline.fromTo(
      "#our-services-badge",
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }
    );

    headTimeline.fromTo(
      "#our-services-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    // Desktop pinned scroll & image transitions
    if (window.innerWidth < 1024) return;

    const totalItems = 8;                  // contents: #our-services-item-0 .. -7
    const visibleCount = 3;                // contents that fit before the column scrolls
    const anchorIndex = visibleCount - 1;  // 3rd content (index 2) is the anchor row

    const itemsCol = document.querySelector("#our-services-items");

    // Measure each content's vertical offset within the column
    const offsets = Array.from({ length: totalItems }, (_, i) => {
      const el = document.querySelector(`#our-services-item-head-${i}`);
      return el ? el.offsetTop : 0;
    });
    const anchorOffset = offsets[anchorIndex];

    const timeline = document.querySelector("#our-services-timeline");
    if (timeline && offsets[visibleCount]) {
      gsap.set(timeline, { height: offsets[visibleCount] });
    }

    // Container entrance animation
    gsap.fromTo(
      "#our-services-card",
      { opacity: 0, scale: 0.94, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#our-services",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const setActive = (activeIndex) => {
      for (let i = 0; i < totalItems; i++) {
        const isCurrent = i === activeIndex;

        // Timeline item content highlight
        gsap.to(`#our-services-item-${i}`, {
          opacity: isCurrent ? 1 : 0.45,
          scale: isCurrent ? 1.02 : 1,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });

        // Image animation: scale 1.08 -> 1.0 on enter, opacity fade
        const cardElem = document.querySelector(`#our-services-card-${i + 1}`);
        if (cardElem) {
          if (isCurrent) {
            gsap.set(cardElem, { zIndex: 50 });
            gsap.fromTo(
              cardElem,
              { opacity: 0, scale: 1.08 },
              { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out", overwrite: "auto" }
            );
          } else {
            gsap.to(cardElem, {
              opacity: 0,
              zIndex: 0,
              duration: 0.35,
              ease: "power2.in",
              overwrite: "auto",
            });
          }
        }
      }

      // Scroll content column
      const targetY = activeIndex <= anchorIndex ? 0 : -(offsets[activeIndex] - anchorOffset);
      gsap.to(itemsCol, {
        y: targetY,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    let current = 0;
    setActive(0);

    ScrollTrigger.create({
      trigger: "#our-services",
      pin: "#our-services",
      start: "top top",
      end: `+=${(totalItems - 1) * 100}%`,
      scrub: 0.5,
      onUpdate: (self) => {
        const activeIndex = Math.min(
          totalItems - 1,
          Math.max(0, Math.round(self.progress * (totalItems - 1)))
        );
        if (activeIndex !== current) {
          current = activeIndex;
          setActive(activeIndex);
        }
        gsap.set("#our-services-line-fill", {
          height: `${self.progress * 95}%`,
        });
      },
    });
  });

  return children;
}

export default OurServicesGsap;
