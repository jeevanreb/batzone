import Image from "next/image";
import MaxWidth from "@/components/MaxWidth";
import handshake from "@/assets/landingPage/what-we-do/handshake.png";

function WhatWeDo({ accounts, features }) {
  return (
    <MaxWidth id="what-we-do">
      <section className="w-full rounded-3xl bg-[#0A0A0A] px-5 py-10 sm:px-6 md:px-10 md:py-12 lg:px-16 lg:py-14">
        {/* Top area */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Heading block */}
          <div id="wwd-data" className="max-w-md">
            <p className="text-sm font-medium text-[#E51A6E]">What we do</p>
            <h2
              className="mt-3 bg-clip-text text-2xl font-semibold leading-tight text-transparent sm:text-3xl lg:text-4xl"
              style={{
                backgroundImage:
                  "linear-gradient(115deg, #7A7A82 0%, #FFFFFF 38%, #7A7A82 62%, #7A7A82 100%)",
              }}
            >
              Fast, Secure <br /> Payment Tools Built for Indian Businesses
            </h2>
          </div>

          {/* Account types card */}
          <div
            id="wwd-data"
            className="w-full rounded-2xl bg-[#141414] p-5 sm:p-6 md:p-7 lg:max-w-2xl"
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="flex md:flex-nowrap flex-wrap gap-6 items-center">
                <Image
                  src={handshake}
                  alt=""
                  width={50}
                  height={50}
                  className="h-16 w-16 shrink-0 select-none rounded-xl"
                />
                <p className=" leading-relaxed text-white">
                  Whether you're a startup, fintech, enterprise, marketplace, or growing business, BatZone provides the infrastructure to simplify payments and financial operations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom feature columns */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:mt-14 lg:gap-16">
          {features.map((feature) => (
            <div id="wwd-data" key={feature.title} className="flex flex-col">
              <div className="flex items-center gap-3">
                <Image
                  src={feature.icon}
                  alt=""
                  width={50}
                  height={51}
                  className="h-11 w-11 shrink-0 select-none"
                />
                <h3 className="text-base font-medium text-white lg:text-lg">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white">
                {feature.description}
              </p>
              <div className="mt-6 h-px w-full max-w-xs bg-[#262626]" />
            </div>
          ))}
        </div>
      </section>
    </MaxWidth>
  );
}

export default WhatWeDo;
