import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { privateRoute, publicRoute } from './router.jsx';

const AppRouter = () => {
    const { user } = useAuthContext();
    const router = user ? privateRoute : publicRoute;

    return <RouterProvider router={router} />;
};

export default AppRouter;