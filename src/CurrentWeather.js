import React,{useState} from "react";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import ForecastRow from "./ForecastRow";
import Action from "./Action";
import axios from "axios";

import "./WeatherTemperature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function CurrentWeather(props) {
  const [weatherData, setWeatherData]=useState({show:false});
  const [city,setCity]=useState(props.defaultCity);
  function weatherResponse(response){
    console.log(response.data)
    setWeatherData({
      show: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelTemperature: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt*1000),
      icon: response.data.weather[0].icon,
      timeZone: response.data.timezone,
    });
  }

  function search(){
    const apiKey="2705c3833e0eb8cc3d104831dddd5c14";
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherResponse);

  }

  function handleSearch(event){
    event.preventDefault();
    search();
  }

  function getCity(event){
    setCity(event.target.value);
  }

  if (weatherData.show){
  return (
    <div className="CurrentWeather">
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <input
            type="text"
            id="form-text"
            placeholder="🔎 Enter a city"
            className="Enter"
            onChange={getCity}
          />
          <input type="submit" value="GO" className="go" />
          <span>
            <button className="now" id="currentLocation">
              Localize
            </button>
          </span>
        </div>
      </form>
      <div className="top">
      <h1>{weatherData.city} <small>in</small> {weatherData.country}</h1> 
        <p>
          <FormattedTime date={weatherData.date} location={weatherData.city}/>
        </p>
      </div>
      <h2>
        <div className="row">
          <span className="col-6">
            <span className="weatherCondition"> {weatherData.description} </span>
            <span><WeatherTemperature celcius={weatherData.temperature}/></span>
            <span><WeatherIcon code={weatherData.icon}/></span>
          </span>
          <span className="col-6">
            <FontAwesomeIcon icon="thermometer-half" size="lg" /> Real feel: 
           <span>
            <WeatherTemperature celcius={weatherData.feelTemperature} />
            <Action temperature={weatherData.feelTemperature} />
           </span>
          </span>
        </div>
      </h2>
      <div className="ExtraInfo">
      <FontAwesomeIcon icon="tint" size="lg" /> Humidity: {weatherData.humidity}%
      <div> <FontAwesomeIcon icon="wind" size="lg" /> Wind: {weatherData.wind} km/h</div>
      </div>
      <ForecastRow location={weatherData.city}/>
    </div>
  );
  }else{
    search();
    return"Loading....";
  }
}
