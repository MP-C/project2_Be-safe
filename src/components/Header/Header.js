import React from 'react';

import './Header.css';

import logo from '../assets/Be-Safe-Logo.png';

export default function Header() {
    return (
        <div className="banner-container">
            <a className="logo" href="index.js">
                <img className="logo-Be-Safe" src={logo} />
            </a>

            <a href="index.js">
                <h1>Statistiques Mesures Covid</h1>
            </a>
        </div>
    );
}
