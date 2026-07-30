import MaxWidth from "@/components/MaxWidth";
import { CheckCircle2 } from "lucide-react";
import tour2 from "@/assets/tournament-event/tour22.png";
import Image from "next/image";

export default function LedWallMarkup() {
    return (
        <MaxWidth id="tournament-ledwall" className="py-12 md:py-20 px-6 md:px-16 bg-[#FCF9F8]">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center max-w-7xl mx-auto">
                <div id="tournament-ledwall-content">
                    <h2
                        id="tournament-ledwall-heading"
                        className="font-['Oswald'] text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold text-[#1C1B1B] mb-4 uppercase border-l-4 border-[#003AC4] pl-4"
                    >
                        Professional LED Wall & Live Telecast
                    </h2>
                    <p
                        id="tournament-ledwall-desc"
                        className="font-['Inter'] text-base md:text-lg font-normal text-[#434655] mb-6 leading-relaxed"
                    >
                        Transform your local tournament into a professional broadcast
                        experience. Our high-definition LED setups provide
                        ball-by-ball updates, live replays, and sponsor showcases that
                        captivate the crowd and elevate the brand.
                    </p>
                    <ul id="tournament-ledwall-list" className="space-y-3">
                        <li
                            id="tournament-ledwall-item-0"
                            className="flex items-center gap-3 font-['Inter'] text-xs sm:text-sm tracking-wider font-semibold text-[#1C1B1B] uppercase"
                        >
                            <CheckCircle2 className="text-[#003AC4] shrink-0" size={20} />
                            ULTRA-BRIGHT 4K OUTDOOR DISPLAYS
                        </li>
                        <li
                            id="tournament-ledwall-item-1"
                            className="flex items-center gap-3 font-['Inter'] text-xs sm:text-sm tracking-wider font-semibold text-[#1C1B1B] uppercase"
                        >
                            <CheckCircle2 className="text-[#003AC4] shrink-0" size={20} />
                            REAL-TIME DATA INTEGRATION
                        </li>
                        <li
                            id="tournament-ledwall-item-2"
                            className="flex items-center gap-3 font-['Inter'] text-xs sm:text-sm tracking-wider font-semibold text-[#1C1B1B] uppercase"
                        >
                            <CheckCircle2 className="text-[#003AC4] shrink-0" size={20} />
                            MULTI-ANGLE REPLAY CAPABILITIES
                        </li>
                    </ul>
                </div>
                <div id="tournament-ledwall-visual" className="relative group">
                    <div
                        id="tournament-ledwall-accent-yellow"
                        className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-[#FCD400] -z-10"
                    />
                    <div
                        id="tournament-ledwall-frame"
                        className="border-2 border-[#C4C5D8] p-1 bg-white shadow-xl"
                    >
                        <div className="relative w-full aspect-video overflow-hidden">
                            <Image
                                id="tournament-ledwall-image"
                                alt="High-definition LED wall at a cricket stadium showing live scores"
                                src={tour2}
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                    <div
                        id="tournament-ledwall-accent-blue"
                        className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-[#003AC4] -z-10"
                    />
                </div>
            </div>
        </MaxWidth>
    );
}
