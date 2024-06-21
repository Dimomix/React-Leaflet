import React, { useState, useEffect } from "react";
import styles from "./AccountForm.module.scss"; // Импорт нового файла стилей
import { useAuthContext } from '/src/context/AuthContext.jsx';

const AccountForm = ({ onUpdate }) => {
    const { user } = useAuthContext();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/userprofile/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access')}`
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setFirstName(data.name);
                    setLastName(data.surname);
                    setPhoneNumber(data.phone);
                } else {
                    throw new Error('Failed to fetch profile');
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        setIsLoading(true);

        const updatedProfile = {
            name: firstName,
            surname: lastName,
            phone: phoneNumber
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/userprofile/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access')}`
                },
                body: JSON.stringify(updatedProfile)
            });

            if (response.ok) {
                const data = await response.json();
                setSuccess(true);
                setTimeout(() => setSuccess(false), 5000);
                onUpdate(firstName, lastName);
            } else {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                setError('Что-то пошло не так');
                setTimeout(() => setError(null), 5000);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            setError('Что-то пошло не так');
            setTimeout(() => setError(null), 5000);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <div className={styles.formGroup}>
                            <label>First Name</label>
                            <input
                                type="text"
                                value={firstName ? firstName : ''}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.formGroup}>
                            <label>Last Name</label>
                            <input
                                type="text"
                                value={lastName ? lastName : ''}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.formGroup}>
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                value={phoneNumber ? phoneNumber : ''}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Загрузка...' : 'Update'}
                        </button>
                    </div>
                </form>
                {error && <div className={styles.alertError}>{error}</div>}
                {success && <div className={styles.alertSuccess}>Профиль успешно обновлен!</div>}
            </div>
        </>
    );
};

export default AccountForm;
