import axios from 'axios';
import React, { useState } from 'react';
import Map from '../Map/Map';
import './Body.css';

const crg = require('country-reverse-geocoding').country_reverse_geocoding();

export default function Body() {
    const [country, setCountry] = useState('');
    const [covidCase, setCovidCase] = useState(null);
    const [lat, setLat] = useState(50.8388);
    const [lng, setLng] = useState(4.35);
    const [status, setStatus] = useState(null);

    const getCovidData = () => {
        axios
            .get(
                `https://api.covid19api.com/live/country/${country}/status/confirmed`
            )
            .then((response) => response.data)
            .then((data) => {
                setCovidCase(data[0]);
                setLat(data[0].Lat);
                setLng(data[0].Lon);
            });
    };

    const findCountry = crg.get_country(lat, lng);

    const [countryToLowerCase] = useState(findCountry.name.toLowerCase());

    function getLocation() {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setStatus(null);
                    setLat(position.coords.latitude);
                    setLng(position.coords.longitude);
                },
                () => {
                    setStatus('Unable to retrieve your location');
                }
            );
        }
        axios
            .get(
                `https://api.covid19api.com/live/country/${countryToLowerCase}/status/confirmed`
            )
            .then((response) => response.data)
            .then((data) => {
                setCovidCase(data[0]);
            });
    }

    return (
        <div id="body">
            <div id="column-left" className="column">
                <div id="choose-geoloc-filter">
                    <div>
                        <button
                            className="top-margin button bottom-margin"
                            onClick={getLocation}
                        >
                            Get localized
                        </button>
                        <p>{status}</p>
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
                        {covidCase != null ? (
                            <div
                                className={`selection ${
                                    country || countryToLowerCase
                                        ? 'selected'
                                        : ''
                                }`}
                                id="fetched-data-API"
                            >
                                <h4>
                                    Results for {covidCase?.Country} for today
                                </h4>
                                <p>Confirmed cases: {covidCase.Confirmed}</p>
                                <p>Recovered persons: {covidCase.Recovered}</p>
                                <p>Deaths: {covidCase.Deaths}</p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>

            <div id="column-right" className="map">
                <div id="search-result">
                    <Map lat={lat} lng={lng} />
                </div>
            </div>
        </div>
    );
}
