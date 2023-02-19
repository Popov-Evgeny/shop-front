import React, {useEffect} from 'react';
import ProductCard from "./ProductCard";
import {useAppDispatch, useAppSelector} from "../../app/store/hooks";
import {selectProducts} from "../../store/products/productsSlice";
import {fetchProducts} from "../../store/products/productsThunks";
import {Product} from "../../app/types/types";
import './ProductCards.scss';
import {Box} from "@mui/material";

const ProductCards = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Box className="cards-wrapper">
            {products && products.map((product: Product) => (
                <ProductCard key={Math.random()} product={product}/>))}
        </Box>
    );
};

export default ProductCards;