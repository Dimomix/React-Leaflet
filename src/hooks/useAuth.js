// hooks/useAuth.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Вы можете добавить логику для проверки токена на сервере
            setUser(true);
        }
    }, []);

    const login = async (email, password) => {
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if ([data.access, data.refresh]) {
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);
            setUser(true);
            navigate('/');
        } else {
            alert('Invalid login credentials');
        }
    };

    const register = async (email, username, password) => {
        const response = await fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
        });

        const data = await response.json();
        if ([data.access, data.refresh]) {
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);
            setUser(true);
            navigate('/');
        } else {
            alert('Registration failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(false);
        navigate('/login');
    };

    return { user, login, register, logout };
};
