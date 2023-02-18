import React from 'react';
import {Outlet} from "react-router-dom";
import AppBarComponent from "../../AppBarComponent/AppBarComponent";
import Container from "@mui/material/Container";
import Footer from "../../Footer/Footer";
import './Layout.scss';
import {Box} from "@mui/material";

const Layout: React.FC<React.PropsWithChildren> = () => {
    return (
        <Box className="wrapper">
            <Box component={'header'}>
                <AppBarComponent/>
            </Box>
            <Box component={'main'} className="main">
                <Container maxWidth="xl">
                    <Outlet/>
                </Container>
            </Box>
            <Box component={'footer'}>
                <Footer/>
            </Box>
        </Box>
    );
};

export default Layout;