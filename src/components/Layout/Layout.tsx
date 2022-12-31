import React from 'react';
import {Outlet} from "react-router-dom";
import AppBarComponent from "../AppBarComponent/AppBarComponent";

const Layout: React.FC<React.PropsWithChildren> = () => {
    return (
        <div>
            <header>
                <AppBarComponent/>
            </header>
            <main className="container">
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;