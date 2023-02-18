import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/store/hooks";
import {selectFetchProductLoading, selectProduct} from "../../store/products/productsSlice";
import {fetchProduct} from "../../store/products/productsThunks";
import ProductItem from "./ProductItem";
import {Vortex} from "react-loader-spinner";
import {useParams} from "react-router-dom";
import './PreviewProduct.scss';
import {Box} from "@mui/material";

const PreviewProduct = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector(selectProduct);
    const loading = useAppSelector(selectFetchProductLoading);

    useEffect(() => {
        if (id) {
            dispatch(fetchProduct(id));
        }
    }, [id, dispatch]);


    return (
        <>
            {loading && <Box className="loader"><Vortex
							visible={true}
							height="80"
							width="80"
							ariaLabel="vortex-loading"
							wrapperClass="vortex-wrapper"
							colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
						/></Box>}
            {product && <ProductItem product={product}/>}
            {!loading && product === null && <h4 className="empty">Sorry, this product is not available!</h4>}

        </>
    );
};

export default PreviewProduct;