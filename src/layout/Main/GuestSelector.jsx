import { TextField } from "@mui/material"
import { useState } from "react"
import Popover from "@mui/material/Popover"


const GuestSelector = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [guests, setGuests] = useState({
        adults: 2,
        children: 1,
        infants: 1,
        pets: 1,
    })

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleGuestsChange = (type, value) => {
        setGuests({ ...guests, [type]: value }) // Ensure the minimum value is 0
    }

    const displayGuests = `${guests.adults} Adults, ${guests.children} Children, ${guests.infants} Infants & ${guests.pets} Pets`;
    return (
        <>
            <TextField fullWidth value={displayGuests}
                onClick={handleClick}
                placeholder="Enter guest details" variant="standard"
                InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                }} />
            <Popover open={open}
                anchorEl={anchorEl} onclose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }} >
                <Stack spacing={2} sx={{ px: 4, py: 2 }}>
                    <Stack spacing={2}>
                        <Stack sx={{ width: 300 }} direction="row" alignItems="center" justifyContent="space-between">
                            <Stack spacing={0.5}>
                                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                                    Adults
                                </Typography>
                                <Typography variant="caption">
                                    Age 13 or above
                                </Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <IconButton color="primary"
                                    onClick={() => handleGuestsChange("adults", -1)}
                                    disabled={guests.adults === 0}>
                                    <MinusCircle />
                                    <TextField disabled
                                        value={guests.adults}
                                        type="number"
                                        style={{ width: '40px', textAlign: 'center' }} />
                                </IconButton>
                                <IconButton color="primary"
                                    onClick={() => handleGuestsChange("adults", 1)}>
                                    <PlusCircle />

                                </IconButton>
                            </Stack>
                        </Stack>
                        <Divider />

                        <Stack sx={{ width: 300 }} direction="row" alignItems="center" justifyContent="space-between">
                            <Stack spacing={0.5}>
                                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                                    children
                                </Typography>
                                <Typography variant="caption"> Age 2-12</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <IconButton color="primary"
                                    onClick={() => handleGuestsChange("children", -1)}
                                    disabled={guests.children === 0}>
                                    <MinusCircle />
                                    <TextField disabled
                                        value={guests.children}
                                        type="number"
                                        style={{ width: '40px', textAlign: 'center' }} />
                                </IconButton>
                                <IconButton color="primary"
                                    onClick={() => handleGuestsChange("children", 1)}>
                                    <PlusCircle />

                                </IconButton>
                            </Stack>
                        </Stack>
                        <Divider />

                        <Stack sx={{ width: 300 }} direction="row" alignItems="center" justifyContent="space-between">
                            <Stack spacing={0.5}>
                                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                                    infants
                                </Typography>
                                <Typography variant="caption"> Age 2-12</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <IconButton color="primary"
                                    onClick={() => handleGuestsChange("infants", -1)}
                                    disabled={guests.infants === 0}>
                                    <MinusCircle />
                                    <TextField disabled
                                        value={guests.infants}
                                        type="number"
                                        style={{ width: '40px', textAlign: 'center' }} />
                                </IconButton>
                                <IconButton color="primary"
                                    onClick={() => handleGuestsChange("children", 1)}>
                                    <PlusCircle />

                                </IconButton>
                            </Stack>
                        </Stack>
                        <Divider />

                        <Stack sx={{ width: 300 }} direction="row" alignItems="center" justifyContent="space-between">
                            <Stack spacing={0.5}>
                                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                                    pets
                                </Typography>
                                <Typography variant="caption"> Age 2-12</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <IconButton color="primary"
                                    onClick={() => handleGuestsChange("pets", -1)}
                                    disabled={guests.pets === 0}>
                                    <MinusCircle />
                                    <TextField disabled
                                        value={guests.pets}
                                        type="number"
                                        style={{ width: '40px', textAlign: 'center' }} />
                                </IconButton>
                                <IconButton color="primary"
                                    onClick={() => handleGuestsChange("pets", 1)}>
                                    <PlusCircle />
                                </IconButton>
                            </Stack>
                        </Stack>
                        <Divider />
                        {/* Display Total Guests */}
                        <Typography varient="caption" sx={{ fontWeight: 600 }}>
                            {displayGuests}
                        </Typography>
                    </Stack>
                </Stack>
            </Popover>
        </>
    )
}

export default GuestSelector