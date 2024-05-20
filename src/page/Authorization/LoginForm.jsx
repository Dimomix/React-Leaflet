// components/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '/src/hooks/useAuth';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <h2 className={styles.title}>Login</h2>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.button}>Login</button>
                    <button
                        type="button"
                        onClick={() => navigate('/register')}
                        className={styles.secondaryButton}
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
