import React, { useState, useEffect } from 'react';
//  import axios from 'axios';

import Map from '/src/Components/Map/Map';

import './Body.css';

import logo from '/src/Components/assets/Be-Safe-logo.png';

export default function Body() {

    const [city, setCity] = useState('');

    //  const getCovidDataPerCity = () => {
    //  axios
    //  .get('')
    //  .then ((response) => response.data)
    //  .then ((data) => {
    //  setCity(data);
    //  });
    //  };
    useEffect(() => {

    }, [city]);

    const [date, setDate] = useState('');

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
                    <button id="geolocalisation" className="button bottom-margin">
                        Se géolocaliser
                    </button>
                    <div id="input-filter" class="filter">
                        <input
                            name="city"
                            className="input top-margin"
                            placeholder="Commune"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input
                            name="date"
                            className="input top-margin"
                            placeholder="Date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <button id="choose-city" className="top-margin button bottom-margin">
                            Sélectionner une commune
                        </button>
                        <div className={`selection ${city ? "selected" : ""}`}>
                            <h4>Votre rercherche :</h4>
                            <p> Ville : {city} </p>
                            <p> Date : {date} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="column-right" className="map">
                <img id="map-result" src={carte} />
            </div>
            <div id="search-result">
                <Map />
            </div>
        </div>
    );
}
