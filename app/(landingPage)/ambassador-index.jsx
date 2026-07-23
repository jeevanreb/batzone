import React from 'react';
import AmbassadorGsap from './ambassador/ambassador-gsap';
import AmbassadorMarkup from './ambassador/ambassador-markup';

function AmbassadorIndex() {
    return (
        <AmbassadorGsap>
            <AmbassadorMarkup />
        </AmbassadorGsap>
    );
}

export default AmbassadorIndex;
