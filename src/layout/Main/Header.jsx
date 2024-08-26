import React from 'react'
import Logo from '../../components/Logo'
import Input from '../../components/Input'
import faker from '@faker-js/faker'
import { Avatar, Box, Stack } from '@mui/material'


const Header = () => {
    return (
        <Stack spacing={2}>
            <Box sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 3, py: 2 }}>
                    {/* Logo */}
                    <Logo />
                    {/* input */}
                    <Input />
                    {/* user avatar */}
                    <Avatar alt={faker.person.fullName()} src={faker.img.avatar()} />
                </Stack>
            </Box>
        </Stack>
    )
}

export default Header