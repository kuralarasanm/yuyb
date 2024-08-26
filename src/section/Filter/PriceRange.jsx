import { InputLabel, Slider, Stack, TextField } from "@mui/material"
import { useState } from "react"


const PriceRange = () => {
    const [value, setValue] = useState([20, 75]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Stack spacing={1}>
            <InputLabel sx={{ fontSize: 14, fonWeight: 600 }}>
                price Range
            </InputLabel>
            <Slider value={value} onChange={handleChange} valueLabelDisplay="auto" />
            <Stack direction="row" alignItems="center" spacing={2}>
                <TextField size="small" label="minimum" type="number" value={value[0]}
                    onChange={(e) => {
                        setValue((prev) => {
                            return [e.target.value, prev[1]]
                        })
                    }} />
                    <TextField size="small" label="Maximum" type="number" value={value[1]}
                    onChange={(e) => {
                        setValue((prev) => {
                            return [prev[0], e.target.value]
                        })
                    }} />
            </Stack>
        </Stack>
    )
}

export default PriceRange