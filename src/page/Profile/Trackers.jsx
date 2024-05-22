import React, { useState } from 'react';
import styles from '@/page/Profile/AccountSettings.module.scss';

const Trackers = () => {
    const [firstName, setFirstName] = useState('Kiran');
    const [lastName, setLastName] = useState('Acharya');
    const [email, setEmail] = useState('kiranacharya287@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('+91 9876543215');

    return (
        <div>
            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <img src="/src/assets/Askhanbai.jpg" alt="IMG" className={styles.image} />
                </div>
                <div className={styles.formGroup}>
                    <h1 className={styles.title}>Title</h1>
                </div>
            </div>
            <div className={styles.description}>
                Description
            </div>
        </div>
    );
};

export default Trackers;
