import React from 'react';
import {Product} from "../../type";
import {API_URL} from "../../constants";
import './PreviewProduct.scss';
import {useAppSelector} from "../../app/hooks";
import {selectCategories} from "../../store/categories/categoriesSlice";
import {NavLink} from "react-router-dom";

interface Props {
    product: Product;
}

const ProductItem: React.FC<Props> = ({product}) => {
    const categories = useAppSelector(selectCategories);
    const category = (categories?.filter(item => (item._id === product.category)).at(-1))?.title;

    return (
        <div className="product-block">
            <div className="product-block-img">
                <img src={API_URL + '/uploads/' + product.image} alt={product.title} className="product-img"/>
            </div>
            <div className="product-block-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-category"><b>Product category:</b> {category}</p>
                <p className="product-description"><b>Product description: </b>{product.description}</p>
                <p className="product-price"><b>Price:</b> {product.price} $</p>
                <div>
                    <NavLink to='/' className="product-link">Buy now</NavLink>
                    <NavLink to='/' className="product-link">Add to cart</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;