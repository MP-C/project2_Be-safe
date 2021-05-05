<<<<<<< HEAD
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

=======
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
>>>>>>> e8aaa1931694f07aabfa6823d6264fa4c9c34972
import './Map.css';

export default function Map({ lat, lng }) {
    const center = [lat, lng];
    const [map, setMap] = useState(null);
    if (map) {
        map.flyTo(center);
    }
    return (
        <div>
            <MapContainer
                center={center}
                zoom={13}
                whenCreated={setMap}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}></Marker>
            </MapContainer>
        </div>
    );
}
