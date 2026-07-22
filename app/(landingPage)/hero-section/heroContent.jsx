import React from 'react'
import HeroContentImg from './heroContentImg'
import HeroContentText from './heroContentText'


const HeroContent = () => {
  return (
    <div id="hero-content" className="overflow-x-hidden relative z-10 flex flex-col items-center w-full h-[80vh] md:h-full">
      {/* ── Text Block ── */}
     
<HeroContentText />
      {/* ── Phone + Floating Cards ── */}
      <HeroContentImg/>
    </div>
  )
}

export default HeroContent