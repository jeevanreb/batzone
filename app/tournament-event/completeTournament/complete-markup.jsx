import MaxWidth from "@/components/MaxWidth";
import {
    ClipboardList,
    Gauge,
    Users,
    Drama,
    PartyPopper,
} from "lucide-react";

const managementCards = [
    {
        icon: ClipboardList,
        title: "Strategic Planning",
        description:
            "Comprehensive scheduling, team bracket management, and venue logistics handled by our expert event coordinators.",
    },
    {
        icon: Gauge,
        title: "Elite Scoring & Tech",
        description:
            "Digital scoring systems that sync instantly to our live displays and mobile apps for real-time transparency.",
    },
    {
        icon: Users,
        title: "Official Management",
        description:
            "Provision of certified umpires, match referees, and ground staff to ensure fair play and professional standards.",
    },
    {
        icon: Drama,
        title: "Stage Program Planning",
        description:
            "End-to-end conceptualization and execution of stage-based events, from award galas to live cultural performances.",
    },
    {
        icon: PartyPopper,
        title: "Entertainment Coordination",
        description:
            "Sourcing and managing live talent, cultural troupes, and celebrity appearances to keep your audience engaged.",
    },
];

export default function CompleteMarkup() {
    return (
        <MaxWidth id="tournament-complete" className="py-12 md:py-20 bg-[#F6F3F2] px-6 md:px-16">
            <div className="text-center mb-10 md:mb-12 max-w-7xl mx-auto">
                <h2
                    id="tournament-complete-heading"
                    className="font-['Oswald'] text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold text-[#1C1B1B] uppercase mb-3"
                >
                    Complete Tournament Management
                </h2>
                <div id="tournament-complete-line" className="h-1 w-24 bg-[#003AC4] mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {managementCards.map((card, idx) => (
                    <div
                        key={card.title}
                        id={`tournament-complete-card-${idx}`}
                        className="bg-white border border-[#C4C5D8] rounded-md p-6 relative group overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#003AC4] group-hover:h-1.5 transition-all" />
                        <div className="mb-4">
                            <card.icon className="text-[#003AC4] transition-transform duration-300 group-hover:scale-110" size={44} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-['Oswald'] text-xl sm:text-2xl font-medium text-[#1C1B1B] mb-2 uppercase">
                            {card.title}
                        </h3>
                        <p className="font-['Inter'] text-sm md:text-base leading-relaxed text-[#434655]">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </MaxWidth>
    );
}
