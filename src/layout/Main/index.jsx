import Header from "./Header";


const MainLayout = () => {
    return (
        <Stack spacing={1}>
            {/* Header */}
            <Header/>
            <Box sx={{ overflowY: 'scroll', height: "Calc(100vh - 150px)" }}>
                <Outlet />
            </Box>
        </Stack>
    )
}

export default MainLayout;