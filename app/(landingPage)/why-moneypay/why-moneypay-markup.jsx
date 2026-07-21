import React from 'react'
import MaxWidth from '@/components/MaxWidth'
import Image from 'next/image'
import CenterMImg from '@/assets/landingPage/why-batzone/centerM.png'
import UnifiedFinancialIcon from '@/assets/landingPage/why-batzone/unfiltered_financial.png'
import SecureReliableIcon from '@/assets/landingPage/why-batzone/secure_reliable.png'
import SeamlessIcon from '@/assets/landingPage/why-batzone/seamless.png'
import RealTimeIcon from '@/assets/landingPage/why-batzone/real_time.png'

const WhyMoneypayMarkup = () => {
  return (
    <>
      <MaxWidth fullRelative={true} className="w-full py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-10">
        {/* ── Dashed Border Container ── */}
        <div
          id="why-batzone-container"
          className="relative w-full rounded-2xl sm:rounded-3xl px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 lg:py-14"
        >
          {/* ── Section Tagline ── */}
          <p
            id="why-batzone-tagline"
            className="text-center text-sm sm:text-base font-semibold text-[var(--brand-pink)] tracking-wide mb-2 sm:mb-3"
          >
            Why Moneypay
          </p>

          {/* ── Section Heading ── */}
          <h2
            id="why-batzone-heading"
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[var(--ink)] leading-tight"
          >
            Manage Your Business with Confidence
            <br />
            <span className="block mt-1">Everything You Need, All in One Place</span>
          </h2>

          {/* ── Features Grid + Center Image ── */}
          <div
            id="why-batzone-features"
            className="relative mt-10 sm:mt-14 lg:mt-16"
          >
            {/* Center Image – visible on md+ */}
            <div className="hidden md:flex absolute inset-0 items-center justify-center z-0 pointer-events-none">
              <div className="w-[360px] lg:w-[600px]! xl:w-[380px]  ">
                <Image
                  src={CenterMImg}
                  alt="BatZone M Symbol"
                  className="w-full h-auto object-cover object-center"
                />
              </div>
            </div>

            {/* 2x2 Grid of Feature Cards */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-y-16 lg:gap-x-0   ">

              {/* ── Card 1: Unified Financial Platform (Top-Left) ── */}
              <div id="why-batzone-card-unified" className="flex flex-col   sm:items-start  text-center sm:text-left sm:pr-8 lg:pr-20 mx-auto !items-center justify-center ">
                <Image
                  src={UnifiedFinancialIcon}
                  alt="Unified Financial Platform Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain -mb-2 relative z-2"
                />
                <span className=" w-48 text-center inline-block bg-[var(--ink)] text-white text-xs sm:text-sm px-2 sm:px-2 py-2 rounded-full mb-3">
                  Unified Financial Platform
                </span>
                <p className="text-xs sm:text-sm text-gray-500  text-center leading-relaxed max-w-xs">
                  Manage payments, payouts, collections,
                  and settlements from one place.
                </p>
              </div>

              {/* ── Card 2: Secure & Reliable (Top-Right) ── */}
              <div id="why-batzone-card-secure" className="flex flex-col items-center sm:items-end text-center sm:text-right sm:pl-8 lg:pl-20 mx-auto !items-center justify-center ">
                <Image
                  src={SecureReliableIcon}
                  alt="Secure & Reliable Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain -mb-2 relative z-2"
                />
                <span className=" w-48 text-center inline-block bg-[var(--ink)] text-white text-xs sm:text-sm px-2 sm:px-2 py-2 rounded-full mb-3">
                  Secure &amp; Reliable
                </span>
                <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed max-w-xs">
                  Enterprise-grade security, compliance,
                  and transaction monitoring built in.
                </p>
              </div>

              {/* Center Image – mobile only, between top and bottom cards */}
              <div className="flex md:hidden items-center justify-center col-span-1 sm:col-span-2 py-4">
                <div className="w-[200px] sm:w-[240px]">
                  <Image
                    src={CenterMImg}
                    alt="BatZone M Symbol"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* ── Card 3: Seamless Integrations (Bottom-Left) ── */}
              <div id="why-batzone-card-seamless" className="flex flex-col items-center sm:items-start text-center sm:text-left sm:pr-8 lg:pr-20 mx-auto !items-center justify-center ">
                <Image
                  src={SeamlessIcon}
                  alt="Seamless Integrations Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain -mb-2 relative z-2"
                />
                <span className=" w-48 text-center inline-block bg-[var(--ink)] text-white text-xs sm:text-sm font-semibold px-2 sm:px-2 py-2 rounded-full mb-3  ">
                  Seamless Integrations
                </span>
                <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed max-w-xs">
                  Go live faster with powerful APIs, simple
                  integrations, and expert support.
                </p>
              </div>

              {/* ── Card 4: Real-Time Insights (Bottom-Right) ── */}
              <div id="why-batzone-card-realtime" className="flex flex-col items-center sm:items-end text-center sm:text-right sm:pl-8 lg:pl-20 mx-auto !items-center justify-center ">
                <Image
                  src={RealTimeIcon}
                  alt="Real-Time Insights Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain -mb-2 relative z-2"
                />
                <span className=" w-48 text-center inline-block bg-[var(--ink)] text-white text-xs sm:text-sm px-2 sm:px-2 py-2 rounded-full mb-3">
                  Real-Time Insights
                </span>
                <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed max-w-xs">
                  Gain complete visibility into transactions,
                  settlements, and business performance.
                </p>
              </div>
            </div>
          </div>

          {/* ── Bottom Description ── */}
          <p
            id="why-batzone-bottom-text"
            className="text-center text-xs sm:text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto mt-10 sm:mt-14 lg:mt-16"
          >
            From payments and payouts to settlements and reporting, BatZone provides the tools
            and support businesses need to operate efficiently and grow securely.
          </p>
        </div>
      </MaxWidth>
    </>
  )
}

export default WhyMoneypayMarkup