import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import Typography from '@mui/material/Typography'
import './other.scss'
import WifiIcon from '@mui/icons-material/Wifi';
import IconButton from '@mui/material/IconButton'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
function Other() {
    const date = new Date()

    return (
        <div className="other">

            <IconButton color="inherit" aria-label="more">
                <KeyboardArrowUpOutlinedIcon fontSize="small" />
            </IconButton>

            <IconButton color="inherit" aria-label="video">
                <VideocamOutlinedIcon fontSize="small" />
            </IconButton>

            <IconButton color="inherit" aria-label="wifi">
                <WifiIcon className="wifi-icon" fontSize="small" />
            </IconButton>

            <Typography color="inherit" variant="subtitle2" >
                ENG
            </Typography>

            <div className="time">
                <Typography color="inherit" variant="subtitle2" >
                    {date.getHours()}:{date.getMinutes()}
                </Typography>
                <Typography color="inherit" variant="subtitle2" >
                    {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
                </Typography>
            </div>

            <IconButton color="inherit" aria-label="wifi">
                <MessageIcon fontSize="medium" />
            </IconButton>
        </div>
    )
}

export default Other
