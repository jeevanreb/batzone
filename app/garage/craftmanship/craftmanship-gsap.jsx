"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function CraftmanshipGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
                trigger: "#garage-craft",
                start: "top 72%",
                toggleActions: "play none none none",
            },
        });

        // Image panel slides from left + fades
        tl.fromTo(
            "#garage-craft-image-wrap",
            { opacity: 0, x: -70 },
            { opacity: 1, x: 0, duration: 1 },
            0
        );

        // Image badge pops up from bottom
        tl.fromTo(
            "#garage-craft-badge",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" },
            0.5
        );

        // Heading slides up
        tl.fromTo(
            "#garage-craft-heading",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7 },
            0.2
        );

        // Sub-paragraph fades
        tl.fromTo(
            "#garage-craft-sub",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6 },
            0.45
        );

        // Pillar items stagger in from right
        const pillars = gsap.utils.toArray("[id^='garage-craft-pillar-']");
        tl.fromTo(
            pillars,
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.14,
                ease: "power2.out",
            },
            0.6
        );

        // Number badges scale pop
        const nums = gsap.utils.toArray("[id^='garage-craft-num-']");
        tl.fromTo(
            nums,
            { scale: 0 },
            {
                scale: 1,
                duration: 0.5,
                stagger: 0.14,
                ease: "back.out(1.7)",
            },
            0.65
        );
    });

    return children;
}

export default CraftmanshipGsap;
