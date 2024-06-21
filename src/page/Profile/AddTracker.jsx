import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import styles from "@/page/Profile/AddTracker.module.scss";
import { useAuthContext } from '/src/context/AuthContext.jsx';

const AddTracker = () => {
    const { user } = useAuthContext();
    const [trackerName, setTrackerName] = useState('');
    const [trackerId, setTrackerId] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [typeOptions, setTypeOptions] = useState([]);

    useEffect(() => {
        const fetchDeviceTypes = async () => {
            try {
                const response = await fetch('http://localhost:8000/api_n/devices/types/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('access')}`
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    const options = data.map(type => ({
                        value: type.device_type,
                        label: type.device_type
                    }));
                    setTypeOptions(options);
                } else {
                    console.error('Error fetching device types:', response.status);
                    setError('Ошибка получения типов устройств');
                }
            } catch (error) {
                console.error('Error fetching device types:', error);
                setError('Ошибка получения типов устройств');
            }
        };

        fetchDeviceTypes();
    }, []);

    const handleTypeChange = (selectedOption) => {
        setType(selectedOption.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);  // Сброс ошибки перед новым запросом
        setSuccess(false);  // Сброс успешного сообщения перед новым запросом
        setIsLoading(true);  // Установка состояния загрузки

        const newTracker = {
            name: trackerName,
            device_type: type,
            tracker_id: trackerId,
        };

        try {
            const response = await fetch('http://localhost:8000/api/device/add/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access')}`
                },
                body: JSON.stringify(newTracker)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Tracker added:', data);
                setTrackerName('');
                setTrackerId('');
                setType('');
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3500);
            } else {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                setError('Что-то пошло не так');
                setTimeout(() => setError(null), 3500);
            }
        } catch (error) {
            console.error('Error adding tracker:', error);
            setError('Что-то пошло не так');
            setTimeout(() => setError(null), 3500);
        } finally {
            setIsLoading(false);  // Сброс состояния загрузки
        }
    };

    return (
        <div>
            {isLoading ? (
                <div className={styles.loading}>Загрузка...</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Tracker Name</label>
                        <input
                            type="text"
                            value={trackerName}
                            onChange={(e) => setTrackerName(e.target.value)}
                        />
                    </div>
                    <div className={styles.selectorType}>
                        <label>Type tracker</label>
                        <Select
                            value={typeOptions.find(option => option.value === type)}
                            onChange={handleTypeChange}
                            options={typeOptions}
                            placeholder="Select or type a tracker"
                            isSearchable
                            noOptionsMessage={() => 'Not found'}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Serial number</label>
                        <input
                            type="text"
                            value={trackerId}
                            onChange={(e) => setTrackerId(e.target.value)}
                        />
                    </div>
                    <div className={styles.buttons}>
                        <button type="submit">Add Tracker</button>
                    </div>
                </form>
            )}
            {error && <div className={styles.alertError}>Что-то пошло не так</div>}
            {success && <div className={styles.alertSuccess}>Трекер успешно добавлен!</div>}
        </div>
    );
};

export default AddTracker;
