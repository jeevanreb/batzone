import MaxWidth from "@/components/MaxWidth";
import CtaButtons from "./cta-buttons";

export default function CtaMarkup() {
    return (
        <MaxWidth id="tournament-cta" className="py-20 md:py-28 bg-[#003AC4] relative overflow-hidden">
            <div id="tournament-cta-bg" className="absolute inset-0 opacity-10 pointer-events-none">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern height="100" id="pattern" patternUnits="userSpaceOnUse" width="100" x="0" y="0">
                        <path d="M0 100 L100 0" stroke="white" strokeWidth="2" />
                    </pattern>
                    <rect fill="url(#pattern)" height="100%" width="100%" />
                </svg>
            </div>
            <div className="relative z-10 px-6 md:px-16 text-center max-w-5xl mx-auto">
<h2
                    id="tournament-cta-heading"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight tracking-tight font-bold text-white uppercase mb-4 max-w-4xl mx-auto"
                >
                    One Partner for Your Entire Tournament
                </h2>
                <p
                    id="tournament-cta-desc"
                    className="text-base sm:text-lg md:text-xl font-normal text-[#D9DDFF] mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    From initial planning to the final trophy presentation, we
                    handle the complexity so you can focus on the game.
                </p>
                <CtaButtons />
            </div>
        </MaxWidth>
    );
}
