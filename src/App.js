import React from "react";
import Cities from "./Cities";
import CurrentWeather from "./CurrentWeather";
import "./FontAwesomeIcon";
import Footer from "./Footer";

import "./App.css";
import "./Cities.css";
import "./CurrentWeather.css";
import "./Forecast.css";
import "./Footer.css";

import "bootstrap/dist/css/bootstrap.min.css";


function App(){
  
  return (
    <div className="App">
      <div className="Container">
        <Cities />
        <CurrentWeather defaultCity="Taipei"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
