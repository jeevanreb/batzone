"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function AmbassadorGsap({ children }) {
    useGSAP(() => {
        // Main Section Entrance Timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#ambassador-card",
                start: "top 78%",
                toggleActions: "play none none reverse",
            },
        });

        // Ambient background glow pulse
        tl.fromTo(
            ["#ambassador-bg-glow", "#ambassador-bg-glow-2"],
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" },
            0
        );

        // Ambassador Image: Smooth 3D scale and reveal
        tl.fromTo(
            "#ambassador-image-container",
            { opacity: 0, scale: 0.94, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: "power3.out" },
            0.1
        );

        // Image badge pop-in
        tl.fromTo(
            "#ambassador-image-badge",
            { opacity: 0, y: 20, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
            0.5
        );

        // Text elements smooth staggered reveal
        const ambassadorTextElements = [
            "#ambassador-subtitle-wrapper",
            "#ambassador-title",
            "#ambassador-role",
            "#ambassador-bio-1",
            "#ambassador-bio-2"
        ].filter(id => document.querySelector(id));

        tl.fromTo(
            ambassadorTextElements,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", stagger: 0.12 },
            0.3
        );

        // Review Card: Premium Scale Entrance (Scale 0.94 -> 1 instead of abrupt scale 0)
        gsap.fromTo(
            "#ambassador-review-card",
            { opacity: 0, scale: 0.94, y: 25 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.85,
                ease: "back.out(1.4)",
                scrollTrigger: {
                    trigger: "#ambassador-review-card",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    });

    return children;
}

export default AmbassadorGsap;
