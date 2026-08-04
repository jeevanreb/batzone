import MaxWidth from "@/components/MaxWidth";
import {
    Trophy,
    Mic2,
    Presentation,
    Sparkles,
} from "lucide-react";

const stagePrograms = [
    {
        icon: Trophy,
        title: "Award Galas",
        description: "Prestigious ceremonies with professional hosting and trophy presentations.",
    },
    {
        icon: Mic2,
        title: "Live Performances",
        description: "Concerts, cultural programs, and high-energy entertainment acts.",
    },
    {
        icon: Presentation,
        title: "Corporate Launches",
        description: "Product reveals and seminars with seamless technical execution.",
    },
    {
        icon: Sparkles,
        title: "Community Events",
        description: "Festivals and celebrations that bring people together through the arts.",
    },
];

export default function VersatileMarkup() {
    return (
        <MaxWidth id="tournament-versatile" className="py-12 md:py-20 px-6 md:px-16 bg-[#F0EDED]">
            <div className="text-center mb-10 md:mb-12 max-w-7xl mx-auto">
<h2
                    id="tournament-versatile-title"
                    className="text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold text-[#1C1B1B] uppercase mb-3"
                >
                    Versatile Stage Programs
                </h2>
<p
                    id="tournament-versatile-desc"
                    className="text-sm md:text-base text-[#434655] max-w-2xl mx-auto leading-relaxed"
                >
                    Beyond the field, BatZone is your full-service partner for
                    world-class live entertainment and corporate stage productions.
                </p>
                <div
                    id="tournament-versatile-line"
                    className="h-1 w-24 bg-[#003AC4] mx-auto mt-4 rounded-full"
                />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {stagePrograms.map((program, idx) => (
                    <div
                        key={program.title}
                        id={`tournament-versatile-card-${idx}`}
                        className="text-center p-6 bg-white shadow-sm border border-[#C4C5D8] rounded-md hover:shadow-md hover:-translate-y-1 transition-all group"
                    >
                        <div id={`tournament-versatile-icon-${idx}`}>
                            <program.icon
                                className="text-[#003AC4] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                                size={40}
                                strokeWidth={1.5}
                            />
                        </div>
<h5 className="text-lg md:text-xl font-medium text-[#1C1B1B] uppercase mb-2">
                            {program.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-[#434655] leading-relaxed">
                            {program.description}
                        </p>
                    </div>
                ))}
            </div>
        </MaxWidth>
    );
}
