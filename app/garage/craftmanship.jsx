import MaxWidth from "@/components/MaxWidth";
import garage from "@/assets/landingPage/our-services/sports-garage.png"
import Image from "next/image";

export default function Craftmanship() {
    const PILLARS = [
        { number: "01", title: "Weight Distribution", description: "Balanced redistribution of wood to lower the center of gravity without compromising blade thickness." },
        { number: "02", title: "Feather Pickup", description: 'Shaving the "shoulders" and modifying the spine profile to ensure the bat feels lighter than its actual weight.' },
        { number: "03", title: "Blade Profile Modification", description: "Adjusting the concave or full profile to suit your hitting style, whether you're a power hitter or a touch player." },
        { number: "04", title: "Surface Integrity", description: "Structural reinforcement using fiber-tape or binding thread to prevent future damage in high-stress zones." },
    ];
    return (
        <MaxWidth className="py-16 bg-[#fcf9f8]">
            <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="bg-[#003ac4]/5 absolute -inset-4 -rotate-2 rounded-xl z-0" />
                    <div className="relative z-10 border-2 border-[#c4c5d8] overflow-hidden aspect-square">
                        <Image
                            className="object-cover object-center" // try object-top / object-bottom if the crop cuts the wrong part
                            fill
                            sizes="(min-width: 1024px) 500px, 90vw"
                            alt="A master bat maker shaping the back profile of a premium Grade 1 English willow cricket bat in a sunlit garage workshop."
                            src={garage}
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 flex justify-between items-center border border-[#003ac4] z-10">
                            <div>
                                <p className="text-xs font-bold uppercase text-[#003ac4]">Precision Shaping</p>
                                <p className="text-xs text-[#1c1b1b]">Profile Modification Phase</p>
                            </div>
                            <div className="bg-[#003ac4] text-white px-3 py-1 text-xs font-bold">100% Manual</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h2
                        style={{ fontFamily: "var(--font-oswald)" }}
                        className="uppercase font-semibold text-2xl md:text-3xl text-[#1c1b1b] tracking-tight"
                    >
                        The Science of Craftsmanship
                    </h2>
                    <p className="text-[#434655] text-base md:text-lg">
                        We don&apos;t just fix bats; we re-engineer them. Our process focuses on the four pillars of
                        professional performance:
                    </p>

                    <div className="space-y-4 mt-2">
                        {PILLARS.map((pillar) => (
                            <div key={pillar.number} className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#eae7e7] flex items-center justify-center">
                                    <span
                                        style={{ fontFamily: "var(--font-oswald)" }}
                                        className="text-[#003ac4] font-semibold text-lg"
                                    >
                                        {pillar.number}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wide mb-1 text-[#1c1b1b]">
                                        {pillar.title}
                                    </h4>
                                    <p className="text-[#434655] text-sm">{pillar.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MaxWidth>
    )
}