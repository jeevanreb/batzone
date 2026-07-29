"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function EventSetupGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#tournament-eventsetup",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // Left visual image container slide in
        tl.fromTo(
            "#tournament-eventsetup-visual",
            { opacity: 0, x: -45, scale: 0.95 },
            { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out" }
        );

        // Heading & description
        tl.fromTo(
            "#tournament-eventsetup-heading",
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.5"
        );

        tl.fromTo(
            "#tournament-eventsetup-desc",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5 },
            "-=0.4"
        );

        // Operation items stagger
        const itemSelectors = [
            "#tournament-eventsetup-item-0",
            "#tournament-eventsetup-item-1",
            "#tournament-eventsetup-item-2",
            "#tournament-eventsetup-item-3",
            "#tournament-eventsetup-item-4",
        ];

        const iconSelectors = [
            "#tournament-eventsetup-icon-0",
            "#tournament-eventsetup-icon-1",
            "#tournament-eventsetup-icon-2",
            "#tournament-eventsetup-icon-3",
            "#tournament-eventsetup-icon-4",
        ];

        tl.fromTo(
            itemSelectors,
            { opacity: 0, x: 30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.12,
                ease: "power2.out",
            },
            "-=0.3"
        );

        tl.fromTo(
            iconSelectors,
            { scale: 0, rotate: -15 },
            {
                scale: 1,
                rotate: 0,
                duration: 0.5,
                stagger: 0.12,
                ease: "back.out(1.7)",
            },
            "-=0.6"
        );
    });

    return children;
}
