import React, { useState, useEffect } from 'react';
import styles from './AccountSettings.module.scss';
import AccountForm from "@/page/Profile/AccountForm.jsx";
import Trackers from "@/page/Profile/Trackers.jsx";
import AddTracker from "@/page/Profile/AddTracker.jsx";
import Navbar from "@/components/Navbar.jsx";
import { useAuthContext } from '/src/context/AuthContext.jsx';

const AccountSettings = () => {
    const { user } = useAuthContext();
    const [activeTab, setActiveTab] = useState('account');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        const savedTab = localStorage.getItem('activeTab');
        if (savedTab) {
            setActiveTab(savedTab);
        }

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
                } else {
                    throw new Error('Failed to fetch profile');
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        localStorage.setItem('activeTab', tab);
    };

    const handleProfileUpdate = (newFirstName, newLastName) => {
        setFirstName(newFirstName);
        setLastName(newLastName);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'account':
                return <AccountForm onUpdate={handleProfileUpdate} />;
            case 'trackers':
                return <Trackers />;
            case 'add-tracker':
                return <AddTracker />;
            default:
                return <AccountForm onUpdate={handleProfileUpdate} />;
        }
    };

    return (
        <>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.profile}>
                        <img src="/src/assets/user.png" alt="Profile" className={styles.profileImage} />
                        <h2>{firstName}</h2>
                    </div>
                    <nav>
                        <ul>
                            <li
                                className={activeTab === 'account' ? styles.active : ''}
                                onClick={() => handleTabClick('account')}
                            >
                                Аккаунт
                            </li>
                            <li
                                className={activeTab === 'trackers' ? styles.active : ''}
                                onClick={() => handleTabClick('trackers')}
                            >
                                Трекеры
                            </li>
                            <li
                                className={activeTab === 'add-tracker' ? styles.active : ''}
                                onClick={() => handleTabClick('add-tracker')}
                            >
                                Добавить трекер
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.formContainer}>
                    {renderContent()}
                </div>
            </div>
        </>
    );
};

export default AccountSettings;
