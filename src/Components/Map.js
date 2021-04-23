import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Location from './Location';
import './Map.css';

function Map() {
    return (
        <div>
            <MapContainer
                center={{ lat: 51.505, lng: -0.09 }}
                zoom={13}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Location />
            </MapContainer>
        </div>
    )
}

export default Map;