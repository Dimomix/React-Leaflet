import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { AddPetForm as LeafletForm } from './LeafletComponents/add-pet-form.jsx';
import { Main } from './views/main.jsx';
import { FaArrowLeft } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import styles from './LeafletHome.module.scss';
import StaggeredDropDown from "@/components/StaggeredDropdown/StaggeredDropdown.jsx";
import TrackerChanges from './LeafletComponents/TrackerChanges';

const LeafletHome = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.leafletHome}>
            <a href="/">
                <button
                    style={{ marginTop: '25px' }}
                    className="absolute top-4 left-4 bg-purple-800 text-white p-2 rounded-full hover:bg-purple-700"
                >
                    <FaArrowLeft />
                </button>
            </a>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-purple-600" style={{ marginBottom: '20px' }}>
                Map
            </h2>
            <nav>
                <Link to="/leaflet-home">Home</Link> |{" "}
                <Link to="/leaflet-home/add-leaflet">Add Zone</Link> |{" "}
                <Link to="/leaflet-home/tracker-changes">Tracker Changes</Link>
            </nav>
            <Routes>
                <Route path="add-leaflet" element={<LeafletForm />} />
                <Route path="/" element={<Main />} />
                <Route path="tracker-changes" element={<TrackerChanges />} />
            </Routes>
        </div>
    );
};

export default LeafletHome;
