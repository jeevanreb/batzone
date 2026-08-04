import MaxWidth from "@/components/MaxWidth";
import {
    Printer,
    CircleDot,
    Shirt,
    Award,
    Layers,
    ArrowRight,
    Users,
} from "lucide-react";
import Image from "next/image";
import print from "@/assets/jersey/jerprint.jpg";

const SMALL_CARDS = [
    {
        icon: CircleDot,
        title: "Customized Jerseys",
        desc: "Tailored fits for Cricket, Football, and Team Sports.",
    },
    {
        icon: Shirt,
        title: "Premium Track Pants",
        desc: "Ergonomic design with sweat-wicking technology.",
    },
    {
        icon: Award,
        title: "Personal Branding",
        desc: "Customized names, numbers, and embroidered logos.",
    },
    {
        icon: Layers,
        title: "Fabric Options",
        desc: "High-grade Polyester, Nylon, and Breathable Mesh.",
    },
];

export default function ServicesMarkup() {
    return (
        <MaxWidth id="jersey-services" className="bg-neutral-100 py-16">
            <div className="px-6 md:px-10 lg:px-16">
                {/* Section Heading */}
                <div
                    id="jersey-services-head"
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4"
                >
                    <div className="space-y-1">
                        <span
                            id="jersey-services-label"
                            className="text-xs font-bold uppercase tracking-widest text-blue-700"
                        >
                            Our Expertise
                        </span>
<h2
                            id="jersey-services-heading"
                            className="text-2xl md:text-3xl font-semibold uppercase text-neutral-900 tracking-tight"
                        >
                            What We Offer
                        </h2>
                        <div id="jersey-services-line" className="w-16 h-1 bg-blue-700" />
                    </div>
                    <div className="hidden md:block h-px bg-slate-300 flex-grow ml-10 mb-2" />
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Feature Card - Large */}
                    <div
                        id="jersey-services-card-featured"
                        className="md:col-span-2 md:row-span-2 group bg-white border border-slate-200 rounded-xl relative overflow-hidden flex flex-col"
                    >
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
                                <Printer className="text-blue-700" size={40} />
                                <span
                                    id="jersey-services-badge"
                                    className="bg-yellow-300 text-yellow-900 px-2 py-1 text-xs font-bold uppercase tracking-widest"
                                >
                                    Industry Leading
                                </span>
                            </div>
<h3
                                className="text-2xl font-semibold uppercase text-neutral-900"
                            >
                                Sublimation Printing
                            </h3>
                            <p className="text-slate-600 text-base leading-relaxed">
                                Precision single &amp; double-sided sublimation that bonds ink
                                directly to the fibers for vibrant, everlasting designs that
                                never peel or fade.
                            </p>
                        </div>
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Small Service Cards */}
                    {SMALL_CARDS.map((card, i) => (
                        <div
                            key={card.title}
                            id={`jersey-services-card-${i}`}
                            className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 hover:border-blue-700 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            <card.icon className="text-blue-700" size={28} />
                            <h3 className="text-sm font-bold uppercase text-neutral-900">
                                {card.title}
                            </h3>
                            <p className="text-xs leading-4 text-slate-600">{card.desc}</p>
                        </div>
                    ))}

                    {/* Bulk Order CTA Card */}
                    <div
                        id="jersey-services-cta-card"
                        className="md:col-span-2 bg-blue-700 rounded-xl text-white p-6 flex flex-col justify-between group cursor-pointer overflow-hidden relative"
                    >
                        <div className="relative z-10">
<h3
                                className="text-2xl font-semibold uppercase mb-2"
                            >
                                Bulk Order Solutions
                            </h3>
                            <p className="text-base leading-relaxed opacity-90">
                                Corporate, school, and tournament-scale production with
                                expedited timelines.
                            </p>
                        </div>
                        <div className="flex justify-end mt-4 relative z-10">
                            <ArrowRight
                                size={36}
                                className="group-hover:translate-x-2 transition-transform duration-300"
                            />
                        </div>
                        <Users
                            className="absolute -right-6 -bottom-6 opacity-10"
                            size={140}
                            strokeWidth={1}
                        />
                    </div>
                </div>
            </div>
        </MaxWidth>
    );
}
