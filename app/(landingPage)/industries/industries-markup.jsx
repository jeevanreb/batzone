import Image from "next/image";
import MaxWidth from "@/components/MaxWidth";

// variant → pill background / text colour
const variants = {
    pink: "bg-[#EA2653] text-white",
    dark: "bg-[#0A0A0A] text-white",
    maroon: "bg-[#5C1E30] text-white",
};

function IndustriesMarkup({ rows }) {
    return (
        <MaxWidth
            id="industries"
            fullRelative={true}
            className="relative w-full overflow-hidden"
        >
            <div className="flex flex-col items-center gap-12 px-4 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-20">
                {/* Left — heading + copy */}
                <div className="max-w-xl text-center lg:text-left">
                    <h2
                        id="industries-head"
                        className="text-3xl font-semibold leading-tight text-[#0A0A0A] sm:text-4xl lg:text-5xl"
                    >
                        Trusted Across Industries, Powering Growth.
                    </h2>
                    <p
                        id="industries-head"
                        className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-[#717171] sm:text-base lg:mx-0"
                    >
                        Our solutions are built to scale with your organization, helping you
                        enhance customer experiences, accelerate innovation, and achieve
                        long-term business goals.
                    </p>
                </div>

                {/* Right — staggered industry pill cluster */}
                <div className="relative flex w-full max-w-xl flex-col items-center gap-3 sm:gap-4 lg:w-auto">
                    {/* Soft pink glow behind the cluster */}
                    <div className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8044F26] blur-[90px]" />

                    {rows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
                        >
                            {row.map((pill) => (
                                <span
                                    id="industries-pill"
                                    key={pill.label}
                                    className={`inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-sm font-medium sm:px-6 sm:text-base ${variants[pill.variant]}`}
                                >
                                    <Image
                                        src={pill.icon}
                                        alt=""
                                        width={24}
                                        height={24}
                                        className="h-5 w-5 shrink-0 select-none object-contain"
                                    />
                                    {pill.label}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </MaxWidth>
    );
}

export default IndustriesMarkup;
