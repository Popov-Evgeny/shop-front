import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store/store";
import {fetchCategories} from "./categoriesThunks";
import {Categories} from "../../app/types/types";


interface CategoriesState {
  categories: Categories[] | null;
  fetchCategoriesLoading: boolean;
}

const initialState: CategoriesState = {
  categories: null,
  fetchCategoriesLoading: false,
}

export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.fetchCategoriesLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.fetchCategoriesLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.fetchCategoriesLoading = false;
    });
  }
});

export const categoriesReducer = CategoriesSlice.reducer;

export const selectCategories = (state: RootState) => state.categories.categories;
export const selectFetchCategoriesLoading = (state: RootState) => state.categories.fetchCategoriesLoading;

