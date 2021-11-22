import React from 'react'
import IconButton from '@mui/material/IconButton'
import figma from './images/figma.png'
import firefox from './images/firefox.webp'
import pc from './images/pc.png'
import vscode from './images/vscode.png'

import './index.scss'
// list of programs in array
const programs = [
    {
        name: 'Mozilla Firefox',
        id: 'firefox'
    },
    {
        name: 'This PC',
        id: 'pc'
    },
    {
        name: 'Figma',
        id: 'figma'
    },
    {
        name: 'VS Code',
        id: 'vscode'
    }
]

function ProgramIcons() {
    return (
        <div className="programs">
            {
                programs.map(program => (
                    <IconButton aria-label="program"
                        // onClick={ }
                    >
                        <img className="icon_program" src={program.id === 'firefox' ? firefox : program.id === 'pc' ? pc : program.id === 'figma' ? figma : vscode} alt={program.name} />
                    </IconButton>
                ))
            }
        </div>
    )
}

export default ProgramIcons
