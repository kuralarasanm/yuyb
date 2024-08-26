import { useState } from 'react'
import MapGL from 'react-map-gl'
import { MapControlPopup, MapControlMarker, MapControlGeolocate, MapControlFullscreen, MapControlNavigation, MapControlScale } from '../../components/map'
import { Card, CardContent } from '@mui/material'
import styled from "@mui/material/styles";
import { styled } from '@mui/system';


const MapWrapperStyle=styled("div")(({theme})=>({
    zIndex: 0,
    height:560,
    overflow:"hidden",
    position:"relative",
    borderRadius: theme.shape.borderRadius,
    "& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right": {
        display: "none",
    }
}))
const Map = ({ data, ...other }) => {
    const [tooltip, setTooltip] = useState(null)
    const [viewport, setViewport] = useState({
        zoom: 2,
    })
    return (
        <Card>
            <CardContent>
                <>
                    <MapGL {...viewport} onViewportChange={setViewport}{...other}>
                        <MapControlScale />
                        <MapControlNavigation />
                        <MapControlFullscreen />
                        <MapControlGeolocate />

                        {data.map((country) => (
                            <MapControlMarker key={country.name}
                                latitude={country.latlng[0]}
                                longitude={country.latlng[1]}
                                onClick={() => setTooltip(country)} />
                        ))}
                    </MapGL>
                </>
            </CardContent>
        </Card>
    )
}

export default Map