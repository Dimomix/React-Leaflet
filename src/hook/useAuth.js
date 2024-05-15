import { useContext } from 'react';
import AuthContext from "../context/AuthContext.jsx";

// Кастомный хук для использования контекста аутентификации
const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
