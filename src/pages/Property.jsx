import { Hero } from "../section/Property"
import { Container, Stack } from "@mui/material"
import React from 'react'


const Property = () => {
    return (
        <Container sx={{ py: 4 }}>
            <Stack spacing={4}>
                {/* Hero */}
                <Hero />
                
            </Stack>
        </Container>
    )
}

export default Property