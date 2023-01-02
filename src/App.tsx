import React from 'react';
import './App.scss';
import Slider from "./UI/Swiper/Slider";
import Box from "@mui/material/Box";
import ProductCards from "./components/ProductCards/ProductCards";
import LandingCards from "./components/LandingCards/LandingCards";

function App() {
    return (
        <>
            <Box>
                <Slider/>
            </Box>
            <section>
                <div className="description-block">
                    <h4 className="description-block-title">Shop our latest offers and categories</h4>
                    <p className="description-block-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ab debitis delectus eaque earum, esse illum
                        incidunt obcaecati optio praesentium quia reiciendis tenetur unde vero! Atque.</p>
                </div>
                <div className="container">
                    <LandingCards/>
                </div>
            </section>
            <section>
                <div className="description-block">
                    <h4 className="description-block-title">Save on our most selled items.</h4>
                    <p className="description-block-subtitle">Our new Limited Edition Winter Design BESPOKE 4-Door
                        Flex™</p>
                </div>
                <ProductCards/>
            </section>
        </>
    );
}

export default App;
