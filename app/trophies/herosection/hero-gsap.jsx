"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HeroGsap({ children }) {
    useGSAP(() => {
        const playTrophiesHeroAnimation = () => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Concentric rings: scale up from 0 with spring
            tl.fromTo(
                ["#trophies-hero-ring1", "#trophies-hero-ring2", "#trophies-hero-ring3"],
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
                "#trophies-hero-badge",
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6 },
                0.2
            );

            // Heading reveals with clipPath
            tl.fromTo(
                "#trophies-hero-heading",
                { opacity: 0, y: 45, clipPath: "inset(0 0 100% 0)" },
                {
                    opacity: 1,
                    y: 0,
                    clipPath: "inset(0 0 0% 0)",
                    duration: 0.95,
                    ease: "power4.out",
                },
                0.4
            );

            // Description fades + slides up
            tl.fromTo(
                "#trophies-hero-desc",
                { opacity: 0, y: 28 },
                { opacity: 1, y: 0, duration: 0.7 },
                0.7
            );

            // CTA buttons pop in with back ease
            tl.fromTo(
                ["#trophies-hero-btn-explore", "#trophies-hero-btn-quote"],
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

            // Trophy image floats in
            tl.fromTo(
                "#trophies-hero-image",
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                0.3
            );
        };

        // Continuous subtle float on the trophy image
        gsap.to("#trophies-hero-image", {
            y: -14,
            duration: 2.8,
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
            const handleReveal = () => playTrophiesHeroAnimation();
            window.addEventListener("preloaderStartReveal", handleReveal, { once: true });
            return () => window.removeEventListener("preloaderStartReveal", handleReveal);
        } else {
            playTrophiesHeroAnimation();
        }
    });

    return children;
}

export default HeroGsap;