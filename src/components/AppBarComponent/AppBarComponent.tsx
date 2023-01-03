import * as React from 'react';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/icons/logo.png';
import {Icon} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchCategories} from "../../store/categories/categoriesThunks";
import {selectCategories} from "../../store/categories/categoriesSlice";
import {Categories} from "../../type";
import {PAGES, SETTINGS} from "../../constants";

const AppBarComponent = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(selectCategories);

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" color="default">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={
                        {
                            display: {xs: 'none', md: 'flex'},
                            mr: 1,
                            minWidth: '70px'
                        }}>
                        <NavLink to="/">
                            <Icon sx={{display: 'flex', minWidth: '70px'}}>
                                <img style={{margin: '0 auto'}} src={Logo} alt="logo"/>
                            </Icon>
                        </NavLink>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
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
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {PAGES.map((page) => (
                                page === 'Solutions' ? (
                                    <Box key={Math.random()}>
                                        <MenuItem
                                            id="fade-button"
                                            aria-controls={open ? 'fade-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            Solutions
                                        </MenuItem>
                                        <Menu
                                            id="fade-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'fade-button',
                                            }}
                                            sx={{maxHeight: 300}}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            {categories && categories.map((item: Categories) => (
                                                <NavLink key={Math.random()} to={'/' + item.title.toLowerCase()}>
                                                    <MenuItem onClick={handleClose}>
                                                        <Typography textAlign="center">{item.title}</Typography>
                                                    </MenuItem>
                                                </NavLink>
                                            ))}
                                        </Menu>
                                    </Box>
                                ) : (
                                    <NavLink to={'/' + page.toLowerCase()} key={Math.random()}>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    </NavLink>
                                )))}
                        </Menu>
                    </Box>
                    <Box sx={
                        {
                            display: {xs: 'flex', md: 'none'},
                            mr: 1,
                            flexGrow: 1,
                            minWidth: '70px'
                        }}>
                        <NavLink to="/">
                            <Icon sx={{
                                display: {xs: 'flex', md: 'none'},
                                minWidth: '70px'
                            }}>
                                <img style={{margin: '0 auto'}} src={Logo} alt="logo"/>
                            </Icon>
                        </NavLink>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex', justifyContent: 'center', marginLeft: '-50px'}}}>
                        {PAGES.map((page) => (
                            page === 'Solutions' ? (
                                <Box key={page}>
                                    <Button
                                        id="fade-button"
                                        aria-controls={open ? 'fade-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        sx={{my: 1.8, color: 'black', display: 'block'}}
                                        onClick={handleClick}
                                    >
                                        Solutions &#9660;
                                    </Button>
                                    <Menu
                                        id="fade-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'fade-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        {categories && categories.map((item) => (
                                            <NavLink to={'/' + item.title.toLowerCase()} key={Math.random()}>
                                                <MenuItem onClick={handleClose}>
                                                    <Typography textAlign="center">{item.title}</Typography>
                                                </MenuItem>
                                            </NavLink>
                                        ))}
                                    </Menu>
                                </Box>
                            ) : (<NavLink key={Math.random()} to={'/' + page.toLowerCase()}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{my: 2, color: 'black', display: 'block'}}
                                    >
                                        <Typography textAlign="center">{page}</Typography>
                                    </Button>
                                </NavLink>
                            )))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {SETTINGS.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppBarComponent;