"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function MedalGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
                trigger: "#trophies-medals",
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        });

        // Label fades in
        tl.fromTo(
            "#trophies-medals-label",
            { opacity: 0, y: -12 },
            { opacity: 1, y: 0, duration: 0.5 },
            0
        );

        // Heading clips up
        tl.fromTo(
            "#trophies-medals-heading",
            { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
            {
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 0.85,
                ease: "power4.out",
            },
            0.1
        );

        // Description fades + slides up
        tl.fromTo(
            "#trophies-medals-desc",
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.7 },
            0.35
        );

        // Feature list items stagger
        tl.fromTo(
            "[id^='trophies-medals-feature-']",
            { opacity: 0, x: -24 },
            { opacity: 1, x: 0, duration: 0.5, stagger: 0.12 },
            0.5
        );

        // CTA button pops in
        tl.fromTo(
            "#trophies-medals-btn",
            { opacity: 0, scale: 0.85, y: 16 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
            0.8
        );

        // Medal visuals scale in
        tl.fromTo(
            "#trophies-medals-visual-gold",
            { opacity: 0, scale: 0.85, x: -30 },
            { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "back.out(1.4)" },
            0.2
        );

        tl.fromTo(
            "#trophies-medals-visual-silver",
            { opacity: 0, scale: 0.85, x: 30, y: 20 },
            { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.8, ease: "back.out(1.4)" },
            0.45
        );
    });

    return children;
}

export default MedalGsap;

