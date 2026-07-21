import Image from "next/image";
import MaxWidth from "@/components/MaxWidth";
import boyCall from "@/assets/landingPage/help-section/boyCall.png";
import girlCall from "@/assets/landingPage/help-section/girlCall.png";
import rupee from "@/assets/landingPage/help-section/rupee.png";
import rupee2 from "@/assets/landingPage/help-section/rupee2.png";

function HelpSection() {
  return (
    <>
      <MaxWidth  id="help-section" className="relative w-full bg-gradient-to-b from-white to-[#FBDEE9]">
        <div className="relative flex min-h-[420px] flex-col items-center justify-center px-4 py-16 text-center md:min-h-[560px]">
          {/* Top floating rupee coin (clipped at the top edge) */}
          <Image
          id="hs-data"
            src={rupee}
            alt=""
            width={1080}
            height={1080}
            aria-hidden
            className="pointer-events-none absolute -top-14 left-[33%] hidden w-[95px] -rotate-12 select-none md:block"
          />

          {/* Left avatar (with concentric rings baked into the image) */}
          <Image
          id="hs-data"
            src={boyCall}
            alt="Support specialist on a call"
            width={280}
            height={280}
            className="pointer-events-none absolute left-0 top-[58%] hidden w-[200px] -translate-y-1/2 select-none md:block lg:left-[4%] lg:w-[230px]"
          />

          {/* Right avatar */}
          <Image
          id="hs-data"
            src={girlCall}
            alt="Support specialist wearing a headset"
            width={280}
            height={280}
            className="pointer-events-none absolute right-0 top-4 hidden w-[170px] select-none md:block lg:right-[5%] lg:w-[200px]"
          />

          {/* Bottom floating rupee coin */}
          <Image
          id="hs-data"
            src={rupee2}
            alt=""
            width={1080}
            height={1080}
            aria-hidden
            className="pointer-events-none absolute -bottom-6 right-[25%] hidden w-[150px] rotate-12 select-none md:block lg:w-[170px]"
          />

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center">
            <p
              id="hs-data"
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E51A6E]"
            >
              Need More Help?
            </p>

            <h2
             id="hs-data"
              className="mt-3 text-3xl font-semibold leading-tight text-[#0F1A2A] md:text-[42px] md:leading-[1.15]"
            >
              Ready to Transform Your 
              <br />
              Payment Operations?
            </h2>

            <p
              id="hs-data"
              className="mt-5 max-w-[440px] text-sm leading-relaxed text-[#8A8A93]"
            >
              A clean, modern interface designed for both business owners and
              developers. Access data and tools effortlessly on desktop or
              mobile.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
              <button
              id="hs-data"
              type="button"
              className=" rounded-full bg-[var(--brand-pink)] hover:bg-[var(--brand-pink-hover)] px-8 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#C8125C]"
            >
              Contact Sales
            </button>
            <button
              id="hs-data"
              type="button"
              className=" rounded-full bg-black hover:bg-gray-800 px-8 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#C8125C]"
            >
              Talk To An Expert
            </button>
            </div>
          </div>
        </div>
      </MaxWidth>
    </>
  );
}

export default HelpSection;
