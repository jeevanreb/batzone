"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ServicesGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
                trigger: "#jersey-services",
                start: "top 72%",
                toggleActions: "play none none none",
            },
        });

        // Label fades in
        tl.fromTo(
            "#jersey-services-label",
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.5 },
            0
        );

        // Heading clips up
        tl.fromTo(
            "#jersey-services-heading",
            { opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" },
            {
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 0.8,
                ease: "power4.out",
            },
            0.1
        );

        // Accent line grows from left
        tl.fromTo(
            "#jersey-services-line",
            { scaleX: 0, transformOrigin: "left" },
            { scaleX: 1, duration: 0.6, ease: "power2.out" },
            0.35
        );

        // Featured card slides from left with scale
        tl.fromTo(
            "#jersey-services-card-featured",
            { opacity: 0, x: -60, scale: 0.96 },
            { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" },
            0.2
        );

        // Badge pops in
        tl.fromTo(
            "#jersey-services-badge",
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
            0.8
        );

        // Small cards stagger from right
        const smallCards = gsap.utils.toArray("[id^='jersey-services-card-']");
        tl.fromTo(
            smallCards,
            { opacity: 0, x: 50, y: 20 },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: "power2.out",
            },
            0.35
        );

        // CTA card slides up
        tl.fromTo(
            "#jersey-services-cta-card",
            { opacity: 0, y: 40, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.3)" },
            0.75
        );
    });

    return children;
}

export default ServicesGsap;
