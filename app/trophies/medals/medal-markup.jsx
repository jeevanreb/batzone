import MaxWidth from "@/components/MaxWidth";
import { CheckCircle2 } from "lucide-react";
import MedalButtons from "./medal-buttons";
import gold from "@/assets/trophies/medalg.jpg";
import silver from "@/assets/trophies/medals.jpg"
import Image from "next/image";
const MEDAL_FEATURES = [
    "Bespoke shapes and cut-out designs",
    "32mm to 70mm diameter options",
    "Full-color sublimated premium ribbons",
];

export default function MedalMarkup() {
    return (
        <MaxWidth
            id="trophies-medals"
            className="bg-[#f7f7f9] border-y border-[#e5e6ec] py-20 md:py-24"
        >
            <div className="px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Left content */}
                <div className="space-y-6 md:space-y-8">
                    <span
                        id="trophies-medals-label"
                        className="inline-block text-xs uppercase tracking-widest font-semibold text-[#a68b00]"
                    >
                        Tactical Detail
                    </span>
                    <h2
                        id="trophies-medals-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight text-[#111318]"
                    >
                        🎖️ Customized <br /> Medals of Valor
                    </h2>
                    <p
                        id="trophies-medals-desc"
                        className="text-base sm:text-lg text-[#5b5d6b]"
                    >
                        Our medals are crafted from solid metal alloys, available in
                        high-gloss Gold, matte Silver, and distressed Bronze finishes.
                        Every unit features premium heavy-duty ribbons with custom
                        tournament branding.
                    </p>
                    <ul className="space-y-4">
                        {MEDAL_FEATURES.map((f, i) => (
                            <li
                                key={f}
                                id={`trophies-medals-feature-${i}`}
                                className="flex items-center gap-4"
                            >
                                <CheckCircle2 size={22} className="text-[#2352ea] shrink-0" />
                                <span className="text-[#111318]">{f}</span>
                            </li>
                        ))}
                    </ul>
                    <MedalButtons />
                </div>

                {/* Right visuals */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div
                        id="trophies-medals-visual-gold"
                        className="relative flex items-center justify-center p-4"
                    >
                        <div className="w-full aspect-[4/5] flex items-center justify-center bg-[linear-gradient(160deg,#2b2400,#524700_60%,#e3c600)]">
                            {/* <span className="text-6xl sm:text-7xl">🥇</span> */}
                            <Image src={gold} alt="Gold Medal" fill className="object-cover w-full rounded-xl" />
                        </div>
                    </div>
                    <div
                        id="trophies-medals-visual-silver"
                        className="relative flex items-center justify-center p-4 mt-8"
                    >
                        <div className="w-full aspect-[4/5] flex items-center justify-center bg-[linear-gradient(160deg,#1c1c1c,#434655_60%,#c4c5d8)]">
                                                        <Image src={silver} alt="silver Medal" fill className="object-cover w-full  rounded-xl " />

                        </div>
                    </div>
                </div>
            </div>
        </MaxWidth>
    );
}

