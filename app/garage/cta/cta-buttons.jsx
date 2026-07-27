"use client";

export default function CtaButtons() {
    return (
        <>
            {/* <button
                id="garage-cta-btn-book"
                className="w-full md:w-auto bg-blue-700 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95"
            >
                Book a Restoration
            </button> */}
            <a
                id="garage-cta-btn-whatsapp"
                href="https://wa.me/917892735114?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20a%20bat%20expert"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-white text-neutral-900 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-all active:scale-100 cursor-pointer inline-block text-center"
            >
                WhatsApp Expert
            </a>
        </>
    );
}
