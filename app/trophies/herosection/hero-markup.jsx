import MaxWidth from "@/components/MaxWidth";
import Header from "@/components/layouts/Header";
import Image from "next/image";
import hero from "@/assets/trophies/image.png";
import HeroButtons from "./hero-buttons";

export default function HeroMarkup() {
    return (
        <MaxWidth
            id="trophies-hero"
            header={true}
            fullRelative={true}
            className="relative overflow-hidden min-h-[100svh] lg:h-screen flex items-center pt-28 pb-16 md:pb-20 bg-white"
        >
            <Header />

            {/* Soft background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(35,82,234,0.06)_0%,rgba(35,82,234,0)_60%),linear-gradient(180deg,#ffffff_0%,#ffffff_60%,#ffffff_100%)]" />

            <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
                {/* Text content */}
                <div className="order-2 lg:order-1 max-w-2xl text-center lg:text-left">
                    <div className="border-l-4 border-[#e3c600] pl-4 inline-block lg:block mb-4 md:mb-5">
                        <span
                            id="trophies-hero-badge"
                            className="text-xs uppercase tracking-[0.2em] font-semibold text-[#a68b00]"
                        >
                            Legacy Of Champions
                        </span>
                    </div>

                    <h1
                        id="trophies-hero-heading"
                        className="text-[2.6rem] leading-none sm:text-6xl md:text-5xl font-extrabold uppercase tracking-tight text-[#111318] mb-4 md:mb-5"
                    >
                        Celebrate Every <br />
                        <span className="text-[#2352ea]">Victory</span> with <br />
                        Premium Awards
                    </h1>

                    <p
                        id="trophies-hero-desc"
                        className="text-base sm:text-lg leading-7 text-[#5b5d6b] max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8"
                    >
                        From local tournaments to state championships, we offer a complete
                        range of premium trophies, medals, and customized awards designed to
                        honor every champion in style.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                        <HeroButtons />
                    </div>
                </div>

                {/* Trophy image on concentric rings */}
                <div
                    id="trophies-hero-visual"
                    className="order-1 lg:order-2 relative w-[62%] xs:w-[52%] sm:w-[42%] md:w-[34%] lg:w-full lg:max-w-md aspect-square flex items-center justify-center shrink-0"
                >
                    <div
                        id="trophies-hero-ring1"
                        className="heroCircleCon c1 absolute w-[85%] aspect-square rounded-full blur-xs opacity-60 ring-1 ring-[#e3c600] flex justify-center items-center"
                    >
                        <div
                            id="trophies-hero-ring2"
                            className="c2 w-[67%] aspect-square rounded-full ring-2 ring-[#e3c600] opacity-100! flex justify-center items-center"
                        >
                            <div
                                id="trophies-hero-ring3"
                                className="c3 w-[67%] aspect-square rounded-full ring-2 ring-[#e3c600] opacity-100! flex justify-center items-center"
                            />
                        </div>
                    </div>

                    <Image
                        id="trophies-hero-image"
                        src={hero}
                        alt="Premium awards and trophies crafted by BatZone"
                        className="relative z-10 w-full h-auto object-contain rounded-md drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>
        </MaxWidth>
    );
}