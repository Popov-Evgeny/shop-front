import React, {useEffect} from 'react';
import ProductCard from "./ProductCard";
import {useAppDispatch, useAppSelector} from "../../app/store/hooks";
import {selectProductsLimit} from "../../store/products/productsSlice";
import {fetchProductsLimit} from "../../store/products/productsThunks";
import {Product} from "../../app/types/types";
import './ProductCards.scss';
import {Box} from "@mui/material";

const ProductCards = () => {
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

export default ProductCards;