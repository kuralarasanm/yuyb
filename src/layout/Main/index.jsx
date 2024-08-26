import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";


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