import React,{useState} from "react";
import axios from "axios";

export default function ExtraInfo(prop) {
  const [weatherData, setWeatherData]=useState({show:false});
  function weatherResponse(response){
    console.log(response.data)
    setWeatherData({
      show: true,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.show){
  return (
    <div className="ExtraInfo">
      💧 Humidity: {weatherData.humidity}%
      <div> 🌬 Wind: {weatherData.wind} km/h</div>
    </div>
  );
  }else{
    const apiKey="2705c3833e0eb8cc3d104831dddd5c14";
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${prop.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherResponse);

    return"Loading....";
  }
}