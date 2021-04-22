import React from 'react';
import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header';
import Map from './Components/Map';
import Footer from './Components/footer';

  export default function App() {

  return (
    <div>
      <div className="App">
        <Body />
      </div>
      <div>
        <Header />
        <Map />
        <Footer />
      </div>
    </div>
  );
  }