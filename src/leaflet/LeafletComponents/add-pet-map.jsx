import markerIcon from 'leaflet/dist/images/marker-icon.png';
import { Marker, Polygon, useMapEvents } from 'react-leaflet';
import useGeoLocation from './geo-location-hook';
import useUserDefaultLocation from './user-default-location-hook';
import { useEffect, useRef } from 'react';
import L from 'leaflet';

export const AddPetMap = ({ markers, onAddMarker }) => {
    const { position } = useGeoLocation();
    const { userLocation } = useUserDefaultLocation(position);

    const map = useMapEvents({
        click(e) {
            onAddMarker(e.latlng);
        }
    });

    useEffect(() => {
        map.setView(userLocation);
    }, [userLocation]);

    const userIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [22, 38],
        iconAnchor: [11, 19],
    });

    return (
        <div>
            {markers.map((position, index) => (
                <Marker key={index} position={position} icon={userIcon} />
            ))}
            {markers.length >= 3 && (
                <Polygon positions={markers} pathOptions={{ color: 'purple' }} />
            )}
        </div>
    );
};
