import React from 'react';
import './Body.css';
import logo from './Be-Safe-logo.png';
import carte from './carte.png';

export default function Body() {
    return (
        <div id="body">
            <div id="column-left" className="column">
                <img
                    id="logo-BeSafe"
                    src={logo}
                    width="150px"
                    className="logo vertical-margin"
                />
                <div id="choose-geoloc-filter">
                    <button id="geolocalisation" class="input bottom-margin">
                        Se géolocaliser
                    </button>
                    <div id="input-filter" class="filter">
                        <input
                            name="city"
                            class="input top-margin"
                            placeholder="Commune"
                            type="text"
                        />
                        <input
                            name="date"
                            class="input top-margin"
                            placeholder="Date"
                            type="date"
                        />
                        <button id="choose-city" class="input top-margin">
                            Sélectionner une commune
                        </button>
                    </div>
                </div>
            </div>
            <div id="column-right" class="map">
                <img id="map-result" src={carte} />
            </div>
            <div id="search-result">
                <p>Cas détectés</p>
                <p>Hospitalisations</p>
                <p>Décès</p>
            </div>
        </div>
    );
}
