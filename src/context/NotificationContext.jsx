import React, { createContext, useState, useEffect, useContext } from 'react';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/notification/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access')}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.length > 0) {
                        setNotifications((prevNotifications) => [...prevNotifications, ...data]);
                        // Устанавливаем таймер для удаления уведомлений через 5 секунд
                        setTimeout(() => {
                            setNotifications((prevNotifications) => prevNotifications.slice(data.length));
                        }, 5000);
                    }
                } else {
                    console.error('Error fetching notifications:', response.status);
                }
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        const interval = setInterval(fetchNotifications, 10000); // Проверка каждые 10 секунд

        return () => clearInterval(interval);
    }, []);

    return (
        <NotificationContext.Provider value={{ notifications }}>
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationProvider;
