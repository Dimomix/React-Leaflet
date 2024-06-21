import React, { useEffect, useState } from 'react';
import { Marker, Popup, Polygon, Polyline, useMap } from 'react-leaflet';
import useGeoLocation from './geo-location-hook';
import useUserDefaultLocation from './user-default-location-hook';
import L from 'leaflet';
import './leaflet-container.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';

export const LeafletMap = () => {
    const { position } = useGeoLocation();
    const { userLocation } = useUserDefaultLocation(position);
    const [zones, setZones] = useState([]);
    const [trackers, setTrackers] = useState([]);
    const [todayPositions, setTodayPositions] = useState([]);
    const [error, setError] = useState(null);

    const map = useMap();

    useEffect(() => {
        map.setView(userLocation);
    }, [userLocation]);

    useEffect(() => {
        const fetchZones = async () => {
            try {
                const response = await fetch('http://localhost:8000/polygons/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access')}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                const transformedZones = data.map(zone => ({
                    markers: zone.points.map(point => ({
                        lat: point.latitude,
                        lng: point.longitude
                    })),
                    zoneColor: 'purple',
                    name: zone.name,
                    description: zone.description
                }));
                setZones(transformedZones);
            } catch (error) {
                console.error('Error fetching zones:', error);
                setError('Ошибка получения зон');
            }
        };

        fetchZones();
    }, []);

    useEffect(() => {
        const fetchTrackers = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/devices_with_image/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access')}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const devices = await response.json();
                const trackerPromises = devices.map(async (device) => {
                    try {
                        const response = await fetch(`http://localhost:8000/api_n/positions/latest/${device.device_id}/`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${localStorage.getItem('access')}`,
                                'Content-Type': 'application/json',
                            },
                        });
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        const position = await response.json();
                        return { ...device, position };
                    } catch (error) {
                        console.error(`Error fetching position for device ${device.device_id}:`, error);
                        return { ...device, position: null };
                    }
                });
                const trackersWithPositions = await Promise.all(trackerPromises);
                setTrackers(trackersWithPositions);
            } catch (error) {
                console.error('Error fetching trackers:', error);
                setError('Ошибка получения трекеров');
            }
        };

        fetchTrackers();
    }, []);

    const userIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [22, 38],
        iconAnchor: [11, 19],
    });

    return (
        <div>
            <Marker position={userLocation} icon={userIcon}></Marker>
            {trackers.map((tracker, index) => (
                tracker.position && (
                    <Marker key={index} position={[tracker.position.latitude, tracker.position.longitude]} icon={userIcon}>
                        <Popup>
                            <img src={`http://localhost:8000${tracker.image}`} alt={`Image of ${tracker.name}`} className="pet-popup-img"/>
                            <div>Name: <h4>{tracker.name}</h4></div>
                            <p>Type: {tracker.device_type}</p>
                            <p>Last Position: {tracker.position.timestamp}</p>
                        </Popup>
                    </Marker>
                )
            ))}
            {zones.map((zone, index) => (
                <Polygon key={index} positions={zone.markers} pathOptions={{ color: zone.zoneColor }}>
                    <Popup>
                        <div>Name: <h4>{zone.name}</h4></div>
                        <p>{zone.description}</p>
                        <button onClick={() => {/* код для добавления устройства в зону */}}>Add to Tracker</button>
                    </Popup>
                </Polygon>
            ))}
            {todayPositions.length >= 2 && (
                <Polyline
                    positions={todayPositions.map(pos => [pos.latitude, pos.longitude])}
                    pathOptions={{ color: 'purple' }}
                >
                    <Popup>
                        <div>Today's Positions</div>
                    </Popup>
                </Polyline>
            )}
            {error && (
                <div className="error">
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};
