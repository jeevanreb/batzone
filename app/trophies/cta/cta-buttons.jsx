"use client";

export default function CtaButtons() {
    return (
        <>
            <button
                id="trophies-cta-btn-order"
                className="bg-[#ffe243] text-[#211b00] px-12 py-4 text-base sm:text-lg uppercase font-semibold active:scale-95 transition-transform hover:brightness-95"
            >
                Start Bulk Order
            </button>
            <button
                id="trophies-cta-btn-specialist"
                className="border border-[#2352ea] text-[#2352ea] px-12 py-4 text-base sm:text-lg uppercase font-semibold hover:bg-[#2352ea]/5 active:scale-95 transition-all"
            >
                Talk To Specialist
            </button>
        </>
    );
}
