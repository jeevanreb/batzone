import Image from "next/image";
import MaxWidth from "@/components/MaxWidth";
import ambassadorImage from "@/assets/landingPage/ambassador/image_1acdd354.png";

function AmbassadorMarkup() {
    return (
        <MaxWidth
            id="ambassador-section"
            fullRelative={true}
            className="w-full bg-black px-4 sm:px-6 py-6 sm:py-10"
        >
            <section
                id="ambassador-card"
                className="w-full rounded-3xl bg-zinc-950 border border-zinc-800/80 px-6 py-10 sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 shadow-2xl relative overflow-hidden"
            >
                {/* Background ambient glows mixing #2352ea and #FFD700 */}
                <div
                    id="ambassador-bg-glow"
                    className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"
                />
                <div
                    id="ambassador-bg-glow-2"
                    className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2352ea]/15 rounded-full blur-3xl pointer-events-none"
                />

                {/* Left Column: Ambassador Image & Badges (Previous Gold/Yellow Design) */}
                <div
                    id="ambassador-image-container"
                    className="w-full lg:w-[45%] flex flex-col items-center justify-center relative"
                >
                    <div
                        id="ambassador-image-wrapper"
                        className="relative w-full max-w-[420px] lg:max-w-[480px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-yellow-500/40 shadow-2xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black group hover:border-yellow-500/70 transition-colors duration-500"
                    >
                        <Image
                            src={ambassadorImage}
                            alt="Raja Saligrama - BatZone Brand Ambassador"
                            fill
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 480px"
                            priority
                        />
                        {/* Gradient overlay at bottom for smooth contrast */}
                        <div
                            id="ambassador-image-gradient"
                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"
                        />

                        {/* Floating Badge on Image (Gold/Yellow Previous Styling) */}
                        <div
                            id="ambassador-image-badge"
                            className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md border border-yellow-500/40 rounded-xl p-3.5 flex items-center justify-between shadow-xl"
                        >
                            <div className="flex flex-col">
                                <span className="text-[#FFD700] text-xs font-bold uppercase tracking-wider">
                                    Brand Ambassador
                                </span>
                                <span className="text-white text-sm font-extrabold">
                                    Raja Saligrama
                                </span>
                            </div>
                            <span className="bg-yellow-500/20 text-[#FFD700] text-xs px-3 py-1 rounded-full border border-yellow-500/30 font-semibold">
                                Johnson Kundapura
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Ambassador Details & Testimonial */}
                <div
                    id="ambassador-content-container"
                    className="w-full lg:w-[55%] flex flex-col gap-6 text-left relative z-10"
                >
                    {/* Subtitle */}
                    <div id="ambassador-subtitle-wrapper" className="inline-flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFD700] animate-pulse" />
                        <span
                            id="ambassador-subtitle"
                            className="text-[#2352ea] text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase"
                        >
                            Meet Our Brand Ambassador
                        </span>
                    </div>

                    {/* Title */}
                    <h2
                        id="ambassador-title"
                        className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
                    >
                        Raja Saligrama
                    </h2>

                    {/* Role Tagline */}
                    <p
                        id="ambassador-role"
                        className="text-[#FFD700] text-sm sm:text-base font-semibold tracking-wide -mt-3"
                    >
                        Professional Tennis Ball Cricketer | Johnson Kundapura
                    </p>

                    {/* Bio Section */}
                    <div
                        id="ambassador-bio-container"
                        className="flex flex-col gap-4 text-zinc-300 text-sm sm:text-base leading-relaxed"
                    >
                        <p id="ambassador-bio-1">
                            Raja Saligrama is one of the most recognized names in Karnataka&apos;s tennis ball cricket circuit and proudly represents Johnson Kundapura. Known for his aggressive batting, match-winning performances, and consistent contributions in competitive tournaments, Raja has earned the respect of players and cricket enthusiasts alike. He has participated in numerous prestigious tennis ball cricket tournaments, showcasing his talent on some of the biggest stages in the sport.
                        </p>
                        <p id="ambassador-bio-2">
                            With years of experience and a passion for the game, Raja perfectly represents BatZone&apos;s commitment to quality, performance, and innovation. His dedication to cricket and pursuit of excellence make him the ideal face of the BatZone family, inspiring the next generation of cricketers.
                        </p>
                    </div>

                    {/* Review / Testimonial Card with Scale Animation target */}
                    <div
                        id="ambassador-review-card"
                        className="mt-2 rounded-2xl bg-zinc-900/90 border border-[#2352ea]/40 p-5 sm:p-6 shadow-xl relative overflow-hidden group hover:border-[#FFD700]/60 transition-colors duration-300 transform-gpu"
                    >
                        <div
                            id="ambassador-quote-icon"
                            className="absolute -top-2 right-4 text-[#2352ea]/15 text-7xl font-serif select-none pointer-events-none"
                        >
                            &ldquo;
                        </div>

                        <div id="ambassador-review-header" className="flex items-center justify-between mb-3">
                            <h3
                                id="ambassador-review-title"
                                className="text-[#2352ea] text-base sm:text-lg font-bold flex items-center gap-2"
                            >
                                <svg
                                    className="w-5 h-5 text-[#FFD700]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Raja Saligrama&apos;s Review
                            </h3>
                            <div className="flex gap-1 text-[#FFD700]">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        <blockquote
                            id="ambassador-review-text"
                            className="text-zinc-200 text-xs sm:text-sm italic leading-relaxed relative z-10"
                        >
                            &ldquo;I&apos;ve been using BatZone bats for my matches, and the balance, pickup, and overall comfort are outstanding. The BatZone Garage customizes every bat according to a player&apos;s style, making it feel perfectly balanced at the crease. Whether it&apos;s bat preparation, knocking, handle replacement, or complete customization, their workmanship is exceptional. I proudly recommend BatZone to every cricketer who wants the best performance from their bat.&rdquo;
                        </blockquote>
                    </div>
                </div>
            </section>
        </MaxWidth>
    );
}

export default AmbassadorMarkup;
