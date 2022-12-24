import { ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

function LatestPhots() {
    return (
        <>
            <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                Latest Photos
            </Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
                <ImageListItem>
                    <img
                        src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://material-ui.com/static/images/image-list/burgers.jpg"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://material-ui.com/static/images/image-list/camera.jpg"
                        alt=""
                    />
                </ImageListItem>
            </ImageList>
        </>
    )
}

export default LatestPhots