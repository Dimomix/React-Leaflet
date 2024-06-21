import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { privateRoute, publicRoute } from './router.jsx';
import NotificationList from "@/components/NotificationList/NotificationList.jsx";

const AppRouter = () => {
    const { user } = useAuthContext();
    const router = user ? privateRoute : publicRoute;

    return (
        <>
            <RouterProvider router={router} />
            <NotificationList />
        </>
    );
};

export default AppRouter;
