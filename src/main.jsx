import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthContext.jsx';
import { NotificationProvider } from './context/NotificationContext.jsx';
import AppRouter from './routing/AppRouter.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <NotificationProvider>
                <AppRouter />
            </NotificationProvider>
        </AuthProvider>
    </React.StrictMode>
);
