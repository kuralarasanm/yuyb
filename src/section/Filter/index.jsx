import Amenities from "./Amenities"
import BookingOptions from "./BookingOptions"
import PriceRange from "./PriceRange"
import PropertyType from "./PropertyType"
import TypeOfPlace from "./TypeOfPlace"

import { Box, Button, Card, Divider, Stack, Typography } from '@mui/material'



const Filter = () => {
    return (
        <Box sy={{ py: 4, pl: 1 }}>
            <Card sx={{ width: 1, pb: 3 }}>
                <Box sx={{
                    mb: 2, py: 2, px: 3,
                    bgcolor: (theme) => theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[900]
                }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="subtitle1">Filters</Typography>
                        <Button size="small" >Clear all filters</Button>
                    </Stack>
                </Box>
                <Stack spacing={2} sx={{ px: 3 }}>
                    {/* Type of place */}
                    <TypeOfPlace />
                    <Divider/>
                    {/* price Range */}
                    <PriceRange />
                    <Divider/>
                    {/* no of rooms, beds and baths */}
                    <RoomsAndBeds/>
                    <Divider/>
                    {/* property Type */}
                    <PropertyType />
                    <Divider/>
                    {/* Amenities */}
                    <Amenities />
                    <Divider/>
                    {/* booking options */}
                    <BookingOptions />
                </Stack>
            </Card>
        </Box>
    )
}

export default Filter