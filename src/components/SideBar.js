import {
    Home,
    Laptop,
    MobileFriendly,
    ModeNight,
    Person3,
    Settings,
} from "@mui/icons-material"
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
} from "@mui/material"
import React from "react"

function SideBar({ mode, setMode }) {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            {/* why adding another box for position because it will expand in the above box space */}
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#friends">
                            <ListItemIcon>
                                <Person3 />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#settings">
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#laptop">
                            <ListItemIcon>
                                <Laptop />
                            </ListItemIcon>
                            <ListItemText primary="Laptop" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#mobile">
                            <ListItemIcon>
                                <MobileFriendly />
                            </ListItemIcon>
                            <ListItemText primary="Mobile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#mobile">
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch onChange={e => setMode(mode === 'dark' ? 'light' : 'dark')} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default SideBar
