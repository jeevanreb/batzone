"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function WhyChooseGsap({ children }) {
    useGSAP(() => {
        const items = gsap.utils.toArray("[id^='trophies-whychoose-item-']");

        // Items slide up with stagger
        gsap.fromTo(
            items,
            { opacity: 0, y: 40, scale: 0.92 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.65,
                ease: "back.out(1.4)",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: "#trophies-whychoose",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    });

    return children;
}

export default WhyChooseGsap;
