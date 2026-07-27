import Header from '@/components/layouts/Header'
import MaxWidth from '@/components/MaxWidth'

import HeroBgComponent from './hero-section/heroBg'
import HeroContent from './hero-section/heroContent'
import HeroSectionGsap from './hero-section/her-section-gsap'

function HeroSectionIndex() {
  return (
    <HeroSectionGsap>
      <MaxWidth header={true} fullRelative={true} className='overflow-hidden'>
        <Header />

        <HeroBgComponent />
        <div className="HeroSec w-full relative overflow-hidden">
          <HeroContent />
        </div>
      </MaxWidth>
    </HeroSectionGsap>
  )
}

export default HeroSectionIndex