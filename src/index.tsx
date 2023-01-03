import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./UI/Layout/Layout";
import {store} from './app/store';
import {Provider} from "react-redux";
import ProductCards from "./components/ProductCards/ProductCards";

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
                path: "/all products",
                element: <ProductCards/>,
            },
            {
                path: "*",
                element:
                    <div>
                        <h4>Not found!!!</h4>
                    </div>,
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

