import React from 'react';
import {Outlet} from "react-router-dom";
import AppBarComponent from "../../components/AppBarComponent/AppBarComponent";
import Container from "@mui/material/Container";
import Footer from "../../components/Footer/Footer";

const Layout: React.FC<React.PropsWithChildren> = () => {
    return (
        <div>
            <header>
                <AppBarComponent/>
            </header>
            <main>
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