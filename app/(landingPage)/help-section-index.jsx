import React from 'react'
import HelpSectionGsap from './help-section/help-section-gsap'
import HelpSectionMarkup from './help-section/help-section-markup'

function HelpSectionIndex() {
  return (
    <>
      <HelpSectionGsap>
        <HelpSectionMarkup />
      </HelpSectionGsap>
    </>
  )
}

export default HelpSectionIndex