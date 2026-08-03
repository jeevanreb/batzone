import MaxWidth from "@/components/MaxWidth";
import { ArrowRight } from "lucide-react";
import TrophyButtons from "./trophy-buttons";
import crystal from "@/assets/trophies/glass.jpg";
import champion from "@/assets/trophies/champion.jpg";
import acrylic from "@/assets/trophies/acrylic.jpg";
import Image from "next/image";
const TROPHIES = [
    {
        icon: "🏆",
        title: "Crystal Vanguard Cup",
        desc: "Glass & Crystal construction with custom internal engraving. Ideal for State Championships.",
        tag: "CUSTOMIZABLE",
        tagTone: "blue",
        img: crystal,
        badge: "NEW",
    },
    {
        icon: "🏆",
        title: "Champion's Heirloom",
        desc: "Polished Metal on Mahogany. Massive scale for tournament victors and perennial league winners.",
        tag: "BEST SELLER",
        tagTone: "gold",
        img: champion,
        badge: null,
    },
    {
        icon: "🔷",
        title: "Geometric Acrylic",
        desc: "Precision-cut Acrylic with fiber-optic style glowing edges. Lightweight and impact-resistant.",
        tag: "FIBER-GLASS",
        tagTone: "blue",
        img: acrylic,
        badge: null,
    },
];

export default function TrophyMarkup() {
    return (
        <MaxWidth id="trophies-premium" className="bg-white py-20 md:py-24">
            <div className="px-6 md:px-10 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                    <div>
                        <span
                            id="trophies-premium-label"
                            className="text-xs uppercase tracking-widest font-semibold text-[#2352ea]"
                        >
                            Elite Series
                        </span>
                        <h2
                            id="trophies-premium-heading"
                            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mt-2 text-[#111318]"
                        >
                            🏆 Premium Trophies
                        </h2>
                    </div>
                    <TrophyButtons />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TROPHIES.map((t, i) => (
                        <div
                            key={t.title}
                            id={`trophies-premium-card-${i}`}
                            className="bg-white border border-[#e5e6ec] p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:border-[#2352ea] hover:shadow-lg hover:shadow-black/5"
                        >
                            <div className="mb-6 relative aspect-square flex items-center justify-center overflow-hidden bg-[#f2f3f6]">
                                <div
                                    id={`trophies-premium-icon-${i}`}
                                    className="w-full aspect-square flex items-center justify-center"
                                >
                                    {/* <span className="text-7xl">{t.icon}</span> */}
                                    <Image src={t.img} alt={t.title}  fill classNmae="object-cover w-full" />
                                </div>
                                {t.badge && (
                                    <span className="absolute top-0 left-0 bg-[#2352ea] text-white text-[10px] px-3 py-1">
                                        {t.badge}
                                    </span>
                                )}
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl sm:text-2xl font-semibold uppercase mb-2 text-[#111318]">
                                    {t.title}
                                </h3>
                                <p className="text-sm text-[#5b5d6b]">{t.desc}</p>
                            </div>
                            <div
                                id={`trophies-premium-footer-${i}`}
                                className="mt-6 flex justify-between items-center border-t border-[#e5e6ec] pt-4"
                            >
                                <span
                                    className={`text-[11px] tracking-wide font-semibold ${
                                        t.tagTone === "gold" ? "text-[#a68b00]" : "text-[#2352ea]"
                                    }`}
                                >
                                    {t.tag}
                                </span>
                                <ArrowRight size={18} className="text-[#8e90a1]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MaxWidth>
    );
}

