import React, { useState, useEffect } from 'react';
//  import axios from 'axios';
import Location from '../Map/Location';
import Map from '../Map/Map';
import './Body.css';

// export default function Body() {
//     const [city, setCity] = useState('');

//  const getCovidDataPerCity = () => {
//  axios
//  .get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-pandemic-belgium-hosp-province%40public&q=&sort=date&facet=date&facet=province&facet=region')
//  .then ((response) => response.data)
//  .then ((data) => {
//  setCity(data);
//  });
//  };


export default function Body() {

    const [date, setDate] = useState('');
    const [city, setCity] = useState('');

    //  function handleGetCovidData() => {setCity};

    const getCovidDataPerCity = () => {
        fetch("https://data.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-pandemic-belgium-hosp-province%40public&q=&sort=date&facet=date&facet=province&facet=region")
            .then((response) => response.json())
            .then((data) => console.log(data.records[0].fields.province));
    };


    useEffect(() => { }, [city]);


    return (
        <div id="body">
            <div id="column-left" className="column">

                <div id="choose-geoloc-filter">
                    <Location />
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
};
