import React from 'react';
import './Header.css';
import logo from '../assets/Be-Safe-Logo.png';

export default function Header() {
    return (
        <div className="header_intro">
            <div className="banner-container">
                <a className="logo" href="index.js">
                    <img className="logo-Be-Safe" src={logo} />
                </a>
                <div className="headear_text">
                    <p className="headear_text_presentation">
                        This site alows you to consult any information about
                        COVID-19 statistics developpement around the world. It
                        uses outsourcing free API, to identify the lastest news
                        (total deaths, total recovered and total contaminations
                        confirmed).
                    </p>
                </div>
            </div>
        </div>
    );
}
