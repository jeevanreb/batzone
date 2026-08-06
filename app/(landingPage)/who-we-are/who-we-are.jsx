import MaxWidth from "@/components/MaxWidth";
import Image from "next/image";
import whoweare from "@/assets/landingPage/who-we-are/who-we-are.png";
import WhoWeAreGsap from "./who-we-are-gsap";

function WhoWeAre() {
    return (
        <WhoWeAreGsap>
            <MaxWidth
                id="who-we-are-section"
                fullRelative={true}
                className="w-full bg-white px-4 sm:px-6 py-4"
            >
                <section
                    id="who-we-are-card"
                    className="w-full rounded-3xl bg-black px-6 py-10 sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-20 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12"
                >
                    {/* Left text column */}
                    <div className="w-full md:w-[50%] lg:w-[48%] flex flex-col gap-6 text-left">
                        <div id="who-we-are-headers" className="flex flex-col gap-1.5 md:gap-2">
                            {/* <span
                                id="who-we-are-subtitle"
                                className="text-[#FFD700] text-lg md:text-3xl font-light tracking-wider"
                            >
                                About Us
                            </span> */}
                            <h2
                                id="who-we-are-title"
                                className="text-[#FFD700] text-2xl sm:text-4xl md:text-3xl font-bold tracking-tight leading-tight"
                            >
                                About Us
                            </h2>
                        </div>

                        <div
                            id="who-we-are-description"
                            className="flex flex-col gap-4 text-gray-400 text-sm sm:text-base leading-relaxed md:leading-relaxed"
                        >
                            <p>
BatZone is proudly based in Hemmadi, dedicated to providing quality sports products and services. We offer all types of sports items, including cricket equipment, along with customized jerseys for tournaments, schools, clubs, and corporate teams. We also supply premium trophies, medals, and mementos to celebrate every sporting achievement.
                            </p>
                            <p>
                            Our BatZone Garage specializes in bat customization, repairs, modifications, handle replacement, and restoring broken bats. We also organize complete cricket tournaments by managing everything from the pitch and umpires to stage setup and event coordination. Recently, we launched BatZone Bidding Auction, a live online platform that allows team owners to bid for players from anywhere, making cricket and other sports auctions simple, transparent, and exciting. BatZone is your one-stop destination for sports equipment, tournament management, and innovative sports solutions.
                            </p>
                        </div>
                    </div>

                    {/* Right image column */}
                    <div
                        id="who-we-are-image-container"
                        className="w-full md:w-[50%] lg:w-[50%] flex justify-center items-center"
                    >
                        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-square lg:aspect-[4/3] max-w-[480px] lg:max-w-[550px]">
                            <Image
                                src={whoweare}
                                alt="Who We Are - BatZone Sports Store, Hemmadi"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 550px"
                                priority
                            />
                        </div>
                    </div>
                </section>
            </MaxWidth>
        </WhoWeAreGsap>
    );
}

export default WhoWeAre;