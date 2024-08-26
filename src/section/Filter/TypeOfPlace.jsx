import React from 'react'
import { FormControlLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material'


const TypeOfPlace = () => {
    return (
        <Stack spacing={1}>
            <InputLabel sx={{ fontSize: 14, fonWeight: 600 }}>
                Type of place
            </InputLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="any-type" name=" row-radio-buttons-group ">
                    <FormControlLabel value="any-type" control={<Radio />} label={
                        <Typography variant="subtitle2" sx={{ fontSize: 14, fonWeight: 500 }}>
                            Any type
                        </Typography>
                    } />
                    <FormControlLabel value="room" control={<Radio />} label={
                        <Typography variant="subtitle2" sx={{ fontSize: 14, fonWeight: 500 }}>
                            Room
                        </Typography>
                    } />
                    <FormControlLabel value="entire-home" control={<Radio />} label={
                        <Typography variant="subtitle2" sx={{ fontSize: 14, fonWeight: 500 }}>
                            Entire home
                        </Typography>
                    } />
            </RadioGroup>
        </Stack>
    )
}

export default TypeOfPlace