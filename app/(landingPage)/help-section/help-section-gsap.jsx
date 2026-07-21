"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HelpSectionGsap({ children }) {

    useGSAP(
        () => {

            const items = gsap.utils.toArray("#hs-data");

            gsap.from(items, {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power2.out",
                stagger: () => gsap.utils.random(0, 0.8),
                scrollTrigger: {
                    trigger: "#help-section",
                    start: "top 75%",
                    end: "+=50%",
                    scrub: true,
                },
            });
        },
    )

    return children;
}

export default HelpSectionGsap;
