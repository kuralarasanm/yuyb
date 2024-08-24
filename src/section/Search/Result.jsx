import { Box, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import useResponsive from "../../hooks/useResponsive"
import CardView from './CardView';
import Map from './Map';
import { countries as COUNTRIES } from "../../_mock/map/countries"

const baseSettings = {
    mapboxAccessToken: MAPBOX.API,
    width: '100%',
    height: '100%',
    minZoom: 1
}

const THEMES = {
    streets: "mapbox://styles/mapbox/streets-v11 ",
    outdoors: "mapbox://styles/mapbox/outdoors-V11 ",
    light: "mapbox: //sty1es/mapbox/1ight-v10",
    dark: "mapbox://styles/mapbox/dark-v10",
    satellite: "mapbox://styles/mapbox/satellite-v9",
    satelliteStreets: "mapbox://styles/mapbox/satellite-streets-V11",
}

const Result = () => {
    const [view, setView] = useState("card");
    const isDesktop = useResponsive("up", "md");

    const [value, setValue] = useState(0);

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Stack sx={{ px: 3, py: 2 }} spacing={2}>
            <Box>
                <Grid conatainer>
                    <Grid item md={6} xs={12}>
                        <Typography variant="body2" textAlign={{ xs: "center", md: "start" }}>
                            Found 100 more results based on your search
                        </Typography>
                    </Grid>
                    <Grid item conatainer justifyContent={isDesktop ? "flex-end" : "center"} md={6} xs={12}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Chip onclick={() => { setView("map") }}
                                sx={{ p: 1 }} color="primary"
                                variant={view == "map" ? "filled" : "outlined"}
                                label={<Typography variant="subtitle2">Map view</Typography>}
                                icon={<MapTrifold size={20} weight="bold" />} />
                            <Chip onclick={() => { setView("card") }}
                                sx={{ p: 1 }}
                                color="primary"
                                variant={view !== "map" ? "filled" : "outlined"}
                                label={<Typography variant="subtitle2">card view</Typography>}
                                icon={<Columns size={20} weight="bold" />} />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            {view === "map" ? (
                <Box sx={{ width: "100%" }}>
                    <Grid conatainer spacing={2}>
                        <Grid item md={6} xs={12}>
                            {/* card view */}
                            <CardView view={view} value={value} handleChangeTab={handleChangeTab} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            {/* Map view */}
                            <Map {...baseSettings} data={COUNTRIES} mapStyle={THEMES.outdoors } />
                        </Grid>
                    </Grid>
                </Box>
            ) : (
                <CardView value={value} handleChangeTab={handleChangeTab} />
            )}
        </Stack >
    )
}
export default Result