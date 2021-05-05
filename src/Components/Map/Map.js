import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import './Map.css';

export default function Map(lat,lng) {
    const [center, setCenter] = React.useState('');
    setCenter ([{lat},{lng}]);
    
    return (
        <div>
            <MapContainer
                center={center}
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
