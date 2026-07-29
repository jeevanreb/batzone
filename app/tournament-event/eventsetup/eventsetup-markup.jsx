import MaxWidth from "@/components/MaxWidth";
import Image from "next/image";
import tour3 from "@/assets/tournament-event/tour3.jpg";
import {
    Mountain,
    Lightbulb,
    ShieldCheck,
    Palette,
    Volume2,
} from "lucide-react";

const operationsItems = [
    {
        icon: Mountain,
        title: "Pitch & Ground Prep",
        description: "Expert curation of playing surfaces to professional standards.",
    },
    {
        icon: Lightbulb,
        title: "Floodlighting & Tech",
        description: "Advanced lighting solutions for day-night matches and event power.",
    },
    {
        icon: ShieldCheck,
        title: "Crowd & Security",
        description: "Managed access control and stadium safety protocols.",
    },
    {
        icon: Palette,
        title: "Stage Craft & Decor",
        description: "Professional stage design, digital scenography, and backstage management.",
    },
    {
        icon: Volume2,
        title: "Concert-Grade AV",
        description: "High-fidelity sound systems and intelligent lighting for immersive experiences.",
    },
];

export default function EventSetupMarkup() {
    return (
        <MaxWidth id="tournament-eventsetup" className="py-12 md:py-20 px-6 md:px-16 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center max-w-7xl mx-auto">
                <div
                    id="tournament-eventsetup-visual"
                    className="order-2 lg:order-1 relative aspect-[4/3] lg:aspect-auto lg:h-full border-l-8 border-[#003AC4] min-h-[300px] shadow-lg rounded-r-md overflow-hidden group"
                >
                    <Image
                        id="tournament-eventsetup-image"
                        alt="Staff operating professional equipment and managing ground logistics"
                        src={tour3}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="order-1 lg:order-2">
                    <h2
                        id="tournament-eventsetup-heading"
                        className="font-['Oswald'] text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold text-[#1C1B1B] mb-4 uppercase"
                    >
                        Precision Operations
                    </h2>
                    <p
                        id="tournament-eventsetup-desc"
                        className="font-['Inter'] text-base md:text-lg font-normal text-[#434655] mb-6 leading-relaxed"
                    >
                        The secret to a flawless tournament lies in the &ldquo;behind
                        the scenes&rdquo; details. We take full ownership of the
                        ground operations to ensure players and spectators experience
                        absolute perfection.
                    </p>
                    <div className="space-y-4">
                        {operationsItems.map((item, idx) => (
                            <div
                                key={item.title}
                                id={`tournament-eventsetup-item-${idx}`}
                                className="flex gap-4 items-start"
                            >
                                <div
                                    id={`tournament-eventsetup-icon-${idx}`}
                                    className="w-12 h-12 bg-[#FCD400] flex items-center justify-center shrink-0 rounded-sm shadow-sm"
                                >
                                    <item.icon className="text-[#6E5C00]" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-['Inter'] text-xs sm:text-sm tracking-wider font-semibold uppercase text-[#1C1B1B]">
                                        {item.title}
                                    </h4>
                                    <p className="text-[#434655] text-xs sm:text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MaxWidth>
    );
}
