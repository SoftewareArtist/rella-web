import React from "react";
import { AppBar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Link from "./Link";


const pages = [
    { 'title': 'Home', 'url': '' },
    { 'title': 'Terms of Service', 'url': 'termsService' },
    { 'title': 'Privacy & Policy', 'url': 'privacyPolicy' }
];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Container maxWidth="xl" sx={{ color: 'white' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, my:4 }} alignItems="center">
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        pr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        overflow: 'inherit',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Social Jool LLC
                </Typography>

                <Grid container justifyContent="flex-end">
                    {pages.map((page) => (
                        <Link href={"/" + page.url} color="secondary" sx={{mr:2, textDecoration: 'none'}}>
                            {page.title}
                        </Link>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, my:4 }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, ml: 1, mr: 1 }} />

                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            overflow: 'inherit',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Social Jool LLC
                    </Typography>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem>
                            <Link href={"/" + page.url} color="secondary" sx={{textDecoration: 'none'}}>
                                {page.title}
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Container>
    );
};
export default ResponsiveAppBar;