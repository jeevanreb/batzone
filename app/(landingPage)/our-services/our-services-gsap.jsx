"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function OurServicesGsap({ children }) {
  useGSAP(() => {
    // Heading reveal
    gsap.from("#our-services-head", {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#our-services",
        start: "top 80%",
      },
    });

    // Pinned scroll-highlight only on desktop
    if (window.innerWidth < 1024) return;

    const totalItems = 8;                  // contents: #our-services-item-0 .. -7
    const visibleCount = 3;                // contents that fit before the column scrolls
    const anchorIndex = visibleCount - 1;  // 3rd content (index 2) is the anchor row

    const itemsCol = document.querySelector("#our-services-items");

    // Measure each content's vertical offset within the column (after layout)
    const offsets = Array.from({ length: totalItems }, (_, i) => {
      const el = document.querySelector(`#our-services-item-head-${i}`);
      return el ? el.offsetTop : 0;
    });
    const anchorOffset = offsets[anchorIndex];

    // Clip the timeline so contents above the anchor scroll out of view cleanly.
    // Height = top of the 4th content => exactly `visibleCount` rows are visible.
    const timeline = document.querySelector("#our-services-timeline");
    if (timeline && offsets[visibleCount]) {
      gsap.set(timeline, { height: offsets[visibleCount] });
    }

    const setActive = (activeIndex) => {
      for (let i = 0; i < totalItems; i++) {
        // Content: highlight the active one, dim the rest
        gsap.to(`#our-services-item-${i}`, {
          opacity: i === activeIndex ? 1 : 0.5,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
        });
        // Image: card index is content index + 1
        gsap.to(`#our-services-card-${i + 1}`, {
          opacity: i === activeIndex ? 1 : 0,
          zIndex: i === activeIndex ? 50 : 0,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
        });
      }

      // Scroll the content column only once we move past the 3rd content,
      // keeping the active row pinned at the anchor position.
      const targetY =
        activeIndex <= anchorIndex ? 0 : -(offsets[activeIndex] - anchorOffset);
      gsap.to(itemsCol, {
        y: targetY,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
    };

    let current = 0;
    setActive(0);

    ScrollTrigger.create({
      trigger: "#our-services",
      pin: "#our-services",
      start: "top top",
      end: `+=${(totalItems - 1) * 100}%`,
      scrub: true,
      onUpdate: (self) => {
        const activeIndex = Math.min(
          totalItems - 1,
          Math.max(0, Math.round(self.progress * (totalItems - 1))),
        );
        if (activeIndex !== current) {
          current = activeIndex;
          setActive(activeIndex);
        }
        // Progress line fills with overall scroll progress
        gsap.set("#our-services-line-fill", {
          height: `${self.progress * 95}%`,
        });
      },
    });
  });

  return children;
}

export default OurServicesGsap;
