import React, {useState} from 'react';
import styles from "@/page/Profile/AccountSettings.module.scss";

const AddTracker = () => {
    const [firstName, setFirstName] = useState('Kiran');
    const [lastName, setLastName] = useState('Acharya');
    const [email, setEmail] = useState('kiranacharya287@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('+91 9876543215');

    return (
        <div>
            <h2>Account Settings</h2>
            <form>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label>3rst Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Phone number</label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button type="submit">Update</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddTracker;