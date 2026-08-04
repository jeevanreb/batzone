"use client";

import ScaleButton from "../scaleButton";

export default function HeroButtons() {
    return (
        <div
            id="tournament-hero-cta"
            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4"
        >
            <ScaleButton
                as="a"
                href="https://wa.me/917892735114?text=Hi%2C%20I%27d%20like%20to%20book%20a%20tournament%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#003AC4] text-white px-10 py-4 hover:brightness-110 uppercase text-sm font-bold tracking-wider rounded-md inline-block"
            >
                Book a Consultation
            </ScaleButton>
            <ScaleButton className="border-2 border-black text-black px-10 py-4 hover:bg-black hover:text-white uppercase text-sm font-bold tracking-wider rounded-md transition-colors">
                View Past Events
            </ScaleButton>
        </div>
    );
}
