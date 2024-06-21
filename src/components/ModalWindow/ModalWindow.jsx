import React, { useState } from 'react';
import styles from './ModalWindow.module.scss';

const ModalWindow = ({ show, handleClose, devices, handleAddDevices }) => {
    const [selectedDevices, setSelectedDevices] = useState([]);

    const handleSelectDevice = (deviceId) => {
        setSelectedDevices((prevSelected) => {
            if (prevSelected.includes(deviceId)) {
                return prevSelected.filter(id => id !== deviceId);
            } else {
                return [...prevSelected, deviceId];
            }
        });
    };

    const handleAdd = () => {
        handleAddDevices(selectedDevices);
        handleClose();
    };

    if (!show) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2 className={styles.modalTitle}>Выберите устройства для добавления в зону</h2>
                <div className={styles.deviceList}>
                    {devices.map(device => (
                        <div
                            key={device.device_id}
                            className={`${styles.deviceCard} ${selectedDevices.includes(device.device_id) ? styles.selected : ''}`}
                            onClick={() => handleSelectDevice(device.device_id)}
                        >
                            <input
                                type="checkbox"
                                checked={selectedDevices.includes(device.device_id)}
                                onChange={() => handleSelectDevice(device.device_id)}
                            />
                            <label>{device.name}</label>
                        </div>
                    ))}
                </div>
                <button className={styles.addZoneButton} onClick={handleAdd}>Добавить</button>
            </div>
        </div>
    );
};

export default ModalWindow;
