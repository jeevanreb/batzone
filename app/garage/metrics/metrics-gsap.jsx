"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function MetricsGsap({ children }) {
    useGSAP(() => {
        const items = gsap.utils.toArray([
            "#garage-metric-0",
            "#garage-metric-1",
            "#garage-metric-2",
            "#garage-metric-3",
        ]);

        // Slide in from left with stagger
        gsap.fromTo(
            items,
            { opacity: 0, x: -40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: "#garage-metrics",
                    start: "top 88%",
                    toggleActions: "play none none none",
                },
            }
        );
    });

    return children;
}

export default MetricsGsap;
