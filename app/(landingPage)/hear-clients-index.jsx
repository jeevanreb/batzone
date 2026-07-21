import React from 'react'
import HearClientsGsap from './hear-clients/hear-clients-gsap'
import HearClientsMarkup from './hear-clients/hear-clients-markup'

function HearClientsIndex() {
    return (
        <>
            <HearClientsGsap>
                <HearClientsMarkup />
            </HearClientsGsap>
        </>
    )
}

export default HearClientsIndex