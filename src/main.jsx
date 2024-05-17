import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './page/Home.jsx';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom';
import AboutUs from './page/AboutUs.jsx';
import Treker from './page/Treker.jsx';
import FAQ from './page/FAQ.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import LoginPage from './page/LoginPage.jsx';
import LeafletHome from './leaflet/LeafletHome.jsx';
import { AddPetForm } from './leaflet/LeafletComponents/add-pet-form.jsx';

const router = createBrowserRouter([
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
        element: <LoginPage />
    },
    {
        path: '/leaflet-home/*',  // Добавить /* к пути
        element: <LeafletHome />
    },
    {
        path: '*',
        element: <Navigate to='/' replace />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
