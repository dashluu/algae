import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from "./ErrorPage.jsx";
import MaterialGrid, {loader as materialLoader} from "./material/MaterialGrid.jsx";
import AlgaeInfoPage from "./algae/AlgaeInfoPage.jsx";
import KitPage from "./kit/KitPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/algae",
        element: <AlgaeInfoPage/>
    },
    {
        path: "/kit",
        element: <KitPage/>
    },
    {
        path: "/materials",
        element: <MaterialGrid/>,
        loader: materialLoader
    },
    {
        path: "/*",
        element: <ErrorPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
