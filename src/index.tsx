import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";
import {store, persistor} from './app/store/store';
import {Provider} from "react-redux";
import ProductCards from "./components/ProductCards/ProductCards";
import PreviewProduct from "./components/PreviewProduct/PreviewProduct";
import NotFound from "./components/UI/NotFound/NotFound";
import ProductCart from "./components/ProductCart/ProductCart";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import {PersistGate} from "redux-persist/integration/react";

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
                path: "/signUp",
                element: <Register/>,
            },
            {
                path: "/signIn",
                element: <Login/>,
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
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router}/>
        </PersistGate>
    </Provider>
);

