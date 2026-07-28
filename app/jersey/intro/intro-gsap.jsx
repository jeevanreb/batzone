"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function IntroGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
                trigger: "#jersey-intro",
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        // Label bar sweeps in from left
        tl.fromTo(
            "#jersey-intro-label",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 0.7 },
            0
        );

        // Heading clips in upward
        tl.fromTo(
            "#jersey-intro-heading",
            { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
            {
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 0.85,
                ease: "power4.out",
            },
            0.15
        );

        // Description fades up
        tl.fromTo(
            "#jersey-intro-desc",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7 },
            0.4
        );

        // Feature pills stagger in
        const features = gsap.utils.toArray("[id^='jersey-intro-feature-']");
        tl.fromTo(
            features,
            { opacity: 0, x: -20, scale: 0.95 },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.5)",
            },
            0.55
        );

        // Image panel slides from right
        tl.fromTo(
            "#jersey-intro-image-wrap",
            { opacity: 0, x: 60 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
            0.1
        );

        // Badge pops up from bottom
        tl.fromTo(
            "#jersey-intro-badge",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" },
            0.7
        );
    });

    return children;
}

export default IntroGsap;
