import Header from "@/components/layouts/Header";
import MaxWidth from "@/components/MaxWidth";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import garage from "@/assets/garage/MOBILE3.png";
import HeroSectionButtons from "./herosection-buttons";

export default function HeroSectionMarkup() {
    return (
        <>
            <MaxWidth
                id="garage-hero"
                header={true}
                fullRelative={true}
                className="relative overflow-hidden min-h-[100svh] lg:h-screen flex items-center pt-28 pb-16 md:pb-20 bg-white"
            >
                <Header />

                <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
                    {/* Text content */}
                    <div className="order-2 lg:order-1 max-w-2xl text-center lg:text-left">
                        <span
                            id="garage-hero-badge"
                            className="inline-block bg-yellow-300 text-yellow-900 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 md:mb-5"
                        >
                            Premium Service Centre
                        </span>

                        <h1
                            id="garage-hero-heading"
                            style={{ fontFamily: "var(--font-oswald)" }}
                            className="uppercase leading-tight font-bold text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight mb-4 md:mb-5"
                        >
                            BatZone Garage –{" "}
                            <span className="text-blue-700">Where Every Bat</span>{" "}
                            Performs at Its Best
                        </h1>

                        <p
                            id="garage-hero-desc"
                            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6 md:mb-8"
                        >
                            From elite professional setups to standard restorations, our
                            master craftsmen combine technical precision with high-energy
                            movement to maximize your willow&apos;s potential.
                        </p>

                        <div id="garage-hero-cta" className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                            <HeroSectionButtons />
                        </div>
                    </div>

                    {/* Bat image on concentric rings */}
                    <div
                        id="garage-hero-visual"
                        className="order-1 lg:order-2 relative w-[62%] xs:w-[52%] sm:w-[42%] md:w-[34%] lg:w-full lg:max-w-md aspect-square flex items-center justify-center shrink-0"
                    >
                        <div
                            id="garage-hero-ring1"
                            className="heroCircleCon c1 absolute w-[85%] aspect-square rounded-full blur-xs opacity-60 ring-1 ring-yellow-400 flex justify-center items-center"
                        >
                            <div
                                id="garage-hero-ring2"
                                className="c2 w-[67%] aspect-square rounded-full ring-2 ring-yellow-400 opacity-100! flex justify-center items-center"
                            >
                                <div
                                    id="garage-hero-ring3"
                                    className="c3 w-[67%] aspect-square rounded-full ring-2 ring-yellow-400 opacity-100! flex justify-center items-center"
                                />
                            </div>
                        </div>

                        <Image
                            id="garage-hero-bat"
                            src={garage}
                            alt="BatZone Garage – premium cricket bat"
                            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>

                <div
                    id="garage-hero-scroll-hint"
                    className="hidden sm:block absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
                >
                    <ChevronDown size={28} className="text-blue-700" />
                </div>
            </MaxWidth>
        </>
    );
}
