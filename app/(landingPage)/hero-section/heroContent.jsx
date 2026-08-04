import React from 'react'
import HeroContentImg from './heroContentImg'
import HeroContentText from './heroContentText'


const HeroContent = () => {
  return (
<div id="hero-content" className="overflow-x-hidden relative z-10 flex flex-col items-center w-full min-h-[60vh] md:min-h-[75vh]">
      {/* ── Text Block ── */}
     
<HeroContentText />
      {/* ── Phone + Floating Cards ── */}
      <HeroContentImg/>
    </div>
  )
}

export default HeroContent