import React, { useState, useEffect } from 'react';
import styles from './AccountSettings.module.scss';
import AccountForm from "@/page/Profile/AccountForm.jsx";
import Trackers from "@/page/Profile/Trackers.jsx";
import AddTracker from "@/page/Profile/AddTracker.jsx";
import Navbar from "@/components/Navbar.jsx";

const AccountSettings = () => {
    const [activeTab, setActiveTab] = useState('account');

    useEffect(() => {
        const savedTab = localStorage.getItem('activeTab');
        if (savedTab) {
            setActiveTab(savedTab);
        }
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        localStorage.setItem('activeTab', tab);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'account':
                return <AccountForm />;
            case 'trackers':
                return <Trackers />;
            case 'add-tracker':
                return <AddTracker />;
            default:
                return <AccountForm />;
        }
    };

    return (
        <>
            <div style={{ borderBottom: '5px solid #c659f7', borderRadius: '3%' }}>
                <Navbar />
            </div>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.profile}>
                        <img src="" alt="Profile" className={styles.profileImage} />
                        <h2>Kiran Acharya</h2>
                    </div>
                    <nav>
                        <ul>
                            <li
                                className={activeTab === 'account' ? styles.active : ''}
                                onClick={() => handleTabClick('account')}
                            >
                                Аканут
                            </li>
                            <li
                                className={activeTab === 'trackers' ? styles.active : ''}
                                onClick={() => handleTabClick('trackers')}
                            >
                                Трейкеры
                            </li>
                            <li
                                className={activeTab === 'add-tracker' ? styles.active : ''}
                                onClick={() => handleTabClick('add-tracker')}
                            >
                                Добавить трейкер
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
