"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function WhoWeAreGsap({ children }) {
    useGSAP(() => {
        const isMobile = window.innerWidth < 1024;

        if (isMobile) {
            // Mobile: Smooth entrance timeline (no scrub lag, proper timing)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#who-we-are-card",
                    start: "top 82%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                "#who-we-are-card",
                { opacity: 0, scale: 0.94, y: 30 },
                { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
                0
            );

            const textElements = [
                "#who-we-are-subtitle",
                "#who-we-are-title",
                "#who-we-are-description p"
            ].filter(id => document.querySelector(id));

            tl.fromTo(
                textElements,
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", stagger: 0.12 },
                0.2
            );

            tl.fromTo(
                "#who-we-are-image-container",
                { opacity: 0, scale: 0.9, rotation: 3 },
                { opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: "power3.out" },
                0.3
            );
        } else {
            // Desktop: Scrubbed card expansion
            gsap.fromTo(
                "#who-we-are-card",
                { scale: 0.85, opacity: 0.8 },
                {
                    scale: 1,
                    opacity: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#who-we-are-card",
                        start: "top 90%",
                        end: "top 35%",
                        scrub: 1,
                    },
                }
            );

            const textElements = gsap.utils.toArray([
                "#who-we-are-subtitle",
                "#who-we-are-title",
                "#who-we-are-description p"
            ]);

            gsap.fromTo(
                textElements,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: "#who-we-are-card",
                        start: "top 85%",
                        end: "top 45%",
                        scrub: 1,
                    },
                }
            );

            gsap.fromTo(
                "#who-we-are-image-container",
                { opacity: 0, scale: 0.88, rotation: 4 },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#who-we-are-card",
                        start: "top 80%",
                        end: "top 40%",
                        scrub: 1,
                    },
                }
            );
        }
    });

    return children;
}

export default WhoWeAreGsap;
