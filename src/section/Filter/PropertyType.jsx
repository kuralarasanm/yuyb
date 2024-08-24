

const PropertyType = () => {
  return (
    <Stack spacing={1}>
        <InputLabel sx={{ fontSize: 14, fontWeight: 600 }}>
        property Type
        </InputLabel>
        <Box>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <House size={20} weight="bold" />
                            <Typography variant="caption" sx={{ fontSize: 14,}}>
                                House
                            </Typography>
                        </Stack>
                        <Checkbox size="small" /> 
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Lamp size={20} weight="bold" />
                            <Typography variant="caption" sx={{ fontSize: 14,}}>
                                Hotel
                            </Typography>
                        </Stack>
                        <Checkbox size="small" /> 
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Lighthouse size={20} weight="bold" />
                            <Typography variant="caption" sx={{ fontSize: 14,}}>
                                Guesthouse
                            </Typography>
                        </Stack>
                        <Checkbox size="small" /> 
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Buildings size={20} weight="bold" />
                            <Typography variant="caption" sx={{ fontSize: 14,}}>
                                Apartment
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

export default PropertyType