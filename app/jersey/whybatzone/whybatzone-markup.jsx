import MaxWidth from "@/components/MaxWidth";
import {
    Sparkles,
    Dumbbell,
    Timer,
    Truck,
} from "lucide-react";
import Image from "next/image";
import jerp1 from "@/assets/jersey/jerp1.jpg";
import jerp2 from "@/assets/jersey/jerp3.png";

const WHY_FEATURES = [
    {
        Icon: Sparkles,
        title: "Fade-Resistant Printing",
        copy: "Advanced ink-bonding ensures your team's colors stay vibrant season after season.",
    },
    {
        Icon: Dumbbell,
        title: "Professional Comfortable Fit",
        copy: "Ergonomically cut to provide maximum range of motion for elite athletic performance.",
    },
    {
        Icon: Timer,
        title: "Fast Production (Min 10)",
        copy: "Low minimums and high efficiency. We get your gear ready when the whistle blows.",
    },
    {
        Icon: Truck,
        title: "Reliable Delivery",
        copy: "Secure, tracked shipping across the region to ensure your team is always ready.",
    },
];

export default function WhyBatzoneMarkup() {
    return (
        <MaxWidth id="jersey-why" className="bg-neutral-50 py-16 overflow-hidden">
            <div className="px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-12 items-center">
                {/* Left: Text Content */}
                <div className="w-full lg:w-1/2 space-y-8">
                    <div id="jersey-why-label" className="flex items-center gap-3">
                        <div className="w-1 h-10 bg-blue-700" />
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                            Why Choose Us
                        </span>
                    </div>

<h2
                        id="jersey-why-heading"
                        className="text-2xl md:text-3xl font-semibold uppercase italic text-neutral-900 border-l-8 border-blue-700 pl-4 leading-tight"
                    >
                        Why Performance
                        <br />
                        Trusts BatZone
                    </h2>

                    <div className="space-y-5">
                        {WHY_FEATURES.map(({ Icon, title, copy }, i) => (
                            <div
                                key={title}
                                id={`jersey-why-feature-${i}`}
                                className="flex gap-4 items-start"
                            >
                                <div className="bg-blue-50 p-2.5 rounded-lg text-blue-700 shrink-0">
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase mb-1 text-neutral-900">
                                        {title}
                                    </h4>
                                    <p className="text-slate-600 text-base leading-relaxed">{copy}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Photo Grid */}
                <div
                    id="jersey-why-grid"
                    className="w-full lg:w-1/2 grid grid-cols-2 gap-3 h-full"
                >
                    {/* Column 1 */}
                    <div className="space-y-3">
                        <div
                            id="jersey-why-img1"
                            className="relative h-64 rounded-xl overflow-hidden"
                        >
                            <Image
                                src={jerp1}
                                alt="Macro shot of sublimated jersey fabric texture"
                                fill
                                sizes="(min-width: 1024px) 25vw, 50vw"
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div
                            id="jersey-why-stat1"
                            className="bg-yellow-600 rounded-xl p-6 h-40 flex items-center justify-center"
                        >
                            <div className="text-center text-white">
<div
                                    className="text-4xl font-semibold"
                                >
                                    500+
                                </div>
                                <div className="text-xs uppercase tracking-widest mt-1">
                                    Teams Outfitted
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-3 pt-10">
                        <div
                            id="jersey-why-stat2"
                            className="bg-neutral-900 rounded-xl p-6 h-40 flex items-center justify-center"
                        >
                            <div className="text-center text-white">
<div
                                    className="text-4xl font-semibold"
                                >
                                    100%
                                </div>
                                <div className="text-xs uppercase tracking-widest mt-1">
                                    Customizable
                                </div>
                            </div>
                        </div>
                        <div
                            id="jersey-why-img2"
                            className="relative h-64 rounded-xl overflow-hidden"
                        >
                            <Image
                                src={jerp2}
                                alt="Athlete running in a custom BatZone jersey during golden hour"
                                fill
                                sizes="(min-width: 1024px) 25vw, 50vw"
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidth>
    );
}
