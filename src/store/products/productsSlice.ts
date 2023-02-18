import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store/store";
import {fetchProduct, fetchProducts, fetchProductsLimit} from "./productsThunks";
import {Product} from "../../app/types/types";


interface ProductsState {
  product: Product | null;
  products: Product[] | null;
  productsLimit: Product[] | null;
  fetchAllLoading: boolean;
  fetchOneLoading: boolean;
  fetchProductsLimitLoading: boolean;
}

const initialState: ProductsState = {
  product: null,
  products: [],
  productsLimit: [],
  fetchAllLoading: false,
  fetchOneLoading: false,
  fetchProductsLimitLoading: false,
}

export const ProductsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.fetchAllLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.fetchAllLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.fetchAllLoading = false;
    });

    builder.addCase(fetchProduct.pending, (state) => {
      state.fetchOneLoading = true;
      state.product = null;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.fetchOneLoading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.fetchOneLoading = false;
    });

    builder.addCase(fetchProductsLimit.pending, (state) => {
      state.fetchProductsLimitLoading = true;
    });
    builder.addCase(fetchProductsLimit.fulfilled, (state, action) => {
      state.fetchProductsLimitLoading = false;
      state.productsLimit = action.payload;
    });
    builder.addCase(fetchProductsLimit.rejected, (state) => {
      state.fetchProductsLimitLoading = false;
    });
  }
});

export const productsReducer = ProductsSlice.reducer;

export const selectProduct = (state: RootState) => state.products.product;
export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsLimit = (state: RootState) => state.products.productsLimit;
export const selectFetchAllLoading = (state: RootState) => state.products.fetchAllLoading;
export const selectFetchLoading = (state: RootState) => state.products.fetchAllLoading;
export const selectFetchProductLoading = (state: RootState) => state.products.fetchOneLoading;
export const selectFetchProductsLimitLoading = (state: RootState) => state.products.fetchProductsLimitLoading;
