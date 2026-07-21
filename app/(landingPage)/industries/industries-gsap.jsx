"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function IndustriesGsap({ children }) {
    useGSAP(() => {
        const heads = gsap.utils.toArray("#industries-head");

        gsap.from(heads, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: "#industries",
                start: "top 80%",
                end: "+=30%",
                scrub: true,
            },
        });

        const pills = gsap.utils.toArray("#industries-pill");

        gsap.from(pills, {
            opacity: 0,
            scale: 0.6,
            y: 20,
            duration: 0.8,
            ease: "back.out(1.6)",
            stagger: () => gsap.utils.random(0, 0.5),
            scrollTrigger: {
                trigger: "#industries",
                start: "top 70%",
                end: "+=45%",
                scrub: true,
            },
        });
    });

    return children;
}

export default IndustriesGsap;
