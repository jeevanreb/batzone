import MaxWidth from "@/components/MaxWidth";
import Image from "next/image";
import jersey from "@/assets/jersey/stitch.jpg";
import { CheckCircle } from "lucide-react";

const NECK_TYPES = ["Round Neck", "Collar Neck", "Polo Neck", "Full/Half Sleeves"];

export default function IntroMarkup() {
    return (
        <MaxWidth id="jersey-intro" className="bg-neutral-50 py-16">
            <div className="px-6 md:px-10 lg:px-16 flex flex-col md:flex-row gap-10 items-center">
                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-5">
                    <div id="jersey-intro-label" className="flex items-center gap-3">
                        <div className="w-1 h-10 bg-yellow-300" />
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                            About BatZone Apparel
                        </span>
                    </div>

                    <h2
                        id="jersey-intro-heading"
                        style={{ fontFamily: "var(--font-oswald)" }}
                        className="text-2xl md:text-3xl font-semibold uppercase text-neutral-900 leading-tight border-l-4 border-yellow-300 pl-4"
                    >
                        The Gold Standard in Sports Apparel
                    </h2>

                    <p
                        id="jersey-intro-desc"
                        className="text-slate-600 text-base leading-relaxed"
                    >
                        At BatZone, we specialize in the manufacturing of elite-tier sports
                        apparel. Our facility produces premium jerseys and track pants
                        tailored for clubs, schools, and high-stakes tournaments. We
                        combine technical fabrics with state-of-the-art construction
                        techniques to ensure every garment performs as hard as the athlete
                        wearing it.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                        {NECK_TYPES.map((label, i) => (
                            <div
                                key={label}
                                id={`jersey-intro-feature-${i}`}
                                className="flex items-center gap-2 text-sm font-semibold uppercase text-neutral-900"
                            >
                                <CheckCircle className="text-blue-700 shrink-0" size={18} />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Panel */}
                <div
                    id="jersey-intro-image-wrap"
                    className="w-full md:w-1/2 relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-yellow-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
                    <div className="relative h-80 overflow-hidden rounded-xl border border-slate-200 bg-white">
                        <Image
                            id="jersey-intro-image"
                            src={jersey}
                            alt="Close-up of athletic fabric being stitched by a precision machine"
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                        />
                        <div
                            id="jersey-intro-badge"
                            className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 flex justify-between items-center border border-blue-700 z-10"
                        >
                            <div>
                                <p className="text-xs font-bold uppercase text-blue-700">
                                    Precision Stitching
                                </p>
                                <p className="text-xs text-neutral-900">
                                    Industrial Grade Manufacturing
                                </p>
                            </div>
                            <div className="bg-blue-700 text-white px-3 py-1 text-xs font-bold">
                                100% Custom
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidth>
    );
}
