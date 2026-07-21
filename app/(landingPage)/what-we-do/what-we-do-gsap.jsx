"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function WhatWeDoGsap({ children }) {

    useGSAP(
        () => {

            gsap.from("#what-we-do", {
                scale: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#what-we-do",
                    start: "top bottom",
                    end: "+=100%",
                    scrub: true,
                },
            });

            const items = gsap.utils.toArray("#wwd-data");

            gsap.from(items, {
                opacity: 0,
                y: 40,
                duration: 0.7,
                ease: "power2.out",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: "#what-we-do",
                    start: "top 75%",
                    end: "+=70%",
                    scrub: true,
                },
            });
        },
    )

    return children;
}

export default WhatWeDoGsap;
