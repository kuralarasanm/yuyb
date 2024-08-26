
import Images from './Images'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { Export, Heart } from 'phosphor-react'

const Hero = () => {
    return (
        <Stack spacing={4}>
            <Box>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4">
                            ALPHA HOUSE- Design villa w full concierge service
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="flex-end" xs={12} md={4}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Button startIcon={<Export />}
                                sx={{ textDecoration: "underline" }}
                                color="primary"
                            >Share
                            </Button>
                            <Button sx={{ textDecoration: "underline" }} color="primary" startIcon={<Heart />}>
                                save
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Images />
        </Stack>
    )
}

export default Hero