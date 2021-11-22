import React from 'react'
import IconButton from '@mui/material/IconButton'
import WindowIcon from '@mui/icons-material/Window';
function Start() {
    return (
        <>
            <IconButton disableRipple color="inherit" aria-label="start menu"
            // onClick={ }
            >
                <WindowIcon fontSize="large" />
            </IconButton>
        </>
    )
}

export default Start
