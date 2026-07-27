"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function CtaGsap({ children }) {
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
                trigger: "#garage-cta",
                start: "top 78%",
                toggleActions: "play none none none",
            },
        });

        // Heading: word-by-word stagger reveal using clip-path
        tl.fromTo(
            "#garage-cta-heading",
            { opacity: 0, y: 50, clipPath: "inset(0 0 100% 0)" },
            {
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 0.9,
                ease: "power4.out",
            },
            0
        );

        // Paragraph fades up
        tl.fromTo(
            "#garage-cta-sub",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7 },
            0.35
        );

        // Buttons scale + slide up with back ease
        tl.fromTo(
            ["#garage-cta-btn-book", "#garage-cta-btn-whatsapp"],
            { opacity: 0, y: 24, scale: 0.88 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.6)",
                stagger: 0.14,
            },
            0.65
        );
    });

    return children;
}

export default CtaGsap;
