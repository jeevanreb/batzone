import MaxWidth from "@/components/MaxWidth";
import Header from "@/components/layouts/Header";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import heroimg from "@/assets/tournament-event/tour11.png";
import HeroButtons from "./hero-buttons";

export default function HeroMarkup() {
    return (
        <MaxWidth
            id="tournament-hero"
            header={true}
            fullRelative={true}
            className="relative overflow-hidden min-h-[100svh] lg:h-screen flex items-center pt-28 pb-16 md:pb-20 bg-white"
        >
            <Header />

            <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
                {/* Text content */}
                <div className="order-2 lg:order-1 max-w-2xl text-center lg:text-left">
                    <span
                        id="tournament-hero-badge"
                        className="inline-block bg-[#FCD400] text-[#6E5C00] px-3 py-1 mb-4 font-['Inter'] text-xs font-bold uppercase tracking-widest rounded-sm"
                    >
                        Elite Sports Experiences
                    </span>

                    <h1
                        id="tournament-hero-heading"
                        className="font-['Oswald'] uppercase italic leading-tight font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight mb-4 md:mb-5"
                    >
                        Bringing Your{" "}
                        <span className="text-[#003AC4]">Tournament</span> To Life
                        From Start To Finish
                    </h1>

                    <p
                        id="tournament-hero-desc"
                        className="font-['Inter'] text-neutral-500 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6 md:mb-8"
                    >
                        Experience world-class cricket tournament management. We
                        combine professional-grade technology with precision
                        logistics to create unforgettable athletic events.
                    </p>

                    <HeroButtons />
                </div>

                {/* Tournament visual image with concentric rings */}
                <div
                    id="tournament-hero-visual"
                    className="order-1 lg:order-2 relative w-[72%] xs:w-[62%] sm:w-[52%] md:w-[42%] lg:w-full lg:max-w-md aspect-square flex items-center justify-center shrink-0"
                >
                    <div
                        id="tournament-hero-ring1"
                        className="heroCircleCon c1 absolute w-[85%] aspect-square rounded-full blur-xs opacity-60 ring-1 ring-[#003AC4] flex justify-center items-center"
                    >
                        <div
                            id="tournament-hero-ring2"
                            className="c2 w-[67%] aspect-square rounded-full ring-2 ring-[#003AC4] opacity-100 flex justify-center items-center"
                        >
                            <div
                                id="tournament-hero-ring3"
                                className="c3 w-[67%] aspect-square rounded-full ring-2 ring-[#FCD400] opacity-100 flex justify-center items-center"
                            />
                        </div>
                    </div>

                    <Image
                        id="tournament-hero-image"
                        src={heroimg}
                        alt="BatZone tournament action shot"
                        className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
                        priority
                    />
                </div>
            </div>

            <div
                id="tournament-hero-scroll-hint"
                className="hidden sm:block absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
            >
                <ChevronDown size={28} className="text-[#FCD400]" />
            </div>
        </MaxWidth>
    );
}
