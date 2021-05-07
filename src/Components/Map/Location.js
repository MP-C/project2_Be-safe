//  import React, { useState } from 'react';
import './Location.css';

function Location() {


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
