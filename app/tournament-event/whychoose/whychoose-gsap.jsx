"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WhyChooseGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#tournament-whychoose",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // Header title reveal
        tl.fromTo(
            "#tournament-whychoose-title",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
        );

        tl.fromTo(
            "#tournament-whychoose-desc",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.4"
        );

        // Divider line scaleX
        tl.fromTo(
            "#tournament-whychoose-line",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.7, ease: "power2.out" },
            "-=0.4"
        );

        // Items stagger
        const itemSelectors = [
            "#tournament-whychoose-item-0",
            "#tournament-whychoose-item-1",
            "#tournament-whychoose-item-2",
        ];

        tl.fromTo(
            itemSelectors,
            { opacity: 0, y: 40, scale: 0.93 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.4)",
            },
            "-=0.4"
        );
    });

    return children;
}
