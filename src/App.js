import React from 'react';
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

export default function App(){
  return (
    <div className="App">
      <div className="Container">
        <Cities />
        <Search />
        <h1>Porto</h1>
        <p>
          Last updated:
          <span> 📆 Sunday March 22, 2020</span>
          <span> ⏲ 01:34 </span>
        </p>
        <CurrentWeather />
        <ExtraInfo />
        <ForecastRow />
      </div>
      <Footer />
    </div>
  );
}

export default App;
