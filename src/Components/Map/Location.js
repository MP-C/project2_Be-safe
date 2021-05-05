import React, { useState } from 'react';

function Location() {
    const [lat, setLat] = useState(null); //get Latitude
    const [lng, setLng] = useState(null); //get Longitude
    const [status, setStatus] = useState(null); //if new position, il will change the information to the client

    function getLocation() { //how to get a new position and change it on status, on Latitude and Longitude
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
            <button className="button" onClick={getLocation}>Get Location </button> 
            <p>{status}</p>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lng}</p>
            <Map />
        </div>
    );
}

export default Location;
