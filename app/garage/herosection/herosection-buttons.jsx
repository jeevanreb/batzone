"use client";

export default function HeroSectionButtons() {
    return (
        <>
            <a
                id="garage-hero-btn-book"
                href="https://wa.me/917892735114?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20a%20bat%20expert"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95"
            >
                Book a Restoration
            </a>
            <a
                id="garage-hero-btn-quote"
                href="https://wa.me/917892735114?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20a%20bat%20expert"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-700 text-blue-700 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-700/5 transition-all active:scale-95"
            >
                Get a Custom Quote
            </a>
        </>
    );
}
