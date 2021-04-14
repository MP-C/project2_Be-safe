import React from 'react';
import './Body.css';

export default function Body (){
    return (
        <div id="body">
            <h1> Voici mon composant body</h1>
            <img id="logo-BeSafe"/>
            <div id="choose-geoloc-filter">
                <button id="geolocalisation">Se géolocaliser</button>
                <button id="choose-city">Sélectionner une commune</button>
                <div id="input-filter">
                    <input name="city" />
                    <input name="date" />
                </div>
            </div>
            <div id="map">
                <img id="map-result"/>
            </div>
            <div id="search-result">
            </div>
        </div>
    )
}