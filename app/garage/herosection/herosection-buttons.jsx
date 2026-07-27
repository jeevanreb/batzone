"use client";

export default function HeroSectionButtons() {
    return (
        <>
            <button
                id="garage-hero-btn-book"
                className="bg-blue-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95"
            >
                Book a Restoration
            </button>
            <button
                id="garage-hero-btn-quote"
                className="border-2 border-blue-700 text-blue-700 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-700/5 transition-all active:scale-95"
            >
                Get a Custom Quote
            </button>
        </>
    );
}
