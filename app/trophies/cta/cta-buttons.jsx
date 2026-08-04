"use client";

export default function CtaButtons() {
    return (
        <>
            <a
                id="trophies-cta-btn-order"
                href="https://wa.me/917892735114?text=Hi%2C%20I%27d%20like%20to%20start%20a%20bulk%20trophy%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffe243] text-[#211b00] px-12 py-4 text-base sm:text-lg uppercase font-semibold active:scale-95 transition-transform hover:brightness-95 inline-block text-center"
            >
                Start Bulk Order
            </a>
            <a
                id="trophies-cta-btn-specialist"
                href="https://wa.me/917892735114?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20a%20trophy%20specialist"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#2352ea] text-[#2352ea] px-12 py-4 text-base sm:text-lg uppercase font-semibold hover:bg-[#2352ea]/5 active:scale-95 transition-all inline-block text-center"
            >
                Talk To Specialist
            </a>
        </>
    );
}
