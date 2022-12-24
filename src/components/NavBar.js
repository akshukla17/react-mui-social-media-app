import { Mail, Notifications, Pets } from "@mui/icons-material"
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    styled,
    Toolbar,
    Typography,
} from "@mui/material"
import React, { useState } from "react"
import ProfilePic from "../images/profile.jpg"
import NavMenuItem from "./common/NavMenuItem"

const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})
const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}))
const InfoIconsBar = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))
const UserBoxBar = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: { //none if screen size is more than 'small'
        display: "none"
    }
}))
function NavBar() {
    const [profileMenu, setProfileMenu] = useState(false);
    return (
        <AppBar position="sticky">
            <StyleToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    LAMA DEV
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <SearchBar>
                    <InputBase placeholder="Search..." />
                </SearchBar>
                <InfoIconsBar>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        onClick={e => setProfileMenu(true)}
                        src={ProfilePic} sx={{ width: "30px", height: "30px" }} />
                </InfoIconsBar>
                <UserBoxBar onClick={e => setProfileMenu(true)}>
                    <Avatar

                        src={ProfilePic} sx={{ width: "30px", height: "30px" }} />
                    <Typography variant="span">Raghav</Typography>
                </UserBoxBar>
            </StyleToolbar>
            {/* NavMenuItem is for show drop-down options on click of Profile img or Name */}
            <NavMenuItem profileMenu={profileMenu} setProfileMenu={setProfileMenu} />
        </AppBar>
    )
}

export default NavBar
