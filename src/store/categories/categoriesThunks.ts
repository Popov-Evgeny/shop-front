import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {Product} from "../../type";

export const fetchCategories = createAsyncThunk<Product[] | null>(
    'categories/fetchCategories',
    async () => {
        const response = await axiosApi.get<Product[] | null>('/categories');
        return response.data;
    },
)
