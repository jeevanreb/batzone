"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HeroSectionGsap({ children }) {
    useGSAP(() => {
        const playGarageHeroAnimation = () => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Concentric rings: scale up from 0 with spring
            tl.fromTo(
                ["#garage-hero-ring1", "#garage-hero-ring2", "#garage-hero-ring3"],
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.4,
                    ease: "back.out(1.2)",
                    stagger: 0.12,
                    transformOrigin: "center center",
                },
                0
            );

            // Badge slides down + fades in
            tl.fromTo(
                "#garage-hero-badge",
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6 },
                0.2
            );

            // Heading reveals line by line
            tl.fromTo(
                "#garage-hero-heading",
                { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
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
                "#garage-hero-desc",
                { opacity: 0, y: 28 },
                { opacity: 1, y: 0, duration: 0.7 },
                0.7
            );

            // CTA buttons pop in with back ease
            tl.fromTo(
                ["#garage-hero-btn-book", "#garage-hero-btn-quote"],
                { opacity: 0, scale: 0.85, y: 16 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    stagger: 0.12,
                },
                0.95
            );

            // Bat image floats up
            tl.fromTo(
                "#garage-hero-bat",
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                0.3
            );

            // Scroll hint bounces
            tl.fromTo(
                "#garage-hero-scroll-hint",
                { opacity: 0 },
                { opacity: 1, duration: 0.5 },
                1.4
            );
        };

        // Continuous subtle float on the bat image
        gsap.to("#garage-hero-bat", {
            y: -14,
            duration: 2.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.5,
        });

        // Scroll hint bounce loop
        gsap.to("#garage-hero-scroll-hint", {
            y: 8,
            duration: 0.9,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.6,
        });

        // Respect preloader if present
        const preloaderElem = document.getElementById("preloader-section-wrapper");
        const isPreloaderActive =
            preloaderElem &&
            preloaderElem.style.display !== "none" &&
            typeof window !== "undefined" &&
            !window.__preloaderStartRevealed;

        if (isPreloaderActive) {
            const handleReveal = () => playGarageHeroAnimation();
            window.addEventListener("preloaderStartReveal", handleReveal, { once: true });
            return () => window.removeEventListener("preloaderStartReveal", handleReveal);
        } else {
            playGarageHeroAnimation();
        }
    });

    return children;
}

export default HeroSectionGsap;
