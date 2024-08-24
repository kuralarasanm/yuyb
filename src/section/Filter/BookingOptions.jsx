

const BookingOptions = () => {
  return (
    <Stack spacing={1}>
        <InputLabel sx={{ fontSize: 14, fontWeight: 600 }}>
            Booking Options
        </InputLabel>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography varient="caption" sx={{ fontSize: 13 }}>
                Instant book
            </Typography>
            <Switch defaultChecked/>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography varient="caption" sx={{ fontSize: 13 }}>
                Self check-in
            </Typography>
            <Switch/>
        </Stack>
    </Stack>
  )
}

export default BookingOptions