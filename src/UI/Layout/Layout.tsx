import React from 'react';
import {Outlet} from "react-router-dom";
import AppBarComponent from "../../components/AppBarComponent/AppBarComponent";
import Container from "@mui/material/Container";
import Footer from "../../components/Footer/Footer";
import './Layout.scss';

const Layout: React.FC<React.PropsWithChildren> = () => {
    return (
        <div className="wrapper">
            <header>
                <AppBarComponent/>
            </header>
            <main className="main">
                <Container maxWidth="xl">
                    <Outlet/>
                </Container>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Layout;