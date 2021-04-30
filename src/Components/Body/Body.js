import React, { useState } from 'react';
//  import axios from 'axios';

import Map from '../Map/Map';

import './Body.css';

export default function Body() {
    const [covidCase, setCovidCase] = useState(null);

    const getCovidDataPerCity = () => {
        fetch(
            'https://data.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-pandemic-belgium-cases-municipality%40public&q=&sort=date&facet=date&facet=nis5&facet=tx_descr_nl&facet=tx_descr_fr&facet=tx_adm_dstr_descr_nl&facet=tx_adm_dstr_descr_fr'
        )
            .then((response) => response.json())
            .then( (data) => {
                setCovidCase(data.records[0]);
            });
    };

    //  useEffect(() => { }, [city]);

    const [city, setCity] = useState('');

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
                        <button
                            id="choose-city"
                            className="top-margin button bottom-margin"
                            onClick={getCovidDataPerCity}
                        >
                            Sélectionner une commune
                        </button>
                        <div className={`selection ${city ? 'selected' : ''}`}>
                            <h4>Votre rercherche :</h4>
                            <p> Ville : {city} </p>
                            <p> Date : {date} </p>
                        </div>
                        <div id="fetched-data-API-city">
                            <p>{covidCase?.fields?.date}</p>
                            <p>{covidCase?.fields?.region}</p>
                            <p>{covidCase?.fields?.tx_descr_fr}</p>
                            <p>{covidCase?.geometry?.coordinates}</p>
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