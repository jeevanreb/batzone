"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function AmbassadorGsap({ children }) {
    useGSAP(() => {
        // Premium Image Fade & Subtle Reveal (Opacity 0 -> 1, scale 0.95 -> 1)
        gsap.from("#ambassador-image-container", {
            opacity: 0,
            scale: 0.95,
            y: 25,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#ambassador-card",
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
            },
        });

        // Text elements animate smoothly from down to position (y: 40 -> 0, opacity: 0 -> 1)
        const ambassadorTextElements = gsap.utils.toArray([
            "#ambassador-subtitle-wrapper",
            "#ambassador-title",
            "#ambassador-role",
            "#ambassador-bio-1",
            "#ambassador-bio-2"
        ]);

        gsap.from(ambassadorTextElements, {
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
                trigger: "#ambassador-card",
                start: "top 75%",
                end: "top 40%",
                scrub: 1,
            },
        });

        // Review Card Scale Animation: scale 0 -> 1 (opacity 0 -> 1)
        gsap.from("#ambassador-review-card", {
            opacity: 0,
            scale: 0,
            transformOrigin: "center center",
            duration: 1,
            ease: "back.out(1.4)",
            scrollTrigger: {
                trigger: "#ambassador-review-card",
                start: "top 92%",
                end: "top 60%",
                scrub: 1,
            },
        });
    });

    return children;
}

export default AmbassadorGsap;
