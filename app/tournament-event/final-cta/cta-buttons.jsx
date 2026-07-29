"use client";

import ScaleButton from "../scaleButton";

export default function CtaButtons() {
    return (
        <div id="tournament-cta-btn-wrapper">
            <ScaleButton
                id="tournament-cta-btn"
                className="bg-[#FCD400] text-[#6E5C00] font-['Oswald'] px-10 py-4 hover:scale-105 uppercase text-sm md:text-base font-bold tracking-wider rounded-md shadow-xl transition-all"
            >
                Inquire About Tournament Services
            </ScaleButton>
        </div>
    );
}
