"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function WhoWeAreGsap({ children }) {
    useGSAP(() => {
        // Animate the black card scale from bottom to original size (scrubbed)
        gsap.from("#who-we-are-card", {
            scale: 0.7,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#who-we-are-card",
                start: "top bottom",
                end: "top 35%",
                scrub: true,
            },
        });

        // Collect and animate the text elements (scrubbed stagger)
        const textElements = gsap.utils.toArray([
            "#who-we-are-subtitle",
            "#who-we-are-title",
            "#who-we-are-description p"
        ]);

        gsap.from(textElements, {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: "#who-we-are-card",
                start: "top 85%",
                end: "top 45%",
                scrub: true,
            },
        });

        // Animate the rupee coin image (scrubbed scale/rotation)
        gsap.from("#who-we-are-image-container", {
            opacity: 0,
            scale: 0.85,
            rotation: 4,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#who-we-are-card",
                start: "top 80%",
                end: "top 40%",
                scrub: true,
            },
        });
    });

    return children;
}

export default WhoWeAreGsap;
