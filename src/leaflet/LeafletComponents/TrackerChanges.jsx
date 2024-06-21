import React, { useState, useEffect } from 'react';
import styles from './TrackerChanges.module.scss';

const TrackerChanges = () => {
    const [changes, setChanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastCheckTime, setLastCheckTime] = useState(null); // Сохраняем время последней проверки

    useEffect(() => {
        const fetchChanges = async () => {
            setLoading(true);
            setError(null);

            try {
                const url = lastCheckTime
                    ? `http://127.0.0.1:8000/api/notification-all/?since=${lastCheckTime}`
                    : 'http://127.0.0.1:8000/api/notification-all/';

                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access')}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setChanges((prevChanges) => {
                        // Добавляем только новые изменения, которых нет в предыдущем списке
                        const newChanges = data.filter(change =>
                            !prevChanges.some(prevChange => prevChange.id === change.id)
                        );
                        return [...prevChanges, ...newChanges];
                        // console.log(data)
                    });
                    // Обновляем время последней проверки
                    if (data.length > 0) {
                        setLastCheckTime(data[data.length - 1].timestamp);
                    }
                } else {
                    console.error('Error fetching changes:', response.status);
                    setError('Ошибка получения данных');
                }
            } catch (error) {
                console.error('Error fetching changes:', error);
                setError('Ошибка получения данных');
            } finally {
                setLoading(false);
            }
        };

        fetchChanges();
        const interval = setInterval(fetchChanges, 10000);

        return () => clearInterval(interval);
    }, [lastCheckTime]);

    return (
        <div className={styles.container}>
            {loading && changes.length === 0 ? (
                <div className={styles.loading}>Загрузка...</div>
            ) : error ? (
                <div className={styles.error}>{error}</div>
            ) : (
                <div className={styles.changesList}>
                    {changes.length > 0 ? (
                        changes.map((change, index) => (
                            <div key={index} className={styles.changeItem}>
                                {change.text ? <p>{change.text}</p> : <p>{change.device}: {change.event_type}  {change.geofence}.</p>}
                                <span className={styles.timestamp}>{change.timestamp}</span>
                            </div>
                        ))
                    ) : (
                        <p>Нет изменений</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default TrackerChanges;
