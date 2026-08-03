"use client";

export default function HeroButtons() {
    return (
        <>
            <button
                id="trophies-hero-btn-explore"
                className="bg-[#2352ea] text-white px-10 py-4 text-base sm:text-lg uppercase font-semibold active:scale-95 transition-transform hover:brightness-110"
            >
                Explore Collection
            </button>
            <button
                id="trophies-hero-btn-quote"
                className="border border-[#d4d5dd] text-[#111318] px-10 py-4 text-base sm:text-lg uppercase font-semibold hover:bg-black/5 active:scale-95 transition-all"
            >
                Request Custom Quote
            </button>
        </>
    );
}

