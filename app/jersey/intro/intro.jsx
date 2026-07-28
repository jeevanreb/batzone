import MaxWidth from "@/components/MaxWidth";
import Image from "next/image";
import jersey from "@/assets/jersey/stitch.jpg"
import { CheckCircle } from "lucide-react";


export default function Intro() {
    return (
        <MaxWidth className="bg-[#fcf9f8] py-10 px-4 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2 space-y-4">
                    <h2
                        className={` text-[32px] leading-[40px] font-semibold uppercase text-[#003ac4] border-l-4 border-[#ffe16d] pl-4`}
                    >
                        The Gold Standard in Sports Apparel
                    </h2>
                    <p className={` text-base leading-6 text-[#434655]`}>
                        At BatZone, we specialize in the manufacturing of elite-tier sports
                        apparel. Our facility produces premium jerseys and track pants
                        tailored for clubs, schools, and high-stakes tournaments. We
                        combine technical fabrics with state-of-the-art construction
                        techniques to ensure every garment performs as hard as the athlete
                        wearing it.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                        {["Round Neck", "Collar Neck", "Polo Neck", "Full/Half Sleeves"].map(
                            (label) => (
                                <div
                                    key={label}
                                    className={` flex items-center gap-1 text-sm font-semibold uppercase text-[#1c1b1b]`}
                                >
                                    <CheckCircle className="text-[#003ac4]" size={18} />
                                    {label}
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#003ac4] to-[#705d00] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                    <div className="relative h-80 overflow-hidden rounded-xl border border-[#c4c5d8] bg-white">
                        <Image
                            src={jersey}
                            alt="Close-up of athletic fabric being stitched by a precision machine"
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </MaxWidth>
    )
}