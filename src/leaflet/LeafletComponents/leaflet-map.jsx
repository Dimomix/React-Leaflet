import markerIcon from 'leaflet/dist/images/marker-icon.png';
import { Marker, Popup, Polygon, useMap } from 'react-leaflet';
import useGeoLocation from './geo-location-hook';
import useUserDefaultLocation from './user-default-location-hook';
import { useEffect } from 'react';
import { getPets, getZones } from './../local-storage/store';
import L from 'leaflet';

export const LeafletMap = () => {
    const { position } = useGeoLocation();
    const { userLocation } = useUserDefaultLocation(position);
    const pets = getPets();
    const zones = getZones();

    const map = useMap();

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
            <Marker position={userLocation} icon={userIcon}></Marker>
            {pets.map((p, i) => {
                const icon = L.icon({
                    iconUrl: p.avatar || markerIcon, // Убедитесь, что есть резервное изображение, если p.avatar не установлен
                    iconSize: [25, 41],
                    iconAnchor: [25, 25],
                    className: 'pet-marker',
                });
                return (
                    <Marker key={i} icon={icon} position={p.coordinates}>
                        <Popup>
                            <img src={p.avatar} className="pet-popup-img" />
                            <div>Name: <h4>{p.name}</h4></div>
                            <p>{p.description}</p>
                        </Popup>
                    </Marker>
                );
            })}
            {zones.map((zone, index) => (
                <Polygon key={index} positions={zone.markers} pathOptions={{ color: zone.zoneColor }} />
            ))}
        </div>
    );
};
