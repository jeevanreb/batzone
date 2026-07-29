"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function LedWallGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#tournament-ledwall",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // Heading reveal
        tl.fromTo(
            "#tournament-ledwall-heading",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" }
        );

        // Description reveal
        tl.fromTo(
            "#tournament-ledwall-desc",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.4"
        );

        // List items stagger
        tl.fromTo(
            ["#tournament-ledwall-item-0", "#tournament-ledwall-item-1", "#tournament-ledwall-item-2"],
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.15,
                ease: "power2.out",
            },
            "-=0.3"
        );

        // Accent boxes expansion
        tl.fromTo(
            ["#tournament-ledwall-accent-yellow", "#tournament-ledwall-accent-blue"],
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
                stagger: 0.2,
            },
            "-=0.7"
        );

        // Visual frame scale up
        tl.fromTo(
            "#tournament-ledwall-frame",
            { opacity: 0, scale: 0.92, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.6"
        );
    });

    return children;
}
