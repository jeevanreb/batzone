import MaxWidth from "@/components/MaxWidth";
import Image from "next/image";
import garage from "@/assets/garage/bt-garage.png"

const PILLARS = [
    {
        number: "01",
        title: "Weight Distribution",
        description: "Balanced redistribution of wood to lower the center of gravity without compromising blade thickness.",
    },
    {
        number: "02",
        title: "Feather Pickup",
        description: 'Shaving the "shoulders" and modifying the spine profile to ensure the bat feels lighter than its actual weight.',
    },
    {
        number: "03",
        title: "Blade Profile Modification",
        description: "Adjusting the concave or full profile to suit your hitting style, whether you're a power hitter or a touch player.",
    },
    {
        number: "04",
        title: "Surface Integrity",
        description: "Structural reinforcement using fiber-tape or binding thread to prevent future damage in high-stress zones.",
    },
];

export default function CraftmanshipMarkup() {
    return (
        <MaxWidth
            id="garage-craft"
            className="py-16 bg-stone-50"
        >
            <div className="px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Image panel */}
                <div id="garage-craft-image-wrap" className="relative">
                    <div className="bg-blue-700/5 absolute -inset-4 -rotate-2 rounded-xl z-0" />
                    <div className="relative z-10 border-2 border-slate-200 overflow-hidden aspect-square">
                        <Image
                            id="garage-craft-img"
                            className="object-cover object-center"
                            fill
                            sizes="(min-width: 1024px) 500px, 90vw"
                            alt="A master bat maker shaping the back profile of a premium Grade 1 English willow cricket bat in a sunlit garage workshop."
                            src={garage}
                        />
                        <div
                            id="garage-craft-badge"
                            className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 flex justify-between items-center border border-blue-700 z-10"
                        >
                            <div>
                                <p className="text-xs font-bold uppercase text-blue-700">
                                    Precision Shaping
                                </p>
                                <p className="text-xs text-neutral-900">
                                    Profile Modification Phase
                                </p>
                            </div>
                            <div className="bg-blue-700 text-white px-3 py-1 text-xs font-bold">
                                100% Manual
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text content */}
                <div className="flex flex-col gap-4">
                    <h2
                        id="garage-craft-heading"
                        className="uppercase font-semibold text-2xl md:text-3xl text-neutral-900 tracking-tight"
                    >
                        The Science of Craftsmanship
                    </h2>
                    <p id="garage-craft-sub" className="text-slate-600 text-base md:text-lg">
                        We don&apos;t just fix bats; we re-engineer them. Our process
                        focuses on the four pillars of professional performance:
                    </p>

                    <div className="space-y-4 mt-2">
                        {PILLARS.map((pillar, i) => (
                            <div
                                key={pillar.number}
                                id={`garage-craft-pillar-${i}`}
                                className="flex gap-4"
                            >
                                <div
                                    id={`garage-craft-num-${i}`}
                                    className="flex-shrink-0 w-12 h-12 bg-slate-100 flex items-center justify-center"
                                >
                                    <span
                                        className="text-blue-700 font-semibold text-lg"
                                    >
                                        {pillar.number}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wide mb-1 text-neutral-900">
                                        {pillar.title}
                                    </h4>
                                    <p className="text-slate-600 text-sm">
                                        {pillar.description}
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
