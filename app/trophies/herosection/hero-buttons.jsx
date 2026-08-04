"use client";

export default function HeroButtons() {
    return (
        <>
            <a
                id="trophies-hero-btn-explore"
                href="#trophies-premium"
                className="bg-[#2352ea] text-white px-10 py-4 text-base sm:text-lg uppercase font-semibold active:scale-95 transition-transform hover:brightness-110 inline-block text-center"
            >
                Explore Collection
            </a>
            <a
                id="trophies-hero-btn-quote"
                href="https://wa.me/917892735114?text=Hi%2C%20I%27d%20like%20a%20custom%20trophy%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#d4d5dd] text-[#111318] px-10 py-4 text-base sm:text-lg uppercase font-semibold hover:bg-black/5 active:scale-95 transition-all inline-block text-center"
            >
                Request Custom Quote
            </a>
        </>
    );
}

