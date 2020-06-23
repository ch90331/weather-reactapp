import React from "react";
import Cities from "./Cities";
import CurrentWeather from "./CurrentWeather";
import ExtraInfo from "./ExtraInfo";
import Search from "./Search";
import ForecastRow from "./ForecastRow";
import Footer from "./Footer";

import "./App.css";
import "./Cities.css";
import "./Search.css";
import "./CurrentWeather.css";
import "./ExtraInfo.css";
import "./Forecast.css";
import "./Footer.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App(){
  
  return (
    <div className="App">
      <div className="Container">
        <Cities />
        <Search />
        <CurrentWeather defaultCity="Taipei"/>
        <ExtraInfo defaultCity="Taipei"/>
        <ForecastRow />
      </div>
      <Footer />
    </div>
  );
}

export default App;
