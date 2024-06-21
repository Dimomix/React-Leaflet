// useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem('access');
        return token ? true : false;
    });

    useEffect(() => {
        const token = localStorage.getItem('access');
        if (token) {
            setUser(true);
        }
    }, []);

    const login = async (username, password, navigate) => {
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (data.access && data.refresh) {
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);
            setUser(true);
            navigate('/');
        } else {
            alert('Invalid login credentials');
        }
    };

    const register = async (email, username, password, navigate) => {
        const response = await fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
        });

        const data = await response.json();
        if (data.access && data.refresh) {
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);
            setUser(true);
            navigate('/');
        } else {
            alert('Registration failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        setUser(false);
    };

    return { user, login, register, logout };
    };

export default useAuth;
