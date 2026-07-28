"use client";

export default function HeroButtons() {
    return (
        <>
            <a
                id="jersey-hero-btn-customize"
                href="https://wa.me/917892735114?text=Hi%2C%20I%27d%20like%20to%20customize%20a%20jersey"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white text-sm font-bold px-10 py-4 uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 rounded-lg"
            >
                Start Customizing
            </a>
            <a
                id="jersey-hero-btn-quote"
                href="https://wa.me/917892735114?text=Hi%2C%20I%27d%20like%20a%20bulk%20jersey%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-700 text-blue-700 text-sm font-bold px-10 py-4 uppercase tracking-widest hover:bg-blue-700/5 transition-all active:scale-95 rounded-lg"
            >
                Get Bulk Quote
            </a>
        </>
    );
}
