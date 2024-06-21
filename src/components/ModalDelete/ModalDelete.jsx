import React from 'react';
import styles from './ModalDelete.module.scss';

const Modal = ({ isOpen, title, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2 className={styles.modalTitle}>{title}</h2>
                <p>{message}</p>
                <div className={styles.modalActions}>
                    <button onClick={onConfirm} className={styles.confirmButton}>Удалить</button>
                    <button onClick={onCancel} className={styles.cancelButton}>Отмена</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
