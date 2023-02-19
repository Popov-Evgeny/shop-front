import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/store/hooks";
import {selectProductsLimit} from "../../store/products/productsSlice";
import {fetchProductsLimit} from "../../store/products/productsThunks";
import {Box} from "@mui/material";
import {Product} from "../../app/types/types";
import ProductCard from "../ProductCards/ProductCard";

const LandingProducts = () => {
    const dispatch = useAppDispatch();
    const productsLimit = useAppSelector(selectProductsLimit);

    useEffect(() => {
        dispatch(fetchProductsLimit(4));
    }, [dispatch]);

    return (
        <Box className="cards-wrapper">
            {productsLimit && productsLimit.map((product: Product) => (
                <ProductCard key={Math.random()} product={product}/>))}
        </Box>
    );
};

export default LandingProducts;