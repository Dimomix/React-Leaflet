// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap, LayersControl, Polyline } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
// import 'leaflet-measure/dist/leaflet-measure.css';
// import 'leaflet-control-geocoder';
// import 'leaflet-measure';
// import 'leaflet.browser.print';
// import axios from 'axios';
// import styles from './MapComponent.module.scss';
//
// const { BaseLayer } = LayersControl;
//
// const MapComponent = () => {
//     const [trackerPositions, setTrackerPositions] = useState([]);
//     const [machineId, setMachineId] = useState('');
//
//     useEffect(() => {
//         let id = localStorage.getItem('MachineId');
//         if (!id) {
//             id = crypto.randomUUID();
//             localStorage.setItem('MachineId', id);
//         }
//         setMachineId(id);
//
//         // Initialize the map and plugins
//         const map = L.map('map').setView([43.23614, 76.93152], 18);
//
//         L.control.scale({ position: 'bottomleft' }).addTo(map);
//         L.control.browserPrint().addTo(map);
//         L.control.measure({ primaryLengthUnit: 'kilometers', secondaryLengthUnit: 'miles', primaryAreaUnit: 'hectares' }).addTo(map);
//         L.Control.geocoder().addTo(map);
//
//         map.on('mousemove', (e) => {
//             document.querySelector(`.${styles.coordinate}`).innerHTML = `Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`;
//         });
//
//         // Fetch tracker positions
//         const loadTrackerPositions = async (deviceId) => {
//             try {
//                 const response = await axios.get(`/api/positions/?device_id=${deviceId}`);
//                 const data = response.data;
//                 if (data.length > 0) {
//                     const latLngs = data.map(pos => [pos.latitude, pos.longitude]);
//                     L.polyline(latLngs, { color: 'blue' }).addTo(map);
//                     const lastPos = data[data.length - 1];
//                     L.marker([lastPos.latitude, lastPos.longitude])
//                         .addTo(map)
//                         .bindPopup("Текущее местоположение трекера")
//                         .openPopup();
//                     map.setView([lastPos.latitude, lastPos.longitude], 13);
//                 }
//             } catch (error) {
//                 console.error('Error loading tracker data:', error);
//             }
//         };
//
//         document.getElementById('showTracker').addEventListener('click', () => {
//             loadTrackerPositions('5633546');
//         });
//
//         navigator.geolocation.getCurrentPosition(
//             ({ coords }) => {
//                 const position = [coords.latitude, coords.longitude];
//                 L.marker(position).addTo(map).bindPopup("Ваша позиция").openPopup();
//                 const data = new FormData();
//                 data.append('id', machineId);
//                 data.append('lat', coords.latitude);
//                 data.append('lng', coords.longitude);
//                 // csrf token handling should be adjusted to your application context
//                 data.append('csrfmiddlewaretoken', '{{ csrf_token }}');
//
//                 axios.post('/index', data)
//                     .then(response => console.log('Success:', response))
//                     .catch(error => console.error('Error:', error));
//             },
//             ({ message }) => console.log(message),
//             { timeout: 6000, enableHighAccuracy: true }
//         );
//
//         const openStreetMapLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; OpenStreetMap contributors',
//         }).addTo(map);
//
//         const imageryLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {});
//
//         L.control.layers({
//             'Open Street Map': openStreetMapLayer,
//             'Imagery': imageryLayer
//         }).addTo(map);
//
//         return () => {
//             map.remove();
//         };
//     }, [machineId]);
//
//     return (
//         <div id="map" className={styles.mapContainer}>
//             <div className={`leaflet-control ${styles.coordinate}`}></div>
//             <div className={`leaflet-control ${styles.geoposition}`}></div>
//             <button id="showTracker" className={`leaflet-control ${styles.trackerposition}`}>Показать трекер</button>
//         </div>
//     );
// };
//
// export default MapComponent;
