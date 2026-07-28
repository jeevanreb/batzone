import MaxWidth from "@/components/MaxWidth";
import Header from "@/components/layouts/Header";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import heroimg from "@/assets/jersey/jerhero.jpg";

export default function Hero() {
    return (
        <MaxWidth
            id="jersey-hero"
            header={true}
            fullRelative={true}
            className="relative overflow-hidden min-h-[100svh] lg:h-screen flex items-center pt-28 pb-16 md:pb-20 bg-white"
        >
            <Header />

            <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
                {/* Text content */}
                <div className="order-2 lg:order-1 max-w-2xl text-center lg:text-left">
                    <span
                        id="jersey-hero-badge"
                        className="inline-block bg-[#fcd400] text-[#6e5c00] px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 md:mb-5"
                    >
                        Pro-Performance Apparel
                    </span>

                    <h1
                        id="jersey-hero-heading"
                        style={{ fontFamily: "var(--font-oswald)" }}
                        className="uppercase italic leading-[1.1] font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight mb-4 md:mb-5"
                    >
                        Wear Your Team.{" "}
                        Represent Your <span className="text-[#ffe16d]">Identity.</span>
                    </h1>

                    <p
                        id="jersey-hero-desc"
                        className="text-[#c8c8c8] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6 md:mb-8"
                    >
                        Premium-quality custom sports jerseys and track pants for cricket,
                        football, and corporate teams. Engineered for excellence, designed
                        for champions.
                    </p>

                    <div
                        id="jersey-hero-cta"
                        className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4"
                    >
                        <button className="bg-[#003ac4] text-white text-sm font-bold px-10 py-4 uppercase rounded-lg hover:bg-[#2352ea] transition-all active:scale-95">
                            Start Customizing
                        </button>
                    </div>
                </div>

                {/* Jersey image on concentric rings */}
                <div
                    id="jersey-hero-visual"
                    className="order-1 lg:order-2 relative w-[72%] xs:w-[62%] sm:w-[52%] md:w-[42%] lg:w-full lg:max-w-md aspect-square flex items-center justify-center shrink-0"
                >
                    <div
                        id="jersey-hero-ring1"
                        className="heroCircleCon c1 absolute w-[85%] aspect-square rounded-full blur-xs opacity-60 ring-1 ring-[#003ac4] flex justify-center items-center"
                    >
                        <div
                            id="jersey-hero-ring2"
                            className="c2 w-[67%] aspect-square rounded-full ring-2 ring-[#003ac4] opacity-100! flex justify-center items-center"
                        >
                            <div
                                id="jersey-hero-ring3"
                                className="c3 w-[67%] aspect-square rounded-full ring-2 ring-[#ffe16d] opacity-100! flex justify-center items-center"
                            />
                        </div>
                    </div>

                    <Image
                        id="jersey-hero-image"
                        src={heroimg}
                        alt="BatZone custom performance jersey"
                        className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
                        priority
                    />
                </div>
            </div>

            <div
                id="jersey-hero-scroll-hint"
                className="hidden sm:block absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
            >
                <ChevronDown size={28} className="text-[#ffe16d]" />
            </div>
        </MaxWidth>
    );
}