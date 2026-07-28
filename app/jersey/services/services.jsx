import MaxWidth from "@/components/MaxWidth";
import {
    Printer,
    CircleDot,
    Shirt,
    Award,
    Layers,
    ArrowRight,
    Users
} from "lucide-react";
import Image from "next/image";
import print from "@/assets/jersey/jerprint.jpg"

export default function Services() {
    return (
        <MaxWidth className="bg-[#f6f3f2] py-10 px-4 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <div className="space-y-1">
                        <span
                            className={` text-sm font-semibold text-[#003ac4] uppercase tracking-[0.2em]`}
                        >
                            Our Expertise
                        </span>
                        <h2 className={` text-[32px] leading-[40px] font-semibold uppercase`}>
                            What We Offer
                        </h2>
                    </div>
                    <div className="hidden md:block h-[2px] bg-[#c4c5d8] flex-grow ml-10 mb-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Service Card 1 */}
                    <div className="md:col-span-2 md:row-span-2 group bg-white border border-[#c4c5d8] rounded-lg relative overflow-hidden flex flex-col">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src={print}
                                alt="Custom sublimated team jersey design"
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 space-y-4 flex-grow">
                            <div className="flex justify-between items-center">
                                <Printer className="text-[#003ac4]" size={40} />
                                <span
                                    className={` bg-[#ffe16d] text-[#221b00] px-2 py-1 text-[10px] font-bold uppercase tracking-widest`}
                                >
                                    Industry Leading
                                </span>
                            </div>
                            <h3 className={` text-2xl leading-8 font-medium uppercase`}>
                                Sublimation Printing
                            </h3>
                            <p className={` text-base leading-6 text-[#434655]`}>
                                Precision single &amp; double-sided sublimation that bonds ink
                                directly to the fibers for vibrant, everlasting designs that
                                never peel or fade.
                            </p>
                        </div>
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#003ac4] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Service Card 2 */}
                    <div className="bg-white border border-[#c4c5d8] rounded-md p-6 space-y-4 hover:border-[#003ac4] transition-all">
                        <CircleDot className="text-[#003ac4]" />
                        <h3 className={` text-sm font-bold uppercase`}>Customized Jerseys</h3>
                        <p className={` text-xs leading-4 text-[#434655]`}>
                            Tailored fits for Cricket, Football, and Team Sports.
                        </p>
                    </div>

                    {/* Service Card 3 */}
                    <div className="bg-white border border-[#c4c5d8] rounded-md p-6 space-y-4 hover:border-[#003ac4] transition-all">
                        <Shirt className="text-[#003ac4]" />
                        <h3 className={` text-sm font-bold uppercase`}>Premium Track Pants</h3>
                        <p className={` text-xs leading-4 text-[#434655]`}>
                            Ergonomic design with sweat-wicking technology.
                        </p>
                    </div>

                    {/* Service Card 4 */}
                    <div className="bg-white border border-[#c4c5d8] rounded-md p-6 space-y-4 hover:border-[#003ac4] transition-all">
                        <Award className="text-[#003ac4]" />
                        <h3 className={` text-sm font-bold uppercase`}>Personal Branding</h3>
                        <p className={` text-xs leading-4 text-[#434655]`}>
                            Customized names, numbers, and embroidered logos.
                        </p>
                    </div>

                    {/* Service Card 5 */}
                    <div className="bg-white border border-[#c4c5d8] rounded-md p-6 space-y-4 hover:border-[#003ac4] transition-all">
                        <Layers className="text-[#003ac4]" />
                        <h3 className={` text-sm font-bold uppercase`}>Fabric Options</h3>
                        <p className={` text-xs leading-4 text-[#434655]`}>
                            High-grade Polyester, Nylon, and Breathable Mesh.
                        </p>
                    </div>

                    {/* Service Card 6 */}
                    <div className="md:col-span-2 bg-[#003ac4] rounded-md text-white p-6 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
                        <div className="relative z-10">
                            <h3 className={` text-2xl leading-8 font-medium uppercase mb-2`}>
                                Bulk Order Solutions
                            </h3>
                            <p className={` text-base leading-6 opacity-90`}>
                                Corporate, school, and tournament-scale production with
                                expedited timelines.
                            </p>
                        </div>
                        <div className="flex justify-end mt-4 relative z-10">
                            <ArrowRight size={36} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                        <Users className="absolute -right-6 -bottom-6 opacity-10" size={140} strokeWidth={1} />
                    </div>
                </div>
            </div>
        </MaxWidth>
    )
}