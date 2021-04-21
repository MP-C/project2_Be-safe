import React from "react";
import Header from "./Components/Header";
import Geoloc from "./Components/Geoloc";
import Map from "./Components/Map";

import "./App.css";


function App() {
  return (
    <div>
      <Header />
      <Geoloc />
      <Map />
    </div>
  );
}

export default App;
