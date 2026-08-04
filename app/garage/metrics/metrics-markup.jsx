import MaxWidth from "@/components/MaxWidth";
import { Wrench, Timer, BadgeCheck, Globe } from "lucide-react";

const METRICS = [
    { Icon: Wrench, label: "Expert Artisans", id: "garage-metric-0" },
    { Icon: Timer, label: "48hr Fast Track Available", id: "garage-metric-1" },
    { Icon: BadgeCheck, label: "Professional Grade Certified", id: "garage-metric-2" },
    { Icon: Globe, label: "Global Shipping", id: "garage-metric-3" },
];

export default function MetricsMarkup() {
    return (
        <MaxWidth id="garage-metrics" className="bg-blue-700 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white px-6 md:px-10 lg:px-16">
                {METRICS.map(({ Icon, label, id }) => (
                    <div key={id} id={id} className="flex items-center gap-3">
                        <Icon size={20} />
                        <span className="text-xs font-semibold uppercase tracking-tight">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </MaxWidth>
    );
}
