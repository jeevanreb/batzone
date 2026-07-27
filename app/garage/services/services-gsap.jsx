"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ServicesGsap({ children }) {
    useGSAP(() => {
        // Section heading group reveal
        gsap.fromTo(
            ["#garage-services-head h2", "#garage-services-line", "#garage-services-sub"],
            { opacity: 0, y: 36 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.14,
                scrollTrigger: {
                    trigger: "#garage-services",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        // Cards stagger in from bottom with back ease
        const cards = gsap.utils.toArray("[id^='garage-service-card-']");

        gsap.fromTo(
            cards,
            { opacity: 0, y: 50, scale: 0.92 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.65,
                ease: "back.out(1.4)",
                stagger: 0.07,
                scrollTrigger: {
                    trigger: "#garage-services",
                    start: "top 68%",
                    toggleActions: "play none none none",
                },
            }
        );

        // GSAP hover micro-animation on each card
        cards.forEach((card) => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    y: -6,
                    boxShadow: "0 16px 40px -8px rgba(0,58,196,0.18)",
                    duration: 0.35,
                    ease: "power2.out",
                    overwrite: true,
                });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    y: 0,
                    boxShadow: "0 0px 0px 0px rgba(0,58,196,0)",
                    duration: 0.4,
                    ease: "power2.out",
                    overwrite: true,
                });
            });
        });
    });

    return children;
}

export default ServicesGsap;
