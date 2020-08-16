import React,{useState} from "react";
import FormattedTime from "./FormattedTime";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import ForecastRow from "./ForecastRow";
import Action from "./Action";
import axios from "axios";
import Loader from 'react-loader-spinner';

import "./WeatherTemperature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData]=useState({show:false});
  const [city,setCity]=useState(props.defaultCity);
  const [day, setDay]=useState(null);
  const [hour, setHour]=useState({});
  const [minute, setMinute]=useState({});
  const [unit, setUnit]= useState ("celsius");

  function weatherResponse(response){
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
      lon:response.data.coord.lon,
      lat:response.data.coord.lat,
    });

    let lat= response.data.coord.lat;
    let lon= response.data.coord.lon;
    const apiKey="2705c3833e0eb8cc3d104831dddd5c14";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(timezoneResponse);
  }

  function timezoneResponse(response){
    let timeUrl=`https://worldtimeapi.org/api/timezone/`;
    axios.get(`${timeUrl}${response.data.timezone}`).then(showRealTime);
  }

  function showRealTime(response){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day= response.data.day_of_week;
    setDay(days[day]);
    let date= new Date();
    let hours= date.getUTCHours();
    let inte= parseInt(hours);
    let offset= parseInt(response.data.utc_offset);
    let realHours= inte+offset;
    if (realHours >= 24) {
      realHours= realHours -24;
    } else if (realHours < 0){
      realHours += 24;
    } else if (realHours === 0){
      realHours = `00`;
    } else if (realHours < 10) {
      realHours =`0${realHours}`;
    }
    setHour({
      display: realHours});
    let minute= date.getMinutes();
    let rawOffset= response.data.raw_offset/3600;
    if (!Number.isInteger(rawOffset)){
      minute=minute+30;
    }
    if (minute === 0){
      minute=`00`
    }else if (minute < 10){
      minute= `0${minute}`;
    }else if (minute > 60){
      minute= minute - 60;
    }
    setMinute({
      display: minute});
  }

  function search(){
    const apiKey="2705c3833e0eb8cc3d104831dddd5c14";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherResponse);
  }

  function showPosition(){
  navigator.geolocation.getCurrentPosition(retrievePosition);
  function retrievePosition(position){
    let lat= position.coords.latitude;
    let lon= position.coords.longitude;
    let apiKey=`2705c3833e0eb8cc3d104831dddd5c14`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherResponse);
    
    const apiKey1="7737326ac32c895e8c1798d8346e99e9";
    let apiUrl1=`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.lat}&lon=${weatherData.lon}&appid=${apiKey1}&units=metric`;
    axios.get(apiUrl1).then(timezoneResponse);
  }
}

  function handleSearch(event){
    event.preventDefault();
    search();
  }

  function getCity(event){
    setCity(event.target.value);
  }

  function handlePosition(event){
    event.preventDefault();
    showPosition();
  }
  
  function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
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
            <button className="now" onClick={handlePosition}>
            <FontAwesomeIcon icon="map-marker-alt" size="lg" />
            </button>
          </span>
        </div>
      </form>
      <div className="top">
      <h1>{weatherData.city} <small>in</small> {weatherData.country}</h1> 
        <div className="row">
        <div className="col"></div>
        <div className="col-6">
        <div>
          "Live in the moment"<FormattedTime day={day} realHour={hour.display} min={minute.display}/>
        </div>
        </div>
        <div className="col">
            <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={convertToCelsius}>°C</Button>
            <Button variant="secondary" onClick={convertToFahrenheit}>°F</Button>
            </ButtonGroup>
        </div>
        </div>
      </div>
      <h2>
        <div className="row">
          <span className="col-6">
            <span className="weatherCondition"> {weatherData.description} </span>
            <span><WeatherTemperature celsius={weatherData.temperature} unit={unit}/></span>
            <span><WeatherIcon code={weatherData.icon}/></span>
            <h4 className="ExtraInfo">
            <FontAwesomeIcon icon="tint" size="lg" /> Humidity: {weatherData.humidity}%
            <div> <FontAwesomeIcon icon="wind" size="lg" /> Wind: {weatherData.wind} km/h</div>
            </h4>
          </span>
          <span className="col-6">
            <FontAwesomeIcon icon="thermometer-half" size="lg" /> Real feel: 
           <span>
            <WeatherTemperature celsius={weatherData.feelTemperature} unit={unit} />
            <Action temperature={weatherData.feelTemperature}/>
           </span>
          </span>
        </div>
      </h2>
      <p>
        "Plan for the future"
      </p>
      <ForecastRow location={weatherData.city} unit={unit}/>
    </div>
  );
  }else{
    search();
    return(
      <Loader
         type="Puff"
         color="#DDFEFE"
         height={100}
         width={100}
         timeout={10000}
      />
     );
  }
}
