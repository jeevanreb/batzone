"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function WhyBatzoneGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
                trigger: "#jersey-why",
                start: "top 72%",
                toggleActions: "play none none reverse",
            },
        });

        // Label slides from left
        tl.fromTo(
            "#jersey-why-label",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 0.7 },
            0
        );

        // Heading clips up
        tl.fromTo(
            "#jersey-why-heading",
            { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
            {
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 0.85,
                ease: "power4.out",
            },
            0.15
        );

        // Feature items stagger in from left
        const features = gsap.utils.toArray("[id^='jersey-why-feature-']");
        tl.fromTo(
            features,
            { opacity: 0, x: -40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.55,
                stagger: 0.12,
                ease: "power2.out",
            },
            0.4
        );

        // Photo grid columns: staggered slide from bottom
        tl.fromTo(
            "#jersey-why-img1",
            { opacity: 0, y: 50, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9 },
            0.2
        );

        tl.fromTo(
            "#jersey-why-img2",
            { opacity: 0, y: 50, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9 },
            0.35
        );

        // Stat cards pop in with back ease
        tl.fromTo(
            "#jersey-why-stat1",
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1, duration: 0.65, ease: "back.out(1.7)" },
            0.5
        );

        tl.fromTo(
            "#jersey-why-stat2",
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1, duration: 0.65, ease: "back.out(1.7)" },
            0.65
        );

        // Stat numbers count-up effect (visual punch)
        ScrollTrigger.create({
            trigger: "#jersey-why",
            start: "top 72%",
            once: true,
            onEnter: () => {
                // Pulse stat boxes once loaded
                gsap.fromTo(
                    ["#jersey-why-stat1", "#jersey-why-stat2"],
                    { boxShadow: "0 0 0 0 rgba(59,130,246,0)" },
                    {
                        boxShadow: "0 0 0 0 rgba(59,130,246,0)",
                        duration: 0.4,
                        ease: "power2.out",
                    }
                );
            },
        });
    });

    return children;
}

export default WhyBatzoneGsap;
