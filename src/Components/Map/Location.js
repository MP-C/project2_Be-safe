import React, { useState } from 'react';
import './Location.css';

function Location() {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    function getLocation() {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    return (
        <div className="App">
            <button className="button" onClick={getLocation}>Géolocalisation</button>
            <p>{status}</p>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lng}</p>
        </div>
    );
}

export default Location;
