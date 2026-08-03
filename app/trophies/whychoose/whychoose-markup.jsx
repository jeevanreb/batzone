import MaxWidth from "@/components/MaxWidth";
import { ShieldCheck, PenLine, Cog, Boxes, Wallet } from "lucide-react";

const WHY_CHOOSE = [
    { icon: ShieldCheck, label: "Premium Quality" },
    { icon: PenLine, label: "Fully Customized" },
    { icon: Cog, label: "Fast Production" },
    { icon: Boxes, label: "Bulk Orders" },
    { icon: Wallet, label: "Affordable Pricing" },
];

export default function WhyChooseMarkup() {
    return (
        <MaxWidth id="trophies-whychoose" className="bg-[#2352ea] text-white py-16 md:py-20">
            <div className="px-6 md:px-10 lg:px-16 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 text-center">
                {WHY_CHOOSE.map((w, i) => (
                    <div
                        key={w.label}
                        id={`trophies-whychoose-item-${i}`}
                        className={`flex flex-col items-center gap-4 ${
                            i === 4 ? "col-span-2 md:col-span-1" : ""
                        }`}
                    >
                        <w.icon size={44} />
                        <h5 className="uppercase font-semibold text-sm md:text-base">
                            {w.label}
                        </h5>
                    </div>
                ))}
            </div>
        </MaxWidth>
    );
}
