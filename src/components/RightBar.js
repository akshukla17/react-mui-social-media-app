import { Avatar, AvatarGroup, Box, Typography } from "@mui/material"
import React from "react"
import LatestConversations from "./common/LatestConversations"
import LatestPhots from "./common/LatestPhots"

function RightBar() {
    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            {/* why adding another box for position because it will expand in the above box space */}
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100} mb={2}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://material-ui.com/static/images/avatar/2.jpg"
                    />
                    <Avatar alt="No Img" src="" />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://material-ui.com/static/images/avatar/3.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/6.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                    />
                </AvatarGroup>
                <LatestPhots />
                <LatestConversations />
            </Box>
        </Box>
    )
}

export default RightBar
