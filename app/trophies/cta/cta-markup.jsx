import MaxWidth from "@/components/MaxWidth";
import CtaButtons from "./cta-buttons";

export default function CtaMarkup() {
    return (
        <MaxWidth id="trophies-cta" className="bg-white py-20 md:py-24">
            <div className="px-6 md:px-10 lg:px-16">
                <div className="text-center py-16 md:py-20 px-4 border border-[#e5e6ec] bg-[#fafafc] shadow-sm">
                    <h2
                        id="trophies-cta-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-6 text-[#111318]"
                    >
                        Make Your Tournament Unforgettable. <br /> Order Your Awards Today.
                    </h2>
                    <p
                        id="trophies-cta-desc"
                        className="text-base sm:text-lg text-[#5b5d6b] max-w-2xl mx-auto mb-10"
                    >
                        Premium trophies, medals and custom awards for every tournament,
                        academy and championship.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center mt-2">
                        <CtaButtons />
                    </div>
                </div>
            </div>
        </MaxWidth>
    );
}
