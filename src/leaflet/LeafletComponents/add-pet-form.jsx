import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PetForm } from '../forms/pet-form.jsx';
import { AddPetMap } from './add-pet-map.jsx';
import { LeafletContainer } from './leaflet-container.jsx';
import { saveAs } from 'file-saver';
import { addZone } from './../local-storage/store';

export const AddPetForm = () => {
    const [markers, setMarkers] = useState([]);
    const navigate = useNavigate();

    const onAddMarker = (newMarker) => {
        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    };

    const onSubmit = (pet) => {
        if (markers.length < 1) return;
        const newPet = { ...pet, coordinates: markers };
        console.log('New Pet Data:', newPet);
        navigate('../');
    };

    const createZone = () => {
        const zoneData = {
            markers: markers,
            zoneColor: 'purple'
        };
        addZone(zoneData);
        const blob = new Blob([JSON.stringify(zoneData, null, 2)], { type: 'application/json' });
        saveAs(blob, 'zoneData.json');
    };

    return (
        <div>
            <PetForm submit={onSubmit} />
            <LeafletContainer>
                <AddPetMap markers={markers} onAddMarker={onAddMarker} />
            </LeafletContainer>
            {markers.length >= 3 && (
                <button onClick={createZone}>Создать зону</button>
            )}
        </div>
    );
};
