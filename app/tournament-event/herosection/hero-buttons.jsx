"use client";

import ScaleButton from "../scaleButton";

export default function HeroButtons() {
    return (
        <div
            id="tournament-hero-cta"
            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4"
        >
            <ScaleButton className="bg-[#003AC4] text-white font-['Oswald'] px-10 py-4 hover:brightness-110 uppercase text-sm font-bold tracking-wider rounded-md">
                Book a Consultation
            </ScaleButton>
            <ScaleButton className="border-2 border-black text-black font-['Oswald'] px-10 py-4 hover:bg-black hover:text-white uppercase text-sm font-bold tracking-wider rounded-md transition-colors">
                View Past Events
            </ScaleButton>
        </div>
    );
}
