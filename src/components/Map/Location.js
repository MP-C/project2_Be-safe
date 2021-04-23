import React from 'react';
import { useMapEvents, Marker, Popup } from 'react-leaflet';

export default function Location() {
    const [position, setPosition] = React.useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    });
    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}
