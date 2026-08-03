"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function TrophyGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
                trigger: "#trophies-premium",
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        });

        // Label fades in
        tl.fromTo(
            "#trophies-premium-label",
            { opacity: 0, y: -12 },
            { opacity: 1, y: 0, duration: 0.5 },
            0
        );

        // Heading clips up
        tl.fromTo(
            "#trophies-premium-heading",
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

        // Toggle buttons fade + slide up
        tl.fromTo(
            "#trophies-premium-toggle",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            0.4
        );

        // Trophy cards stagger up with back ease
        const cards = gsap.utils.toArray("[id^='trophies-premium-card-']");
        tl.fromTo(
            cards,
            { opacity: 0, y: 50, scale: 0.94 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                stagger: 0.14,
                ease: "back.out(1.45)",
            },
            0.3
        );

        // Trophy icon pops in within each card
        const icons = gsap.utils.toArray("[id^='trophies-premium-icon-']");
        tl.fromTo(
            icons,
            { opacity: 0, scale: 0 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.55,
                stagger: 0.14,
                ease: "back.out(1.8)",
            },
            0.75
        );

        // Card footer reveal
        tl.fromTo(
            "[id^='trophies-premium-footer-']",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.14 },
            1.05
        );
    });

    return children;
}

export default TrophyGsap;

