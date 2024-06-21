import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PetForm } from '../forms/pet-form.jsx';
import { AddPetMap } from './add-pet-map.jsx';
import { LeafletContainer } from './leaflet-container.jsx';
import ModalWindow from "@/components/ModalWindow/ModalWindow.jsx";

export const AddPetForm = () => {
    const [markers, setMarkers] = useState([]);
    const [zoneId, setZoneId] = useState(null); // Сохраняем ID созданной зоны
    const [showModal, setShowModal] = useState(false); // Для управления модальным окном
    const [devices, setDevices] = useState([]); // Для хранения устройств пользователя

    const navigate = useNavigate();

    const onAddMarker = (newMarker) => {
        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    };

    const onSubmit = async (pet) => {
        if (!pet.name) {
            alert("Необходимо присвоить имя зоне.");
            return;
        }

        if (markers.length < 3) {
            alert("Необходимо указать минимум три точки для создания зоны.");
            return;
        }

        const newPet = { ...pet, coordinates: markers.map(marker => ({ lat: marker.lat, lng: marker.lng })) };

        try {
            const response = await fetch('http://localhost:8000/create-polygon/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPet),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.detail}`);
            }

            const data = await response.json();
            setZoneId(data.id); // Сохраняем ID созданной зоны
            setShowModal(true); // Открываем модальное окно

            // Fetch devices of the user
            const devicesResponse = await fetch('http://localhost:8000/api/devices/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access')}`,
                    'Content-Type': 'application/json',
                },
            });

            if (devicesResponse.ok) {
                const devicesData = await devicesResponse.json();
                setDevices(devicesData);
            } else {
                console.error('Error fetching devices:', devicesResponse.status);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    const handleAddDevices = async (selectedDevices) => {
        try {
            const response = await fetch(`http://localhost:8000/api/geozona/add_devices/${zoneId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access')}`,
                },
                body: JSON.stringify({ listiddevices: selectedDevices }),
            });

            if (response.ok) {
                console.log('Devices added to zone successfully');
            } else {
                console.error('Error adding devices to zone:', response.status);
            }
        } catch (error) {
            console.error('Error adding devices to zone:', error);
        }
    };

    return (
        <div>
            <PetForm submit={onSubmit} />
            <LeafletContainer>
                <AddPetMap markers={markers} onAddMarker={onAddMarker} />
            </LeafletContainer>
            {showModal && (
                <ModalWindow
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    devices={devices}
                    handleAddDevices={handleAddDevices}
                />
            )}
        </div>
    );
};
