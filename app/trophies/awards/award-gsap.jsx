"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function AwardGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
                trigger: "#trophies-awards",
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        });

        // Label fades in
        tl.fromTo(
            "#trophies-awards-label",
            { opacity: 0, y: -12 },
            { opacity: 1, y: 0, duration: 0.5 },
            0
        );

        // Heading clips up
        tl.fromTo(
            "#trophies-awards-heading",
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

        // Accent line grows from center
        tl.fromTo(
            "#trophies-awards-line",
            { scaleX: 0, transformOrigin: "center center" },
            { scaleX: 1, duration: 0.6, ease: "power2.out" },
            0.4
        );

        // Award cards stagger up
        const cards = gsap.utils.toArray("[id^='trophies-awards-card-']");
        tl.fromTo(
            cards,
            { opacity: 0, y: 45, scale: 0.93 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.65,
                stagger: 0.12,
                ease: "back.out(1.35)",
            },
            0.45
        );
    });

    return children;
}

export default AwardGsap;

