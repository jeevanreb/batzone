import React from 'react'

const heroContentText = () => {
  return (
    <div className="flex flex-col items-center text-center pt-24 sm:pt-28 lg:pt-20 px-4 sm:px-6">
      {/* Tagline */}
      <p id="hero-tagline" className="text-sm sm:text-base tracking-widest text-gray-500 mb-3 sm:mb-4">
          The Ultimate Cricket Ecosystem
        </p>

      {/* Heading */}
      <h1
        id="hero-heading"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-[#FFD700] to-[#2352ea] bg-clip-text text-transparent"
      >         BAT ZONE
        {/* <br /> */}
        {/* <span className="text-[var(--hero-pink)]">Every Payment Journey.</span> */}
      </h1>

      {/* Sub-description */}
      <p id="hero-description" className="mt-4 sm:mt-3 text-sm sm:text-base max-w-xl lg:max-w-2xl leading-relaxed ">
        From premium sports equipment and professional bat customization
        to custom jerseys, live player auctions and complete tournament
        management — everything under one roof.
      </p>

      {/* CTA Buttons */}
      {/* <div id="hero-cta" className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button className="w-full lg:w-50  sm:w-auto px-8 py-2 sm:py-2 rounded-full bg-(--hero-pink) text-white text-sm sm:text-base font-semibold shadow-[0_6px_16px_rgba(229,26,110,0.35)] hover:bg-(--hero-pink) transition-all duration-200 cursor-pointer hover:scale-105">
            Get Started
          </button>
          <button className="w-full lg:w-50  sm:w-auto px-8 py-2 sm:py-2 rounded-full bg-white text-(--ink) text-sm sm:text-base font-semibold ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105 ">
            Schedule a Demo
          </button>
        </div> */}
    </div>
  )
}

export default heroContentText