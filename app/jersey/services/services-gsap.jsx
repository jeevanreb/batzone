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
                toggleActions: "play none none reverse",
            },
        });

        // Label
        tl.fromTo(
            "#jersey-services-label",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5 },
            0
        );

        // Heading
        tl.fromTo(
            "#jersey-services-heading",
            {
                opacity: 0,
                y: 50,
                clipPath: "inset(0 0 100% 0)",
            },
            {
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 0.8,
                ease: "power4.out",
            },
            0.1
        );

        // Line
        tl.fromTo(
            "#jersey-services-line",
            {
                opacity: 0,
                y: 20,
                scaleX: 0,
                transformOrigin: "left",
            },
            {
                opacity: 1,
                y: 0,
                scaleX: 1,
                duration: 0.6,
                ease: "power2.out",
            },
            0.3
        );

        // Featured Card
        tl.fromTo(
            "#jersey-services-card-featured",
            {
                opacity: 0,
                y: 80,
                scale: 0.96,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
            },
            0.2
        );

        // Badge
        tl.fromTo(
            "#jersey-services-badge",
            {
                opacity: 0,
                y: 30,
                scale: 0.8,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
            },
            0.8
        );

        // Small Cards
        const smallCards = gsap.utils.toArray("[id^='jersey-services-card-']");

        tl.fromTo(
            smallCards,
            {
                opacity: 0,
                y: 50,
                scale: 0.96,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
            },
            0.4
        );

        // CTA
        tl.fromTo(
            "#jersey-services-cta-card",
            {
                opacity: 0,
                y: 60,
                scale: 0.95,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.3)",
            },
            0.9
        );
    });

    return children;
}

export default ServicesGsap;