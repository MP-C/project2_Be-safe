import axios from 'axios';
import React, { useState } from 'react';
import Map from '../Map/Map';
import './Body.css';

export default function Body() {
    const [country, setCountry] = useState('');
    const [covidCase, setCovidCase] = useState(null);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const getCovidData = () => {
        axios
            .get('https://api.covid19api.com/summary')
            .then((response) => response.data)
            .then((data) => {
                setCovidCase(data.Countries);
            });
    };

    const filteredCountry = covidCase
        ? covidCase.find((item) => item.Country.slice(0, country.lenght).includes(country))
        : null;

    function getLocation() {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    return (
        <div id="body">
            <div id="column-left" className="column">
                <div id="choose-geoloc-filter">
                            <div id="search-result">
                                <button className="button" onClick={getLocation}>Géolocalisation</button>
                                <p>{status}</p>
                                <p>Latitude: {lat}</p>
                                <p>Longitude: {lng}</p>
                            </div>
                    <div id="input-filter" className="filter">
                        <div id="column-right" className="map">
                        </div>
                        <input
                            name="pays"
                            className="input top-margin"
                            placeholder="Country"
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <button
                            id="choose-country"
                            className="top-margin button bottom-margin"
                            onClick={getCovidData}
                        >
                            Select country
                        </button>
                        {filteredCountry != null ? (
                            <div
                                className={`selection ${country ? 'selected' : ''}`}
                                id="fetched-data-API"
                            >
                                <h4>Results from {filteredCountry?.Country}</h4>
                                <p>New recovers: {filteredCountry.NewRecovered}</p>
                                <p>Total confirmed cases: {filteredCountry.TotalConfirmed}</p>
                                <p>Total recovered persons: {filteredCountry.TotalRecovered}</p>
                                <p>Total deaths: {filteredCountry.TotalDeaths}</p>
                            </div>
                        ) : null
                        }
                    </div>
                </div>
            </div>
            <Map lat={lat} lng={lng} />
        </div>
    );
}
