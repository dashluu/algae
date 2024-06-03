import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from "./ErrorPage.jsx";
import AlgaeInfoPage from "./algae/AlgaeInfoPage.jsx";
import KitPage from "./kit/KitPage.jsx";
import AboutPage from "./about/AboutPage.jsx";

const router = createBrowserRouter([
    {
        path: "/algae/",
        element: <App/>,
    },
    {
        path: "/algae/algae-info",
        element: <AlgaeInfoPage/>
    },
    {
        path: "/algae/kit",
        element: <KitPage/>
    },
    {
        path: "/algae/about",
        element: <AboutPage/>
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
