"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CtaGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#tournament-cta",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // Background pattern fade
        tl.fromTo(
            "#tournament-cta-bg",
            { opacity: 0 },
            { opacity: 0.15, duration: 0.8 }
        );

        // Heading reveal
        tl.fromTo(
            "#tournament-cta-heading",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            "-=0.5"
        );

        // Description reveal
        tl.fromTo(
            "#tournament-cta-desc",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.4"
        );

        // Button pop in
        tl.fromTo(
            "#tournament-cta-btn-wrapper",
            { opacity: 0, scale: 0.8, y: 15 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                ease: "back.out(1.8)",
            },
            "-=0.3"
        );
    });

    return children;
}
