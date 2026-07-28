"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HeroGsap({ children }) {
    useGSAP(() => {
        const playJerseyHeroAnimation = () => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Concentric rings: scale up from 0 with spring
            tl.fromTo(
                ["#jersey-hero-ring1", "#jersey-hero-ring2", "#jersey-hero-ring3"],
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
                "#jersey-hero-badge",
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6 },
                0.2
            );

            // Heading clips in from bottom
            tl.fromTo(
                "#jersey-hero-heading",
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
                "#jersey-hero-desc",
                { opacity: 0, y: 28 },
                { opacity: 1, y: 0, duration: 0.7 },
                0.7
            );

            // CTA buttons pop in with back ease
            tl.fromTo(
                ["#jersey-hero-btn-customize", "#jersey-hero-btn-quote"],
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

            // Jersey image floats up dramatically
            tl.fromTo(
                "#jersey-hero-image",
                { opacity: 0, y: 60, scale: 0.92 },
                { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out" },
                0.3
            );

            // Scroll hint fades in last
            tl.fromTo(
                "#jersey-hero-scroll-hint",
                { opacity: 0 },
                { opacity: 1, duration: 0.5 },
                1.4
            );
        };

        // Continuous subtle float on jersey image
        gsap.to("#jersey-hero-image", {
            y: -14,
            duration: 2.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.5,
        });

        // Scroll hint bounce loop
        gsap.to("#jersey-hero-scroll-hint", {
            y: 8,
            duration: 0.9,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.6,
        });

        // Concentric rings slow rotation
        gsap.to("#jersey-hero-ring1", {
            rotation: 360,
            duration: 18,
            ease: "none",
            repeat: -1,
            transformOrigin: "center center",
        });

        gsap.to("#jersey-hero-ring2", {
            rotation: -360,
            duration: 24,
            ease: "none",
            repeat: -1,
            transformOrigin: "center center",
        });

        // Respect preloader if present
        const preloaderElem = document.getElementById("preloader-section-wrapper");
        const isPreloaderActive =
            preloaderElem &&
            preloaderElem.style.display !== "none" &&
            typeof window !== "undefined" &&
            !window.__preloaderStartRevealed;

        if (isPreloaderActive) {
            const handleReveal = () => playJerseyHeroAnimation();
            window.addEventListener("preloaderStartReveal", handleReveal, { once: true });
            return () => window.removeEventListener("preloaderStartReveal", handleReveal);
        } else {
            playJerseyHeroAnimation();
        }
    });

    return children;
}

export default HeroGsap;
