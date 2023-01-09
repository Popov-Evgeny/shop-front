import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./UI/Layout/Layout";
import {store} from './app/store';
import {Provider} from "react-redux";
import ProductCards from "./components/ProductCards/ProductCards";
import PreviewProduct from "./components/PreviewProduct/PreviewProduct";
import NotFound from "./UI/NotFound/NotFound";
import ProductCart from "./components/ProductCart/ProductCart";
import LoginForm from "./components/LoginForm/LoginForm";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <App/>,
            },
            {
                path: "/login",
                element: <LoginForm/>,
            },
            {
                path: "/all products",
                element: <ProductCards/>,
            },
            {
                path: "/products/:id",
                element: <PreviewProduct/>,
            },
            {
                path: "/cart",
                element: <ProductCart/>,
            },
            {
                path: "*",
                element: <NotFound/>
            },
        ]
    },

]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

