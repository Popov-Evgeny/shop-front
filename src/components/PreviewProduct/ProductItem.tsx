import React from 'react';
import {NavLink} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {Product} from "../../app/types/types";
import {API_URL} from "../../constants";
import {useAppSelector} from "../../app/store/hooks";
import {selectCategories} from "../../store/categories/categoriesSlice";
import './PreviewProduct.scss';

interface Props {
    product: Product;
}

const ProductItem: React.FC<Props> = ({product}) => {
    const categories = useAppSelector(selectCategories);
    const category = (categories?.filter(item => (item._id === product.category)).at(-1))?.title;

    return (
        <Box className="product-block">
            <Box className="product-block-img">
                <img src={API_URL + '/uploads/' + product.image} alt={product.title} className="product-img"/>
            </Box>
            <Box className="product-block-info">
                <Typography component={'h4'} variant={'h4'} sx={{m: 2}} className="product-title">{product.title}</Typography>
                <Typography className="product-category"><b>Product category:</b> {category}</Typography>
                <Typography className="product-description"><b>Product description: </b>{product.description}</Typography>
                <Typography className="product-price"><b>Price:</b> {product.price} $</Typography>
                <Box>
                    <NavLink to='/' className="product-link">Buy now</NavLink>
                    <NavLink to='/' className="product-link">Add to cart</NavLink>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductItem;