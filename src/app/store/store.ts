import {configureStore} from "@reduxjs/toolkit";
import {productsReducer} from "../../store/products/productsSlice";
import {categoriesReducer} from "../../store/categories/categoriesSlice";
import {userReducer} from "../../store/users/usersSlice";

export const store = configureStore({
  reducer:{
    products: productsReducer,
    categories: categoriesReducer,
    users: userReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;