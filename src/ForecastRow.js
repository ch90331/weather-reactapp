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

  if(show && props.location === forecast.city.name){
    return (
      <div className="ForecastRow row">
        <Forecast timezone={props.timezone} data={forecast.list[0]} unit={props.unit}/>
        <Forecast timezone={props.timezone} data={forecast.list[1]} unit={props.unit}/>
        <Forecast timezone={props.timezone} data={forecast.list[2]} unit={props.unit}/>
        <Forecast timezone={props.timezone} data={forecast.list[3]} unit={props.unit}/>
        <Forecast timezone={props.timezone} data={forecast.list[4]} unit={props.unit}/>
        <Forecast timezone={props.timezone} data={forecast.list[5]} unit={props.unit}/>
      </div>
    );
  }else{
  const apiKey="2705c3833e0eb8cc3d104831dddd5c14";
  let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.location}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);

  return null;
  }
}



