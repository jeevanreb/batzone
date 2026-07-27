import Header from "@/components/layouts/Header";
import MaxWidth from "@/components/MaxWidth";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import garage from "@/assets/garage/MOBILE3.png";

export default function Herosection() {
    return (
        <>
            <MaxWidth
                header={true}
                fullRelative={true}
                className="relative overflow-hidden min-h-[100svh] lg:h-screen flex items-center pt-28 pb-16 md:pb-20 bg-white"
            >
                <Header />

                <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
                    {/* Text content */}
                    <div className="order-2 lg:order-1 max-w-2xl text-center lg:text-left">
                        <span className="inline-block bg-[#fcd400] text-[#6e5c00] px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 md:mb-5">
                            Premium Service Centre
                        </span>

                        <h1
                            style={{ fontFamily: "var(--font-oswald)" }}
                            className="uppercase leading-[1.1] sm:leading-[1.05] font-bold text-[#1c1b1b] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight mb-4 md:mb-5"
                        >
                            BatZone Garage – <span className="text-[#003ac4]">Where Every Bat</span> Performs at Its Best
                        </h1>

                        <p className="text-[#434655] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6 md:mb-8">
                            From elite professional setups to standard restorations, our master craftsmen combine
                            technical precision with high-energy movement to maximize your willow&apos;s potential.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                            <button className="bg-[#003ac4] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#2352ea] transition-all active:scale-95">
                                Book a Restoration
                            </button>
                            <button className="border-2 border-[#003ac4] text-[#003ac4] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#003ac4]/5 transition-all active:scale-95">
                                Get a Custom Quote
                            </button>
                        </div>
                    </div>

                    {/* Mobile image on concentric rings */}
                    <div className="order-1 lg:order-2 relative w-[62%] xs:w-[52%] sm:w-[42%] md:w-[34%] lg:w-full lg:max-w-md aspect-square flex items-center justify-center shrink-0">
                        <div className="heroCircleCon c1 absolute w-[85%] aspect-square rounded-full blur-xs opacity-60 ring-1 ring-[#f2c204] flex justify-center items-center">
                            <div className="c2 w-[67%] aspect-square rounded-full ring-2 ring-[#f2c204] opacity-100! flex justify-center items-center">
                                <div className="c3 w-[67%] aspect-square rounded-full ring-2 ring-[#f2c204] opacity-100! flex justify-center items-center"></div>
                            </div>
                        </div>

                        <Image
                            src={garage}
                            alt="BatZone Garage mobile app"
                            className="relative z-10 w-[100%] h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>

                <div className="hidden sm:block absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown size={28} className="text-[#003ac4]" />
                </div>
            </MaxWidth>
        </>
    )
}