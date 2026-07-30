"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function WhatWeDoGsap({ children }) {
    useGSAP(() => {
        const isMobile = window.innerWidth < 1024;

        if (isMobile) {
            gsap.fromTo(
                "#what-we-do",
                { opacity: 0, scale: 0.95, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.75,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#what-we-do",
                        start: "top 82%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            const items = gsap.utils.toArray("#wwd-data");
            gsap.fromTo(
                items,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    ease: "power3.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: "#what-we-do",
                        start: "top 78%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        } else {
            gsap.fromTo(
                "#what-we-do",
                { scale: 0.88, opacity: 0.9 },
                {
                    scale: 1,
                    opacity: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#what-we-do",
                        start: "top 85%",
                        end: "+=60%",
                        scrub: 1,
                    },
                }
            );

            const items = gsap.utils.toArray("#wwd-data");
            gsap.fromTo(
                items,
                { opacity: 0, y: 35 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    stagger: 0.12,
                    scrollTrigger: {
                        trigger: "#what-we-do",
                        start: "top 75%",
                        end: "+=50%",
                        scrub: 1,
                    },
                }
            );
        }
    });

    return children;
}

export default WhatWeDoGsap;
