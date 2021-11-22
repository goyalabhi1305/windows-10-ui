import React from 'react'
import './index.scss'

import Background from './images/background.png'

function Desktop() {
    return (
        <>
            <div style={{backgroundImage:`url(${Background})`}} className="desktop">
                Gs
            </div>
        </>
    )
}

export default Desktop
