import {
    Sparkles,
    Dumbbell,
    Timer,
    Truck,
} from "lucide-react";
import Image from "next/image";
import jerp1 from "@/assets/jersey/jerp1.jpg"
import jerp2 from "@/assets/jersey/jerp3.png"
export default function WhyBatZone() {
    return (
        <section className="py-10 px-4 md:px-16 bg-[#fcf9f8] overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
                <div className="w-full lg:w-1/2 space-y-10">
                    <h2
                        className={` text-[32px] leading-[40px] font-semibold uppercase italic border-l-8 border-[#003ac4] pl-4`}
                    >
                        Why Performance
                        <br />
                        Trusts BatZone
                    </h2>
                    <div className="space-y-6">
                        {[
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
                        ].map(({ Icon, title, copy }) => (
                            <div key={title} className="flex gap-4 items-start">
                                <div className="bg-[#f0eded] p-2 rounded-lg text-[#003ac4]">
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <h4 className={` text-sm font-bold uppercase mb-1`}>{title}</h4>
                                    <p className={` text-base leading-6 text-[#434655]`}>{copy}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2 h-full">
                    <div className="space-y-2">
                        <div className="relative h-64 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src={jerp1}
                                alt="Macro shot of sublimated jersey fabric texture"
                                fill
                                sizes="(min-width: 1024px) 25vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="bg-[#705d00] rounded-md p-6 h-40 flex items-center justify-center">
                            <div className={` text-center text-white`}>
                                <div className={` text-4xl font-semibold`}>500+</div>
                                <div className="text-xs uppercase tracking-widest">Teams Outfitted</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 pt-10">
                        <div className="bg-[#1c1b1b] rounded-md p-6 h-40 flex items-center justify-center">
                            <div className={` text-center text-white`}>
                                <div className={` text-4xl font-semibold`}>100%</div>
                                <div className="text-xs uppercase tracking-widest">Customizable</div>
                            </div>
                        </div>
                        <div className="relative h-64 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src={jerp2}
                                alt="Athlete running in a custom BatZone jersey during golden hour"
                                fill
                                sizes="(min-width: 1024px) 25vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}