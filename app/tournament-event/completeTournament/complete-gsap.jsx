"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CompleteGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#tournament-complete",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // Section heading animation
        tl.fromTo(
            "#tournament-complete-heading",
            { opacity: 0, y: -25 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
        );

        // Accent divider line expansion
        tl.fromTo(
            "#tournament-complete-line",
            { scaleX: 0, transformOrigin: "center center" },
            { scaleX: 1, duration: 0.6, ease: "power2.out" },
            "-=0.4"
        );

        // Cards staggered entrance
        const cardSelectors = [
            "#tournament-complete-card-0",
            "#tournament-complete-card-1",
            "#tournament-complete-card-2",
            "#tournament-complete-card-3",
            "#tournament-complete-card-4",
        ];

        tl.fromTo(
            cardSelectors,
            { opacity: 0, y: 40, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.12,
                ease: "back.out(1.4)",
            },
            "-=0.3"
        );
    });

    return children;
}
