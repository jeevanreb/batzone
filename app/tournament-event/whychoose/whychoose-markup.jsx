import MaxWidth from "@/components/MaxWidth";
import {
    BadgeCheck,
    Zap,
    Headset,
} from "lucide-react";

const whyChoose = [
    {
        icon: BadgeCheck,
        title: "Experienced Team",
        description: "Over 500+ successful professional and amateur tournaments managed worldwide.",
    },
    {
        icon: Zap,
        title: "Modern Technology",
        description: "Proprietary software for live scoring, ticketing, and performance analytics.",
    },
    {
        icon: Headset,
        title: "Reliable Officials",
        description: "Vetted pool of professional umpires and referees for integrity and quality.",
    },
];

export default function WhyChooseMarkup() {
    return (
        <MaxWidth id="tournament-whychoose" className="py-12 md:py-20 px-6 md:px-16 bg-[#1C1B1B] text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4 max-w-7xl mx-auto">
                <div id="tournament-whychoose-header">
<h2
                        id="tournament-whychoose-title"
                        className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase mb-2"
                    >
                        Why Choose BatZone?
                    </h2>
<p
                        id="tournament-whychoose-desc"
                        className="text-[#E5E2E1] text-sm md:text-base max-w-xl"
                    >
                        Setting the gold standard for athletic event management across
                        the globe.
                    </p>
                </div>
                <div
                    id="tournament-whychoose-line"
                    className="h-px bg-[#C4C5D8]/40 flex-grow mx-6 hidden md:block"
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
                {whyChoose.map((item, idx) => (
                    <div
                        key={item.title}
                        id={`tournament-whychoose-item-${idx}`}
                        className="flex flex-col gap-3 group p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#FFE16D]/50 transition-all duration-300"
                    >
                        <div id={`tournament-whychoose-icon-${idx}`}>
                            <item.icon
                                className="text-[#FFE16D] group-hover:scale-110 transition-transform duration-300"
                                size={40}
                                strokeWidth={1.5}
                            />
                        </div>
<h4 className="text-xl sm:text-2xl font-medium uppercase text-white">
                            {item.title}
                        </h4>
                        <p className="text-[#E5E2E1] text-xs sm:text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </MaxWidth>
    );
}
