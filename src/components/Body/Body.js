import React from 'react';
import './Body.css';
import logo from './Be-Safe-logo.png';

export default function Body() {
    return (
        <div id="body">
            <h1> Voici mon composant body</h1>
            <div id="column-left">
                <img id="logo-BeSafe" src={logo} width="150px" class="logo" />
                <div id="choose-geoloc-filter">
                    <button id="geolocalisation">Se géolocaliser</button>
                    <div id="input-filter">
                        <input name="city" />
                        <input name="date" />
                        <button id="choose-city">Sélectionner une commune</button>
                    </div>
                </div>
            </div>
            <div id="column-right">
                <img id="map-result" />
            </div>
            <div id="search-result">
            </div>
        </div>
    )
}