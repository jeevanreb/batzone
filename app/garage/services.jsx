import MaxWidth from "@/components/MaxWidth";
import {
    Dumbbell,
    Settings2,
    Hammer,
    Waves,
    Wrench,
    Hand,
    Link2,
    TrendingDown,
    ArrowDownToLine,
    Bandage,
    Sparkles,
    History,
    Replace,
} from "lucide-react";
const SERVICES = [
    { icon: Dumbbell, title: "Bat Preparation", description: "Essential oiling and initial surface hardening for new willow." },
    { icon: Settings2, title: "Customization", description: "Tailoring handle thickness and grip texture to your preference." },
    { icon: Hammer, title: "Professional Knocking", description: "Automated and manual knocking (15,000+ strokes) for peak ping." },
    { icon: Waves, title: "Punching", description: "Enhancing the sweet spot through specialized compression techniques." },
    { icon: Replace, title: "Handle Replacement", description: "Replacing broken or loose cane handles with premium Saravak cane." },
    { icon: Hand, title: "Grip Replacement", description: "Professional fitting of high-traction chevron or matrix grips." },
    { icon: Link2, title: "Threading & Binding", description: "Reinforcing cracks with industrial grade binding thread." },
    { icon: TrendingDown, title: "Thinning", description: "Precise reduction of wood to achieve the perfect pickup weight." },
    { icon: ArrowDownToLine, title: "Toe Repair", description: "Rescuing split toes and applying protective toe guards." },
    { icon: Bandage, title: "Edge & Crack Repair", description: "Expert gluing and sanding for edge damage and surface cracks." },
    { icon: Sparkles, title: "Oiling & Polishing", description: "High-shine buffing and deep conditioning with raw linseed oil." },
    { icon: History, title: "Complete Restoration", description: "Giving old, battered willow a brand new lease of life." },
];
export default function Services() {
    return (
        <MaxWidth className="py-16 bg-[#fcf9f8]">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="mb-10">
                    <h2
                        style={{ fontFamily: "var(--font-oswald)" }}
                        className="uppercase font-semibold text-2xl md:text-3xl text-[#1c1b1b] tracking-tight mb-2"
                    >
                        Our Specialized Services
                    </h2>
                    <div className="w-16 h-1 bg-[#003ac4] mb-4" />
                    <p className="text-[#434655] max-w-xl">
                        Comprehensive restoration and optimization for players who refuse to compromise on quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service) => (
                        <div
                            key={service.title}
                            className="service-card bg-white border border-[#c4c5d8] p-5 flex flex-col hover:border-[#003ac4] transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#003ac4] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            <service.icon className="text-[#003ac4] mb-4" size={32} strokeWidth={1.75} />
                            <h3 className="text-xs font-bold uppercase tracking-wide mb-2 text-[#1c1b1b]">
                                {service.title}
                            </h3>
                            <p className="text-[#434655] text-sm leading-snug">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </MaxWidth>
    )
}