import React, { useState, useEffect } from 'react';
import styles from './Trackers.module.scss';
import TrackerCard from './TrackerCard';
import { useAuthContext } from '/src/context/AuthContext.jsx';
import ModalDelete from "@/components/ModalDelete/ModalDelete.jsx";

const Trackers = () => {
    const { user } = useAuthContext();
    const [trackers, setTrackers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTrackerId, setSelectedTrackerId] = useState(null);

    useEffect(() => {
        const fetchTrackers = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch('http://127.0.0.1:8000/api/devices_with_image/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access')}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setTrackers(data);
                    console.log(data);
                } else {
                    console.error('Error fetching trackers:', response.status);
                    setError('Ошибка получения данных');
                }
            } catch (error) {
                console.error('Error fetching trackers:', error);
                setError('Ошибка получения данных');
            } finally {
                setLoading(false);
            }
        };

        fetchTrackers();
    }, []);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/device/delete/${selectedTrackerId}/`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access')}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setTrackers(trackers.filter(tracker => tracker.device_id !== selectedTrackerId));
                setModalOpen(false);
            } else {
                console.error('Error deleting tracker:', response.status);
                setError('Ошибка удаления устройства');
                setTimeout(() => setError(null), 3500);
            }
        } catch (error) {
            console.error('Error deleting tracker:', error);
            setError('Ошибка удаления устройства');
            setTimeout(() => setError(null), 3500);
        }
    };

    const openModal = (device_id) => {
        setSelectedTrackerId(device_id);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedTrackerId(null);
    };

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loading}>Загрузка...</div>
            ) : error ? (
                <div className={styles.error}>{error}</div>
            ) : (
                trackers.map(tracker => (
                    <TrackerCard
                        key={tracker.device_id}
                        imageUrl={tracker.image}
                        deviceType={tracker.device_type}
                        deviceName={tracker.name}
                        onDelete={() => openModal(tracker.device_id)}
                    />
                ))
            )}
            <ModalDelete
                isOpen={modalOpen}
                title="Подтверждение удаления"
                message="Вы действительно хотите удалить этот трекер?"
                onConfirm={handleDelete}
                onCancel={closeModal}
            />
        </div>
    );
};

export default Trackers;
