"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function PreloaderGsap({ children }) {
  useGSAP(() => {
    const progressObj = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set("#preloader-section-wrapper", { display: "none" });
      },
    });

    // Reveal preloader elements smoothly
    tl.from("#preloader-section-logo", {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from(
      ["#preloader-section-heading", "#preloader-section-line-track", "#preloader-section-counter-box"],
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Animate percentage from 0 to 100 & update progress line
    tl.to(progressObj, {
      value: 100,
      duration: 2.0,
      ease: "power1.inOut",
      onUpdate: () => {
        const val = Math.floor(progressObj.value);

        const counterElem = document.getElementById("preloader-section-counter");
        if (counterElem) {
          counterElem.textContent = `${val}%`;
        }

        const lineFill = document.getElementById("preloader-section-line-fill");
        if (lineFill) {
          lineFill.style.width = `${val}%`;
        }

        const statusElem = document.getElementById("preloader-section-status");
        if (statusElem) {
          if (val < 30) {
            statusElem.textContent = "INITIALIZING BAT ZONE...";
          } else if (val < 70) {
            statusElem.textContent = "LOADING RESOURCES...";
          } else if (val < 100) {
            statusElem.textContent = "FINALIZING EXPERIENCE...";
          } else {
            statusElem.textContent = "READY!";
          }
        }
      },
    });

    // Hold briefly at 100%
    tl.to("#preloader-section-content", {
      opacity: 0,
      y: -30,
      duration: 0.4,
      delay: 0.2,
      ease: "power2.in",
    });

    // Slide up preloader curtain panel
    tl.to("#preloader-section-wrapper", {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
    });
  });

  return children;
}

export default PreloaderGsap;
