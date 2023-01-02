import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {Product} from "../../type";

export const fetchProducts = createAsyncThunk<Product[] | null>(
    'products/fetchAll',
    async () => {
        const response = await axiosApi.get<Product[] | null>('/products');
        return response.data;
    },
)

export const fetchProductsLimit = createAsyncThunk<Product[] | null, number>(
    'products/fetchProductsLimit',
    async (limit) => {
        const response = await axiosApi.get<Product[] | null>('/products?limit=' + limit);
        return response.data;
    },
)

export const fetchProduct = createAsyncThunk<Product, string>(
    'products/fetchProduct',
    async (id) => {
        const response = await axiosApi.get<Product>('/products/' + id);
        return response.data;
    },
)