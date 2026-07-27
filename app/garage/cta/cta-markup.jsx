import MaxWidth from "@/components/MaxWidth";
import CtaButtons from "./cta-buttons";

export default function CtaMarkup() {
    return (
        <MaxWidth
            id="garage-cta"
            className="py-16 bg-neutral-900"
        >
            <div className="px-6 md:px-10 lg:px-16 text-center text-white">
                <h2
                    id="garage-cta-heading"
                    style={{ fontFamily: "var(--font-oswald)" }}
                    className="uppercase font-bold text-3xl md:text-4xl mb-4"
                >
                    Ready to Elevate Your Game?
                </h2>
                <p
                    id="garage-cta-sub"
                    className="text-base md:text-lg mb-8 max-w-xl mx-auto opacity-80"
                >
                    Don&apos;t let a poorly balanced bat hold back your performance.
                    Book your spot in the Garage today.
                </p>
                <div
                    id="garage-cta-btns"
                    className="flex flex-col md:flex-row justify-center items-center gap-4"
                >
                    <CtaButtons />
                </div>
            </div>
        </MaxWidth>
    );
}
