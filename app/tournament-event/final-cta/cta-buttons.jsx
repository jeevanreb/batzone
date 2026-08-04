"use client";

import ScaleButton from "../scaleButton";

export default function CtaButtons() {
    return (
        <div id="tournament-cta-btn-wrapper">
            <ScaleButton
                as="a"
                id="tournament-cta-btn"
                href="https://wa.me/917892735114?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20tournament%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FCD400] text-[#6E5C00] px-10 py-4 hover:scale-105 uppercase text-sm md:text-base font-bold tracking-wider rounded-md shadow-xl transition-all inline-block"
            >
                Inquire About Tournament Services
            </ScaleButton>
        </div>
    );
}
