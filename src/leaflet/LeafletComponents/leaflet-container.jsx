import './leaflet-container.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import useGeoLocation from './geo-location-hook';
import useUserDefaultLocation from './user-default-location-hook';

export const LeafletContainer = ({ children }) => {
    const { position } = useGeoLocation();
    const { userLocation } = useUserDefaultLocation(position);

    return (
        <MapContainer className="leaflet-map" zoom={userLocation.zoom} center={userLocation} style={{cursor: "default !important"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </MapContainer>
    );
};
