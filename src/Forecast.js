import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  function hours(){
    let date= new Date(props.data.dt*1000)
    let hours=date.getUTCHours()
    let realHours= parseInt(hours) + props.timezone
    if (realHours >= 24) {
      realHours= realHours -24;
    } else if (realHours < 0){
      realHours += 24;
    } else if (realHours === 0){
      realHours = `00`;
    } else if (realHours < 10) {
      realHours =`0${realHours}`;
    }
    return`${realHours}:00`
  }

  function temperatureMax(){
    let temperatureMax =Math.round(props.data.main.temp_max);
    return `${temperatureMax}`
  }
  function temperatureMin(){
    let temperatureMin =Math.round(props.data.main.temp_min);
    return `${temperatureMin}`
  }
  if (props.unit === "celsius"){
  return (
    <div className="Forecast col">
      <small>
        {hours()}
      </small>
      <div className="ForecastIcon">
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
  }else{
    return (
      <div className="Forecast col">
        <small>
          {hours()}
        </small>
        <div className="ForecastIcon">
          <WeatherIcon code={props.data.weather[0].icon}/>
        </div>
        <div>
          <strong>
           <span>{Math.round(temperatureMax()* 9/5 + 32)}°</span>
          </strong>
          {" "}
          <span>{Math.round(temperatureMin()* 9/5 + 32)}°</span>
        </div>
      </div>
    );
  }
}
