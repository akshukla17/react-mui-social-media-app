import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProfilePic from '../../images/profile.jpg';

const StyleModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})


function AddPost() {
    const [addPostModal, setAddPostModal] = useState(false)
    return (
        <>
            <Tooltip title="Add Post" sx={{
                position: "fixed",
                bottom: 20,
                left: { xs: "calc(50%)", md: 30 }
            }}
                onClick={e => setAddPostModal(true)}
            >
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>

            <StyleModal
                open={addPostModal}
                onClose={e => setAddPostModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} p={3} borderRadius={5}
                    bgcolor={"background.default"} color={"text.primary"}
                >
                    <Typography variant='h6' color="gray" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar src={ProfilePic} sx={{ width: "30px", height: "30px" }} />
                        <Typography variant="span">Raghav</Typography>
                    </UserBox>
                    <TextField
                        id="standard-multiline-static"
                        sx={{ width: "100%" }}
                        multiline
                        rows={3}
                        placeholder="What's in your mind"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}><DateRange /> </Button>
                    </ButtonGroup>
                </Box>
            </StyleModal>
        </>
    )
}

export default AddPost