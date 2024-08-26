import { Box, Card, CardMedia, Chip, Grid } from '@mui/material'
import { Star } from "@phosphor-icons/react"
import { useTheme } from "@mui/material/styles"
import React from 'react'


const images = [
    "https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg",
    "https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg",
    "https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg",
    "https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg",
]
const Properties = ({view}) => {
    const theme = useTheme()
    return (
        <Box>
            <Grid container spacing={2}>
                {
                    [...Array(9).map((elm, index) => <Grid item xs={12} md={view === "map" ? 6 : 12} key={index}>
                        <Card>
                            <Box sx={{ position: "relative" }}>
                                <CardMedia sx={{ height: 320 }}
                                    title="Villa" image={images[index]} />

                                <Chip sx={{
                                    position: "absolute", top: 10, left: 10,
                                    color: theme.palette.common.white,
                                    bgcolor: alpha(theme.palette.common.black, 0.4)
                                }}
                                    icon={<Star style={{ color: theme.palette.warning.dark, }}
                                        weight="fill" />}
                                    label={4.5} />
                                <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
                                    <Heart style={{ color: theme.palette.error.main, }} />
                                </IconButton>
                            </Box>
                            <CardContent>
                                <Stack spacing={l}>
                                    <Stack
                                        direction="row"
                                        alignltems="center"
                                        justifyContent=" space-between">
                                        < Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: 16,
                                                color: "text.secondary",
                                            }}>
                                            Place to stay</Typography>
                                        <Stack direction="row" spacing={0.5} alignltems="center">
                                            <Typography variant="subtitle1" sx={{ fontWeight: 500, fontSize: 18, color: "text.secondary", textDecoration: "line-through" }}>
                                                $80
                                            </Typography>
                                            <Stack direction="row" alignltems="center">
                                                <Typography variant="subtitle2" sx={{ fontSize: 18, color: "text.secondary" }}>
                                                    $50
                                                </Typography>
                                                <Typography variant="caption">/Night</Typography>
                                            </Stack>
                                            <Divider orientation="vertical" sx={{ height: 20 }} />
                                            <Typography variant="subtitle1">$111 Total</Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack spacing={1} direction="row" alignltems="center">
                                        <MapPin weight="bold" />
                                        <Typography variant="subtitle2">
                                            Toronto, canada
                                        </Typography>
                                    </Stack>
                                    <Divider />
                                    <Stack direction="row" alignltems="center" spacing={2}>
                                        <Stack direction="row" alignltems="center" spacing={1}>
                                            <Bed weight="bold"
                                                size={20}
                                                style={{ color: theme.palette.grey[600], }} />
                                            <Typography variant="subtitle2" sx={{ color: "text.secondary" }} >
                                                6 Beds
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" alignltems="center" spacing={1}>
                                            <Divider orientation="vertical" sx={{ height: 15 }} />
                                            <Bathtub weight="bold"
                                                size={20}
                                                style={{ color: theme.palette.grey[600], }} />
                                            <Typography variant="subtitle2" sx={{ color: "text.secondary" }} >
                                                1 Bath
                                            </Typography>
                                            <Divider orientation="vertical" sx={{ height: 15 }} />
                                        </Stack>
                                        <Stack direction="row" alignltems="center" spacing={1}>
                                            
                                            <Bathtub weight="bold"
                                                size={20}
                                                style={{ color: theme.palette.grey[600], }} />
                                            <Typography variant="subtitle2" sx={{ color: "text.secondary" }} >
                                                3 Bedroom
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>)]
                }
            </Grid>
        </Box>
    )
}

export default Properties