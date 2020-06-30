import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  function hours(){
    let date= new Date(props.data.dt*1000)
    let hours=date.getHours()
    return`${hours}:00`
  }

  function temperatureMax(){
    let temperatureMax =Math.round(props.data.main.temp_max);
    return `${temperatureMax}`
  }
  function temperatureMin(){
    let temperatureMin =Math.round(props.data.main.temp_min);
    return `${temperatureMin}`
  }

  return (
    <div className="Forecast col">
      <small>
        {hours()}
      </small>
      <div>
        <WeatherIcon code={props.data.weather[0].icon}/>
      </div>
      <div>
        <strong>
         <span>{temperatureMax()}°</span>
        </strong>
        <span>{temperatureMin()}°</span>
      </div>
    </div>
  );
}
