import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, handleClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                {children}
                <button onClick={handleClose} className={styles.closeButton}>Добавить</button>
            </div>
        </div>
    );
};

export default Modal;
