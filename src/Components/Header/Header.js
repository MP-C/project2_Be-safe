import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Header.css';
import logo from '../assets/Be-Safe-Logo.png';

export default function Header() {
    return (
        <div className="header_intro">
            <div className="header_text">
                <Popup
                    trigger={<button className="info-button"> ? </button>}
                    position="left top"
                >
                    <div>
                        This site alows you to consult any information about
                        COVID-19 statistics developpement around the world. It
                        uses outsourcing free API, to identify the lastest news
                        (total deaths, total recovered and total contaminations
                        confirmed).
                    </div>
                </Popup>
            </div>
            <div className="banner-container">
                <a className="logo" href="index.js">
                    <img className="logo-Be-Safe" src={logo} />
                </a>
            </div>
        </div>
    );
}
