import MaxWidth from "@/components/MaxWidth";
import { Star, Medal, Zap, Handshake } from "lucide-react";

const SPECIAL_AWARDS = [
    {
        icon: Star,
        title: "Player of the Match",
        desc: "Glass plaques with dynamic player photography integration.",
        color: "text-[#2352ea]",
        border: "border-[#c9a600]"
    },
    {
        icon: Medal,
        title: "Best Batsman",
        desc: "Sculpted metal figurines with engraved mahogany bases.",
        color: "text-[#c9a600]",
                border: "border-[#2352ea]"

    },
    {
        icon: Zap,
        title: "Emerging Player",
        desc: "Modern acrylic designs with vibrant color accents.",
        color: "text-[#2352ea]",
        border: "border-[#c9a600]"
    },
    {
        icon: Handshake,
        title: "Sponsor Awards",
        desc: "Professional corporate shields for tournament partners.",
        color: "text-[#c9a600]",
        border: "border-[#2352ea]"

    },
];

export default function AwardMarkup() {
    return (
        <MaxWidth id="trophies-awards" className="bg-white py-20 md:py-24">
            <div className="px-6 md:px-10 lg:px-16">
                <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
                    <span
                        id="trophies-awards-label"
                        className="text-xs uppercase tracking-widest font-semibold text-[#2352ea]"
                    >
                        The Hall of Fame
                    </span>
                    <h2
                        id="trophies-awards-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mt-2 text-[#111318]"
                    >
                        🎁 Mementos &amp; Special Awards
                    </h2>
                    <div
                        id="trophies-awards-line"
                        className="h-1 w-24 bg-[#2352ea] mx-auto mt-6"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SPECIAL_AWARDS.map((a, i) => (
                        <div
                            key={a.title}
                            id={`trophies-awards-card-${i}`}
  className={`bg-white border ${a.border} p-6 hover:shadow-md hover:shadow-black/5 transition-shadow rounded-md`}
                        >
                            <a.icon size={32} className={`mb-4 ${a.color}`} />
                            <h4 className="text-lg sm:text-xl font-semibold uppercase mb-2 text-[#111318]">
                                {a.title}
                            </h4>
                            <p className="text-sm text-[#5b5d6b]">{a.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </MaxWidth>
    );
}

