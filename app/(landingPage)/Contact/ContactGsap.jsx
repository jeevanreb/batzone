"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ContactGsap({ children }) {
  useGSAP(() => {
    // TOP marquee — scrolls right to left
    const topContent = document.querySelector(".contact-top-marquee-content");
    if (topContent) {
      const totalWidth = topContent.scrollWidth;
      gsap.fromTo(
        ".contact-top-marquee-track",
        { x: 0 },
        {
          x: -totalWidth,
          duration: 20,
          ease: "none",
          repeat: -1,
        }
      );
    }

    // BOTTOM marquee — scrolls left to right
    const bottomContent = document.querySelector(".contact-bottom-marquee-content");
    if (bottomContent) {
      const totalWidth = bottomContent.scrollWidth;
      gsap.fromTo(
        ".contact-bottom-marquee-track",
        { x: -totalWidth },
        {
          x: 0,
          duration: 25,
          ease: "none",
          repeat: -1,
        }
      );
    }
  }, []);

  return <div id="contact-gsap-wrapper">{children}</div>;
}