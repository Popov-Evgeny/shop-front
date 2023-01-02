import React from 'react';
import {Outlet} from "react-router-dom";
import AppBarComponent from "../AppBarComponent/AppBarComponent";
import Container from "@mui/material/Container";

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
        </div>
    );
};

export default Layout;