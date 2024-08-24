

const Amenities = () => {
  return (
    <Stack spacing={1}>
    <InputLabel sx={{ fontSize: 14, fontWeight: 600 }}>
    Amenities
    </InputLabel>
    <Box>
        <Grid container spacing={2}>
            <Grid item md={6}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="caption" sx={{ fontSize: 14,}}>
                            Wifi
                        </Typography>
                    </Stack>
                    <Checkbox size="small" /> 
                </Stack>
            </Grid>
            <Grid item md={6}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        
                        <Typography variant="caption" sx={{ fontSize: 14,}}>
                            Kitchen
                        </Typography>
                    </Stack>
                    <Checkbox size="small" /> 
                </Stack>
            </Grid>
            <Grid item md={6}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        
                        <Typography variant="caption" sx={{ fontSize: 14,}}>
                            Washer
                        </Typography>
                    </Stack>
                    <Checkbox size="small" /> 
                </Stack>
            </Grid>
            <Grid item md={6}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="caption" sx={{ fontSize: 14,}}>
                            Dryer
                        </Typography>
                    </Stack>
                    <Checkbox size="small" /> 
                </Stack>
            </Grid>
            <Grid item md={6}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="caption" sx={{ fontSize: 14,}}>
                            Parking
                        </Typography>
                    </Stack>
                    <Checkbox size="small" /> 
                </Stack>
            </Grid>
            <Grid item md={6}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="caption" sx={{ fontSize: 14,}}>
                            Swimming Pool
                        </Typography>
                    </Stack>
                    <Checkbox size="small" /> 
                </Stack>
            </Grid>
            <Grid item md={6}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="caption" sx={{ fontSize: 14,}}>
                            Gym
                        </Typography>
                    </Stack>
                    <Checkbox size="small" /> 
                </Stack>
            </Grid>
            <Grid item md={6}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="caption" sx={{ fontSize: 14,}}>
                            Playground
                        </Typography>
                    </Stack>
                    <Checkbox size="small" /> 
                </Stack>
            </Grid>
        </Grid>
    </Box>
</Stack>
  )
}

export default Amenities