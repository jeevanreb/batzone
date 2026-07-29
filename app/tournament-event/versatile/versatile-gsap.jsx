"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function VersatileGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#tournament-versatile",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // Title and description reveal
        tl.fromTo(
            "#tournament-versatile-title",
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );

        tl.fromTo(
            "#tournament-versatile-desc",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.4"
        );

        tl.fromTo(
            "#tournament-versatile-line",
            { scaleX: 0, transformOrigin: "center center" },
            { scaleX: 1, duration: 0.6, ease: "power2.out" },
            "-=0.3"
        );

        // Staggered card reveals
        const cardSelectors = [
            "#tournament-versatile-card-0",
            "#tournament-versatile-card-1",
            "#tournament-versatile-card-2",
            "#tournament-versatile-card-3",
        ];

        tl.fromTo(
            cardSelectors,
            { opacity: 0, y: 35, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.12,
                ease: "back.out(1.5)",
            },
            "-=0.3"
        );
    });

    return children;
}
