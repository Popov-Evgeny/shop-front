import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../../assets/icons/logo.png';
import {Icon} from "@mui/material";
import {NavLink} from "react-router-dom";
import {PAGES} from "../../constants";
import UserMenu from "../UI/Menu/UserMenu";
import NavMenu from "../UI/Menu/NavMenu";
import CategoriesMenu from "../UI/Menu/CategoriesMenu";


const AppBarComponent = () => {

    return (
        <AppBar position="static" sx={{bgcolor: 'white'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={
                        {
                            display: {xs: 'none', md: 'flex'},
                            mr: 1,
                            minWidth: '170px'
                        }}>
                        <NavLink to="/">
                            <Icon sx={{display: 'flex', minWidth: '70px'}}>
                                <img style={{margin: '0 auto'}} src={Logo} alt="logo"/>
                            </Icon>
                        </NavLink>
                    </Box>
                    <NavMenu/>
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
                    <Box sx={{
                        flexGrow: 1,
                        display: {xs: 'none', md: 'flex', justifyContent: 'center', marginLeft: '-50px'}
                    }}>
                        {PAGES.map((page) => (
                            page === 'Solutions' ? (
                                <Box key={page}>
                                    <CategoriesMenu key={Math.random()} />
                                </Box>
                            ) : (<NavLink key={Math.random()} to={'/' + page.toLowerCase()}>
                                    <Button
                                        sx={{my: 2, color: 'black', display: 'block'}}
                                    >
                                        <Typography textAlign="center">{page}</Typography>
                                    </Button>
                                </NavLink>
                            )))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <UserMenu/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppBarComponent;