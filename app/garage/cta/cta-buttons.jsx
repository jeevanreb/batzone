"use client";

export default function CtaButtons() {
    return (
        <>
            <button
                id="garage-cta-btn-book"
                className="w-full md:w-auto bg-blue-700 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95"
            >
                Book a Restoration
            </button>
            <button
                id="garage-cta-btn-whatsapp"
                className="w-full md:w-auto bg-white text-neutral-900 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-all active:scale-95"
            >
                WhatsApp Expert
            </button>
        </>
    );
}
