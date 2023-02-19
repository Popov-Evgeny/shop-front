import React from 'react';
import './App.scss';
import Slider from "./components/UI/Swiper/Slider";
import Box from "@mui/material/Box";
import LandingCards from "./components/LandingCards/LandingCards";
import {Typography} from "@mui/material";
import LandingProducts from "./components/LandingCards/LandingProducts";

function App() {
    return (
        <>
            <Box>
                <Slider/>
            </Box>
            <Box component={'section'}>
                <Box className="description-block">
                    <Typography component={'h4'} variant={'h4'} className="description-block-title">Shop our latest offers and categories</Typography>
                    <Typography className="description-block-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ab debitis delectus eaque earum, esse illum
                        incidunt obcaecati optio praesentium quia reiciendis tenetur unde vero! Atque.</Typography>
                </Box>
                <Box className="container">
                    <LandingCards/>
                </Box>
            </Box>
            <Box component={'section'}>
                <Box className="description-block">
                    <Typography component={'h4'} variant={'h4'} className="description-block-title">Save on our most selled items.</Typography>
                    <Typography className="description-block-subtitle">Our new Limited Edition Winter Design BESPOKE 4-Door
                        Flex™</Typography>
                </Box>
                <LandingProducts/>
            </Box>
        </>
    );
}

export default App;
