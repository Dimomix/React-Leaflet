import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { privateRoute, publicRoute } from './router.jsx';

const AppRouter = () => {
    const [user, setUser] = useState(false);
    return user ? <RouterProvider router={privateRoute} /> : <RouterProvider router={publicRoute} />;
};

export default AppRouter;
