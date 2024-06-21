import React from 'react';
import styles from './NotificationList.module.scss';
import {useNotification} from "@/context/NotificationContext.jsx";

const NotificationList = () => {
    const { notifications } = useNotification();

    return (
        <div className={styles.notificationContainer}>
            {notifications.map((notification, index) => (
                <div key={index} className={styles.notification}>
                    {notification.text ?
                        <p>{notification.text}</p>
                        :
                        <p>{notification.device}: {notification.event_type} в {notification.geofence}.</p>
                    }
                    <span className={styles.timestamp}>{notification.timestamp}</span>
                </div>
            ))}
        </div>
    );
};

export default NotificationList;
