import { Menu, MenuItem } from '@mui/material'
import React from 'react'

function NavMenuItem({ profileMenu, setProfileMenu }) {
    return (
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            // anchorEl={anchorEl}
            open={profileMenu}
            onClose={e => setProfileMenu(false)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
        </Menu>
    )
}

export default NavMenuItem