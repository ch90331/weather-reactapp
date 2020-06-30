import React,{useState} from "react";
import Forecast from "./Forecast";
import axios from "axios";

export default function ForecastRow(props) {
  const [show,setShow]=useState(false);
  const [forecast,setForecast]=useState(null);

  function showForecast(response){
    setForecast(response.data)
    setShow(true);
    ;
  }

  if(show){
    return (
      <div className="ForecastRow row">
        <Forecast data={forecast.list[0]} />
        <Forecast data={forecast.list[1]} />
        <Forecast data={forecast.list[2]} />
        <Forecast data={forecast.list[3]} />
        <Forecast data={forecast.list[4]} />
        <Forecast data={forecast.list[5]} />
      </div>
    );
  }else{
  const apiKey="2705c3833e0eb8cc3d104831dddd5c14";
  let apiUrl=`http://api.openweathermap.org/data/2.5/forecast?q=${props.location}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);

  return null;
  }
}



