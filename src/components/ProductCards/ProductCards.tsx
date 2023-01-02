import React, {useEffect} from 'react';
import ProductCard from "../ProductCard/ProductCard";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectProductsLimit} from "../../store/products/productsSlice";
import {fetchProductsLimit} from "../../store/products/productsThunks";
import {Product} from "../../type";
import './ProductCards.scss';

const ProductCards = () => {
    const dispatch = useAppDispatch();
    const productsLimit = useAppSelector(selectProductsLimit);

    useEffect(() => {
        dispatch(fetchProductsLimit(4));
    }, [dispatch]);

    return (
        <div className="cards-wrapper">
            {productsLimit && productsLimit.map((product: Product) => (<ProductCard key={Math.random()} product={product}/>))}
        </div>
    );
};

export default ProductCards;