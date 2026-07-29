"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroGsap({ children }) {
    useGSAP(() => {
        const playHeroAnimation = () => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Concentric rings: scale up from 0 with spring
            tl.fromTo(
                ["#tournament-hero-ring1", "#tournament-hero-ring2", "#tournament-hero-ring3"],
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.3,
                    ease: "back.out(1.3)",
                    stagger: 0.15,
                    transformOrigin: "center center",
                },
                0
            );

            // Badge slides down + fades in
            tl.fromTo(
                "#tournament-hero-badge",
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6 },
                0.2
            );

            // Heading reveals with clipPath
            tl.fromTo(
                "#tournament-hero-heading",
                { opacity: 0, y: 35, clipPath: "inset(0 0 100% 0)" },
                {
                    opacity: 1,
                    y: 0,
                    clipPath: "inset(0 0 0% 0)",
                    duration: 0.9,
                    ease: "power4.out",
                },
                0.4
            );

            // Description fades + slides up
            tl.fromTo(
                "#tournament-hero-desc",
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.7 },
                0.7
            );

            // CTA buttons pop in
            tl.fromTo(
                "#tournament-hero-cta",
                { opacity: 0, scale: 0.85, y: 15 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                },
                0.9
            );

            // Visual image floats in
            tl.fromTo(
                "#tournament-hero-image",
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
                0.3
            );

            // Scroll hint reveal
            tl.fromTo(
                "#tournament-hero-scroll-hint",
                { opacity: 0 },
                { opacity: 1, duration: 0.5 },
                1.3
            );
        };

        // Continuous subtle float on hero image
        gsap.to("#tournament-hero-image", {
            y: -12,
            duration: 2.6,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.4,
        });

        // Continuous bounce on scroll hint
        gsap.to("#tournament-hero-scroll-hint", {
            y: 8,
            duration: 0.9,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.5,
        });

        // Respect preloader if present
        const preloaderElem = document.getElementById("preloader-section-wrapper");
        const isPreloaderActive =
            preloaderElem &&
            preloaderElem.style.display !== "none" &&
            typeof window !== "undefined" &&
            !window.__preloaderStartRevealed;

        if (isPreloaderActive) {
            const handleReveal = () => playHeroAnimation();
            window.addEventListener("preloaderStartReveal", handleReveal, { once: true });
            return () => window.removeEventListener("preloaderStartReveal", handleReveal);
        } else {
            playHeroAnimation();
        }
    });

    return children;
}
