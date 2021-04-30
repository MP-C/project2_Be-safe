import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Map from '../Map/Map';
import './Body.css';
import logo from '../assets/Be-Safe-Logo.png';

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
    useEffect(() => { }, [city]);

    const [cases, setCases] = useState('');
    
    const getCovidDataPerCity = () => {
        fetch('https://data.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-pandemic-belgium-cases-municipality%40public&q=&sort=date&facet=date&facet=nis5&facet=tx_descr_nl&facet=tx_descr_fr&facet=tx_adm_dstr_descr_nl&facet=tx_adm_dstr_descr_fr')
            .then((response) => response.data)
            .then((data) => {
                
                setCases(data.records[0].fields.geo_point_2d);
            });
    };
    console.log(getCovidDataPerCity);

    useEffect(() => { }, [cases]);

    /*
    const [hospitalisation, setHospitalisation]= useState (''); //use records from hospistalisation
    const regionDeath=[];//to stock info (Where Regions in both API's are equals) + Hospitalisations 
    const getHospitalisationsDataPerRegion = () => { //get hospitalisations IF city in 1API == 2API
        axios
        .get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-pandemic-belgium-hosp-province%40public&q=&sort=date&facet=date&facet=province&facet=region')
        .then ((response) => response.data)
        .then ((data) => {
        setHospitalisation();
        console.log 
        });
        };
    */

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
                    <button
                        id="geolocalisation"
                        className="button bottom-margin"
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
                            <p>{cases}</p>
                            
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
