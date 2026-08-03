"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function CtaGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
                trigger: "#trophies-cta",
                start: "top 78%",
                toggleActions: "play none none reverse",
            },
        });

        // Heading reveals with clipPath
        tl.fromTo(
            "#trophies-cta-heading",
            { opacity: 0, y: 50, clipPath: "inset(0 0 100% 0)" },
            {
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 0.9,
                ease: "power4.out",
            },
            0
        );

        // Description fades + slides up
        tl.fromTo(
            "#trophies-cta-desc",
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.7 },
            0.35
        );

        // Buttons pop in with back ease
        tl.fromTo(
            ["#trophies-cta-btn-order", "#trophies-cta-btn-specialist"],
            { opacity: 0, y: 24, scale: 0.88 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.6)",
                stagger: 0.14,
            },
            0.6
        );
    });

    return children;
}

export default CtaGsap;
