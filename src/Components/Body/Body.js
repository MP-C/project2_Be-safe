import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Map from '../Map/Map';

import './Body.css';

export default function Body() {

    const [covidCase, setCovidCase] = useState([]);

    const getCovidData = useEffect(() => {
        axios
            .get('https://api.covid19api.com/summary')
            .then((response) => response.data) 
            .then((data) => {
                setCovidCase(console.log(data.Countries));
            })
        }, []);

    // [{Country:xxx}, {Country:XXX}].filter(e=>e.country.includes(country))

    const [country, setCountry] = useState('');

    const [date, setDate] = useState('');

    return (
        <div id="body">
            <div id="column-left" className="column">
                <div id="choose-geoloc-filter">
                    <button
                        id="geolocalisation"
                        className="button top-margin bottom-margin"
                    >
                        Se géolocaliser
                    </button>
                    <div id="input-filter" className="filter">
                        <input
                            name="pays"
                            className="input top-margin"
                            placeholder="Pays"
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <input
                            name="date"
                            className="input top-margin"
                            placeholder="Date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <button
                            id="choose-country"
                            className="top-margin button bottom-margin"
                            onClick={getCovidData}
                        >
                            Sélectionner un pays
                        </button>
                        <div className={`selection ${country ? 'selected' : ''}`}>
                            <h4>Votre rercherche :</h4>
                            <p> Pays: {country} </p>
                            <p> Date : {date} </p>
                        </div>
                        <div id="fetched-data-API">
                            <p>{console.log(covidCase)}</p>
                            <p>{covidCase?.Country}</p>
                            <p>{covidCase?.Date}</p>
                            <p>{covidCase?.TotalConfirmed}</p>
                            <p>{covidCase?.TotalRecovered}</p>
                            <p>{covidCase?.TotalDeaths}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="column-right" className="map">
                <div id="search-result">
                    <Map />
                </div>
            </div>
        </div>
    );
}
