import Image from "next/image";
import MaxWidth from "@/components/MaxWidth";
import client1 from "@/assets/landingPage/hear-clients/client1.png";
import client2 from "@/assets/landingPage/hear-clients/client2.png";
import client3 from "@/assets/landingPage/hear-clients/client3.png";

const testimonials = [
    {
        quote:
            "I got my old cricket bat repaired and customized at BatZone Garage, and it feels better than a brand-new bat. Their craftsmanship and attention to detail are simply outstanding.",
        avatar: client1,
        name: "Rakesh Shetty",
        role: "Club Cricketer, Kundapura",
        featured: true,
    },
    {
        quote:
            "BatZone has become our one-stop destination for tournaments. From customized jerseys and trophies to complete event management, everything was handled professionally. Highly recommended!",
        avatar: client2,
        name: "Naveen Poojary",
        role: "Tournament Organizer",
        featured: false,
    },
    {
        quote:
            "The BatZone Bidding Auction website made our player auction smooth and exciting. Team owners participated live from different locations, making the entire auction transparent and hassle-free.",
        avatar: client3,
        name: "Praveen Acharya",
        role: "Cricket League Team Owner",
        featured: false,
    },
];

function StarRating() {
    return (
        <div className="flex gap-1.5" aria-label="Rated 5 out of 5">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 20 20"
                    aria-hidden
                    className="h-5 w-5 fill-[#2352ea]"
                >
                    <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.1l-4.94 2.6.94-5.49-4-3.9 5.53-.8L10 1.5z" />
                </svg>
            ))}
        </div>
    );
}

function HearClientsMarkup() {
    return (
        <>
            <MaxWidth id="hear-clients" fullRelative={true} className="relative w-full overflow-hidden">
                {/* Soft pink backdrop fading into white behind the heading */}
                <div className="relative flex flex-col items-center px-4 py-12 text-center lg:py-16">
                    {/* Heading */}
                    <h2
                        id="hc-heading"
                        className="text-2xl font-semibold leading-tight text-[#2352ea] md:text-3xl lg:text-[34px]"
                    >
                        Hear from Our Clients
                    </h2>

                    <p
                        id="hc-subheading"
                        className="mt-4 max-w-[700px] text-sm leading-relaxed text-[#717171]"
                    >
                        From bat customization to complete tournament management &mdash;
                        cricketers and organizers across Karnataka trust BatZone for
                        premium quality and professional service.
                        Here&rsquo;s what our clients have to say.
                    </p>

                    {/* Cards */}
                    <div className="relative mt-10 md:mt-26 w-full flex flex-wrap md:flex-nowrap justify-center gap-6">
                        <div className="bg-[#265aec26] h-[90%] w-full absolute top-24 blur-[100px] rounded-full transform -translate-y-1/2" />
                        {testimonials.map((t, index) => (
                            <article
                                id={`hc-card-${index}`}
                                key={t.name}
                                className={`${index === 1 && 'md:mt-10'} flex md:h-[440px] h-full sm:w-[40%] w-full shadow-xs md:max-w-[320px] flex-col rounded-2xl bg-white p-7 text-left lg:p-8`}
                            >
                                <p className="text-[15px] leading-[1.7] text-[#333333]">
                                    {t.quote}
                                </p>

                                <div className="mt-auto pt-10">
                                    <StarRating />

                                    <div className="mt-6 flex items-center gap-4">
                                        {/* <Image
                                            src={t.avatar}
                                            alt={`${t.name}, ${t.role}`}
                                            width={96}
                                            height={96}
                                            className="h-14 w-14 rounded-full object-cover ring-1 ring-[#F0DCE3]"
                                        /> */}
                                        <div>
                                            <p className="text-base font-semibold text-[#1A1A1A]">
                                                {t.name}
                                            </p>
                                            <p className="mt-1 text-sm leading-snug text-[#1A1A1A]">
                                                {t.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </MaxWidth>
        </>
    );
}

export default HearClientsMarkup;
