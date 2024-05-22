import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutUs from "../page/AboutUs";
import Treker from "../page/Treker";
import FAQ from "../page/FAQ";
import LeafletHome from "../leaflet/LeafletHome";
import Home from "../page/Home";
import LoginForm from "../page/Authorization/LoginForm";
import RegisterForm from "../page/Authorization/RegisterForm";
import AccountSettings from "@/page/Profile/AccountSettings.jsx";

export const privateRoute = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <AboutUs />
    },
    {
        path: '/treker',
        element: <Treker />
    },
    {
        path: '/faq',
        element: <FAQ />
    },
    {
        path: '/leaflet-home/*',  // Добавить /* к пути
        element: <LeafletHome />
    },
    {
        path: '/profile',  // Добавить /* к пути
        element: <AccountSettings />
    },
    {
        path: '*',
        element: <Navigate to='/' replace />
    }
]);

export const publicRoute = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <AboutUs />
    },
    {
        path: '/treker',
        element: <Treker />
    },
    {
        path: '/faq',
        element: <FAQ />
    },
    {
        path: '/login',
        element: <LoginForm />
    },
    {
        path: '/register',
        element: <RegisterForm />
    },
    {
        path: '*',
        element: <Navigate to='/' replace />
    }
]);