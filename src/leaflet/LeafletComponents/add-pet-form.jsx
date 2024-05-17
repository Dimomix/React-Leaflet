import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PetForm } from '../forms/pet-form.jsx';
import { AddPetMap } from './add-pet-map.jsx';
import { LeafletContainer } from './leaflet-container.jsx';

export const AddPetForm = () => {
    const [markers, setMarkers] = useState([]);
    const navigate = useNavigate();

    const onAddMarker = (newMarker) => {
        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    };

    const onSubmit = async (pet) => {
        if (markers.length < 1) return;
        const newPet = { ...pet, coordinates: markers.map(marker => ({ lat: marker.lat, lng: marker.lng })) };

        try {
            const response = await fetch('http://localhost:8000/create-polygon_n/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPet),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.detail}`);
            }

            const data = await response.json();
            console.log('Server response:', data);
            navigate('../');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div>
            <PetForm submit={onSubmit} />
            <LeafletContainer>
                <AddPetMap markers={markers} onAddMarker={onAddMarker} />
            </LeafletContainer>
            {markers.length >= 3 && (
                <button onClick={() => onSubmit({ name: '', description: '', avatar: '' })}>Создать зону</button>
            )}
        </div>
    );
};
