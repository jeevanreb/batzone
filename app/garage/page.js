"use client";
import {
    Dumbbell,
    Settings2,
    Hammer,
    Waves,
    Wrench,
    Hand,
    Link2,
    TrendingDown,
    ArrowDownToLine,
    Bandage,
    Sparkles,
    History,
    Replace,
    Timer,
    BadgeCheck,
    Globe,
    ChevronDown,
} from "lucide-react"; // npm install lucide-react (if not already installed)
import Herosection from "./herosection";
import Services from "./services";
import Craftmanship from "./craftmanship";

/**
 * Color reference (used as arbitrary Tailwind values below so this file
 * works without any tailwind.config.js changes):
 *   primary            #003ac4
 *   primary-hover      #2352ea
 *   on-background      #1c1b1b   (near-black text / CTA bg)
 *   surface            #fcf9f8   (cream page background)
 *   on-surface-variant #434655   (muted gray body text)
 *   outline-variant    #c4c5d8   (light borders)
 *   secondary-container#fcd400   (yellow badge)
 *   on-secondary-container #6e5c00
 */

export default function GarageSections() {

    return (
        <div className="">
            {/* Hero Section */}
            <Herosection />

            {/* Metrics Bar */}
            <div className="bg-[#003ac4] py-4">
                <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
                    {[
                        { Icon: Wrench, label: "15+ Expert Artisans" },
                        { Icon: Timer, label: "48hr Fast Track Available" },
                        { Icon: BadgeCheck, label: "Professional Grade Certified" },
                        { Icon: Globe, label: "Global Shipping" },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center gap-3">
                            <item.Icon size={20} />
                            <span className="text-xs font-semibold uppercase tracking-tight">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Services Bento Grid */}
            <Services />

            {/* Craftsmanship Section */}
            <Craftmanship />

            {/* CTA Banner */}
            <section className="py-16 bg-[#1c1b1b]">
                <div className="max-w-7xl mx-auto px-6 md:px-16 text-center text-white">
                    <h2
                        style={{ fontFamily: "var(--font-oswald)" }}
                        className="uppercase font-bold text-3xl md:text-4xl mb-4"
                    >
                        Ready to Elevate Your Game?
                    </h2>
                    <p className="text-base md:text-lg mb-8 max-w-xl mx-auto opacity-80">
                        Don&apos;t let a poorly balanced bat hold back your performance. Book your spot in the Garage today.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <button className="w-full md:w-auto bg-[#003ac4] px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#2352ea] transition-all">
                            Book a Restoration
                        </button>
                        <button className="w-full md:w-auto bg-white text-[#1c1b1b] px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-all">
                            WhatsApp Expert
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}