import React from 'react';
import styles from './Trackers.module.scss';

const TrackerCard = ({ imageUrl, deviceType, deviceName, onDelete }) => {
    return (
        <div className={styles.card}>
            <img
                className={styles.cardImage}
                src={`http://localhost:8000${imageUrl}`}
            ></img>
            <div className={styles.cardText}>
                <h2>Device type: {deviceType}</h2>
            </div>
            <div className={styles.cardText}>
                <p>Device name: {deviceName}</p>
            </div>
            <button onClick={onDelete} className={styles.buttonDelete}>Удалить</button>
        </div>
    );
};

export default TrackerCard;
