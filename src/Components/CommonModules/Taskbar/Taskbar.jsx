import React from 'react'
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import './index.scss'

import Start from './StartMenu/Start'
import Other from './DateOther/Other';
import ProgramIcons from './ProgramIcons/ProgramIcons';

function Taskbar() {
    return (
        <>
            <Paper classes={{ root: 'taskbar' }} className="taskbar" square elevation={0}>
                <div style={{display:'flex'}}>
                    <Start />
                    <Divider orientation="vertical" />
                <ProgramIcons />
                </div>
                    <Divider orientation="vertical" />
                <div>
                    <Other />
                </div>
            </Paper>
        </>
    )
}

export default Taskbar
