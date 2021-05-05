import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import './Map.css';

export default function Map() {
    return (
        <div>
            <MapContainer
                center={{ lat: 51.789, lng: 4.355 }}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}
