import React, { createContext, useState } from 'react';

// Создаем контекст
const AuthContext = createContext();

// Создаем провайдер контекста
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(true);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

// Экспортируем контекст, если это необходимо
export default AuthContext;
