import { Box, Button, Grid } from "@mui/material"
import Image from "next/image"

const images = [
    "https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg",
    "https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg",
    "https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg",
]

const Images = () => {
    return (
        <Box sx={{ borderRadius: 2, overflow: 'hidden', position: "relative" }}>
            <Grid container spacing={1}>
                <Grid item md={6}>
                    <Image src={images[0]} alt="Villa" />
                </Grid>
                <Grid container item md={6}>
                    <Grid item md={6}>
                        <Image src={images[1]} alt="Villa" />
                    </Grid>
                    <Grid item md={6}>
                        <Image src={images[2]} alt="Villa" />
                    </Grid>
                    <Grid item md={6}>
                        <Image src={images[3]} alt="Villa" />
                    </Grid>
                    <Grid item md={6}>
                        <Image src={images[4]} alt="Villa" />
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{ position: "relative" }}>
                            <Image src={images[5]} alt="Villa" />
                            <Button startIcon={<ImageSquare weight="bold" />}
                                color="inherit"
                                variant="outlined"
                                sx={{ position: "absolute", bottom: 10, right: 10, bgcolor: (theme) => (theme.palette.grey[400]) }}
                            >Show all photos</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Images